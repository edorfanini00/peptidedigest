import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://peptidedigest.co";
  const now = new Date("2026-09-24");

  return [
    {
      url: base,
      lastModified: now,
      changeFrequency: "daily",
      priority: 1,
    },
    {
      url: `${base}/apex-peptides-raided-what-researchers-need-to-know`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${base}/peptide-sciences-shutdown-market-impact`,
      lastModified: new Date("2026-09-25"),
      changeFrequency: "monthly",
      priority: 0.85,
    },
    {
      url: `${base}/what-makes-a-compliant-peptide-supplier-2026`,
      lastModified: new Date("2026-09-25"),
      changeFrequency: "monthly",
      priority: 0.85,
    },
    {
      url: `${base}/amino-asylum-raid-2026-summary`,
      lastModified: new Date("2026-09-25"),
      changeFrequency: "monthly",
      priority: 0.85,
    },
    {
      url: `${base}/what-happened-to-peptide-sciences`,
      lastModified: new Date("2026-09-24"),
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${base}/amino-asylum-raid-what-happened`,
      lastModified: new Date("2026-09-24"),
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${base}/paradigm-peptides-prison-sentence`,
      lastModified: new Date("2026-09-24"),
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${base}/peptide-enforcement-2026`,
      lastModified: new Date("2026-09-24"),
      changeFrequency: "weekly",
      priority: 0.9,
    },
  ];
}
