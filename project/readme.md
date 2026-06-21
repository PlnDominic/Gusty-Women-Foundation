# Gutsy Women Foundation — Design System

**Gutsy Women Foundation (GWF)** is a Ghana-based NGO "leveling the playing field" for young women — running mentorship masterclasses, bootcamps, training and networking programmes that move participants *from dreaming to building*. The flagship is the **Mentorship Program Masterclass — Cohort 2** ("Ignite • Build • Scale: Turning Dreams Into Reality", 5–7 August 2026, Yota East, Legon).

This design system captures GWF's bold, warm, empowering brand — deep purple, gold and magenta, big condensed display type, pill capsules and soft squircle photo cards — and packages it as tokens, components and a website UI kit.

- Website: `www.gutsywomenfoundation.org`
- Contact: `gutsywomenfoundation@gmail.com`
- Socials: Facebook, X, Instagram, TikTok, LinkedIn — handle **@GutsyWomenFoundation**

---

## Sources used

- **GitHub repo:** `PlnDominic/Gusty-Women-Foundation` — https://github.com/PlnDominic/Gusty-Women-Foundation
  At build time this repo had **no committed code** (empty default branch), so the system was derived from the written brand spec + the two event flyers. If the repo is later populated, re-import it (`github_get_tree` → `github_import_files`) and reconcile tokens/components against the real Next.js source for higher fidelity.
- **Flyers (uploads/1.jpeg, uploads/2.jpeg):** the Cohort 2 masterclass flyers — primary visual reference for color, type, capsule shapes, squircle photo framing and logo lockup. Cropped assets live in `assets/`.
- **Brand spec:** the supplied Next.js website design prompt (colors, typography, page/section list, component notes).

---

## Index / manifest

- `styles.css` — entry point (imports only). Consumers link this.
- `tokens/` — `colors.css`, `typography.css`, `spacing.css`, `fonts.css`.
- `assets/` — logo lockup, event photos, flyer art (see ICONOGRAPHY).
- `components/` — reusable React primitives: `Button`, `Badge`, `Capsule`, `StatCard`, `ProgramCard`, `Input`, `SectionHeading`. Each has `.jsx` + `.d.ts` + `.prompt.md` + a `@dsCard` thumbnail.
- `ui_kits/website/` — high-fidelity click-through recreation of the GWF marketing site (`index.html` + screen JSX).
- `guidelines/` — foundation specimen cards (Type, Colors, Spacing, Brand) shown in the Design System tab.
- `guidelines/` — foundation specimen cards (Type, Colors, Spacing, Brand).
- `SKILL.md` — Agent-Skill manifest for downloading into Claude Code.

### Components
- `components/core/`: **Button** (pill CTA, 7 variants), **Capsule** (date/time/location chips), **Badge** (status), **Input** (form field + textarea), **SectionHeading** (eyebrow + display title + gold swoosh).
- `components/patterns/`: **StatCard** (animated impact counter), **ProgramCard** (programme card with photo, status, CTA).

### UI kits
- `ui_kits/website/` — full marketing-site recreation: sticky nav, hero, impact strip, featured Cohort 2 programme, four pillars, testimonials carousel, partners, newsletter, footer, and a 4-step apply flow with success screen.

---

## CONTENT FUNDAMENTALS

**Voice:** bold, warm, empowering, action-forward. GWF speaks like a confident mentor to an ambitious young woman — never corporate, never pitying.

- **Person:** addresses the participant as **"you"** ("…is for young women ready to move beyond dreaming and start building"). Speaks of the org as **"we"** ("We Are Open").
- **Casing:** display headlines are **UPPERCASE** and condensed ("GUTSY WOMEN", "MASTERCLASS", "APPLY NOW!"). Body copy is sentence case. Eyebrows/labels are uppercase with wide tracking ("THEME:", "FOLLOW US").
- **Verbs first, momentum words:** *Ignite • Build • Scale*, *Apply Now*, *Learn More*, *Turning Dreams Into Reality*. Triads and bullet-separated rallying phrases (`•`) are a signature.
- **Punchy fragments over full sentences** in hero/marketing contexts; clear complete sentences in body/About.
- **Concrete specifics** build trust: exact dates ("5th–7th August 2026"), time ("8:00AM each day"), place ("Yota East, Legon").
- **Tagline:** *"Leveling the Playing Field"* — always title/sentence case, often as a quiet sub-line under the logo.
- **Emoji:** not used in brand copy. Iconography carries that load (location pin, social glyphs). Bullet character `•` is used as a separator motif.
- **Tone for donors/partners:** still warm but adds outcomes and credibility (cohorts run, women empowered, partners) — see StatCard copy.

Example microcopy:
- CTA primary: **Apply Now** · secondary: **Learn More**
- Stat labels: **Cohorts Run**, **Women Empowered**, **Partners**
- Section eyebrow: **WHAT WE DO** → pillars *Mentorship · Training · Networking · Leadership*

---

## VISUAL FOUNDATIONS

**Overall vibe:** energetic, celebratory, premium-NGO. High-contrast purple fields punched with gold and magenta; large condensed type; rounded, friendly geometry.

- **Color:** deep purple `#5B2D8E` is the anchor and most common large field (often deepened toward `#2E1247` in gradients on hero/footer). Gold `#F5C518` is the spark — underline swooshes, key words, small accents (used sparingly, never large fills). Magenta `#C2185B` is the secondary pop, used on one word or a single capsule. White and light lavender `#F3EEFF` are the breathing-room backgrounds for content sections. Charcoal `#1A1A2E` for text.
- **Type:** Montserrat ExtraBold/Black for everything display — tight leading (0.98–1.06), uppercase, occasionally italic for energy ("We Are Open" script feel). Inter for body and UI at comfortable 1.55–1.6 line-height. Strong size contrast between huge headlines and small calm body.
- **Backgrounds:** two modes — (1) **light** sections on white / lavender with charcoal type; (2) **bold** sections on a purple gradient with white type and photo cards. Real event photography (warm indoor light, lanyards, red GWF tees) over invented imagery. No stocky gradients-for-gradient's-sake; gradients are purple→deep-purple only, directional, behind content.
- **Capsules & pills:** the signature shape. Buttons, badges, date/time/location chips are all `border-radius: 9999px`. Solid purple capsules with white text; outlined capsules on photos; gold or magenta capsules for emphasis.
- **Photo framing:** **squircle / large-radius rounded rectangles** (`--radius-xl` ≈ 32px) with soft shadow — never hard rectangles. Photos often slightly tilted/overlapped on hero compositions.
- **Cards:** white surface, generous radius (14–22px), soft purple-tinted shadow (`--shadow-md`), subtle hairline or a thin purple/gold left or top accent. Hover **lifts** (translateY -4px) and deepens shadow. (The brand's "left-border accent" note is honored as a *thin* accent, paired with real shadow + rounding — not a flat colored stripe.)
- **Gold underline swoosh:** a hand-drawn-style gold stroke under key headlines ("GUTSY WOMEN"). Recreate as a thick gold underline / brush element, not a straight rule.
- **Dividers:** soft wave / diagonal SVG cuts in lavender between light and bold sections.
- **Borders & radius:** hairlines `--border-subtle` (#E7E0F2) on lavender; pills fully round; cards 14–32px.
- **Shadows:** soft, purple-tinted, never harsh black. `--shadow-md` for cards, `--shadow-pop` for cards floating on purple.
- **Motion:** confident and quick. Entrance fades + small rise (12–16px), counters that count up on the stat strip, hover lifts. Easing `cubic-bezier(0.22,1,0.36,1)` (ease-out) at 200–240ms. No bounce, no infinite decorative loops.
- **Hover/press:** buttons darken (purple→`--gwf-purple-700`) and lift slightly on hover; press settles back / scales 0.98. Links shift to gold. Outlined buttons fill on hover.
- **Transparency/blur:** sticky white navbar uses light translucency + slight blur on scroll; photo overlays use a purple-to-transparent protection gradient so white text stays legible.
- **Imagery vibe:** warm, candid, full-color, real Ghanaian young women at events — energetic and authentic, not cool/desaturated.

---

## ICONOGRAPHY

- **Logo:** circular emblem — an abstract leaf/figure mark beside the "GUTSY WOMEN FOUNDATION" wordmark with the tagline "leveling the playing field". Canonical crop: `assets/logo-lockup.png` (low-res from flyer; **request a clean vector/PNG** — see caveats).
- **Icon style:** thin-to-medium line icons, rounded caps — matches the friendly geometry. The system uses **Lucide** (CDN) as the icon set: rounded line icons at ~2px stroke. Pillars (Mentorship/Training/Networking/Leadership), location pin, mail, calendar, clock, arrow-right, and social glyphs all come from Lucide. Swap to GWF's own set if the repo later provides one.
- **Social icons:** Facebook, X, Instagram, TikTok, LinkedIn — rendered as Lucide / simple-icons line glyphs in a horizontal row ("FOLLOW US").
- **Bullet motif:** `•` separator between rallying words (Ignite • Build • Scale).
- **Emoji:** not used.
- No hand-drawn/illustrated icon sets observed; do not invent decorative SVG illustrations beyond the gold swoosh and wave dividers.

---

## CAVEATS

- The GitHub repo was **empty** at build time — tokens/components are derived from the spec + flyers, not real product code. Reconcile when source lands.
- **Fonts** use Google Fonts CDN (Montserrat + Inter) exactly per spec — no substitution needed, but no self-hosted binaries are bundled.
- **Logo** is a low-resolution crop from a flyer (grayscale on white). Please supply a clean logo file (vector preferred, plus a white-on-purple version).
- Event photos are low-res flyer crops used as placeholders; supply hi-res originals for production.
