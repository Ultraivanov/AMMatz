export type LandingImage = {
  src: string;
  alt: string;
  width: number;
  height: number;
};

export type NavItem = {
  label: string;
  href: string;
  isPrimary?: boolean;
};

export const brand = {
  name: "AMMatz Group",
  shortName: "AMMatz",
  descriptor: "Advanced Materials & Manufacturing",
  email: "office@ammatz.com",
};

export const navItems: NavItem[] = [
  { label: "AM Metal Powders", href: "#powder-programs" },
  { label: "Powder Production", href: "#production-platform" },
  { label: "Powder Recycling", href: "#recycling-route" },
  { label: "RFQ", href: "#rfq", isPrimary: true },
];

export const powderEvidence = {
  tungsten: {
    src: "/assets/powder-tungsten-microscopy.png",
    alt: "AMMatz-Tungsten microscopy image",
    width: 534,
    height: 406,
  },
  titanium: {
    src: "/assets/powder-ti-6al-4v-microscopy.png",
    alt: "AMMatz-Ti-6Al-4V microscopy image",
    width: 524,
    height: 404,
  },
  tantalum: {
    src: "/assets/powder-tantalum-microscopy.png",
    alt: "AMMatz-Tantalum microscopy image",
    width: 530,
    height: 416,
  },
  almg6: {
    src: "/assets/powder-almg6-nanopowder-microscopy.png",
    alt: "AMMatz-AlMg6 Nanopowder microscopy image",
    width: 530,
    height: 404,
  },
  coreShellLabels: {
    src: "/assets/core-shell-original-labels-microscopy.png",
    alt: "Core-shell powder microscopy image with original labels",
    width: 616,
    height: 480,
  },
  coreShell: {
    src: "/assets/core-shell-microscopy.png",
    alt: "Core-shell powder microscopy image",
    width: 606,
    height: 406,
  },
} satisfies Record<string, LandingImage>;

export const landingContent = {
  hero: {
    eyebrow: "Metal powders for additive manufacturing",
    title: "Advanced Metal Powder Production.",
    summary:
      "Israel's first specialized producer focused on AM powder development, plasma atomization, and high-value metal powder recycling.",
    proofPoints: [
      "Tailored powder properties for AM process requirements",
      "Proprietary plasma atomization platform developed in Israel",
      "Recycling route from high-value feedstock to spherical powder",
    ],
    systemFacts: [
      { label: "Primary process", value: "Plasma atomization" },
      { label: "Feedstock", value: "Wire, scrap, used AM powder" },
      { label: "Output", value: "Spherical AM powder" },
      { label: "Materials", value: "Refractory metals and AM alloy systems" },
    ],
    image: {
      src: "/assets/atomization-equipment-blueprint.png",
      alt: "Blueprint drawing of AMMatz atomization equipment",
      width: 1216,
      height: 746,
    } satisfies LandingImage,
  },
  capabilities: [
    {
      id: "powder-development",
      title: "Custom Powder Development",
      statement:
        "Powder chemistry, morphology, and particle-size distribution are tuned for target AM processes.",
      detail:
        "Capabilities cover refractory metals, titanium alloys, nickel-based superalloys, aluminum alloys, copper alloys, nanopowders, LPBF, DED, and core-shell structures.",
    },
    {
      id: "plasma-atomization",
      title: "Plasma Atomization",
      statement:
        "The powder production route is built around proprietary plasma atomization equipment.",
      detail:
        "Wire feedstock acts as a consumable cathode in an argon plasma arc, forming spherical particles directly from localized melting.",
    },
    {
      id: "metal-recycling",
      title: "Metal Recycling",
      statement:
        "High-value feedstock can be returned to the production cycle as AM-ready powder.",
      detail:
        "Accepted streams include machining chips, swarf, solid scrap, offcuts, and reused additive-manufacturing powder.",
    },
  ],
  powderPrograms: {
    id: "powder-programs",
    title: "Metal Powders for Additive Manufacturing",
    intro:
      "AMMatz develops custom and application-specific powders around material families, target AM processes, particle-size distribution, and morphology rather than a static catalog.",
    groups: [
      {
        title: "Refractory metals",
        items: ["C-103 (Nb-Hf-Ti)", "Tantalum", "Tungsten", "Niobium"],
      },
      {
        title: "Additive manufacturing alloys",
        items: [
          "Ti-6Al-4V",
          "Nickel-based superalloys",
          "Aluminum alloys",
          "Copper alloys",
        ],
      },
      {
        title: "Particle-size ranges",
        items: [
          "20-300 nm nanopowders",
          "20-63 um LPBF",
          "63-150 um DED and other powder-fed AM processes",
        ],
      },
      {
        title: "Custom powder structures",
        items: [
          "Core-shell powders",
          "Custom powder development",
          "Composition and morphology tuning",
        ],
      },
    ],
    evidence: [
      { label: "Tungsten / refractory powder", image: powderEvidence.tungsten },
      { label: "Ti-6Al-4V / AM alloy", image: powderEvidence.titanium },
      { label: "Core-shell architecture", image: powderEvidence.coreShellLabels },
      { label: "AlMg6 / nanopowder", image: powderEvidence.almg6 },
    ],
  },
  productionPlatform: {
    id: "production-platform",
    title: "Powder Production Platform",
    intro:
      "The platform combines proprietary atomization equipment, plasma-torch design, argon atmosphere control, and process know-how for spherical metal powder production.",
    equipmentImage: {
      src: "/assets/atomization-equipment-photo.png",
      alt: "AMMatz proprietary atomization equipment",
      width: 1216,
      height: 746,
    } satisfies LandingImage,
    plasmaImage: {
      src: "/assets/argon-plasma-arc.png",
      alt: "Real argon plasma arc",
      width: 634,
      height: 284,
    } satisfies LandingImage,
    process: [
      "Feedstock wire diameter: 1.5-5 mm",
      "Wire functions as a consumable cathode",
      "Plasma arc generated in argon atmosphere",
      "Localized melting at the wire tip",
      "Direct formation of spherical powder particles",
      "Particle-size classification for target ranges",
    ],
    operatingNotes: [
      { label: "Atmosphere", value: "Argon" },
      { label: "Torch", value: "Proprietary design" },
      { label: "Wire diameter", value: "1.5-5 mm" },
    ],
  },
  recyclingRoute: {
    id: "recycling-route",
    title: "Metal Powder Recycling",
    claim: "Return high-value metal feedstock into AM powder production.",
    body:
      "AMMatz is developing a metal powder recycling route based on plasma melting and gas atomization, producing spherical powders with controlled particle-size distribution.",
    acceptedFeedstock: [
      "Machining chips and swarf",
      "Solid metal scrap and offcuts",
      "Reused additive-manufacturing powder",
      "Other high-performance metal feedstock",
    ],
    result: "Spherical powder with controlled particle-size distribution for additive manufacturing.",
  },
  rfq: {
    id: "rfq",
    title: "Start a powder development inquiry",
    body:
      "Send the target alloy, AM process, particle-size range, approximate volume, and feedstock form if recycling is relevant.",
    checklist: [
      "Material or alloy",
      "Target AM process",
      "Particle-size range",
      "Approximate volume",
      "Feedstock form for recycling projects",
    ],
  },
} as const;
