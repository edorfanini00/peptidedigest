import type { Metadata } from "next";
import Link from "next/link";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";

export const metadata: Metadata = {
  title: "2026 Peptide Enforcement Timeline: Every Major Action",
  description:
    "A complete timeline of federal enforcement actions against research peptide suppliers in 2026 — Peptide Sciences, Amino Asylum, Paradigm Peptides, and Apex Peptides.",
  alternates: {
    canonical: "https://peptidedigest.co/peptide-enforcement-2026",
  },
  openGraph: {
    title: "2026 Peptide Enforcement Timeline: Every Major Action",
    description:
      "Federal agencies shut down or raided multiple major peptide suppliers in 2026. Here is the full timeline of what happened and when.",
    type: "article",
    publishedTime: "2026-09-24T12:00:00.000Z",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "NewsArticle",
      "@id": "https://peptidedigest.co/peptide-enforcement-2026#article",
      headline: "2026 Peptide Enforcement Timeline: Every Major Action",
      datePublished: "2026-09-24T12:00:00.000Z",
      dateModified: "2026-09-24T12:00:00.000Z",
      author: { "@type": "Organization", name: "The Peptide Digest", url: "https://peptidedigest.co" },
      publisher: { "@type": "NewsMediaOrganization", name: "The Peptide Digest", url: "https://peptidedigest.co" },
      mainEntityOfPage: { "@type": "WebPage", "@id": "https://peptidedigest.co/peptide-enforcement-2026" },
      keywords: "peptide enforcement 2026, Peptide Sciences shutdown, Amino Asylum raid, Apex Peptides raided, research peptide FDA",
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "What peptide companies were shut down in 2026?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "In 2026, Peptide Sciences was shut down by the DOJ in March, Amino Asylum was raided by federal agents in March, Paradigm Peptides faced federal charges in March, and Apex Peptides was raided by the U.S. Postal Inspection Service, FBI, and IRS Criminal Investigation in September.",
          },
        },
        {
          "@type": "Question",
          name: "Why are peptide companies being shut down?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Federal enforcement has focused on the gap between 'research-use-only' labeling and actual marketing and distribution patterns that imply human use. Suppliers with influencer-driven promotions, dosing guidance, or implied therapeutic claims have been primary targets.",
          },
        },
        {
          "@type": "Question",
          name: "Are research peptides still legal to buy?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Research peptides sold strictly for laboratory research purposes continue to be available from compliant suppliers. The enforcement actions have specifically targeted companies whose marketing, labeling, or distribution implied human use rather than research use.",
          },
        },
      ],
    },
  ],
};

const timeline = [
  { date: "March 2026", company: "Peptide Sciences", action: "DOJ enforcement action — company shut down", category: "Shutdown" },
  { date: "March 2026", company: "Amino Asylum", action: "Federal agents conducted enforcement raid on operations", category: "Raid" },
  { date: "March 2026", company: "Paradigm Peptides", action: "Federal charges filed", category: "Charges" },
  { date: "July 2026", company: "FDA Advisory Committee", action: "Reviewed BPC-157, TB-500, KPV, MOTS-c, Semax, Epitalon, DSIP", category: "Regulatory" },
  { date: "September 2026", company: "Apex Peptides", action: "Raided by USPIS, FBI, and IRS CI — website went offline", category: "Raid" },
];

const categoryColors: Record<string, string> = {
  Shutdown: "bg-red-50 text-red-700",
  Raid: "bg-orange-50 text-orange-700",
  Charges: "bg-yellow-50 text-yellow-700",
  Regulatory: "bg-blue-50 text-blue-700",
};

export default function EnforcementTimeline() {
  return (
    <>
      <Nav />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <main className="max-w-2xl mx-auto px-6 py-12">
        <div className="flex items-center gap-2 text-xs text-gray-400 mb-8">
          <Link href="/" className="hover:text-gray-700 transition-colors">The Peptide Digest</Link>
          <span>/</span>
          <span className="bg-orange-50 text-orange-700 px-2 py-0.5 rounded-full font-medium">Industry</span>
        </div>

        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight mb-5" style={{ fontFamily: "var(--font-lora), Georgia, serif" }}>
          2026 Peptide Enforcement Timeline: Every Major Action
        </h1>

        <div className="flex items-center gap-4 text-xs text-gray-400 mb-8 pb-8 border-b border-gray-200">
          <time dateTime="2026-09-24">September 24, 2026</time>
          <span>·</span>
          <span>5 min read</span>
          <span>·</span>
          <span>The Peptide Digest Staff</span>
        </div>

        <div className="text-[15px] leading-relaxed space-y-5 text-gray-700">
          <p className="text-lg text-gray-800 font-medium leading-relaxed">
            2026 has been the most consequential year for federal enforcement against research-peptide suppliers in the modern history of the market. Here is every major action, in order.
          </p>

          <div className="my-8 space-y-4">
            {timeline.map((item, i) => (
              <div key={i} className="flex gap-4 p-4 rounded-lg border border-gray-200 bg-white">
                <div className="shrink-0 text-xs text-gray-400 w-28 pt-0.5">{item.date}</div>
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-sm font-semibold text-gray-900">{item.company}</span>
                    <span className={`text-[10px] font-semibold px-2 py-0.5 rounded-full ${categoryColors[item.category]}`}>{item.category}</span>
                  </div>
                  <p className="text-sm text-gray-500">{item.action}</p>
                </div>
              </div>
            ))}
          </div>

          <h2 className="text-xl font-semibold text-gray-900 pt-4" style={{ fontFamily: "var(--font-lora), Georgia, serif" }}>
            The Pattern
          </h2>
          <p>
            The enforcement actions share common characteristics. Targeted companies were operating with marketing strategies — influencer sponsorships, implied dosing guidance, before-and-after testimonials — that regulators view as inconsistent with legitimate research-only positioning. The scale of the 2021–2025 GLP-1 boom drew mainstream consumer attention to peptides, and with it, enforcement attention to the largest and most visible suppliers.
          </p>
          <p>
            Suppliers that have continued operating through this period share a different profile: conservative compound selection, strict research-only positioning across all channels, and independent third-party testing documentation.
          </p>

          <div className="mt-8 rounded-xl border border-gray-200 bg-gray-50 p-6">
            <div className="text-xs font-semibold uppercase tracking-widest text-gray-400 mb-2">Partner</div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2" style={{ fontFamily: "var(--font-lora), Georgia, serif" }}>
              IQON Health — Research Peptides
            </h3>
            <p className="text-sm text-gray-500 mb-4">Compliant from day one. Third-party tested. Research-use-only. US-based fulfillment.</p>
            <a href="https://www.iqonhealth.com/shop" target="_blank" rel="noopener noreferrer" className="inline-flex items-center px-5 py-2.5 rounded-lg bg-gray-900 text-white text-sm font-medium hover:bg-gray-700 transition-colors">
              Browse the catalog →
            </a>
          </div>

          <div className="mt-12 pt-8 border-t border-gray-200 space-y-5">
            <h2 className="text-lg font-semibold text-gray-900" style={{ fontFamily: "var(--font-lora), Georgia, serif" }}>Frequently Asked Questions</h2>
            {[
              { q: "What peptide companies were shut down in 2026?", a: "Peptide Sciences (DOJ, March), Amino Asylum (raided, March), Paradigm Peptides (charges, March), and Apex Peptides (raided, September)." },
              { q: "Why are peptide companies being shut down?", a: "Enforcement has focused on suppliers whose marketing implied human use — influencer campaigns, dosing guidance, therapeutic claims — rather than legitimate research-only operations." },
              { q: "Are research peptides still legal to buy?", a: "Yes. Compliant suppliers operating with strict research-only positioning continue to ship. The enforcement targets companies whose marketing crossed the line." },
            ].map(({ q, a }) => (
              <div key={q}>
                <h3 className="text-sm font-semibold text-gray-900 mb-1">{q}</h3>
                <p className="text-sm text-gray-500">{a}</p>
              </div>
            ))}
          </div>

          <p className="text-xs text-gray-400 pt-6 border-t border-gray-200 mt-8">
            For informational purposes only. Not medical or legal advice.
          </p>
        </div>
      </main>
      <Footer />
    </>
  );
}
