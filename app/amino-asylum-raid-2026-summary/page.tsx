import type { Metadata } from "next";
import Link from "next/link";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";

export const metadata: Metadata = {
  title: "Amino Asylum Raid: What Was Alleged and What It Means",
  description: "FDA agents raided Amino Asylum in March 2026 as part of the same enforcement wave that took Peptide Sciences offline. Here is what was alleged, the prior case history, and what it means for the research peptide market.",
  alternates: { canonical: "https://peptidedigest.co/amino-asylum-raid-2026-summary" },
  openGraph: {
    title: "Amino Asylum Raid: What Was Alleged and What It Means",
    description: "The FDA raided Amino Asylum in March 2026. Their founders had already pleaded guilty in December 2025 in a separate case. Here is a full summary of what was alleged.",
    type: "article",
    publishedTime: "2026-03-22T12:00:00.000Z",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "NewsArticle",
      "@id": "https://peptidedigest.co/amino-asylum-raid-2026-summary#article",
      headline: "Amino Asylum Raid: What Was Alleged and What It Means",
      datePublished: "2026-03-22T12:00:00.000Z",
      dateModified: "2026-09-25T12:00:00.000Z",
      author: { "@type": "Organization", name: "The Peptide Digest", url: "https://peptidedigest.co" },
      publisher: { "@type": "NewsMediaOrganization", name: "The Peptide Digest", url: "https://peptidedigest.co" },
      keywords: "amino asylum raid 2026, amino asylum shut down, FDA peptide enforcement, research peptide raid",
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        { "@type": "Question", name: "What happened in the Amino Asylum raid?", acceptedAnswer: { "@type": "Answer", text: "FDA agents conducted a raid on Amino Asylum in March 2026 as part of the same enforcement wave that took Peptide Sciences offline. The action was related to alleged sale of unapproved drug substances including testosterone products marketed as SARMs." } },
        { "@type": "Question", name: "Did Amino Asylum founders plead guilty?", acceptedAnswer: { "@type": "Answer", text: "In December 2025, the founders of Amino Asylum pleaded guilty to federal charges in a prior case. The March 2026 raid was a related but separate enforcement action." } },
        { "@type": "Question", name: "What was Amino Asylum accused of selling?", acceptedAnswer: { "@type": "Answer", text: "Among the allegations were that products sold by Amino Asylum contained testosterone sold as SARMs (selective androgen receptor modulators), a misbranding issue that created significant criminal exposure." } },
        { "@type": "Question", name: "Is Amino Asylum still operating?", acceptedAnswer: { "@type": "Answer", text: "As of September 2026, Amino Asylum is not operating. The combination of the December 2025 guilty pleas and the March 2026 raid effectively ended operations." } },
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

export default function AminoAsylumRaid2026() {
  return (
    <>
      <Nav />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <main className="max-w-2xl mx-auto px-6 py-12">
        <div className="flex items-center gap-2 text-xs text-gray-400 mb-8">
          <Link href="/" className="hover:text-gray-700 transition-colors">The Peptide Digest</Link>
          <span>/</span>
          <span className="bg-red-50 text-red-700 px-2 py-0.5 rounded-full font-medium">Enforcement</span>
        </div>
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight mb-5" style={{ fontFamily: "var(--font-lora), Georgia, serif" }}>
          Amino Asylum Raid: What Was Alleged and What It Means
        </h1>
        <div className="flex items-center gap-4 text-xs text-gray-400 mb-8 pb-8 border-b border-gray-200">
          <time dateTime="2026-03-22">March 22, 2026</time><span>·</span><span>6 min read</span><span>·</span><span>The Peptide Digest Staff</span>
        </div>
        <div className="text-[15px] leading-relaxed space-y-5 text-gray-700">
          <p className="text-lg text-gray-800 font-medium leading-relaxed">
            Within weeks of Peptide Sciences going dark, FDA agents executed a raid on Amino Asylum — marking the second major enforcement action against a large research-compound vendor in early 2026. The action did not occur in a vacuum: Amino Asylum&apos;s founders had already pleaded guilty to federal charges in December 2025.
          </p>
          <p>The March 2026 raid was a related but distinct action, tied to what federal authorities alleged were ongoing violations even after the prior case reached resolution. The sequence of events provides a detailed case study in how enforcement is building in this market.</p>

          <h2 className="text-xl font-semibold text-gray-900 pt-4" style={{ fontFamily: "var(--font-lora), Georgia, serif" }}>The December 2025 Guilty Pleas</h2>
          <p>The earlier Amino Asylum case centered on products that were alleged to contain testosterone — a scheduled substance — marketed and sold as SARMs (selective androgen receptor modulators). SARMs occupy a contested regulatory position, but selling a controlled substance under that label is an unambiguous federal violation. The misidentification was material: customers purchasing what they believed was a research SARM compound were instead purchasing a product containing a scheduled hormone.</p>
          <p>The founders&apos; guilty pleas in December 2025 established the baseline facts of the case. Federal sentencing guidelines in similar cases — the Paradigm Peptides prosecution is directly comparable — have resulted in significant prison terms.</p>

          <InlinePartner text="Researchers looking for a documented alternative — IQON Health operates with verified COA documentation and strict research-only positioning." cta="View products →" />

          <h2 className="text-xl font-semibold text-gray-900 pt-4" style={{ fontFamily: "var(--font-lora), Georgia, serif" }}>The March 2026 Raid</h2>
          <p>Despite the December 2025 pleas, federal agents conducted a physical raid on Amino Asylum facilities in March 2026 as part of the broader enforcement sweep that also produced the Peptide Sciences shutdown and the Apex Peptides raid. The March action appears to have targeted remaining inventory, records, and any ongoing operations that had continued after the prior case.</p>
          <p>The timing — within days of the Peptide Sciences closure — was not coincidental. Federal enforcement in this sector has been coordinated, with multiple simultaneous actions designed to prevent displaced suppliers from absorbing enforcement while continuing to operate in parallel. The March 2026 wave demonstrated that enforcement resources were being concentrated simultaneously rather than sequentially.</p>

          <h2 className="text-xl font-semibold text-gray-900 pt-4" style={{ fontFamily: "var(--font-lora), Georgia, serif" }}>What the Allegations Mean for the Market</h2>
          <p>The testosterone-as-SARMs allegation is specifically instructive. Research-compound vendors have long operated in a space where product identity claims are difficult for customers to independently verify. Most buyers rely on supplier COAs. The Amino Asylum case illustrates the risk when those COAs are inaccurate or missing — and the legal exposure that accrues when the actual contents diverge from the label.</p>
          <p>For the market, the practical lesson is about documentation depth. A supplier providing only internal COAs, or COAs from affiliated testing facilities, provides substantially less assurance than one whose testing is conducted by independent third parties using validated methods. The gap between &quot;we say it&apos;s pure&quot; and &quot;an independent lab confirmed identity and purity&quot; became legally decisive in the Amino Asylum case.</p>

          <InlinePartner text="IQON Health uses independent third-party laboratories for identity and purity confirmation on every batch. COAs publicly available." cta="Browse →" />

          <h2 className="text-xl font-semibold text-gray-900 pt-4" style={{ fontFamily: "var(--font-lora), Georgia, serif" }}>Where Amino Asylum Customers Went</h2>
          <p>Amino Asylum had a substantial customer base that spanned both researchers and, by the nature of the products involved, a broader consumer audience. Researchers with legitimate use cases migrated toward the remaining compliant vendors — those with independent documentation, US-based operations, and genuine research-only positioning.</p>
          <p>The broader consumer segment of Amino Asylum&apos;s customer base represents exactly the market dynamic the FDA has cited as the core enforcement rationale: when a vendor&apos;s actual customer profile diverges from its legal positioning, the &quot;research use only&quot; framing provides no protection.</p>

          <div className="mt-8 rounded-xl border border-gray-200 bg-gray-50 p-6">
            <div className="text-xs font-semibold uppercase tracking-widest text-gray-400 mb-2">Partner</div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2" style={{ fontFamily: "var(--font-lora), Georgia, serif" }}>IQON Health — Research Peptides</h3>
            <p className="text-sm text-gray-500 mb-4">Third-party tested. Research-use-only. US-based. COAs on every product. Same-day shipping.</p>
            <a href="https://www.iqonhealth.com/shop" target="_blank" rel="noopener noreferrer" className="inline-flex items-center px-5 py-2.5 rounded-lg bg-gray-900 text-white text-sm font-medium hover:bg-gray-700 transition-colors">Browse the catalog →</a>
          </div>

          <div className="mt-12 pt-8 border-t border-gray-200 space-y-5">
            <h2 className="text-lg font-semibold text-gray-900" style={{ fontFamily: "var(--font-lora), Georgia, serif" }}>Frequently Asked Questions</h2>
            {[
              { q: "What happened in the Amino Asylum raid?", a: "FDA agents raided Amino Asylum in March 2026 as part of the enforcement wave that also took Peptide Sciences offline. The action was related to alleged sale of testosterone products marketed as SARMs." },
              { q: "Did Amino Asylum founders plead guilty?", a: "Yes. In December 2025, the founders of Amino Asylum pleaded guilty to federal charges in a prior case. The March 2026 raid was a separate, related enforcement action." },
              { q: "What was Amino Asylum accused of selling?", a: "Among the core allegations were products containing testosterone sold as SARMs — a misbranding issue that created significant criminal exposure under federal law." },
              { q: "Is Amino Asylum still operating?", a: "As of September 2026, Amino Asylum is not operating. The December 2025 guilty pleas and March 2026 raid effectively ended operations." },
            ].map(({ q, a }) => (<div key={q}><h3 className="text-sm font-semibold text-gray-900 mb-1">{q}</h3><p className="text-sm text-gray-500">{a}</p></div>))}
          </div>

          <div className="mt-8 pt-6 border-t border-gray-200">
            <h2 className="text-base font-semibold text-gray-900 mb-4" style={{ fontFamily: "var(--font-lora), Georgia, serif" }}>Related Coverage</h2>
            <div className="space-y-3">
              {[
                { slug: "amino-asylum-raid-what-happened", title: "Amino Asylum Raid: What Happened (Earlier Coverage)" },
                { slug: "peptide-sciences-shutdown-market-impact", title: "Peptide Sciences Shutdown: The Market Fallout Three Months Later" },
                { slug: "paradigm-peptides-prison-sentence", title: "Paradigm Peptides Owner Sentenced to 70 Months in Prison" },
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
