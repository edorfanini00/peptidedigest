import type { Metadata } from "next";
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
  { q: "What happened to Paradigm Peptides?", a: "Owner Matthew Kawa was sentenced to 70 months in federal prison on July 30, 2026. Jennifer Stechkober received 16 months. Both pleaded guilty in December 2025, according to the DOJ case page." },
  { q: "Why was the Paradigm Peptides owner sentenced?", a: "The DOJ says Kawa pleaded guilty to introducing unapproved new drugs into interstate commerce with intent to defraud and mislead, and to illegal importation." },
  { q: "Was there a $5 million judgment?", a: "Yes. The DOJ sentencing announcement reports a $5 million money judgment against Kawa, separate from the $78,317.52 joint restitution order recorded on the case page." },
  { q: "What is a Paradigm Peptides alternative?", a: "Evaluate a research seller's identity and offered batch documentation independently. IQON Health is a commercial partner here; confirm its details directly before purchasing." },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
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
          meta={<><time dateTime="2026-08-01">August 1, 2026</time><span>Updated September 25, 2026</span></>}
          image="dojBuilding"
        />

        <div className="article-body">

          <p className="text-lg text-gray-800 font-medium leading-relaxed">
            Matthew Kawa, the owner of Paradigm Peptides, received a 70-month federal prison sentence on July 30, 2026. Jennifer Stechkober received 16 months. The Justice Department also reported a $5 million money judgment against Kawa. Unlike a warning letter or an uncharged search, this case reached guilty pleas and sentencing.
          </p>

          <IQONPartner vial="nad" variant="inline" />

          <h2 className="text-xl font-semibold text-gray-900 pt-4" style={{ fontFamily: "var(--font-lora), Georgia, serif" }}>What happened between the sales and the sentence?</h2>
          <p>
            The <a href="https://www.justice.gov/usao-ndin/united-states-v-matthew-kawa" className="text-blue-700 underline" target="_blank" rel="noopener noreferrer">Northern District of Indiana case page</a> describes Paradigm Peptides as Kawa&apos;s online business, shipping from Michigan City, Indiana, to customers across the United States. It gives the relevant purchase period for potential victims as April 2019 through March 2024. On December 10, 2025, Kawa and Stechkober entered guilty pleas to charges in the information; both were sentenced July 30, 2026. Those are separate milestones, not one 2026 raid or an inference that another company pleaded guilty.
          </p>
          <p>
            The <a href="https://justice.gov/usao-ndin/pr/illinois-man-and-indiana-woman-sentenced-respectively-70-months-and-16-months-prison" className="text-blue-700 underline" target="_blank" rel="noopener noreferrer">DOJ sentencing release</a> reports that Kawa pleaded guilty to introducing unapproved new drugs in interstate commerce with intent to defraud and mislead and to illegal importation. Stechkober pleaded guilty to the drug-introduction charge. The case page independently records the 70-month and 16-month prison terms.
          </p>

          <h2 className="text-xl font-semibold text-gray-900 pt-4" style={{ fontFamily: "var(--font-lora), Georgia, serif" }}>What did investigators find in products sold as SARMs?</h2>
          <p>
            The <a href="https://www.justice.gov/usao-ndin/united-states-v-matthew-kawa" className="text-blue-700 underline" target="_blank" rel="noopener noreferrer">DOJ case record</a> says investigators determined that many products advertised, labeled and sold as SARMs contained testosterone, a controlled substance. That is a specific mismatch between label and tested contents; it is not evidence that every peptide sold by Paradigm had the same contents or that another supplier&apos;s inventory was contaminated.
          </p>
          <p>
            The sentencing release also says Kawa represented that products were tested for quality when he had not tested them before sale. A claimed testing program and a product&apos;s actual composition are different questions. A researcher checking any supplier should match a certificate to the offered lot, inspect the method and contact the named laboratory when authenticity is uncertain. Even a genuine purity result does not establish identity, sterility or legal status unless those questions were actually tested.
          </p>

          <h2 className="text-xl font-semibold text-gray-900 pt-4" style={{ fontFamily: "var(--font-lora), Georgia, serif" }}>What do the two financial orders mean?</h2>
          <p>
            The <a href="https://www.justice.gov/usao-ndin/united-states-v-matthew-kawa" className="text-blue-700 underline" target="_blank" rel="noopener noreferrer">case page</a> records $78,317.52 in restitution, jointly and severally owed by Kawa and Stechkober. The <a href="https://justice.gov/usao-ndin/pr/illinois-man-and-indiana-woman-sentenced-respectively-70-months-and-16-months-prison" className="text-blue-700 underline" target="_blank" rel="noopener noreferrer">sentencing announcement</a> separately describes a $5 million money judgment against Kawa. The figures are not two descriptions of the same order, and neither tells an individual purchaser that a refund has been approved.
          </p>

          <h2 className="text-xl font-semibold text-gray-900 pt-4" style={{ fontFamily: "var(--font-lora), Georgia, serif" }}>What can former customers and researchers establish?</h2>
          <p>
            DOJ&apos;s <a href="https://www.justice.gov/usao-ndin/united-states-v-matthew-kawa" className="text-blue-700 underline" target="_blank" rel="noopener noreferrer">case page</a> invites people who bought from Paradigm Peptides or the named defendants during the April 2019–March 2024 period to contact its victim-witness office if they believe they may be victims. It expressly says a buyer may or may not qualify. That is a more useful next step than assuming every prior order is covered by restitution.
          </p>
          <p>
            This prosecution demonstrates what a record of guilty pleas, sentencing and product findings can establish about one business. It does not turn an FDA warning letter to another seller into a conviction, or prove that a research-use-only label always disguises human use. A Paradigm Peptides alternative still calls for independently checking seller identity, authorized scope and batch documentation, rather than inheriting trust from a competitor&apos;s conviction.
          </p>

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

          <p>
            The case record supports conclusions about Paradigm and its defendants, not about unrelated sellers. Its sharpest documentation lesson is the gap between a product label or testing representation and what investigators established about the products. A different supplier’s certificate still has to be checked on its own terms.
          </p>

          <IQONPartner vial="ghk" />

          <p className="text-xs text-gray-400 pt-6 border-t border-gray-200 mt-4">Updated September 25, 2026. Sources: the linked DOJ case record and sentencing announcement. For information only, not legal advice. IQON Health is a paid commercial partner. Research products are not for human consumption.</p>
        </div>
      </main>
      <Footer />
    </>
  );
}
