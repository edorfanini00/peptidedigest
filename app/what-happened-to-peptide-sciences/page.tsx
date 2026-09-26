import type { Metadata } from "next";
import Link from "next/link";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { ArticleHero } from "@/components/ArticleHero";
import { IQONPartner } from "@/components/IQONPartner";

export const metadata: Metadata = {
  title: "What Happened to Peptide Sciences? Its Shutdown Notice Explained",
  description: "Peptide Sciences says it voluntarily shut down research-product sales. Read its notice, what it does not explain, and how to assess an alternative supplier.",
  alternates: { canonical: "https://peptidedigest.co/what-happened-to-peptide-sciences" },
  openGraph: {
    title: "What Happened to Peptide Sciences?",
    description: "Peptide Sciences posted a voluntary-shutdown notice on March 6, 2026. What the notice says, what it does not say, and how to find a research alternative.",
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
      headline: "What Happened to Peptide Sciences? Its Shutdown Notice Explained",
      datePublished: "2026-03-10T12:00:00.000Z",
      dateModified: "2026-09-26T20:29:10.000Z",
      author: { "@type": "Organization", name: "The Peptide Digest", url: "https://peptidedigest.co" },
      publisher: { "@type": "NewsMediaOrganization", name: "The Peptide Digest", url: "https://peptidedigest.co" },
      keywords: "what happened to peptide sciences, peptide sciences shut down, peptide sciences alternative, peptide sciences DOJ, peptidesciences.com offline",
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        { "@type": "Question", name: "What happened to Peptide Sciences?", acceptedAnswer: { "@type": "Answer", text: "Peptide Sciences says on its website that it voluntarily shut down operations and discontinued research-product sales. The notice does not say the DOJ or another agency directed the closure." } },
        { "@type": "Question", name: "Did the DOJ shut down Peptide Sciences?", acceptedAnswer: { "@type": "Answer", text: "The company's notice does not say that. The sources reviewed for this article do not establish a DOJ-directed closure." } },
        { "@type": "Question", name: "Is Peptide Sciences coming back?", acceptedAnswer: { "@type": "Answer", text: "The published notice does not announce a reopening date. It warns that claimed successors and third-party sellers using its identity are unauthorized." } },
        { "@type": "Question", name: "What is a Peptide Sciences alternative?", acceptedAnswer: { "@type": "Answer", text: "Compare research suppliers using batch documentation, the legal seller's identity and current order terms. IQON Health is a commercial partner on this page, not an independently certified replacement." } },
      ],
    },
  ],
};


export default function PeptideSciencesShutdown() {
  return (
    <>
      <Nav />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <main className="article-shell">
        <ArticleHero
          category="Industry"
          title={<>What Happened to Peptide Sciences?</>}
          dek={"Peptide Sciences says it voluntarily shut down research-product sales. Read its notice, what it does not explain, and how to assess an alternative supplier."}
          meta={<><time dateTime="2026-03-10">March 10, 2026</time><span>Updated September 26, 2026</span></>}
          image="researchVials"
        />

        <div className="article-body">

          <p className="text-lg text-gray-800 font-medium leading-relaxed">
            Peptide Sciences says it voluntarily ended operations and stopped selling its research products. Its own shutdown notice does not say the DOJ closed the business and gives no detailed explanation of the decision. That makes the notice a firmer source for what happened than speculation about why.
          </p>

          <IQONPartner vial="ghk" variant="inline" />

          <h2 className="text-xl font-semibold text-gray-900 pt-4" style={{ fontFamily: "var(--font-lora), Georgia, serif" }}>What does the company&apos;s notice actually establish?</h2>
          <p><a href="https://www.peptidesciences.com/">Peptide Sciences says</a> it decided to voluntarily shut down operations and discontinue sales of its research products. That is a statement from the company about its own decision. It does not identify a date of the decision, explain the business rationale, publish an order-by-order plan or give a reopening date. The company&apos;s wording should not be turned into a claim about individual refunds.</p>
          <p>The notice retains the company&apos;s rights to its name and intellectual property and says websites or individuals claiming affiliation, successor status or permission to sell its products are unauthorized. That warning is the most concrete consumer-facing detail beyond the shutdown: a matching logo or a purported successor storefront does not verify the legal seller. The notice provides a reporting email for suspected misuse, but does not promise that emailing it will resolve an old order.</p>

          <h2 className="text-xl font-semibold text-gray-900 pt-4" style={{ fontFamily: "var(--font-lora), Georgia, serif" }}>Did the FDA or DOJ force the closure?</h2>
          <p>The company&apos;s notice says &quot;voluntarily.&quot; It does not claim an agency ordered it to close. That word also cannot tell us which legal, financial or operational considerations informed its decision. Without a document linking a government action to this company, the cause remains unestablished.</p>
          <p>The distinction becomes clearer beside a real regulator&apos;s document. The <a href="https://www.fda.gov/inspections-compliance-enforcement-and-criminal-investigations/warning-letters/gram-peptides-721806-03312026">FDA&apos;s March 31 letter to Gram Peptides</a> identifies a different company, the product claims FDA reviewed and the conduct it alleged. It explains why a research-only label does not settle intended use if marketing points to human use. That letter is evidence about Gram Peptides, not proof that Peptide Sciences received a warning or was shut down by the government.</p>

          <h2 className="text-xl font-semibold text-gray-900 pt-4" style={{ fontFamily: "var(--font-lora), Georgia, serif" }}>What about old orders and supposed successor stores?</h2>
          <p>Keep your receipt, payment record and correspondence and seek a written update through a verified channel for the original seller. Check the payment provider&apos;s dispute deadline if your order remains unresolved. Do not assume a new site can retrieve or honor the original order merely because it uses the former company&apos;s branding; the company&apos;s notice disavows successor claims.</p>
          <p>For a Peptide Sciences alternative, compare the legal seller, batch-specific certificate of analysis and current order terms against your laboratory requirements. A certificate is evidence about the tested sample, not proof of human-use suitability or of a seller&apos;s relationship to Peptide Sciences. IQON Health advertises here as a commercial partner and should face the same checks, not be presented as an endorsed successor.</p>
          <p>The notice settles the company&apos;s stated decision to stop selling. A dated company update on outstanding orders would settle something different; rumors about an agency action or a replacement storefront do neither.</p>

          <div className="mt-12 pt-8 border-t border-gray-200 space-y-5">
            <h2 className="text-lg font-semibold text-gray-900" style={{ fontFamily: "var(--font-lora), Georgia, serif" }}>Frequently Asked Questions</h2>
            {[
              { q: "What happened to Peptide Sciences?", a: "Peptide Sciences says on its website that it voluntarily shut down operations and discontinued research-product sales. The notice does not say the DOJ or another agency directed the closure." },
              { q: "Did the DOJ shut down Peptide Sciences?", a: "The company's notice does not say that. The sources reviewed for this article do not establish a DOJ-directed closure." },
              { q: "Is Peptide Sciences coming back?", a: "The published notice does not announce a reopening date. It warns that claimed successors and third-party sellers using its identity are unauthorized." },
              { q: "What is a Peptide Sciences alternative?", a: "Compare research suppliers using batch documentation, the legal seller's identity and current order terms. IQON Health is a commercial partner on this page, not an independently certified replacement." },
            ].map(({ q, a }) => (
              <div key={q}>
                <h3 className="text-sm font-semibold text-gray-900 mb-1">{q}</h3>
                <p className="text-sm text-gray-500">{a}</p>
              </div>
            ))}
          </div>

          <div className="mt-8 pt-6 border-t border-gray-200">
            <h2 className="text-base font-semibold text-gray-900 mb-4" style={{ fontFamily: "var(--font-lora), Georgia, serif" }}>Related Coverage</h2>
            <div className="space-y-3">
              {[
                { slug: "peptide-enforcement-2026", title: "2026 Peptide Enforcement: The Major Documented Actions" },
                { slug: "compliant-research-peptide-supplier", title: "What to Check in a Research Peptide Supplier" },
                { slug: "paradigm-peptides-prison-sentence", title: "Paradigm Peptides: Matthew Kawa Sentenced to 70 Months" },
              ].map((r) => (<Link key={r.slug} href={`/${r.slug}`} className="block text-sm text-gray-700 hover:text-blue-700 transition-colors">{r.title} →</Link>))}
            </div>
          </div>

          <p>
            The company’s notice also rejects purported successors using its name. That establishes its stated position, not the fate of every outstanding order or the merits of any alternative seller. A dated company update would be needed to answer those remaining questions.
          </p>

          <IQONPartner vial="nad" />

          <p className="text-xs text-gray-400 pt-6 border-t border-gray-200 mt-4">Updated September 26, 2026. For information only, not medical or legal advice. IQON Health is a paid commercial partner. Research products are not for human consumption.</p>
        </div>
      </main>
      <Footer />
    </>
  );
}
