import type { Metadata } from "next";
import Link from "next/link";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { ArticleHero } from "@/components/ArticleHero";
import { IQONPartner } from "@/components/IQONPartner";

export const metadata: Metadata = {
  title: "What Happened to Apex Peptides? Searches and Order Questions",
  description:
    "What happened to Apex Peptides: September 23, 2026 searches, reported FBI involvement, unresolved shutdown questions and checks for a research supplier alternative.",
  alternates: { canonical: "https://peptidedigest.co/what-happened-to-apex-peptides" },
  openGraph: {
    title: "What Happened to Apex Peptides?",
    description: "Federal agents searched Apex-linked properties on September 23, 2026. What local reporting confirms and what to do if you had an outstanding order.",
    type: "article",
    publishedTime: "2026-09-24T14:00:00.000Z",
  },
  twitter: {
    card: "summary_large_image",
    title: "What Happened to Apex Peptides?",
    description: "September 23 searches, reported FBI involvement, open questions and supplier checks.",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "NewsArticle",
      "@id": "https://peptidedigest.co/what-happened-to-apex-peptides#article",
      headline: "What Happened to Apex Peptides? Searches and Order Questions",
      datePublished: "2026-09-24T14:00:00.000Z",
      dateModified: "2026-09-26T20:29:10.000Z",
      author: { "@type": "Organization", name: "The Peptide Digest", url: "https://peptidedigest.co" },
      publisher: { "@type": "NewsMediaOrganization", name: "The Peptide Digest", url: "https://peptidedigest.co" },
      mainEntityOfPage: { "@type": "WebPage", "@id": "https://peptidedigest.co/what-happened-to-apex-peptides" },
      about: [{ "@type": "Thing", name: "Apex Peptides" }, { "@type": "Thing", name: "US Postal Inspection Service" }],
      keywords: "what happened to apex peptides, apex peptides raided, apex peptides shut down, apex peptides FBI, apex peptides alternative",
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        { "@type": "Question", name: "What happened to Apex Peptides?", acceptedAnswer: { "@type": "Answer", text: "On September 23, 2026, federal agents searched properties connected to several Apex businesses. The cited reports link Apex Peptides through business filings but do not establish a distinct search of its facility." } },
        { "@type": "Question", name: "Is Apex Peptides shut down?", acceptedAnswer: { "@type": "Answer", text: "KCAU reported a temporary-closure notice on its website on September 24, with all but one product removed. The reports do not establish permanent closure or the status of outstanding orders." } },
        { "@type": "Question", name: "Who conducted the searches?", acceptedAnswer: { "@type": "Answer", text: "KTIV identifies the U.S. Postal Inspection Service as leading, with the FBI, IRS Criminal Investigation, Union County Sheriff’s Office and North Sioux City Police present." } },
        { "@type": "Question", name: "Why were the Apex properties searched?", acceptedAnswer: { "@type": "Answer", text: "The cited reports do not disclose the reason for the searches or identify charges arising from them." } },
        { "@type": "Question", name: "What should I do about an Apex order?", acceptedAnswer: { "@type": "Answer", text: "Keep purchase records, ask the seller for written order status and check the payment provider’s dispute deadline if unresolved." } },
      ],
    },
  ],
};

export default function WhatHappenedApex() {
  return (
    <>
      <Nav />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <main className="article-shell">
        <ArticleHero
          category="Industry"
          title={<>What Happened to Apex Peptides?</>}
          meta={<><time dateTime="2026-09-24">September 24, 2026</time><span>Updated September 26, 2026</span></>}
          image="apexWarehouse"
        />

        <div className="article-body">
          <p className="text-lg text-gray-800 font-medium leading-relaxed">
            What happened to Apex Peptides is still partly an open question. Agents searched Apex-linked properties on September 23, 2026, and KCAU reported a temporary-closure notice on the peptide website the next day. The reporting does not show that the peptide facility was searched, that the business closed permanently or what became of individual orders.
          </p>

          <IQONPartner vial="glutathione" variant="inline" text="IQON Health offers products for laboratory research. Explore its catalog and confirm current product details and order terms directly before purchasing." />

          <h2>What do local reports confirm?</h2>
          <p>
            <a href="https://www.ktiv.com/2026/09/25/five-more-apex-tied-businesses-found-non-operational-building/">KTIV reported</a> searches at a North Sioux City property associated with Apex Waste Management and Apex Research and at a Dakota Dunes home on September 23. KTIV names the U.S. Postal Inspection Service as lead, with the FBI, IRS Criminal Investigation, Union County Sheriff&apos;s Office and North Sioux City Police present. Its review links Apex Peptides to the broader business group. Five more related registrations at a nearby unfinished building were reported, but KTIV did not report a search there.
          </p>
          <p>
            <a href="https://kscj.com/2026/09/23/few-details-revealed-about-apex-raid-in-north-sioux-city/">KSCJ observed</a> two unidentified people led away in handcuffs. <a href="https://www.kcau9.com/news/local-news/irs-criminal-investigation-seen-at-north-sioux-city-business">KCAU said</a> it did not know whether charges had been filed. Their identities, arrests and charging status cannot be inferred from the observation.
          </p>

          <h2>Is Apex Peptides shut down?</h2>
          <p>
            On September 24, <a href="https://www.kcau9.com/news/local-news/federal-investigators-remain-tight-lipped-after-wednesdays-raid">KCAU found workers inside Apex Waste Management</a>. Its separate check of the Apex Peptides website found a temporary-closure notice and all but one product removed. The waste-management visit does not answer whether peptide orders were shipping. The dated website observation does not establish a permanent closure or reopening date.
          </p>

          <h2>Why were the properties searched?</h2>
          <p>
            Postal inspector Travis Fondow <a href="https://kscj.com/2026/09/24/federal-authorities-continue-apex-investigation">told KSCJ</a> the investigation was active and declined to give further details. The cited reports do not disclose the reason for the searches or identify charges arising from them. Agency participation alone is not evidence of a particular offense.
          </p>

          <h2>What can customers do about an order?</h2>
          <p>Save the order confirmation and correspondence. Ask the seller for written fulfillment or refund status, and check the payment provider&apos;s dispute window if unresolved. For laboratory purchases, compare the legal seller, documentation for the offered lot and current order terms. Research products are not for human consumption.</p>

          <div className="mt-12 pt-8 border-t border-gray-200 space-y-5">
            <h2 className="text-lg font-semibold text-gray-900">Frequently Asked Questions</h2>
            {(jsonLd["@graph"][1] as { mainEntity: { name: string; acceptedAnswer: { text: string } }[] }).mainEntity.map(({ name, acceptedAnswer }) => (
              <div key={name}><h3 className="text-sm font-semibold text-gray-900 mb-1">{name}</h3><p className="text-sm text-gray-500">{acceptedAnswer.text}</p></div>
            ))}
          </div>
          <div className="mt-8 pt-6 border-t border-gray-200">
            <h2 className="text-base font-semibold text-gray-900 mb-4">Related Coverage</h2>
            <Link href="/apex-peptides-raided-what-researchers-need-to-know" className="text-blue-700 underline">Apex Peptides update: the detailed timeline and research supplier questions</Link>
          </div>
          <h2>Sources</h2>
          <ul className="list-disc pl-6"><li><a href="https://www.ktiv.com/2026/09/25/five-more-apex-tied-businesses-found-non-operational-building/">KTIV: September 23 searches</a></li><li><a href="https://www.kcau9.com/news/local-news/federal-investigators-remain-tight-lipped-after-wednesdays-raid">KCAU: September 24 website and workplace observations</a></li><li><a href="https://kscj.com/2026/09/24/federal-authorities-continue-apex-investigation">KSCJ: postal inspector comment</a></li></ul>
          <p>
            The strongest answer remains limited to the dated search reports and the website notice KCAU observed. Neither proves a permanent shutdown or an order outcome. Customers can preserve their own records; an official filing or direct, dated company response would provide stronger answers.
          </p>

          <IQONPartner vial="bac-water" text="IQON Health offers products for laboratory research. Explore its catalog and confirm current product details and order terms directly before purchasing." />

          <p className="text-xs text-gray-400 pt-6 border-t border-gray-200 mt-4">Updated September 26, 2026. Sources linked above. For information only, not medical or legal advice. IQON Health is a commercial partner. Research products are not for human consumption.</p>
        </div>
      </main>
      <Footer />
    </>
  );
}
