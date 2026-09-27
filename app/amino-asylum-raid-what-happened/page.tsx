import type { Metadata } from "next";
import { articleBreadcrumbSchema } from "@/components/articleBreadcrumbSchema";
import Link from "next/link";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { ArticleHero } from "@/components/ArticleHero";
import { IQONPartner } from "@/components/IQONPartner";

export const metadata: Metadata = {
  title: "Amino Asylum Raid Reports: What Happened and What Is Documented",
  description: "PeptideExaminer reports a June 2025 Amino Asylum raid and shutdown. What its account says, why Paradigm is separate, and what record could confirm the action.",
  alternates: { canonical: "https://peptidedigest.co/amino-asylum-raid-what-happened" },
  openGraph: {
    title: "Amino Asylum Raid: What Happened",
    description: "PeptideExaminer reports a June 2025 warehouse action; no agency case document confirms it here. The Paradigm Peptides case is separate.",
    type: "article",
    publishedTime: "2026-01-15T12:00:00.000Z",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    articleBreadcrumbSchema("Industry", "https://peptidedigest.co/amino-asylum-raid-what-happened"),
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
        { "@type": "Question", name: "Is an Amino Asylum alternative connected to the reported action?", acceptedAnswer: { "@type": "Answer", text: "The cited account does not establish that another seller succeeded Amino Asylum or was involved in the reported action. IQON Labs appears in commercial placements on this page, not as an independently certified replacement." } },
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
          dek={"PeptideExaminer reports a June 2025 Amino Asylum raid and shutdown. What its account says, why Paradigm is separate, and what record could confirm the action."}
          meta={<><time dateTime="2026-01-15">January 15, 2026</time><span>Updated September 26, 2026</span></>}
          image="padlock"
        />

        <div className="article-body">

          <p className="text-lg text-gray-800 font-medium leading-relaxed">PeptideExaminer reported a June 2025 raid and shutdown at Amino Asylum, but the public account has no named agency, warrant or case number. If you are looking for an Amino Asylum FDA action, the answer is not a confirmed prosecution. The guilty pleas often attached to this story were entered by people at Paradigm Peptides, a different business.</p>

          <IQONPartner vial="bac-water" variant="inline" />

          <h2 className="text-xl font-semibold text-gray-900 pt-4" style={{ fontFamily: "var(--font-lora), Georgia, serif" }}>What does the June 2025 account say?</h2>
          <p>PeptideExaminer described a warehouse raid, an offline storefront and customer reports of stalled orders. It also repeated claims about warning letters and product contents without linking an Amino Asylum-specific government document. Those reports make the site&apos;s account worth examining, but do not identify who searched the warehouse or what happened afterward. (<a href="https://peptideexaminer.com/vendors/amino-asylum">PeptideExaminer</a>)</p>
          <p>The industry account does not identify an agency, warrant or case number. Without one, its warehouse description cannot establish the legal basis or outcome of the reported action.</p>

          <h2 className="text-xl font-semibold text-gray-900 pt-4" style={{ fontFamily: "var(--font-lora), Georgia, serif" }}>Why do the Paradigm guilty pleas keep appearing in this story?</h2>
          <p>The December 2025 pleas belonged to Matthew Kawa and Jennifer Stechkober in the Paradigm Peptides case. The Justice Department identified Paradigm R.E. LLC as Kawa&apos;s business and described products advertised as SARMs that investigators found contained testosterone. It did not identify Amino Asylum as that defendant. (<a href="https://www.justice.gov/usao-ndin/united-states-v-matthew-kawa">DOJ</a>)</p>
          <p>The Paradigm <a href="https://www.justice.gov/usao-ndin/united-states-v-matthew-kawa">DOJ case page</a> also describes a victim-witness process specific to purchases in that case. It names no Amino Asylum defendant.</p>

          <h2 className="text-xl font-semibold text-gray-900 pt-4" style={{ fontFamily: "var(--font-lora), Georgia, serif" }}>What would establish an Amino Asylum agency action?</h2>
          <p>A warning letter names its recipient, reviewed site and alleged violations. For contrast, FDA&apos;s <a href="https://www.fda.gov/inspections-compliance-enforcement-and-criminal-investigations/warning-letters/gram-peptides-721806-03312026">March 2026 letter to Gram Peptides</a> identifies Gram and describes website claims despite research-only wording; it says nothing about Amino Asylum. A warrant, agency statement or case filing naming Amino Asylum would be needed to pin down the reported warehouse action&apos;s authority and outcome.</p>

          <h2 className="text-xl font-semibold text-gray-900 pt-4" style={{ fontFamily: "var(--font-lora), Georgia, serif" }}>What remains unconfirmed about Amino Asylum?</h2>
          <p>The vendor account does not establish a reopening or identify who now operates any similarly branded storefront.</p>
          <p>An Amino Asylum alternative is not part of the reported agency action simply because it offers research materials. Our <Link href="/compliant-research-peptide-supplier" className="text-blue-700 underline">separate research-supplier guide</Link> addresses documentation; IQON Labs advertises here and is not certified as a replacement by this reporting.</p>
          <p>The account remains an industry report, not a documented federal case against Amino Asylum.</p>

          <div className="mt-12 pt-8 border-t border-gray-200 space-y-5">
            <h2 className="text-lg font-semibold text-gray-900" style={{ fontFamily: "var(--font-lora), Georgia, serif" }}>Frequently Asked Questions</h2>
            {(jsonLd["@graph"][2] as { mainEntity: { name: string; acceptedAnswer: { text: string } }[] }).mainEntity.map(({ name, acceptedAnswer }) => (<div key={name}><h3 className="text-sm font-semibold text-gray-900 mb-1">{name}</h3><p className="text-sm text-gray-500">{acceptedAnswer.text}</p></div>))}
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

          <p>The next meaningful update would identify the agency and premises in a record about Amino Asylum itself. Until then, the reported warehouse action remains separate from the documented Paradigm prosecution.</p>

          <IQONPartner vial="glutathione" />

          <p className="text-xs text-gray-400 pt-6 border-t border-gray-200 mt-4">Updated September 26, 2026. Sources are linked in the text. For information only, not medical or legal advice. IQON Labs appears in commercial placements on this page. Research products are not for human consumption.</p>
        </div>
      </main>
      <Footer />
    </>
  );
}
