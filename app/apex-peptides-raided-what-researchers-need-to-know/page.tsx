import type { Metadata } from "next";
import { articleBreadcrumbSchema } from "@/components/articleBreadcrumbSchema";
import Link from "next/link";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { ArticleHero } from "@/components/ArticleHero";
import { IQONPartner } from "@/components/IQONPartner";
import { KeyFacts } from "@/components/Editorial";

export const metadata: Metadata = {
  title: "Apex Peptides update: federal searches and a temporary closure notice",
  description:
    "Local reports place the Apex-linked searches on September 23, 2026. What is confirmed, what remains unanswered, and how to evaluate a research supplier.",
  alternates: {
    canonical: "https://peptidedigest.co/apex-peptides-raided-what-researchers-need-to-know",
  },
  openGraph: {
    title: "Apex Peptides update: federal searches and a temporary closure notice",
    description:
      "Federal agents searched Apex-linked properties on September 23, 2026. What local reporting confirms, what remains unanswered, and supplier checks for researchers.",
    type: "article",
    publishedTime: "2026-09-24T12:00:00.000Z",
    authors: ["The Peptide Digest"],
    tags: ["Apex Peptides", "peptide industry", "federal investigation", "research peptides"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Apex Peptides update: federal searches and a temporary closure notice",
    description: "What local reporting confirms, what remains unanswered, and supplier checks.",
  },
};

const articleJsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    articleBreadcrumbSchema("Industry", "https://peptidedigest.co/apex-peptides-raided-what-researchers-need-to-know"),
    {
      "@type": "NewsArticle",
      "@id": "https://peptidedigest.co/apex-peptides-raided-what-researchers-need-to-know#article",
      headline: "Apex Peptides update: federal searches and a temporary closure notice",
      description:
        "Local reports place the Apex-linked searches on September 23, 2026. What is confirmed, what remains unanswered, and how to evaluate a research supplier.",
      datePublished: "2026-09-24T12:00:00.000Z",
      dateModified: "2026-09-26T20:29:10.000Z",
      author: { "@type": "Organization", name: "The Peptide Digest", url: "https://peptidedigest.co" },
      publisher: { "@type": "NewsMediaOrganization", name: "The Peptide Digest", url: "https://peptidedigest.co" },
      mainEntityOfPage: { "@type": "WebPage", "@id": "https://peptidedigest.co/apex-peptides-raided-what-researchers-need-to-know" },
      about: [
        { "@type": "Thing", name: "Apex Peptides" },
        { "@type": "Thing", name: "Research Peptides" },
        { "@type": "Thing", name: "US Postal Inspection Service" },
      ],
      keywords: "Apex Peptides raided, Apex Peptides FBI, research peptide enforcement 2026, Apex Peptides alternative, research peptide supplier",
      articleSection: "Industry",
    },
    {
      "@type": "FAQPage",
      "@id": "https://peptidedigest.co/apex-peptides-raided-what-researchers-need-to-know#faq",
      mainEntity: [
        { "@type": "Question", name: "What happened to Apex Peptides?", acceptedAnswer: { "@type": "Answer", text: "Federal agents searched a North Sioux City property associated with several Apex businesses and a Dakota Dunes home on September 23, 2026. Business filings link Apex Peptides to the broader group, but the reports do not establish a separate search of an Apex Peptides facility." } },
        { "@type": "Question", name: "Which agencies took part?", acceptedAnswer: { "@type": "Answer", text: "KTIV reports the U.S. Postal Inspection Service led the investigation, with FBI, IRS Criminal Investigation, Union County sheriff’s deputies and North Sioux City police present." } },
        { "@type": "Question", name: "Is Apex Peptides permanently closed?", acceptedAnswer: { "@type": "Answer", text: "KCAU reported that the Apex Peptides website displayed a temporary-closure notice on September 24. The cited reports do not establish a permanent closure or the status of existing orders." } },
        { "@type": "Question", name: "Why were the Apex properties searched?", acceptedAnswer: { "@type": "Answer", text: "The cited reports do not disclose the reason for the searches or identify charges arising from them." } },
        { "@type": "Question", name: "Was the nearby unfinished building searched?", acceptedAnswer: { "@type": "Answer", text: "KTIV identified five related business registrations at a nearby unfinished building. It did not report a search of that building." } },
        { "@type": "Question", name: "What should I do about an outstanding order?", acceptedAnswer: { "@type": "Answer", text: "Keep your receipt and correspondence, ask the seller for written order status and check your payment provider’s dispute deadline if the order remains unresolved." } },
      ],
    },
  ],
};


export default function ApexRaidedArticle() {
  return (
    <>
      <Nav />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }} />
      <main className="article-shell">
        <ArticleHero
          category="Industry"
          title={<>Apex Peptides Update: Federal Searches and a Temporary Closure Notice</>}
          dek={"Local reports place the Apex-linked searches on September 23, 2026. What is confirmed, what remains unanswered, and how to evaluate a research supplier."}
          meta={<><time dateTime="2026-09-24">September 24, 2026</time><span>Updated September 26, 2026</span></>}
          image="apexRaid"
        />

        <div className="article-body">
          <p className="text-lg text-gray-800 font-medium leading-relaxed">Federal agents searched the Apex Waste Management property at 503 Prosperity Way in North Sioux City on September 23, 2026. The next day, KCAU found a temporary-closure notice on Apex Peptides&apos; website. For customers, that notice raises an immediate order question; neither the search nor the notice says whether an existing peptide order will ship.</p>

          <IQONPartner vial="nad" variant="inline" text="IQON Health offers products for laboratory research. Explore its catalog and confirm current product details and order terms directly before purchasing." />

          <KeyFacts items={[
            "September 23: Agents searched a North Sioux City Apex-linked property and a Dakota Dunes home, according to KTIV.",
            "KTIV identifies the U.S. Postal Inspection Service as the lead, alongside the FBI, IRS Criminal Investigation and local agencies.",
            "September 24: KCAU found workers at Apex Waste Management and reported a temporary-closure notice on the Apex Peptides website.",
            "The cited reports do not explain the searches or identify charges arising from them; permanent closure is not established.",
          ]} />

          <h2>What happened on September 23?</h2>
          <p>KTIV&apos;s crew saw agents arrive at 503 Prosperity Way around 10 a.m., carry collection equipment inside and load a trailer before leaving after 4 p.m. It also reported a search at a Dakota Dunes home. KTIV saw boxes, papers and packaged items but said authorities had not identified what was taken. (<a href="https://www.ktiv.com/2026/09/25/five-more-apex-tied-businesses-found-non-operational-building/">KTIV</a>)</p>
          <p>The U.S. Postal Inspection Service led the operation, according to KTIV; the FBI, IRS Criminal Investigation and local officers participated. Postal inspector Travis Fondow told KSCJ that agents were at multiple locations and declined further details while the investigation was active. Their presence does not identify a suspected offense. (<a href="https://kscj.com/2026/09/24/federal-authorities-continue-apex-investigation/">KSCJ</a>)</p>
          <p>KSCJ and KCAU saw two unidentified people escorted in handcuffs. KCAU did not know whether charges had been filed. Neither report identifies the people or establishes a charge against them. (<a href="https://kscj.com/2026/09/23/few-details-revealed-about-apex-raid-in-north-sioux-city/">KSCJ</a>, <a href="https://www.kcau9.com/news/local-news/irs-criminal-investigation-seen-at-north-sioux-city-business/">KCAU</a>)</p>

          <h2>How is Apex Peptides connected to the properties?</h2>
          <p>The addresses explain why &apos;Apex Peptides raided&apos; is an imprecise shorthand. KTIV placed the search at the waste-management property, while its business-filing review lists Apex Peptides, Apex Waste Management and Apex Research with a primary address in Sergeant Bluff, Iowa. Five related registrations pointed to 498 Prosperity Way, a nearby unfinished building; KTIV did not report a search of that building. (<a href="https://www.ktiv.com/2026/09/25/five-more-apex-tied-businesses-found-non-operational-building/">KTIV</a>)</p>
          <p>The filings connect the companies. They do not place investigators inside a separately identified Apex Peptides facility. That matters to a researcher trying to distinguish a site outage or halted order from a documented search of a peptide operation.</p>

          <h2>What changed on September 24?</h2>
          <p>KCAU found employees inside Apex Waste Management on September 24. On the peptide website, it saw a temporary-closure notice with all but one product removed. A worker at the waste business could not answer whether the peptide storefront was fulfilling orders, and the dated website notice did not announce a permanent closure. (<a href="https://www.kcau9.com/news/local-news/federal-investigators-remain-tight-lipped-after-wednesdays-raid/">KCAU</a>)</p>
          <p>KTIV also reported unanswered calls and a delivery driver who struggled to reach the waste property before completing a delivery when an Isaacson brother arrived. Those details describe access to that property that morning, not the fate of customers&apos; peptide packages.</p>

          <h2>What if you have an outstanding order?</h2>
          <p>If you placed an order, save the confirmation, order number and payment record. Ask the original seller for a written shipping or refund status, then check the payment provider&apos;s own dispute deadline if the matter stays unresolved. No blanket refund or delivery outcome appears in the cited reporting.</p>
          <p>For laboratory replacement stock, compare the actual offered lot with your protocol, seek its batch documentation and check the new seller&apos;s identity and order terms. A different catalog is not automatically interchangeable; research products are not for human consumption.</p>
          <p>A dated company explanation about orders, or an official filing describing the searches, would change this account. Until then the verified sequence is a September 23 property search followed by KCAU&apos;s September 24 observation of a temporary notice on the peptide site.</p>

          <div className="mt-14 pt-10 border-t border-gray-200">
            <h2 className="text-xl font-semibold text-gray-900 mb-6">Frequently Asked Questions</h2>
            <div className="space-y-6">
              {(articleJsonLd["@graph"][2] as { mainEntity: { name: string; acceptedAnswer: { text: string } }[] }).mainEntity.map(({ name, acceptedAnswer }) => (
                <div key={name}><h3 className="text-sm font-semibold text-gray-900 mb-1">{name}</h3><p className="text-sm text-gray-500 leading-relaxed">{acceptedAnswer.text}</p></div>
              ))}
            </div>
          </div>
          <h2>Sources</h2>
          <ul className="list-disc pl-6"><li><a href="https://www.ktiv.com/2026/09/25/five-more-apex-tied-businesses-found-non-operational-building/">KTIV: Apex-linked businesses and search timeline</a></li><li><a href="https://www.kcau9.com/news/local-news/federal-investigators-remain-tight-lipped-after-wednesdays-raid">KCAU: September 24 follow-up</a></li><li><a href="https://kscj.com/2026/09/24/federal-authorities-continue-apex-investigation">KSCJ: postal inspector comment</a></li></ul>
          <p className="text-xs text-gray-400 pt-6 border-t border-gray-200 mt-8">
            Updated September 26, 2026. Sources are linked in the text. This article is for information, not medical or legal advice. IQON Health is a commercial partner. Research products are not for human consumption.
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
          <IQONPartner vial="glutathione" text="IQON Health offers products for laboratory research. Explore its catalog and confirm current product details and order terms directly before purchasing." />
        </div>
      </main>
      <Footer />
    </>
  );
}
