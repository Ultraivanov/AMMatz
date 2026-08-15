# AMMatz Application/Production Repack Design

Last updated: 2026-08-15

## Goal

Repackage the AMMatz landing page from a generic section-by-section company page into a technical production narrative for additive manufacturing buyers, engineers, and partners.

The page should quickly answer:

- What AMMatz produces.
- Which production routes and powder programs are available.
- Why the production platform is credible.
- What information a prospect should send to start an RFQ or technical conversation.

## Approved Direction

Use the **Application/Production-first** structure.

The page should lead with AM-ready powder production and then support that claim with powder programs, production platform evidence, and recycling capability. It should not read like a marketing brochure, a generic SaaS landing page, or a lightly restyled version of the original HTML.

## Blueprint Style

The visual language should feel like an engineering blueprint:

- Dark navy technical canvas.
- White and muted blue linework.
- Orange only as a measurement/accent color.
- Grid, rules, callouts, coordinate-style labels, process lines, tables, and specification panels.
- Real equipment and microscopy images treated as evidence plates, not decorative gallery cards.
- Dense but readable information architecture.

Avoid:

- Oversized generic hero composition.
- Repeated card grids with identical hierarchy.
- Decorative gradients, bokeh/orbs, and soft SaaS styling.
- Long paragraphs without scanning anchors.
- A page that is visually dominated by one flat dark block from top to bottom.

## New Page Structure

### 1. Hero: Production Claim

Lead with a precise claim:

> Metal powder production for advanced additive manufacturing.

Support it with three short proof points:

- Tailored metal powders.
- Proprietary plasma atomization.
- Recycling route for high-value metal feedstock.

The hero should include the equipment blueprint as a primary visual, but framed as a system drawing with production facts and not as a decorative image.

### 2. Capability Index

Replace generic “Why AMMatz” positioning with a capability index:

- Powder Development.
- Plasma Atomization.
- Metal Recovery.

Each capability should have a one-sentence value statement and a short technical detail. This section acts as a navigation and comprehension layer for the rest of the page.

### 3. Powder Programs

Replace “Our Powders” with a more useful program matrix.

The section should group material and process information into:

- Refractory metals: C-103, tantalum, tungsten, niobium.
- AM alloys: Ti-6Al-4V, nickel-based superalloys, aluminum alloys, copper alloys.
- Particle ranges: nano, LPBF, DED/advanced technologies.
- Custom structures: core-shell and custom powder development.

Microscopy images should support these groups as evidence plates with concise technical captions.

### 4. Production Platform

Replace “Our Technology” with a production platform narrative.

Show:

- Equipment image.
- Plasma arc evidence.
- Process chain: feedstock wire, plasma arc, localized melting, spherical particle formation, classification.
- Key operating notes: wire diameter, proprietary torch, argon atmosphere, consumable cathode wire.

This section should make the production route legible without forcing the reader through a long paragraph.

### 5. Recycling Route

Present recycling as a production capability:

> Return high-value metal feedstock into AM-ready powder.

List accepted feedstock and make the result explicit: spherical powder with controlled particle-size distribution for additive manufacturing.

### 6. RFQ / Contact

Replace the generic contact block with an RFQ-oriented handoff.

Ask prospects to send:

- Material or alloy.
- Target AM process.
- Particle-size range.
- Approximate volume.
- Feedstock form if recycling is relevant.

The current conversion remains `office@ammatz.com`.

## Content Model Changes

Keep the typed content model, but reshape it around the new narrative:

- `hero`
- `capabilities`
- `powderPrograms`
- `productionPlatform`
- `recyclingRoute`
- `rfq`

The current extracted assets remain valid and should be reused.

## Component Direction

Use focused presentation components:

- `BlueprintFrame`
- `MeasurementLabel`
- `SpecPanel`
- `CapabilityIndex`
- `ProgramMatrix`
- `EvidencePlate`
- `ProcessChain`
- `RfqChecklist`

Do not overbuild a design system before the visual direction stabilizes. Components should serve this page first, with clear boundaries for later extraction.

## Verification

Implementation should pass:

- `npm run lint`
- `npm run build`
- Runtime content smoke check for all core sections and image assets.
- Desktop and mobile visual smoke checks at approximately 1440px and 390px.

Visual acceptance criteria:

- First screen communicates AM powder production, not just “company hero”.
- Content is scannable without reading every paragraph.
- Blueprint style is visible through layout, linework, data panels, and image treatment.
- No obvious text overlap or horizontal scroll on mobile.
- Real AMMatz images are visible and meaningfully placed.
