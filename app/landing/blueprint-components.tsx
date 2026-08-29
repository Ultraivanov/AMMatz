import Image from "next/image";

import type { LandingImage, LandingVideo } from "./content";

export function BlueprintLabel({ children }: { children: React.ReactNode }) {
  return (
    <p className="font-sans text-[10px] leading-[1.2] font-medium tracking-[1.5px] text-white/40 uppercase md:text-sm">
      {children}
    </p>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  intro,
}: {
  eyebrow: string;
  title: string;
  intro: string;
}) {
  return (
    <div className="grid gap-4">
      <BlueprintLabel>{eyebrow}</BlueprintLabel>
      <h2 className="max-w-[1120px] font-mono text-3xl leading-[1.2] font-bold text-white md:text-[42px]">
        {title}
      </h2>
      <p className="max-w-[1120px] text-base leading-[1.2] font-light text-white/60 md:text-[32px] md:text-white/75">
        {intro}
      </p>
    </div>
  );
}

export function Divider() {
  return <div className="mx-4 h-px bg-white/10 md:mx-40" />;
}

export function BlueprintVideo({
  video,
  className = "",
}: {
  video: LandingVideo;
  className?: string;
}) {
  return (
    <video
      aria-label={video.label}
      autoPlay
      className={`block h-full w-full bg-black object-cover ${className}`}
      loop
      muted
      playsInline
      poster={video.poster}
    >
      <source src={video.src} type="video/mp4" />
    </video>
  );
}

export function ProofImage({
  image,
  className = "",
  priority = false,
}: {
  image: LandingImage;
  className?: string;
  priority?: boolean;
}) {
  return (
    <Image
      alt={image.alt}
      className={`block h-full w-full object-cover ${className}`}
      height={image.height}
      priority={priority}
      src={image.src}
      width={image.width}
    />
  );
}

export function EngineeringCard({
  label,
  title,
  summary,
}: {
  label: string;
  title: string;
  summary: string;
}) {
  return (
    <article className="min-h-48 border border-white/30 bg-[#06284f] p-4 shadow-[4px_4px_0_rgba(255,255,255,0.3)] md:min-h-[250px]">
      <BlueprintLabel>{label}</BlueprintLabel>
      <h3 className="mt-4 font-mono text-2xl leading-[1.2] font-medium text-white">
        {title}
      </h3>
      <div className="mt-4 h-2 w-full border-t border-white/30" />
      <p className="mt-4 text-base leading-[1.2] text-white/60 md:text-lg">
        {summary}
      </p>
    </article>
  );
}

export function PowderListing({
  index,
  title,
  items,
}: {
  index: number;
  title: string;
  items: readonly string[];
}) {
  return (
    <details className="group border-b border-white/10 py-2" open={index === 0}>
      <summary className="flex cursor-pointer list-none items-center gap-4 py-2">
        <span className="grid size-[27px] shrink-0 place-items-center border border-white/30 font-mono text-sm text-white/80">
          {String(index + 1).padStart(2, "0")}
        </span>
        <h3 className="min-w-0 flex-1 text-base leading-[1.2] font-bold text-white/80 md:font-mono md:text-2xl md:font-medium">
          {title}
        </h3>
        <span className="relative size-6 shrink-0 text-white/70">
          <span className="absolute top-1/2 left-1/2 h-px w-4 -translate-x-1/2 bg-current" />
          <span className="absolute top-1/2 left-1/2 h-4 w-px -translate-y-1/2 bg-current group-open:hidden" />
        </span>
      </summary>
      <ul className="grid gap-2 pb-4 pl-[43px] md:gap-3 md:pl-12">
        {items.map((item) => (
          <li className="border-b border-white/10 pb-2 text-sm leading-[1.2] text-white/60 md:text-lg" key={item}>
            {item}
          </li>
        ))}
      </ul>
    </details>
  );
}

export function PowderProofSlider({
  items,
}: {
  items: ReadonlyArray<{ label: string; image: LandingImage }>;
}) {
  return (
    <div className="overflow-x-auto">
      <div className="flex w-max gap-4 px-4 py-2 md:px-40">
        {items.map((item) => (
          <figure className="relative h-[271px] w-[361px] shrink-0 overflow-hidden md:h-[341px] md:w-[455px]" key={item.label}>
            <ProofImage image={item.image} />
            <figcaption className="absolute bottom-0 left-0 bg-[#06284f] px-3 py-2 font-mono text-xs text-white md:text-lg">
              {item.label}
            </figcaption>
          </figure>
        ))}
      </div>
      <SliderNav label="Powder proof images" />
    </div>
  );
}

export function SliderNav({ label }: { label: string }) {
  return (
    <div className="flex items-center gap-2 px-4 py-2 md:px-40">
      <div className="flex w-[155px] items-center justify-between px-4 py-2 text-white/75">
        <span aria-hidden="true" className="font-mono text-2xl">‹</span>
        <span aria-hidden="true" className="font-mono text-2xl">›</span>
      </div>
      <p className="font-sans text-[10px] leading-[1.2] font-medium tracking-[1.5px] text-white/70 uppercase md:text-sm">
        {label}
      </p>
    </div>
  );
}

export function ProductionMedia({
  equipment,
  video,
  mobileVideo,
}: {
  equipment: LandingImage;
  video: LandingVideo;
  mobileVideo: LandingVideo;
}) {
  return (
    <div className="overflow-x-auto">
      <div className="flex w-max gap-4 px-4 md:px-40">
        <figure className="h-[271px] w-[361px] shrink-0 md:h-[630px] md:w-[1120px]">
          <ProofImage image={equipment} className="object-contain" priority />
        </figure>
        <figure className="h-[271px] w-[361px] shrink-0 md:h-[630px] md:w-[1120px]">
          <BlueprintVideo video={mobileVideo} className="md:hidden" />
          <BlueprintVideo video={video} className="hidden md:block" />
        </figure>
      </div>
      <SliderNav label="Proprietary atomization equipment" />
    </div>
  );
}

export function ParameterSheet({
  title,
  rows,
}: {
  title: string;
  rows: ReadonlyArray<{ key: string; value: string }>;
}) {
  return (
    <section className="py-4">
      <h3 className="px-4 font-sans text-[10px] leading-[1.2] font-medium tracking-[1.5px] text-white/75 uppercase md:px-0 md:font-mono md:text-2xl md:font-medium md:tracking-normal">
        {title}
      </h3>
      <dl className="mt-4 grid gap-2 px-4 md:px-0">
        {rows.map((row) => (
          <div className="grid grid-cols-[minmax(150px,191px)_minmax(0,1fr)] gap-0 border-b border-white/10 pb-2 md:gap-6" key={row.key}>
            <dt className="text-[10px] leading-[1.2] font-medium tracking-[1.5px] text-white/50 uppercase md:text-sm">
              {row.key}
            </dt>
            <dd className="min-w-0 text-[10px] leading-[1.2] text-white/90 md:text-lg">
              {row.value}
            </dd>
          </div>
        ))}
      </dl>
    </section>
  );
}

export function RecyclingIcon({ type }: { type: string }) {
  const common = "h-6 w-6 md:h-12 md:w-12";

  if (type === "recycle") {
    return (
      <svg aria-hidden="true" className={common} fill="none" viewBox="0 0 24 24">
        <path d="m7 19-4-4 4-4" stroke="currentColor" strokeWidth="1.8" />
        <path d="M3 15h7a4 4 0 0 0 4-4v-1" stroke="currentColor" strokeWidth="1.8" />
        <path d="m17 5 4 4-4 4" stroke="currentColor" strokeWidth="1.8" />
        <path d="M21 9h-7a4 4 0 0 0-4 4v1" stroke="currentColor" strokeWidth="1.8" />
      </svg>
    );
  }

  if (type === "workflow") {
    return (
      <svg aria-hidden="true" className={common} fill="none" viewBox="0 0 24 24">
        <rect height="6" rx="1" stroke="currentColor" strokeWidth="1.8" width="6" x="3" y="3" />
        <rect height="6" rx="1" stroke="currentColor" strokeWidth="1.8" width="6" x="15" y="15" />
        <path d="M9 6h4a5 5 0 0 1 5 5v4M6 9v4a5 5 0 0 0 5 5h4" stroke="currentColor" strokeWidth="1.8" />
      </svg>
    );
  }

  if (type === "return") {
    return (
      <svg aria-hidden="true" className={common} fill="none" viewBox="0 0 24 24">
        <path d="M20 7v10H8" stroke="currentColor" strokeWidth="1.8" />
        <path d="m11 13-4 4 4 4" stroke="currentColor" strokeWidth="1.8" />
        <path d="M4 7h10" stroke="currentColor" strokeWidth="1.8" />
      </svg>
    );
  }

  return (
    <svg aria-hidden="true" className={common} fill="none" viewBox="0 0 24 24">
      <path d="M4 7h16M4 12h16M4 17h16" stroke="currentColor" strokeWidth="1.8" />
      <path d="M7 4v16M17 4v16" stroke="currentColor" strokeWidth="1.8" />
    </svg>
  );
}
