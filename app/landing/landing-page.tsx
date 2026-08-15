import Image from "next/image";
import Link from "next/link";

import { brand, landingContent, navItems, type LandingImage } from "./content";

function LogoMark() {
  return (
    <svg
      aria-hidden="true"
      className="size-14 shrink-0 text-foreground"
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
      <path d="M12 17 28 8 44 17" stroke="var(--primary)" strokeWidth="2" />
    </svg>
  );
}

function RecyclingMark() {
  return (
    <svg
      aria-hidden="true"
      className="size-28 text-primary"
      viewBox="0 0 120 120"
      fill="none"
    >
      <circle cx="60" cy="60" r="48" stroke="currentColor" strokeWidth="1.5" />
      <path
        d="M63 24 79 34 65 43M78 34H54c-11 0-20 9-20 20v2"
        stroke="currentColor"
        strokeLinecap="square"
        strokeLinejoin="miter"
        strokeWidth="3"
      />
      <path
        d="M95 62 84 78 75 63M84 77 72 57c-6-9-18-12-28-7l-2 1"
        stroke="currentColor"
        strokeLinecap="square"
        strokeLinejoin="miter"
        strokeWidth="3"
      />
      <path
        d="M39 92 20 90 28 73M20 90l12-21c6-10 18-13 28-8l2 1"
        stroke="currentColor"
        strokeLinecap="square"
        strokeLinejoin="miter"
        strokeWidth="3"
      />
    </svg>
  );
}

function PageShell({ children }: { children: React.ReactNode }) {
  return (
    <main className="mx-auto min-h-dvh w-full max-w-[var(--page-max)] px-4 py-6 text-foreground sm:px-10 lg:px-[var(--page-pad-desktop)]">
      {children}
    </main>
  );
}

function Header() {
  return (
    <header className="grid gap-6 border-b border-border pb-6 md:grid-cols-[4fr_8fr]">
      <Link className="flex w-fit items-start gap-3" href="/" aria-label="AMMatz home">
        <LogoMark />
        <span className="text-3xl leading-none font-medium">
          AMMatz
          <br />
          Group
          <span className="mt-2 block font-mono text-[10px] leading-tight text-muted-foreground">
            {brand.descriptor}
          </span>
        </span>
      </Link>
      <nav
        aria-label="Primary navigation"
        className="flex flex-wrap items-center gap-x-8 gap-y-3 text-sm md:justify-end"
      >
        {navItems.map((item) => (
          <a
            className={
              item.isPrimary
                ? "border border-border px-4 py-3 transition-colors hover:border-primary hover:text-primary"
                : "transition-colors hover:text-primary"
            }
            href={item.href}
            key={item.href}
          >
            {item.label}
          </a>
        ))}
      </nav>
    </header>
  );
}

function SpecBox({
  items,
}: {
  items: ReadonlyArray<{ label: string; value: string }>;
}) {
  return (
    <dl className="grid w-full max-w-86 grid-cols-[76px_1fr] gap-x-4 gap-y-2 border border-border bg-background/30 px-4 py-4 font-mono text-xs leading-tight">
      {items.map((item) => (
        <div className="contents" key={item.label}>
          <dt className="text-muted-foreground uppercase">{item.label}</dt>
          <dd className="uppercase">{item.value}</dd>
        </div>
      ))}
    </dl>
  );
}

function EvidenceImage({
  image,
  className = "",
  priority = false,
}: {
  image: LandingImage;
  className?: string;
  priority?: boolean;
}) {
  return (
    <figure
      className={`relative overflow-hidden border border-border bg-card/40 ${className}`}
    >
      <Image
        alt={image.alt}
        className="h-full w-full object-cover"
        height={image.height}
        priority={priority}
        src={image.src}
        width={image.width}
      />
    </figure>
  );
}

function SectionHeading({
  title,
  subtitle,
}: {
  title: string;
  subtitle?: string;
}) {
  return (
    <div className="max-w-3xl">
      <p className="font-mono text-xs uppercase text-primary">AMMatz</p>
      <h2 className="mt-3 text-4xl leading-tight font-semibold md:text-5xl">
        {title}
      </h2>
      {subtitle ? (
        <p className="mt-4 text-lg leading-8 text-muted-foreground">
          {subtitle}
        </p>
      ) : null}
    </div>
  );
}

function DataList({
  title,
  items,
}: {
  title: string;
  items: ReadonlyArray<string>;
}) {
  return (
    <section className="border-t border-border pt-5">
      <h3 className="font-mono text-xs uppercase text-muted-foreground">{title}</h3>
      <ul className="mt-4 grid gap-3 text-base leading-7">
        {items.map((item) => (
          <li className="flex gap-3" key={item}>
            <span className="mt-3 h-px w-5 shrink-0 bg-primary" />
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </section>
  );
}

function HeroSection() {
  const { hero } = landingContent;

  return (
    <section className="grid min-h-[calc(100dvh-118px)] items-center gap-10 py-14 md:grid-cols-[5fr_7fr] md:py-20">
      <div className="flex max-w-xl flex-col items-start">
        <p className="text-lg leading-7 md:text-xl">{hero.eyebrow}</p>
        <h1 className="mt-4 text-5xl leading-none font-semibold md:text-7xl">
          Advanced
          <br />
          Metal Powders
        </h1>
        <p className="mt-5 text-xl text-muted-foreground md:text-2xl">
          {hero.subtitle}
        </p>
        <div className="mt-8">
          <SpecBox items={hero.spec} />
        </div>
      </div>
      <EvidenceImage
        className="aspect-[1216/746]"
        image={hero.image}
        priority
      />
    </section>
  );
}

function WhySection() {
  const { why } = landingContent;

  return (
    <section
      className="grid gap-10 border-t border-border py-[var(--section-gap-mobile)] md:grid-cols-[4fr_8fr] md:py-[var(--section-gap)]"
      id={why.id}
    >
      <SectionHeading title={why.title} />
      <div className="grid gap-8">
        <p className="max-w-4xl text-xl leading-9 text-muted-foreground">
          {why.body}
        </p>
        <div className="grid gap-4 md:grid-cols-3">
          {why.facts.map((fact, index) => (
            <div className="border-t border-border pt-4" key={fact}>
              <p className="font-mono text-xs text-primary">
                {String(index + 1).padStart(2, "0")}
              </p>
              <p className="mt-3 leading-7">{fact}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function PowdersSection() {
  const { powders } = landingContent;

  return (
    <section
      className="border-t border-border py-[var(--section-gap-mobile)] md:py-[var(--section-gap)]"
      id={powders.id}
    >
      <div className="grid gap-10 md:grid-cols-[4fr_8fr]">
        <SectionHeading title={powders.title} subtitle={powders.subtitle} />
        <p className="max-w-4xl text-xl leading-9 text-muted-foreground">
          {powders.body}
        </p>
      </div>

      <div className="mt-12 grid gap-8 lg:grid-cols-[4fr_4fr_4fr]">
        <DataList items={powders.materials} title="Materials" />
        <section className="border-t border-border pt-5">
          <h3 className="font-mono text-xs uppercase text-muted-foreground">
            Particle Size
          </h3>
          <dl className="mt-4 grid gap-4">
            {powders.sizes.map((size) => (
              <div
                className="grid gap-2 border-b border-border/70 pb-4 sm:grid-cols-[112px_1fr]"
                key={size.label}
              >
                <dt className="font-mono text-sm text-primary">{size.label}</dt>
                <dd className="leading-7">{size.value}</dd>
              </div>
            ))}
          </dl>
        </section>
        <section className="border-t border-border pt-5">
          <h3 className="font-mono text-xs uppercase text-muted-foreground">
            Composition
          </h3>
          <div className="mt-4 grid gap-5">
            {powders.composition.map((item) => (
              <article className="border-b border-border/70 pb-5" key={item.title}>
                <h4 className="text-lg font-semibold">{item.title}</h4>
                <p className="mt-2 leading-7 text-muted-foreground">{item.body}</p>
              </article>
            ))}
          </div>
        </section>
      </div>

      <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {powders.images.map((image) => (
          <article className="border border-border bg-card/30" key={image.src}>
            <EvidenceImage className="aspect-[4/3] border-0" image={image} />
            <div className="border-t border-border px-4 py-3">
              <h3 className="font-mono text-xs uppercase text-muted-foreground">
                {image.title}
              </h3>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

function TechnologySection() {
  const { technology } = landingContent;

  return (
    <section
      className="border-t border-border py-[var(--section-gap-mobile)] md:py-[var(--section-gap)]"
      id={technology.id}
    >
      <div className="grid gap-10 md:grid-cols-[4fr_8fr]">
        <SectionHeading
          title={technology.title}
          subtitle={technology.subtitle}
        />
        <EvidenceImage
          className="aspect-[1216/746]"
          image={technology.equipmentImage}
        />
      </div>

      <div className="mt-12 grid gap-10 lg:grid-cols-[7fr_5fr]">
        <div>
          <h3 className="text-3xl leading-tight font-semibold">
            {technology.processTitle}
          </h3>
          <p className="mt-5 text-lg leading-8 text-muted-foreground">
            {technology.body}
          </p>
          <ul className="mt-8 grid gap-3 md:grid-cols-2">
            {technology.highlights.map((highlight) => (
              <li
                className="border-t border-border pt-4 leading-7"
                key={highlight}
              >
                {highlight}
              </li>
            ))}
          </ul>
        </div>
        <EvidenceImage
          className="aspect-[634/284] self-start"
          image={technology.plasmaImage}
        />
      </div>
    </section>
  );
}

function RecyclingSection() {
  const { recycling } = landingContent;

  return (
    <section
      className="grid gap-10 border-t border-border py-[var(--section-gap-mobile)] md:grid-cols-[4fr_8fr] md:py-[var(--section-gap)]"
      id={recycling.id}
    >
      <div>
        <SectionHeading title={recycling.title} subtitle={recycling.subtitle} />
        <div className="mt-10">
          <RecyclingMark />
        </div>
      </div>
      <div className="grid gap-8">
        <p className="max-w-4xl text-xl leading-9 text-muted-foreground">
          {recycling.body}
        </p>
        <DataList items={recycling.feedstock} title="Accepted Feedstock" />
        <p className="border-l-2 border-primary pl-5 text-lg leading-8">
          {recycling.note}
        </p>
      </div>
    </section>
  );
}

function ContactSection() {
  const { contact } = landingContent;

  return (
    <section
      className="grid gap-10 border-y border-border py-[var(--section-gap-mobile)] md:grid-cols-[4fr_8fr] md:py-[var(--section-gap)]"
      id={contact.id}
    >
      <SectionHeading title={contact.title} />
      <div>
        <p className="max-w-2xl text-xl leading-9 text-muted-foreground">
          {contact.body}
        </p>
        <a
          className="mt-8 inline-flex border border-primary px-5 py-4 font-mono text-sm uppercase text-primary transition-colors hover:bg-primary hover:text-primary-foreground"
          href={`mailto:${brand.email}`}
        >
          {brand.email}
        </a>
      </div>
    </section>
  );
}

export function LandingPage() {
  return (
    <PageShell>
      <Header />
      <HeroSection />
      <WhySection />
      <PowdersSection />
      <TechnologySection />
      <RecyclingSection />
      <ContactSection />
    </PageShell>
  );
}
