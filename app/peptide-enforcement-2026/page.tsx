import type { Metadata } from "next";
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

          <h2 className="text-xl font-semibold text-gray-900 pt-4" style={{ fontFamily: "var(--font-lora), Georgia, serif" }}>Why a closure is not a raid</h2>
          <p>Peptide Sciences said it stopped selling research products and warned against unauthorized successor sites. It did not say DOJ closed it. The consequence for an old customer is an order and identity question, not a criminal-case outcome: establish who held the purchase and whether a purported replacement is really connected to the original company. (<Link href="/what-happened-to-peptide-sciences" className="text-blue-700 underline">Related article</Link>)</p>

          <h2 className="text-xl font-semibold text-gray-900 pt-4" style={{ fontFamily: "var(--font-lora), Georgia, serif" }}>What the Paradigm court outcome establishes</h2>
          <p>Paradigm is the criminal case in this group. Matthew Kawa and Jennifer Stechkober pleaded guilty in December 2025 and were sentenced in July 2026 to 70 and 16 months respectively, according to DOJ. The release also describes false testing and FDA-approval representations. Those findings belong to the named business and defendants, not another seller whose products look similar. (<a href="https://www.justice.gov/usao-ndin/pr/illinois-man-and-indiana-woman-sentenced-respectively-70-months-and-16-months-prison" className="text-blue-700 underline">DOJ</a>)</p>

          <h2 className="text-xl font-semibold text-gray-900 pt-4" style={{ fontFamily: "var(--font-lora), Georgia, serif" }}>What FDA&apos;s August letters add</h2>
          <p>FDA&apos;s August letter to Peptide Partners offers a different test: the agency compared research-only disclaimers with the seller&apos;s product claims and accompanying items and alleged unapproved-drug marketing. The addressee had an opportunity to respond. The letter is not a plea, sentence or blanket judgment about every research catalog; the five recipients and examples appear in our warning-letter report. (<a href="https://www.fda.gov/inspections-compliance-enforcement-and-criminal-investigations/warning-letters/peptide-partners-llc-735063-08242026" className="text-blue-700 underline">FDA</a>, <Link href="/fda-warning-letters-peptide-sellers-august-2026" className="text-blue-700 underline">Related article</Link>)</p>

          <h2 className="text-xl font-semibold text-gray-900 pt-4" style={{ fontFamily: "var(--font-lora), Georgia, serif" }}>What the Apex search does not establish</h2>
          <p>On September 23, agents searched 503 Prosperity Way, identified in local reporting as an Apex Waste Management property, and a Dakota Dunes home. KTIV traced related business filings and distinguished a nearby unfinished building at 498 Prosperity Way. KCAU saw a temporary notice on the Apex Peptides website the next day. Neither report states why the searches occurred or supplies an order-by-order update. (<a href="https://www.ktiv.com/2026/09/25/five-more-apex-tied-businesses-found-non-operational-building/" className="text-blue-700 underline">KTIV</a>, <Link href="/apex-peptides-raided-what-researchers-need-to-know" className="text-blue-700 underline">Related article</Link>)</p>

          <h2 className="text-xl font-semibold text-gray-900 pt-4" style={{ fontFamily: "var(--font-lora), Georgia, serif" }}>Where does Amino Asylum fit?</h2>
          <p>A June 2025 Amino Asylum warehouse claim predates this timeline. PeptideExaminer reported it, but no agency document identifying the company, searched premises and action is linked in that account. Paradigm&apos;s pleas do not close that gap; our Amino Asylum report explains the limited attribution. (<Link href="/amino-asylum-raid-what-happened" className="text-blue-700 underline">Related article</Link>)</p>

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

          <p>The timeline&apos;s most consequential difference is procedural: Paradigm has sentenced defendants; FDA&apos;s five sellers received notices; Apex remains a reported search and temporary website notice. A future filing may change the Apex entry, while a company order update could answer questions no enforcement headline can.</p>

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
