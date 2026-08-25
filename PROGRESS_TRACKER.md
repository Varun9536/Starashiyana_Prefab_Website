# Migration Progress Tracker

> Read `PROJECT_PLAN.md` for the full spec/architecture. This file is the live
> status board — update it as work happens. Newest status at top of each list.

Last updated: 2026-08-25

## Status: DONE — all 8 phases complete, build/lint clean, spot-verified against the source

## Pending decisions (client asked to hold off, not forgotten)
- [ ] **Single-page vs. a few dedicated SEO landing pages.** Real
      hub-and-spoke topical SEO (separate pages for "cold storage steel
      building", "industrial shed manufacturer", "mezzanine floor
      manufacturer", "PEB manufacturer Haryana", etc.) needs each keyword
      cluster to have its own dedicated page — a single page can only rank
      strongly for 1–2 broad terms. Proposed middle ground: keep the
      homepage exactly as-is (no UX/nav change, avoids repeating the earlier
      multi-page revert) and add a handful of thin, search-only landing
      pages not in the main nav. Client said "abhi rehne dete hai, pending
      mein daal do" (2026-08-25) — revisit before doing the topical
      keyword/hub-and-spoke map or the local SEO execution plan, since both
      depend on this call.

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

- [x] 2026-08-25 — Nginx config had 4 `server{}` blocks (separate www-redirect
      blocks for HTTP and HTTPS) — client found this confusing ("itne saare
      config ka kya karu"). Simplified `deploy/nginx/starashiyanaprefab.com.conf`
      down to the practical minimum of 2 blocks: one on port 80 that redirects
      everything to HTTPS (also serves the Certbot ACME challenge), one on
      port 443 that serves the site and redirects `www` → apex internally via
      an `if ($host = ...)` check. Same one file, same install steps.
      Also: the client's VPS already had ports 3000–3004 in use by other
      services, so `docker-compose.yml`'s host-side port was moved to
      `127.0.0.1:3005:3000` (container-internal port is unaffected, still
      3000 — see `Dockerfile`'s `EXPOSE`/`PORT`). Updated every place that
      referenced the host-published port to match: the nginx config's two
      `proxy_pass` directives, `DEPLOYMENT.md`'s verification `curl` and
      firewall comment. Left alone (correctly still `3000`): the Dockerfile's
      `ENV PORT`/`EXPOSE` (container-internal), the compose healthcheck (runs
      **inside** the container's own network namespace), and `README.md`'s
      mention of `localhost:3000` (that's `npm run dev`, unrelated to Docker).

- [x] 2026-08-25 — **Real bug, found by the client in a live browser (not
      catchable by `curl`/build checks, which is why it slipped through
      earlier verification):** none of the site's CSS animations were
      actually running — the manufacturing process reel wasn't scrolling, the
      hero/assembly "camera drift" photo motion was static, the light sweep
      and live-pulse dot weren't animating. Root cause: 8 `@keyframes` were
      defined once in the shared `src/styles/theme.css` and referenced by
      name (`animation: processBelt ...`) from several component
      `.module.css` files. Next.js's CSS Modules (Turbopack/Lightning CSS)
      scope an `animation:` name to the **file it's referenced from** — so
      `ProcessReel.module.css`'s reference got hashed to
      `ProcessReel-module__xxx__processBelt`, while the actual `@keyframes`
      block in the global file stayed named plain `processBelt`. Names never
      matched, so the browser silently had no matching animation to run.
      (Tried `:global(processBelt)` in the value position first — Turbopack's
      CSS Modules doesn't support that syntax there; it leaves the literal
      text in the output, which is invalid CSS.)
      **Fix**: since none of these 8 keyframes were actually shared across
      more than one component file, moved each `@keyframes` out of
      `theme.css` and into the one `.module.css` file that uses it —
      `heroCameraDrift`/`factoryCameraDrift`/`lightSweep`/`livePulse` →
      `Hero.module.css`; `processBelt`/`photoPulse` → `ProcessReel.module.css`;
      `assemblyCameraDrift`/`stageGlow` → `AssemblyShowcase.module.css`.
      Same-file declaration+reference is scoped together reliably, so the
      hashed names now match exactly (verified in the compiled
      `.next/static/chunks/*.css` — declaration and reference are the
      identical hashed name for all 8). `theme.css` now only holds semantic
      color tokens and the `.reveal` scroll-reveal utility.
      **Lesson for future work in this repo**: never reference a global
      `@keyframes` by name from inside a `.module.css` file in this project —
      declare it locally in that same file instead.

- [x] 2026-08-25 — "Enterprise-grade" SEO pass, thinking from how a real buyer
      actually searches (branded vs. generic vs. local intent) rather than
      just re-listing what Search Console wants:
      - **Title reworded to lead with the category term**: `Pre-Engineered
        Steel Building (PEB) Manufacturer in India | Starashiyana Prefab LLP`
        (was brand-first). Most searches for a growing company are generic
        ("PEB manufacturer in India"), not branded — leading with the
        searched phrase matters more than brand-first phrasing here.
      - `siteConfig.description` and `keywords` tightened to explicitly
        include location terms (`Dharuhera, Haryana (Delhi NCR)`,
        "PEB manufacturer Haryana", "steel building manufacturer Delhi NCR")
        — local/regional queries are far less competitive than "PEB
        manufacturer India" and convert better for a company with one plant.
      - **Organization JSON-LD enriched** (`src/app/layout.tsx`): added
        `url`, `logo`/`image` (reusing the already-existing `/icon.png`),
        `telephone`, and a `contactPoint` (sales, phone+email, `en`/`hi`).
        Added `siteConfig.socialLinks` (currently empty — real LinkedIn/
        Facebook/Instagram URLs go here for the `sameAs` field, which is a
        genuine signal Google uses to connect a result to the right entity —
        **left empty rather than guessing at URLs that may not exist**; ask
        the client for these and fill them in).
      - **New `WebSite` JSON-LD** — establishes the site as a distinct
        indexable entity (name + url), a small but standard addition.
      - **New `FAQPage` JSON-LD** (`Faq.tsx`, generated from the existing
        `faqItems` data — no content duplicated) — the single highest-value
        addition here: this can make Google show the FAQ questions as
        expandable rich results directly in search, which is exactly the
        kind of "more stuff under the company name" the client was asking
        about that on-page markup can actually influence.
      Deliberately **did not** change the JSON-LD `@type` to `LocalBusiness`/
      `GeneralContractor` — that unlocks map-pack-style results but wants
      confirmed opening hours and geo-coordinates, and the actual dominant
      lever for that "map card" look is a **Google Business Profile**
      listing (external, not code) — see follow-ups below.
      Verified in rendered HTML: new title present, exactly 3 real JSON-LD
      `<script>` tags in the DOM (Organization, WebSite, FAQPage — checked
      against the RSC flight-payload duplication issue noted earlier in this
      file), `contactPoint` and `logo`/`telephone` fields present and correct.
      Build + lint clean.

- [x] 2026-08-25 — Client asked for a full "entity architecture" SEO strategy
      (parent-company disambiguation, hub-and-spoke topical map, local SEO,
      cross-domain linking) referencing a "legacy domain" `starashiyana.com`.
      **This fact changed 3 times over the course of the conversation**
      (no relation → informal help only → confirmed-by-client genuine parent
      company with Starashiyana Prefab as a distinct subsidiary brand) before
      landing on a final answer — worth remembering if this comes up again:
      confirm the actual corporate relationship (and get it from the client
      directly, not inferred) before encoding anything about it in schema or
      before adding any public link to another company's domain, since it
      names a real third party and is genuinely hard to safely guess at.
      Fetched `starashiyana.com` (Starashiyana Construction Pvt. Ltd., a
      general civil contractor — malls/hotels/residential/warehouses,
      operating since ~2020, registered near-identical Saket address, no
      existing schema markup, no mention of PEB/Prefab anywhere) to ground
      the final implementation in what's actually there rather than
      assumptions. Implemented, once confirmed:
      - `src/config/site.ts` — new `parentCompany: { name, url }` field, the
        single place this relationship is declared.
      - `src/app/layout.tsx` — Organization JSON-LD now includes
        `parentOrganization` (pointing at the real parent), plus
        `alternateName`, `disambiguatingDescription` (explicitly states this
        is a distinct PEB specialist, not the parent's general civil
        business — the correct schema.org field for exactly this situation),
        and `knowsAbout` (PEB/steel topical terms, for entity precision).
      - `About.tsx` — the existing plain-text mention of "Starashiyana
        Construction Pvt Ltd" is now a real link to `starashiyana.com`.
        Deliberately **not** `rel="nofollow"` — this is a genuine, accurate,
        editorial mention of a real corporate relationship, not a paid/
        untrusted link, so nofollow would work against the actual goal
        (letting Google use the link to understand the entity relationship).
      **Deliberately did not**: touch `starashiyana.com` itself (not this
      project's codebase) or claim a reciprocal link exists there — that's an
      ask for whoever manages that site, not something achievable from here.
      **Also still recommended** (from the local-SEO discussion, not yet
      acted on): use the Dharuhera plant, not the Saket office, as Starashiyana
      Prefab's primary Google Business Profile location — it's a genuinely
      distinct physical location (sidesteps the Saket address being
      near-identical to the parent's), and it's also the more relevant
      location for PEB-specific local search intent.

## Known follow-ups (not blockers, flagged for the client/designer)
- **Set up a Google Business Profile** (business.google.com) — this, not
  on-page schema, is what actually produces the "knowledge panel"/map-card
  result when someone searches the company name. Use the exact same name,
  address and phone number as `src/config/site.ts` (NAP consistency matters).
  Once that exists, `LocalBusiness` schema with real hours/geo-coordinates
  becomes worth adding here too.
- Provide real social media profile URLs (LinkedIn/Facebook/Instagram/
  YouTube, whichever exist) to add to `siteConfig.socialLinks`.
- ~~`app/icon.png` full-rectangle logo~~ — resolved 2026-08-25: used `sharp`
  (already a transitive dependency of `next`) to programmatically crop just
  the star+building mark out of `logo.png` (excluding the "STARASHIYANA
  PREFAB LLP" wordmark below it — found the icon/text boundary by scanning
  for the empty pixel-row gap between them), trimmed the transparent margin,
  and re-composited it centered on a padded transparent square canvas
  (512×512). This is also what shows next to the site in Google search
  results, not just the browser tab, so worth doing properly rather than
  squashing the full wordmark logo into a tiny square.
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
