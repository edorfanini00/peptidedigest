import type { Metadata } from "next";
import Link from "next/link";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";

export const metadata: Metadata = {
  title: "Apex Peptides raid: what researchers need to know",
  description:
    "Local reports place the Apex-linked searches on September 23, 2026. What is confirmed, what remains unanswered, and how to evaluate a research supplier.",
  alternates: {
    canonical: "https://peptidedigest.co/apex-peptides-raided-what-researchers-need-to-know",
  },
  openGraph: {
    title: "Apex Peptides raid: what researchers need to know",
    description:
      "Federal agents searched Apex-linked properties on September 23, 2026. What local reporting confirms, what allegations remain unattributed, and supplier checks for researchers.",
    type: "article",
    publishedTime: "2026-09-24T12:00:00.000Z",
    authors: ["The Peptide Digest"],
    tags: ["Apex Peptides", "peptide industry", "FDA enforcement", "research peptides"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Apex Peptides raid: what researchers need to know",
    description: "What local reporting confirms, what is still unattributed, and supplier checks.",
  },
};

const articleJsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "NewsArticle",
      "@id": "https://peptidedigest.co/apex-peptides-raided-what-researchers-need-to-know#article",
      headline: "Apex Peptides raid: what researchers need to know",
      description:
        "Local reports place the Apex-linked searches on September 23, 2026. What is confirmed, what remains unanswered, and how to evaluate a research supplier.",
      datePublished: "2026-09-24T12:00:00.000Z",
      dateModified: "2026-09-25T12:00:00.000Z",
      author: { "@type": "Organization", name: "The Peptide Digest", url: "https://peptidedigest.co" },
      publisher: { "@type": "NewsMediaOrganization", name: "The Peptide Digest", url: "https://peptidedigest.co" },
      mainEntityOfPage: { "@type": "WebPage", "@id": "https://peptidedigest.co/apex-peptides-raided-what-researchers-need-to-know" },
      about: [
        { "@type": "Thing", name: "Apex Peptides" },
        { "@type": "Thing", name: "Research Peptides" },
        { "@type": "Thing", name: "FDA Enforcement" },
        { "@type": "Thing", name: "US Postal Inspection Service" },
      ],
      keywords: "Apex Peptides raided, Apex Peptides FBI, research peptide enforcement 2026, Apex Peptides alternative, research peptide supplier",
      articleSection: "Industry",
    },
    {
      "@type": "FAQPage",
      "@id": "https://peptidedigest.co/apex-peptides-raided-what-researchers-need-to-know#faq",
      mainEntity: [
        {
          "@type": "Question",
          name: "What happened to Apex Peptides?",
          acceptedAnswer: { "@type": "Answer", text: "Local news reported searches of Apex-linked properties on September 23, 2026. The public reports reviewed here do not establish the charges or the status of individual orders." },
        },
        {
          "@type": "Question",
          name: "Was the FBI involved in the Apex Peptides raid?",
          acceptedAnswer: { "@type": "Answer", text: "KTIV reported FBI participation in an investigation led by the U.S. Postal Inspection Service. That does not establish what charges, if any, will follow." },
        },
        {
          "@type": "Question",
          name: "Has Apex Peptides shut down permanently?",
          acceptedAnswer: { "@type": "Answer", text: "The cited reports do not establish a permanent closure or reopening date. Seek written confirmation from the seller about an outstanding order." },
        },
        {
          "@type": "Question",
          name: "Why was Apex Peptides raided?",
          acceptedAnswer: { "@type": "Answer", text: "The local reports reviewed for this update do not disclose a specific reason. Allegations supplied separately to this publication have not been established by those public records." },
        },
        {
          "@type": "Question",
          name: "What should I check in an Apex Peptides alternative?",
          acceptedAnswer: { "@type": "Answer", text: "Check the legal seller, current order terms and the COA for the offered lot. IQON Health is a commercial partner, not a supplier independently certified by this article." },
        },
        {
          "@type": "Question",
          name: "Are research peptides intended for human use?",
          acceptedAnswer: { "@type": "Answer", text: "No. Research-use-only products are not for human consumption. A COA does not establish that a product is safe or approved for use in people." },
        },
      ],
    },
  ],
};

function InlinePartner({ text, cta }: { text: string; cta: string }) {
  return (
    <div className="my-6 rounded-lg border border-gray-200 bg-gray-50 p-4 flex items-start gap-4 not-prose">
      <div className="flex-1">
        <div className="text-[10px] font-semibold uppercase tracking-widest text-gray-400 mb-1">Partner</div>
        <p className="text-sm font-medium text-gray-800">{text}</p>
      </div>
      <a href="https://www.iqonhealth.com/shop" target="_blank" rel="noopener noreferrer" className="shrink-0 text-xs font-semibold text-blue-700 hover:text-blue-900 transition-colors whitespace-nowrap">
        {cta}
      </a>
    </div>
  );
}

export default function ApexRaidedArticle() {
  return (
    <>
      <Nav />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }} />
      <main className="max-w-2xl mx-auto px-6 py-12">
        <div className="flex items-center gap-2 text-xs text-gray-400 mb-8">
          <Link href="/" className="hover:text-gray-700 transition-colors">The Peptide Digest</Link>
          <span>/</span>
          <span className="bg-orange-50 text-orange-700 px-2 py-0.5 rounded-full font-medium">Industry</span>
        </div>

        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight mb-5" style={{ fontFamily: "var(--font-lora), Georgia, serif" }}>
          Apex Peptides Raid: What Researchers Need to Know
        </h1>

        <div className="flex items-center gap-4 text-xs text-gray-400 mb-8 pb-8 border-b border-gray-200">
          <time dateTime="2026-09-24">September 24, 2026</time>
          <span>·</span>
          <span>Updated September 25, 2026</span>
          <span>·</span>
          <span>The Peptide Digest Staff</span>
        </div>

        <div className="text-[15px] leading-relaxed space-y-5 text-gray-700">

          <p className="text-lg text-gray-800 font-medium leading-relaxed">
            Federal agents searched properties connected to Apex businesses in North Sioux City, South Dakota, on September 23, 2026. Local reporting links those businesses to Apex Peptides. The reports establish that searches took place; they do not establish the specific charges or the outcome for peptide orders.
          </p>

          <p>
            <a href="https://www.ktiv.com/2026/09/25/five-more-apex-tied-businesses-found-non-operational-building/" className="text-blue-700 underline" target="_blank" rel="noopener noreferrer">KTIV reports</a> that the U.S. Postal Inspection Service led the investigation, with the FBI and local police involved.{" "}
            <a href="https://kscj.com/2026/09/23/few-details-revealed-about-apex-raid-in-north-sioux-city/" className="text-blue-700 underline" target="_blank" rel="noopener noreferrer">KSCJ&apos;s September 23 report</a> describes agents removing boxes from 503 Prosperity Way. The search date was September 23, not September 24 as an earlier version of this article stated.
          </p>

          <h2 className="text-xl font-semibold text-gray-900 pt-4" style={{ fontFamily: "var(--font-lora), Georgia, serif" }}>
            Which Apex properties were searched?
          </h2>

          <p>
            Local coverage identifies 503 Prosperity Way — the address of Apex Waste Management and Apex Research — and a home in Dakota Dunes. KTIV also found other registered businesses connected to the Apex name at a nearby address on Prosperity Way. Shared addresses and registrations do not, by themselves, establish illegal activity.
          </p>

          <p>
            KSCJ reported that two people were led away in handcuffs. Its report did not identify them or say what charges they faced. We cannot use that account to identify particular people as arrested or charged.
          </p>

          <p>
            Screenshots supplied to this publication describe additional searches and alleged arrests at an airport. The original source&apos;s identity has not been provided for attribution. Those details are source allegations, not findings established by the public reports linked here.
          </p>

          <p>
            The supplied account also alleges financial offenses and distribution outside laboratory research. We are withholding personal accusations and revenue figures until they can be attributed and checked against records. That distinction does not dismiss the source; it prevents an allegation from becoming an asserted fact.
          </p>

          <p>
            A search does not prove guilt, and the number of agencies involved does not establish a particular offense. The local reports reviewed for this update do not explain what investigators were seeking or which materials they seized.
          </p>

          <p>
            The searches also do not settle whether Apex Peptides has permanently shut down. A website outage or unanswered message cannot establish the status of every order. Customers should seek written confirmation of fulfillment or a refund rather than rely on a predicted reopening date.
          </p>

          <InlinePartner
            text="Apex Peptides customers re-sourcing after this week — IQON Health is our commercial partner. Check its catalog and confirm documentation and fulfillment terms before ordering. Not for human consumption."
            cta="View products →"
          />

          <h2 className="text-xl font-semibold text-gray-900 pt-4" style={{ fontFamily: "var(--font-lora), Georgia, serif" }}>
            How this differs from other peptide company closures
          </h2>

          <p>
            Peptide Sciences describes its closure as voluntary in its{" "}
            <a href="https://www.peptidesciences.com" className="text-blue-700 underline" target="_blank" rel="noopener noreferrer">own shutdown notice</a>. The{" "}
            <a href="https://www.justice.gov/usao-ndin/united-states-v-matthew-kawa" className="text-blue-700 underline" target="_blank" rel="noopener noreferrer">DOJ Paradigm Peptides case record</a> documents guilty pleas in December 2025 and sentencing in July 2026. Neither source establishes why the Apex searches occurred.
          </p>

          <p>
            FDA scrutiny of research labeling is relevant background, not evidence against Apex. In its{" "}
            <a href="https://www.fda.gov/inspections-compliance-enforcement-and-criminal-investigations/warning-letters/gram-peptides-721806-03312026" className="text-blue-700 underline" target="_blank" rel="noopener noreferrer">March 31, 2026 warning letter to Gram Peptides</a>, the FDA cited product claims as evidence of intended human use despite research disclaimers. That letter concerns a different supplier.
          </p>

          <h2 className="text-xl font-semibold text-gray-900 pt-4" style={{ fontFamily: "var(--font-lora), Georgia, serif" }}>
            If you have an outstanding Apex order
          </h2>

          <p>
            Keep your receipt, order number and correspondence. Ask the seller for a written status update. If the order remains unresolved, check the dispute deadline with your payment provider. Available remedies depend on the payment method and the circumstances of the purchase.
          </p>

          <p>
            For an interrupted laboratory project, record the lot already in use before replacing it. A replacement sold under the same compound name may differ in specifications or testing. Have the person responsible for the protocol review that change.
          </p>

          <h2 className="text-xl font-semibold text-gray-900 pt-4" style={{ fontFamily: "var(--font-lora), Georgia, serif" }}>
            How to compare an Apex Peptides alternative
          </h2>

          <p>Evaluate the offered material and the seller separately. A research-use-only label or a polished certificate is not a compliance guarantee.</p>

          <ul className="list-disc list-inside space-y-2 pl-2">
            <li><strong>Intended use:</strong> Review product claims and sales materials. Research products are not for human consumption.</li>
            <li><strong>Batch documentation:</strong> Match the certificate of analysis to the lot offered. Check identity testing as well as reported purity.</li>
            <li><strong>Test scope:</strong> Ask which methods were used and whether additional tests — such as endotoxin analysis — are required for your experiment.</li>
            <li><strong>Seller identity:</strong> Verify the legal seller and where material is manufactured and shipped. A US address alone does not establish domestic manufacture.</li>
            <li><strong>Order terms:</strong> Confirm stock, dispatch estimates and the refund policy in writing.</li>
          </ul>

          <h2 className="text-xl font-semibold text-gray-900 pt-4" style={{ fontFamily: "var(--font-lora), Georgia, serif" }}>
            Our commercial partner: IQON Health
          </h2>

          <p>
            IQON Health has paid commercial placements on this page. Researchers considering its catalog should apply the same documentation checks described above. The placement is not an independent certification of legal compliance or product quality.
          </p>

          <p>
            Confirm the current product listing and fulfillment terms directly with IQON Health. We do not guarantee same-day dispatch or the scope of testing for every lot.
          </p>

          <div className="mt-10 rounded-xl border border-gray-200 bg-gray-50 p-6">
            <div className="text-xs font-semibold uppercase tracking-widest text-gray-400 mb-2">Partner</div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2" style={{ fontFamily: "var(--font-lora), Georgia, serif" }}>
              IQON Health — Research Peptides
            </h3>
            <p className="text-sm text-gray-500 mb-4">
              Third-party tested. Research-use-only. US-based. COAs on every product. Confirm availability and documentation before ordering.
            </p>
            <a href="https://www.iqonhealth.com/shop" target="_blank" rel="noopener noreferrer" className="inline-flex items-center px-5 py-2.5 rounded-lg bg-gray-900 text-white text-sm font-medium hover:bg-gray-700 transition-colors">
              Browse the catalog →
            </a>
            <p className="text-xs text-gray-400 mt-3">All products for research use only. Not for human consumption.</p>
          </div>

          <div className="mt-14 pt-10 border-t border-gray-200">
            <h2 className="text-xl font-semibold text-gray-900 mb-6" style={{ fontFamily: "var(--font-lora), Georgia, serif" }}>
              Frequently Asked Questions
            </h2>
            <div className="space-y-6">
              {[
                { q: "What happened to Apex Peptides?", a: "Local news reported searches of Apex-linked properties on September 23, 2026. The public reports reviewed here do not establish the charges or the status of individual orders." },
                { q: "Was the FBI involved in the Apex Peptides raid?", a: "KTIV reported FBI participation in an investigation led by the U.S. Postal Inspection Service. That does not establish what charges, if any, will follow." },
                { q: "Has Apex Peptides shut down permanently?", a: "The cited reports do not establish a permanent closure or reopening date. Seek written confirmation from the seller about an outstanding order." },
                { q: "Why was Apex Peptides raided?", a: "The local reports reviewed for this update do not disclose a specific reason. Allegations supplied separately to this publication have not been established by those public records." },
                { q: "What should I check in an Apex Peptides alternative?", a: "Check the legal seller, current order terms and the COA for the offered lot. IQON Health is a commercial partner, not a supplier independently certified by this article." },
                { q: "Are research peptides intended for human use?", a: "No. Research-use-only products are not for human consumption. A COA does not establish that a product is safe or approved for use in people." },
              ].map(({ q, a }) => (
                <div key={q}>
                  <h3 className="text-sm font-semibold text-gray-900 mb-1">{q}</h3>
                  <p className="text-sm text-gray-500 leading-relaxed">{a}</p>
                </div>
              ))}
            </div>
          </div>

          <p className="text-xs text-gray-400 pt-6 border-t border-gray-200 mt-8">
            Updated September 25, 2026. Sources are linked in the text. This article is for information, not medical or legal advice. IQON Health is a paid commercial partner. Research products are not for human consumption.
          </p>
        </div>

        <div className="mt-14 pt-10 border-t border-gray-200">
          <h2 className="text-lg font-semibold text-gray-900 mb-6" style={{ fontFamily: "var(--font-lora), Georgia, serif" }}>
            Related Coverage
          </h2>
          <div className="space-y-5">
            {[
              { slug: "what-happened-to-apex-peptides", category: "Industry", title: "What Happened to Apex Peptides? Searches and Order Questions", date: "September 24, 2026" },
              { slug: "peptide-enforcement-2026", category: "Industry", title: "2026 Peptide Enforcement: The Major Documented Actions", date: "September 24, 2026" },
              { slug: "compliant-research-peptide-supplier", category: "Industry", title: "What to Check in a Research Peptide Supplier", date: "September 10, 2026" },
            ].map((r) => (
              <Link key={r.slug} href={`/${r.slug}`} className="flex items-start gap-4 group">
                <span className="shrink-0 text-xs font-medium px-2 py-0.5 rounded-full mt-0.5 bg-orange-50 text-orange-700">{r.category}</span>
                <div>
                  <p className="text-sm font-medium text-gray-800 group-hover:text-blue-700 transition-colors leading-snug">{r.title}</p>
                  <p className="text-xs text-gray-400 mt-0.5">{r.date}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
