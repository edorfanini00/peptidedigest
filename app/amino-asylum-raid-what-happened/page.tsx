import type { Metadata } from "next";
import Link from "next/link";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { ArticleHero } from "@/components/ArticleHero";
import { IQONPartner } from "@/components/IQONPartner";

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


export default function AminoAsylumRaid() {
  return (
    <>
      <Nav />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <main className="article-shell">
        <ArticleHero
          category="Industry"
          title={<>Amino Asylum Raid: What Happened and What Is Documented</>}
          dek={"Amino Asylum shutdown reports point to June 2025. What the coverage says, why the Paradigm Peptides case is separate, and how to evaluate a research alternative."}
          meta={<><time dateTime="2026-01-15">January 15, 2026</time><span>Updated September 25, 2026</span></>}
          image="padlock"
        />

        <div className="article-body">

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

          <IQONPartner vial="bac-water" variant="inline" />

          <h2 className="text-xl font-semibold text-gray-900 pt-4" style={{ fontFamily: "var(--font-lora), Georgia, serif" }}>Orders and research supplier checks</h2>

          <p>
            The industry account describes disrupted orders after the storefront disappeared. It does not establish what happened to each purchase. Keep your receipts and seller correspondence, and ask your payment provider about any applicable dispute deadline.
          </p>

          <p>
            If you need an Amino Asylum alternative for laboratory research, request documentation for the batch offered. Check how the laboratory established identity and measured purity. A purity percentage alone does not answer every question about composition, and a COA is not proof of suitability for human use.
          </p>

          <IQONPartner vial="nad" variant="inline" />

          <IQONPartner vial="glutathione" />

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
