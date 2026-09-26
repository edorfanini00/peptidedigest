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
    "Local reports place the Apex-linked searches on September 23, 2026. How the searched properties connect to Apex Peptides and what the temporary notice establishes.",
  alternates: {
    canonical: "https://peptidedigest.co/apex-peptides-raided-what-researchers-need-to-know",
  },
  openGraph: {
    title: "Apex Peptides update: federal searches and a temporary closure notice",
    description:
      "Federal agents searched Apex-linked properties on September 23, 2026. The searched addresses, participating agencies and September 24 storefront notice.",
    type: "article",
    publishedTime: "2026-09-24T12:00:00.000Z",
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
        { "@type": "Question", name: "Is Apex Peptides permanently closed?", acceptedAnswer: { "@type": "Answer", text: "KCAU reported that the Apex Peptides website displayed a temporary-closure notice on September 24. The notice does not announce a permanent closure." } },
        { "@type": "Question", name: "Why were the Apex properties searched?", acceptedAnswer: { "@type": "Answer", text: "The cited reports do not disclose the reason for the searches or identify charges arising from them." } },
        { "@type": "Question", name: "Was the nearby unfinished building searched?", acceptedAnswer: { "@type": "Answer", text: "KTIV identified five related business registrations at a nearby unfinished building. It did not report a search of that building." } },
        { "@type": "Question", name: "What is known about Apex Peptides orders after the searches?", acceptedAnswer: { "@type": "Answer", text: "The cited reports do not include an order ledger or a company announcement establishing whether existing orders shipped, were canceled or were refunded." } },
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
          meta={<><time dateTime="2026-09-24">September 24, 2026</time><span>Updated September 26, 2026</span></>}
          image="apexRaid"
        />

        <div className="article-body">
          <p className="text-lg text-gray-800 font-medium leading-relaxed">Federal agents searched the Apex Waste Management property at 503 Prosperity Way in North Sioux City on September 23, 2026. The next day, KCAU found a temporary-closure notice on Apex Peptides&apos; website. The searched waste property and the peptide website are distinct parts of the story.</p>

          <IQONPartner vial="nad" variant="inline" text="IQON Labs offers products for laboratory research. Explore its catalog and confirm current product details and order terms directly before purchasing." />

          <KeyFacts items={[
            "September 23: Agents searched a North Sioux City Apex-linked property and a Dakota Dunes home.",
            "KTIV identifies the U.S. Postal Inspection Service as the lead, alongside the FBI, IRS Criminal Investigation and local agencies.",
            "September 24: Workers were at Apex Waste Management; KCAU observed a temporary-closure notice on the Apex Peptides website.",
            "The cited reports do not explain the searches or identify charges arising from them; permanent closure is not established.",
          ]} />

          <h2>What happened on September 23?</h2>
          <p>KTIV&apos;s crew saw agents arrive at 503 Prosperity Way around 10 a.m., carry collection equipment inside and load a trailer before leaving after 4 p.m. It also reported a search at a Dakota Dunes home. KTIV saw boxes, papers and packaged items but said authorities had not identified what was taken. (<a href="https://www.ktiv.com/2026/09/25/five-more-apex-tied-businesses-found-non-operational-building/">KTIV</a>)</p>
          <p>The U.S. Postal Inspection Service led the operation; the FBI, IRS Criminal Investigation and local officers participated. Postal inspector Travis Fondow told KSCJ that agents were at multiple locations and declined further details while the investigation was active. Their presence does not identify a suspected offense. (<a href="https://kscj.com/2026/09/24/federal-authorities-continue-apex-investigation/">KSCJ</a>)</p>
          <p>KSCJ reported that two people were seen led away in handcuffs. It said their identities and any charges had not been revealed as of Wednesday night. That account does not establish whether charges were later filed. (<a href="https://kscj.com/2026/09/23/few-details-revealed-about-apex-raid-in-north-sioux-city/">KSCJ</a>)</p>

          <h2>How is Apex Peptides connected to the properties?</h2>
          <p>The addresses explain why &apos;Apex Peptides raided&apos; is an imprecise shorthand. The search was at the waste-management property; a <a href="https://www.ktiv.com/2026/09/25/five-more-apex-tied-businesses-found-non-operational-building/">business-filing review</a> lists Apex Peptides, Apex Waste Management and Apex Research with a primary address in Sergeant Bluff, Iowa. Five related registrations pointed to 498 Prosperity Way, a nearby unfinished building; KTIV did not report a search of that building.</p>
          <p>The filings connect the companies. They do not place investigators inside a separately identified Apex Peptides facility. A search at 503 should not be described as a documented search of the peptide facility.</p>

          <h2>What changed on September 24?</h2>
          <p>KCAU found employees inside Apex Waste Management on September 24. On the peptide website, it saw a temporary-closure notice with all but one product removed. Workers at the waste business declined to discuss Wednesday&apos;s activities with KCAU. The workers’ presence at the waste company does not describe operations at the peptide storefront. (<a href="https://www.kcau9.com/news/local-news/federal-investigators-remain-tight-lipped-after-wednesdays-raid/">KCAU</a>)</p>
          <p>KTIV also reported unanswered calls and a delivery driver who struggled to reach the waste property before completing a delivery when an Isaacson brother arrived. Those details describe access to that property that morning, not the operating status of the peptide storefront.</p>

          <h2>What would change the account?</h2>
          <p>The September 24 site observation is not a companywide operational statement or a record of individual orders. A dated company update could establish what happened to the storefront after the notice; an official filing could identify the purpose of the searches. The reported business registrations alone do neither.</p>
          <p>Our separate <Link href="/compliant-research-peptide-supplier">research supplier guide</Link> covers evaluation of other sellers; it is not evidence about Apex’s operations. Research products are not for human consumption.</p>

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
            Updated September 26, 2026. Sources are linked in the text. This article is for information, not medical or legal advice. IQON Labs is a commercial partner. Research products are not for human consumption.
          </p>
        </div>

        <div className="mt-14 pt-10 border-t border-gray-200">
          <h2 className="text-lg font-semibold text-gray-900 mb-6" style={{ fontFamily: "var(--font-lora), Georgia, serif" }}>
            Related Coverage
          </h2>
          <div className="space-y-5">
            {[
              { slug: "what-happened-to-apex-peptides", category: "Industry", title: "What Happened to Apex Peptides? Searches and Closure Questions", date: "September 24, 2026" },
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
