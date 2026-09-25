import type { Metadata } from "next";
import Link from "next/link";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { ArticleHero } from "@/components/ArticleHero";

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
      dateModified: "2026-09-25T12:00:00.000Z",
      author: { "@type": "Organization", name: "The Peptide Digest", url: "https://peptidedigest.co" },
      publisher: { "@type": "NewsMediaOrganization", name: "The Peptide Digest", url: "https://peptidedigest.co" },
      keywords: "what happened to peptide sciences, peptide sciences shut down, peptide sciences alternative, peptide sciences DOJ, peptidesciences.com offline",
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        { "@type": "Question", name: "What happened to Peptide Sciences?", acceptedAnswer: { "@type": "Answer", text: "Peptide Sciences posted a voluntary-shutdown notice on its website on March 6, 2026. The notice says the company decided to discontinue research-product sales. It does not state that the DOJ or any agency directed the closure." } },
        { "@type": "Question", name: "Did the DOJ shut down Peptide Sciences?", acceptedAnswer: { "@type": "Answer", text: "The company's notice does not say that. The sources reviewed for this article do not establish a DOJ-directed closure." } },
        { "@type": "Question", name: "Is Peptide Sciences coming back?", acceptedAnswer: { "@type": "Answer", text: "The published notice does not announce a reopening date. It warns that claimed successors and third-party sellers using its identity are unauthorized." } },
        { "@type": "Question", name: "What is a Peptide Sciences alternative?", acceptedAnswer: { "@type": "Answer", text: "Compare research suppliers using batch documentation, the legal seller's identity and current order terms. IQON Health is a commercial partner on this page, not an independently certified replacement." } },
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
          meta={<><time dateTime="2026-03-10">March 10, 2026</time><span>Updated September 25, 2026</span></>}
          image="labFlasks"
        />

        <div className="article-body">

          <p className="text-lg text-gray-800 font-medium leading-relaxed">
            Peptide Sciences says it has voluntarily shut down operations and discontinued the sale of its research products. That is the explanation in the company&apos;s{" "}
            <a href="https://www.peptidesciences.com" className="text-blue-700 underline" target="_blank" rel="noopener noreferrer">published shutdown notice</a>. The notice does not say the DOJ closed the business.
          </p>

          <p>
            The notice remains more useful than a guessed reason for the closure. It confirms the end of research-product sales but does not explain the company&apos;s internal decision or resolve the status of each customer&apos;s order.
          </p>

          <h2 className="text-xl font-semibold text-gray-900 pt-4" style={{ fontFamily: "var(--font-lora), Georgia, serif" }}>What Peptide Sciences has said</h2>

          <p>
            The company says it retains the rights to its name and trademarks. It also warns that third parties claiming to be affiliated with Peptide Sciences, to be its successor or to sell its products are not authorized. A familiar logo on another site is not evidence of continuity.
          </p>

          <p>
            The notice does not give a reopening date. An earlier version of this article claimed thousands of customers received no refunds or had orders go unfulfilled; that specific claim went beyond what the notice and available evidence established, and we have removed it.
          </p>

          <InlinePartner text="Looking for a Peptide Sciences alternative? IQON Health is our commercial partner. Review its research catalog and confirm current stock and documentation directly." cta="View products →" />

          <h2 className="text-xl font-semibold text-gray-900 pt-4" style={{ fontFamily: "var(--font-lora), Georgia, serif" }}>Was the shutdown caused by FDA or DOJ action?</h2>

          <p>
            The word &quot;voluntary&quot; is the company&apos;s description. It does not reveal whether legal advice, regulation or business conditions affected the decision. We have not established a government order requiring this closure and should not present one as the cause.
          </p>

          <p>
            The FDA has challenged research-use disclaimers at other sellers. Its{" "}
            <a href="https://www.fda.gov/inspections-compliance-enforcement-and-criminal-investigations/warning-letters/gram-peptides-721806-03312026" className="text-blue-700 underline" target="_blank" rel="noopener noreferrer">March 31, 2026 warning letter to Gram Peptides</a> explains how product claims can show intended human use. That is regulatory context, not evidence that the FDA or DOJ directed the Peptide Sciences shutdown.
          </p>

          <InlinePartner text="Before ordering from IQON Health, request the COA for the offered batch and check the tests against your laboratory requirements. Not for human consumption." cta="Browse →" />

          <h2 className="text-xl font-semibold text-gray-900 pt-4" style={{ fontFamily: "var(--font-lora), Georgia, serif" }}>Orders, successor claims and research alternatives</h2>

          <p>
            If you have an unresolved purchase, retain the receipt and ask the original seller for a written update. Check your payment provider&apos;s dispute deadlines. Be cautious about sending money to a site that claims it can recover an old order or continue the former business.
          </p>

          <p>
            For a Peptide Sciences alternative, start with the offered lot and your laboratory requirements. Verify the seller and the COA rather than relying on brand familiarity. IQON Health is a commercial partner of this publication; the same checks apply to its catalog.
          </p>

          <div className="mt-8 rounded-xl border border-gray-200 bg-gray-50 p-6">
            <div className="text-xs font-semibold uppercase tracking-widest text-gray-400 mb-2">Partner</div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2" style={{ fontFamily: "var(--font-lora), Georgia, serif" }}>IQON Health — Research Peptides</h3>
            <p className="text-sm text-gray-500 mb-4">Third-party tested. Research-use-only. US-based. COAs on every product. Confirm availability before ordering.</p>
            <a href="https://www.iqonhealth.com/shop" target="_blank" rel="noopener noreferrer" className="inline-flex items-center px-5 py-2.5 rounded-lg bg-gray-900 text-white text-sm font-medium hover:bg-gray-700 transition-colors">Browse the catalog →</a>
            <p className="text-xs text-gray-400 mt-3">All products for research use only. Not for human consumption.</p>
          </div>

          <div className="mt-12 pt-8 border-t border-gray-200 space-y-5">
            <h2 className="text-lg font-semibold text-gray-900" style={{ fontFamily: "var(--font-lora), Georgia, serif" }}>Frequently Asked Questions</h2>
            {[
              { q: "What happened to Peptide Sciences?", a: "Peptide Sciences posted a voluntary-shutdown notice on its website on March 6, 2026. The notice says the company decided to discontinue research-product sales. It does not state that the DOJ or any agency directed the closure." },
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

          <p className="text-xs text-gray-400 pt-6 border-t border-gray-200 mt-4">Updated September 25, 2026. For information only, not medical or legal advice. IQON Health is a paid commercial partner. Research products are not for human consumption.</p>
        </div>
      </main>
      <Footer />
    </>
  );
}
