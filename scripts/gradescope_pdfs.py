#!/usr/bin/env python3
"""Build question-only PDFs of the ten assignments, for uploading to Gradescope.

Each ``source/assignment-<n>-*.ptx`` worksheet is turned into a single
self-contained HTML page holding only the problem statements (solutions,
answers, hints and the tutor feedback are dropped), with the math typeset by
MathJax and the figures pulled from ``generated-assets/``.  Headless Chromium
then prints the page to ``gradescope/assignment-<n>-questions.pdf``.

    python3 scripts/gradescope_pdfs.py            # all ten
    python3 scripts/gradescope_pdfs.py 3 7        # just some
    python3 scripts/gradescope_pdfs.py --mathjax /path/to/tex-svg.js

MathJax is loaded from the CDN unless ``--mathjax`` points at a local copy of
``tex-svg.js`` (e.g. ``es5/tex-svg.js`` from the ``mathjax`` npm package).
Chromium is found through ``--chromium``, ``$CHROMIUM`` or the usual names.
"""

import argparse
import glob
import html
import os
import re
import shutil
import subprocess
import sys
import xml.etree.ElementTree as ET

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
SRC = os.path.join(ROOT, "source")
GEN = os.path.join(ROOT, "generated-assets")
OUT = os.path.join(ROOT, "gradescope")

XML_ID = "{http://www.w3.org/XML/1998/namespace}id"
PF = "{https://prefigure.org}"

COURSE = "MATH 13 &middot; Multivariable Calculus"

# Macros from the <docinfo> of source/main.ptx.
MACROS = {
    "deriv": [r"\displaystyle \frac{d#1}{d#2}", 2],
    "real": r"\mathbb{R}",
    "R": r"\mathbb{R}",
}

# Cross-references into the rest of the book, which a standalone PDF cannot
# follow.  Anything not listed here is resolved within the worksheet itself
# (problems and figures), and otherwise reported.
EXTERNAL_XREFS = {
    "example-hyp-arccosh": r"the example in the notes that computes \(\cosh^{-1}(x)\)",
    "eq-binomial-series": r"\((1+x)^m = 1 + \sum_{k=1}^{\infty} \binom{m}{k} x^k\)",
}


def die(msg):
    sys.exit("gradescope_pdfs: " + msg)


# ---------------------------------------------------------------- math ----

def tex(text):
    """PreTeXt math text -> TeX for MathJax (as HTML text content)."""
    text = text or ""
    text = text.replace(r"\amp", "&").replace(r"\lt", "<").replace(r"\gt", ">")
    return html.escape(text, quote=False)


def display_math(el):
    rows = el.findall("mrow")
    if rows:
        body = r" \\ ".join(tex(r.text) for r in rows)
        return r"<div class=\"math\">\[\begin{aligned}%s\end{aligned}\]</div>" % body
    return r"<div class=\"math\">\[%s\]</div>" % tex(el.text)


# ------------------------------------------------------------- markers ----

def ol_label(marker, i):
    """The label of item i (1-based) in an <ol marker="...">."""
    marker = marker or "1."
    m = re.match(r"^(\W*)([1aAiI])(\W*)$", marker)
    if not m:
        return "%d." % i
    pre, kind, post = m.groups()
    if kind == "1":
        s = str(i)
    elif kind in "aA":
        s = chr(ord(kind) + i - 1)
    else:
        romans = ["i", "ii", "iii", "iv", "v", "vi", "vii", "viii", "ix", "x", "xi", "xii"]
        s = romans[i - 1]
        if kind == "I":
            s = s.upper()
    return pre + s + post


# ------------------------------------------------------------ converter ----

class Worksheet:
    def __init__(self, path):
        self.path = path
        self.tree = ET.parse(path)
        self.root = self.tree.getroot()
        self.title = self.root.findtext("title")
        self.exercises = self.root.findall("exercise")
        self.problem_of = {}   # xml:id -> problem number
        self.figure_of = {}    # xml:id -> figure number
        self.nfig = 0
        for n, ex in enumerate(self.exercises, 1):
            if ex.get(XML_ID):
                self.problem_of[ex.get(XML_ID)] = n
        self.warnings = []

    # --- images -----------------------------------------------------------

    def image_src(self, image, figure):
        width = image.get("width", "100%")
        pf = image.find(PF + "prefigure")
        if pf is not None:
            label = pf.get("label")
            path = os.path.join(GEN, "prefigure", label + ".svg")
        else:
            li = image.find("latex-image")
            if li is None:
                self.warnings.append("image without prefigure/latex-image")
                return "", width
            iid = image.get(XML_ID)
            if iid:
                path = os.path.join(GEN, "latex-image", iid + ".svg")
            else:
                fid = figure.get(XML_ID) if figure is not None else None
                cands = sorted(glob.glob(os.path.join(GEN, "latex-image", "%s-*.svg" % fid)))
                if not cands:
                    self.warnings.append("no generated svg for latex-image in %s" % fid)
                    return "", width
                path = cands[0]
        if not os.path.exists(path):
            self.warnings.append("missing " + path)
            return "", width
        return "file://" + path, width

    # --- inline / block content ------------------------------------------

    def convert(self, el, figure=None):
        """HTML for the children (and tail-less content) of element `el`."""
        out = [html.escape(el.text or "", quote=False)] if el.text else []
        for ch in el:
            out.append(self.element(ch, figure))
            if ch.tail:
                out.append(html.escape(ch.tail, quote=False))
        return "".join(out)

    def element(self, el, figure=None):
        t = el.tag
        if t == "p":
            return "<p>%s</p>" % self.convert(el, figure)
        if t == "m":
            return r"\(%s\)" % tex(el.text)
        if t in ("md", "me", "mdn", "men"):
            return display_math(el)
        if t == "em":
            return "<em>%s</em>" % self.convert(el, figure)
        if t == "term":
            return "<b>%s</b>" % self.convert(el, figure)
        if t == "alert":
            return "<b>%s</b>" % self.convert(el, figure)
        if t == "q":
            return "&ldquo;%s&rdquo;" % self.convert(el, figure)
        if t == "c":
            return "<code>%s</code>" % self.convert(el, figure)
        if t == "degree":
            return "&deg;"
        if t == "dollar":
            return "$"
        if t == "mdash":
            return "&mdash;"
        if t == "ndash":
            return "&ndash;"
        if t == "nbsp":
            return "&nbsp;"
        if t == "ol":
            items = []
            for i, li in enumerate(el.findall("li"), 1):
                items.append('<div class="li"><span class="lbl">%s</span><div class="lb">%s</div></div>'
                             % (ol_label(el.get("marker"), i), self.convert(li, figure)))
            return '<div class="ol">%s</div>' % "".join(items)
        if t == "ul":
            items = ["<li>%s</li>" % self.convert(li, figure) for li in el.findall("li")]
            return "<ul>%s</ul>" % "".join(items)
        if t == "xref":
            return self.xref(el)
        if t == "figure":
            return self.figure(el)
        if t == "image":
            src, width = self.image_src(el, figure)
            if not src:
                return ""
            return '<div class="img"><img src="%s" style="width:%s"></div>' % (src, width)
        if t == "table":
            return self.table(el)
        if t in ("caption", "title", "description", "shortdescription", "idx"):
            return ""
        if t == "var":
            return '<span class="blank"></span>'
        if t == "url":
            return '<a href="%s">%s</a>' % (html.escape(el.get("href", "")),
                                             self.convert(el) or html.escape(el.get("href", "")))
        if t == "sidebyside":
            return '<div class="sbs">%s</div>' % "".join(
                '<div class="sbs-item">%s</div>' % self.element(ch, figure) for ch in el)
        self.warnings.append("unhandled element <%s>" % t)
        return self.convert(el, figure)

    def xref(self, el):
        ref = el.get("ref")
        if ref in self.problem_of:
            return "Problem %d" % self.problem_of[ref]
        if ref in self.figure_of:
            return "Figure %d" % self.figure_of[ref]
        if ref in EXTERNAL_XREFS:
            return EXTERNAL_XREFS[ref]
        self.warnings.append("unresolved xref to %s" % ref)
        return "the notes"

    def figure(self, el):
        n = self.figure_of[el.get(XML_ID) or id(el)]
        image = el.find("image")
        body = ""
        if image is not None:
            src, width = self.image_src(image, el)
            if src:
                body = '<img src="%s" style="width:%s">' % (src, width)
        cap = el.find("caption")
        caption = self.convert(cap) if cap is not None else ""
        return ('<figure><div class="img">%s</div>'
                '<figcaption><b>Figure %d.</b> %s</figcaption></figure>' % (body, n, caption))

    def table(self, el):
        tab = el.find("tabular")
        rows = []
        for r in tab.findall("row"):
            cells = []
            for c in r.findall("cell"):
                cls = []
                if c.get("right"):
                    cls.append("bR")
                if r.get("bottom"):
                    cls.append("bB")
                cells.append('<td class="%s">%s</td>' % (" ".join(cls), self.convert(c)))
            rows.append("<tr>%s</tr>" % "".join(cells))
        title = el.find("title")
        cap = ("<caption>%s</caption>" % self.convert(title)) if title is not None else ""
        return '<table class="tab">%s%s</table>' % (cap, "".join(rows))

    # --- exercises ---------------------------------------------------------

    def exercise_html(self, ex, n):
        # Number the figures first, so a reference to a figure placed later
        # in the same problem resolves.
        for part in ex.findall("introduction") + ex.findall("statement") + ex.findall("webwork/statement"):
            for fig in part.iter("figure"):
                self.nfig += 1
                self.figure_of[fig.get(XML_ID) or id(fig)] = self.nfig
        parts = []
        title = ex.find("title")
        heading = "Problem %d." % n
        if title is not None:
            heading += " <span class=\"ptitle\">%s</span>" % self.convert(title)
        parts.append('<div class="phead">%s</div>' % heading)
        intro = ex.find("introduction")
        if intro is not None:
            parts.append(self.convert(intro))
        st = ex.find("statement")
        if st is None:
            ww = ex.find("webwork")
            if ww is not None:
                st = ww.find("statement")
        if st is None:
            self.warnings.append("exercise %s has no statement" % ex.get(XML_ID))
        else:
            parts.append(self.convert(st))
        return '<section class="problem">%s</section>' % "".join(parts)

    def html(self, mathjax_src):
        problems = "".join(self.exercise_html(ex, n) for n, ex in enumerate(self.exercises, 1))
        macros = ", ".join(
            '%s: %s' % (k, ('["%s", %d]' % (v[0].replace("\\", "\\\\"), v[1])) if isinstance(v, list)
                        else '"%s"' % v.replace("\\", "\\\\"))
            for k, v in MACROS.items())
        return PAGE % dict(title=html.escape(self.title), course=COURSE,
                           problems=problems, mathjax=mathjax_src, macros=macros,
                           count=len(self.exercises))


PAGE = r"""<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="utf-8">
<title>%(title)s</title>
<style>
@page { size: letter; margin: 0.8in 0.85in 0.9in 0.85in; }
html { font-family: "Latin Modern Roman", "TeX Gyre Termes", "Times New Roman", "Liberation Serif", serif; }
body { margin: 0; font-size: 11.5pt; line-height: 1.38; color: #000; }
header { border-bottom: 1.5px solid #000; padding-bottom: 6pt; margin-bottom: 14pt; }
header .course { font-size: 10.5pt; letter-spacing: 0.02em; color: #333; }
header h1 { font-size: 20pt; margin: 2pt 0 6pt 0; font-weight: bold; }
header .idline { display: flex; gap: 2em; font-size: 11pt; margin-top: 8pt; }
header .idline span { flex: 1; border-bottom: 1px solid #000; padding-bottom: 2pt; }
header .note { font-size: 9.5pt; color: #444; margin-top: 6pt; }
section.problem { break-inside: avoid; page-break-inside: avoid; margin: 0 0 22pt 0; }
.phead { font-weight: bold; font-size: 12.5pt; margin-bottom: 4pt; }
.ptitle { font-weight: normal; font-style: italic; }
p { margin: 0 0 6pt 0; }
.math { margin: 4pt 0 6pt 0; overflow-x: auto; }
mjx-container[display="true"] { margin: 0 !important; }
.ol { margin: 2pt 0 4pt 0; }
.li { display: flex; align-items: baseline; margin: 2pt 0 4pt 0; }
.li .lbl { flex: 0 0 2.4em; text-align: right; padding-right: 0.7em; }
.li .lb { flex: 1; min-width: 0; }
.li .lb p:last-child { margin-bottom: 0; }
ul { margin: 2pt 0 4pt 1.4em; padding: 0; }
figure { margin: 6pt 0 8pt 0; text-align: center; break-inside: avoid; }
.img { text-align: center; }
.img img { max-width: 100%%; height: auto; }
figcaption { font-size: 10pt; margin-top: 3pt; text-align: left; }
table.tab { border-collapse: collapse; margin: 6pt auto 8pt auto; }
table.tab caption { font-size: 10pt; caption-side: top; margin-bottom: 3pt; }
table.tab td { padding: 3pt 10pt; text-align: center; border-top: 1px solid #000; }
table.tab tr:first-child td { border-top: 1.5px solid #000; }
table.tab td:first-child { border-left: 1.5px solid #000; }
table.tab td.bR { border-right: 1.5px solid #000; }
table.tab tr td.bB { border-bottom: 1.5px solid #000; }
table.tab tr:last-child td { border-bottom: 1px solid #000; }
.blank { display: inline-block; width: 3em; border-bottom: 1px solid #000; vertical-align: baseline; }
code { font-family: "DejaVu Sans Mono", monospace; font-size: 0.92em; }
</style>
<script>
window.MathJax = {
  tex: { macros: { %(macros)s }, tags: "none" },
  svg: { fontCache: "none", scale: 1.0 },
  startup: { typeset: true }
};
</script>
<script src="%(mathjax)s"></script>
</head>
<body>
<header>
  <div class="course">%(course)s</div>
  <h1>%(title)s</h1>
  <div class="idline"><span>Name:</span><span>Student ID:</span></div>
  <div class="note">%(count)d problems. Show all of your work.</div>
</header>
%(problems)s
</body>
</html>
"""


# ---------------------------------------------------------------- driver ----

def find_chromium(explicit):
    cands = [explicit, os.environ.get("CHROMIUM"), "/opt/pw-browsers/chromium",
             "chromium", "chromium-browser", "google-chrome", "chrome"]
    for c in cands:
        if not c:
            continue
        p = c if os.path.sep in c else shutil.which(c)
        if p and os.path.exists(p):
            return p
    die("no Chromium found; pass --chromium")


def worksheet_files():
    files = {}
    for f in glob.glob(os.path.join(SRC, "assignment-*-*.ptx")):
        m = re.match(r"assignment-(\d+)-", os.path.basename(f))
        if m:
            files[int(m.group(1))] = f
    return files


def main():
    ap = argparse.ArgumentParser(description=__doc__.split("\n")[0])
    ap.add_argument("numbers", nargs="*", type=int, help="assignment numbers (default: all)")
    ap.add_argument("--mathjax", default="https://cdn.jsdelivr.net/npm/mathjax@3.2.2/es5/tex-svg.js",
                    help="URL or local path of MathJax tex-svg.js")
    ap.add_argument("--chromium", help="path to the Chromium/Chrome binary")
    ap.add_argument("--out", default=OUT, help="output directory (default: gradescope/)")
    ap.add_argument("--keep-html", action="store_true", help="leave the intermediate HTML next to the PDF")
    args = ap.parse_args()

    files = worksheet_files()
    numbers = args.numbers or sorted(files)
    mathjax = args.mathjax
    if os.path.exists(mathjax):
        mathjax = "file://" + os.path.abspath(mathjax)
    chromium = find_chromium(args.chromium)
    os.makedirs(args.out, exist_ok=True)

    failed = False
    for n in numbers:
        if n not in files:
            print("no worksheet for assignment %d" % n)
            failed = True
            continue
        ws = Worksheet(files[n])
        page = ws.html(mathjax)
        base = os.path.join(args.out, "assignment-%d-questions" % n)
        with open(base + ".html", "w", encoding="utf-8") as fh:
            fh.write(page)
        cmd = [chromium, "--headless=new", "--no-sandbox", "--disable-gpu",
               "--run-all-compositor-stages-before-draw", "--virtual-time-budget=30000",
               "--no-pdf-header-footer", "--print-to-pdf=" + base + ".pdf",
               "file://" + base + ".html"]
        r = subprocess.run(cmd, capture_output=True, text=True)
        ok = r.returncode == 0 and os.path.exists(base + ".pdf")
        if not args.keep_html:
            os.remove(base + ".html")
        for w in ws.warnings:
            print("  warning (assignment %d): %s" % (n, w))
        if ok:
            print("assignment %d: %d problems -> %s" % (n, len(ws.exercises), os.path.relpath(base + ".pdf", ROOT)))
        else:
            print("assignment %d: Chromium failed\n%s" % (n, r.stderr[-2000:]))
            failed = True
    sys.exit(1 if failed else 0)


if __name__ == "__main__":
    main()
