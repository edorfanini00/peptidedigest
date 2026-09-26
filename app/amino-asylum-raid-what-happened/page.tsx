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
      dateModified: "2026-09-26T20:29:10.000Z",
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
          meta={<><time dateTime="2026-01-15">January 15, 2026</time><span>Updated September 26, 2026</span></>}
          image="padlock"
        />

        <div className="article-body">

          <p className="text-lg text-gray-800 font-medium leading-relaxed">An industry site reported a June 2025 raid and shutdown at Amino Asylum, but the public account has no named agency, warrant or case number. If you are looking for an Amino Asylum FDA action, the answer is not a confirmed prosecution. The guilty pleas often attached to this story were entered by people at Paradigm Peptides, a different business.</p>

          <IQONPartner vial="bac-water" variant="inline" />

          <h2 className="text-xl font-semibold text-gray-900 pt-4" style={{ fontFamily: "var(--font-lora), Georgia, serif" }}>What does the June 2025 account say?</h2>
          <p>PeptideExaminer described a warehouse raid, an offline storefront and customer reports of stalled orders. It also repeated claims about warning letters and product contents without linking an Amino Asylum-specific government document. Those reports make the site&apos;s account worth examining, but do not identify who searched the warehouse or what happened afterward. (<a href="https://peptideexaminer.com/vendors/amino-asylum/">PeptideExaminer</a>)</p>
          <p>The distinction matters to anyone waiting for an order: a reported closure is not a record of which packages shipped, which payments were reversed or whether a seller later resumed service. The vendor profile supplies none of those transaction-level answers.</p>

          <h2 className="text-xl font-semibold text-gray-900 pt-4" style={{ fontFamily: "var(--font-lora), Georgia, serif" }}>Why do the Paradigm guilty pleas keep appearing in this story?</h2>
          <p>The December 2025 pleas belonged to Matthew Kawa and Jennifer Stechkober in the Paradigm Peptides case. The Justice Department identified Paradigm R.E. LLC as Kawa&apos;s business and described products advertised as SARMs that investigators found contained testosterone. It did not identify Amino Asylum as that defendant. (<a href="https://www.justice.gov/usao-ndin/united-states-v-matthew-kawa">DOJ</a>)</p>
          <p>Paradigm&apos;s later prison sentences also cannot be transferred to Amino Asylum. The two company names may appear in the same searches for research-product enforcement, but the criminal case names its own defendants and products.</p>

          <h2 className="text-xl font-semibold text-gray-900 pt-4" style={{ fontFamily: "var(--font-lora), Georgia, serif" }}>What can the FDA&apos;s other letters explain?</h2>
          <p>FDA&apos;s March 2026 warning to Gram Peptides shows a different regulatory route: the agency cited that seller&apos;s website claims despite research-only wording. Gram is the named recipient. The letter offers no evidence of an FDA letter, let alone a warehouse search, directed at Amino Asylum. (<a href="https://www.fda.gov/inspections-compliance-enforcement-and-criminal-investigations/warning-letters/gram-peptides-721806-03312026">FDA</a>)</p>

          <h2 className="text-xl font-semibold text-gray-900 pt-4" style={{ fontFamily: "var(--font-lora), Georgia, serif" }}>What if you had an order or need a research alternative?</h2>
          <p>If your Amino Asylum purchase is unresolved, keep the confirmation, payment record and messages, ask the seller for a written status and check your payment provider&apos;s dispute window. Do not assume a site using familiar branding can retrieve an older transaction.</p>
          <p>A laboratory choosing another seller should check its legal identity, current terms and documentation for the particular lot offered. A purity number alone does not cover identity, composition or human-use suitability. IQON Health advertises here; it has not been certified as a replacement by this reporting.</p>
          <p>A warrant, charging document or agency statement naming Amino Asylum would answer the question the vendor account cannot: which authority took what action, at which site, and when.</p>

          <div className="mt-12 pt-8 border-t border-gray-200 space-y-5">
            <h2 className="text-lg font-semibold text-gray-900" style={{ fontFamily: "var(--font-lora), Georgia, serif" }}>Frequently Asked Questions</h2>
            {(jsonLd["@graph"][1] as { mainEntity: { name: string; acceptedAnswer: { text: string } }[] }).mainEntity.map(({ name, acceptedAnswer }) => (<div key={name}><h3 className="text-sm font-semibold text-gray-900 mb-1">{name}</h3><p className="text-sm text-gray-500">{acceptedAnswer.text}</p></div>))}
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

          <p>For now, the June warehouse account remains attributed to PeptideExaminer. Paradigm&apos;s court record belongs to Paradigm, and an unresolved order needs an answer from the seller or payment provider rather than another retelling of the raid claim.</p>

          <IQONPartner vial="glutathione" />

          <p className="text-xs text-gray-400 pt-6 border-t border-gray-200 mt-4">Updated September 26, 2026. Sources are linked in the text. For information only, not medical or legal advice. IQON Health is a paid commercial partner. Research products are not for human consumption.</p>
        </div>
      </main>
      <Footer />
    </>
  );
}
