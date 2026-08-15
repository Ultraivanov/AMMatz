import type { Metadata } from "next";
import { IBM_Plex_Mono, Inter } from "next/font/google";
import type { ReactNode } from "react";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

const ibmPlexMono = IBM_Plex_Mono({
  variable: "--font-ibm-plex-mono",
  subsets: ["latin"],
  weight: ["400", "500"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://ammatz.com"),
  title: {
    default: "AMMatz Group | AM Metal Powder Production",
    template: "%s | AMMatz Group",
  },
  description:
    "Israel's first specialized producer of advanced metal powders for additive manufacturing, with plasma atomization technology and metal powder recycling routes.",
  applicationName: "AMMatz Group",
  authors: [{ name: "AMMatz Group" }],
  creator: "AMMatz Group",
  publisher: "AMMatz Group",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "AMMatz Group | AM Metal Powder Production",
    description:
      "Advanced metal powder production, plasma atomization, and metal powder recycling routes for additive manufacturing.",
    url: "/",
    siteName: "AMMatz Group",
    images: [
      {
        url: "/assets/atomization-equipment-blueprint.png",
        width: 1216,
        height: 746,
        alt: "Blueprint drawing of AMMatz atomization equipment",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "AMMatz Group | AM Metal Powder Production",
    description:
      "Israel's first specialized producer of advanced metal powders for additive manufacturing.",
    images: ["/assets/atomization-equipment-blueprint.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${ibmPlexMono.variable}`}>
      <body>{children}</body>
    </html>
  );
}
