# Artist Portfolio — Quiet Editorial Site

A calm, gallery-like portfolio for a visual artist. No shop, no cart, no prices. Artwork dominates; text is restrained and poetic. Romanian default copy, structured for later EN.

## Design system

- Background: warm ivory `#F7F3EC`, soft beige `#EFE8DD`, muted stone `#C9C1B5`, charcoal `#2A2724`.
- Accent: muted sage/petrol `#5E7168`, terracotta `#A9694F` in tiny details only.
- Type: editorial serif for titles (Cormorant Garamond), understated sans for nav/metadata (Karla). Very large serif used selectively.
- No cards, shadows, gradients, or rounded SaaS UI. Thin hairline rules, big whitespace, occasional asymmetric grid offsets.
- Organic accents: hand-drawn SVG lines and imperfect circles, one or two handwritten words, subtle paper-grain texture overlay.

## Pages

**Home (`/`)**
1. Minimal header: `[NUME ARTIST]` left, nav right (Work, About, Fractal Drawing, Sessions, Journal, Contact), RO/EN toggle. Hamburger on mobile.
2. Hero: near-full-height artwork with one short line — "Arta ca mod de a fi prezent."
3. Manifesto: large editorial paragraph, generous margins.
4. Selected work: asymmetric editorial composition (large landscape, offset portrait, close-up detail, one full-width piece). Hover reveals title / year / medium as quiet metadata.
5. The four values: Prezență, Curiozitate, Frumusețe, Echilibru — staggered editorial rows, each with a tiny hand-drawn symbol and one short line. Not feature cards.
6. Artist / process: portrait plus process photographs (hands, paint, sketchbook, studio detail) with a short personal note.
7. Fractal drawing: intro plus link to the dedicated page.
8. Sessions: quiet invitation — "O invitație de a explora prin creație."
9. Closing full-width quote, then minimal footer (Instagram, email, location, copyright).

**Work (`/work`)** — editorial archive, light text-only category links (no filter panel). **Work detail (`/work/$slug`)** — title, year, medium, dimensions, short text, large images, detail crops, prev/next navigation.

**About (`/about`)** — personal narrative, philosophy, the four values, portraits and studio photography, placeholder sections for exhibitions/education. No invented biography.

**Fractal Drawing (`/fractal-drawing`)** — more experimental layout: overlapping images, drifting captions, examples and process photos.

**Sessions (`/sessions`)** — experience described first, single quiet contact link at the end. No booking UI.

**Journal (`/journal`)** and **Contact (`/contact`)** — simple editorial index and a minimal contact page so all nav links resolve.

## Interaction

Slow scroll reveals (fade + small translate), gentle parallax on hero and a few large images, 2–4% image zoom on hover, soft link underlines. Nothing flashy; respects reduced-motion.

## Technical notes

- TanStack Start file routes under `src/routes`; head() metadata per route.
- Tokens in `src/styles.css` (oklch), fonts via `<link>` in `__root.tsx`.
- Artwork/photography generated as placeholder images into `src/assets`, imported directly.
- Content lives in typed data modules (`src/content/*.ts`) with copy keyed for future RO/EN; a small language context drives the RO/EN toggle with RO as default.
- Scroll reveal via a shared `useReveal` intersection-observer hook, no heavy animation library.
