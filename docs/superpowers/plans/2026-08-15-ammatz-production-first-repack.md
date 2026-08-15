# AMMatz Production-First Repack Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Rebuild the AMMatz landing page into an application/production-first engineering blueprint that is scannable, credible, and visually distinct from a generic landing page.

**Architecture:** Keep the static-first Next.js App Router app. Reshape `app/landing/content.ts` around the approved narrative, split the large page component into focused blueprint presentation components, and update global tokens only where the blueprint system needs additional semantic surfaces.

**Tech Stack:** Next.js 16 App Router, React 19, TypeScript, Tailwind v4, local assets under `public/assets`, static rendering.

---

## File Structure

- Modify `app/landing/content.ts`: replace generic landing sections with production-first data: hero claim, capability index, powder programs, production platform, recycling route, RFQ checklist.
- Replace `app/landing/landing-page.tsx`: compose the page from blueprint-focused components and remove the current generic section layout.
- Create `app/landing/blueprint-components.tsx`: shared presentational primitives for blueprint frames, measurement labels, spec panels, evidence plates, program matrices, process chains, and RFQ lists.
- Modify `app/globals.css`: add blueprint-specific semantic tokens and subtle technical background treatment while preserving AMMatz navy/white/orange identity.
- Modify `.codex/blocks/M-03.md`: track the repack block if the file does not exist yet.

---

### Task 1: Track M-03 Repack Block

**Files:**
- Create: `.codex/blocks/M-03.md`

- [ ] **Step 1: Add block tracker**

Create `.codex/blocks/M-03.md` with:

```markdown
# Block: M-03 - Production-First Blueprint Repack

Last updated: 2026-08-15

## Block Goal

Repackage the AMMatz landing page into an application/production-first engineering blueprint experience.

## Definition of Done

The page communicates AM powder production first, uses a blueprint-style visual system, structures material and process content for scanning, and passes lint/build/runtime checks.

## Tasks

| ID | Task | Status | Done When |
|---|---|---|---|
| M-03-T1 | Track repack block | done | Block file exists and defines scope |
| M-03-T2 | Reshape content model | pending | Content data follows hero, capabilities, powder programs, production platform, recycling route, RFQ |
| M-03-T3 | Build blueprint primitives | pending | Shared primitives support blueprint frames, labels, spec panels, evidence plates, process chains |
| M-03-T4 | Rebuild production-first page | pending | Page renders the approved structure with real assets |
| M-03-T5 | Verify and push | pending | Lint/build/runtime and visual smoke checks pass, branch is pushed |

## Active Task

| Field | Value |
|---|---|
| Task ID | M-03-T2 |
| Title | Reshape content model |
| Status | pending |
| Done When | Content data follows hero, capabilities, powder programs, production platform, recycling route, RFQ |

## Session Log

| Date | Task ID | Status | Note |
|---|---|---|---|
| 2026-08-15 | M-03-T1 | done | Repack block opened after approval of production-first blueprint spec. |
```

- [ ] **Step 2: Commit**

Run:

```bash
git add .codex/blocks/M-03.md
git commit -m "docs: open production-first repack block"
```

Expected: commit succeeds.

---

### Task 2: Reshape Content Model

**Files:**
- Modify: `app/landing/content.ts`
- Modify: `.codex/blocks/M-03.md`

- [ ] **Step 1: Replace content model**

Replace `app/landing/content.ts` with a typed model containing these exports:

```ts
export type LandingImage = {
  src: string;
  alt: string;
  width: number;
  height: number;
};

export type NavItem = {
  label: string;
  href: string;
  isPrimary?: boolean;
};

export const brand = {
  name: "AMMatz Group",
  shortName: "AMMatz",
  descriptor: "Advanced Materials & Manufacturing",
  email: "office@ammatz.com",
};

export const navItems: NavItem[] = [
  { label: "Powder Programs", href: "#powder-programs" },
  { label: "Production Platform", href: "#production-platform" },
  { label: "Recycling Route", href: "#recycling-route" },
  { label: "RFQ", href: "#rfq", isPrimary: true },
];
```

Keep the existing image paths and dimensions from `public/assets/manifest.json`.

- [ ] **Step 2: Add production-first page data**

Add:

```ts
export const landingContent = {
  hero: {
    eyebrow: "AM-ready metal powders",
    title: "Metal powder production for advanced additive manufacturing.",
    summary:
      "AMMatz develops tailored metal powders, plasma atomization equipment, and recycling routes for high-value metal feedstock.",
    proofPoints: [
      "Tailored powder characteristics for AM processes",
      "Proprietary plasma atomization platform developed in Israel",
      "Recycling route from valuable feedstock to spherical powder",
    ],
    systemFacts: [
      { label: "Core route", value: "Plasma atomization" },
      { label: "Feedstock", value: "Wire, scrap, reused powder" },
      { label: "Output", value: "Spherical AM powder" },
      { label: "Materials", value: "Refractory metals and AM alloys" },
    ],
    image: {
      src: "/assets/atomization-equipment-blueprint.png",
      alt: "Blueprint drawing of AMMatz atomization equipment",
      width: 1216,
      height: 746,
    } satisfies LandingImage,
  },
  capabilities: [
    {
      id: "powder-development",
      title: "Powder Development",
      statement: "Powder chemistry, morphology, and particle size are tuned for target AM routes.",
      detail: "Programs cover refractory metals, titanium alloys, nickel-based superalloys, aluminum alloys, copper alloys, nano powders, LPBF, DED, and core-shell structures.",
    },
    {
      id: "plasma-atomization",
      title: "Plasma Atomization",
      statement: "The production route is built around proprietary plasma atomization equipment.",
      detail: "Wire feedstock acts as a consumable cathode in an argon plasma arc, forming spherical particles directly from localized melting.",
    },
    {
      id: "metal-recovery",
      title: "Metal Recovery",
      statement: "High-value feedstock can be returned to the production cycle as AM-ready powder.",
      detail: "Accepted streams include machining chips, swarf, solid scrap, offcuts, and reused additive-manufacturing powder.",
    },
  ],
  powderPrograms: {
    id: "powder-programs",
    title: "Powder Programs",
    intro:
      "AMMatz structures powder work around material families, target process windows, and particle architecture rather than a static catalog.",
    groups: [
      {
        title: "Refractory metals",
        items: ["C-103 (Nb-Hf-Ti)", "Tantalum", "Tungsten", "Niobium"],
      },
      {
        title: "AM alloys",
        items: ["Ti-6Al-4V", "Nickel-based superalloys", "Aluminum alloys", "Copper alloys"],
      },
      {
        title: "Particle windows",
        items: ["20-300 nm nano powders", "20-63 um LPBF", "63-150 um DED and advanced technologies"],
      },
      {
        title: "Custom structures",
        items: ["Core-shell powders", "Custom powder development", "Composition and morphology tuning"],
      },
    ],
  },
  productionPlatform: {
    id: "production-platform",
    title: "Production Platform",
    intro:
      "The platform combines proprietary equipment, plasma-torch design, argon atmosphere control, and process know-how for spherical powder production.",
    equipmentImage: {
      src: "/assets/atomization-equipment-photo.png",
      alt: "AMMatz proprietary atomization equipment",
      width: 1216,
      height: 746,
    } satisfies LandingImage,
    plasmaImage: {
      src: "/assets/argon-plasma-arc.png",
      alt: "Real argon plasma arc",
      width: 634,
      height: 284,
    } satisfies LandingImage,
    process: [
      "Feedstock wire diameter: 1.5-5 mm",
      "Wire functions as a consumable cathode",
      "Plasma arc generated in argon atmosphere",
      "Localized melting at the wire tip",
      "Direct formation of spherical powder particles",
      "Classification for target particle-size windows",
    ],
  },
  recyclingRoute: {
    id: "recycling-route",
    title: "Recycling Route",
    claim: "Return high-value metal feedstock into AM-ready powder.",
    body:
      "AMMatz is developing a metal recycling platform based on plasma melting and gas atomization, producing spherical powders with controlled particle-size distribution.",
    acceptedFeedstock: [
      "Machining chips and swarf",
      "Solid metal scrap and offcuts",
      "Reused additive-manufacturing powder",
      "Other high-performance metal feedstock",
    ],
  },
  rfq: {
    id: "rfq",
    title: "Start a technical conversation",
    body:
      "Send the material target, AM process, particle-size range, approximate volume, and feedstock form if recycling is relevant.",
    checklist: [
      "Material or alloy",
      "Target AM process",
      "Particle-size range",
      "Approximate volume",
      "Feedstock form for recycling projects",
    ],
  },
} as const;
```

- [ ] **Step 3: Mark tracker**

Update `.codex/blocks/M-03.md` so `M-03-T2` is `done` and `M-03-T3` is `active`.

- [ ] **Step 4: Commit**

Run:

```bash
git add app/landing/content.ts .codex/blocks/M-03.md
git commit -m "feat: reshape landing content narrative"
```

Expected: commit succeeds.

---

### Task 3: Build Blueprint Primitives

**Files:**
- Create: `app/landing/blueprint-components.tsx`
- Modify: `app/globals.css`
- Modify: `.codex/blocks/M-03.md`

- [ ] **Step 1: Add blueprint components**

Create `app/landing/blueprint-components.tsx` with focused React components:

```tsx
import Image from "next/image";
import type { LandingImage } from "./content";

export function BlueprintFrame({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={`relative border border-border bg-[var(--blueprint-panel)] ${className}`}>
      <span className="pointer-events-none absolute left-3 top-3 size-2 border-l border-t border-primary" />
      <span className="pointer-events-none absolute right-3 top-3 size-2 border-r border-t border-primary" />
      <span className="pointer-events-none absolute bottom-3 left-3 size-2 border-b border-l border-primary" />
      <span className="pointer-events-none absolute bottom-3 right-3 size-2 border-b border-r border-primary" />
      {children}
    </div>
  );
}

export function MeasurementLabel({ children }: { children: React.ReactNode }) {
  return (
    <p className="font-mono text-[11px] uppercase leading-none tracking-normal text-primary">
      {children}
    </p>
  );
}

export function SpecPanel({
  items,
}: {
  items: ReadonlyArray<{ label: string; value: string }>;
}) {
  return (
    <dl className="grid gap-px border border-border bg-border font-mono text-xs">
      {items.map((item) => (
        <div className="grid grid-cols-[112px_1fr] bg-[var(--blueprint-panel)]" key={item.label}>
          <dt className="px-3 py-3 text-muted-foreground uppercase">{item.label}</dt>
          <dd className="px-3 py-3 uppercase">{item.value}</dd>
        </div>
      ))}
    </dl>
  );
}

export function EvidencePlate({
  image,
  label,
  className = "",
  priority = false,
}: {
  image: LandingImage;
  label: string;
  className?: string;
  priority?: boolean;
}) {
  return (
    <BlueprintFrame className={className}>
      <Image
        alt={image.alt}
        className="h-full w-full object-cover"
        height={image.height}
        priority={priority}
        src={image.src}
        width={image.width}
      />
      <figcaption className="absolute bottom-0 left-0 border-r border-t border-border bg-background/90 px-3 py-2 font-mono text-[11px] uppercase text-muted-foreground">
        {label}
      </figcaption>
    </BlueprintFrame>
  );
}

export function ProgramMatrix({
  groups,
}: {
  groups: ReadonlyArray<{ title: string; items: readonly string[] }>;
}) {
  return (
    <div className="grid border border-border md:grid-cols-2">
      {groups.map((group) => (
        <section className="border-b border-border p-5 md:border-r" key={group.title}>
          <MeasurementLabel>{group.title}</MeasurementLabel>
          <ul className="mt-5 grid gap-3">
            {group.items.map((item) => (
              <li className="grid grid-cols-[24px_1fr] gap-3 leading-7" key={item}>
                <span className="mt-3 h-px bg-primary" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </section>
      ))}
    </div>
  );
}

export function ProcessChain({ steps }: { steps: readonly string[] }) {
  return (
    <ol className="grid gap-3">
      {steps.map((step, index) => (
        <li className="grid grid-cols-[42px_1fr] border-t border-border pt-4" key={step}>
          <span className="font-mono text-xs text-primary">
            {String(index + 1).padStart(2, "0")}
          </span>
          <span className="leading-7">{step}</span>
        </li>
      ))}
    </ol>
  );
}
```

- [ ] **Step 2: Add blueprint tokens**

Append these variables to `:root` in `app/globals.css`:

```css
  --blueprint-panel: rgba(3, 27, 54, 0.72);
  --blueprint-panel-strong: rgba(6, 40, 79, 0.92);
  --blueprint-paper: rgba(255, 255, 255, 0.94);
  --blueprint-paper-ink: #06284f;
```

Adjust `body` background to include a subtle radial measurement line only if it does not introduce decorative blobs:

```css
  background:
    linear-gradient(var(--ammatz-grid) 1px, transparent 1px),
    linear-gradient(90deg, var(--ammatz-grid) 1px, transparent 1px),
    var(--background);
```

- [ ] **Step 3: Mark tracker**

Update `.codex/blocks/M-03.md` so `M-03-T3` is `done` and `M-03-T4` is `active`.

- [ ] **Step 4: Commit**

Run:

```bash
git add app/landing/blueprint-components.tsx app/globals.css .codex/blocks/M-03.md
git commit -m "feat: add blueprint presentation primitives"
```

Expected: commit succeeds.

---

### Task 4: Rebuild Production-First Page

**Files:**
- Replace: `app/landing/landing-page.tsx`
- Modify: `.codex/blocks/M-03.md`

- [ ] **Step 1: Replace page composition**

Rewrite `app/landing/landing-page.tsx` to:

- import `BlueprintFrame`, `EvidencePlate`, `MeasurementLabel`, `ProcessChain`, `ProgramMatrix`, `SpecPanel`;
- keep the existing `LogoMark`;
- render sections in this order:
  - Header
  - Hero
  - Capability Index
  - Powder Programs
  - Production Platform
  - Recycling Route
  - RFQ

- [ ] **Step 2: Hero requirements**

Hero must:

- use `landingContent.hero.title` as the only `h1`;
- show `proofPoints` as a short indexed list;
- show `systemFacts` through `SpecPanel`;
- render the blueprint equipment image through `EvidencePlate`;
- include a small line label such as `SYSTEM DRAWING / AMMATZ-PA500`.

- [ ] **Step 3: Capability and powder requirements**

Capability Index must render three unequal but aligned blueprint panels, each linking mentally to later sections.

Powder Programs must render:

- intro text;
- `ProgramMatrix`;
- four microscopy evidence plates: tungsten, Ti-6Al-4V, core-shell, AlMg6.

- [ ] **Step 4: Production/recycling/RFQ requirements**

Production Platform must render:

- equipment image;
- plasma image;
- `ProcessChain`;
- concise intro text.

Recycling Route must render:

- the claim as the lead;
- accepted feedstock list;
- result statement.

RFQ must render:

- email CTA;
- checklist of information to send.

- [ ] **Step 5: Mark tracker and commit**

Update `.codex/blocks/M-03.md` so `M-03-T4` is `done` and `M-03-T5` is `active`.

Run:

```bash
git add app/landing/landing-page.tsx .codex/blocks/M-03.md
git commit -m "feat: rebuild landing as production blueprint"
```

Expected: commit succeeds.

---

### Task 5: Verify and Push

**Files:**
- Modify: `.codex/blocks/M-03.md`

- [ ] **Step 1: Run lint**

Run:

```bash
npm run lint
```

Expected: exits 0.

- [ ] **Step 2: Run production build**

Run:

```bash
npm run build
```

Expected: exits 0 and prerenders `/`.

- [ ] **Step 3: Runtime content smoke check**

Run:

```bash
python3 - <<'PY'
from urllib.request import urlopen
html = urlopen('http://localhost:3000/', timeout=5).read().decode('utf-8')
checks = [
    'Metal powder production for advanced additive manufacturing',
    'Powder Programs',
    'Production Platform',
    'Recycling Route',
    'Start a technical conversation',
    'atomization-equipment-blueprint.png',
    'atomization-equipment-photo.png',
    'argon-plasma-arc.png',
]
missing = [item for item in checks if item not in html]
print({'missing': missing, 'length': len(html)})
raise SystemExit(1 if missing else 0)
PY
```

Expected: `missing` is empty.

- [ ] **Step 4: Visual smoke check**

Use the local browser at `http://localhost:3000/` and inspect:

- desktop around 1440px;
- mobile around 390px;
- first viewport communicates production claim;
- no horizontal scroll on mobile;
- blueprint visual language is visible.

- [ ] **Step 5: Close tracker and commit**

Update `.codex/blocks/M-03.md` so `M-03-T5` and the block are `done`, recording the verification commands.

Run:

```bash
git add .codex/blocks/M-03.md
git commit -m "docs: close production-first repack block"
```

Expected: commit succeeds.

- [ ] **Step 6: Push branch**

Run:

```bash
git push origin codex/m-01-scaffold
```

Expected: remote branch updates.
