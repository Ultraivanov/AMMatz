"use client";

import Image from "next/image";
import { useState } from "react";

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
  const [index, setIndex] = useState(0);
  const activeItem = items[index];
  const previous = () => setIndex((current) => (current === 0 ? items.length - 1 : current - 1));
  const next = () => setIndex((current) => (current === items.length - 1 ? 0 : current + 1));

  return (
    <div>
      <div className="px-4 py-2 md:px-40">
        <figure className="relative h-[271px] w-full max-w-[361px] overflow-hidden md:h-[341px] md:max-w-[455px]">
          <ProofImage image={activeItem.image} />
          <figcaption className="absolute bottom-0 left-0 bg-[#06284f] px-3 py-2 font-mono text-xs text-white md:text-lg">
            {activeItem.label}
          </figcaption>
        </figure>
      </div>
      <SliderNav label={activeItem.label} onNext={next} onPrevious={previous} />
    </div>
  );
}

export function SliderNav({
  label,
  onNext,
  onPrevious,
}: {
  label: string;
  onNext?: () => void;
  onPrevious?: () => void;
}) {
  return (
    <div className="flex items-center gap-2 px-4 py-2 md:px-40">
      <div className="flex w-[155px] items-center justify-between px-4 py-2 text-white/75">
        <button
          aria-label="Previous slide"
          className="grid size-8 place-items-center font-mono text-2xl hover:text-white"
          onClick={onPrevious}
          type="button"
        >
          ‹
        </button>
        <button
          aria-label="Next slide"
          className="grid size-8 place-items-center font-mono text-2xl hover:text-white"
          onClick={onNext}
          type="button"
        >
          ›
        </button>
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
  const slides = [
    {
      label: "Proprietary atomization equipment",
      node: (
        <figure className="h-[271px] w-[calc(100vw-32px)] max-w-[361px] shrink-0 md:h-[630px] md:w-[1120px] md:max-w-none">
          <ProofImage image={equipment} className="object-contain" priority />
        </figure>
      ),
    },
    {
      label: "Argon plasma arc",
      node: (
        <figure className="h-[271px] w-[calc(100vw-32px)] max-w-[361px] shrink-0 md:h-[630px] md:w-[1120px] md:max-w-none">
          <BlueprintVideo video={mobileVideo} className="md:hidden" />
          <BlueprintVideo video={video} className="hidden md:block" />
        </figure>
      ),
    },
  ];
  const [index, setIndex] = useState(0);
  const previous = () => setIndex((current) => (current === 0 ? slides.length - 1 : current - 1));
  const next = () => setIndex((current) => (current === slides.length - 1 ? 0 : current + 1));

  return (
    <div>
      <div className="px-4 md:px-40">
        {slides[index].node}
      </div>
      <SliderNav label={slides[index].label} onNext={next} onPrevious={previous} />
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
  const iconMap: Record<string, string> = {
    input: "/assets/icon-input-streams.svg",
    recycle: "/assets/icon-material-recovery.svg",
    workflow: "/assets/icon-controlled-route.svg",
    return: "/assets/icon-am-return.svg",
  };

  return (
    <Image
      alt=""
      aria-hidden="true"
      className="h-6 w-6 md:h-12 md:w-12"
      height={48}
      src={iconMap[type] ?? iconMap.input}
      width={48}
    />
  );
}
