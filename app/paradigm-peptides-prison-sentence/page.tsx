import type { Metadata } from "next";
import { articleBreadcrumbSchema } from "@/components/articleBreadcrumbSchema";
import Link from "next/link";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { ArticleHero } from "@/components/ArticleHero";
import { IQONPartner } from "@/components/IQONPartner";

export const metadata: Metadata = {
  title: "Paradigm Peptides Sentence: Matthew Kawa Receives 70 Months",
  description: "The DOJ records Matthew Kawa's July 30, 2026 sentence of 70 months. The Paradigm Peptides case, the $5 million judgment and research supplier documentation checks.",
  alternates: { canonical: "https://peptidedigest.co/paradigm-peptides-prison-sentence" },
  openGraph: {
    title: "Paradigm Peptides: Matthew Kawa Sentenced to 70 Months",
    description: "Matthew Kawa sentenced July 30, 2026. 70 months, $5M judgment, products sold as SARMs contained testosterone. The DOJ-documented facts of the Paradigm Peptides case.",
    type: "article",
    publishedTime: "2026-08-01T12:00:00.000Z",
  },
};

const faqs = [
  { q: "What happened to Paradigm Peptides?", a: "Owner Matthew Kawa was sentenced to 70 months in federal prison on July 30, 2026. Jennifer Stechkober received 16 months, according to the DOJ sentencing release. Both had pleaded guilty in December 2025." },
  { q: "Why was the Paradigm Peptides owner sentenced?", a: "The DOJ says Kawa pleaded guilty to introducing unapproved new drugs into interstate commerce with intent to defraud and mislead, and to illegal importation." },
  { q: "Was there a $5 million judgment?", a: "Yes. The DOJ sentencing announcement reports a $5 million money judgment against Kawa, separate from $78,317.52 in restitution ordered for both defendants." },
  { q: "What is a Paradigm Peptides alternative?", a: "Evaluate a research seller's identity and offered batch documentation independently. IQON Labs is a commercial partner here; confirm its details directly before purchasing." },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    articleBreadcrumbSchema("Criminal", "https://peptidedigest.co/paradigm-peptides-prison-sentence"),
    {
      "@type": "NewsArticle",
      "@id": "https://peptidedigest.co/paradigm-peptides-prison-sentence#article",
      headline: "Paradigm Peptides Sentence: Matthew Kawa Receives 70 Months",
      datePublished: "2026-08-01T12:00:00.000Z",
      dateModified: "2026-09-26T20:29:10.000Z",
      author: { "@type": "Organization", name: "The Peptide Digest", url: "https://peptidedigest.co" },
      publisher: { "@type": "NewsMediaOrganization", name: "The Peptide Digest", url: "https://peptidedigest.co" },
      keywords: "paradigm peptides shut down, paradigm peptides prison, Matthew Kawa sentenced, paradigm peptides alternative, what happened to paradigm peptides",
      citation: ["https://www.justice.gov/usao-ndin/united-states-v-matthew-kawa", "https://justice.gov/usao-ndin/pr/illinois-man-and-indiana-woman-sentenced-respectively-70-months-and-16-months-prison"],
    },
    { "@type": "FAQPage", mainEntity: faqs.map(({ q, a }) => ({ "@type": "Question", name: q, acceptedAnswer: { "@type": "Answer", text: a } })) },
  ],
};

export default function ParadigmPeptidesSentence() {
  return (
    <>
      <Nav />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <main className="article-shell">
        <ArticleHero
          category="Criminal"
          title={<>Paradigm Peptides: Matthew Kawa Sentenced to 70 Months</>}
          dek={"The DOJ records Matthew Kawa's July 30, 2026 sentence of 70 months. The Paradigm Peptides case, the $5 million judgment and research supplier documentation checks."}
          meta={<><time dateTime="2026-08-01">August 1, 2026</time><span>Updated September 26, 2026</span></>}
          image="dojBuilding"
        />

        <div className="article-body">

          <p className="text-lg text-gray-800 font-medium leading-relaxed">Paradigm Peptides owner Matthew Kawa was sentenced to 70 months in federal prison on July 30, 2026; Jennifer Stechkober received 16 months. The Justice Department said products sold as SARMs contained testosterone and that Kawa claimed quality testing he had not performed before sale. This is a completed criminal case against named defendants, not a rumor about a supplier raid.</p>

          <IQONPartner vial="nad" variant="inline" />

          <h2 className="text-xl font-semibold text-gray-900 pt-4" style={{ fontFamily: "var(--font-lora), Georgia, serif" }}>What happened between the sales and the sentence?</h2>
          <p>From Michigan City, Indiana, Kawa&apos;s online business shipped products across the United States. The DOJ case page identifies April 2019 through March 2024 as the relevant purchase period for people considering its victim-witness process. Kawa and Stechkober pleaded guilty on December 10, 2025; sentencing followed in July 2026. (<a href="https://www.justice.gov/usao-ndin/united-states-v-matthew-kawa" className="text-blue-700 underline" target="_blank" rel="noopener noreferrer">DOJ</a>)</p>
          <p>Kawa pleaded guilty to introducing unapproved new drugs into interstate commerce with intent to defraud and mislead and to illegal importation. Stechkober pleaded guilty to the drug-introduction charge. Their prison terms were 70 months and 16 months respectively. (<a href="https://justice.gov/usao-ndin/pr/illinois-man-and-indiana-woman-sentenced-respectively-70-months-and-16-months-prison" className="text-blue-700 underline" target="_blank" rel="noopener noreferrer">DOJ</a>)</p>

          <h2 className="text-xl font-semibold text-gray-900 pt-4" style={{ fontFamily: "var(--font-lora), Georgia, serif" }}>What did investigators find in products sold as SARMs?</h2>
          <p>The mismatch at the center of the product findings was specific: investigators found testosterone, a controlled substance, in many items marketed and labeled as SARMs. That finding concerns the investigated products. It is not a test of every peptide Paradigm sold, much less of inventory at unrelated sellers. (<a href="https://www.justice.gov/usao-ndin/united-states-v-matthew-kawa" className="text-blue-700 underline" target="_blank" rel="noopener noreferrer">DOJ</a>)</p>
          <p>The <a href="https://justice.gov/usao-ndin/pr/illinois-man-and-indiana-woman-sentenced-respectively-70-months-and-16-months-prison" className="text-blue-700 underline" target="_blank" rel="noopener noreferrer">DOJ sentencing release</a> says Kawa told buyers his products had been quality-tested when they had not been tested before sale. A label can misstate what is inside, and a testing claim can misstate what was checked. For laboratory purchases, a report tied to the offered lot and independently traceable to its issuing lab carries more information than an unsupported testing badge.</p>

          <h2 className="text-xl font-semibold text-gray-900 pt-4" style={{ fontFamily: "var(--font-lora), Georgia, serif" }}>What do the two financial orders mean?</h2>
          <p>The sentencing announcement lists $78,317.52 in restitution ordered for both defendants and a separate $5 million money judgment against Kawa. Neither figure guarantees that a particular customer will receive a refund. The terms serve different purposes and should not be added up as a promised pool for buyers. (<a href="https://justice.gov/usao-ndin/pr/illinois-man-and-indiana-woman-sentenced-respectively-70-months-and-16-months-prison" className="text-blue-700 underline" target="_blank" rel="noopener noreferrer">DOJ</a>)</p>

          <h2 className="text-xl font-semibold text-gray-900 pt-4" style={{ fontFamily: "var(--font-lora), Georgia, serif" }}>What can former customers and researchers establish?</h2>
          <p>DOJ invites people who purchased from Paradigm Peptides or the named defendants during April 2019–March 2024 to contact its victim-witness office if they think they may qualify. The case page cautions that a purchaser may or may not be a victim under the process. Keep transaction records before making that inquiry. (<a href="https://www.justice.gov/usao-ndin/united-states-v-matthew-kawa" className="text-blue-700 underline" target="_blank" rel="noopener noreferrer">DOJ</a>)</p>
          <p>If you are comparing a Paradigm Peptides alternative for research, check that new seller&apos;s identity, current terms and lot-specific documentation. Paradigm&apos;s conviction tells you what happened in its case; it cannot certify another company&apos;s catalog. Research products are not for human consumption.</p>

          <div className="mt-12 pt-8 border-t border-gray-200 space-y-5">
            <h2 className="text-lg font-semibold text-gray-900" style={{ fontFamily: "var(--font-lora), Georgia, serif" }}>Frequently Asked Questions</h2>
            {faqs.map(({ q, a }) => (<div key={q}><h3 className="text-sm font-semibold text-gray-900 mb-1">{q}</h3><p className="text-sm text-gray-500">{a}</p></div>))}
          </div>

          <div className="mt-8 pt-6 border-t border-gray-200">
            <h2 className="text-base font-semibold text-gray-900 mb-4" style={{ fontFamily: "var(--font-lora), Georgia, serif" }}>Related Coverage</h2>
            <div className="space-y-3">
              {[
                { slug: "amino-asylum-raid-what-happened", title: "Amino Asylum Raid Reports: What Is Documented" },
                { slug: "apex-peptides-raided-what-researchers-need-to-know", title: "Apex Peptides Raid: What Researchers Need to Know" },
                { slug: "peptide-enforcement-2026", title: "2026 Peptide Enforcement: The Major Documented Actions" },
              ].map((r) => (<Link key={r.slug} href={`/${r.slug}`} className="block text-sm text-gray-700 hover:text-blue-700 transition-colors">{r.title} →</Link>))}
            </div>
          </div>

          <p>The court outcome settles the defendants&apos; pleas and sentences, but an individual buyer&apos;s eligibility for restitution still depends on the victim-witness process. The DOJ case page, rather than a replacement seller&apos;s offer, is the route for that question.</p>

          <IQONPartner vial="ghk" />

          <p className="text-xs text-gray-400 pt-6 border-t border-gray-200 mt-4">Updated September 26, 2026. Sources: the linked DOJ case record and sentencing announcement. For information only, not legal advice. IQON Labs is a paid commercial partner. Research products are not for human consumption.</p>
        </div>
      </main>
      <Footer />
    </>
  );
}
