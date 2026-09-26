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
          <p className="text-lg text-gray-800 font-medium leading-relaxed">Apex Peptides&apos; website displayed a temporary-closure notice on September 24, according to KCAU, one day after federal agents searched an Apex-linked waste-management property. KCAU found all but one product removed from the peptide site. The notice did not say what would happen to orders already placed.</p>

          <IQONPartner vial="glutathione" variant="inline" text="IQON Health offers products for laboratory research. Explore its catalog and confirm current product details and order terms directly before purchasing." />

          <h2>What do local reports confirm?</h2>
          <p>On September 23, agents searched 503 Prosperity Way in North Sioux City and a Dakota Dunes home, KTIV reported. The Postal Inspection Service led, joined by the FBI, IRS Criminal Investigation and local officers. KTIV saw investigators load material but officials did not identify what they took or why. (<a href="https://www.ktiv.com/2026/09/25/five-more-apex-tied-businesses-found-non-operational-building/">KTIV</a>)</p>
          <p>KTIV&apos;s filing review lists Apex Peptides alongside Apex Waste Management and Apex Research at a primary address in Sergeant Bluff, Iowa. The searched property was the waste-management site at 503 Prosperity Way; a nearby unfinished building at 498 carried five related registrations. KTIV did not report a search of 498 or a distinct peptide facility.</p>
          <p>KSCJ and KCAU reported two unidentified people led away in handcuffs. KCAU could not establish whether either was charged. Their identities and any charges should not be guessed from the footage. (<a href="https://kscj.com/2026/09/23/few-details-revealed-about-apex-raid-in-north-sioux-city/">KSCJ</a>, <a href="https://www.kcau9.com/news/local-news/irs-criminal-investigation-seen-at-north-sioux-city-business/">KCAU</a>)</p>

          <h2>Is Apex Peptides shut down?</h2>
          <p>KCAU saw the temporary notice and a nearly empty catalog on September 24. Its reporter also found workers inside Apex Waste Management. Work at the waste business does not tell a customer whether a peptide order is moving, while a temporary message on the peptide site does not establish a permanent shutdown. (<a href="https://www.kcau9.com/news/local-news/federal-investigators-remain-tight-lipped-after-wednesdays-raid/">KCAU</a>)</p>
          <p>An order confirmation and written seller response are more useful to an individual purchaser than a photo of the searched building. The local reports contain no order ledger, refund policy announcement or reopening date for Apex Peptides.</p>

          <h2>Why were the properties searched?</h2>
          <p>Postal inspector Travis Fondow told KSCJ that agents had been at multiple locations and declined to explain the active investigation. That leaves the purpose of the search open; the participating agencies alone do not identify a particular charge. (<a href="https://kscj.com/2026/09/24/federal-authorities-continue-apex-investigation/">KSCJ</a>)</p>

          <h2>What can customers do about an order?</h2>
          <p>Keep your order confirmation, transaction record and correspondence. Ask the original seller for shipping or refund information in writing and, if unresolved, check your payment provider&apos;s dispute deadline before it expires.</p>
          <p>If laboratory work requires another source, check its legal seller, current terms and documents for the offered lot. Research products are not for human consumption. A dated Apex statement about existing orders or an official case filing would answer more than the September search reports.</p>
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
          <p>The immediate, documented answer is a search at an Apex-linked waste property and a temporary notice on the peptide storefront the following day. Neither gives a customer a shipment date; preserve your own transaction record while seeking a direct answer.</p>

          <IQONPartner vial="bac-water" text="IQON Health offers products for laboratory research. Explore its catalog and confirm current product details and order terms directly before purchasing." />

          <p className="text-xs text-gray-400 pt-6 border-t border-gray-200 mt-4">Updated September 26, 2026. Sources linked above. For information only, not medical or legal advice. IQON Health is a commercial partner. Research products are not for human consumption.</p>
        </div>
      </main>
      <Footer />
    </>
  );
}
