# AMMatz MVP Scaffold Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Create a working Next.js TypeScript/Tailwind scaffold for the AMMatz production landing site.

**Architecture:** The scaffold is a static-first Next.js App Router app. This block establishes tooling, semantic theme tokens, and a minimal AMMatz shell only; the full landing page sections are implemented later in `M-02`.

**Tech Stack:** Next.js App Router, React, TypeScript, Tailwind CSS, ESLint, npm, shadcn-compatible CSS variables.

---

## File Structure

- `package.json` - npm scripts and project dependencies.
- `package-lock.json` - locked dependency graph.
- `next.config.ts` - Next.js configuration.
- `tsconfig.json` - TypeScript configuration.
- `eslint.config.mjs` - lint configuration.
- `postcss.config.mjs` - Tailwind/PostCSS configuration.
- `app/layout.tsx` - root metadata, fonts, document shell.
- `app/page.tsx` - minimal AMMatz placeholder shell for scaffold verification.
- `app/globals.css` - Tailwind import, AMMatz tokens, shadcn-compatible semantic variables.
- `.codex/blocks/M-01.md` - task status and session notes.

## Task 1: Scaffold Next.js App Baseline

**Files:**
- Create: `package.json`
- Create: `package-lock.json`
- Create: `next.config.ts`
- Create: `tsconfig.json`
- Create: `eslint.config.mjs`
- Create: `postcss.config.mjs`
- Create: `app/layout.tsx`
- Create: `app/page.tsx`
- Create: `app/globals.css`
- Modify: `.gitignore`
- Modify: `.codex/blocks/M-01.md`

- [ ] **Step 1: Generate scaffold**

Run:

```bash
npx create-next-app@latest . --ts --eslint --app --src-dir=false --tailwind --import-alias "@/*" --use-npm --yes
```

Expected: Next.js app files are generated in the repository root without replacing `.codex`, `docs`, or `design-system`.

- [ ] **Step 2: Inspect generated files**

Run:

```bash
git status --short
find app -maxdepth 2 -type f | sort
cat package.json
```

Expected: app and config files exist; no unrelated tracked workflow files are removed.

- [ ] **Step 3: Run baseline checks**

Run:

```bash
npm run lint
npm run build
```

Expected: both commands pass before committing.

- [ ] **Step 4: Mark task status**

Update `.codex/blocks/M-01.md`:

```markdown
| M-01-T1 | Scaffold Next.js app baseline | done | App files, package scripts, TypeScript, Tailwind, and lint/build config exist and install cleanly |
```

Set active task to `M-01-T2`.

- [ ] **Step 5: Commit**

Run:

```bash
git add package.json package-lock.json next.config.ts tsconfig.json eslint.config.mjs postcss.config.mjs app .gitignore .codex/blocks/M-01.md
git commit -m "chore: scaffold Next.js app"
```

## Task 2: Add AMMatz Theme Tokens

**Files:**
- Modify: `app/globals.css`
- Modify: `.codex/blocks/M-01.md`

- [ ] **Step 1: Replace default theme with AMMatz tokens**

Edit `app/globals.css` so it contains Tailwind import plus AMMatz CSS variables from `design-system/ammatz/MASTER.md`, mapped to semantic shadcn-compatible names:

```css
@import "tailwindcss";

:root {
  --ammatz-blue-950: #031b36;
  --ammatz-blue-900: #06284f;
  --ammatz-blue-850: #07315e;
  --ammatz-blue-800: #08386c;
  --ammatz-blue-700: #0a4388;
  --ammatz-orange: #ff6b35;
  --ammatz-cyan: #7dd3fc;
  --ammatz-white: #ffffff;
  --ammatz-text-muted: rgba(255, 255, 255, 0.76);
  --ammatz-line: rgba(255, 255, 255, 0.32);
  --ammatz-line-strong: rgba(255, 255, 255, 0.62);
  --ammatz-grid: rgba(255, 255, 255, 0.055);
  --ammatz-surface-light: #f8fafc;
  --ammatz-ink: #020617;

  --background: var(--ammatz-blue-900);
  --foreground: var(--ammatz-white);
  --card: var(--ammatz-blue-850);
  --card-foreground: var(--ammatz-white);
  --primary: var(--ammatz-orange);
  --primary-foreground: var(--ammatz-white);
  --secondary: var(--ammatz-blue-800);
  --secondary-foreground: var(--ammatz-white);
  --muted: rgba(255, 255, 255, 0.1);
  --muted-foreground: var(--ammatz-text-muted);
  --border: var(--ammatz-line);
  --input: var(--ammatz-line);
  --ring: var(--ammatz-orange);
}

body {
  margin: 0;
  background: var(--background);
  color: var(--foreground);
}
```

- [ ] **Step 2: Verify build**

Run:

```bash
npm run lint
npm run build
```

Expected: both commands pass.

- [ ] **Step 3: Mark task status and commit**

Update `M-01-T2` to `done`, set active task to `M-01-T3`, then run:

```bash
git add app/globals.css .codex/blocks/M-01.md
git commit -m "chore: add AMMatz theme tokens"
```

## Task 3: Add Placeholder Shell

**Files:**
- Modify: `app/layout.tsx`
- Modify: `app/page.tsx`
- Modify: `.codex/blocks/M-01.md`

- [ ] **Step 1: Configure metadata and fonts**

Edit `app/layout.tsx` to export AMMatz metadata and load Inter plus IBM Plex Mono through `next/font/google`.

- [ ] **Step 2: Replace default page**

Edit `app/page.tsx` to render a minimal shell:

```tsx
export default function Home() {
  return (
    <main>
      <header>
        <p>AMMatz Group</p>
        <a href="mailto:office@ammatz.com">Contact Us</a>
      </header>
      <section>
        <p>Israel&apos;s first specialized producer of</p>
        <h1>Advanced Metal Powders</h1>
        <p>for additive manufacturing</p>
      </section>
    </main>
  )
}
```

The final implementation should use the project style tokens and not include the complete landing content yet.

- [ ] **Step 3: Verify build**

Run:

```bash
npm run lint
npm run build
```

Expected: both commands pass.

- [ ] **Step 4: Mark task status and commit**

Update `M-01-T3` to `done`, set active task to `M-01-T4`, then run:

```bash
git add app/layout.tsx app/page.tsx .codex/blocks/M-01.md
git commit -m "chore: add AMMatz scaffold shell"
```

## Task 4: Verify Scaffold

**Files:**
- Modify: `.codex/blocks/M-01.md`
- Modify: `.codex/PHASES.md`
- Modify: `.codex/SNAPSHOT.md`

- [ ] **Step 1: Run final checks**

Run:

```bash
npm run lint
npm run build
```

Expected: both commands pass.

- [ ] **Step 2: Start local server**

Run:

```bash
npm run dev
```

Expected: dev server starts, typically at `http://localhost:3000`.

- [ ] **Step 3: Smoke check**

Open the local page and verify:

- AMMatz Group appears.
- Advanced Metal Powders appears as the main heading.
- Contact link points to `mailto:office@ammatz.com`.
- No console/build errors are present.

- [ ] **Step 4: Close block and commit**

Update `M-01-T4` to `done`, mark `M-01` done in `.codex/PHASES.md`, set next active block to `M-02 Landing Page Build`, and commit:

```bash
git add .codex/blocks/M-01.md .codex/PHASES.md .codex/SNAPSHOT.md
git commit -m "docs: close frontend scaffold block"
```

## Risks And Mitigations

| Risk | Impact | Mitigation |
|---|---|---|
| `create-next-app` defaults change | Medium | Inspect generated files before committing and keep changes scoped. |
| Tailwind version mismatch | Medium | Use generated config shape and adapt tokens to that version. |
| Scaffold accidentally implements full landing | Medium | Keep M-01 limited to shell and defer sections/assets to M-02. |
| Dependency install failure | High | Stop and inspect npm error before editing generated files. |

## Checkpoint

After `M-01`:

- [ ] `npm run lint` passes.
- [ ] `npm run build` passes.
- [ ] Local scaffold page renders.
- [ ] Git history has small commits for scaffold, theme, shell, and closeout.

