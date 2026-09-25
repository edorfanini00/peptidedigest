import type { Metadata } from "next";
import Link from "next/link";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";

export const metadata: Metadata = {
  title: "Apex Peptides Raided by Federal Agents: What Researchers Need to Know | Peptide Digest",
  description:
    "Federal agents from the U.S. Postal Inspection Service, FBI, and IRS CI raided Apex Peptides on September 24, 2026. Here is what happened, what it means, and how to evaluate alternative research peptide suppliers.",
  openGraph: {
    title: "Apex Peptides Raided by Federal Agents: What Researchers Need to Know",
    description:
      "Federal agents raided Apex Peptides this week. We cover what happened, what the enforcement pattern means, and what researchers should look for in a compliant alternative source.",
    type: "article",
  },
};

export default function ApexRaidedArticle() {
  return (
    <>
      <Nav />
      <main className="max-w-2xl mx-auto px-6 py-12">
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-xs text-gray-400 mb-8">
          <Link href="/" className="hover:text-gray-700 transition-colors">Peptide Digest</Link>
          <span>/</span>
          <span className="bg-orange-50 text-orange-700 px-2 py-0.5 rounded-full font-medium">Industry</span>
        </div>

        {/* Header */}
        <h1
          className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight mb-5"
          style={{ fontFamily: "var(--font-lora), Georgia, serif" }}
        >
          Apex Peptides Raided by Federal Agents: What Researchers Need to Know
        </h1>

        <div className="flex items-center gap-4 text-xs text-gray-400 mb-8 pb-8 border-b border-gray-200">
          <span>September 24, 2026</span>
          <span>·</span>
          <span>6 min read</span>
          <span>·</span>
          <span>Peptide Digest Staff</span>
        </div>

        {/* Article body */}
        <div className="prose prose-gray max-w-none text-[15px] leading-relaxed space-y-5 text-gray-700">

          <p className="text-lg text-gray-800 font-medium leading-relaxed">
            On September 24, 2026, federal agents converged on a North Sioux City, South Dakota address connected to Apex Peptides, conducting simultaneous searches of both a commercial building and a residential property in the Dakota Dunes neighborhood.
          </p>

          <p>
            The operation was led by the U.S. Postal Inspection Service out of Minneapolis, with FBI agents from the Omaha and Minneapolis field offices participating alongside IRS Criminal Investigation, the Union County Sheriff&apos;s Office, and North Sioux City Police. More than a dozen marked and unmarked vehicles were present. Several boxes of materials were removed from the premises over the course of the day.
          </p>

          <h2
            className="text-xl font-semibold text-gray-900 pt-4"
            style={{ fontFamily: "var(--font-lora), Georgia, serif" }}
          >
            What Was Targeted
          </h2>

          <p>
            The primary address raided — 503 Prosperity Way in North Sioux City — housed several businesses, including Apex Waste Management and Apex Research. Apex Peptides was listed at a separate Sergeant Bluff, Iowa address but is connected to the same principals. The residential property searched belongs to Ryan Isaacson, whose twin brother Riley Isaacson is president of Apex Waste Management and Apex Research.
          </p>

          <p>
            As of publication, Apex Peptides&apos; website appears non-operational. No charges have been publicly announced, though federal enforcement actions of this scope — involving the Postal Inspection Service, FBI, and IRS CI simultaneously — typically indicate an ongoing criminal investigation.
          </p>

          <h2
            className="text-xl font-semibold text-gray-900 pt-4"
            style={{ fontFamily: "var(--font-lora), Georgia, serif" }}
          >
            The Broader Enforcement Context
          </h2>

          <p>
            This raid does not happen in isolation. March 2026 brought the most concentrated enforcement action against research-peptide vendors in the modern era of the industry: the Department of Justice announced action against Peptide Sciences, one of the longest-running research-peptide suppliers; federal agents raided Amino Asylum; and Paradigm Peptides faced federal charges — all within weeks of each other.
          </p>

          <p>
            The enforcement wave reflects years of escalating FDA and DOJ scrutiny of the gap between &quot;research-use-only&quot; labeling and actual end-use patterns — a gap that expanded dramatically during the 2021–2025 GLP-1 and broader peptide market boom. Regulators have been explicit that the label alone does not provide legal cover when marketing, distribution patterns, and customer-facing content imply human use.
          </p>

          <h2
            className="text-xl font-semibold text-gray-900 pt-4"
            style={{ fontFamily: "var(--font-lora), Georgia, serif" }}
          >
            What This Means for Researchers
          </h2>

          <p>
            For researchers who were sourcing from Apex Peptides, the immediate practical question is supply continuity. For the broader community, the pattern is worth understanding: the vendors that have faced enforcement action share common traits — implied human-use marketing, influencer-driven promotional strategies, rapid scaling without compliance infrastructure, and in some cases compounds under active FDA review.
          </p>

          <p>
            The suppliers that have operated through multiple enforcement cycles without disruption tend to look different: strict research-only positioning across all customer-facing materials, third-party testing documentation from independent labs, transparent supply-chain disclosures, and conservative compound selection limited to those with established research literature.
          </p>

          <h2
            className="text-xl font-semibold text-gray-900 pt-4"
            style={{ fontFamily: "var(--font-lora), Georgia, serif" }}
          >
            What to Look for in a Supplier
          </h2>

          <p>If you are re-sourcing following this week&apos;s news, the criteria that distinguish lower-risk suppliers are consistent:</p>

          <ul className="list-disc list-inside space-y-2 text-gray-700">
            <li><strong>Strict research-use-only positioning</strong> — no human-use claims, no dosing guidance anywhere on the site or social channels</li>
            <li><strong>Independent third-party COAs</strong> — HPLC purity and endotoxin testing from external labs, with batch numbers traceable to specific products</li>
            <li><strong>Transparent sourcing</strong> — documented supply chain rather than a domestic label on unverified foreign material</li>
            <li><strong>US-based fulfillment with legal compliance history</strong> — not a recently incorporated entity with no operating track record</li>
            <li><strong>Conservative compound selection</strong> — avoiding compounds currently under active FDA enforcement or review action</li>
          </ul>

          <h2
            className="text-xl font-semibold text-gray-900 pt-4"
            style={{ fontFamily: "var(--font-lora), Georgia, serif" }}
          >
            A Source Worth Considering
          </h2>

          <p>
            IQON Health is a US-based research peptide supplier that has operated with a strict research-use-only model since launch. Every product ships with third-party testing documentation — HPLC purity verified, endotoxin tested. Their catalog is limited to compounds with established research literature, and no human-use claims appear anywhere on the site or in their marketing.
          </p>

          <p>
            They are currently shipping with same-day processing available on in-stock items.
          </p>

          {/* CTA */}
          <div className="mt-10 rounded-xl border border-gray-200 bg-gray-50 p-6">
            <div className="text-xs font-semibold uppercase tracking-widest text-gray-400 mb-2">Research Supplier</div>
            <h3
              className="text-lg font-semibold text-gray-900 mb-2"
              style={{ fontFamily: "var(--font-lora), Georgia, serif" }}
            >
              IQON Health — Compliant Research Peptides
            </h3>
            <p className="text-sm text-gray-500 mb-4">
              Third-party tested. Research-use-only. US-based fulfillment. COAs on every product.
            </p>
            <a
              href="https://www.iqonhealth.com/shop"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-5 py-2.5 rounded-lg bg-gray-900 text-white text-sm font-medium hover:bg-gray-700 transition-colors"
            >
              Browse the catalog →
            </a>
            <p className="text-xs text-gray-400 mt-3">
              All products are for research use only. Not for human consumption.
            </p>
          </div>

          <p className="text-xs text-gray-400 pt-6 border-t border-gray-200 mt-8">
            This article is for informational purposes only. Peptide Digest does not provide medical advice, legal counsel, or product endorsements. All information is based on publicly available sources at the time of publication.
          </p>
        </div>

        {/* Related */}
        <div className="mt-14 pt-10 border-t border-gray-200">
          <h2
            className="text-lg font-semibold text-gray-900 mb-6"
            style={{ fontFamily: "var(--font-lora), Georgia, serif" }}
          >
            Related Coverage
          </h2>
          <div className="space-y-5">
            {[
              {
                slug: "peptide-sciences-shutdown-market-impact",
                category: "Industry",
                title: "Peptide Sciences Shutdown: The Market Fallout Three Months Later",
                date: "March 18, 2026",
              },
              {
                slug: "what-makes-a-compliant-peptide-supplier-2026",
                category: "Industry",
                title: "What a Compliant Research Peptide Supplier Looks Like in 2026",
                date: "September 10, 2026",
              },
              {
                slug: "fda-july-2026-advisory-committee-bpc157-tb500",
                category: "Regulatory",
                title: "FDA Advisory Committee Reviews BPC-157, TB-500, and Five Other Compounds",
                date: "July 28, 2026",
              },
            ].map((r) => (
              <Link key={r.slug} href={`/${r.slug}`} className="flex items-start gap-4 group">
                <span className={`shrink-0 text-xs font-medium px-2 py-0.5 rounded-full mt-0.5 ${
                  r.category === "Industry" ? "bg-orange-50 text-orange-700" : "bg-blue-50 text-blue-700"
                }`}>
                  {r.category}
                </span>
                <div>
                  <p className="text-sm font-medium text-gray-800 group-hover:text-blue-700 transition-colors leading-snug">
                    {r.title}
                  </p>
                  <p className="text-xs text-gray-400 mt-0.5">{r.date}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
