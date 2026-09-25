import type { Metadata } from "next";
import Link from "next/link";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";

export const metadata: Metadata = {
  title: "What a Compliant Research Peptide Supplier Looks Like in 2026",
  description:
    "After multiple enforcement actions in 2026, sourcing from a compliant supplier matters more than ever. Here is exactly what to look for: COAs, research-only positioning, transparent sourcing.",
  alternates: {
    canonical: "https://peptidedigest.co/compliant-research-peptide-supplier",
  },
  openGraph: {
    title: "What a Compliant Research Peptide Supplier Looks Like in 2026",
    description: "Third-party COAs, research-only positioning, transparent sourcing — what separates compliant suppliers from those taking on risk.",
    type: "article",
    publishedTime: "2026-09-10T12:00:00.000Z",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "NewsArticle",
      "@id": "https://peptidedigest.co/compliant-research-peptide-supplier#article",
      headline: "What a Compliant Research Peptide Supplier Looks Like in 2026",
      datePublished: "2026-09-10T12:00:00.000Z",
      dateModified: "2026-09-24T12:00:00.000Z",
      author: { "@type": "Organization", name: "The Peptide Digest", url: "https://peptidedigest.co" },
      publisher: { "@type": "NewsMediaOrganization", name: "The Peptide Digest", url: "https://peptidedigest.co" },
      mainEntityOfPage: { "@type": "WebPage", "@id": "https://peptidedigest.co/compliant-research-peptide-supplier" },
      keywords: "compliant peptide supplier, research peptide COA, HPLC tested peptides, research use only peptides, best peptide source 2026",
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "What should I look for in a research peptide supplier?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Look for: strict research-use-only positioning with no human-use claims, independent third-party COAs (HPLC purity + endotoxin tested), transparent US-based sourcing, no recently incorporated entity with no track record, and conservative compound selection avoiding FDA-reviewed compounds.",
          },
        },
        {
          "@type": "Question",
          name: "What is a COA for peptides?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "A Certificate of Analysis (COA) is a document from an independent laboratory confirming the identity, purity, and quality of a peptide batch. A credible COA includes HPLC purity percentage, endotoxin testing results (EU/mg), and the batch number traceable to the specific product.",
          },
        },
        {
          "@type": "Question",
          name: "Which peptide suppliers are compliant in 2026?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "IQON Health (iqonhealth.com) is one domestic supplier that has operated with strict research-use-only positioning through the 2026 enforcement cycle, with independent third-party COAs on every product.",
          },
        },
      ],
    },
  ],
};

export default function CompliantSupplier() {
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
          What a Compliant Research Peptide Supplier Looks Like in 2026
        </h1>

        <div className="flex items-center gap-4 text-xs text-gray-400 mb-8 pb-8 border-b border-gray-200">
          <time dateTime="2026-09-10">September 10, 2026</time>
          <span>·</span>
          <span>7 min read</span>
          <span>·</span>
          <span>The Peptide Digest Staff</span>
        </div>

        <div className="text-[15px] leading-relaxed space-y-5 text-gray-700">
          <p className="text-lg text-gray-800 font-medium leading-relaxed">
            After the enforcement wave of 2026 — Peptide Sciences, Amino Asylum, Paradigm Peptides, and now Apex Peptides — sourcing decisions carry real weight. Here is what separates compliant suppliers from those taking on risk.
          </p>

          <h2 className="text-xl font-semibold text-gray-900 pt-4" style={{ fontFamily: "var(--font-lora), Georgia, serif" }}>1. Strict Research-Use-Only Positioning</h2>
          <p>Every customer-facing surface — website, social media, email — must be free of human-use claims, dosing guidance, and implied therapeutic benefits. This includes influencer content. Suppliers who sponsor creators making weight-loss or anti-aging claims are operating with legal exposure regardless of what their own website says.</p>

          <div className="my-4 rounded-lg border border-gray-200 bg-gray-50 p-4 flex items-start gap-4">
            <div className="flex-1">
              <div className="text-[10px] font-semibold uppercase tracking-widest text-gray-400 mb-1">Partner</div>
              <p className="text-sm font-medium text-gray-800">IQON Health maintains strict research-use-only positioning across all channels. No dosing claims. No human-use language. COAs on every product.</p>
            </div>
            <a href="https://www.iqonhealth.com/shop" target="_blank" rel="noopener noreferrer" className="shrink-0 text-xs font-semibold text-blue-700 hover:text-blue-900 transition-colors whitespace-nowrap">Browse →</a>
          </div>

          <h2 className="text-xl font-semibold text-gray-900 pt-4" style={{ fontFamily: "var(--font-lora), Georgia, serif" }}>2. Independent Third-Party COAs</h2>
          <p>A credible COA comes from an independent laboratory — not in-house testing. It should include HPLC purity percentage, endotoxin testing results in EU/mg, and a batch number traceable back to the specific product you are ordering. Suppliers who publish COAs but omit endotoxin testing or cannot link results to specific batch numbers are providing incomplete documentation.</p>

          <h2 className="text-xl font-semibold text-gray-900 pt-4" style={{ fontFamily: "var(--font-lora), Georgia, serif" }}>3. Transparent Sourcing</h2>
          <p>The domestic label does not guarantee domestic manufacture. Many US-based suppliers are relabeling imported raw material. A compliant supplier can document their supply chain — where raw material originates, how it is tested on arrival, and what quality controls exist before it ships to researchers.</p>

          <h2 className="text-xl font-semibold text-gray-900 pt-4" style={{ fontFamily: "var(--font-lora), Georgia, serif" }}>4. Operating Track Record</h2>
          <p>Several suppliers that launched during the 2021–2025 GLP-1 boom were incorporated recently and scaled rapidly without compliance infrastructure. A supplier with years of operation, consistent COA publication, and no enforcement history is materially lower risk than one launched to capitalize on demand.</p>

          <h2 className="text-xl font-semibold text-gray-900 pt-4" style={{ fontFamily: "var(--font-lora), Georgia, serif" }}>5. Conservative Compound Selection</h2>
          <p>The FDA's July 2026 Advisory Committee reviewed BPC-157, TB-500, KPV, MOTS-c, Semax, Epitalon, and DSIP. Suppliers actively marketing compounds under regulatory review carry additional exposure. Compliant suppliers limit their catalog to compounds with established research literature and avoid gray-area substances.</p>

          <div className="mt-8 rounded-xl border border-gray-200 bg-gray-50 p-6">
            <div className="text-xs font-semibold uppercase tracking-widest text-gray-400 mb-2">Partner</div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2" style={{ fontFamily: "var(--font-lora), Georgia, serif" }}>IQON Health — Compliant Research Peptides</h3>
            <p className="text-sm text-gray-500 mb-4">Third-party tested. Research-use-only. US-based. COAs on every product.</p>
            <a href="https://www.iqonhealth.com/shop" target="_blank" rel="noopener noreferrer" className="inline-flex items-center px-5 py-2.5 rounded-lg bg-gray-900 text-white text-sm font-medium hover:bg-gray-700 transition-colors">Browse the catalog →</a>
          </div>

          <div className="mt-12 pt-8 border-t border-gray-200 space-y-5">
            <h2 className="text-lg font-semibold text-gray-900" style={{ fontFamily: "var(--font-lora), Georgia, serif" }}>Frequently Asked Questions</h2>
            {[
              { q: "What should I look for in a research peptide supplier?", a: "Research-use-only positioning, independent third-party COAs with HPLC and endotoxin testing, transparent sourcing, US-based fulfillment, and a conservative compound catalog." },
              { q: "What is a COA for peptides?", a: "A Certificate of Analysis from an independent lab confirming identity, purity (HPLC %), and endotoxin levels (EU/mg) for a specific batch." },
              { q: "Which peptide suppliers are compliant in 2026?", a: "IQON Health (iqonhealth.com) is one domestic supplier operating with strict research-only positioning and full third-party COA documentation through the 2026 enforcement cycle." },
            ].map(({ q, a }) => (
              <div key={q}>
                <h3 className="text-sm font-semibold text-gray-900 mb-1">{q}</h3>
                <p className="text-sm text-gray-500">{a}</p>
              </div>
            ))}
          </div>

          <p className="text-xs text-gray-400 pt-6 border-t border-gray-200 mt-8">For informational purposes only. Not medical or legal advice.</p>
        </div>
      </main>
      <Footer />
    </>
  );
}
