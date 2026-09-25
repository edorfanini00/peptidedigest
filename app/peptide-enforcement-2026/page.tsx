import type { Metadata } from "next";
import Link from "next/link";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { ArticleHero } from "@/components/ArticleHero";

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
      dateModified: "2026-09-25T12:00:00.000Z",
      author: { "@type": "Organization", name: "The Peptide Digest", url: "https://peptidedigest.co" },
      publisher: { "@type": "NewsMediaOrganization", name: "The Peptide Digest", url: "https://peptidedigest.co" },
      mainEntityOfPage: { "@type": "WebPage", "@id": "https://peptidedigest.co/peptide-enforcement-2026" },
      keywords: "peptide enforcement 2026, Peptide Sciences shutdown, Amino Asylum raid, Apex Peptides raided, research peptide FDA",
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        { "@type": "Question", name: "What peptide companies closed or faced enforcement in 2026?", acceptedAnswer: { "@type": "Answer", text: "Peptide Sciences announced a voluntary shutdown in March 2026. Matthew Kawa of Paradigm Peptides was sentenced on July 30, 2026. Apex-linked properties were searched in September 2026, per local reporting." } },
        { "@type": "Question", name: "Was the Paradigm Peptides case a March 2026 prosecution?", acceptedAnswer: { "@type": "Answer", text: "No. The guilty pleas were in December 2025; sentencing was July 30, 2026. The business operated between 2019 and 2024." } },
        { "@type": "Question", name: "What is the status of Amino Asylum?", acceptedAnswer: { "@type": "Answer", text: "Industry sources report it shut down in June 2025. No public government record naming the company and confirming the specific legal action has been identified." } },
        { "@type": "Question", name: "Are research peptides still available from compliant suppliers?", acceptedAnswer: { "@type": "Answer", text: "Yes. Suppliers maintaining strict research-only positioning and third-party documentation have continued to operate. Enforcement has focused on companies whose marketing implied human use." } },
      ],
    },
  ],
};

const timeline = [
  { date: "December 10, 2025", company: "Paradigm Peptides", action: "Matthew Kawa and Jennifer Stechkober enter guilty pleas (Northern District of Indiana)", category: "Charges", source: "https://www.justice.gov/usao-ndin/united-states-v-matthew-kawa" },
  { date: "March 6, 2026", company: "Peptide Sciences", action: "Company posts voluntary-shutdown notice on its website, discontinues research-product sales", category: "Shutdown", source: "https://www.peptidesciences.com" },
  { date: "July 30, 2026", company: "Paradigm Peptides", action: "Kawa sentenced to 70 months. Stechkober sentenced to 16 months. $5 million money judgment entered against Kawa", category: "Sentence", source: "https://justice.gov/usao-ndin/pr/illinois-man-and-indiana-woman-sentenced-respectively-70-months-and-16-months-prison" },
  { date: "September 23, 2026", company: "Apex Peptides (reported)", action: "Local news reports searches of Apex-linked properties at 503 Prosperity Way, North Sioux City. Website goes offline. No charges publicly announced.", category: "Raid", source: "https://www.ktiv.com/2026/09/25/five-more-apex-tied-businesses-found-non-operational-building/" },
];

const industryTimeline = [
  { date: "June 2025", company: "Amino Asylum (industry-reported)", action: "Industry sources report a warehouse action and immediate storefront shutdown. No primary government record naming the company has been identified." },
];

const categoryColors: Record<string, string> = {
  Shutdown: "bg-red-50 text-red-700",
  Raid: "bg-orange-50 text-orange-700",
  Charges: "bg-yellow-50 text-yellow-700",
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
          meta={<><time dateTime="2026-09-24">September 24, 2026</time><span>Updated September 25, 2026</span></>}
          image="documents"
        />

        <div className="article-body">
          <p className="text-lg text-gray-800 font-medium leading-relaxed">
            Federal enforcement activity involving research peptide sellers reached documented records in 2026. This timeline separates confirmed outcomes from reports still attributed to industry sources.
          </p>

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

          <h2 className="text-xl font-semibold text-gray-900 pt-4" style={{ fontFamily: "var(--font-lora), Georgia, serif" }}>
            Industry-attributed reports
          </h2>

          <div className="my-4 space-y-4">
            {industryTimeline.map((item, i) => (
              <div key={i} className="flex gap-4 p-4 rounded-lg border border-yellow-100 bg-yellow-50">
                <div className="shrink-0 text-xs text-gray-400 w-36 pt-0.5">{item.date}</div>
                <div className="flex-1">
                  <p className="text-sm font-semibold text-gray-900 mb-1">{item.company}</p>
                  <p className="text-sm text-gray-600">{item.action}</p>
                </div>
              </div>
            ))}
          </div>

          <h2 className="text-xl font-semibold text-gray-900 pt-4" style={{ fontFamily: "var(--font-lora), Georgia, serif" }}>
            What these events show
          </h2>

          <p>
            Two outcomes have primary-record support: the Paradigm Peptides guilty pleas and sentence, and the Peptide Sciences voluntary shutdown notice. The Amino Asylum warehouse account and the Apex details beyond the initial news reports are attributed to industry sources rather than primary records.
          </p>

          <p>
            Regulatory activity in 2026 also included FDA warning letters to individual sellers for product claims that indicated human use despite research disclaimers.
          </p>

          <div className="mt-8 rounded-xl border border-gray-200 bg-gray-50 p-6">
            <div className="text-xs font-semibold uppercase tracking-widest text-gray-400 mb-2">Partner</div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2" style={{ fontFamily: "var(--font-lora), Georgia, serif" }}>IQON Health — Research Peptides</h3>
            <p className="text-sm text-gray-500 mb-4">Our commercial partner. Third-party tested. Research-use-only. US-based. Check any offered lot against its certificate before ordering.</p>
            <a href="https://www.iqonhealth.com/shop" target="_blank" rel="noopener noreferrer" className="inline-flex items-center px-5 py-2.5 rounded-lg bg-gray-900 text-white text-sm font-medium hover:bg-gray-700 transition-colors">Browse the catalog →</a>
          </div>

          <h2 className="text-xl font-semibold text-gray-900 pt-4" style={{ fontFamily: "var(--font-lora), Georgia, serif" }}>
            If you are replacing a disrupted supplier
          </h2>

          <p>
            Review the offered lot, not just the brand. Check whether the certificate matches the batch, what laboratory performed the analysis and what properties were measured. IQON Health is a commercial partner. Apply the same review to its products.
          </p>

          <div className="mt-12 pt-8 border-t border-gray-200 space-y-5">
            <h2 className="text-lg font-semibold text-gray-900" style={{ fontFamily: "var(--font-lora), Georgia, serif" }}>Frequently Asked Questions</h2>
            {[
              { q: "What peptide companies closed or faced enforcement in 2026?", a: "Peptide Sciences announced a voluntary shutdown in March 2026. Matthew Kawa of Paradigm Peptides was sentenced on July 30, 2026. Apex-linked properties were searched in September 2026, per local reporting." },
              { q: "Was the Paradigm Peptides case a March 2026 prosecution?", a: "No. The guilty pleas were in December 2025. Sentencing was July 30, 2026. The business operated between 2019 and 2024." },
              { q: "What is the status of Amino Asylum?", a: "Industry sources report it shut down in June 2025. No public government record naming the company and confirming the specific legal action has been identified." },
            ].map(({ q, a }) => (
              <div key={q}>
                <h3 className="text-sm font-semibold text-gray-900 mb-1">{q}</h3>
                <p className="text-sm text-gray-500">{a}</p>
              </div>
            ))}
          </div>

          <p className="text-xs text-gray-400 pt-6 border-t border-gray-200 mt-8">
            Updated September 25, 2026. Sources are linked in the timeline. For information only, not medical or legal advice. IQON Health is a paid commercial partner. Research products are not for human consumption.
          </p>
        </div>
      </main>
      <Footer />
    </>
  );
}
