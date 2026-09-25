import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://peptidedigest.co";
  const now = new Date("2026-09-24");

  return [
    {
      url: `${base}/how-to-read-peptide-coa`,
      lastModified: new Date("2026-09-25"),
      changeFrequency: "monthly",
      priority: 0.85,
    },
    {
      url: `${base}/what-does-research-use-only-mean`,
      lastModified: new Date("2026-09-25"),
      changeFrequency: "monthly",
      priority: 0.85,
    },
    {
      url: `${base}/eli-lilly-lawsuits-research-peptide-sellers`,
      lastModified: new Date("2026-09-25"),
      changeFrequency: "monthly",
      priority: 0.85,
    },
    {
      url: `${base}/fda-warning-letters-peptide-sellers-august-2026`,
      lastModified: new Date("2026-09-25"),
      changeFrequency: "monthly",
      priority: 0.85,
    },
    {
      url: `${base}/state-crackdown-research-peptides-2026`,
      lastModified: new Date("2026-09-25"),
      changeFrequency: "monthly",
      priority: 0.85,
    },
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
