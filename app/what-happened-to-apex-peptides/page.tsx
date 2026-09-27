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
    "What happened to Apex Peptides: September 23, 2026 searches, reported FBI involvement, what the temporary closure notice does and does not establish.",
  alternates: { canonical: "https://peptidedigest.co/what-happened-to-apex-peptides" },
  openGraph: {
    title: "What Happened to Apex Peptides?",
    description: "Federal agents searched Apex-linked properties on September 23, 2026. The peptide storefront displayed a temporary-closure notice the next day; permanent closure is unconfirmed.",
    type: "article",
    publishedTime: "2026-09-25",
  },
  twitter: {
    card: "summary_large_image",
    title: "What Happened to Apex Peptides?",
    description: "September 23 searches, reported FBI involvement and the September 24 temporary-closure notice.",
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
      datePublished: "2026-09-25",
      dateModified: "2026-09-26",
      author: { "@type": "Organization", name: "The Peptide Digest", url: "https://peptidedigest.co" },
      publisher: { "@type": "NewsMediaOrganization", name: "The Peptide Digest", url: "https://peptidedigest.co" },
      mainEntityOfPage: { "@type": "WebPage", "@id": "https://peptidedigest.co/what-happened-to-apex-peptides" },
      about: [{ "@type": "Thing", name: "Apex Peptides" }, { "@type": "Thing", name: "US Postal Inspection Service" }],
      keywords: "what happened to apex peptides, apex peptides raided, apex peptides shut down, apex peptides FBI, apex peptides alternative",
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        { "@type": "Question", name: "What happened to Apex Peptides?", acceptedAnswer: { "@type": "Answer", text: "After September 23, 2026 searches at an Apex Waste Management warehouse and a Dakota Dunes home, KCAU saw a temporary closure notice and only one product on Apex Peptides’ website on September 24." } },
        { "@type": "Question", name: "Is Apex Peptides permanently closed?", acceptedAnswer: { "@type": "Answer", text: "The website notice observed by KCAU on September 24 described a temporary closure. It did not announce a permanent shutdown or give a reopening date." } },
        { "@type": "Question", name: "Where did the searches take place?", acceptedAnswer: { "@type": "Answer", text: "KTIV reported searches at the Apex Waste Management warehouse at 503 Prosperity Way in North Sioux City and a home in Dakota Dunes. It did not identify a separate Apex Peptides facility as searched." } },
        { "@type": "Question", name: "Which agencies participated?", acceptedAnswer: { "@type": "Answer", text: "KTIV reported that the U.S. Postal Inspection Service led the operation, with the FBI, IRS Criminal Investigation, Union County Sheriff’s Office and North Sioux City Police participating." } },
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
          meta={<><time dateTime="2026-09-25">September 25, 2026</time><span>Updated September 26, 2026</span></>}
          image="apexWarehouse"
        />

        <p className="mx-auto max-w-3xl px-5 pb-4 text-xs text-[color:var(--color-muted)]">Editorial date correction: The published date reflects the earliest verifiable site record, September 25, 2026. Earlier displayed dates were not verified.</p>
        <div className="article-body">
          <p className="text-lg text-gray-800 font-medium leading-relaxed">Apex Peptides’ website carried a temporary closure notice and an almost empty catalog on September 24, a day after federal agents searched a warehouse and a home connected to the wider Apex business network. Only one product remained listed when Sioux City television station <a href="https://www.kcau9.com/news/local-news/federal-investigators-remain-tight-lipped-after-wednesdays-raid/">KCAU 9 checked the site</a>.</p>

          <IQONPartner vial="glutathione" variant="inline" text="IQON Labs offers products for laboratory research. Explore its catalog and confirm current product details and order terms directly before purchasing." />

          <h2>A warehouse search and a second operation nearby</h2>
          <p>The warehouse was Apex Waste Management’s property on Prosperity Way in North Sioux City, South Dakota. Investigators spent much of September 23 there, carrying out papers, boxes and a tote of small packaged items. At a home in nearby Dakota Dunes, postal inspectors removed bags and boxes before leaving shortly before noon. (<a href="https://www.ktiv.com/2026/09/25/five-more-apex-tied-businesses-found-non-operational-building/">KTIV</a>)</p>
          <p>Business filings reviewed by Sioux City television station <a href="https://www.ktiv.com/2026/09/25/five-more-apex-tied-businesses-found-non-operational-building/">KTIV</a> linked Apex Peptides, Apex Waste Management and Apex Research through a shared primary address in Sergeant Bluff, Iowa. The station identified Riley Isaacson as president of the waste-management and research businesses. The searched Dakota Dunes home belonged to his twin brother, Ryan, according to property records the station reviewed.</p>
          <p>The reported searches took place at the waste-management warehouse and the home. The accounts did not identify a separate Apex Peptides facility among the searched locations.</p>

          <h2>What investigators took away</h2>
          <p>The operation continued through the afternoon. Around noon, agents intercepted a UPS delivery at the warehouse and unloaded it into a U-Haul, <a href="https://www.ktiv.com/2026/09/25/five-more-apex-tied-businesses-found-non-operational-building/">KTIV reported</a>. Later, the station’s crew watched material being loaded from the building. Investigators left shortly after 4 p.m.; the contents of the packages and boxes were not publicly identified in the reporting.</p>
          <p>Local radio station <a href="https://kscj.com/2026/09/23/few-details-revealed-about-apex-raid-in-north-sioux-city/">KSCJ reported</a> that two people were led away in handcuffs at the warehouse. Their identities and any charges had not been disclosed as of that evening.</p>

          <h2>The next morning</h2>
          <p>Employees were back inside the waste-management warehouse on September 24 but declined to discuss the search with <a href="https://www.kcau9.com/news/local-news/federal-investigators-remain-tight-lipped-after-wednesdays-raid/">KCAU</a>. On Apex Peptides’ website, the temporary closure notice offered no reopening date in the station’s account.</p>
          <p>The U.S. Postal Inspection Service led the operation, with the FBI, IRS criminal investigators and local law enforcement participating, <a href="https://www.ktiv.com/2026/09/25/five-more-apex-tied-businesses-found-non-operational-building/">KTIV reported</a>. Postal inspector Travis Fondow <a href="https://kscj.com/2026/09/24/federal-authorities-continue-apex-investigation/">told KSCJ</a> that federal agents had been at multiple locations in the Sioux City area. He declined to provide further details while the investigation was active.</p>
          <p>By the end of the next day, the public picture included material removed from two properties, two unidentified people led away in handcuffs and a peptide storefront announcing a temporary closure. Authorities had not explained the reason for the searches in those reports, and the website notice did not announce a permanent shutdown.</p>
          <div className="mt-12 pt-8 border-t border-gray-200 space-y-5">
            <h2 className="text-lg font-semibold text-gray-900">Frequently Asked Questions</h2>
            {(jsonLd["@graph"][2] as { mainEntity: { name: string; acceptedAnswer: { text: string } }[] }).mainEntity.map(({ name, acceptedAnswer }) => (
              <div key={name}><h3 className="text-sm font-semibold text-gray-900 mb-1">{name}</h3><p className="text-sm text-gray-500">{acceptedAnswer.text}</p></div>
            ))}
          </div>
          <div className="mt-8 pt-6 border-t border-gray-200">
            <h2 className="text-base font-semibold text-gray-900 mb-4">Related Coverage</h2>
            <Link href="/apex-peptides-raided-what-researchers-need-to-know" className="text-blue-700 underline">Apex Peptides update: the search timeline and business addresses</Link>
          </div>

          <h2>Sources</h2>
          <ul className="list-disc pl-6"><li><a href="https://www.ktiv.com/2026/09/25/five-more-apex-tied-businesses-found-non-operational-building/">KTIV: September 23 searches</a></li><li><a href="https://www.kcau9.com/news/local-news/federal-investigators-remain-tight-lipped-after-wednesdays-raid">KCAU: September 24 website and workplace observations</a></li><li><a href="https://kscj.com/2026/09/24/federal-authorities-continue-apex-investigation">KSCJ: postal inspector comment</a></li></ul>

          <IQONPartner vial="bac-water" text="IQON Labs offers products for laboratory research. Explore its catalog and confirm current product details and order terms directly before purchasing." />

          <p className="text-xs text-gray-400 pt-6 border-t border-gray-200 mt-4">Updated September 26, 2026. Sources linked above. For information only, not medical or legal advice. IQON Labs appears in commercial placements on this page. Research products are not for human consumption.</p>
        </div>
      </main>
      <Footer />
    </>
  );
}
