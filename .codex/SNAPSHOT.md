# AMMatz Project Snapshot

Last updated: 2026-08-30

## Current State

- GitHub repository: `https://github.com/Ultraivanov/AMMatz`
- Current implementation branch: `codex/m-01-scaffold`
- Local HEAD: `4e914c6 feat(assets): replace powder proof imagery with 4K microscopy set`
- Remote tracking state before this snapshot: local branch is 3 commits ahead of `origin/codex/m-01-scaffold`
- `M-01 Frontend Scaffold`, `M-02 Landing Page Build`, and `M-03 Production-First Blueprint Repack` are marked done in `.codex/PHASES.md`
- Next formal phase in `.codex/PHASES.md`: Phase 2 Production Readiness with `P-01 QA and Hardening`, `P-02 Hosting and Deployment`, and `P-03 Launch Checklist` still pending
- Current app: Next.js 16.3.1 App Router landing page at `/`, implemented in `app/landing/*`
- Current design direction: blueprint-style engineering landing page for technical AM/powder-production buyers, with low-marketing copy and proof-led sections

## Latest Local Changes

- `728cd0c feat: update landing logo assets and blueprint components`
  - Replaced constructed SVG logo assets with `public/assets/ammatz_desktop-logo.png`
  - Added `public/assets/icon-field-success.svg`
  - Updated landing components and page wiring around the blueprint UI
- `93a68b3 fix(landing): render powder proof slider as scrollable card row per Figma`
  - Changed the AM powder proof area to a horizontal scrollable row of image cards
  - Keeps per-card captions and slider controls for horizontal movement
- `4e914c6 feat(assets): replace powder proof imagery with 4K microscopy set`
  - Replaced Tungsten, Tantalum, Ti-6Al-4V, and core-shell proof images with 3840x2880 assets
  - Added `public/assets/core-shell-proof-4k.jpg`
  - Current core-shell image is a close 4:3 crop focused on shell/core visibility, not the earlier letterboxed screenshot

## Implemented Page Structure

- Header with PNG AMMatz logo and desktop navigation
- Hero: `Advanced Metal Powders Made in Israel`, argon plasma arc video, primary/secondary CTAs
- Process know-how: four engineering cards for research input, equipment control, process fit, and batch control
- AM metal powders: four category lists plus 4K microscopy proof slider
- Powder production: plasma atomization section with equipment/video media slider, process parameters, and controlled route data
- Metal recycling: icon-led list for input streams, material recovery, controlled route, and AM return
- Request information: mailto-based form with field-level validation and success icon state
- Footer with AMMatz identity and contact email

## Current Assets

- Logo: `public/assets/ammatz_desktop-logo.png` at 786x240
- Powder proof images:
  - `public/assets/powder-tungsten-proof-4k.jpg` at 3840x2880
  - `public/assets/powder-almg6-nanopowder-proof-4k.jpg` at 3840x2880
  - `public/assets/core-shell-proof-4k.jpg` at 3840x2880
  - `public/assets/powder-tantalum-proof-4k.jpg` at 3840x2880
  - `public/assets/powder-ti-6al-4v-proof-4k.jpg` at 3840x2880
- Production media:
  - `public/assets/atomization-equipment-photo.png`
  - `public/assets/argon-arc-desktop-16x9.mp4`
  - `public/assets/argon-arc-desktop-wide.mp4`
  - `public/assets/argon-arc-mobile-4x3.mp4`
  - matching poster JPGs
- Recycling icons:
  - `public/assets/icon-input-streams.svg`
  - `public/assets/icon-material-recovery.svg`
  - `public/assets/icon-controlled-route.svg`
  - `public/assets/icon-am-return.svg`

## Product Direction

AMMatz is a B2B industrial website for advanced metal powders, additive manufacturing, plasma atomization, and metal recycling. The site should stay engineering-first: claims must be supported by process facts, imagery, parameters, and clear section hierarchy rather than generic marketing language.

## Workflow

Use the `codex-code-starter` Phase -> Block -> Task -> Session model. Git remains the source of truth. Work should proceed through approved blocks and atomic tasks.

## Latest Verification

- `npm run lint` passes on 2026-08-30.
- `npm run build` passes on 2026-08-30.
- `sips` confirms all `*proof-4k.jpg` powder proof images are 3840x2880.
- Visual spot check confirms `core-shell-proof-4k.jpg` is a close 4:3 crop without labels.

## Open Risks / Next Work

- The 3 local commits above have not been pushed to `origin/codex/m-01-scaffold`.
- RFQ currently uses `mailto:` form behavior; production lead capture still needs a real backend/email route before launch.
- Figma-to-code parity should be rechecked after the latest asset and component changes.
- Production readiness phase is not started: QA, accessibility, SEO, performance, Vercel deployment, domain/env setup, and launch checks remain.
