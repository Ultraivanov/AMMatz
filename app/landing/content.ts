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

export type SpecItem = {
  label: string;
  value: string;
};

export type PowderImage = LandingImage & {
  title: string;
};

export const brand = {
  name: "AMMatz Group",
  shortName: "AMMatz",
  descriptor: "Advanced Materials & Manufacturing",
  email: "office@ammatz.com",
};

export const navItems: NavItem[] = [
  { label: "Our Powders", href: "#powders" },
  { label: "Our Technology", href: "#technology" },
  { label: "Metal Recycling", href: "#recycling" },
  { label: "Contact Us", href: "#contact", isPrimary: true },
];

export const landingContent = {
  hero: {
    eyebrow: "Israel's first specialized producer of",
    title: "Advanced Metal Powders",
    subtitle: "for additive manufacturing",
    image: {
      src: "/assets/atomization-equipment-blueprint.png",
      alt: "Blueprint drawing of AMMatz atomization equipment",
      width: 1216,
      height: 746,
    } satisfies LandingImage,
    spec: [
      { label: "System", value: "Plasma Atomization Unit" },
      { label: "Model", value: "AMMatz-PA500" },
      { label: "Scale", value: "1:20" },
    ] satisfies SpecItem[],
  },
  why: {
    id: "why",
    title: "Why AMMatz",
    body: "AMMatz team brings more than 10 years of research and hands-on experience in additive manufacturing, developing, testing, and 3D printing advanced metal powders at leading Israeli research centers. This background shaped AMMatz's production approach. The team develops proprietary atomization equipment and continuously refines its process know-how, combining stable production and consistent powder quality with flexibility and close attention to customer needs.",
    facts: [
      "10+ years in additive manufacturing research and production",
      "Proprietary atomization equipment developed in Israel",
      "Powder quality tuned for customer process requirements",
    ],
  },
  powders: {
    id: "powders",
    title: "Our Powders",
    subtitle: "Advanced Powder Solutions for Additive Manufacturing",
    body: "AMMatz develops and produces metal powders for a wide range of additive manufacturing applications. Powder characteristics, including particle size, morphology, and composition, can be tailored to specific process requirements.",
    materials: [
      "C-103 (Nb-Hf-Ti)",
      "Tantalum",
      "Tungsten",
      "Niobium",
      "Cu alloys",
      "Al alloys",
      "Nickel-based superalloy",
      "Ti-6Al-4V",
    ],
    sizes: [
      { label: "20-300 nm", value: "Nano" },
      { label: "20-63 um", value: "Laser Powder Bed Fusion (LPBF)" },
      {
        label: "63-150 um",
        value: "Directed Energy Deposition (DED) and other advanced technologies",
      },
    ],
    composition: [
      {
        title: "Core-Shell Powders",
        body: "Two materials in a single particle: a selected core surrounded by a uniform metallic shell.",
      },
      {
        title: "Custom Powders Development",
        body: "Contact us to discuss process requirements and target material properties.",
      },
    ],
    images: [
      {
        title: "Tungsten",
        src: "/assets/powder-tungsten-microscopy.png",
        alt: "AMMatz-Tungsten microscopy image",
        width: 534,
        height: 406,
      },
      {
        title: "Ti-6Al-4V",
        src: "/assets/powder-ti-6al-4v-microscopy.png",
        alt: "AMMatz-Ti-6Al-4V microscopy image",
        width: 524,
        height: 404,
      },
      {
        title: "Tantalum",
        src: "/assets/powder-tantalum-microscopy.png",
        alt: "AMMatz-Tantalum microscopy image",
        width: 530,
        height: 416,
      },
      {
        title: "AlMg6 Nanopowder",
        src: "/assets/powder-almg6-nanopowder-microscopy.png",
        alt: "AMMatz-AlMg6 Nanopowder microscopy image",
        width: 530,
        height: 404,
      },
      {
        title: "Core-shell structure",
        src: "/assets/core-shell-original-labels-microscopy.png",
        alt: "Core-shell powder microscopy image with original labels",
        width: 616,
        height: 480,
      },
      {
        title: "Core-shell morphology",
        src: "/assets/core-shell-microscopy.png",
        alt: "Core-shell powder microscopy image",
        width: 606,
        height: 406,
      },
    ] satisfies PowderImage[],
  },
  technology: {
    id: "technology",
    title: "Our Technology",
    subtitle: "Proprietary Atomization Equipment Developed in Israel",
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
    processTitle: "Plasma Atomization Process",
    body: "Building on established plasma atomization principles, the team has developed its own engineering solutions and process improvements. Plasma atomization is AMMatz's core production technology, complemented by ultrasonic and gas atomization as alternative routes for recycling, special campaigns, and selected materials.",
    highlights: [
      "Feedstock wire diameter: 1.5-5 mm",
      "Proprietary plasma-torch design",
      "Wire functions as a consumable cathode",
      "Plasma arc generated in an argon atmosphere",
      "Localized melting at the wire tip",
      "Direct formation of spherical powder particles",
    ],
  },
  recycling: {
    id: "recycling",
    title: "Metal Recycling",
    subtitle: "AMMatz Recycling Platform",
    body: "AMMatz Group is developing a metal recycling platform to return valuable metals to the production cycle without prior conversion into wire or bar. The process is built around a combination of plasma melting and gas atomization. The resulting spherical powders feature a controlled particle-size distribution and are suitable for additive manufacturing.",
    feedstock: [
      "Machining chips and swarf",
      "Solid metal scrap and offcuts",
      "Reused additive-manufacturing powder",
      "Other forms of feedstock",
    ],
    note: "AMMatz Group accepts advanced and high-performance metal materials for recycling. To discuss recycling, contact us at office@ammatz.com.",
  },
  contact: {
    id: "contact",
    title: "Contact Us",
    body: "Discuss powder development, production campaigns, or recycling opportunities with AMMatz Group.",
  },
} as const;
