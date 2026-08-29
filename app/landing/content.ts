export type LandingImage = {
  src: string;
  alt: string;
  width: number;
  height: number;
  fit?: "cover" | "contain";
};

export type LandingVideo = {
  src: string;
  poster: string;
  label: string;
};

export const brand = {
  name: "AMMatz Group",
  descriptor: "Advanced Materials & Manufacturing",
  email: "office@ammatz.com",
};

export const navItems = [
  { label: "AM metal Powders", href: "#powder-programs" },
  { label: "Powders Production", href: "#production-platform" },
  { label: "metal Recycling", href: "#recycling-route" },
] as const;

export const powderEvidence = [
  {
    label: "AMMatz-Tungsten",
    image: {
      src: "/assets/powder-tungsten-proof-4k.jpg",
      alt: "AMMatz tungsten powder microscopy image",
      width: 3840,
      height: 2880,
    },
  },
  {
    label: "AMMatz-AlMg6-Nanopowder",
    image: {
      src: "/assets/powder-almg6-nanopowder-proof-4k.jpg",
      alt: "AMMatz AlMg6 nanopowder microscopy image",
      width: 3840,
      height: 2880,
    },
  },
  {
    label: "Ni-Shell and WC-Core",
    image: {
      src: "/assets/core-shell-microscopy.png",
      alt: "Core-shell powder microscopy image",
      width: 606,
      height: 406,
      fit: "contain",
    },
  },
  {
    label: "AMMatz-Tantalum",
    image: {
      src: "/assets/powder-tantalum-proof-4k.jpg",
      alt: "AMMatz tantalum powder microscopy image",
      width: 3840,
      height: 2880,
    },
  },
  {
    label: "AMMatz-Ti-6Al-4V",
    image: {
      src: "/assets/powder-ti-6al-4v-proof-4k.jpg",
      alt: "AMMatz Ti-6Al-4V powder microscopy image",
      width: 3840,
      height: 2880,
    },
  },
] satisfies Array<{ label: string; image: LandingImage }>;

export const landingContent = {
  hero: {
    title: "Advanced Metal Powders Made in Israel",
    summary:
      "Israel's first specialized producer of advanced metal powders for additive manufacturing: from material development, to production and recycling. Built on proprietary equipment",
    primaryCta: "Choose your solution",
    secondaryCta: "Discuss details",
    video: {
      src: "/assets/argon-arc-desktop-16x9.mp4",
      poster: "/assets/argon-arc-desktop-poster.jpg",
      label: "Argon plasma arc",
    } satisfies LandingVideo,
    mobileVideo: {
      src: "/assets/argon-arc-mobile-4x3.mp4",
      poster: "/assets/argon-arc-mobile-poster.jpg",
      label: "Argon plasma arc",
    } satisfies LandingVideo,
  },
  processKnowhow: {
    id: "process-knowhow",
    eyebrow: "/// Process know-how",
    title: "Built from research. Tuned for production",
    intro:
      "10 years of AM expertise turned into controlled powder production: proprietary equipment, repeatable processes, full traceability",
    cards: [
      {
        label: "Research input",
        title: "Materials understanding",
        summary:
          "Powder behavior, AM testing, and metal 3D printing experience inform material choices and development priorities",
      },
      {
        label: "Production system",
        title: "Equipment control",
        summary:
          "Proprietary atomization hardware keeps the route controlled from feedstock input to spherical powder output",
      },
      {
        label: "Customer route",
        title: "Process fit",
        summary:
          "Powder parameters are tuned around alloy, AM process, particle-size range, and qualification needs",
      },
      {
        label: "Quality & consistency",
        title: "Batch control",
        summary:
          "Full batch traceability. Stable, reproducible powder characteristics, compliant with international requirements",
      },
    ],
  },
  powderPrograms: {
    id: "powder-programs",
    eyebrow: "/// AM metal powders",
    title: "Powders built for additive manufacturing process windows",
    intro:
      "Powder specifications are developed around material family, particle-size distribution, morphology, and the target additive manufacturing process",
    groups: [
      {
        title: "Refractory metals & alloys",
        items: ["C-103", "Tantalum", "Tungsten", "Niobium"],
      },
      {
        title: "High-performance alloys",
        items: ["Ti-6Al-4V", "Nickel-based superalloys", "Aluminum alloys", "Copper alloys"],
      },
      {
        title: "Particle-size ranges",
        items: ["20-300 nm nanopowders", "20-63 um LPBF", "63-150 um DED / powder-fed AM"],
      },
      {
        title: "Custom powder structures",
        items: ["Core-shell powders", "Custom powder development", "Composition and morphology tuning"],
      },
    ],
    evidence: powderEvidence,
  },
  productionPlatform: {
    id: "production-platform",
    eyebrow: "/// Powder production",
    title: "Plasma atomization keeps the route controlled",
    intro:
      "Wire feedstock, argon plasma arc, localized melting, particle formation, and classification are treated as one controlled production route",
    equipment: {
      src: "/assets/atomization-equipment-photo.png",
      alt: "AMMatz proprietary atomization equipment",
      width: 1216,
      height: 746,
    } satisfies LandingImage,
    video: {
      src: "/assets/argon-arc-desktop-wide.mp4",
      poster: "/assets/argon-arc-desktop-poster.jpg",
      label: "Argon plasma arc",
    } satisfies LandingVideo,
    mobileVideo: {
      src: "/assets/argon-arc-mobile-4x3.mp4",
      poster: "/assets/argon-arc-mobile-poster.jpg",
      label: "Argon plasma arc",
    } satisfies LandingVideo,
    parameters: [
      { key: "WIRE DIAMETER", value: "1.5-5 mm" },
      { key: "TORCH DESIGN", value: "proprietary" },
      { key: "WIRE ROLE", value: "consumable cathode" },
      { key: "ATMOSPHERE", value: "argon" },
      { key: "OUTPUT", value: "spherical powder particles" },
    ],
    route: [
      { key: "Wire feedstock", value: "traceable wire input before atomization" },
      { key: "Argon plasma arc", value: "consumable cathode inside an argon atmosphere" },
      { key: "Localized melting", value: "energy is focused at the wire tip" },
      { key: "Classification", value: "output classified by PSD, morphology, and AM process" },
    ],
  },
  recyclingRoute: {
    id: "recycling-route",
    eyebrow: "/// Metal recycling",
    title: "High-value feedstock returned to special spheroidal powder for AM",
    intro:
      "Selected scrap, off-spec powder, and valuable metal residues are evaluated as feedstock for controlled reprocessing and AM-oriented powder development",
    points: [
      {
        icon: "input",
        title: "Input streams",
        body: "High-value metal scrap, off-spec powder, and selected residues are assessed before reprocessing",
      },
      {
        icon: "recycle",
        title: "Material recovery",
        body: "Reusable metal is separated from low-value waste and prepared for controlled powder production",
      },
      {
        icon: "workflow",
        title: "Controlled route",
        body: "Reprocessing is matched to alloy family, contamination risk, target PSD, and AM requirements",
      },
      {
        icon: "return",
        title: "AM return",
        body: "Recovered feedstock can support prototype batches, qualification work, and customer-specific AM routes",
      },
    ],
  },
  rfq: {
    id: "rfq",
    title: "Request information",
    fields: ["Your name", "Company", "work Email"],
  },
} as const;
