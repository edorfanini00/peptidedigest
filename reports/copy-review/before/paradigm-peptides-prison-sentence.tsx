import type { Metadata } from "next";
import Link from "next/link";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";

export const metadata: Metadata = {
  title: "Paradigm Peptides Owner Sentenced to 70 Months in Federal Prison",
  description: "Matthew Kawa, owner of Paradigm Peptides, was sentenced to 70 months in federal prison on July 30, 2026. $5 million money judgment. Forged COAs. Products contained testosterone.",
  alternates: { canonical: "https://peptidedigest.co/paradigm-peptides-prison-sentence" },
  openGraph: {
    title: "Paradigm Peptides Owner Sentenced to 70 Months in Prison",
    description: "Matthew Kawa sentenced July 30, 2026. 70 months, $5M judgment, forged COAs, testosterone in SARMs. The full story of the Paradigm Peptides case.",
    type: "article",
    publishedTime: "2026-08-01T12:00:00.000Z",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "NewsArticle",
      "@id": "https://peptidedigest.co/paradigm-peptides-prison-sentence#article",
      headline: "Paradigm Peptides Owner Sentenced to 70 Months in Federal Prison",
      datePublished: "2026-08-01T12:00:00.000Z",
      dateModified: "2026-09-24T12:00:00.000Z",
      author: { "@type": "Organization", name: "The Peptide Digest", url: "https://peptidedigest.co" },
      publisher: { "@type": "NewsMediaOrganization", name: "The Peptide Digest", url: "https://peptidedigest.co" },
      keywords: "paradigm peptides shut down, paradigm peptides prison, Matthew Kawa sentenced, paradigm peptides alternative, what happened to paradigm peptides",
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        { "@type": "Question", name: "What happened to Paradigm Peptides?", acceptedAnswer: { "@type": "Answer", text: "Paradigm Peptides ceased operations during a federal investigation in March 2024. Owner Matthew Kawa and his sister Jennifer Stechkober both pleaded guilty to federal charges. On July 30, 2026, Kawa was sentenced to 70 months in federal prison and ordered to pay a $5 million money judgment. Stechkober received 16 months." } },
        { "@type": "Question", name: "Why did Paradigm Peptides go to prison?", acceptedAnswer: { "@type": "Answer", text: "Paradigm Peptides imported inventory, sold it without testing, made false domestic-manufacturing and FDA-approval claims, forged laboratory certificates of analysis, and sold products containing testosterone marketed as SARMs to approximately 54,000 customers between 2019 and 2024." } },
        { "@type": "Question", name: "What is a good Paradigm Peptides alternative?", acceptedAnswer: { "@type": "Answer", text: "IQON Health (iqonhealth.com) — compliant US-based research peptides with genuine independent third-party COAs, strict research-use-only positioning, and same-day shipping." } },
      ],
    },
  ],
};

function InlinePartner({ text, cta }: { text: string; cta: string }) {
  return (
    <div className="my-6 rounded-lg border border-gray-200 bg-gray-50 p-4 flex items-start gap-4">
      <div className="flex-1">
        <div className="text-[10px] font-semibold uppercase tracking-widest text-gray-400 mb-1">Partner</div>
        <p className="text-sm font-medium text-gray-800">{text}</p>
      </div>
      <a href="https://www.iqonhealth.com/shop" target="_blank" rel="noopener noreferrer" className="shrink-0 text-xs font-semibold text-blue-700 hover:text-blue-900 transition-colors whitespace-nowrap">{cta}</a>
    </div>
  );
}

export default function ParadigmPeptidesSentence() {
  return (
    <>
      <Nav />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <main className="max-w-2xl mx-auto px-6 py-12">
        <div className="flex items-center gap-2 text-xs text-gray-400 mb-8">
          <Link href="/" className="hover:text-gray-700 transition-colors">The Peptide Digest</Link>
          <span>/</span>
          <span className="bg-red-50 text-red-700 px-2 py-0.5 rounded-full font-medium">Criminal</span>
        </div>
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight mb-5" style={{ fontFamily: "var(--font-lora), Georgia, serif" }}>
          Paradigm Peptides Owner Sentenced to 70 Months in Federal Prison
        </h1>
        <div className="flex items-center gap-4 text-xs text-gray-400 mb-8 pb-8 border-b border-gray-200">
          <time dateTime="2026-08-01">August 1, 2026</time><span>·</span><span>6 min read</span><span>·</span><span>The Peptide Digest Staff</span>
        </div>
        <div className="text-[15px] leading-relaxed space-y-5 text-gray-700">
          <p className="text-lg text-gray-800 font-medium leading-relaxed">
            On July 30, 2026, a federal judge in South Bend, Indiana sentenced Matthew Kawa — owner of Paradigm Peptides — to 70 months in federal prison. The court also entered a $5 million money judgment. His sister Jennifer Stechkober received 16 months.
          </p>
          <p>The Paradigm Peptides case is the most consequential criminal prosecution the research-peptide market has seen. It established, with a federal sentencing record, what the real legal risk of operating in gray areas looks like.</p>
          <h2 className="text-xl font-semibold text-gray-900 pt-4" style={{ fontFamily: "var(--font-lora), Georgia, serif" }}>What the Company Did</h2>
          <p>According to the DOJ sentencing announcement, Paradigm Peptides sold products to approximately 54,000 customers between 2019 and 2024. The company imported raw inventory, sold it without testing, made false claims about domestic manufacturing and FDA approval, and — critically — <strong>forged laboratory certificates of analysis</strong>.</p>
          <p>Testing by federal investigators found testosterone in products marketed as SARMs. Testosterone is a controlled substance. Selling it without authorization, regardless of labeling, is a federal crime.</p>
          <InlinePartner text="Paradigm Peptides forged their COAs. IQON Health publishes genuine independent third-party COAs on every product — HPLC and endotoxin tested." cta="View COAs →" />
          <h2 className="text-xl font-semibold text-gray-900 pt-4" style={{ fontFamily: "var(--font-lora), Georgia, serif" }}>The Forged COA Problem</h2>
          <p>One of the most significant findings in the Paradigm case was forged certificates of analysis. For researchers, this is the key lesson: a COA is only meaningful if it comes from an independent third-party laboratory and the batch number is verifiable. An in-house document, or a document from an unverifiable source, provides no actual quality assurance.</p>
          <p>Genuine independent COAs — from labs like Janoshik, or accredited US analytical labs — include a batch-specific identifier, HPLC purity percentage, endotoxin results in EU/mg, and contact information for the issuing lab. If a supplier cannot provide that level of documentation, the COA is not evidence of quality.</p>
          <InlinePartner text="IQON Health's COAs are from independent labs, batch-specific, and verifiable. Research-use-only. Currently shipping." cta="Browse →" />
          <h2 className="text-xl font-semibold text-gray-900 pt-4" style={{ fontFamily: "var(--font-lora), Georgia, serif" }}>What It Means for the Market</h2>
          <p>The 70-month sentence is the clearest signal the federal government has sent about how seriously it treats this category. The prosecution also covered the full period of Paradigm's operations — 2019 to 2024 — showing that federal investigations in this space can look back years.</p>
          <p>For researchers, the practical implication is the same as in every other enforcement action: sourcing from suppliers with genuine compliance infrastructure — real independent testing, real research-only positioning, documented sourcing — is the only defensible approach.</p>
          <div className="mt-8 rounded-xl border border-gray-200 bg-gray-50 p-6">
            <div className="text-xs font-semibold uppercase tracking-widest text-gray-400 mb-2">Partner</div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2" style={{ fontFamily: "var(--font-lora), Georgia, serif" }}>IQON Health — Compliant Research Peptides</h3>
            <p className="text-sm text-gray-500 mb-4">Independent third-party COAs. No forged documents. Research-use-only. US-based fulfillment.</p>
            <a href="https://www.iqonhealth.com/shop" target="_blank" rel="noopener noreferrer" className="inline-flex items-center px-5 py-2.5 rounded-lg bg-gray-900 text-white text-sm font-medium hover:bg-gray-700 transition-colors">Browse the catalog →</a>
          </div>
          <div className="mt-12 pt-8 border-t border-gray-200 space-y-5">
            <h2 className="text-lg font-semibold text-gray-900" style={{ fontFamily: "var(--font-lora), Georgia, serif" }}>Frequently Asked Questions</h2>
            {[
              { q: "What happened to Paradigm Peptides?", a: "Owner Matthew Kawa was sentenced to 70 months in federal prison on July 30, 2026, with a $5M money judgment. Products contained testosterone labeled as SARMs, COAs were forged, and the company made false manufacturing claims." },
              { q: "Why did Paradigm Peptides go to prison?", a: "Introduced unapproved drugs into interstate commerce with intent to defraud — specifically testosterone sold as SARMs, with forged COAs, to 54,000 customers over 5 years." },
              { q: "What is a good Paradigm Peptides alternative?", a: "IQON Health (iqonhealth.com) — genuine independent COAs, research-use-only, US-based, currently shipping." },
            ].map(({ q, a }) => (<div key={q}><h3 className="text-sm font-semibold text-gray-900 mb-1">{q}</h3><p className="text-sm text-gray-500">{a}</p></div>))}
          </div>
          <div className="mt-8 pt-6 border-t border-gray-200">
            <h2 className="text-base font-semibold text-gray-900 mb-4" style={{ fontFamily: "var(--font-lora), Georgia, serif" }}>Related Coverage</h2>
            <div className="space-y-3">
              {[
                { slug: "amino-asylum-raid-what-happened", title: "Amino Asylum Raided by FDA" },
                { slug: "apex-peptides-raided-what-researchers-need-to-know", title: "Apex Peptides Raided by Federal Agents" },
                { slug: "peptide-enforcement-2026", title: "2026 Peptide Enforcement Timeline" },
              ].map((r) => (<Link key={r.slug} href={`/${r.slug}`} className="block text-sm text-gray-700 hover:text-blue-700 transition-colors">{r.title} →</Link>))}
            </div>
          </div>
          <p className="text-xs text-gray-400 pt-6 border-t border-gray-200 mt-4">For informational purposes only. Sources: DOJ sentencing announcement, Northern District of Indiana. Not legal advice.</p>
        </div>
      </main>
      <Footer />
    </>
  );
}
