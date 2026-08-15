import type { MetadataRoute } from "next";

const siteUrl = "https://ammatz.com";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: siteUrl,
      lastModified: new Date("2026-08-15"),
      changeFrequency: "monthly",
      priority: 1,
    },
  ];
}
