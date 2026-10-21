# Design Principles

This file documents the design system behind this site so future changes stay
consistent instead of drifting page by page. If you're adding a page or
section, read this first — then reuse the classes already defined in
`styles.css` rather than writing new ones.

## 1. Philosophy

- **One font, many weights.** The whole site uses a single typeface
  (Space Grotesk). Hierarchy comes from `font-weight` and `letter-spacing`,
  never from mixing in a second typeface.
- **Column-based navigation.** Links out to projects, pages, and posts are
  grouped into categorized columns (a title + a short list of links), not a
  flat grid of cards. Every "where to find things" section on the site —
  the homepage's "Where to find me" and the blog's "From the blog" — uses
  the same column component.
- **Text first, no card chrome.** Links are plain rows (title + one-line
  description), not boxes with thumbnails, shadows, or hover-lift
  animations. Whitespace and typography carry the design, not imagery.
- **One accent color, used sparingly.** The site is black/white/gray by
  default. The accent color marks exactly three things: the active nav
  link, hover states on links, and small labels (eyebrows, column
  underlines). It is never used for large fills or backgrounds.
- **Original voice.** Avoid copying section names or sentence patterns from
  sites we take inspiration from (see the note in §6). Write copy that
  sounds like Juan, not like a template.

## 2. Color

Defined once in `styles.css` under `:root`:

| Variable | Value | Use |
|---|---|---|
| `--primary-color` | `#000000` | Body text, headings |
| `--secondary-color` | `#666666` | Descriptions, muted/secondary text |
| `--background-color` | `#ffffff` | Page background |
| `--hover-color` | `#f5f5f5` | Neutral chip backgrounds (e.g. status badges) |
| `--accent-color` | `#c1440e` (terracotta) | Active nav link, link hover, eyebrows, column underline |
| `--accent-soft` | `#fbece4` | Soft hover background behind a link item |

Never hardcode a hex value in a new rule — add it to `:root` if a new token
is genuinely needed, otherwise reuse one of the above.

## 3. Typography

- Font: **Space Grotesk**, loaded from Google Fonts with weights
  `300;400;500;600;700`. Every page's `<head>` must load it:
  ```html
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300;400;500;600;700&display=swap" rel="stylesheet">
  ```
- Fallback stack lives in `--font-sans` and is applied once, on `body`.
- Weight scale: `700` for headlines and section headings, `600` for
  sub-labels (column titles, link titles, status badges), `500` for nav
  links and taglines, `400` (default) for body copy.
- Tight letter-spacing (`-0.01em` to `-0.02em`) on large bold headings;
  wide letter-spacing (`0.04em`–`0.12em`) on small uppercase labels
  (eyebrows, column titles, status badges).

## 4. Layout components

All defined in `/styles.css` and shared across every page.

- **`.container`** — max-width 1200px, centered, `2rem` side padding.
  Every section's content sits inside one of these.
- **`.hero`** — centered intro block. Pattern: optional `.eyebrow` (small,
  uppercase, accent-colored) → `<h1>` (bold, the headline) → optional
  `.tagline` (medium weight, one sentence) → `.bio` (secondary color,
  supporting paragraph). Not every hero needs all four — the homepage uses
  eyebrow + h1 + tagline + bio, the blog uses eyebrow + h1 + bio.
- **`.links`** section — a gray (`#fafafa`) band with an `<h2>` heading and
  a `.link-columns` grid underneath. Use this for any "index of links"
  section (project links, blog posts by category, etc.).
- **`.link-columns`** — CSS grid, `repeat(auto-fit, minmax(200px, 1fr))`.
  Add `.is-compact` when a page only has 2–3 categories, so columns cap at
  320px wide instead of stretching to fill the row (see the blog page).
  Collapses to one column at ≤480px automatically.
- **`.link-column`** — one category: a `.column-title` (uppercase, accent
  underline) followed by a `<ul>` of `.link-item`s, divided by thin
  top-borders between items.
- **`.link-item`** — a title line (`.link-item-title`, with an optional
  trailing `.external-link` arrow `↗`) and a `.link-item-desc` line below
  it. On hover: soft accent background, title turns accent color, arrow
  nudges up-right.
- **`.status-badge`** — a small gray pill reading "Coming soon" (or
  similar) for anything not live yet. Pair it with `.is-upcoming` on the
  `.link-item` (see §5).
- **Nav** — `<nav><div class="container">` holding the logo (always
  `href="/"`) and a `.nav-links` block (`Home` / `Blog`, current page
  marked `class="active"`). The logo is sized with `clamp(60px, 9vw,
  100px)` so it scales fluidly instead of jumping at breakpoints.

## 5. The "coming soon" pattern

When a linked page has no real content yet (an empty stub), don't link to
it. Instead:

1. Change the `<a class="link-item">` to a `<div class="link-item
   is-upcoming" aria-disabled="true">`.
2. Replace the trailing `<span class="external-link">↗</span>` with
   `<span class="status-badge">Coming soon</span>`.

`.is-upcoming` dims the row and disables its hover state, so it visually
reads as inactive. Once the page is actually built, flip it back to a real
`<a href="...">` link with the arrow.

## 6. Content rules

- **Hero copy**: don't write "I'm X — a Y, Z and W" (that exact
  construction is what oliur.com's hero uses, and it's the kind of thing
  that makes a site read as a copy). Use the eyebrow + headline + tagline
  structure instead — it does the same job without the identical sentence
  shape.
- **Section headings**: name sections for what they actually do on *this*
  site ("Where to find me," "From the blog") rather than reusing generic
  headings pulled from reference sites ("Creating," "Posts").
- **Categorize, don't dump.** Any list of outbound links gets grouped into
  2+ named categories (by activity, topic, or type) rather than one flat
  list — that's the whole point of the column layout.

## 7. File map

- `/styles.css` — the global stylesheet. Every shared component above
  lives here. This is the only place color/font tokens are defined.
- `/index.html` — homepage. Hero + the "Where to find me" link columns
  (Building, Watch, Downloads, Read, Experiments).
- `/src/blog/index.html` — blog index. Hero + the "From the blog" link
  columns, grouped by post topic (e.g. Filmmaking, Photography). Reuses
  `/styles.css` only — it has no page-specific stylesheet.
- `/src/blog/blogposts/.../index.html` — individual post pages. These use
  their own stylesheet, `/src/css/blogposts.css`, for article typography
  (post header, body copy, author card). That file hasn't been folded into
  the shared system yet — if you redesign an individual post page, bring
  it in line with §2–§3 above (colors/fonts) at minimum.
- `/src/presets/`, `/src/wallpapers/`, `/src/ai-projects/` — empty stubs,
  linked from the homepage with the "coming soon" pattern (§5) until built.

## 8. Checklist for a new page or section

1. Load the Space Grotesk `<link>` tags in `<head>` (copy from an existing
   page — see §3).
2. Link only `/styles.css`. Add a page-specific stylesheet only if the
   page needs something genuinely new (like `blogposts.css` for article
   typography) — don't duplicate rules that already exist globally.
3. Build the nav from the existing markup (logo → `/`, `.nav-links` with
   `Home` / `Blog`, mark the current page `active`).
4. If the page has an intro, use the `.hero` pattern (§4).
5. If the page lists links/content, group them into named categories using
   `.links` + `.link-columns` + `.link-column` + `.link-item` (§4), adding
   `.is-compact` if there are only 2–3 categories.
6. Mark anything not yet live with the "coming soon" pattern (§5) instead
   of linking to a blank page.
