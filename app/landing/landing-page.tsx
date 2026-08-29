import Image from "next/image";
import Link from "next/link";

import {
  BlueprintVideo,
  Divider,
  EngineeringCard,
  ParameterSheet,
  PowderListing,
  PowderProofSlider,
  ProductionMedia,
  RecyclingIcon,
  RequestField,
  SectionHeading,
} from "./blueprint-components";
import { brand, landingContent, navItems } from "./content";

function Logo() {
  return (
    <Link className="block" href="/" aria-label="AMMatz home">
      <Image
        alt="AMMatz Group"
        className="block h-10 w-[131px] md:hidden"
        height={40}
        src="/assets/ammatz_desktop-logo.png"
        width={131}
      />
      <Image
        alt="AMMatz Group"
        className="hidden h-20 w-[262px] md:block"
        height={80}
        priority
        src="/assets/ammatz_desktop-logo.png"
        width={262}
      />
    </Link>
  );
}

function Header() {
  return (
    <header className="flex h-[73px] items-center justify-between border-b border-white/30 bg-[#06284f] px-4 shadow-[0_2px_4px_rgba(0,0,0,0.12)] md:h-[129px] md:px-40">
      <Logo />
      <nav className="hidden items-center gap-8 md:flex" aria-label="Primary navigation">
        {navItems.map((item) => (
          <a
            className="px-4 py-2 text-sm leading-[1.2] font-medium tracking-[1.5px] text-white transition-colors hover:text-white/70"
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

function HeroSection() {
  const { hero } = landingContent;

  return (
    <section className="border-b border-white/10 px-4 py-8 md:px-40 md:py-16">
      <h1 className="max-w-[760px] font-mono text-[42px] leading-[48px] font-bold text-white md:text-[42px] md:leading-[1.2]">
        {hero.title}
      </h1>
      <div className="mt-6 aspect-[4/3] overflow-hidden bg-black md:mt-10 md:aspect-video">
        <BlueprintVideo video={hero.mobileVideo} className="md:hidden" />
        <BlueprintVideo video={hero.video} className="hidden md:block" />
      </div>
      <p className="mt-6 max-w-[1120px] text-base leading-[1.2] font-light text-white/60 md:mt-10 md:text-[32px]">
        {hero.summary}
      </p>
      <div className="mt-6 grid gap-4 md:flex md:gap-8">
        <a className="border border-white/60 bg-[#06284f] px-6 py-4 text-center text-sm tracking-[1px] text-white shadow-[2px_2px_0_white] md:min-w-[290px]" href="#powder-programs">
          {hero.primaryCta}
        </a>
        <a className="px-6 py-4 text-center text-sm tracking-[1px] text-white md:min-w-[226px]" href="#rfq">
          {hero.secondaryCta}
        </a>
      </div>
    </section>
  );
}

function ProcessKnowhowSection() {
  const section = landingContent.processKnowhow;

  return (
    <section className="border-b border-white/10 px-4 py-8 md:px-40 md:py-16" id={section.id}>
      <SectionHeading eyebrow={section.eyebrow} intro={section.intro} title={section.title} />
      <div className="mt-8 grid gap-4 md:grid-cols-4">
        {section.cards.map((card) => (
          <EngineeringCard
            key={card.title}
            label={card.label}
            summary={card.summary}
            title={card.title}
          />
        ))}
      </div>
    </section>
  );
}

function PowderProgramsSection() {
  const section = landingContent.powderPrograms;

  return (
    <section className="border-b border-white/10 py-8 md:py-16" id={section.id}>
      <div className="px-4 md:px-40">
        <SectionHeading eyebrow={section.eyebrow} intro={section.intro} title={section.title} />
        <div className="mt-4 md:mt-6">
          {section.groups.map((group, index) => (
            <PowderListing
              index={index}
              items={group.items}
              key={group.title}
              title={group.title}
            />
          ))}
        </div>
      </div>
      <div className="mt-4 md:mt-10">
        <PowderProofSlider items={section.evidence} />
      </div>
    </section>
  );
}

function ProductionSection() {
  const section = landingContent.productionPlatform;

  return (
    <section className="border-b border-white/10 py-8 md:py-16" id={section.id}>
      <div className="px-4 md:px-40">
        <SectionHeading eyebrow={section.eyebrow} intro={section.intro} title={section.title} />
      </div>
      <div className="mt-6 md:mt-12">
        <ProductionMedia equipment={section.equipment} mobileVideo={section.mobileVideo} video={section.video} />
      </div>
      <div className="px-0 md:px-40">
        <ParameterSheet rows={section.parameters} title="PROCESS PARAMETERS" />
        <ParameterSheet rows={section.route} title="CONTROLLED PROCESS ROUTE" />
      </div>
    </section>
  );
}

function RecyclingSection() {
  const section = landingContent.recyclingRoute;

  return (
    <section className="border-b border-white/10 px-4 py-8 md:px-40 md:py-16" id={section.id}>
      <SectionHeading eyebrow={section.eyebrow} intro={section.intro} title={section.title} />
      <div className="mt-6 grid gap-4 md:mt-8 md:gap-6">
        {section.points.map((point) => (
          <article className="grid gap-2 border-b border-white/10 py-2 md:gap-4 md:border-0 md:py-0" key={point.title}>
            <div className="flex items-start gap-4 text-white md:items-center">
              <span className="grid size-6 shrink-0 place-items-center text-white md:size-12">
                <RecyclingIcon type={point.icon} />
              </span>
              <h3 className="font-mono text-lg leading-[1.2] font-medium md:text-2xl">
                {point.title}
              </h3>
            </div>
            <p className="pl-10 text-sm leading-[1.25] text-white/70 md:max-w-[1120px] md:pl-0 md:text-lg md:leading-[1.2]">
              {point.body}
            </p>
          </article>
        ))}
      </div>
    </section>
  );
}

function RfqSection() {
  const section = landingContent.rfq;

  return (
    <section className="px-4 py-8 md:px-40 md:py-16" id={section.id}>
      <h2 className="font-mono text-3xl leading-[1.2] font-bold text-white md:text-[42px]">
        {section.title}
      </h2>
      <form className="mt-4 grid gap-4 md:mt-6" action={`mailto:${brand.email}`} method="post">
        {section.fields.map((field) => (
          <RequestField
            key={field}
            label={field}
            type={field.toLowerCase().includes("email") ? "email" : "text"}
          />
        ))}
      </form>
    </section>
  );
}

function Footer() {
  return (
    <footer className="grid gap-4 border-t border-white/10 bg-[#041e3b] px-4 py-8 md:px-40 md:py-16">
      <h2 className="font-mono text-xl leading-[1.2] font-bold text-white md:text-2xl md:font-medium">
        {brand.name}
      </h2>
      <p className="max-w-[1120px] text-[10px] leading-[1.2] font-medium tracking-[1.5px] text-white/75 uppercase md:text-lg md:normal-case md:tracking-normal">
        Advanced metal powder production for additive manufacturing
      </p>
      <div className="text-[10px] leading-[1.2] font-medium tracking-[1.5px] text-white/40 md:text-lg md:tracking-normal">
        <a className="block underline underline-offset-2 hover:text-white" href={`mailto:${brand.email}`}>
          {brand.email}
        </a>
        <p>Israel · AM powders</p>
      </div>
    </footer>
  );
}

export function LandingPage() {
  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <Divider />
        <ProcessKnowhowSection />
        <Divider />
        <PowderProgramsSection />
        <Divider />
        <ProductionSection />
        <Divider />
        <RecyclingSection />
        <Divider />
        <RfqSection />
      </main>
      <Footer />
    </>
  );
}
