# Migration Progress Tracker

> Read `PROJECT_PLAN.md` for the full spec/architecture. This file is the live
> status board — update it as work happens. Newest status at top of each list.

Last updated: 2026-08-25

## Status: DONE — all 8 phases complete, build/lint clean, spot-verified against the source

## Done
- [x] Phase 0 — `create-next-app` scaffold (TS, App Router, `src/` dir, ESLint,
      no Tailwind), git repo initialized by the CLI. Confirmed against the
      Next.js 16 docs bundled in `node_modules/next/dist/docs` (Image, Font,
      Metadata, CSS Modules APIs are unchanged from prior knowledge; typed
      `LayoutProps<"/">` helper is the new scaffold convention and is used).
- [x] Phase 0 — Source HTML fully analyzed (sections, tokens, assets, interactivity
      inventory) — written up in `PROJECT_PLAN.md`. Also found and deliberately
      **excluded** several CSS blocks with no corresponding markup in the source
      (`.project-feature`, `.testi-grid`, `.clients-strip`, `.careers-wrap`,
      `.job-row`, `.blog-grid`, `.chevron-divider`) — dead CSS from an earlier
      template pass, not part of the rendered site, not migrated.
- [x] Phase 0 — `PROJECT_PLAN.md` and this tracker created.
- [x] Phase 1 — Referenced images copied into `src/assets/images/*` (about,
      assembly, machines, process, frames, facility, hero, logo.png), organized
      as **statically-imported** assets (not `public/`) so `next/image` can
      infer width/height/blur automatically. Removed Next.js default demo
      assets (`public/*.svg`, default `page.module.css`); `public/` is now
      empty and unused (kept out of git if ever needed for e.g. `robots.txt`).
- [x] Phase 2 — `src/styles/variables.css` (raw tokens), `src/styles/theme.css`
      (semantic aliases + shared keyframes + `.reveal`), `src/app/globals.css`
      (reset + base elements + shared utilities: `.container`, `.section*`,
      `.eyebrow`, `.btn*`, `.tag`). Deliberately did *not* carry over the
      scaffold's `prefers-color-scheme: dark` auto-switch — the original site
      has one fixed brand palette, not a dark variant.
- [x] Phase 3 — `src/config/site.ts` (org identity/contact/addresses/founders,
      single source of truth), `src/config/navigation.ts` (nav + footer links),
      and `src/data/*.ts`: `services`, `machinery`, `framingSystems`,
      `specTable` (+ `structureTags`/`mezzanineTags`/`certificationTags`),
      `processSteps`, `manufacturingReel`, `qualityItems`, `sectors`,
      `sustainability`, `faq`, `whyUs`, `heroStats`. Image-bearing data files
      import the static assets directly (typed `StaticImageData`).
- [x] Phase 4 — UI primitives: `components/ui/Icon.tsx` (all inline SVGs,
      `currentColor` stroke so color is CSS-token driven, not hardcoded per
      icon), `Button.tsx` (anchor-or-button polymorphic, reuses global
      `.btn*`), `Tag.tsx`, `SectionHeading.tsx`, `Reveal.tsx` (client;
      IntersectionObserver scroll-reveal — the *only* client boundary for
      reveal behavior, wraps otherwise-server content), `components/layout/Container.tsx`.

- [x] Phase 5 — `Header` (client: scroll-shadow + owns mobile-menu open state),
      `Navbar` (presentational), `MobileMenu.tsx` (exports controlled
      `MobileMenuTrigger` + `MobileMenuDrawer` so both can sit in their correct
      DOM positions — trigger inline with the CTA, drawer as a full-width
      sibling — while state stays in `Header`), `Footer`, `FloatingActions`,
      root `layout.tsx` (Oswald/Inter/JetBrains Mono via `next/font/google`,
      full `Metadata` incl. OpenGraph/Twitter/canonical — the original had no
      OG/Twitter tags at all, added per the SEO requirement, using the brand
      logo as the interim share image — organization JSON-LD ported verbatim,
      XSS-escaped per the Next.js JSON-LD guide). Brand logo also wired up as
      `app/icon.png` (real favicon, replacing the generic Next.js default).
- [x] Phase 6 — All 16 section components built in source order: `Hero`,
      `About`, `VisionMission`, `WhyUs`, `Services`, `Machinery`,
      `PebStructure` (technology copy + spec table + framing grid + mezzanine,
      kept as one component since the source treats it as one `<section
      id="structure">`), `ManufacturingProcess` + `ProcessReel` helper (the
      belt-marquee doubling happens in the component, not the data),
      `QualityAssurance`, `AssemblyShowcase`, `Certifications`, `Sectors`,
      `Facility`, `Sustainability`, `Faq` (client accordion, upgraded the
      collapse animation to a `grid-template-rows` 0fr→1fr transition instead
      of the original's fixed `max-height:200px` — same visual effect, no
      clipping risk for longer answers), `Contact` (server) + `QuoteForm`
      (client; `mailto:` submit preserved, isolated in one function so a real
      API call can replace it later without touching markup).
- [x] Phase 6 — Added one small accessibility fix beyond a literal port: the
      Vision/Mission section had no section-level heading in the original
      (straight from About's `h2` to two sibling `h3`s) — added a
      `.visually-hidden` `h2` so heading hierarchy is programmatically correct
      with zero visual change.
- [x] Phase 7 — `app/page.tsx` composes all 16 sections; no other a11y gaps
      found worth deviating from the source for (card-grid `h4`/`h5` under a
      section `h2` mirrors the original and is a common, low-severity pattern,
      not a structural defect).
- [x] Phase 8 — `npm run build` and `npm run lint` both clean (fixed one
      `react/no-unescaped-entities` and one stray unused eslint-disable along
      the way). Ran `next dev` and fetched the rendered HTML directly (the
      Claude in Chrome extension was declined, so no live screenshots) —
      verified: all nav anchor ids present (`#about #services #structure
      #process #contact #why #faq #profile #top`), correct hero stat markup
      ("180m", "300T", "6 Step", "1 Point"), exactly 6 framing cards / 8
      machine cards / 6 quality items / 5 FAQ items / 4 sustainability cards
      (cross-checked against the RSC flight-payload text duplication, which
      inflates naive substring counts), the process reel doubled to exactly
      12 real DOM cards for the marquee loop, no hydration/runtime errors in
      the output. **Recommended manual follow-up**: run `npm run dev` and
      eyeball mobile/tablet/laptop/desktop breakpoints in an actual browser
      before shipping, since this session could not render one.

## Post-migration change requests
- [x] 2026-08-25 — Client felt the fixed/sticky header didn't feel "modern"
      and wanted it in normal document flow instead. Changed `Header` from
      `position: fixed` to `position: relative`; removed the now-pointless
      scroll-shadow effect and its `useEffect` (header no longer overlaps
      content, so there's nothing to visually separate on scroll); removed
      the `padding-top: 100px` on `Hero` that existed only to offset the
      fixed header. Header now scrolls away with the page like the rest of
      the site.
- [x] 2026-08-25 — "Request a Quote" was desktop-only (hidden by
      `.ctaDesktopOnly` below 980px, mobile only had the burger). Added the
      same primary button to the top of the mobile drawer
      (`MobileMenuDrawer` in `MobileMenu.tsx`) so mobile visitors can reach it
      too.

## Known follow-ups (not blockers, flagged for the client/designer)
- `app/icon.png` is the full rectangular brand logo (1400×1144), not a
  purpose-cut square mark — works as a favicon but a dedicated square icon
  would render more cleanly at 16×16.
- No dedicated 1200×630 Open Graph image exists yet; the logo is used as a
  fallback share image. Swap `openGraph.images` / `twitter.images` in
  `src/app/layout.tsx` once one is designed.
- `siteConfig.url` in `src/config/site.ts` falls back to a placeholder domain
  until `NEXT_PUBLIC_SITE_URL` is set for the real deployment — update before
  going live so canonical/OG URLs are correct.

## Notes / decisions log
- Only images actually referenced by `index.html` are migrated; several unused
  alternate photos in the source folder are intentionally left out.
- No backend — quote form stays `mailto:`-based, structured for an easy swap later.
- Clip-path "cut corner" shapes and slow photo-drift animations are brand identity,
  not incidental styling — preserved deliberately, not simplified away.
- Global CSS utilities (`.container`, `.section*`, `.eyebrow`, `.btn*`, `.tag`,
  `.tag-row`, `.visually-hidden`, `.reveal`) live in `globals.css`/`theme.css`;
  everything else is a CSS Module scoped to its component. Change a brand
  token in `styles/variables.css` and it propagates everywhere.
