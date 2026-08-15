# AMMatz MVP Site Design

Last updated: 2026-08-15

## Goal

Build a production-ready B2B industrial landing page for AMMatz using the imported HTML/Figma reference as the content and layout source, then improve it into a maintainable frontend that can be hosted and iterated.

## Recommended Approach

Use a static-first Next.js App Router site with TypeScript, Tailwind, and shadcn-compatible semantic tokens.

This gives the project SEO and metadata conventions, optimized asset handling, a clear deployment path, and enough structure to evolve from one landing page into a broader company site later.

## Design Direction

The site should feel precise, technical, and credible. It should preserve the current navy/white/orange AMMatz identity, blueprint motifs, technical borders, microscopy imagery, equipment imagery, and plasma process evidence. The design should not become a generic SaaS landing page.

## Page Scope

MVP is one page:

1. Header
2. Hero
3. Why AMMatz
4. Our Powders
5. Our Technology
6. Metal Recycling
7. Contact

## Component Boundaries

- `SiteHeader`
- `LogoMark`
- `HeroSection`
- `SpecBox`
- `WhySection`
- `PowderCapabilities`
- `EvidenceImage`
- `TechnologySection`
- `RecyclingSection`
- `ContactSection`
- `FooterRule`

## Asset Plan

Extract embedded base64 images from the HTML into `public/assets`, keep descriptive filenames, optimize for production, and reserve stable dimensions/aspect ratios. Below-fold images should lazy-load.

## Conversion

The current baseline conversion is `mailto:office@ammatz.com`. The implementation should preserve a future slot for a real form or CRM endpoint, but should not add backend complexity in the MVP without a separate decision.

## Verification

- Local dev server runs.
- Production build passes.
- Responsive checks pass at 375, 768, 1024, and 1440px.
- No horizontal scroll on mobile.
- Keyboard focus is visible.
- Images render with stable dimensions.
- No emoji icons remain in UI.
- Metadata exists for basic SEO/social sharing.

## Open Decision Before Implementation

Proceed with this recommended Next.js static-first approach for `M-01 Frontend Scaffold`.

