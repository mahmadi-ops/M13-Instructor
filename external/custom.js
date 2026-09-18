/* ------------------------------------------------------------------ *
 * Print fallback for interactive PreFigure diagrams.
 *
 * Annotated PreFigure diagrams are embedded as an interactive "diagcess"
 * element whose SVG is injected by JavaScript at runtime, so it does not
 * render in the worksheet print / print-preview view. For each such diagram
 * we insert a static <img> (the non-diagcess SVG that PreFigure also
 * generates), hidden on screen and shown only in print (see custom.css).
 * ------------------------------------------------------------------ */
(function () {
  function addPrintFallbacks() {
    var els = document.querySelectorAll("div.ChemAccess-element[data-src]");
    els.forEach(function (el) {
      if (el.dataset.printFallbackAdded) return;
      var src = el.getAttribute("data-src");
      if (!src) return;
      var staticSrc = src.replace(/-diagcess\.svg$/, ".svg");
      if (staticSrc === src) return; // not a diagcess source; leave alone
      var img = document.createElement("img");
      img.src = staticSrc;
      img.alt = "";
      img.setAttribute("aria-hidden", "true");
      img.className = "prefigure-print-fallback";
      el.parentNode.insertBefore(img, el.nextSibling);
      el.dataset.printFallbackAdded = "1";
    });
  }

  /* ---------------------------------------------------------------- *
   * Render interactive PreFigure diagrams that arrive inside a knowl.
   *
   * Each page calls diagcess.Base.init() once, inline at the end of the
   * body, so diagcess only ever sees the ChemAccess elements present at
   * that moment. A figure revealed by clicking an <xref> link is fetched
   * afterwards by knowl.js, so its diagram never gets an SVG injected and
   * the reader is shown an empty box. Watch for these late arrivals and
   * initialize them.
   *
   * init() has no way to be scoped to a subtree: it reprocesses every
   * ChemAccess element in the document, re-rewriting the transformations
   * of SVGs that are already drawn. So for the duration of the call we
   * take the class off the elements diagcess has already claimed, leaving
   * only the new ones visible to it.
   * ---------------------------------------------------------------- */
  function initLateDiagrams() {
    if (typeof diagcess === "undefined" || !diagcess.Base || !diagcess.Base.molMap) return;

    var claimed = [];
    Object.keys(diagcess.Base.molMap).forEach(function (id) {
      var el = document.getElementById(id);
      if (el && el.classList.contains("ChemAccess-element")) {
        el.classList.remove("ChemAccess-element");
        claimed.push(el);
      }
    });

    var found = !!document.querySelector("div.ChemAccess-element");
    try {
      if (found) diagcess.Base.init();
    } finally {
      claimed.forEach(function (el) {
        el.classList.add("ChemAccess-element");
      });
    }
    if (found) addPrintFallbacks();
  }

  var pending = false;
  function scheduleLateDiagrams() {
    if (pending) return;
    pending = true;
    setTimeout(function () {
      pending = false;
      initLateDiagrams();
    }, 50);
  }

  function watchForLateDiagrams() {
    if (!window.MutationObserver) return;
    // diagcess appends a <div class="svg"> inside each element it draws, and
    // addPrintFallbacks appends an <img>; neither matches the selector below,
    // so handling a mutation cannot trigger another round.
    new MutationObserver(function (records) {
      for (var i = 0; i < records.length; i++) {
        var added = records[i].addedNodes;
        for (var j = 0; j < added.length; j++) {
          var node = added[j];
          if (node.nodeType !== 1) continue;
          if (
            (node.matches && node.matches("div.ChemAccess-element")) ||
            (node.querySelector && node.querySelector("div.ChemAccess-element"))
          ) {
            scheduleLateDiagrams();
            return;
          }
        }
      }
    }).observe(document.body, { childList: true, subtree: true });
  }

  function start() {
    addPrintFallbacks();
    watchForLateDiagrams();
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", start);
  } else {
    start();
  }
})();

/* ------------------------------------------------------------------ *
 * Let interactive iframes shrink to the reading column.
 *
 * PreTeXt writes a fixed pixel width and height into each interactive
 * iframe's inline style, so a 600px figure overflows the (narrower)
 * column and the reader has to scroll sideways to see all of it. Copy
 * that authored width:height onto the element as an aspect-ratio and tag
 * it, so custom.css can size it at 100% of the column with the shape the
 * figure was designed at. Re-runs for iframes that arrive inside knowls.
 * ------------------------------------------------------------------ */
(function () {
  function fitIframes(root) {
    var frames = (root || document).querySelectorAll(
      ".interactive-iframe-container iframe:not(.fits-column)"
    );
    frames.forEach(function (f) {
      var w = parseFloat(f.style.width), h = parseFloat(f.style.height);
      if (!w || !h) return;                     // not sized in px; leave alone
      f.style.aspectRatio = w + " / " + h;
      f.classList.add("fits-column");
    });
  }

  function start() {
    fitIframes(document);
    new MutationObserver(function () { fitIframes(document); })
      .observe(document.body, { childList: true, subtree: true });
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", start);
  } else {
    start();
  }
})();

/* ------------------------------------------------------------------ *
 * Floating Socratic AI tutor for the assignment pages.
 *
 * Ported from the MATH 14 book (mahmadi-ops/MATH-14, assets/custom.js),
 * where this widget is maintained, by way of the skeletal-notes book. On
 * each of the ten assignment pages (worksheet-assignment-1 ... -10) this
 * adds a chat bubble fixed to the
 * lower-right corner. Opening it loads external/gemini-tutor.html in a
 * panel that stays in place as the student scrolls. The page's exercise
 * STATEMENTS -- never the solutions, and never the answer-checking data
 * Runestone embeds in <script> tags -- are harvested before MathJax
 * typesets them, so the raw \( ... \) LaTeX is intact, and handed to the
 * tutor by postMessage so it knows every problem on the page.
 *
 * The four review problem sets (worksheet-review-problems-N) are left
 * alone on purpose: those are practice for the exams, where the student
 * is on their own.
 * ------------------------------------------------------------------ */
(function () {
  var page = window.location.pathname.split("/").pop() || "";
  if (page.indexOf("worksheet-assignment") !== 0) return;
  var articles = document.querySelectorAll("article.exercise");
  if (!articles.length) return;

  /* Solutions are shown in this book, inside a born-hidden knowl whose
   * content sits in the page. Strip every one of them (and the knowl
   * payloads) before anything is handed over: the tutor must not be able
   * to read the answer it is refusing to give. Answer <input> boxes have
   * no text content, so each is replaced by a visible "___" blank. */
  function clean(el) {
    var c = el.cloneNode(true);
    c.querySelectorAll(
      ".solutions, .solution, .hint, .answer, .autopermalink, .knowl-output, .hide-solutions-options, iframe, script, style"
    ).forEach(function (n) { n.remove(); });
    c.querySelectorAll("input").forEach(function (n) {
      n.replaceWith(document.createTextNode(" ___ "));
    });
    return c.textContent.replace(/\s+/g, " ").trim();
  }

  var exercises = [];
  articles.forEach(function (a) {
    var heading = a.querySelector(".heading");
    // A heading reads "7 ." or "5 . True or False.": the number and its
    // period are separate elements, so cleaning leaves a space between them.
    // Close that up, drop the trailing period, and where nothing but the
    // number is left -- most of this book's problems are untitled -- say
    // "Problem 7", since the tutor's picker shows the label out of context.
    var label = heading ? clean(heading) : "Problem";
    label = label.replace(/^(\d+)\s*\./, "$1.").replace(/\s*\.$/, "");
    if (/^\d+$/.test(label)) label = "Problem " + label;
    var body = a.cloneNode(true);
    var h = body.querySelector(".heading");
    if (h) h.remove();
    exercises.push({ label: label, text: clean(body) });
  });

  var sectionHeading = document.querySelector("section .heading .title");
  var context = {
    type: "math13-exercises",
    // The widget lives in an iframe, so its own location is the widget
    // file; tell it which page of the book it is serving.
    page: page,
    section: sectionHeading ? sectionHeading.textContent.trim() : document.title,
    exercises: exercises,
  };

  /* When a student is stuck on how to begin, the most useful thing the
   * tutor can do is send them to a worked example -- but it can only name
   * one if it knows which exist. The introduction at the top of each
   * assignment links the sections the assignment draws on, so read those
   * and hand the list of their examples over with the problems.
   *
   * This book chunks one level deeper than MATH 14 does: a section page
   * is a shell whose subsections each live on their own page, and that is
   * where the examples actually are. So the walk is two deep -- the linked
   * section page, then the subsection pages it lists -- and an example
   * found below a section is reported under that section's title, which
   * is how a student would look it up. Subsection pages here are named
   * both "sec-..." and "subsec-..." (the skeletal book uses "subsec-"
   * alone), so both prefixes count as children of a section. Everything
   * is same-origin and already linked from this page; anything that fails
   * is skipped, and the tutor then falls back to naming the section.
   */
  // A ceiling on the walk, not a design parameter: the fan-out is really
  // bounded by the book (a few linked sections, each with a handful of
  // subsections), and the heaviest assignment reaches about forty. This is
  // here so a future restructuring cannot turn one page load into a crawl.
  var MAX_FETCHES = 80;

  function harvestExamples(done) {
    var links = Array.prototype.slice.call(document.querySelectorAll(
      "section.introduction a.internal"
    )).filter(function (a) {
      var href = a.getAttribute("href") || "";
      return href && href.indexOf("#") !== 0 && /\.html$/.test(href);
    });
    if (!links.length || typeof fetch !== "function") return done([]);

    var found = [];
    var visited = {};
    var budget = MAX_FETCHES;
    var pending = 0;
    var finished = false;

    function settle() {
      if (finished || pending) return;
      finished = true;
      // Fetches finish in whatever order they finish; the tutor should see
      // them in the order the book presents them.
      found.sort(function (a, b) {
        return a.number.localeCompare(b.number, undefined, { numeric: true });
      });
      done(found);
    }

    // Which links on a fetched page are part of the division it presents,
    // as opposed to cross-references pointing off into the rest of the book.
    // A chapter shell lists its sections; a section shell lists its
    // subsections; a subsection page is the bottom, and every internal link
    // on it is a cross-reference, so the walk stops there. Keying this off
    // the page's own division class is what keeps the walk inside the
    // section the assignment actually linked -- following any "subsec-"
    // link found anywhere would drag in half the book, mislabelled.
    function childPrefixes(division) {
      if (!division) return [];
      if (division.classList.contains("chapter")) return ["sec-"];
      if (division.classList.contains("section")) return ["sec-", "subsec-"];
      return [];
    }

    // "section" is the human-readable name of the division the assignment's
    // introduction linked -- a section, or sometimes a whole chapter -- and
    // it is carried down as the walk descends, because that is the name a
    // student would look the example up under.
    function visit(href, section) {
      if (visited[href] || budget <= 0) return;
      visited[href] = true;
      budget--;
      pending++;
      fetch(href)
        .then(function (r) { return r.ok ? r.text() : ""; })
        .then(function (html) {
          if (!html) return;
          var doc = new DOMParser().parseFromString(html, "text/html");
          // Scope every query to <main>: the fetched page also carries the
          // whole book's table of contents in its sidebar, and querying the
          // document would walk all of it.
          var body = doc.querySelector("main") || doc;
          // Headings sit at whatever level the division nests to, so match
          // on the class rather than the tag. "example-like" is a family,
          // so carry the type across instead of assuming every one of them
          // is an Example.
          body.querySelectorAll(".example-like .heading").forEach(function (h) {
            var number = h.querySelector(".codenumber");
            var title = h.querySelector(".title");
            var type = h.querySelector(".type");
            if (!number) return;
            found.push({
              type: type ? type.textContent.trim() : "Example",
              number: number.textContent.trim(),
              title: title ? title.textContent.trim().replace(/\.\s*$/, "") : "",
              section: section,
            });
          });
          // Descend into the pages this one is the shell for.
          var prefixes = childPrefixes(body.querySelector(".ptx-content > section"));
          if (prefixes.length) {
            body.querySelectorAll("a.internal").forEach(function (a) {
              var next = a.getAttribute("href") || "";
              var isChild = prefixes.some(function (p) { return next.indexOf(p) === 0; });
              if (isChild && /\.html$/.test(next)) {
                visit(next, section);
              }
            });
          }
        })
        .catch(function () {})
        .then(function () {
          pending--;
          settle();
        });
    }

    links.forEach(function (link) {
      // The link's title attribute reads "Section 4.6: Extreme Values and
      // Saddle Points", which is exactly how a student would look it up.
      var section = link.getAttribute("title") || link.textContent.trim();
      visit(link.getAttribute("href"), section);
    });
    settle();   // nothing to wait for, if every link was a duplicate
  }

  /* Build the bubble + panel. */
  var fab = document.createElement("button");
  fab.id = "m13-tutor-fab";
  fab.type = "button";
  fab.setAttribute("aria-label", "Open the AI tutor");
  fab.innerHTML = "&#127891; Tutor";

  var panel = document.createElement("div");
  panel.id = "m13-tutor-panel";
  panel.setAttribute("role", "dialog");
  panel.setAttribute("aria-label", "Socratic AI tutor");
  panel.innerHTML =
    '<div id="m13-tutor-bar">' +
    "<span>Socratic tutor &mdash; hints, never answers</span>" +
    '<button type="button" id="m13-tutor-min" aria-label="Minimize">&#8211;</button>' +
    "</div>";
  var frame = null;

  // The examples arrive over the network, so the list may be ready before
  // or after the student opens the panel. Send whatever exists when the
  // widget loads, and send again if the list lands later; the widget keeps
  // the most recent context it is handed.
  var frameReady = false;
  function sendContext() {
    if (frameReady) frame.contentWindow.postMessage(context, "*");
  }
  harvestExamples(function (examples) {
    context.examples = examples;
    sendContext();
  });

  function openPanel() {
    if (!frame) {
      frame = document.createElement("iframe");
      frame.id = "m13-tutor-frame";
      frame.src = "external/gemini-tutor.html";
      frame.addEventListener("load", function () {
        frameReady = true;
        sendContext();
      });
      panel.appendChild(frame);
    }
    panel.classList.add("m13-open");
    fab.style.display = "none";
    try { localStorage.setItem("math13-tutor-open", "1"); } catch (e) {}
  }
  function closePanel() {
    panel.classList.remove("m13-open");
    fab.style.display = "";
    try { localStorage.setItem("math13-tutor-open", "0"); } catch (e) {}
  }

  fab.addEventListener("click", openPanel);
  panel.querySelector("#m13-tutor-min").addEventListener("click", closePanel);

  document.body.appendChild(fab);
  document.body.appendChild(panel);

  var wasOpen = false;
  try { wasOpen = localStorage.getItem("math13-tutor-open") === "1"; } catch (e) {}
  if (wasOpen) openPanel();

  // First visit only: pulse the button twice so new students notice it,
  // then never again on this browser.
  try {
    if (!wasOpen && !localStorage.getItem("math13-tutor-seen")) {
      localStorage.setItem("math13-tutor-seen", "1");
      setTimeout(function () {
        fab.classList.add("m13-pulse");
        fab.addEventListener("animationend", function () {
          fab.classList.remove("m13-pulse");
        }, { once: true });
      }, 900);
    }
  } catch (e) {}
})();
