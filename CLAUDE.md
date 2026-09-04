# Claude workflow — MATH 13 course notes (PreTeXt book)

This repo is the MATH 13 (Multivariable Calculus, SCU) course-notes book,
published to https://mahmadi-ops.github.io/M13-Mehdi/ by the GitHub Action on
every push to `main`. Page filenames on the site come from the `xml:id` of
each chunked division (e.g. `section-conics.html`).

Do **not** reorganize the book: no renaming files, no moving sections, no
changing `publication/`, `project.ptx`, or the chapter order in
`source/main.ptx` beyond what the workflows below require (adding or
uncommenting a single `<xi:include>`).

Its companion repos:

- `mahmadi-ops/MATH13-Syllabus-Fall2026` (the syllabus). Posting actions
  do not touch it — its posted-materials table was removed at the
  instructor's request (Sep 2026).
- `mahmadi-ops/M13-Skeletal-Notes` (published at
  https://mahmadi-ops.github.io/M13-Skeletal-Notes/). **Assignments,
  solutions, review problem sets, and skeletal (fill-in) notes are posted
  from that repo, not this one.** This repo posts only the completed
  lecture notes. See that repo's `CLAUDE.md` for its posting rules.

If a companion repo is not available in the session, add it (`add_repo`)
or, failing that, give the instructor the exact change to paste.

## The Posting Desk (click-to-post panel)

The instructor has a private control-panel artifact, the **Posting Desk**:
https://claude.ai/code/artifact/806060e5-7cc7-41fe-bee1-014bc1fbc2aa

Buttons on it either run instantly through the instructor's GitHub
connection (see "The instant path" below) or queue a request on the panel;
the instructor then says "check the posting desk" in a Claude chat. (The
hourly Routine that used to sweep the panel is disabled at the
instructor's request.) When asked to check the desk:

1. Read the artifact (Artifact tool, `action: "read"`). Its
   `<script id="state">` block holds JSON with `requests[]`; act on every
   request whose `status` is `"sent"`. Requests carry a `payload.repo`
   naming which repo they act on (`M13-Mehdi` for completed notes;
   `M13-Skeletal-Notes` for skeletal notes, assignments, review sets, and
   solutions).
   - `kind: "notes"` (`key` = the topic key) → the Posting-notes workflow
     below, in the named repo. In M13-Skeletal-Notes, toggle the include
     with `scripts/desk_action.py <post-notes|unpost-notes> <key>` there
     (sections usually need their referencing assignments/review sets
     handled together — that is exactly why they queue).
   - `kind: "assignment"` (`payload.n`, `payload.due`, `payload.key`) →
     post the assignment worksheet in M13-Skeletal-Notes (toggle its
     include).
   - `kind: "lock"` (`payload.n`) → wrap that assignment's solutions in
     SOLUTION-LOCKED markers in M13-Skeletal-Notes (they are public by
     default there).
   - `kind: "release"` (`payload.n`) → the Releasing-solutions workflow,
     in M13-Skeletal-Notes.
   - `kind: "unpost-notes"`, `"unpost-assignment"`, `"relock"` → the
     Unposting workflows below, in the named repo.
   - `kind: "custom"` (`payload.text`) → the instructor's free-text
     instruction, if it is routine posting work; otherwise mark it
     `needs-input` and say why.
2. **Standing authorization**: the instructor chose "publish live
   immediately" for panel clicks, so commit panel-initiated changes
   directly to `main` in both repos (still validate first). This applies
   only to work a panel click requested — everything else follows the
   session's normal branch rules.
3. Never invent content: a request that needs material not in the repo
   (e.g. an assignment with no problem set in `source/`) is not posted —
   set its `status` to `"needs-input"` and a one-line `result` saying what
   to provide (the page shows it to the instructor).
4. Afterwards update the panel **on top of its current version** (re-read
   it just before publishing; keep requests that arrived meanwhile):
   set each handled request's `status` to `"done"` (with a short `result`),
   set the item's `posted`/`released` date (`YYYY-MM-DD`), prepend a `log`
   entry, and republish to the same URL with the markup otherwise
   unchanged and `<div id="app">` left empty (the page renders itself
   from state).
5. If nothing is pending, do nothing — no commits, no messages.

The sync goes both ways: after any posting done **outside** the panel
(a `/post-notes`, `/post-assignment`, or `/release-solutions` run from
chat), also update the panel's state — posted/released date and a log
entry — and republish it, so the desk always shows the true posting
history.

### The instant path (no Claude in the loop)

For mechanically safe items (marked `instant: true` in the panel state)
a Post/Unpost click does **not** create a request: the page commits a
small JSON request file into `desk-requests/` of the target repo (this
one for completed notes; M13-Skeletal-Notes for skeletal notes,
assignments and review sets) through the instructor's GitHub connection.
The repo's `desk-requests.yml` workflow applies the file with its
`scripts/desk_action.py` (toggles the include, wraps dependents with
`UNPOSTED-WITH topic="<key>"` markers, validates, commits to `main`,
bails cleanly to the queue if it cannot be done mechanically) and
re-runs the deploy. Claude only sees those clicks in the panel's log.
Keep each repo's topic map and the panel's lists in sync with its book;
items whose removal would break other live pages stay `instant: false`
and come through the request queue.

## The three routine workflows

Invocable as slash commands (see `.claude/skills/`), or by the instructor
just describing what happened in class:

1. **`/post-notes <topic>`** — the instructor covered a topic in class and
   wants the notes for it live on the site.
2. **`/post-assignment <n> due <date>`** — post an assignment's problem set:
   questions visible, solutions locked.
3. **`/release-solutions <n>`** — a due date has passed: unlock the
   solutions in the book.

## Posting notes

1. Find the topic's source file(s) in `source/` (grep by topic words and by
   Thomas' Calculus section number, e.g. `ch-12-5.ptx`). If the notes don't
   exist yet, the instructor must provide content — never invent
   mathematical notes.
2. Make the section reachable from `source/main.ptx`: uncomment its
   `<xi:include>` or add one in the position the instructor indicates. Ask
   if the placement is ambiguous.
3. **Skeletal rule**: any exercises inside notes pages keep only their
   `<statement>` (questions). Solutions must not go live with the notes —
   wrap them with the SOLUTION-LOCKED convention below. (The instructor
   hands out skeletal/fill-in notes in class; the posted page mirrors them
   plus the completed exposition.)
4. Validate and build (see "Validating a change"), commit, push to the
   session's designated branch. The page goes live at
   `https://mahmadi-ops.github.io/M13-Mehdi/<xml-id>.html`.

## Posting an assignment / releasing or locking solutions

**These now happen in `mahmadi-ops/M13-Skeletal-Notes`, not here** — the
ten assignment worksheets and four review problem sets live in that
book's Exercises chapter, one file each, included from its
`source/exercises.ptx`. Posting one is the include-toggle workflow above
run in that repo; the page is
`https://mahmadi-ops.github.io/M13-Skeletal-Notes/worksheet-assignment-<n>.html`
(assignments are due Fridays 11:59 PM; Wednesday in exam weeks 3, 6, 9).

Solutions in that book are **public by default** (its publication file
shows divisional solutions, folded behind a link — that is the design its
AI tutor assumes). Locking is opt-in: on a `lock` request, wrap that
assignment's `<solution>`/`<answer>`/`<hint>` blocks in SOLUTION-LOCKED
markers (convention below) in its `assignment-<n>-*.ptx`; `release`
after the due date deletes only the two marker lines; `relock` re-wraps.

This repo's own Chapter 5 is a copy of that book's **Assignments and
Review Problems** chapter (Sep 2026): `source/exercises.ptx` includes the
same fourteen worksheet files (`assignment-<n>-*.ptx`,
`review-problems-<n>.ptx`, pages `worksheet-assignment-<n>.html` and
`worksheet-review-problems-<n>.html`), with their cross-references
pointed at this book's section ids. The chapter and its worksheets are
shown unnumbered, exactly as in the skeletal book, by the rules at the
end of `assets/custom.css` (display-only; PreTeXt has no unnumbered
chapter). The assignment pages carry the same Socratic tutor widget
(`assets/custom.js`, `assets/gemini-tutor.html`). The old per-topic
`exercises-*.ptx` worksheets are gone. Two consequences: the desk's
`unpost-notes` for a topic here now takes down every assignment and
review set whose introduction links that topic (the script wraps them
`UNPOSTED-WITH` and restores them on repost); and any content change to
an assignment should be made in both books, or copied across from the
skeletal book, so the two stay identical. The skeletal rule below still
applies to anything posted here.

## Unposting (the reverse workflows)

Every desk action has an inverse; these are panel/instructor-initiated
only, never done on your own judgment.

- **Unpost notes** (`unpost-notes`, `key` = xml:id): comment out the
  section's `<xi:include>` where it lives (its chapter file, or
  `source/main.ptx`) as
  `<!-- UNPOSTED <xi:include href="..."/> UNPOSTED -->`, so reposting is
  just removing the wrapper. Then build: if still-included files hold
  `<xref>`s into the removed section (the exercises chapter often does),
  the build breaks — in that case also unpost the referencing exercise
  worksheet if it belongs to the same topic, and otherwise mark the
  request `needs-input` naming the conflicting file instead of forcing
  it. Finally set the desk state back (`posted: null`, `live: false`).
- **Unpost an assignment** (`unpost-assignment`, `payload.n`): same
  wrapper trick on the assignment's include in `source/exercises.ptx`;
  desk state `posted: null`, `live: false`.
- **Re-lock solutions** (`relock`, `payload.n`): re-wrap that
  assignment's `<solution>`/`<answer>`/`<hint>` blocks in SOLUTION-LOCKED
  markers (restore the original `assignment`/`due` attributes); desk
  state `solutions: "locked"`.

Validate and push exactly as for posting.

## The SOLUTION-LOCKED convention

A solution that must stay hidden until a due date passes is committed
commented-out with these exact markers on their own lines:

```xml
<exercise xml:id="a3-p2">
  <statement>
    <p> ... the question, always visible ... </p>
  </statement>
<!-- SOLUTION-LOCKED assignment="3" due="2026-10-09"
  <solution>
    <p> ... </p>
  </solution>
END SOLUTION-LOCKED -->
</exercise>
```

- `due` is the assignment's due date, `YYYY-MM-DD`.
- XML comments cannot contain `--`: never nest another comment (or any
  `--`) inside a locked block; strip inner comments before wrapping.
- Locking is per-block, so one file may hold released and locked solutions
  side by side.
- The Runestone target (`publication-runestone.ptx`) withholds all
  solutions regardless; this convention only governs the public web/PDF
  targets.

## Validating a change

Before any push:

1. Well-formedness of every touched file:
   `xmllint --noout source/<file>.ptx` (locked blocks are comments, so a
   malformed marker shows up here).
2. If the PreTeXt CLI is available (`pip install -r requirements.txt`),
   run `pretext build web` and confirm it succeeds; then confirm the target
   page exists in `output/web/` to get its exact filename. If the CLI
   can't be installed in the session, say so and derive the filename from
   the section's `xml:id` instead.
3. Never mark a solution released, or notes posted, on the desk before
   the corresponding push has actually been made.

## Gradescope PDFs (question-only assignment sheets)

`scripts/gradescope_pdfs.py` turns each `source/assignment-<n>-*.ptx`
worksheet into `gradescope/assignment-<n>-questions.pdf`: statements only
(no solutions, answers, hints or tutor feedback), math typeset by MathJax,
figures from `generated-assets/`, printed by headless Chromium. Re-run it
after editing an assignment (`--mathjax` takes a local `tex-svg.js` when
the CDN is unreachable) and commit the regenerated PDFs.
