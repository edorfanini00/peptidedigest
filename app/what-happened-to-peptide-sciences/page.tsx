import type { Metadata } from "next";
import { articleBreadcrumbSchema } from "@/components/articleBreadcrumbSchema";
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
    description: "Peptide Sciences posted an undated voluntary-shutdown notice. What the notice says, what it does not say, and how to assess a research alternative.",
    type: "article",
    publishedTime: "2026-03-10T12:00:00.000Z",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    articleBreadcrumbSchema("Industry", "https://peptidedigest.co/what-happened-to-peptide-sciences"),
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
        { "@type": "Question", name: "What is a Peptide Sciences alternative?", acceptedAnswer: { "@type": "Answer", text: "Compare research suppliers using batch documentation, the legal seller's identity and current order terms. IQON Labs is a commercial partner on this page, not an independently certified replacement." } },
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

          <p className="text-lg text-gray-800 font-medium leading-relaxed">Peptide Sciences says it voluntarily shut down operations and discontinued sales of its research products. Its own notice warns that supposed successor sites using its name are unauthorized. It does not describe a DOJ-ordered closure or explain what will happen to each outstanding order.</p>

          <IQONPartner vial="ghk" variant="inline" />

          <h2 className="text-xl font-semibold text-gray-900 pt-4" style={{ fontFamily: "var(--font-lora), Georgia, serif" }}>What does the company&apos;s notice actually establish?</h2>
          <p>The notice is direct about the decision: the company will no longer sell its research products. It gives no decision date, business rationale, individual refund timetable or reopening plan. Anyone with an old order needs a transaction-specific response, not an inferred answer from the general announcement. (<a href="https://www.peptidesciences.com/">Peptide Sciences</a>)</p>
          <p>The successor warning is unusually pointed. Peptide Sciences says it retains rights to its name and intellectual property and disavows websites or individuals claiming affiliation or permission to sell its products. A matching logo on a new storefront is therefore no proof that the original company operates it or that it can handle prior orders.</p>

          <h2 className="text-xl font-semibold text-gray-900 pt-4" style={{ fontFamily: "var(--font-lora), Georgia, serif" }}>Did the FDA or DOJ force the closure?</h2>
          <p>The word &apos;voluntarily&apos; appears in the company&apos;s notice; no agency order is cited there. That does not reveal every consideration behind the decision, but it rules out presenting the notice itself as proof that FDA or DOJ forced the business to close.</p>
          <p>FDA did write to Gram Peptides in March 2026 about that company&apos;s website claims and research-only label. Gram is a different seller. Its warning letter cannot supply the missing government action against Peptide Sciences, no matter how often the two names appear in the same industry discussion. (<a href="https://www.fda.gov/inspections-compliance-enforcement-and-criminal-investigations/warning-letters/gram-peptides-721806-03312026">FDA</a>)</p>

          <h2 className="text-xl font-semibold text-gray-900 pt-4" style={{ fontFamily: "var(--font-lora), Georgia, serif" }}>What about old orders and supposed successor stores?</h2>
          <p>For an old purchase, save the receipt, charge and correspondence and contact the original seller through a verified channel for a written status. Check your payment provider&apos;s dispute deadline. The notice&apos;s reporting email for name misuse is not a promise that it can retrieve or refund a previous order.</p>
          <p>A Peptide Sciences alternative should be evaluated as a new seller: establish its legal identity, current terms and batch-specific analytical records. It is not an endorsed successor merely because it advertises similar research materials. IQON Labs is a commercial partner here and faces the same checks.</p>
          <p>The shutdown decision and the warning about unauthorized successors are the two concrete messages the company has given. A later dated order-handling update would be needed to answer the question left by its notice.</p>

          <div className="mt-12 pt-8 border-t border-gray-200 space-y-5">
            <h2 className="text-lg font-semibold text-gray-900" style={{ fontFamily: "var(--font-lora), Georgia, serif" }}>Frequently Asked Questions</h2>
            {[
              { q: "What happened to Peptide Sciences?", a: "Peptide Sciences says on its website that it voluntarily shut down operations and discontinued research-product sales. The notice does not say the DOJ or another agency directed the closure." },
              { q: "Did the DOJ shut down Peptide Sciences?", a: "The company's notice does not say that. The sources reviewed for this article do not establish a DOJ-directed closure." },
              { q: "Is Peptide Sciences coming back?", a: "The published notice does not announce a reopening date. It warns that claimed successors and third-party sellers using its identity are unauthorized." },
              { q: "What is a Peptide Sciences alternative?", a: "Compare research suppliers using batch documentation, the legal seller's identity and current order terms. IQON Labs is a commercial partner on this page, not an independently certified replacement." },
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

          <p>Treat the successor warning as a reason to verify who receives a new payment, not as an invitation to transfer an old order. The original notice says sales ended; it does not identify a replacement company or resolve individual purchases.</p>

          <IQONPartner vial="nad" />

          <p className="text-xs text-gray-400 pt-6 border-t border-gray-200 mt-4">Updated September 26, 2026. For information only, not medical or legal advice. IQON Labs is a paid commercial partner. Research products are not for human consumption.</p>
        </div>
      </main>
      <Footer />
    </>
  );
}
