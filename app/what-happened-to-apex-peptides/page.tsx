import type { Metadata } from "next";
import { articleBreadcrumbSchema } from "@/components/articleBreadcrumbSchema";
import Link from "next/link";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { ArticleHero } from "@/components/ArticleHero";
import { IQONPartner } from "@/components/IQONPartner";

export const metadata: Metadata = {
  title: "What Happened to Apex Peptides? Searches and Closure Questions",
  description:
    "What happened to Apex Peptides: September 23, 2026 searches, reported FBI involvement, unresolved shutdown questions and checks for a research supplier alternative.",
  alternates: { canonical: "https://peptidedigest.co/what-happened-to-apex-peptides" },
  openGraph: {
    title: "What Happened to Apex Peptides?",
    description: "Federal agents searched Apex-linked properties on September 23, 2026. The peptide storefront displayed a temporary-closure notice the next day; permanent closure is unconfirmed.",
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
    articleBreadcrumbSchema("Industry", "https://peptidedigest.co/what-happened-to-apex-peptides"),
    {
      "@type": "NewsArticle",
      "@id": "https://peptidedigest.co/what-happened-to-apex-peptides#article",
      headline: "What Happened to Apex Peptides? Searches and Closure Questions",
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
        { "@type": "Question", name: "Is Apex Peptides shut down?", acceptedAnswer: { "@type": "Answer", text: "KCAU reported a temporary-closure notice on its website on September 24, with all but one product removed. The reports do not establish permanent closure or whether the storefront resumed fulfilling orders." } },
        { "@type": "Question", name: "Who conducted the searches?", acceptedAnswer: { "@type": "Answer", text: "KTIV identifies the U.S. Postal Inspection Service as leading, with the FBI, IRS Criminal Investigation, Union County Sheriff’s Office and North Sioux City Police present." } },
        { "@type": "Question", name: "Why were the Apex properties searched?", acceptedAnswer: { "@type": "Answer", text: "The cited reports do not disclose the reason for the searches or identify charges arising from them." } },
        { "@type": "Question", name: "What does the closure notice establish about existing orders?", acceptedAnswer: { "@type": "Answer", text: "The September 24 report documents a temporary notice and a reduced catalog, not an order ledger or a company announcement about fulfillment or refunds." } },
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
          <p className="text-lg text-gray-800 font-medium leading-relaxed">On September 24, Apex Peptides&apos; website displayed a temporary-closure notice, and all but one product had been removed from the site, <a href="https://www.kcau9.com/news/local-news/federal-investigators-remain-tight-lipped-after-wednesdays-raid/">KCAU observed</a>. Federal agents had searched an Apex-linked waste-management property the day before. The notice left the storefront’s operating status beyond that date unconfirmed.</p>

          <IQONPartner vial="glutathione" variant="inline" text="IQON Labs offers products for laboratory research. Explore its catalog and confirm current product details and order terms directly before purchasing." />

          <h2>What do local reports confirm?</h2>
          <p>On September 23, agents searched 503 Prosperity Way in North Sioux City and a Dakota Dunes home. The Postal Inspection Service led, joined by the FBI, IRS Criminal Investigation and local officers. KTIV saw investigators load material but officials did not identify what they took or why. (<a href="https://www.ktiv.com/2026/09/25/five-more-apex-tied-businesses-found-non-operational-building/">KTIV</a>)</p>
          <p>A <a href="https://www.ktiv.com/2026/09/25/five-more-apex-tied-businesses-found-non-operational-building/">review of business filings</a> lists Apex Peptides alongside Apex Waste Management and Apex Research at a primary address in Sergeant Bluff, Iowa. The searched property was the waste-management site at 503 Prosperity Way; a nearby unfinished building at 498 carried five related registrations. KTIV did not report a search of 498 or a distinct peptide facility.</p>
          <p>KSCJ reported that two people were seen led away in handcuffs. It said their identities and any charges had not been revealed as of Wednesday night. The report does not establish whether charges were later filed. (<a href="https://kscj.com/2026/09/23/few-details-revealed-about-apex-raid-in-north-sioux-city/">KSCJ</a>)</p>

          <h2>Is Apex Peptides shut down?</h2>
          <p>KCAU saw the temporary notice and a nearly empty catalog on September 24. Its reporter also found workers inside Apex Waste Management. Activity at the waste business does not establish whether the separate peptide storefront was fulfilling orders, while a temporary message on the peptide site does not establish a permanent shutdown. (<a href="https://www.kcau9.com/news/local-news/federal-investigators-remain-tight-lipped-after-wednesdays-raid/">KCAU</a>)</p>
          <p>The cited accounts provide no order ledger, company refund announcement or reopening date for Apex Peptides. The gap matters because an observed temporary notice cannot establish the fate of existing purchases.</p>

          <h2>Why were the properties searched?</h2>
          <p>Postal inspector Travis Fondow told KSCJ that agents had been at multiple locations and declined to explain the active investigation. That leaves the purpose of the search open; the participating agencies alone do not identify a particular charge. (<a href="https://kscj.com/2026/09/24/federal-authorities-continue-apex-investigation/">KSCJ</a>)</p>

          <h2>What remains unconfirmed for the peptide storefront?</h2>
          <p>The September 24 notice is evidence of an interruption to the storefront, not proof that Apex Peptides permanently closed or that any particular order was canceled, shipped or refunded. Neither the waste-site search nor workers’ presence there resolves that distinction.</p>
          <p>A dated company statement about operations or an official case filing could clarify what the searches and temporary notice leave unanswered. The separate question of how laboratories evaluate another research supplier is covered in our <Link href="/compliant-research-peptide-supplier">supplier guide</Link>. Research products are not for human consumption.</p>
          <div className="mt-12 pt-8 border-t border-gray-200 space-y-5">
            <h2 className="text-lg font-semibold text-gray-900">Frequently Asked Questions</h2>
            {(jsonLd["@graph"][2] as { mainEntity: { name: string; acceptedAnswer: { text: string } }[] }).mainEntity.map(({ name, acceptedAnswer }) => (
              <div key={name}><h3 className="text-sm font-semibold text-gray-900 mb-1">{name}</h3><p className="text-sm text-gray-500">{acceptedAnswer.text}</p></div>
            ))}
          </div>
          <div className="mt-8 pt-6 border-t border-gray-200">
            <h2 className="text-base font-semibold text-gray-900 mb-4">Related Coverage</h2>
            <Link href="/apex-peptides-raided-what-researchers-need-to-know" className="text-blue-700 underline">Apex Peptides update: the detailed timeline and research supplier questions</Link>
          </div>
          <h2>Sources</h2>
          <ul className="list-disc pl-6"><li><a href="https://www.ktiv.com/2026/09/25/five-more-apex-tied-businesses-found-non-operational-building/">KTIV: September 23 searches</a></li><li><a href="https://www.kcau9.com/news/local-news/federal-investigators-remain-tight-lipped-after-wednesdays-raid">KCAU: September 24 website and workplace observations</a></li><li><a href="https://kscj.com/2026/09/24/federal-authorities-continue-apex-investigation">KSCJ: postal inspector comment</a></li></ul>
          <p>The documented sequence is a search at an Apex-linked waste property and a temporary notice on the peptide storefront the following day. The reports do not establish a permanent closure, an order outcome or a reason for the searches.</p>

          <IQONPartner vial="bac-water" text="IQON Labs offers products for laboratory research. Explore its catalog and confirm current product details and order terms directly before purchasing." />

          <p className="text-xs text-gray-400 pt-6 border-t border-gray-200 mt-4">Updated September 26, 2026. Sources linked above. For information only, not medical or legal advice. IQON Labs is a commercial partner. Research products are not for human consumption.</p>
        </div>
      </main>
      <Footer />
    </>
  );
}
