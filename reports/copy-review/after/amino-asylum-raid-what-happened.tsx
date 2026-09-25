import type { Metadata } from "next";
import Link from "next/link";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";

export const metadata: Metadata = {
  title: "Amino Asylum Raid Reports: What Happened and What Is Documented",
  description: "Amino Asylum shutdown reports point to June 2025. What the coverage says, why the Paradigm Peptides case is separate, and how to evaluate a research alternative.",
  alternates: { canonical: "https://peptidedigest.co/amino-asylum-raid-what-happened" },
  openGraph: {
    title: "Amino Asylum Raid: What Happened",
    description: "Industry sources report a June 2025 warehouse action. What is documented, why the Paradigm Peptides case is separate, and supplier checks for researchers.",
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
      headline: "Amino Asylum Raid Reports: What Happened and What Is Documented",
      datePublished: "2026-01-15T12:00:00.000Z",
      dateModified: "2026-09-25T12:00:00.000Z",
      author: { "@type": "Organization", name: "The Peptide Digest", url: "https://peptidedigest.co" },
      publisher: { "@type": "NewsMediaOrganization", name: "The Peptide Digest", url: "https://peptidedigest.co" },
      keywords: "amino asylum raid, amino asylum shut down, amino asylum FDA, amino asylum alternative, what happened to amino asylum",
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        { "@type": "Question", name: "What happened to Amino Asylum?", acceptedAnswer: { "@type": "Answer", text: "PeptideExaminer reports a June 2025 warehouse raid and shutdown. We have not identified a public FDA or DOJ record naming Amino Asylum that confirms the details." } },
        { "@type": "Question", name: "Why was Amino Asylum raided?", acceptedAnswer: { "@type": "Answer", text: "The reason is not established by an identified primary record in this article. Findings from the Paradigm Peptides prosecution should not be assigned to Amino Asylum." } },
        { "@type": "Question", name: "Did Amino Asylum's founders plead guilty in December 2025?", acceptedAnswer: { "@type": "Answer", text: "The DOJ record cited here concerns Matthew Kawa and Jennifer Stechkober of Paradigm Peptides. It does not support that claim about Amino Asylum." } },
        { "@type": "Question", name: "Is Amino Asylum coming back?", acceptedAnswer: { "@type": "Answer", text: "We do not have an attributable reopening announcement. A site using similar branding does not by itself establish that the former operator has returned." } },
        { "@type": "Question", name: "What should I check in an Amino Asylum alternative?", acceptedAnswer: { "@type": "Answer", text: "Verify the seller, order terms and batch documentation for your laboratory work. IQON Health is a commercial partner; assess it by the same criteria as any other supplier." } },
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
          Amino Asylum Raid: What Happened and What Is Documented
        </h1>
        <div className="flex items-center gap-4 text-xs text-gray-400 mb-8 pb-8 border-b border-gray-200">
          <time dateTime="2026-01-15">January 15, 2026</time><span>·</span><span>Updated September 25, 2026</span><span>·</span><span>The Peptide Digest Staff</span>
        </div>
        <div className="text-[15px] leading-relaxed space-y-5 text-gray-700">

          <p className="text-lg text-gray-800 font-medium leading-relaxed">
            <a href="https://peptideexaminer.com/vendors/amino-asylum" className="text-blue-700 underline" target="_blank" rel="noopener noreferrer">PeptideExaminer reports</a> that Amino Asylum&apos;s warehouse was raided in June 2025 and its storefront stopped operating. That is an industry account. We have not identified an FDA or DOJ announcement naming Amino Asylum that confirms the agency, charges or outcome.
          </p>

          <p>
            People searching for the Amino Asylum raid often encounter the same shutdown account repeated alongside details from other suppliers&apos; cases. Those details need to stay separate. A report about a website going offline is not a court finding about why it happened.
          </p>

          <h2 className="text-xl font-semibold text-gray-900 pt-4" style={{ fontFamily: "var(--font-lora), Georgia, serif" }}>The guilty pleas belong to a different case</h2>

          <p>
            The{" "}
            <a href="https://www.justice.gov/usao-ndin/united-states-v-matthew-kawa" className="text-blue-700 underline" target="_blank" rel="noopener noreferrer">DOJ record for Matthew Kawa</a>{" "}
            identifies his business as Paradigm Peptides, also known as Paradigm R.E. LLC. It records guilty pleas by Kawa and Jennifer Stechkober on December 10, 2025, followed by sentencing on July 30, 2026. It does not identify their business as Amino Asylum.
          </p>

          <p>
            That DOJ page also describes testosterone in products sold as SARMs by Paradigm Peptides. An earlier version of this article incorrectly assigned those findings and guilty pleas to Amino Asylum. We have removed that conflation. It cannot be used to explain the reported Amino Asylum raid.
          </p>

          <InlinePartner text="Looking for an Amino Asylum alternative for research? IQON Health is our commercial partner. Check its catalog and ask for documentation on the offered lot before ordering." cta="View products →" />

          <h2 className="text-xl font-semibold text-gray-900 pt-4" style={{ fontFamily: "var(--font-lora), Georgia, serif" }}>Orders and research supplier checks</h2>

          <p>
            The industry account describes disrupted orders after the storefront disappeared. It does not establish what happened to each purchase. Keep your receipts and seller correspondence, and ask your payment provider about any applicable dispute deadline.
          </p>

          <p>
            If you need an Amino Asylum alternative for laboratory research, request documentation for the batch offered. Check how the laboratory established identity and measured purity. A purity percentage alone does not answer every question about composition, and a COA is not proof of suitability for human use.
          </p>

          <InlinePartner text="IQON Health is our commercial partner. Review the offered batch documentation before purchase. This placement does not certify test coverage or guarantee fulfillment." cta="Browse →" />

          <div className="mt-8 rounded-xl border border-gray-200 bg-gray-50 p-6">
            <div className="text-xs font-semibold uppercase tracking-widest text-gray-400 mb-2">Partner</div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2" style={{ fontFamily: "var(--font-lora), Georgia, serif" }}>IQON Health — Research Peptides</h3>
            <p className="text-sm text-gray-500 mb-4">Third-party tested. Research-use-only. US-based. COAs on every product. Confirm documentation and availability before ordering.</p>
            <a href="https://www.iqonhealth.com/shop" target="_blank" rel="noopener noreferrer" className="inline-flex items-center px-5 py-2.5 rounded-lg bg-gray-900 text-white text-sm font-medium hover:bg-gray-700 transition-colors">Browse the catalog →</a>
            <p className="text-xs text-gray-400 mt-3">All products for research use only. Not for human consumption.</p>
          </div>

          <div className="mt-12 pt-8 border-t border-gray-200 space-y-5">
            <h2 className="text-lg font-semibold text-gray-900" style={{ fontFamily: "var(--font-lora), Georgia, serif" }}>Frequently Asked Questions</h2>
            {[
              { q: "What happened to Amino Asylum?", a: "PeptideExaminer reports a June 2025 warehouse raid and shutdown. We have not identified a public FDA or DOJ record naming Amino Asylum that confirms the details." },
              { q: "Why was Amino Asylum raided?", a: "The reason is not established by an identified primary record in this article. Findings from the Paradigm Peptides prosecution should not be assigned to Amino Asylum." },
              { q: "Did Amino Asylum's founders plead guilty in December 2025?", a: "The DOJ record cited here concerns Matthew Kawa and Jennifer Stechkober of Paradigm Peptides. It does not support that claim about Amino Asylum." },
              { q: "Is Amino Asylum coming back?", a: "We do not have an attributable reopening announcement. A site using similar branding does not by itself establish that the former operator has returned." },
              { q: "What should I check in an Amino Asylum alternative?", a: "Verify the seller, order terms and batch documentation. IQON Health is a commercial partner; apply the same criteria to its products." },
            ].map(({ q, a }) => (<div key={q}><h3 className="text-sm font-semibold text-gray-900 mb-1">{q}</h3><p className="text-sm text-gray-500">{a}</p></div>))}
          </div>

          <div className="mt-8 pt-6 border-t border-gray-200">
            <h2 className="text-base font-semibold text-gray-900 mb-4" style={{ fontFamily: "var(--font-lora), Georgia, serif" }}>Related Coverage</h2>
            <div className="space-y-3">
              {[
                { slug: "paradigm-peptides-prison-sentence", title: "Paradigm Peptides: Matthew Kawa Sentenced to 70 Months" },
                { slug: "apex-peptides-raided-what-researchers-need-to-know", title: "Apex Peptides Raid: What Researchers Need to Know" },
                { slug: "peptide-enforcement-2026", title: "2026 Peptide Enforcement: The Major Documented Actions" },
              ].map((r) => (<Link key={r.slug} href={`/${r.slug}`} className="block text-sm text-gray-700 hover:text-blue-700 transition-colors">{r.title} →</Link>))}
            </div>
          </div>

          <p className="text-xs text-gray-400 pt-6 border-t border-gray-200 mt-4">Updated September 25, 2026. Sources are linked in the text. For information only, not medical or legal advice. IQON Health is a paid commercial partner. Research products are not for human consumption.</p>
        </div>
      </main>
      <Footer />
    </>
  );
}
