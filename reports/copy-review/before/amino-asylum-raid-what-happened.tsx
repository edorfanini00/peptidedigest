import type { Metadata } from "next";
import Link from "next/link";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";

export const metadata: Metadata = {
  title: "Amino Asylum Raided by FDA: What Happened",
  description: "FDA agents raided Amino Asylum's warehouse in June 2025. Both founders pleaded guilty in December 2025. Here is the full story of what happened and what was alleged.",
  alternates: { canonical: "https://peptidedigest.co/amino-asylum-raid-what-happened" },
  openGraph: {
    title: "Amino Asylum Raided by FDA: What Happened",
    description: "FDA raided Amino Asylum in June 2025. Guilty pleas in December 2025. Products contained testosterone sold as SARMs. Full breakdown.",
    type: "article",
    publishedTime: "2026-01-15T12:00:00.000Z",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "NewsArticle",
      "@id": "https://peptidedigest.co/amino-asylum-raid-what-happened#article",
      headline: "Amino Asylum Raided by FDA: What Happened",
      datePublished: "2026-01-15T12:00:00.000Z",
      dateModified: "2026-09-24T12:00:00.000Z",
      author: { "@type": "Organization", name: "The Peptide Digest", url: "https://peptidedigest.co" },
      publisher: { "@type": "NewsMediaOrganization", name: "The Peptide Digest", url: "https://peptidedigest.co" },
      keywords: "amino asylum raid, amino asylum shut down, amino asylum FDA, amino asylum alternative, what happened to amino asylum",
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        { "@type": "Question", name: "What happened to Amino Asylum?", acceptedAnswer: { "@type": "Answer", text: "FDA agents raided Amino Asylum's warehouse in June 2025. The site went offline overnight. Both founders reportedly pleaded guilty to federal charges in December 2025. The charges related to selling unapproved drugs — specifically products labeled as SARMs that contained testosterone." } },
        { "@type": "Question", name: "Why was Amino Asylum raided?", acceptedAnswer: { "@type": "Answer", text: "The FDA raid on Amino Asylum in June 2025 was part of a broader enforcement action against research-peptide and SARM vendors. Products sold as SARMs were found to contain testosterone, a controlled substance, crossing the line from regulatory gray area into drug distribution without authorization." } },
        { "@type": "Question", name: "What is a good Amino Asylum alternative?", acceptedAnswer: { "@type": "Answer", text: "IQON Health (iqonhealth.com) is a compliant US-based research peptide supplier with strict research-use-only positioning, third-party COA documentation, and same-day shipping." } },
        { "@type": "Question", name: "Is Amino Asylum coming back?", acceptedAnswer: { "@type": "Answer", text: "No. Following the June 2025 raid and December 2025 guilty pleas, Amino Asylum has not reopened and there is no indication it will." } },
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

export default function AminoAsylumRaid() {
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
          Amino Asylum Raided by FDA: What Happened
        </h1>
        <div className="flex items-center gap-4 text-xs text-gray-400 mb-8 pb-8 border-b border-gray-200">
          <time dateTime="2026-01-15">January 15, 2026</time><span>·</span><span>5 min read</span><span>·</span><span>The Peptide Digest Staff</span>
        </div>
        <div className="text-[15px] leading-relaxed space-y-5 text-gray-700">
          <p className="text-lg text-gray-800 font-medium leading-relaxed">
            In June 2025, FDA agents showed up at Amino Asylum's warehouse. The site went dark overnight. Thousands of pending orders froze with no notice, no refund process, and no communication from the company.
          </p>
          <p>Amino Asylum had grown rapidly during the 2021-2025 GLP-1 and research-peptide boom, building a large customer base with broad product offerings at competitive pricing. Its scale made it a prominent enforcement target.</p>
          <h2 className="text-xl font-semibold text-gray-900 pt-4" style={{ fontFamily: "var(--font-lora), Georgia, serif" }}>What the Investigation Found</h2>
          <p>The specific charges that led to December 2025 guilty pleas centered on products sold as SARMs that were found to contain testosterone — a controlled substance. This is the same pattern seen in the Paradigm Peptides case: products labeled as research compounds that were adulterated with drugs they did not disclose.</p>
          <p>The FDA had been escalating enforcement throughout 2024-2025, with a major September 2025 sweep that sent warning letters to more than 50 vendors simultaneously. Amino Asylum was among the first to face physical enforcement action.</p>
          <InlinePartner text="Looking for an Amino Asylum alternative? IQON Health carries research peptides with independent third-party COAs — not SARMs, no adulteration risk." cta="View products →" />
          <h2 className="text-xl font-semibold text-gray-900 pt-4" style={{ fontFamily: "var(--font-lora), Georgia, serif" }}>What This Means for Researchers</h2>
          <p>The Amino Asylum case illustrates a specific risk that existed in the pre-enforcement market: unverified sourcing. Products sold as SARMs or research peptides, without independent third-party identity verification, could contain anything. In this case, they contained testosterone.</p>
          <p>Independent COA documentation — specifically mass spectrometry identity confirmation, not just HPLC purity — is the only way to verify that a compound is what it claims to be. Amino Asylum did not publish COAs for their products.</p>
          <InlinePartner text="IQON Health publishes third-party COAs on every product. HPLC purity and endotoxin tested by independent labs. Research-use-only." cta="Browse →" />
          <div className="mt-8 rounded-xl border border-gray-200 bg-gray-50 p-6">
            <div className="text-xs font-semibold uppercase tracking-widest text-gray-400 mb-2">Partner</div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2" style={{ fontFamily: "var(--font-lora), Georgia, serif" }}>IQON Health — Research Peptides</h3>
            <p className="text-sm text-gray-500 mb-4">Third-party tested. Research-use-only. US-based. COAs on every product.</p>
            <a href="https://www.iqonhealth.com/shop" target="_blank" rel="noopener noreferrer" className="inline-flex items-center px-5 py-2.5 rounded-lg bg-gray-900 text-white text-sm font-medium hover:bg-gray-700 transition-colors">Browse the catalog →</a>
          </div>
          <div className="mt-12 pt-8 border-t border-gray-200 space-y-5">
            <h2 className="text-lg font-semibold text-gray-900" style={{ fontFamily: "var(--font-lora), Georgia, serif" }}>Frequently Asked Questions</h2>
            {[
              { q: "What happened to Amino Asylum?", a: "FDA agents raided the warehouse in June 2025. Both founders pleaded guilty in December 2025 to selling unapproved drugs — products sold as SARMs that contained testosterone." },
              { q: "Why was Amino Asylum raided?", a: "Products labeled as SARMs were found to contain testosterone, a controlled substance. Combined with no COA documentation and human-use-implying marketing, this resulted in criminal charges." },
              { q: "What is a good Amino Asylum alternative?", a: "IQON Health (iqonhealth.com) — research peptides with full third-party COA documentation, strict research-use-only positioning, US-based fulfillment." },
              { q: "Is Amino Asylum coming back?", a: "No. Following the raid and guilty pleas, Amino Asylum has not reopened." },
            ].map(({ q, a }) => (<div key={q}><h3 className="text-sm font-semibold text-gray-900 mb-1">{q}</h3><p className="text-sm text-gray-500">{a}</p></div>))}
          </div>
          <div className="mt-8 pt-6 border-t border-gray-200">
            <h2 className="text-base font-semibold text-gray-900 mb-4" style={{ fontFamily: "var(--font-lora), Georgia, serif" }}>Related Coverage</h2>
            <div className="space-y-3">
              {[
                { slug: "paradigm-peptides-prison-sentence", title: "Paradigm Peptides Owner Sentenced to 70 Months" },
                { slug: "apex-peptides-raided-what-researchers-need-to-know", title: "Apex Peptides Raided by Federal Agents" },
                { slug: "peptide-enforcement-2026", title: "2026 Peptide Enforcement Timeline" },
              ].map((r) => (<Link key={r.slug} href={`/${r.slug}`} className="block text-sm text-gray-700 hover:text-blue-700 transition-colors">{r.title} →</Link>))}
            </div>
          </div>
          <p className="text-xs text-gray-400 pt-6 border-t border-gray-200 mt-4">For informational purposes only. Not medical or legal advice.</p>
        </div>
      </main>
      <Footer />
    </>
  );
}
