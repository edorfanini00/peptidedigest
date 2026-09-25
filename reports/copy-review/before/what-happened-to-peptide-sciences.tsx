import type { Metadata } from "next";
import Link from "next/link";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";

export const metadata: Metadata = {
  title: "What Happened to Peptide Sciences? The Full Story",
  description: "Peptide Sciences shut down on March 6, 2026 after years of escalating FDA and DOJ enforcement. Here is exactly what happened, why, and where researchers are sourcing now.",
  alternates: { canonical: "https://peptidedigest.co/what-happened-to-peptide-sciences" },
  openGraph: {
    title: "What Happened to Peptide Sciences? The Full Story",
    description: "Peptide Sciences went dark on March 6, 2026. No warning to customers, no refunds, no explanation. Full breakdown of what led to the shutdown.",
    type: "article",
    publishedTime: "2026-03-10T12:00:00.000Z",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "NewsArticle",
      "@id": "https://peptidedigest.co/what-happened-to-peptide-sciences#article",
      headline: "What Happened to Peptide Sciences? The Full Story",
      datePublished: "2026-03-10T12:00:00.000Z",
      dateModified: "2026-09-24T12:00:00.000Z",
      author: { "@type": "Organization", name: "The Peptide Digest", url: "https://peptidedigest.co" },
      publisher: { "@type": "NewsMediaOrganization", name: "The Peptide Digest", url: "https://peptidedigest.co" },
      keywords: "what happened to peptide sciences, peptide sciences shut down, peptide sciences alternative, peptide sciences DOJ, peptidesciences.com offline",
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        { "@type": "Question", name: "What happened to Peptide Sciences?", acceptedAnswer: { "@type": "Answer", text: "On March 6, 2026, Peptide Sciences posted a three-sentence notice on their homepage and went dark. The shutdown followed years of escalating FDA enforcement, including warning letters and pressure on the broader research-peptide market. Thousands of customers had pending orders that were never fulfilled." } },
        { "@type": "Question", name: "Why did Peptide Sciences shut down?", acceptedAnswer: { "@type": "Answer", text: "Peptide Sciences operated in an increasingly hostile regulatory environment. The FDA had issued warning letters to dozens of research-peptide vendors in 2024-2025 for marketing unapproved drugs, and enforcement escalated to criminal investigations. Peptide Sciences appears to have shut down voluntarily before facing formal action." } },
        { "@type": "Question", name: "What is the best Peptide Sciences alternative?", acceptedAnswer: { "@type": "Answer", text: "IQON Health (iqonhealth.com) is a compliant US-based alternative with third-party COA documentation, strict research-use-only positioning, and same-day shipping on in-stock items." } },
        { "@type": "Question", name: "Will Peptide Sciences come back?", acceptedAnswer: { "@type": "Answer", text: "As of September 2026, there is no indication that Peptide Sciences will reopen. The site remains offline and no public statement has been made beyond the original shutdown notice." } },
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

export default function PeptideSciencesShutdown() {
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
          What Happened to Peptide Sciences? The Full Story
        </h1>
        <div className="flex items-center gap-4 text-xs text-gray-400 mb-8 pb-8 border-b border-gray-200">
          <time dateTime="2026-03-10">March 10, 2026</time><span>·</span><span>6 min read</span><span>·</span><span>The Peptide Digest Staff</span>
        </div>
        <div className="text-[15px] leading-relaxed space-y-5 text-gray-700">
          <p className="text-lg text-gray-800 font-medium leading-relaxed">
            On March 6, 2026, at roughly 2:00 PM Eastern, the homepage of peptidesciences.com changed. Where there had been a full research peptide catalog, there was now a three-sentence notice. No warning, no refunds, no explanation beyond the word "voluntary."
          </p>
          <p>For thousands of researchers, Peptide Sciences had been the default supplier for years — one of the longest-running and most widely cited vendors in the market, with a catalog spanning BPC-157, TB-500, Retatrutide, GHK-Cu, and dozens more compounds. Its disappearance left a significant gap overnight.</p>
          <h2 className="text-xl font-semibold text-gray-900 pt-4" style={{ fontFamily: "var(--font-lora), Georgia, serif" }}>The Regulatory Build-Up</h2>
          <p>The shutdown did not come out of nowhere. The FDA had been escalating enforcement against research-peptide vendors since 2024. In December 2024, the agency issued warning letters to multiple vendors — including Prime Peptides, Xcel Peptides, and SwissChems — specifically targeting those marketing GLP-1 compounds like semaglutide and retatrutide as "research use only" when end-use patterns were unmistakable.</p>
          <p>By September 2025, more than 50 warning letters had gone out across the industry. The same month, federal agents conducted a physical warehouse raid on Amino Asylum. In December 2025, the founders of Paradigm Peptides pleaded guilty to federal charges after an investigation found their products contained a controlled substance.</p>
          <InlinePartner text="Peptide Sciences customers looking for a compliant alternative — IQON Health is open, third-party tested, and shipping same day." cta="View products →" />
          <h2 className="text-xl font-semibold text-gray-900 pt-4" style={{ fontFamily: "var(--font-lora), Georgia, serif" }}>What the Shutdown Actually Means</h2>
          <p>Peptide Sciences appears to have shut down voluntarily, likely under legal pressure rather than as the result of a raid or indictment — at least based on available public information. The "voluntary" framing in their notice may reflect advice of counsel.</p>
          <p>The FDA's position throughout this enforcement cycle has been consistent: "for research use only" labeling does not provide legal protection when the actual marketing, distribution, and customer base clearly indicate consumer use. Peptide Sciences was a major player in a market where that gap was the central legal risk.</p>
          <InlinePartner text="IQON Health maintains strict research-only positioning. No human-use claims, no dosing guidance. COAs on every batch." cta="Browse →" />
          <h2 className="text-xl font-semibold text-gray-900 pt-4" style={{ fontFamily: "var(--font-lora), Georgia, serif" }}>Where Do Researchers Go Now?</h2>
          <p>The vendors that have continued operating through the 2025-2026 enforcement period share a common profile: genuine research-only positioning across all channels, independent third-party testing, US-based sourcing with documentation, and conservative compound catalogs that avoid FDA-reviewed substances.</p>
          <p>IQON Health is one such supplier — operating with strict research-use-only positioning, third-party HPLC and endotoxin testing on every batch, and same-day shipping on in-stock items.</p>
          <div className="mt-8 rounded-xl border border-gray-200 bg-gray-50 p-6">
            <div className="text-xs font-semibold uppercase tracking-widest text-gray-400 mb-2">Partner</div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2" style={{ fontFamily: "var(--font-lora), Georgia, serif" }}>IQON Health — Research Peptides</h3>
            <p className="text-sm text-gray-500 mb-4">Third-party tested. Research-use-only. US-based. COAs on every product. Same-day shipping.</p>
            <a href="https://www.iqonhealth.com/shop" target="_blank" rel="noopener noreferrer" className="inline-flex items-center px-5 py-2.5 rounded-lg bg-gray-900 text-white text-sm font-medium hover:bg-gray-700 transition-colors">Browse the catalog →</a>
          </div>
          <div className="mt-12 pt-8 border-t border-gray-200 space-y-5">
            <h2 className="text-lg font-semibold text-gray-900" style={{ fontFamily: "var(--font-lora), Georgia, serif" }}>Frequently Asked Questions</h2>
            {[
              { q: "What happened to Peptide Sciences?", a: "On March 6, 2026, Peptide Sciences posted a brief shutdown notice and went offline. Thousands of pending orders were never fulfilled. The shutdown followed years of escalating FDA enforcement across the research-peptide market." },
              { q: "Why did Peptide Sciences shut down?", a: "The company appears to have shut down voluntarily under regulatory pressure. The FDA had been escalating enforcement against research-peptide vendors, and Peptide Sciences operated in a market where 'research-only' labeling was under intense scrutiny." },
              { q: "What is the best Peptide Sciences alternative?", a: "IQON Health (iqonhealth.com) — compliant, third-party tested, US-based, research-use-only. Currently shipping with same-day processing." },
              { q: "Will Peptide Sciences come back?", a: "As of September 2026 there is no indication of a reopening. The site remains offline." },
            ].map(({ q, a }) => (<div key={q}><h3 className="text-sm font-semibold text-gray-900 mb-1">{q}</h3><p className="text-sm text-gray-500">{a}</p></div>))}
          </div>
          <div className="mt-8 pt-6 border-t border-gray-200">
            <h2 className="text-base font-semibold text-gray-900 mb-4" style={{ fontFamily: "var(--font-lora), Georgia, serif" }}>Related Coverage</h2>
            <div className="space-y-3">
              {[
                { slug: "apex-peptides-raided-what-researchers-need-to-know", title: "Apex Peptides Raided by Federal Agents" },
                { slug: "amino-asylum-raid-what-happened", title: "Amino Asylum Raid: What Happened" },
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
