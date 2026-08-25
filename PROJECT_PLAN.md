# Starashiyana Prefab — HTML → Next.js Migration Plan

Source of truth: `../Starashiyana_Prefab_Website_Updated (3)/index.html`
Target: production-ready Next.js 15 (App Router) + TypeScript app in this directory.

This document is the durable spec. `PROGRESS_TRACKER.md` in this same folder tracks
live status (what's done / in progress / next) and should be read first when resuming
this work in a new session.

## 1. Source Analysis Summary

Single-page marketing site for a PEB (Pre-Engineered Building) manufacturer.
Vanilla HTML/CSS/JS, Google Fonts (Oswald, Inter, JetBrains Mono), no framework.

### Sections (top to bottom)
1. Fixed header / nav (logo, 5 links, CTA, burger + mobile drawer)
2. Hero — full-bleed animated factory photo, headline, CTA pair, 4 stats
3. About — 3 paragraphs + founder line + clipped photo badge
4. Vision / Mission — 2-column, dark section
5. Why Us — 5-card grid (numbered)
6. Services — 6-card dark grid with inline SVG icons
7. Manufacturing Capabilities — 8 machine cards (image + name + info + role)
8. PEB Structure/Technology — copy + tag list + spec table; framing systems 6-card
   image grid; mezzanine 2-col copy + clipped photo
9. Manufacturing Process — 6-step numbered timeline + auto-scrolling photo reel
   (12 cards = 6 images doubled for seamless loop)
10. Quality & Safety — checklist (6 items) + dark "Accuracy/Reliability/Safety" panel
11. Assembly showcase — full-bleed photo section, stage chips
12. Certifications — tag list
13. Sectors — 4-column categorized list
14. Manufacturing Facility (Dharuhera) — copy + clipped photo
15. Sustainability — 4-card grid with icons
16. FAQ — 5-item accordion (single-open)
17. Contact / Quote — dark contact-info column + quote form (mailto: submit, no backend)
18. Footer — logo blurb + 3 link columns + bottom bar
19. Floating action buttons — WhatsApp / Call / Email (fixed, always visible)

### Design tokens extracted from source `<style>`
- Colors: charcoal #2b2b2b / #3a3a3a, olive #5c6b3f (+light #7d8f57, dark #454f2e),
  cream #f5f0e4 (+ #ece4d1), rust #b5652f (+light #d17f45), paper #faf7ef, ink #232320,
  hairline `rgba(43,43,43,.14)`
- Fonts: Oswald (headings/display, uppercase), Inter (body), JetBrains Mono (eyebrows,
  labels, mono data)
- Radius: buttons/cards use a signature clipped-corner `clip-path` motif, not border-radius
  (only 2px "radius-steel" used sparingly) — this is a **deliberate brand shape**, preserved
  as a reusable clip-path token/utility, not replaced with rounded corners.
- Shadow: one soft large shadow `0 20px 50px -20px rgba(0,0,0,.35)`
- Container: max-width 1240px, 28px side padding
- Section rhythm: 110px vertical padding desktop
- Motion: slow alternating `scale + translate` "camera drift" on hero/assembly/project
  photos, marquee-style belt scroll for the process reel, scroll-reveal via
  IntersectionObserver, light-sweep + pulse accents. All disabled under
  `prefers-reduced-motion: reduce`.

### Interactivity (must remain client-side, kept minimal)
- Mobile nav toggle
- FAQ accordion (single-open)
- Scroll-reveal (IntersectionObserver)
- Header shadow-on-scroll
- Quote form → `mailto:` submit (explicitly no backend per requirements)

### Assets actually referenced by the markup (only these are migrated — the source
folder contains several unreferenced alternate photos which are intentionally left
behind to avoid shipping dead weight):
logo.png · factory_gallery_hero.jpg · factory_bg_clean2.jpg · about_factory.jpg ·
frame_clean.jpg · machine_shearing.png · machine_ptw.png · machine_power_press.png ·
machine_threading.png · process_plasma.jpg · process_drilling.jpg · process_blast.jpg ·
process_1.jpg … process_6.jpg · frame_clearspan/singleslope/multispan/truss/hybrid/roof.jpg ·
mezzanine_real.jpg

## 2. Target Architecture

```
src/
  app/
    layout.tsx          -- fonts, metadata, JSON-LD, <Header/Footer/FloatingActions>
    page.tsx             -- composes section components only
    globals.css          -- reset + base elements + shared utility classes
  components/
    layout/               Header.tsx, Footer.tsx, Container.tsx, FloatingActions.tsx
    navigation/            Navbar.tsx, MobileMenu.tsx
    sections/              Hero, About, VisionMission, WhyUs, Services, Machinery,
                           PebStructure, FramingSystems, Mezzanine, ManufacturingProcess,
                           QualityAssurance, AssemblyShowcase, Certifications, Sectors,
                           Facility, Sustainability, Faq, Contact
    ui/                    Button.tsx, Tag.tsx, SectionHeading.tsx, Icon.tsx, Reveal.tsx
  config/
    site.ts               -- org identity, contact info, addresses, founders
    navigation.ts          -- nav + footer link config
  data/                   one file per repeated content block (services, machinery,
                          framingSystems, specTable, processSteps, qualityItems,
                          sectors, sustainability, faq, certifications)
  lib/
    utils.ts               -- small shared helpers (cx classname joiner)
  styles/
    variables.css          -- raw design tokens (colors, spacing, radius, shadow, etc.)
    theme.css               -- semantic aliases + shared keyframes
public/
  images/{logo.png, hero/, about/, assembly/, machines/, process/, frames/, facility/}
```

Rendering strategy: everything is a **Server Component** by default. `"use client"`
is added only to: `Header` (scroll shadow + mobile menu), `MobileMenu`, `Faq`,
`Contact` (form handler), `Reveal` (IntersectionObserver), and the reel/marquee
piece of `ManufacturingProcess` if it needs JS (it doesn't — pure CSS animation).

## 3. Phases

- **Phase 0** — Scaffold Next.js app (TS, App Router, `src/` dir), planning docs. ✅
- **Phase 1** — Asset migration into `public/images/*`.
- **Phase 2** — Theme system: `styles/variables.css`, `styles/theme.css`, `globals.css`.
- **Phase 3** — Config & data layer (`config/*`, `data/*`).
- **Phase 4** — Core UI primitives (`components/ui/*`).
- **Phase 5** — Layout & navigation shell (`Header`, `MobileMenu`, `Footer`,
  `FloatingActions`) + root `layout.tsx` with fonts/metadata/JSON-LD.
- **Phase 6** — Section components (the bulk of the work), in source order.
- **Phase 7** — Page assembly (`app/page.tsx`) + reduced-motion/a11y pass.
- **Phase 8** — Build verification (`npm run build`, `next lint`), fix errors,
  responsive/visual QA against the original HTML, close out tracker.

## 4. Explicit decisions (so future edits stay consistent)

- No UI kit / Tailwind — CSS Modules per component + a small global utility layer,
  matching instructions and the original's already-minimal CSS footprint.
- No backend: the quote form keeps its `mailto:` behavior, structured so a real
  submit handler can replace `onSubmit` later without touching markup/CSS.
- `next/image` used everywhere with real `width`/`height` (or `fill` inside an
  already-sized wrapper) — no unconstrained `<img>` tags.
- `next/font/google` for Oswald/Inter/JetBrains Mono (self-hosted at build time,
  no runtime Google Fonts request, better perf than the original's `<link>` tag).
- Clip-path "cut corner" motif and camera-drift photo animations are treated as
  brand identity and preserved via shared CSS classes/keyframes in `theme.css`.
- `site.ts` centralizes email/phone/addresses/founders so contact details are
  never hardcoded twice (nav CTA, footer, contact section, floating actions,
  JSON-LD all read from it).
