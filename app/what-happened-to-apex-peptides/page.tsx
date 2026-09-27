import type { Metadata } from "next";
import { articleBreadcrumbSchema } from "@/components/articleBreadcrumbSchema";
import Link from "next/link";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { ArticleHero } from "@/components/ArticleHero";
import { images } from "@/components/images";
import { IQONPartner } from "@/components/IQONPartner";

const hero = images.apexWarehouse;
const heroUrl = `https://peptidedigest.co${hero.src}`;

export const metadata: Metadata = {
  title: "What Happened to Apex Peptides? Searches and Closure Questions",
  description:
    "What happened to Apex Peptides: September 23 searches, reported FBI involvement and the temporary closure notice reported the next day.",
  alternates: { canonical: "https://peptidedigest.co/what-happened-to-apex-peptides" },
  openGraph: {
    title: "What Happened to Apex Peptides?",
    description: "Federal agents searched Apex-linked properties on September 23, 2026. KCAU reported a temporary-closure notice on the peptide storefront the next day.",
    type: "article",
    publishedTime: "2026-09-25",
    images: [{ url: heroUrl, width: hero.width, height: hero.height, alt: hero.alt }],
  },
  twitter: {
    card: "summary_large_image",
    title: "What Happened to Apex Peptides?",
    description: "September 23 searches, reported FBI involvement and KCAU's September 24 report of a temporary-closure notice.",
    images: [{ url: heroUrl, alt: hero.alt }],
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
      image: { "@type": "ImageObject", url: heroUrl, width: hero.width, height: hero.height },
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
        { "@type": "Question", name: "Where did the searches take place?", acceptedAnswer: { "@type": "Answer", text: "KTIV identified the Apex Waste Management warehouse at 503 Prosperity Way in North Sioux City and a home in Dakota Dunes. KCAU counted three searched properties but did not name a third in its report; none of these reports identified a separately searched Apex Peptides facility." } },
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
          <p className="text-lg text-gray-800 font-medium leading-relaxed">Apex Peptides’ website carried a temporary closure notice and just one listed product when Sioux City television station <a href="https://www.kcau9.com/news/local-news/federal-investigators-remain-tight-lipped-after-wednesdays-raid/">KCAU 9 reported on it September 24</a>. Federal agents had searched an Apex Waste Management warehouse and a Dakota Dunes home the day before. Business filings <a href="https://www.ktiv.com/2026/09/25/five-more-apex-tied-businesses-found-non-operational-building/">reviewed by KTIV</a> list the same primary Sergeant Bluff address for Apex Peptides and Apex Waste Management, explaining why the warehouse search enters the storefront story.</p>

          <IQONPartner vial="glutathione" variant="inline" text="IQON Labs offers products for laboratory research. Explore its catalog and confirm current product details and order terms directly before purchasing." />

          <h2>Why a waste warehouse appears in the peptide story</h2>
          <p>The searched warehouse stood at 503 Prosperity Way in North Sioux City, South Dakota, not at the shared primary address in Sergeant Bluff, Iowa. KTIV’s <a href="https://www.ktiv.com/2026/09/25/five-more-apex-tied-businesses-found-non-operational-building/">filing review</a> also lists Apex Research at that Sergeant Bluff address and identifies Riley Isaacson as president of the waste-management and research businesses. Property records reviewed by the station identify the owner of the searched Dakota Dunes home as his twin brother, Ryan. A shared filing address connects business names; it does not identify what investigators sought at either property.</p>
          <p>At the warehouse, agents carried out papers, boxes and a tote of small packaged items. Postal inspectors removed bags and boxes from the home. KCAU <a href="https://www.kcau9.com/news/local-news/federal-investigators-remain-tight-lipped-after-wednesdays-raid/">described the warehouse as one of three searched properties</a>; the local accounts identify the warehouse and home, but do not name a third property or a separately searched Apex Peptides facility.</p>

          <h2>What officials said</h2>
          <p>The U.S. Postal Inspection Service led the searches, with the FBI, IRS criminal investigators and local law enforcement participating, <a href="https://www.ktiv.com/2026/09/25/five-more-apex-tied-businesses-found-non-operational-building/">KTIV reported</a>. Postal inspector Travis Fondow <a href="https://kscj.com/2026/09/24/federal-authorities-continue-apex-investigation/">told local radio station KSCJ</a> that agents had visited multiple Sioux City-area locations; he declined to elaborate while the investigation was active.</p>

          <h2>Workers returned; the storefront still showed a notice</h2>
          <p>On September 24, KCAU visited the waste-management warehouse in the morning and found employees back inside. They declined to discuss the search. In the same day’s report, <a href="https://www.kcau9.com/news/local-news/federal-investigators-remain-tight-lipped-after-wednesdays-raid/">KCAU described</a> a temporary closure notice on Apex Peptides’ website and a catalog reduced to one product. The report does not say when the notice first appeared.</p>
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
