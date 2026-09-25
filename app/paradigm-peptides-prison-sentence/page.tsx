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

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "NewsArticle",
      "@id": "https://peptidedigest.co/paradigm-peptides-prison-sentence#article",
      headline: "Paradigm Peptides Sentence: Matthew Kawa Receives 70 Months",
      datePublished: "2026-08-01T12:00:00.000Z",
      dateModified: "2026-09-25T12:00:00.000Z",
      author: { "@type": "Organization", name: "The Peptide Digest", url: "https://peptidedigest.co" },
      publisher: { "@type": "NewsMediaOrganization", name: "The Peptide Digest", url: "https://peptidedigest.co" },
      keywords: "paradigm peptides shut down, paradigm peptides prison, Matthew Kawa sentenced, paradigm peptides alternative, what happened to paradigm peptides",
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        { "@type": "Question", name: "What happened to Paradigm Peptides?", acceptedAnswer: { "@type": "Answer", text: "Its owner, Matthew Kawa, received 70 months in federal prison on July 30, 2026. Jennifer Stechkober received 16 months, according to the DOJ case record. Both pleaded guilty in December 2025." } },
        { "@type": "Question", name: "Why was the Paradigm Peptides owner sentenced?", acceptedAnswer: { "@type": "Answer", text: "The DOJ says Kawa pleaded guilty to introducing unapproved new drugs into interstate commerce with intent to defraud and mislead, and to illegal importation. The government described false product and testing claims." } },
        { "@type": "Question", name: "Was there a $5 million judgment?", acceptedAnswer: { "@type": "Answer", text: "Yes. The DOJ sentencing announcement reports a $5 million money judgment against Kawa, separate from the restitution order." } },
        { "@type": "Question", name: "What is a good Paradigm Peptides alternative?", acceptedAnswer: { "@type": "Answer", text: "Verify the seller and the documentation for the offered batch. IQON Health is a commercial partner of this publication, not a supplier independently certified by this article." } },
      ],
    },
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
            Matthew Kawa, owner of Paradigm Peptides, was sentenced to 70 months in federal prison on July 30, 2026. His sister and employee, Jennifer Stechkober, received 16 months. The dates and prison terms appear in the{" "}
            <a href="https://www.justice.gov/usao-ndin/united-states-v-matthew-kawa" className="text-blue-700 underline" target="_blank" rel="noopener noreferrer">DOJ case record</a>.
          </p>

          <p>
            The{" "}
            <a href="https://justice.gov/usao-ndin/pr/illinois-man-and-indiana-woman-sentenced-respectively-70-months-and-16-months-prison" className="text-blue-700 underline" target="_blank" rel="noopener noreferrer">DOJ sentencing announcement</a>{" "}
            also reports a $5 million money judgment against Kawa. Both defendants were ordered to pay restitution. These are documented outcomes of this prosecution, not evidence about other peptide sellers.
          </p>

          <h2 className="text-xl font-semibold text-gray-900 pt-4" style={{ fontFamily: "var(--font-lora), Georgia, serif" }}>What the defendants pleaded guilty to</h2>

          <p>
            According to the DOJ, both defendants pleaded guilty to introducing unapproved new drugs into interstate commerce with intent to defraud and mislead. Kawa also pleaded guilty to illegally importing merchandise. The government said the company imported products while falsely claiming domestic manufacture and testing.
          </p>

          <p>
            The DOJ says investigators found that many products labeled as SARMs contained testosterone instead. Its case page identifies testosterone as a controlled substance. These findings concern Paradigm Peptides products; they should not be generalized to another supplier without evidence.
          </p>

          <IQONPartner vial="nad" variant="inline" />

          <h2 className="text-xl font-semibold text-gray-900 pt-4" style={{ fontFamily: "var(--font-lora), Georgia, serif" }}>What the case says about testing claims</h2>

          <p>
            The sentencing announcement says Kawa did not test products for quality before selling them, despite telling customers they were tested. That documented claim is serious enough on its own. The linked sources do not establish whether certificates of analysis were forged; we have removed that specific claim from an earlier version of this article.
          </p>

          <p>
            For a research purchase, ask for the report matching the offered lot. Check the sample description, laboratory identity and analytical methods. If a report cannot be authenticated, request confirmation from the issuing laboratory directly. Read the test scope: purity, identity and endotoxin results answer different questions.
          </p>

          <IQONPartner vial="glutathione" variant="inline" />

          <h2 className="text-xl font-semibold text-gray-900 pt-4" style={{ fontFamily: "var(--font-lora), Georgia, serif" }}>What the sentence does and does not show</h2>

          <p>
            The case record lists guilty pleas on December 10, 2025, and sentencing on July 30, 2026. The prosecution concerned sales during an earlier operating period (2019 to 2024). It was not a new March 2026 prosecution, as earlier coverage on this site suggested.
          </p>

          <p>
            Researchers should treat supplier claims as claims to check. A research label does not authenticate a product, and a certificate does not establish legal compliance. The documented testing failures in this case make batch verification a practical step in any procurement decision.
          </p>

          <IQONPartner vial="ghk" />

          <div className="mt-12 pt-8 border-t border-gray-200 space-y-5">
            <h2 className="text-lg font-semibold text-gray-900" style={{ fontFamily: "var(--font-lora), Georgia, serif" }}>Frequently Asked Questions</h2>
            {[
              { q: "What happened to Paradigm Peptides?", a: "Owner Matthew Kawa was sentenced to 70 months in federal prison on July 30, 2026, with a $5 million money judgment. Jennifer Stechkober received 16 months. Both pleaded guilty in December 2025." },
              { q: "Why was the Paradigm Peptides owner sentenced?", a: "The DOJ says Kawa pleaded guilty to introducing unapproved new drugs into interstate commerce with intent to defraud and mislead, and to illegal importation." },
              { q: "Was there a $5 million judgment?", a: "Yes. The DOJ sentencing announcement reports a $5 million money judgment against Kawa, separate from the restitution order." },
              { q: "What is a Paradigm Peptides alternative?", a: "Verify the seller and the documentation for the offered batch. IQON Health is a commercial partner here — check its documentation before ordering." },
            ].map(({ q, a }) => (<div key={q}><h3 className="text-sm font-semibold text-gray-900 mb-1">{q}</h3><p className="text-sm text-gray-500">{a}</p></div>))}
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

          <p className="text-xs text-gray-400 pt-6 border-t border-gray-200 mt-4">Updated September 25, 2026. Sources: the linked DOJ case record and sentencing announcement. For information only, not legal advice. IQON Health is a paid commercial partner. Research products are not for human consumption.</p>
        </div>
      </main>
      <Footer />
    </>
  );
}
