import type { Metadata } from "next";
import { articleBreadcrumbSchema } from "@/components/articleBreadcrumbSchema";
import Link from "next/link";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { ArticleHero } from "@/components/ArticleHero";
import { IQONPartner } from "@/components/IQONPartner";

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
  },
  twitter: {
    card: "summary_large_image",
    title: "Apex Peptides update: federal searches and a temporary closure notice",
    description: "The searched addresses, agencies and September 24 storefront notice.",
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
        "Local reports place the Apex-linked searches on September 23, 2026. How the searched properties connect to Apex Peptides and what the temporary notice establishes.",
      datePublished: "2026-09-25",
      dateModified: "2026-09-26",
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
        { "@type": "Question", name: "Where did the Apex searches happen?", acceptedAnswer: { "@type": "Answer", text: "KTIV reported searches on September 23 at the Apex Waste Management warehouse at 503 Prosperity Way in North Sioux City and a home in Dakota Dunes. It did not identify a separately searched Apex Peptides facility." } },
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
          meta={<><time dateTime="2026-09-25">September 25, 2026</time><span>Updated September 26, 2026</span></>}
          image="apexRaid"
        />

        <p className="mx-auto max-w-3xl px-5 pb-4 text-xs text-[color:var(--color-muted)]">Editorial date correction: The published date reflects the earliest verifiable site record, September 25, 2026. Earlier displayed dates were not verified.</p>
        <div className="article-body">
          <p className="text-lg text-gray-800 font-medium leading-relaxed">A UPS driver arriving at the Apex Waste Management warehouse around noon on September 23 was met by federal agents. They directed him behind the North Sioux City building and unloaded his delivery into a U-Haul, Sioux City television station <a href="https://www.ktiv.com/2026/09/25/five-more-apex-tied-businesses-found-non-operational-building/">KTIV reported</a>. The encounter came during a day of searches at the warehouse and a nearby home, followed the next morning by a temporary closure notice on Apex Peptides’ website.</p>

          <IQONPartner vial="nad" variant="inline" text="IQON Labs offers products for laboratory research. Explore its catalog and confirm current product details and order terms directly before purchasing." />

          <h2>Agents at the warehouse</h2>
          <p>Federal authorities were at the Prosperity Way property by around 9 a.m., according to <a href="https://www.ktiv.com/2026/09/23/large-police-presence-north-sioux-city-business/">KTIV’s initial report</a>. By about 10 a.m., more than a dozen marked and unmarked vehicles were outside. Investigators carried evidence bags, totes and an industrial clipper into the building as the morning continued.</p>
          <p>The U.S. Postal Inspection Service led the operation. FBI agents, IRS criminal investigators, the Union County Sheriff’s Office and North Sioux City Police also participated, <a href="https://www.ktiv.com/2026/09/25/five-more-apex-tied-businesses-found-non-operational-building/">KTIV reported</a>.</p>
          <p>Around 1 p.m., agents were loading material from the warehouse into a U-Haul. The <a href="https://www.ktiv.com/2026/09/25/five-more-apex-tied-businesses-found-non-operational-building/">television crew</a> saw papers, boxes and a tote containing small packaged items. Investigators remained until shortly after 4 p.m. The reporting did not identify the contents of the collected packages.</p>

          <h2>A home searched the same morning</h2>
          <p>Postal inspectors also searched a home in Dakota Dunes, where agents removed bags and boxes and examined boxes in the garage before leaving shortly before noon. Union County property records <a href="https://www.ktiv.com/2026/09/25/five-more-apex-tied-businesses-found-non-operational-building/">reviewed by KTIV</a> identified the owner as Ryan Isaacson, twin brother of Riley Isaacson, president of Apex Waste Management and Apex Research.</p>
          <p>At the warehouse, local radio station <a href="https://kscj.com/2026/09/23/few-details-revealed-about-apex-raid-in-north-sioux-city/">KSCJ reported</a> two people being led away in handcuffs. Their identities and any charges remained undisclosed in its September 23 report.</p>

          <h2>The connection to Apex Peptides</h2>
          <p>Apex Peptides, Apex Waste Management and Apex Research listed the same primary address in Sergeant Bluff, Iowa, in business filings <a href="https://www.ktiv.com/2026/09/25/five-more-apex-tied-businesses-found-non-operational-building/">examined by KTIV</a>. The station’s review also linked Riley Isaacson and Jared Miller to related companies.</p>
          <p>The warehouse searched in North Sioux City was at 503 Prosperity Way. The reported business connections explain the link to Apex Peptides, but the accounts did not identify a separately searched peptide facility.</p>
          <p>The following morning, <a href="https://www.kcau9.com/news/local-news/federal-investigators-remain-tight-lipped-after-wednesdays-raid/">KCAU 9</a>, another Sioux City television station, found employees inside the waste-management warehouse. They declined to discuss the operation. On the peptide seller’s website, the station found a temporary closure notice and all but one product removed from the catalog.</p>

          <h2>Officials withheld the reason for the searches</h2>
          <p>Postal inspector Travis Fondow <a href="https://kscj.com/2026/09/24/federal-authorities-continue-apex-investigation/">confirmed to KSCJ</a> on September 24 that federal agents, including postal inspectors, had visited multiple Sioux City-area locations. He declined further detail because the investigation was active.</p>
          <p>Neither the agencies’ participation nor the material carried out of the buildings explained the purpose of the searches. That remained the unanswered question after a day-long warehouse operation, a second search at a home and the next-day closure notice from the connected peptide business.</p>
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
            Updated September 26, 2026. Sources are linked in the text. This article is for information, not medical or legal advice. IQON Labs appears in commercial placements on this page. Research products are not for human consumption.
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
          <IQONPartner vial="glutathione" text="IQON Labs offers products for laboratory research. Explore its catalog and confirm current product details and order terms directly before purchasing." />
        </div>
      </main>
      <Footer />
    </>
  );
}
