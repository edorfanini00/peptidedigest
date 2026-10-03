import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://peptidedigest.co";
  // Calendar day of the substantive editorial update; no invented clock time.
  const now = "2026-09-26";

  return [
    {
      url: `${base}/eloratzp-phase-2-results-weight-loss-tolerability`,
      lastModified: new Date("2026-10-03T12:22:14Z"),
      changeFrequency: "weekly",
      priority: 0.85,
    },
    {
      url: `${base}/endotoxin-vs-sterility-peptide-research`,
      lastModified: new Date("2026-10-03T12:19:36Z"),
      changeFrequency: "monthly",
      priority: 0.85,
    },
    {
      url: `${base}/body-science-supplements-garman-sentencing`,
      lastModified: new Date("2026-10-02T08:28:09-04:00"),
      changeFrequency: "monthly",
      priority: 0.85,
    },
    {
      url: `${base}/peptide-content-vs-purity-measurement`,
      lastModified: new Date("2026-10-02T08:28:09-04:00"),
      changeFrequency: "monthly",
      priority: 0.85,
    },
    {
      url: `${base}/ghk-cu-peptide-research-what-studies-show`,
      lastModified: new Date("2026-10-02T12:54:27Z"),
      changeFrequency: "monthly",
      priority: 0.85,
    },
    {
      url: `${base}/fda-second-pcac-peptides-february-2027`,
      lastModified: new Date("2026-10-02T12:28:40Z"),
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${base}/fda-import-alert-66-80-glp1-api-border-enforcement`,
      lastModified: new Date("2026-09-30T08:00:00-04:00"),
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${base}/mots-c-mitochondria-peptide-research`,
      lastModified: new Date("2026-09-30T08:00:00-04:00"),
      changeFrequency: "monthly",
      priority: 0.85,
    },
    {
      url: `${base}/fda-pcac-peptide-compounding-vote-2026`,
      lastModified: new Date("2026-10-03T14:26:39.368Z"),
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${base}/kpv-peptide-research-what-studies-show`,
      lastModified: new Date("2026-09-29T08:00:00-04:00"),
      changeFrequency: "monthly",
      priority: 0.85,
    },
    {
      url: `${base}/retatrutide-triumph-1-phase-3-results-2026`,
      lastModified: new Date("2026-09-28T08:00:00-04:00"),
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${base}/fda-glp1-compounding-exclusion-proposed-rule-2026`,
      lastModified: new Date("2026-09-28T08:00:00-04:00"),
      changeFrequency: "monthly",
      priority: 0.85,
    },
    {
      url: `${base}/enicepatide-phase-2-diabetes-results-september-2026`,
      lastModified: new Date("2026-09-27T12:24:43+00:00"),
      changeFrequency: "weekly",
      priority: 0.85,
    },
    {
      url: `${base}/peptide-adsorption-glass-plastic-lab-results`,
      lastModified: new Date("2026-09-27T12:24:43+00:00"),
      changeFrequency: "monthly",
      priority: 0.85,
    },
    {
      url: `${base}/compliant-research-peptide-supplier`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.85,
    },
    {
      url: `${base}/empower-pharmacy-fda-warning-letter-september-2026`,
      lastModified: new Date("2026-09-26T16:12:21-04:00"),
      changeFrequency: "weekly",
      priority: 0.85,
    },
    {
      url: `${base}/peptide-freeze-thaw-stability-lab-evidence`,
      lastModified: new Date("2026-09-26T16:12:21-04:00"),
      changeFrequency: "monthly",
      priority: 0.85,
    },
    {
      url: `${base}/how-to-read-peptide-coa`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.85,
    },
    {
      url: `${base}/what-does-research-use-only-mean`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.85,
    },
    {
      url: `${base}/eli-lilly-lawsuits-research-peptide-sellers`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.85,
    },
    {
      url: `${base}/fda-warning-letters-peptide-sellers-august-2026`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.85,
    },
    {
      url: `${base}/state-crackdown-research-peptides-2026`,
      lastModified: now,
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
      url: `${base}/what-happened-to-apex-peptides`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${base}/what-happened-to-peptide-sciences`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${base}/amino-asylum-raid-what-happened`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${base}/paradigm-peptides-prison-sentence`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${base}/peptide-enforcement-2026`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.9,
    },
  ];
}
