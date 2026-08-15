import Link from "next/link";

import {
  BlueprintFrame,
  EvidencePlate,
  MeasurementLabel,
  ProcessChain,
  ProgramMatrix,
  SpecPanel,
} from "./blueprint-components";
import { brand, landingContent, navItems } from "./content";

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

function PageShell({ children }: { children: React.ReactNode }) {
  return (
    <main className="mx-auto min-h-dvh w-full max-w-[var(--page-max)] overflow-x-hidden px-4 py-6 text-foreground sm:px-10 lg:px-[var(--page-pad-desktop)]">
      {children}
    </main>
  );
}

function Header() {
  return (
    <header className="grid min-w-0 gap-6 border-b border-border pb-6 md:grid-cols-[4fr_8fr]">
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
        className="grid w-full max-w-[22rem] min-w-0 grid-cols-[minmax(0,1fr)_minmax(0,1fr)] items-center gap-2 text-sm sm:flex sm:max-w-none sm:flex-wrap sm:gap-x-7 sm:gap-y-3 md:justify-end"
      >
        {navItems.map((item) => (
          <a
            className={
              item.isPrimary
                ? "min-w-0 border border-border px-3 py-3 text-center font-mono text-xs uppercase transition-colors hover:border-primary hover:text-primary sm:px-4"
                : "min-w-0 border border-transparent py-2 text-center transition-colors hover:text-primary sm:border-0 sm:py-0 sm:text-left"
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

function SectionShell({
  id,
  title,
  eyebrow,
  intro,
  children,
  className = "",
}: {
  id?: string;
  title: string;
  eyebrow: string;
  intro?: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <section
      className={`border-t border-border py-[var(--section-gap-mobile)] md:py-[var(--section-gap)] ${className}`}
      id={id}
    >
      <div className="grid gap-8 md:grid-cols-[4fr_8fr]">
        <div>
          <MeasurementLabel>{eyebrow}</MeasurementLabel>
          <h2 className="mt-3 text-4xl leading-tight font-semibold md:text-5xl">
            {title}
          </h2>
        </div>
        {intro ? (
          <p className="max-w-4xl text-xl leading-9 text-muted-foreground">
            {intro}
          </p>
        ) : null}
      </div>
      <div className="mt-10">{children}</div>
    </section>
  );
}

function HeroSection() {
  const { hero } = landingContent;

  return (
    <section className="grid min-w-0 gap-10 py-12 md:min-h-[calc(100dvh-118px)] md:grid-cols-[5fr_7fr] md:items-center md:py-18">
      <div className="flex w-full max-w-[22rem] min-w-0 flex-col items-start sm:max-w-2xl">
        <MeasurementLabel>{hero.eyebrow}</MeasurementLabel>
        <h1 className="mt-4 max-w-full text-4xl leading-[0.98] font-semibold break-words sm:text-5xl md:text-7xl">
          {hero.title}
        </h1>
        <p className="mt-6 max-w-xl text-xl leading-8 text-muted-foreground">
          {hero.summary}
        </p>
        <ol className="mt-8 grid gap-4">
          {hero.proofPoints.map((point, index) => (
            <li className="grid grid-cols-[38px_1fr] gap-3" key={point}>
              <span className="font-mono text-xs text-primary">
                P-{String(index + 1).padStart(2, "0")}
              </span>
              <span className="min-w-0 leading-7">{point}</span>
            </li>
          ))}
        </ol>
      </div>

      <div className="grid w-full max-w-[22rem] min-w-0 gap-4 sm:max-w-none">
        <EvidencePlate
          className="aspect-[1216/746]"
          image={hero.image}
          label="System drawing / AMMatz-PA500"
          priority
        />
        <SpecPanel items={hero.systemFacts} />
      </div>
    </section>
  );
}

function CapabilityIndex() {
  return (
    <section className="border-t border-border py-[var(--section-gap-mobile)] md:py-[var(--section-gap)]">
      <div className="grid gap-4 lg:grid-cols-[5fr_3.5fr_3.5fr]">
        {landingContent.capabilities.map((capability, index) => (
          <BlueprintFrame className="min-h-64 p-5" key={capability.id}>
            <MeasurementLabel>
              Capability / {String(index + 1).padStart(2, "0")}
            </MeasurementLabel>
            <h2 className="mt-5 text-3xl leading-tight font-semibold">
              {capability.title}
            </h2>
            <p className="mt-5 text-lg leading-8">{capability.statement}</p>
            <p className="mt-5 text-sm leading-7 text-muted-foreground">
              {capability.detail}
            </p>
          </BlueprintFrame>
        ))}
      </div>
    </section>
  );
}

function PowderProgramsSection() {
  const { powderPrograms } = landingContent;

  return (
    <SectionShell
      eyebrow="Material and process windows"
      id={powderPrograms.id}
      intro={powderPrograms.intro}
      title={powderPrograms.title}
    >
      <div className="grid gap-8 xl:grid-cols-[7fr_5fr]">
        <ProgramMatrix groups={powderPrograms.groups} />
        <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-1">
          {powderPrograms.evidence.map((item) => (
            <EvidencePlate
              className="aspect-[4/3]"
              image={item.image}
              key={item.label}
              label={item.label}
            />
          ))}
        </div>
      </div>
    </SectionShell>
  );
}

function ProductionPlatformSection() {
  const { productionPlatform } = landingContent;

  return (
    <SectionShell
      eyebrow="Equipment and process route"
      id={productionPlatform.id}
      intro={productionPlatform.intro}
      title={productionPlatform.title}
    >
      <div className="grid gap-6 lg:grid-cols-[7fr_5fr]">
        <EvidencePlate
          className="aspect-[1216/746]"
          image={productionPlatform.equipmentImage}
          label="Atomization equipment / production platform"
        />
        <div className="grid gap-6">
          <EvidencePlate
            className="aspect-[634/284]"
            image={productionPlatform.plasmaImage}
            label="Argon plasma arc"
          />
          <SpecPanel items={productionPlatform.operatingNotes} />
        </div>
      </div>
      <BlueprintFrame className="mt-8 p-5">
        <div className="grid gap-8 lg:grid-cols-[3fr_9fr]">
          <div>
            <MeasurementLabel>Process chain</MeasurementLabel>
            <h3 className="mt-4 text-2xl leading-tight font-semibold">
              From feedstock to classified spherical powder
            </h3>
          </div>
          <ProcessChain steps={productionPlatform.process} />
        </div>
      </BlueprintFrame>
    </SectionShell>
  );
}

function RecyclingRouteSection() {
  const { recyclingRoute } = landingContent;

  return (
    <SectionShell
      eyebrow="Recovery route"
      id={recyclingRoute.id}
      intro={recyclingRoute.body}
      title={recyclingRoute.title}
    >
      <div className="grid gap-6 lg:grid-cols-[5fr_7fr]">
        <BlueprintFrame className="p-6">
          <MeasurementLabel>Claim</MeasurementLabel>
          <p className="mt-5 text-3xl leading-tight font-semibold">
            {recyclingRoute.claim}
          </p>
          <p className="mt-6 border-l-2 border-primary pl-4 text-lg leading-8 text-muted-foreground">
            {recyclingRoute.result}
          </p>
        </BlueprintFrame>
        <BlueprintFrame className="p-6">
          <MeasurementLabel>Accepted feedstock</MeasurementLabel>
          <ul className="mt-6 grid gap-4 sm:grid-cols-2">
            {recyclingRoute.acceptedFeedstock.map((item) => (
              <li className="grid grid-cols-[24px_1fr] gap-3 leading-7" key={item}>
                <span className="mt-3 h-px bg-primary" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </BlueprintFrame>
      </div>
    </SectionShell>
  );
}

function RfqSection() {
  const { rfq } = landingContent;

  return (
    <section
      className="grid gap-8 border-y border-border py-[var(--section-gap-mobile)] md:grid-cols-[5fr_7fr] md:py-[var(--section-gap)]"
      id={rfq.id}
    >
      <div>
        <MeasurementLabel>RFQ handoff</MeasurementLabel>
        <h2 className="mt-4 text-4xl leading-tight font-semibold md:text-5xl">
          {rfq.title}
        </h2>
        <p className="mt-5 max-w-xl text-lg leading-8 text-muted-foreground">
          {rfq.body}
        </p>
      </div>
      <BlueprintFrame className="p-6">
        <MeasurementLabel>Include in message</MeasurementLabel>
        <ul className="mt-6 grid gap-4 sm:grid-cols-2">
          {rfq.checklist.map((item) => (
            <li className="border-t border-border pt-4 leading-7" key={item}>
              {item}
            </li>
          ))}
        </ul>
        <a
          className="mt-8 inline-flex border border-primary px-5 py-4 font-mono text-sm text-primary uppercase transition-colors hover:bg-primary hover:text-primary-foreground"
          href={`mailto:${brand.email}`}
        >
          {brand.email}
        </a>
      </BlueprintFrame>
    </section>
  );
}

export function LandingPage() {
  return (
    <PageShell>
      <Header />
      <HeroSection />
      <CapabilityIndex />
      <PowderProgramsSection />
      <ProductionPlatformSection />
      <RecyclingRouteSection />
      <RfqSection />
    </PageShell>
  );
}
