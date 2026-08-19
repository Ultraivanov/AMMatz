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
    <div
      className={`relative border border-border bg-[var(--blueprint-panel)] ${className}`}
    >
      <span className="pointer-events-none absolute top-3 left-3 size-2 border-t border-l border-primary" />
      <span className="pointer-events-none absolute top-3 right-3 size-2 border-t border-r border-primary" />
      <span className="pointer-events-none absolute bottom-3 left-3 size-2 border-b border-l border-primary" />
      <span className="pointer-events-none absolute right-3 bottom-3 size-2 border-r border-b border-primary" />
      {children}
    </div>
  );
}

export function MeasurementLabel({ children }: { children: React.ReactNode }) {
  return (
    <p className="font-mono text-[11px] leading-none tracking-normal text-primary uppercase">
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
        <div
          className="grid grid-cols-[96px_minmax(0,1fr)] bg-[var(--blueprint-panel)] sm:grid-cols-[112px_minmax(0,1fr)]"
          key={item.label}
        >
          <dt className="px-3 py-3 text-muted-foreground uppercase">
            {item.label}
          </dt>
          <dd className="min-w-0 px-3 py-3 uppercase">{item.value}</dd>
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
    <figure>
      <BlueprintFrame className={`overflow-hidden ${className}`}>
        <Image
          alt={image.alt}
          className="h-full w-full object-cover"
          height={image.height}
          priority={priority}
          src={image.src}
          width={image.width}
        />
        <figcaption className="absolute bottom-0 left-0 border-t border-r border-border bg-background/90 px-3 py-2 font-mono text-[11px] text-muted-foreground uppercase">
          {label}
        </figcaption>
      </BlueprintFrame>
    </figure>
  );
}

export function EngineeringCard({
  card,
  className = "",
}: {
  card: {
    label: string;
    title: string;
    summary: string;
    details?: readonly string[];
  };
  className?: string;
}) {
  return (
    <BlueprintFrame className={`flex h-full flex-col p-5 ${className}`}>
      <MeasurementLabel>{card.label}</MeasurementLabel>
      <h3 className="mt-4 text-2xl leading-tight font-semibold [text-wrap:pretty]">
        {card.title}
      </h3>
      <p className="mt-4 text-base leading-7 text-foreground [text-wrap:pretty]">
        {card.summary}
      </p>
      {card.details?.length ? (
        <ul className="mt-5 grid gap-3 text-sm leading-6 text-muted-foreground">
          {card.details.map((detail) => (
            <li className="grid grid-cols-[18px_1fr] gap-3" key={detail}>
              <span className="mt-3 h-px bg-primary" />
              <span>{detail}</span>
            </li>
          ))}
        </ul>
      ) : null}
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
        <li
          className="grid grid-cols-[42px_1fr] border-t border-border pt-4"
          key={step}
        >
          <span className="font-mono text-xs text-primary">
            {String(index + 1).padStart(2, "0")}
          </span>
          <span className="leading-7">{step}</span>
        </li>
      ))}
    </ol>
  );
}
