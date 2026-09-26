import type { Metadata } from "next";
import { articleBreadcrumbSchema } from "@/components/articleBreadcrumbSchema";
import Link from "next/link";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { ArticleHero } from "@/components/ArticleHero";
import { IQONPartner } from "@/components/IQONPartner";

export const metadata: Metadata = {
  title: "2026 Peptide Enforcement: The Major Documented Actions",
  description: "Timeline of documented 2026 peptide enforcement actions, including the Paradigm Peptides sentence and Apex-linked searches, with separate context on the undated Peptide Sciences shutdown notice.",
  alternates: { canonical: "https://peptidedigest.co/peptide-enforcement-2026" },
  openGraph: {
    title: "2026 Peptide Enforcement: The Major Documented Actions",
    description: "What the dated record shows for Paradigm Peptides and Apex-linked searches, plus separate context on the undated Peptide Sciences notice.",
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
        { "@type": "Question", name: "Which peptide enforcement actions are documented in 2026, and what does Peptide Sciences say?", acceptedAnswer: { "@type": "Answer", text: "Matthew Kawa of Paradigm Peptides was sentenced on July 30, 2026. Apex-linked properties were searched in September 2026, per local reporting. Separately, Peptide Sciences announced a voluntary shutdown in an undated company notice; its closure cannot be placed in the 2026 chronology." } },
        { "@type": "Question", name: "Was the Paradigm Peptides case a March 2026 prosecution?", acceptedAnswer: { "@type": "Answer", text: "No. The guilty pleas were in December 2025. Sentencing was July 30, 2026. The business operated between 2019 and 2024." } },
        { "@type": "Question", name: "What is the status of Amino Asylum?", acceptedAnswer: { "@type": "Answer", text: "Industry accounts place its shutdown in June 2025. This timeline has no primary government document establishing the specific alleged action against that company." } },
      ],
    },
  ],
};

const timeline = [
  { date: "December 2025", company: "Paradigm Peptides", action: "Kawa and Stechkober pleaded guilty. This is the start of the case chronology here, not a 2026 charge against Amino Asylum.", category: "Pleas", source: "https://www.justice.gov/usao-ndin/united-states-v-matthew-kawa" },
  { date: "July 2026", company: "Paradigm Peptides", action: "Kawa received a 70-month sentence and Stechkober a 16-month sentence, plus restitution and a money judgment against Kawa.", category: "Sentence", source: "https://www.justice.gov/usao-ndin/pr/illinois-man-and-indiana-woman-sentenced-respectively-70-months-and-16-months-prison" },
  { date: "August 24, 2026", company: "FDA seller letters", action: "FDA issued warning letters citing website claims and research disclaimers. A warning letter is not a criminal conviction.", category: "Regulatory", source: "https://www.fda.gov/inspections-compliance-enforcement-and-criminal-investigations/warning-letters/peptide-partners-llc-735063-08242026" },
  { date: "September 23, 2026", company: "Apex-linked properties", action: "Agents searched a North Sioux City business property and a nearby home; a business-record review linked Apex Peptides to related entities. No charge against Apex Peptides is established by the cited account.", category: "Raid", source: "https://www.ktiv.com/2026/09/25/five-more-apex-tied-businesses-found-non-operational-building/" },
];

const categoryColors: Record<string, string> = {
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
          dek={"Timeline of documented 2026 peptide enforcement actions, including the Paradigm Peptides sentence and Apex-linked searches, with separate context on the undated Peptide Sciences shutdown notice."}
          meta={<><time dateTime="2026-09-24">September 24, 2026</time><span>Updated September 26, 2026</span></>}
          image="gavel"
        />

        <div className="article-body">
          <p className="text-lg text-gray-800 font-medium leading-relaxed">A 2026 peptide enforcement timeline can mislead if every supplier headline is treated as a raid. Paradigm Peptides reached federal sentencing in July; FDA issued warning letters in August; agents searched an Apex-linked property in September. Separately, Peptide Sciences has an undated voluntary-closure notice, not a documented 2026 enforcement action. The legal stages and their evidence should not be collapsed into one crackdown.</p>

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

          <h2 className="text-xl font-semibold text-gray-900 pt-4" style={{ fontFamily: "var(--font-lora), Georgia, serif" }}>Undated supplier notice outside the timeline</h2>
          <p>Peptide Sciences&apos; <a href="https://www.peptidesciences.com" className="text-blue-700 underline">own notice</a> says it voluntarily stopped selling and warns that sites claiming to be successors lack authorization. The notice gives no date, so it cannot establish a 2026 closure. Its warning about unauthorized successors is a distinct company claim, not an enforcement finding. Amino Asylum&apos;s reported June 2025 warehouse action is different: <a href="https://peptideexaminer.com/vendors/amino-asylum/" className="text-blue-700 underline">PeptideExaminer</a> describes it, but supplies no named agency or case document. Its date also puts it outside the 2026 sequence. Neither account establishes a 2026 government action against the named seller. (<Link href="/what-happened-to-peptide-sciences" className="text-blue-700 underline">Peptide Sciences</Link>; <Link href="/amino-asylum-raid-what-happened" className="text-blue-700 underline">Amino Asylum</Link>)</p>

          <h2 className="text-xl font-semibold text-gray-900 pt-4" style={{ fontFamily: "var(--font-lora), Georgia, serif" }}>A completed sentence versus an open response window</h2>
          <p>July brought a concluded criminal sentencing step for Paradigm: Matthew Kawa received 70 months and Jennifer Stechkober 16. The <a href="https://www.justice.gov/usao-ndin/pr/illinois-man-and-indiana-woman-sentenced-respectively-70-months-and-16-months-prison" className="text-blue-700 underline">DOJ sentencing release</a> also lists $78,317.52 in restitution ordered for both and a separate $5 million money judgment against Kawa. August&apos;s <a href="https://www.fda.gov/inspections-compliance-enforcement-and-criminal-investigations/warning-letters/peptide-partners-llc-735063-08242026" className="text-blue-700 underline">Peptide Partners warning letter</a> instead asks the named seller to answer FDA within 15 business days of receipt. Its website-claim examples show why a research-only label did not settle FDA&apos;s intended-use assessment. (<Link href="/paradigm-peptides-prison-sentence" className="text-blue-700 underline">Paradigm case</Link>; <Link href="/fda-warning-letters-peptide-sellers-august-2026" className="text-blue-700 underline">All five FDA letters</Link>)</p>

          <h2 className="text-xl font-semibold text-gray-900 pt-4" style={{ fontFamily: "var(--font-lora), Georgia, serif" }}>The Apex search and the separate storefront notice</h2>
          <p>On September 23, agents searched 503 Prosperity Way, identified by <a href="https://www.ktiv.com/2026/09/25/five-more-apex-tied-businesses-found-non-operational-building/" className="text-blue-700 underline">KTIV</a> as an Apex Waste Management property, and a Dakota Dunes home. The station distinguished nearby 498 Prosperity Way in its business-record review. <a href="https://www.kcau9.com/news/local-news/federal-investigators-remain-tight-lipped-after-wednesdays-raid/" className="text-blue-700 underline">KCAU</a> reported a temporary closure notice on the Apex Peptides website the next day. The waste property search cannot establish a separate search of a peptide facility. The website notice documents the storefront on September 24, not a permanent closure. (<Link href="/apex-peptides-raided-what-researchers-need-to-know" className="text-blue-700 underline">Apex coverage</Link>)</p>

          <h2 className="text-xl font-semibold text-gray-900 pt-4" style={{ fontFamily: "var(--font-lora), Georgia, serif" }}>Why the stages cannot be combined</h2>
          <p>A sentence follows guilty pleas in a criminal case. A warning letter states FDA&apos;s position and invites a response from its recipient; it is not a conviction. The Apex search is an investigative event without a disclosed purpose in the cited reports. The Peptide Sciences notice describes a voluntary company decision without a date. None proves an allegation against another seller. IQON Labs advertises here but gains no editorial certification from these events. (<Link href="/how-to-read-peptide-coa" className="text-blue-700 underline">Separate guide to laboratory documentation</Link>)</p>

          <div className="mt-12 pt-8 border-t border-gray-200 space-y-5">
            <h2 className="text-lg font-semibold text-gray-900" style={{ fontFamily: "var(--font-lora), Georgia, serif" }}>Frequently Asked Questions</h2>
            {[
              { q: "Which peptide enforcement actions are documented in 2026, and what does Peptide Sciences say?", a: "Matthew Kawa of Paradigm Peptides was sentenced on July 30, 2026. Apex-linked properties were searched in September 2026, per local reporting. Separately, Peptide Sciences announced a voluntary shutdown in an undated company notice; its closure cannot be placed in the 2026 chronology." },
              { q: "Was the Paradigm Peptides case a March 2026 prosecution?", a: "No. The guilty pleas were in December 2025. Sentencing was July 30, 2026. The business operated between 2019 and 2024." },
              { q: "What is the status of Amino Asylum?", a: "Industry accounts place its shutdown in June 2025. This timeline has no primary government document establishing the specific alleged action against that company." },
            ].map(({ q, a }) => (
              <div key={q}>
                <h3 className="text-sm font-semibold text-gray-900 mb-1">{q}</h3>
                <p className="text-sm text-gray-500">{a}</p>
              </div>
            ))}
          </div>

          <p>The next record to watch differs by event: a court docket for Paradigm, a response or further agency action for the FDA letters, and an official filing or dated company statement for Apex. Peptide Sciences’ undated notice belongs outside the 2026 enforcement chronology.</p>

          <IQONPartner vial="glutathione" />

          <p className="text-xs text-gray-400 pt-6 border-t border-gray-200 mt-8">
            Updated September 26, 2026. Sources are linked in the timeline. For information only, not medical or legal advice. IQON Labs is a paid commercial partner. Research products are not for human consumption.
          </p>
        </div>
      </main>
      <Footer />
    </>
  );
}
