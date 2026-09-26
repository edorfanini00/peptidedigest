import type { Metadata } from "next";
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
          <p className="text-lg text-gray-800 font-medium leading-relaxed">
            Federal agents searched Apex-linked properties on September 23, 2026, but the property and the peptide storefront are not interchangeable. KTIV reported activity at 503 Prosperity Way and a Dakota Dunes home; business filings connect Apex Peptides to the group. The cited reports do not establish a separate search of an Apex Peptides facility or disclose the reason for the searches.
          </p>

          <IQONPartner vial="nad" variant="inline" text="IQON Health offers products for laboratory research. Explore its catalog and confirm current product details and order terms directly before purchasing." />

          <KeyFacts items={[
            "September 23: Agents searched a North Sioux City Apex-linked property and a Dakota Dunes home, according to KTIV.",
            "KTIV identifies the U.S. Postal Inspection Service as the lead, alongside the FBI, IRS Criminal Investigation and local agencies.",
            "September 24: KCAU found workers at Apex Waste Management and reported a temporary-closure notice on the Apex Peptides website.",
            "The cited reports do not explain the searches or identify charges arising from them; permanent closure is not established.",
          ]} />

          <h2>What happened on September 23?</h2>
          <p><a href="https://www.ktiv.com/2026/09/25/five-more-apex-tied-businesses-found-non-operational-building/">KTIV placed reporters at 503 Prosperity Way</a> in North Sioux City around 10 a.m. Its crew saw investigators bring collection equipment inside and load a trailer; agents left after 4 p.m. KTIV also reported a search at a Dakota Dunes home that morning. It could see boxes, papers and a tote of packaged items but said authorities had not identified what was taken. Appearance cannot establish the contents of evidence or the suspected offense.</p>
          <p>KTIV identified the U.S. Postal Inspection Service as leading, with the FBI, IRS Criminal Investigation and local officers present. Postal inspector Travis Fondow <a href="https://kscj.com/2026/09/24/federal-authorities-continue-apex-investigation/">confirmed to KSCJ</a> that agents, including postal inspectors, were at multiple locations; he declined details because the investigation was active. The agencies&apos; presence tells us who participated, not what investigators believe happened.</p>
          <p><a href="https://kscj.com/2026/09/23/few-details-revealed-about-apex-raid-in-north-sioux-city/">KSCJ</a> and <a href="https://www.kcau9.com/news/local-news/irs-criminal-investigation-seen-at-north-sioux-city-business/">KCAU</a> reported two unidentified people escorted in handcuffs. KCAU explicitly did not know whether charges had been filed. Neither account establishes their identities, an arrest or a conviction.</p>

          <h2>How is Apex Peptides connected to the properties?</h2>
          <p><a href="https://www.ktiv.com/2026/09/25/five-more-apex-tied-businesses-found-non-operational-building/">KTIV&apos;s filing review</a> distinguishes the searched waste-management address from Apex Peptides: its reporting lists several businesses at 503 Prosperity Way, while Apex Peptides, Apex Waste Management and Apex Research list a primary address in Sergeant Bluff, Iowa. It also found five registrations at 498 Prosperity Way, an unfinished building nearby; KTIV did not report a search there. Common names and filings are a connection, not evidence that every location or each business was searched.</p>
          <p>That distinction matters when a headline says &quot;Apex Peptides raided.&quot; The search is documented at an Apex-linked property, and the peptide storefront is connected through business records. The reports reviewed here do not identify an independently searched Apex Peptides facility.</p>

          <h2>What changed on September 24?</h2>
          <p><a href="https://www.kcau9.com/news/local-news/federal-investigators-remain-tight-lipped-after-wednesdays-raid/">KCAU spoke to a worker</a> at Apex Waste Management the next morning. It separately observed a temporary-closure notice on the Apex Peptides site, with all but one product removed. A person working at one business cannot verify order fulfillment at another. Equally, a temporary notice is evidence of what the site displayed when KCAU checked, not a permanent shutdown determination or a present-day status check.</p>
          <p>The contrast with KTIV&apos;s report that operations did not appear normal is less contradictory than it sounds: a worker was present, while KTIV&apos;s attempted calls went unanswered and a driver had difficulty making a delivery. Neither observation tracks peptide purchases. An official statement or dated order-specific response would answer more than either scene can.</p>

          <h2>What if you have an outstanding order?</h2>
          <p>Preserve the receipt, order number, payment record and messages. Request a written fulfillment or refund update from the seller, and check the payment provider&apos;s applicable dispute deadline. The reporting offers no basis to promise a refund or describe the status of any individual order.</p>
          <p>For a laboratory replacement, compare the exact offered lot with your protocol and ask for its batch-specific documentation, the seller&apos;s identity and current terms. A different supplier&apos;s product is not automatically interchangeable; research products are not for human consumption.</p>
          <p>The next meaningful update would be a dated company statement on orders or an official filing explaining the investigation. Neither the search alone nor the temporary notice resolves those questions.</p>

          <div className="mt-14 pt-10 border-t border-gray-200">
            <h2 className="text-xl font-semibold text-gray-900 mb-6">Frequently Asked Questions</h2>
            <div className="space-y-6">
              {(articleJsonLd["@graph"][1] as { mainEntity: { name: string; acceptedAnswer: { text: string } }[] }).mainEntity.map(({ name, acceptedAnswer }) => (
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
