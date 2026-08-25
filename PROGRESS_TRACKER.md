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

- [x] 2026-08-25 — Client wanted the single-page site split into real, separate
      pages ("professional", not like sections were chopped apart) and wanted
      confirmation that Next.js's actual routing/SSR features were in play,
      not just a re-skinned single page. Restructured into a 6-route site:
      - `/` — Hero, `About` (`teaser` variant — new prop, shows only the first
        paragraph + a "Read our full story →" link instead of duplicating all
        3 paragraphs), `WhyUs`, `Services`, new `ExploreMore` cross-link band,
        new `CtaBanner`.
      - `/about` — `About` (full) + `VisionMission` + `WhyUs`.
      - `/services` — `Services` + `PebStructure` (tech/specs/framing/mezzanine)
        + `Certifications`.
      - `/manufacturing` — `Machinery` + `ManufacturingProcess` +
        `QualityAssurance` + `AssemblyShowcase` + `Facility` + `Sustainability`.
      - `/industries` — `Sectors` + `CtaBanner`.
      - `/contact` — `Faq` + `Contact` (its own heading was removed here since
        the new `PageHero` already supplies the page's `h1` — was literally
        duplicate text otherwise).
      Every interior page opens with the new `components/layout/PageHero.tsx`
      banner (eyebrow + `h1` + description) so each route reads as its own
      "chapter" instead of a bare content section — this is the piece that
      makes the split feel deliberate rather than like a page got cut apart.
      Verified exactly one `<h1>` per route.
      **Next.js features now actually in use, not just RSC defaults**:
      file-based routing (6 real segments), `next/link` everywhere internal
      (`Button`, `Navbar`, `MobileMenu`, `Footer`, `Header` logo) for
      client-side transitions + prefetch instead of full page reloads,
      `usePathname()` for active-nav-link state, per-route `generateMetadata`-
      style static `metadata` exports (unique title/description/canonical per
      page — title template `%s | Starashiyana Prefab LLP` resolves
      correctly), `app/not-found.tsx`, `app/sitemap.ts`, `app/robots.ts` file
      conventions, and the shared root `layout.tsx` rendering `Header`/
      `Footer`/`FloatingActions` once instead of per page. Every route still
      builds fully static (`npm run build` shows all 9 routes, incl.
      `sitemap.xml`/`robots.txt`, as `○ Static` — prerendered at build time,
      which for a marketing site with no per-request data is strictly better
      than classic per-request SSR, not a downgrade from it).
      Also fixed in the process: `Header`'s logo now links via `next/link`
      to `/` instead of a `#top` anchor that no longer exists on other pages;
      `Hero`'s CTAs point to `/contact` and `/contact#profile`; footer links
      repointed to real routes (`/about#why`, `/services#services`,
      `/services#mezzanine` — added `id="mezzanine"` to `PebStructure`);
      `Services` page banner copy reworded so it doesn't near-duplicate
      `Services`' own `h2`. Build + lint clean; spot-checked all 6 pages for
      correct titles, one `h1` each, correct active nav-link markers, and
      that `/does-not-exist` returns a real HTTP 404 with the branded page.

- [x] 2026-08-25 — **Reverted the multi-page split above.** Client decided to
      keep the site single-page after all, but wanted to keep whatever SEO/
      Next.js benefits came with that attempt. Restored via
      `git checkout 11cc899 -- <files>` (the client's own `v1` commit, made
      right after the header/mobile-CTA fixes and right before the multi-page
      work) for every file the split had touched: `app/page.tsx`, `Header`,
      `Footer`, `Navbar` (+css), `MobileMenu` (+css), `About` (+css),
      `Contact` (+css), `Hero`, `PebStructure`, `Button`, `config/navigation.ts`.
      Deleted the route folders and the multi-page-only glue components
      (`about/`, `services/`, `manufacturing/`, `industries/`, `contact/`,
      `PageHero`, `CtaBanner`, `ExploreMore`).
      **Important clarification for the client**: the real SEO/SSR wins were
      never dependent on being multi-page — they were already in place back
      in Phase 5/8 above, on the single page: full `Metadata` (title,
      description, keywords, OpenGraph, Twitter, canonical), the Organization
      JSON-LD, a real favicon, semantic HTML, and — for "SSR" — the entire
      site rendering as **React Server Components, statically prerendered at
      build time** (Next.js's recommended default, and strictly better than
      classic per-request SSR for a page with no per-request data). None of
      that was undone by this revert.
      What *did* only make sense for a multi-page site and was correctly
      removed with it: per-route unique metadata, `next/link` client-side
      transitions between pages, and `usePathname()` active-nav-link state.
      What was multi-page-*adjacent* but genuinely independent of page count,
      and was **kept**: `app/not-found.tsx` (branded 404, real HTTP 404
      status), `app/robots.ts`, `app/sitemap.ts` (trimmed back down to list
      just the one `/` URL). `next build` confirms 5 static routes: `/`,
      `/_not-found`, `/icon.png`, `/robots.txt`, `/sitemap.xml`. Build + lint
      clean; re-verified the header is still `position: relative` (the
      earlier fixed-header fix survived the revert, since it was part of the
      `v1` commit being restored to) and every original anchor id (`#about
      #services #structure #process #contact #why #faq #profile #top`) is
      back on the one page.

- [x] 2026-08-25 — Pushed to GitHub (`https://github.com/Varun9536/Starashiyana_Prefab_Website`,
      `main` branch) and added production deployment tooling for the Linux
      VPS at `starashiyanaprefab.com`:
      - `next.config.ts` — `output: "standalone"` (traced minimal runtime,
        no `node_modules` install needed in the final image) + an
        `X-Accel-Buffering: no` response header so nginx doesn't buffer
        streamed responses.
      - `Dockerfile` — 3-stage build (`deps` → `builder` → `runner`) on
        `node:22-alpine`, non-root `nextjs` user, final image only contains
        the standalone server + `.next/static` (no source, no dev deps).
      - `.dockerignore`, `docker-compose.yml` (binds the app to
        `127.0.0.1:3000` only — never exposed directly to the internet —
        with a `wget`-based healthcheck), `.env.example`.
      - `deploy/nginx/starashiyanaprefab.com.conf` — HTTP→HTTPS redirect,
        `www`→apex redirect, Certbot-ready `ssl_certificate` paths, gzip,
        immutable caching for `/_next/static/`, `proxy_buffering off` to
        match the header above.
      - `DEPLOYMENT.md` — full VPS runbook: one-time server setup, DNS,
        `docker compose build/up`, installing the nginx config, issuing the
        cert with `certbot --nginx`, verification, redeploy and rollback.
      - `siteConfig.url` now defaults to the real `https://starashiyanaprefab.com`
        instead of a placeholder (closes a follow-up flagged earlier).
      **Verified locally** (no Docker available in this environment): ran
      `npm run build` with `output: "standalone"` enabled, then ran the exact
      traced `node .next/standalone/server.js` the Dockerfile's `CMD` runs —
      confirmed `/`, `/sitemap.xml`, `/robots.txt`, `/icon.png` all return
      `200`, an unknown path returns a real `404`, and the
      `X-Accel-Buffering: no` header is present. **Not verified**: the actual
      `docker build`/`docker compose up` (Docker isn't installed in this
      session's environment) — run `docker compose build && docker compose up -d`
      once on the VPS (or any machine with Docker) as the first real test
      before relying on it in production.

## Known follow-ups (not blockers, flagged for the client/designer)
- `app/icon.png` is the full rectangular brand logo (1400×1144), not a
  purpose-cut square mark — works as a favicon but a dedicated square icon
  would render more cleanly at 16×16.
- No dedicated 1200×630 Open Graph image exists yet; the logo is used as a
  fallback share image. Swap `openGraph.images` / `twitter.images` in
  `src/app/layout.tsx` once one is designed.
- ~~`siteConfig.url` placeholder~~ — resolved 2026-08-25, now defaults to
  `https://starashiyanaprefab.com`.

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
