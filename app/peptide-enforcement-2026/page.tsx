import type { Metadata } from "next";
import { articleBreadcrumbSchema } from "@/components/articleBreadcrumbSchema";
import Link from "next/link";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { ArticleHero } from "@/components/ArticleHero";
import { IQONPartner } from "@/components/IQONPartner";

export const metadata: Metadata = {
  title: "2026 Peptide Enforcement: The Major Documented Actions",
  description: "Timeline of 2026 enforcement actions against research peptide suppliers: Peptide Sciences voluntary shutdown, Paradigm Peptides sentence, and Apex Peptides search reports.",
  alternates: { canonical: "https://peptidedigest.co/peptide-enforcement-2026" },
  openGraph: {
    title: "2026 Peptide Enforcement: The Major Documented Actions",
    description: "What the documented record shows for Peptide Sciences, Paradigm Peptides, and Apex Peptides — and where industry accounts remain unconfirmed.",
    type: "article",
    publishedTime: "2026-09-24T12:00:00.000Z",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    articleBreadcrumbSchema("Industry", "https://peptidedigest.co/peptide-enforcement-2026"),
    {
      "@type": "NewsArticle",
      "@id": "https://peptidedigest.co/peptide-enforcement-2026#article",
      headline: "2026 Peptide Enforcement: The Major Documented Actions",
      datePublished: "2026-09-24T12:00:00.000Z",
      dateModified: "2026-09-26T20:29:10.000Z",
      author: { "@type": "Organization", name: "The Peptide Digest", url: "https://peptidedigest.co" },
      publisher: { "@type": "NewsMediaOrganization", name: "The Peptide Digest", url: "https://peptidedigest.co" },
      mainEntityOfPage: { "@type": "WebPage", "@id": "https://peptidedigest.co/peptide-enforcement-2026" },
      keywords: "peptide enforcement 2026, Peptide Sciences shutdown, Amino Asylum raid, Apex Peptides raided, research peptide FDA",
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        { "@type": "Question", name: "What peptide companies closed or faced enforcement in 2026?", acceptedAnswer: { "@type": "Answer", text: "Peptide Sciences announced a voluntary shutdown in March 2026. Matthew Kawa of Paradigm Peptides was sentenced on July 30, 2026. Apex-linked properties were searched in September 2026, per local reporting." } },
        { "@type": "Question", name: "Was the Paradigm Peptides case a March 2026 prosecution?", acceptedAnswer: { "@type": "Answer", text: "No. The guilty pleas were in December 2025. Sentencing was July 30, 2026. The business operated between 2019 and 2024." } },
        { "@type": "Question", name: "What is the status of Amino Asylum?", acceptedAnswer: { "@type": "Answer", text: "Industry accounts place its shutdown in June 2025. This timeline has no primary government document establishing the specific alleged action against that company." } },
      ],
    },
  ],
};

const timeline = [
  { date: "December 2025", company: "Paradigm Peptides", action: "Kawa and Stechkober pleaded guilty. This is the start of the case chronology here, not a 2026 charge against Amino Asylum.", category: "Pleas", source: "https://www.justice.gov/usao-ndin/united-states-v-matthew-kawa" },
  { date: "March 2026", company: "Peptide Sciences", action: "The company announced it would discontinue research-product sales. Its notice described a voluntary closure, not a federal raid.", category: "Shutdown", source: "https://www.peptidesciences.com" },
  { date: "July 2026", company: "Paradigm Peptides", action: "Federal prosecutors reported Kawa's 70-month and Stechkober's 16-month sentences, plus restitution and a money judgment against Kawa.", category: "Sentence", source: "https://www.justice.gov/usao-ndin/pr/illinois-man-and-indiana-woman-sentenced-respectively-70-months-and-16-months-prison" },
  { date: "August 24, 2026", company: "FDA seller letters", action: "FDA issued warning letters citing website claims and research disclaimers. A warning letter is not a criminal conviction.", category: "Regulatory", source: "https://www.fda.gov/inspections-compliance-enforcement-and-criminal-investigations/warning-letters/peptide-partners-llc-735063-08242026" },
  { date: "September 23, 2026", company: "Apex-linked properties", action: "KTIV reported searches at a North Sioux City business property and a nearby home; its business-record review linked Apex Peptides to related entities. The reporting did not establish a charge against Apex Peptides.", category: "Raid", source: "https://www.ktiv.com/2026/09/25/five-more-apex-tied-businesses-found-non-operational-building/" },
];

const categoryColors: Record<string, string> = {
  Shutdown: "bg-red-50 text-red-700",
  Raid: "bg-orange-50 text-orange-700",
  Pleas: "bg-yellow-50 text-yellow-700",
  Sentence: "bg-red-50 text-red-700",
  Regulatory: "bg-blue-50 text-blue-700",
};

export default function EnforcementTimeline() {
  return (
    <>
      <Nav />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <main className="article-shell">
        <ArticleHero
          category="Industry"
          title={<>2026 Peptide Enforcement: The Major Documented Actions</>}
          dek={"Timeline of 2026 enforcement actions against research peptide suppliers: Peptide Sciences voluntary shutdown, Paradigm Peptides sentence, and Apex Peptides search reports."}
          meta={<><time dateTime="2026-09-24">September 24, 2026</time><span>Updated September 26, 2026</span></>}
          image="gavel"
        />

        <div className="article-body">
          <p className="text-lg text-gray-800 font-medium leading-relaxed">A 2026 peptide enforcement timeline can mislead if every supplier headline is treated as a raid. Paradigm Peptides reached federal sentencing in July; FDA issued warning letters in August; agents searched an Apex-linked property in September. Peptide Sciences announced a voluntary closure, not a government action. The events require different answers for buyers and researchers.</p>

          <IQONPartner vial="glutathione" variant="inline" />

          <h2 className="text-xl font-semibold text-gray-900 pt-4" style={{ fontFamily: "var(--font-lora), Georgia, serif" }}>
            Documented events
          </h2>

          <div className="my-6 space-y-4">
            {timeline.map((item, i) => (
              <div key={i} className="flex gap-4 p-4 rounded-lg border border-gray-200 bg-white">
                <div className="shrink-0 text-xs text-gray-400 w-36 pt-0.5">{item.date}</div>
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-sm font-semibold text-gray-900">{item.company}</span>
                    <span className={`text-[10px] font-semibold px-2 py-0.5 rounded-full ${categoryColors[item.category]}`}>{item.category}</span>
                  </div>
                  <p className="text-sm text-gray-500">{item.action}</p>
                  <a href={item.source} className="text-xs text-blue-700 underline mt-1 inline-block" target="_blank" rel="noopener noreferrer">Source →</a>
                </div>
              </div>
            ))}
          </div>

          <h2 className="text-xl font-semibold text-gray-900 pt-4" style={{ fontFamily: "var(--font-lora), Georgia, serif" }}>Two closures, two different customer records</h2>
          <p>Peptide Sciences&apos; <a href="https://www.peptidesciences.com" className="text-blue-700 underline">own notice</a> says it voluntarily stopped selling and warns that sites claiming to be successors lack authorization. That makes seller identity the immediate question for someone presented with a replacement storefront. Amino Asylum&apos;s reported June 2025 warehouse action is different: <a href="https://peptideexaminer.com/vendors/amino-asylum/" className="text-blue-700 underline">PeptideExaminer</a> describes it, but supplies no named agency or case document. Its date also puts it outside the 2026 sequence. Neither story provides an individual order ledger. (<Link href="/what-happened-to-peptide-sciences" className="text-blue-700 underline">Peptide Sciences</Link>; <Link href="/amino-asylum-raid-what-happened" className="text-blue-700 underline">Amino Asylum</Link>)</p>

          <h2 className="text-xl font-semibold text-gray-900 pt-4" style={{ fontFamily: "var(--font-lora), Georgia, serif" }}>A completed sentence versus an open response window</h2>
          <p>July brought a concluded criminal sentencing step for Paradigm: <a href="https://www.justice.gov/usao-ndin/pr/illinois-man-and-indiana-woman-sentenced-respectively-70-months-and-16-months-prison" className="text-blue-700 underline">DOJ reports</a> 70 months for Matthew Kawa and 16 for Jennifer Stechkober, plus $78,317.52 in restitution ordered for both and a separate $5 million money judgment against Kawa. A former Paradigm customer has a <a href="https://www.justice.gov/usao-ndin/united-states-v-matthew-kawa" className="text-blue-700 underline">case-specific victim-witness contact</a>. August&apos;s <a href="https://www.fda.gov/inspections-compliance-enforcement-and-criminal-investigations/warning-letters/peptide-partners-llc-735063-08242026" className="text-blue-700 underline">Peptide Partners warning letter</a> instead asks the named seller to answer FDA within 15 business days of receipt. Its website-claim examples show why a research-only label did not settle FDA&apos;s intended-use assessment; the notice does not provide a customer claims process. (<Link href="/paradigm-peptides-prison-sentence" className="text-blue-700 underline">Paradigm case</Link>; <Link href="/fda-warning-letters-peptide-sellers-august-2026" className="text-blue-700 underline">All five FDA letters</Link>)</p>

          <h2 className="text-xl font-semibold text-gray-900 pt-4" style={{ fontFamily: "var(--font-lora), Georgia, serif" }}>The Apex search leaves the biggest transaction gap</h2>
          <p>On September 23, agents searched 503 Prosperity Way, identified by <a href="https://www.ktiv.com/2026/09/25/five-more-apex-tied-businesses-found-non-operational-building/" className="text-blue-700 underline">KTIV</a> as an Apex Waste Management property, and a Dakota Dunes home. The station distinguished nearby 498 Prosperity Way in its business-record review. <a href="https://www.kcau9.com/news/local-news/federal-investigators-remain-tight-lipped-after-wednesdays-raid/" className="text-blue-700 underline">KCAU</a> reported a temporary closure notice on the Apex Peptides website the next day. Those reports do not identify an order-processing site or explain which peptide orders, if any, could be fulfilled. A dated company order update could answer that; a search report cannot. (<Link href="/apex-peptides-raided-what-researchers-need-to-know" className="text-blue-700 underline">Apex coverage</Link>)</p>

          <h2 className="text-xl font-semibold text-gray-900 pt-4" style={{ fontFamily: "var(--font-lora), Georgia, serif" }}>What can a disrupted buyer actually check?</h2>
          <p>For an interrupted laboratory purchase, first ask the original seller for written order status and check your payment provider&apos;s deadline. When considering another supplier, match the offered lot to its COA and verify the issuer if possible. The COA guide explains the limits of the measurements. IQON Health advertises here but gains no editorial certification from any of these events. (<Link href="/how-to-read-peptide-coa" className="text-blue-700 underline">Related article</Link>)</p>

          <div className="mt-12 pt-8 border-t border-gray-200 space-y-5">
            <h2 className="text-lg font-semibold text-gray-900" style={{ fontFamily: "var(--font-lora), Georgia, serif" }}>Frequently Asked Questions</h2>
            {[
              { q: "What peptide companies closed or faced enforcement in 2026?", a: "Peptide Sciences announced a voluntary shutdown in March 2026. Matthew Kawa of Paradigm Peptides was sentenced on July 30, 2026. Apex-linked properties were searched in September 2026, per local reporting." },
              { q: "Was the Paradigm Peptides case a March 2026 prosecution?", a: "No. The guilty pleas were in December 2025. Sentencing was July 30, 2026. The business operated between 2019 and 2024." },
              { q: "What is the status of Amino Asylum?", a: "Industry accounts place its shutdown in June 2025. This timeline has no primary government document establishing the specific alleged action against that company." },
            ].map(({ q, a }) => (
              <div key={q}>
                <h3 className="text-sm font-semibold text-gray-900 mb-1">{q}</h3>
                <p className="text-sm text-gray-500">{a}</p>
              </div>
            ))}
          </div>

          <p>Keep the timeline tied to the record that can answer your question: a case contact for Paradigm, a company notice for Peptide Sciences, and your seller/payment record for an unresolved Apex order. A dated Apex filing or company order update would change what this chronology can say.</p>

          <IQONPartner vial="glutathione" />

          <p className="text-xs text-gray-400 pt-6 border-t border-gray-200 mt-8">
            Updated September 26, 2026. Sources are linked in the timeline. For information only, not medical or legal advice. IQON Health is a paid commercial partner. Research products are not for human consumption.
          </p>
        </div>
      </main>
      <Footer />
    </>
  );
}
