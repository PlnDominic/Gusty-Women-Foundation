# Website UI Kit — Gutsy Women Foundation

A high-fidelity, click-through recreation of the GWF marketing site. Open `index.html`.

## What's interactive
- **Sticky navbar** — links highlight on hover (gold) and active; turns translucent + blurred on scroll. Mobile (<860px) collapses to a hamburger → full-screen purple overlay.
- **Hero** — "Leveling the Playing Field" with gold/outline CTAs and a tilted squircle photo cluster. *Apply Now* opens the application; *Learn More* scrolls to the featured programme.
- **Impact strip** — three `StatCard`s with count-up animation.
- **Featured programme** — Cohort 2 masterclass card with date/time/location facts and the real flyer image.
- **What We Do** — four pillar cards (Mentorship, Training, Networking, Leadership) that lift on hover.
- **Testimonials** — carousel with prev/next + dots.
- **Partners**, **Newsletter** (working subscribe state), and a full **Footer** with socials + contact.
- **Apply flow** — 4-step form (Personal → Background → Motivation → Review) with a gold progress bar, editable review, and a success screen with share buttons.

## Composition
The kit composes the design-system primitives from `_ds_bundle.js` (`Button`, `Capsule`, `Badge`, `Input`, `StatCard`, `SectionHeading`) — it does not re-implement them.

## Files
- `index.html` — entry; loads React + Babel + `_ds_bundle.js`, then the screen scripts in order.
- `Icon.jsx` — inlined Lucide icon set (`window.GWF.Icon`).
- `Nav.jsx`, `Hero.jsx`, `Sections.jsx`, `Footer.jsx`, `Apply.jsx` — screen sections, each an IIFE publishing to `window.GWF.*`.
- `App.jsx` — shell that wires navigation and the apply view.

## Conventions / gotchas
- Each `.jsx` is wrapped in an IIFE and attaches its exports to a shared `window.GWF` object — this avoids global `const` collisions and the in-browser Babel module limitation. Cross-file references go through `window.GWF.*`; design-system components through `window.GutsyWomenFoundationDesignSystem_dd7d23`.
- Load order in `index.html` matters: `_ds_bundle.js` → `Icon.jsx` → sections → `App.jsx` → mount.
- This is a visual recreation, not production code (no real API calls; submit/subscribe are simulated).
