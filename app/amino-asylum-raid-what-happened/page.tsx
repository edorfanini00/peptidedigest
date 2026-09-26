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
          meta={<><time dateTime="2026-01-15">January 15, 2026</time><span>Updated September 25, 2026</span></>}
          image="padlock"
        />

        <div className="article-body">

          <p className="text-lg text-gray-800 font-medium leading-relaxed">
            The difficult part of the Amino Asylum story is the gap between a repeated warehouse account and an agency record. PeptideExaminer reported a June 2025 raid and storefront shutdown. We have not found a public FDA or DOJ announcement naming Amino Asylum that identifies charges or an outcome. The Paradigm Peptides guilty pleas belong to a different company.
          </p>

          <IQONPartner vial="bac-water" variant="inline" />

          <h2 className="text-xl font-semibold text-gray-900 pt-4" style={{ fontFamily: "var(--font-lora), Georgia, serif" }}>What does the June 2025 account say?</h2>
          <p><a href="https://peptideexaminer.com/vendors/amino-asylum/">PeptideExaminer&apos;s vendor profile</a> attributes a warehouse raid and website shutdown to June 2025, and repeats community reports about frozen orders and warning letters. The profile does not link an Amino Asylum-specific warrant, agency announcement or case docket for those assertions. Its vendor grade and rumors of product contents are assessments and allegations, not findings we can independently verify from the cited record.</p>
          <p>That leaves a narrower, more useful answer than an unqualified &quot;FDA raid&quot;: a named industry publication made the claim, while the primary documentation needed to establish who searched which premises and why has not been identified here. We cannot assign an offense, charge or definitive reason to Amino Asylum on that basis. A missing document in our review is not proof that no government record exists.</p>

          <h2 className="text-xl font-semibold text-gray-900 pt-4" style={{ fontFamily: "var(--font-lora), Georgia, serif" }}>Why do the Paradigm guilty pleas keep appearing in this story?</h2>
          <p>The <a href="https://www.justice.gov/usao-ndin/united-states-v-matthew-kawa">Justice Department&apos;s case page</a> identifies Matthew Kawa&apos;s business as Paradigm Peptides, also called Paradigm R.E. LLC. It records guilty pleas by Kawa and Jennifer Stechkober on December 10, 2025. That page describes investigators&apos; finding of testosterone in products advertised as SARMs. It does not name Amino Asylum as the business in the case.</p>
          <p>The resemblance is categorical, not evidentiary: both names appear in discussions of research-product enforcement, but a finding tied to a particular seller cannot migrate to another seller because their stories circulate together. An earlier version of this article did exactly that; the correction is to keep the documented Paradigm case distinct from the reported Amino Asylum account.</p>

          <h2 className="text-xl font-semibold text-gray-900 pt-4" style={{ fontFamily: "var(--font-lora), Georgia, serif" }}>What can the FDA&apos;s other letters explain?</h2>
          <p><a href="https://www.fda.gov/inspections-compliance-enforcement-and-criminal-investigations/warning-letters/gram-peptides-721806-03312026">FDA&apos;s letter to Gram Peptides</a> explains how an agency may weigh website product claims alongside a &quot;research use only&quot; label when assessing intended use. It names Gram Peptides and specifies the claims the agency reviewed. It does not show that FDA wrote Amino Asylum, much less establish that those allegations caused the reported warehouse action. Regulatory context should not be mistaken for company-specific evidence.</p>

          <h2 className="text-xl font-semibold text-gray-900 pt-4" style={{ fontFamily: "var(--font-lora), Georgia, serif" }}>What if you had an order or need a research alternative?</h2>
          <p>The vendor profile asserts that orders froze, but it cannot document the outcome of any one purchase. Keep the receipt, payment record and seller correspondence. Seek a written status update and check your payment provider&apos;s dispute deadline. Do not rely on a supposed successor&apos;s branding to prove it can fulfill an older order.</p>
          <p>For an Amino Asylum alternative in laboratory work, verify the legal seller and current order terms, then request documentation tied to the actual offered lot. Check how identity and purity were measured rather than treating a lone purity number as a complete composition report. A certificate of analysis does not authorize human use. IQON Health is a commercial partner here, not an independently vetted substitute.</p>
          <p>An agency filing that identifies Amino Asylum, its premises and the action would materially change this account. More repetitions of the same vendor-profile claim would not.</p>

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

          <p>
            Until an agency document names Amino Asylum and identifies an action, the warehouse account remains attributed reporting, not a proven prosecution. A dated public filing would change that assessment; another retelling of the same account would not.
          </p>

          <IQONPartner vial="glutathione" />

          <p className="text-xs text-gray-400 pt-6 border-t border-gray-200 mt-4">Updated September 25, 2026. Sources are linked in the text. For information only, not medical or legal advice. IQON Health is a paid commercial partner. Research products are not for human consumption.</p>
        </div>
      </main>
      <Footer />
    </>
  );
}
