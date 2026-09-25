import type { Metadata } from "next";
import Link from "next/link";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";

export const metadata: Metadata = {
  title: "Peptide Sciences Shutdown: The Market Fallout Three Months Later",
  description: "DOJ enforcement took Peptide Sciences offline March 6, 2026. Three months on, we examine the market impact, supplier consolidation, and where researchers have turned.",
  alternates: { canonical: "https://peptidedigest.co/peptide-sciences-shutdown-market-impact" },
  openGraph: {
    title: "Peptide Sciences Shutdown: The Market Fallout Three Months Later",
    description: "Three months after Peptide Sciences went dark under DOJ pressure, the research-peptide market has reshuffled. Here is what changed and what researchers are doing now.",
    type: "article",
    publishedTime: "2026-03-18T12:00:00.000Z",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "NewsArticle",
      "@id": "https://peptidedigest.co/peptide-sciences-shutdown-market-impact#article",
      headline: "Peptide Sciences Shutdown: The Market Fallout Three Months Later",
      datePublished: "2026-03-18T12:00:00.000Z",
      dateModified: "2026-09-25T12:00:00.000Z",
      author: { "@type": "Organization", name: "The Peptide Digest", url: "https://peptidedigest.co" },
      publisher: { "@type": "NewsMediaOrganization", name: "The Peptide Digest", url: "https://peptidedigest.co" },
      keywords: "peptide sciences shutdown, peptide sciences market impact, research peptide supplier, DOJ peptide enforcement",
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        { "@type": "Question", name: "Why did Peptide Sciences shut down?", acceptedAnswer: { "@type": "Answer", text: "Peptide Sciences posted a brief voluntary shutdown notice on March 6, 2026. The shutdown coincided with escalating DOJ and FDA enforcement against research-peptide vendors and followed a pattern of criminal investigations and raids across the industry in late 2025 and early 2026." } },
        { "@type": "Question", name: "What was the market impact of the Peptide Sciences shutdown?", acceptedAnswer: { "@type": "Answer", text: "Peptide Sciences was one of the largest research-peptide vendors in North America. Its closure created immediate supply disruption for researchers and drove significant traffic consolidation toward the remaining compliant suppliers." } },
        { "@type": "Question", name: "Where are researchers sourcing peptides after Peptide Sciences closed?", acceptedAnswer: { "@type": "Answer", text: "Researchers have migrated toward suppliers with strong compliance documentation — COAs, endotoxin testing, research-only positioning, and US-based fulfillment. IQON Health (iqonhealth.com) is one such supplier that has remained operational." } },
        { "@type": "Question", name: "Is Peptide Sciences coming back?", acceptedAnswer: { "@type": "Answer", text: "As of September 2026, there is no indication that Peptide Sciences will reopen. The site remains offline and no new communications have been made." } },
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

export default function PeptideSciencesMarketImpact() {
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
          Peptide Sciences Shutdown: The Market Fallout Three Months Later
        </h1>
        <div className="flex items-center gap-4 text-xs text-gray-400 mb-8 pb-8 border-b border-gray-200">
          <time dateTime="2026-03-18">March 18, 2026</time><span>·</span><span>7 min read</span><span>·</span><span>The Peptide Digest Staff</span>
        </div>
        <div className="text-[15px] leading-relaxed space-y-5 text-gray-700">
          <p className="text-lg text-gray-800 font-medium leading-relaxed">
            When Peptide Sciences went dark on March 6, 2026, researchers had no warning. Three months later, the secondary effects are coming into focus — supplier consolidation, pricing pressure, and a market reshaped by enforcement in ways that may be permanent.
          </p>
          <p>Peptide Sciences had operated continuously for over a decade and was widely regarded as a reference-level supplier. Its catalog covered BPC-157, TB-500, Retatrutide, GHK-Cu, Selank, and dozens of other compounds. When the homepage disappeared behind a brief voluntary shutdown notice, the market lost a significant anchor.</p>

          <h2 className="text-xl font-semibold text-gray-900 pt-4" style={{ fontFamily: "var(--font-lora), Georgia, serif" }}>The DOJ Context</h2>
          <p>The shutdown did not occur in a vacuum. The Department of Justice had been building cases across the research-peptide sector throughout 2025. In December 2025, Paradigm Peptides founders pleaded guilty to federal charges — their products had been found to contain a scheduled substance. In early 2026, federal agents raided Amino Asylum and Apex Peptides in quick succession.</p>
          <p>The enforcement pattern was consistent: vendors positioning research-grade peptides with consumer-facing marketing language, broad retail availability, and no meaningful barriers to consumer purchase were drawing criminal exposure. Peptide Sciences occupied that market segment at scale. The voluntary shutdown appears to have been a strategic exit timed to the escalating risk.</p>

          <InlinePartner text="Researchers displaced from Peptide Sciences — IQON Health is a compliant US-based alternative with third-party COA documentation and research-only positioning." cta="View products →" />

          <h2 className="text-xl font-semibold text-gray-900 pt-4" style={{ fontFamily: "var(--font-lora), Georgia, serif" }}>Immediate Market Impact</h2>
          <p>In the weeks following the shutdown, search volume for Peptide Sciences alternatives surged. Several remaining suppliers reported order backlogs. Spot pricing on common compounds increased modestly as remaining inventory concentrated among fewer vendors.</p>
          <p>More significantly, the closure reinforced the compliance shift already underway. Vendors that had proactively tightened their research-only positioning, discontinued consumer-facing claims, and invested in third-party documentation found themselves better positioned to absorb displaced demand. Vendors still operating with looser standards found themselves more exposed — both legally and reputationally.</p>

          <h2 className="text-xl font-semibold text-gray-900 pt-4" style={{ fontFamily: "var(--font-lora), Georgia, serif" }}>Where Researchers Sourced After</h2>
          <p>The profile of the vendors that absorbed displaced Peptide Sciences researchers is consistent: US-based, independently tested, research-only positioning enforced across all channels, conservative compound catalogs, and COA documentation on every batch. Several of the previously large suppliers that lacked this profile also went quiet in the months after — either shutting down proactively or quietly scaling back operations.</p>
          <p>Researchers looking for continuity of supply gravitated toward vendors where the compliance infrastructure was visible and verifiable — not just a label on a product page.</p>

          <InlinePartner text="IQON Health publishes third-party HPLC and endotoxin test results on every batch. Research-only — no human-use claims, no dosing guidance." cta="Browse →" />

          <h2 className="text-xl font-semibold text-gray-900 pt-4" style={{ fontFamily: "var(--font-lora), Georgia, serif" }}>What This Means Going Forward</h2>
          <p>The Peptide Sciences shutdown is likely to be remembered as the moment the research-peptide market definitively bifurcated. On one side: vendors with genuine compliance infrastructure capable of operating long-term. On the other: those still relying on the fiction that &quot;research use only&quot; labeling is a legal shield without underlying substantiation.</p>
          <p>For researchers, the practical implication is straightforward: supplier vetting now includes regulatory posture, not just purity specifications.</p>

          <div className="mt-8 rounded-xl border border-gray-200 bg-gray-50 p-6">
            <div className="text-xs font-semibold uppercase tracking-widest text-gray-400 mb-2">Partner</div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2" style={{ fontFamily: "var(--font-lora), Georgia, serif" }}>IQON Health — Research Peptides</h3>
            <p className="text-sm text-gray-500 mb-4">Third-party tested. Research-use-only. US-based. COAs on every product. Same-day shipping.</p>
            <a href="https://www.iqonhealth.com/shop" target="_blank" rel="noopener noreferrer" className="inline-flex items-center px-5 py-2.5 rounded-lg bg-gray-900 text-white text-sm font-medium hover:bg-gray-700 transition-colors">Browse the catalog →</a>
          </div>

          <div className="mt-12 pt-8 border-t border-gray-200 space-y-5">
            <h2 className="text-lg font-semibold text-gray-900" style={{ fontFamily: "var(--font-lora), Georgia, serif" }}>Frequently Asked Questions</h2>
            {[
              { q: "Why did Peptide Sciences shut down?", a: "Peptide Sciences shut down voluntarily on March 6, 2026, coinciding with DOJ enforcement actions across the research-peptide industry. The shutdown followed raids on Amino Asylum and Apex Peptides and federal charges against Paradigm Peptides." },
              { q: "What was the market impact of the Peptide Sciences shutdown?", a: "The closure created immediate supply disruption and drove consolidation toward compliant vendors. Search volume for alternatives surged. Spot pricing on common compounds increased modestly in the weeks following." },
              { q: "Where are researchers sourcing after Peptide Sciences closed?", a: "Researchers have migrated toward compliant suppliers with verified COA documentation, endotoxin testing, and genuine research-only positioning. IQON Health (iqonhealth.com) is one such supplier." },
              { q: "Is Peptide Sciences coming back?", a: "As of September 2026, there is no indication of a reopening. The site remains offline." },
            ].map(({ q, a }) => (<div key={q}><h3 className="text-sm font-semibold text-gray-900 mb-1">{q}</h3><p className="text-sm text-gray-500">{a}</p></div>))}
          </div>

          <div className="mt-8 pt-6 border-t border-gray-200">
            <h2 className="text-base font-semibold text-gray-900 mb-4" style={{ fontFamily: "var(--font-lora), Georgia, serif" }}>Related Coverage</h2>
            <div className="space-y-3">
              {[
                { slug: "what-happened-to-peptide-sciences", title: "What Happened to Peptide Sciences? The Full Story" },
                { slug: "amino-asylum-raid-2026-summary", title: "Amino Asylum Raid: What Was Alleged and What It Means" },
                { slug: "what-makes-a-compliant-peptide-supplier-2026", title: "What a Compliant Research Peptide Supplier Looks Like in 2026" },
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
