import Link from "next/link";

function LogoMark() {
  return (
    <svg
      aria-hidden="true"
      className="size-14 shrink-0"
      viewBox="0 0 72 72"
      fill="none"
    >
      <g
        stroke="currentColor"
        strokeLinecap="square"
        strokeLinejoin="miter"
        strokeWidth="1.7"
      >
        <path d="M12 17 28 8 44 17 28 26Z" />
        <path d="M28 26v18L12 35V17" />
        <path d="M28 26 44 17v18L28 44" />
        <path d="M28 8v18M20 12.5l16 9" />
        <path d="M28 44 44 53 60 44V26" />
        <path d="M44 35 60 26M44 35v18" />
        <path d="M12 35 28 44 12 53" />
        <path d="M12 53 28 62 44 53" />
        <path d="M12 35v18" />
      </g>
      <path
        d="M12 17 28 8 44 17"
        stroke="var(--primary)"
        strokeWidth="2"
      />
    </svg>
  );
}

export default function Home() {
  return (
    <main className="mx-auto flex min-h-dvh w-full max-w-[var(--page-max)] flex-col px-4 py-8 text-foreground sm:px-10 lg:px-[var(--page-pad-desktop)]">
      <header className="grid gap-6 md:grid-cols-[4fr_8fr]">
        <Link className="flex w-fit items-start gap-3" href="/" aria-label="AMMatz home">
          <LogoMark />
          <span className="text-3xl leading-none font-medium">
            AMMatz
            <br />
            Group
            <span className="mt-2 block font-mono text-[10px] leading-tight text-muted-foreground">
              Advanced Materials &amp; Manufacturing
            </span>
          </span>
        </Link>
        <nav
          aria-label="Primary navigation"
          className="flex flex-wrap items-center gap-x-8 gap-y-3 text-sm md:justify-end"
        >
          <a className="transition-colors hover:text-primary" href="#powders">
            Our Powders
          </a>
          <a className="transition-colors hover:text-primary" href="#technology">
            Our Technology
          </a>
          <a className="transition-colors hover:text-primary" href="#recycling">
            Metal Recycling
          </a>
          <a
            className="border border-border px-4 py-3 transition-colors hover:border-primary hover:text-primary"
            href="mailto:office@ammatz.com"
          >
            Contact Us
          </a>
        </nav>
      </header>

      <section className="grid flex-1 items-center gap-10 py-16 md:grid-cols-[5fr_7fr] md:py-24">
        <div className="flex max-w-xl flex-col items-start">
          <p className="text-lg leading-7 md:text-xl">
            Israel&apos;s first specialized producer of
          </p>
          <h1 className="mt-4 text-5xl leading-none font-semibold tracking-[-0.035em] md:text-7xl">
            Advanced
            <br />
            Metal Powders
          </h1>
          <p className="mt-5 text-xl text-muted-foreground md:text-2xl">
            for additive manufacturing
          </p>
          <dl className="mt-8 grid w-full max-w-80 grid-cols-[72px_1fr] gap-x-4 gap-y-2 border border-border px-4 py-4 font-mono text-xs leading-tight">
            <dt className="text-muted-foreground">SYSTEM</dt>
            <dd>PLASMA ATOMIZATION UNIT</dd>
            <dt className="text-muted-foreground">MODEL</dt>
            <dd>AMMATZ-PA500</dd>
            <dt className="text-muted-foreground">SCALE</dt>
            <dd>1:20</dd>
          </dl>
        </div>

        <div
          aria-label="Blueprint artwork placeholder"
          className="flex min-h-72 items-center justify-center border border-border bg-card/40 p-8"
        >
          <div className="grid size-56 place-items-center rounded-full border border-border">
            <div className="grid size-36 place-items-center rounded-full border border-border">
              <div className="size-16 rounded-full border border-primary" />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
