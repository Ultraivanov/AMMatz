# AMMatz Design System Master

Last updated: 2026-08-15

> Logic: when building a specific page, first check `design-system/ammatz/pages/[page-name].md`.
> If that file exists, its rules override this master file. If not, follow this file.

## Product Context

AMMatz is a B2B industrial advanced-materials company focused on metal powders for additive manufacturing, proprietary plasma atomization equipment, and metal recycling. The website must feel precise, technical, credible, and export-ready. It should preserve the current blueprint/industrial language while improving maintainability, responsive behavior, accessibility, and conversion clarity.

## Design Positioning

| Dimension | Direction |
|---|---|
| Category | Industrial B2B / advanced manufacturing / materials technology |
| Audience | Engineers, AM specialists, R&D teams, procurement, investors, strategic partners |
| Tone | Technical, confident, direct, evidence-led |
| Visual posture | Blueprint precision, laboratory proof, controlled energy |
| Primary conversion | Contact AMMatz about powder development, technology, or recycling |
| Secondary conversion | Build trust in AMMatz technical capability and Israeli manufacturing base |

## Core Principles

- Lead with technical credibility, not marketing decoration.
- Preserve the current navy/white/orange AMMatz identity.
- Use real assets: equipment, powders, microscopy, plasma arc, schematic marks.
- Treat images as evidence, not stock atmosphere.
- Keep copy scannable without weakening scientific claims.
- Use semantic design tokens so the future shadcn/ui implementation can map cleanly to components.
- Avoid decorative gradients, blobs, emoji icons, oversized cards, and generic SaaS styling.

## Color System

### Brand Tokens

| Token | Hex | Usage |
|---|---|---|
| `--ammatz-blue-950` | `#031b36` | Deepest page depth, footer, image backing |
| `--ammatz-blue-900` | `#06284f` | Primary page background |
| `--ammatz-blue-850` | `#07315e` | Section depth and alternate panels |
| `--ammatz-blue-800` | `#08386c` | Hover surfaces, technical blocks |
| `--ammatz-blue-700` | `#0a4388` | Secondary action and link hover |
| `--ammatz-orange` | `#ff6b35` | Primary accent, CTA outline/fill, critical schematic strokes |
| `--ammatz-cyan` | `#7dd3fc` | Optional technical highlight, data/measurement accents |
| `--ammatz-white` | `#ffffff` | Primary text on navy |
| `--ammatz-text-muted` | `rgba(255,255,255,0.76)` | Secondary text on navy |
| `--ammatz-line` | `rgba(255,255,255,0.32)` | Standard technical borders |
| `--ammatz-line-strong` | `rgba(255,255,255,0.62)` | CTA borders, emphasis lines |
| `--ammatz-grid` | `rgba(255,255,255,0.055)` | Background grid lines |
| `--ammatz-surface-light` | `#f8fafc` | Light image/spec surfaces only |
| `--ammatz-ink` | `#020617` | Text on light surfaces |

### shadcn Semantic Mapping

Use this mapping when Tailwind/shadcn is introduced:

| Semantic Token | AMMatz Value | Notes |
|---|---|---|
| `background` | `#06284f` | Default page background |
| `foreground` | `#ffffff` | Default text |
| `card` | `#07315e` | Technical panels only, not nested cards |
| `card-foreground` | `#ffffff` | Panel text |
| `primary` | `#ff6b35` | Main CTA/accent |
| `primary-foreground` | `#ffffff` | CTA text |
| `secondary` | `#08386c` | Secondary button/surface |
| `secondary-foreground` | `#ffffff` | Secondary text |
| `muted` | `rgba(255,255,255,0.10)` | Muted technical surface |
| `muted-foreground` | `rgba(255,255,255,0.76)` | Secondary text |
| `border` | `rgba(255,255,255,0.32)` | Technical borders |
| `input` | `rgba(255,255,255,0.32)` | Form border |
| `ring` | `#ff6b35` | Focus ring |
| `destructive` | `#dc2626` | Error state |

### Color Rules

- Dominant surface should remain AMMatz navy, balanced with white text and image evidence.
- Orange is reserved for CTAs, schematic emphasis, active nav, and small technical highlights.
- Do not introduce broad purple, beige, brown, or generic blue-gradient palettes.
- On light image cards, use black/ink text only when text overlays are necessary; prefer captions outside images.

## Typography

### Font Stack

| Role | Font | Use |
|---|---|---|
| Display and UI | Inter | Headings, body, navigation, buttons |
| Technical labels | IBM Plex Mono | Specs, labels, measurements, numbered sections |
| Fallback | Arial / Helvetica / sans-serif | Browser fallback |

Recommended import:

```css
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&family=IBM+Plex+Mono:wght@400;500&display=swap');
```

### Type Scale

| Token | Desktop | Mobile | Usage |
|---|---:|---:|---|
| `display` | 72px / 0.98 | 44px / 1.0 | Hero headline only |
| `h1` | 64px / 1.0 | 42px / 1.05 | Page-level headline if hero changes |
| `h2` | 42px / 1.05 | 34px / 1.1 | Section titles |
| `h3` | 22px / 1.25 | 20px / 1.3 | Section subtitles |
| `body-lg` | 18px / 1.55 | 17px / 1.55 | Lead paragraphs |
| `body` | 16px / 1.65 | 16px / 1.6 | General copy |
| `nav` | 14px / 1.2 | 13px / 1.2 | Navigation |
| `mono` | 12px / 1.2 | 12px / 1.2 | Specs and labels |

### Typography Rules

- Do not use negative letter spacing except the hero headline, where `-0.035em` is allowed.
- Use IBM Plex Mono sparingly for information architecture, not long prose.
- Body text should stay at 16px minimum on mobile.
- Keep desktop line length around 60-75 characters and mobile around 35-60 characters.

## Spacing And Layout

### Layout Grid

| Token | Value | Usage |
|---|---|---|
| `--page-max` | `1440px` | Maximum page width |
| `--page-pad-desktop` | `120px` | Desktop side padding |
| `--page-pad-tablet` | `40px` | Tablet side padding |
| `--page-pad-mobile` | `16px` | Mobile side padding |
| `--grid-columns` | `12` | Desktop content grid |
| `--gutter` | `24px` | Desktop gutter |
| `--gutter-mobile` | `16px` | Mobile gutter |
| `--section-gap` | `72px` | Desktop vertical section spacing |
| `--section-gap-mobile` | `48px` | Mobile vertical spacing |

### Layout Rules

- Use full-width page bands or unframed sections; do not put page sections inside decorative cards.
- Use cards only for repeated product/capability items, modals, and framed tools.
- Preserve a technical 12-column desktop rhythm and collapse predictably on mobile.
- Define stable image aspect ratios and dimensions to prevent layout shift.
- Keep first viewport brand signal obvious: logo, AMMatz name, hero claim, and technical image.
- Hero should reveal a hint of the next section on common desktop and mobile heights.

## Components

### Header

- Left: logo mark plus AMMatz Group name and tagline.
- Right: anchor navigation and contact CTA.
- Mobile: wrap navigation cleanly or collapse into a compact menu once implementation justifies it.
- Active/hover states: underline or orange technical line, not pill-heavy styling.

### Buttons And Links

- Primary CTA: orange border or fill depending on background density.
- Secondary links: white text with underline or technical rule on hover.
- All clickable controls need visible focus states and `cursor-pointer`.
- For shadcn buttons, use variants first and theme tokens before custom color classes.

### Technical Spec Box

- Use IBM Plex Mono.
- Two-column label/value grid.
- Border: `--ammatz-line-strong`.
- Keep values concise and aligned; no wrapping that creates ambiguous label/value pairs.

### Powder Capability Columns

- Three-column desktop layout: Materials, Size, Composition.
- Each item has a mono section number and title.
- Image rows are evidence strips, not decorative thumbnails.
- Mobile should stack columns and preserve all scientific content.

### Technology Section

- Treat as the credibility anchor of the page.
- Use equipment imagery and process highlights.
- Highlights can map to `Card` or a bordered technical panel, but avoid nested cards.
- Process bullets should be short and measurable where possible.

### Recycling Section

- Replace visible emoji with a consistent SVG/icon or technical circular-arrow mark.
- Feedstock list should remain compact and scannable.
- Contact prompt should be explicit and accessible.

### Contact

- MVP may use `mailto:office@ammatz.com`.
- Production-ready version should keep room for a future contact form, analytics event, or CRM endpoint.
- Email text must be selectable and visible without relying on icon-only affordances.

## Imagery

### Required Asset Types

- Blueprint/equipment schematic for hero.
- Microscopy/powder evidence images for powders.
- Real equipment image for technology credibility.
- Plasma arc image for process energy.
- Optional technical diagrams only if they clarify process or capability.

### Asset Rules

- Extract base64 images into named files before implementation.
- Prefer AVIF/WebP for production, with explicit width/height or CSS aspect-ratio.
- Do not crop microscopy images so aggressively that material evidence is lost.
- Use lazy loading below the fold.
- Provide descriptive alt text for meaningful images; use empty alt only for purely decorative lines or marks.

## Motion

- Default transitions: 150-250ms ease-out.
- Use transform and opacity only for animation.
- Motion should clarify interaction or section progression.
- Respect `prefers-reduced-motion`.
- Avoid scroll-jacking and mandatory scroll-snap for the production site.

## Accessibility

- Contrast must meet WCAG AA: 4.5:1 for normal text, 3:1 for large text.
- Keyboard focus must be visible on navigation, CTA, contact links, and any future form controls.
- Heading order should remain logical: one `h1`, then section `h2`, subsection `h3`.
- Do not use emoji as icons.
- Icon-only controls need accessible labels.
- Mobile touch targets should be at least 44px high.

## Performance

- Current HTML is about 3.8 MB because images are embedded as base64; production must extract and optimize assets.
- Use static rendering for the landing page unless a dynamic contact form requires server behavior.
- Reserve dimensions for all image containers to keep CLS low.
- Load only required font weights: Inter 400/500/600 and IBM Plex Mono 400/500.
- Avoid heavy animation libraries for the MVP.

## Content Rules

- Preserve technical claims unless the user explicitly approves copy changes.
- Prefer scannable micro-structure: short paragraphs, spec rows, bullet clusters, and section summaries.
- Do not invent certifications, production capacity, clients, test results, or regulatory claims.
- Keep "Israel's first specialized producer" unless user asks to verify or adjust the claim.
- Keep contact email as `office@ammatz.com`.

## Page Pattern

Recommended MVP one-page sequence:

1. Header
2. Hero: AMMatz positioning, additive manufacturing claim, technical equipment image/spec
3. Why AMMatz: experience and proprietary process
4. Our Powders: materials, size, composition
5. Our Technology: atomization equipment and plasma process
6. Metal Recycling: platform and feedstock sources
7. Contact: email and concise CTA

Future expansion can split product/technology/recycling into dedicated pages after the landing page is production-ready.

## Anti-Patterns

- Generic SaaS gradient hero.
- Decorative blobs, bokeh, abstract orbs, or atmospheric stock imagery.
- Emoji icons.
- Over-rounded marketing cards.
- Nested cards.
- One-note blue-only palette with no orange technical accent.
- Dense long paragraphs without scan points.
- Image-only proof with no captions or alt text.
- Hidden focus states.
- Hover effects that shift layout.
- Overwriting shadcn component styling with raw color utility classes.

## Pre-Delivery Checklist

- [ ] Brand signal is visible in the first viewport.
- [ ] Page works at 375, 768, 1024, and 1440px.
- [ ] No horizontal scroll on mobile.
- [ ] One `h1` and logical heading hierarchy.
- [ ] All meaningful images have alt text.
- [ ] All below-fold images are lazy loaded.
- [ ] All image containers reserve stable dimensions.
- [ ] All interactive controls have visible focus states.
- [ ] No emoji icons.
- [ ] Contact path is clear and accessible.
- [ ] `prefers-reduced-motion` is respected.
- [ ] Lighthouse/performance pass is run before launch.

