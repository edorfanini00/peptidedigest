import type { Metadata } from "next";
import { articleBreadcrumbSchema } from "@/components/articleBreadcrumbSchema";
import Link from "next/link";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { ArticleHero } from "@/components/ArticleHero";
import { images } from "@/components/images";
import { IQONPartner } from "@/components/IQONPartner";

const hero = images.apexRaid;
const heroUrl = `https://peptidedigest.co${hero.src}`;

export const metadata: Metadata = {
  title: "Apex Peptides update: federal searches and a temporary closure notice",
  description:
    "Local reports place the Apex-linked searches on September 23, 2026. How the searched properties connect to Apex Peptides and what the temporary notice establishes.",
  alternates: {
    canonical: "https://peptidedigest.co/apex-peptides-raided-what-researchers-need-to-know",
  },
  openGraph: {
    title: "Apex Peptides update: federal searches and a temporary closure notice",
    description:
      "Federal agents searched Apex-linked properties on September 23, 2026. The searched addresses, participating agencies and September 24 storefront notice.",
    type: "article",
    publishedTime: "2026-09-25",
    authors: ["The Peptide Digest"],
    tags: ["Apex Peptides", "peptide industry", "federal investigation", "research peptides"],
    images: [{ url: heroUrl, width: hero.width, height: hero.height, alt: hero.alt }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Apex Peptides update: federal searches and a temporary closure notice",
    description: "The searched addresses, agencies and September 24 storefront notice.",
    images: [{ url: heroUrl, alt: hero.alt }],
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
      image: { "@type": "ImageObject", url: heroUrl, width: hero.width, height: hero.height },
      description:
        "Local reports place the Apex-linked searches on September 23, 2026. How the searched properties connect to Apex Peptides and what the temporary notice establishes.",
      datePublished: "2026-09-25",
      dateModified: "2026-09-29",
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
        { "@type": "Question", name: "Where did the Apex searches happen?", acceptedAnswer: { "@type": "Answer", text: "KTIV identified the Apex Waste Management warehouse at 503 Prosperity Way in North Sioux City and a home in Dakota Dunes. KCAU counted three properties searched on September 23 but did not identify the third in its report. Neither report identified a separately searched Apex Peptides facility." } },
        { "@type": "Question", name: "Was the FBI involved?", acceptedAnswer: { "@type": "Answer", text: "Yes. KTIV reported that the FBI participated alongside the lead U.S. Postal Inspection Service, IRS criminal investigators and local law enforcement." } },
        { "@type": "Question", name: "Who was led away in handcuffs?", acceptedAnswer: { "@type": "Answer", text: "KSCJ reported that two people were led away at the warehouse. Their identities and any charges were not disclosed in its September 23 report." } },
        { "@type": "Question", name: "Why were the properties searched?", acceptedAnswer: { "@type": "Answer", text: "Authorities did not explain the reason in the cited September 23 and 24 reports. Postal inspector Travis Fondow declined further details while the investigation was active." } },
        { "@type": "Question", name: "Did Apex Peptides permanently close?", acceptedAnswer: { "@type": "Answer", text: "KCAU found a temporary closure notice on its website on September 24, with all but one product removed. The notice did not announce a permanent closure." } },
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
          dek={"Local reports place the Apex-linked searches on September 23, 2026. How the searched properties connect to Apex Peptides and what the temporary notice establishes."}
          meta={<><time dateTime="2026-09-25">September 25, 2026</time><span>Updated September 29, 2026</span></>}
          image="apexRaid"
        />

        <p className="mx-auto max-w-3xl px-5 pb-4 text-xs text-[color:var(--color-muted)]">Editorial date correction: The published date reflects the earliest verifiable site record, September 25, 2026. Earlier displayed dates were not verified.</p>
        <div className="article-body">
          <p className="text-lg text-gray-800 font-medium leading-relaxed">Federal agents searched an Apex Waste Management warehouse in North Sioux City and a Dakota Dunes home on September 23. <a href="https://www.ktiv.com/2026/09/25/five-more-apex-tied-businesses-found-non-operational-building/">Business filings reviewed by Sioux City television station KTIV</a> list the same primary Sergeant Bluff address for Apex Waste Management and Apex Peptides. The next day, <a href="https://www.kcau9.com/news/local-news/federal-investigators-remain-tight-lipped-after-wednesdays-raid/">KCAU reported</a> a temporary closure notice on Apex Peptides’ website; its report does not establish when the notice first appeared.</p>

          <IQONPartner vial="nad" />

          <h2>Agents at the warehouse</h2>
          <p>Federal authorities were at the Prosperity Way property by around 9 a.m., according to <a href="https://www.ktiv.com/2026/09/23/large-police-presence-north-sioux-city-business/">KTIV’s initial report</a>. By about 10 a.m., more than a dozen marked and unmarked vehicles were outside. Investigators carried evidence bags, totes and an industrial clipper into the building as the morning continued.</p>
          <p>Around noon, a UPS driver arrived at the warehouse. Agents directed him behind the building and unloaded the delivery into a U-Haul, <a href="https://www.ktiv.com/2026/09/25/five-more-apex-tied-businesses-found-non-operational-building/">KTIV reported</a>. The station did not identify what was in that delivery.</p>
          <p>Around 1 p.m., agents were loading material from the warehouse into a U-Haul. The <a href="https://www.ktiv.com/2026/09/25/five-more-apex-tied-businesses-found-non-operational-building/">television crew</a> saw papers, boxes and a tote containing small packaged items. Investigators remained until shortly after 4 p.m.</p>

          <h2>The Dakota Dunes home</h2>
          <p>Postal inspectors also searched a home in Dakota Dunes, where agents removed bags and boxes and examined boxes in the garage before leaving shortly before noon. Union County property records <a href="https://www.ktiv.com/2026/09/25/five-more-apex-tied-businesses-found-non-operational-building/">reviewed by KTIV</a> identified the owner as Ryan Isaacson, twin brother of Riley Isaacson, president of Apex Waste Management and Apex Research.</p>
          <p>At the warehouse, local radio station <a href="https://kscj.com/2026/09/23/few-details-revealed-about-apex-raid-in-north-sioux-city/">KSCJ reported</a> two people being led away in handcuffs. Their identities and any charges remained undisclosed in its September 23 report.</p>

          <h2>The connection to Apex Peptides</h2>
          <p>Apex Peptides, Apex Waste Management and Apex Research listed the same primary address in Sergeant Bluff, Iowa, in business filings <a href="https://www.ktiv.com/2026/09/25/five-more-apex-tied-businesses-found-non-operational-building/">examined by KTIV</a>. The station’s review also linked Riley Isaacson and Jared Miller to related companies.</p>
          <p>The searched warehouse was at 503 Prosperity Way, not at the shared Sergeant Bluff primary address. <a href="https://www.kcau9.com/news/local-news/federal-investigators-remain-tight-lipped-after-wednesdays-raid/">KCAU counted three searched properties</a>; the warehouse and home are the two identified here, and the reports do not identify a separately searched peptide facility.</p>
          <h2>Officials withheld the reason for the searches</h2>
          <p>The U.S. Postal Inspection Service led the operation. FBI agents, IRS criminal investigators, the Union County Sheriff’s Office and North Sioux City Police also participated, <a href="https://www.ktiv.com/2026/09/25/five-more-apex-tied-businesses-found-non-operational-building/">KTIV reported</a>.</p>
          <p>Postal inspector Travis Fondow <a href="https://kscj.com/2026/09/24/federal-authorities-continue-apex-investigation/">confirmed to KSCJ</a> on September 24 that federal agents, including postal inspectors, had visited multiple Sioux City-area locations. He declined further detail because the investigation was active.</p>
          <p>The daylong search at the waste-management warehouse ended shortly after 4 p.m. on September 23. When <a href="https://www.kcau9.com/news/local-news/federal-investigators-remain-tight-lipped-after-wednesdays-raid/">KCAU 9</a>, another Sioux City television station, visited the warehouse the next morning, employees were back inside and declined to discuss the operation. In its September 24 report, KCAU described a temporary closure notice on the website of Apex Peptides, the business linked to Apex Waste Management by the shared primary filing address, with all but one product removed. The report did not say when the notice first appeared.</p>
          <h2>Latest: what has changed since the search</h2>
          <p><strong>Updated September 29, 2026.</strong> Six days after the search, no charges have been announced and no court filing naming Apex Peptides or the Isaacson brothers has been made public. The Postal Inspection Service and FBI have not released anything beyond the postal inspector’s September 24 statement.</p>
          <ul>
            <li><strong>Five more Apex companies registered nearby.</strong> A <a href="https://www.ktiv.com/2026/09/25/five-more-apex-tied-businesses-found-non-operational-building/">KTIV review of state filings</a> found five newer LLCs listing 498 Prosperity Way, near the searched warehouse: ApexRx Holdings (April 20, 2026), Apex Health Club (August 25), Apex Health Club Holdings (August 26), ApexTH&amp;I (September 9) and Apex HC (September 15). Filings list Ryan Isaacson, Riley Isaacson and Jared Miller as organizers. KTIV said that building is still under construction and does not appear to be operating.</li>
            <li><strong>About two dozen Apex businesses.</strong> <a href="https://www.kcau9.com/news/local-news/federal-investigators-remain-tight-lipped-after-wednesdays-raid/">KCAU found</a> roughly two dozen South Dakota businesses associated with the Apex name, including Apex Peptides. KTIV reported that Apex Waste Management LLC was registered on December 4, 2025, less than a year before the search.</li>
            <li><strong>Where the agents came from.</strong> The postal inspectors on scene were based in Minneapolis. FBI agents came from the Omaha and Minneapolis field offices, <a href="https://www.ktiv.com/2026/09/25/five-more-apex-tied-businesses-found-non-operational-building/">KTIV reported</a>.</li>
            <li><strong>No comment from the family.</strong> KTIV saw one of the Isaacson twins at the 498 Prosperity Way property on the morning of September 24, carrying a suitcase and a duffel bag. Asked why the properties were searched, he said “No comment.” Calls to phone numbers linked to the Apex businesses went unanswered.</li>
            <li><strong>Apex Peptides’ website.</strong> On September 24, KCAU described a temporary closure notice with all but one product removed. When The Peptide Digest checked apex-peptides.com on September 29, the site showed only an account login page, with no catalog visible.</li>
          </ul>
          <p>A search warrant is not a charge. None of the people or companies named here has been accused of a crime in any public filing. We will update this article if prosecutors file charges or officials release details.</p>

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
            Updated September 29, 2026. Sources are linked in the text. This article is for information, not medical or legal advice. IQON Labs appears in commercial placements on this page. Research products are not for human consumption.
          </p>
        </div>

        <div className="mt-14 pt-10 border-t border-gray-200">
          <h2 className="text-lg font-semibold text-gray-900 mb-6" style={{ fontFamily: "var(--font-lora), Georgia, serif" }}>
            Related Coverage
          </h2>
          <div className="space-y-5">
            {[
              { slug: "what-happened-to-apex-peptides", category: "Industry", title: "What Happened to Apex Peptides? Searches and Closure Questions", date: "September 25, 2026" },
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
          <IQONPartner vial="glutathione" />
        </div>
      </main>
      <Footer />
    </>
  );
}
