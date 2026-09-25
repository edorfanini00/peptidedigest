import type { Metadata } from "next";
import Link from "next/link";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { ArticleHero } from "@/components/ArticleHero";
import { IQONPartner } from "@/components/IQONPartner";

const URL = "https://peptidedigest.co/state-crackdown-research-peptides-2026";
const TITLE = "Which States Are Cracking Down on Research-Grade Peptides in 2026?";
const DESCRIPTION =
  "Alabama, Mississippi and South Carolina medical boards told licensed providers in 2026 they may not use research-grade peptides with patients. Ohio's pharmacy board says clinics cannot possess them.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: URL },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: URL,
    type: "article",
    publishedTime: "2026-09-25T12:00:00.000Z",
  },
  twitter: { card: "summary", title: TITLE, description: DESCRIPTION },
};

const S = {
  albme: "https://www.albme.gov/press-release/board-issues-official-notice-concerning-the-prescribing-of-non-fda-approved-research-grade-peptides",
  wsfa: "https://www.wsfa.com/2026/05/26/warnings-issued-alabama-doctors-against-non-fda-approved-peptides-amid-social-media-popularity/",
  reuters: "https://whtc.com/2026/05/26/alabama-warns-healthcare-providers-against-use-of-non-fda-approved-peptides/",
  news1819: "https://1819news.com/news/item/medical-examiners-board-recent-warning-to-physicians-came-from-increased-interest-in-peptides",
  cullman: "https://www.cullmantribune.com/2025/11/10/marshall-files-suit-against-cullman-iv-clinic-for-allegedly-administering-unapproved-weight-loss-drugs/",
  msPdf: "https://www.msbn.ms.gov/sites/default/files/2026-08/1_Joint_Statement_SIGNED_Accessible_0.pdf",
  msPage: "https://www.msbml.ms.gov/peptide-statement",
  sc: "https://llr.sc.gov/med/news/BME%20Notice%20re%20Peptides.pdf",
  lumalex: "https://www.lumalexlaw.com/2026/09/03/what-mississippi-and-south-carolina-just-said-about-research-grade-peptides/",
  ohio: "https://www.pharmacy.ohio.gov/documents/pubs/special/ivtherapy/ten%20common%20prescriber%20clinic%20and%20medical%20spa%20violations.pdf",
  mcdermott: "https://www.mcdermottlaw.com/insights/federal-regulators-and-state-boards-crack-down-on-ruo-peptides/",
};

const faqs = [
  {
    q: "What did Alabama say about research-grade peptides?",
    a: "On May 26, 2026, the Alabama Board of Medical Examiners issued an official notice saying that under no circumstances may a physician compound, administer or dispense a non-FDA approved or research-grade peptide to a patient. The ban covers advising, recommending, supplying, prescribing and administering, and extends to nurse practitioners, nurse midwives and physician assistants.",
  },
  {
    q: "Is the Alabama notice a criminal charge?",
    a: "No. It is guidance from a licensing board that states how the board reads existing law. It does not charge anyone. The board separately told 1819 News that a physician assistant's license was suspended in March 2026 for distributing unapproved peptides.",
  },
  {
    q: "Which other states have issued similar warnings?",
    a: "Mississippi's medical, nursing and pharmacy boards issued a joint statement on August 19, 2026. The South Carolina Board of Medical Examiners published a similar notice in August 2026. Ohio's Board of Pharmacy guidance, updated December 8, 2025, says drugs labeled for research purposes only are unlawful for prescriber clinics and med spas to possess.",
  },
  {
    q: "Can a patient consent form get around these rules?",
    a: "No, according to the boards. Alabama and South Carolina call research-grade consent forms ineffective, and Mississippi says they do not mitigate or eliminate a provider's professional or legal liability.",
  },
  {
    q: "Do these notices apply to people who buy on their own?",
    a: "The Alabama, Mississippi and South Carolina notices say that when a patient independently acquires and self-administers such substances, the risk rests solely with the patient. The prohibition targets involvement by licensed medical professionals.",
  },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "NewsArticle",
      "@id": `${URL}#article`,
      headline: TITLE,
      description: DESCRIPTION,
      datePublished: "2026-09-25T12:00:00.000Z",
      dateModified: "2026-09-25T12:00:00.000Z",
      author: { "@type": "Organization", name: "The Peptide Digest", url: "https://peptidedigest.co" },
      publisher: { "@type": "NewsMediaOrganization", name: "The Peptide Digest", url: "https://peptidedigest.co" },
      mainEntityOfPage: { "@type": "WebPage", "@id": URL },
      keywords: "Alabama peptide notice, research-grade peptides state medical board, Mississippi joint statement peptides, South Carolina medical board peptides, Ohio board of pharmacy research use only",
      citation: Object.values(S),
    },
    {
      "@type": "FAQPage",
      mainEntity: faqs.map(({ q, a }) => ({ "@type": "Question", name: q, acceptedAnswer: { "@type": "Answer", text: a } })),
    },
  ],
};

const actions = [
  { date: "November 6, 2025", state: "Alabama", body: "Attorney General (civil suit)", type: "Court order", text: "Cullman County judge signs a temporary restraining order and asset freeze against a Cullman IV clinic accused of giving patients research-grade drugs. Civil case under the Deceptive Trade Practices Act; allegations, not findings.", source: S.cullman },
  { date: "December 8, 2025", state: "Ohio", body: "Board of Pharmacy", type: "Guidance", text: "Guidance update says drugs labeled \u201cfor research purposes only\u201d are unlawful for prescriber clinics and med spas to possess, regardless of patient consent.", source: S.ohio },
  { date: "March 2026", state: "Alabama", body: "Board of Medical Examiners", type: "License action", text: "A physician assistant's license was suspended for distributing unapproved peptides, a board spokesperson told 1819 News.", source: S.news1819 },
  { date: "May 26, 2026", state: "Alabama", body: "Board of Medical Examiners", type: "Notice", text: "Official notice bars physicians and the mid-level providers they supervise from advising, recommending, supplying, prescribing or administering research-grade peptides.", source: S.albme },
  { date: "August 19, 2026", state: "Mississippi", body: "Joint board statement", type: "Joint statement", text: "Three boards adopt near-identical language together and invite reports of unlicensed sellers shipping into the state.", source: S.msPdf },
  { date: "August 2026", state: "South Carolina", body: "Board of Medical Examiners", type: "Notice", text: "Notice says physicians may not use research-grade or FDA-ineligible peptides, and buying from unpermitted facilities may be disciplined as unprofessional conduct.", source: S.sc },
];

const typeColors: Record<string, string> = {
  Notice: "bg-blue-50 text-blue-700",
  "Joint statement": "bg-blue-50 text-blue-700",
  Guidance: "bg-blue-50 text-blue-700",
  "License action": "bg-orange-50 text-orange-700",
  "Court order": "bg-yellow-50 text-yellow-700",
};

const h2 = "text-xl font-semibold text-gray-900 pt-4";
const serif = { fontFamily: "var(--font-lora), Georgia, serif" };
const a = "text-blue-700 underline";

export default function StateCrackdown2026() {
  return (
    <>
      <Nav />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <main className="article-shell">
        <ArticleHero
          category="Regulatory"
          title={<>{TITLE}</>}
          dek={"Alabama, Mississippi and South Carolina medical boards told licensed providers in 2026 they may not use research-grade peptides with patients. Ohio's pharmacy board says clinics cannot possess them."}
          meta={<><time dateTime="2026-09-25">September 25, 2026</time></>}
          image="federalBuilding"
        />

        <div className="article-body">
          <p className="text-lg text-gray-800 font-medium leading-relaxed">
            Three state medical boards told licensed providers in 2026 that they may not give patients research-grade peptides. Alabama went first on May 26, 2026. Mississippi followed with a joint statement on August 19, 2026, and South Carolina issued its own notice in August. Ohio&apos;s pharmacy board had already said clinics cannot possess drugs labeled for research use only.
          </p>

          <div className="rounded-xl border border-gray-200 bg-white p-5">
            <h2 className="text-sm font-semibold uppercase tracking-widest text-gray-500 mb-3">Key facts</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Alabama&apos;s Board of Medical Examiners notice was reported on May 26, 2026 by <a className={a} href={S.wsfa} target="_blank" rel="noopener noreferrer">WSFA</a> and <a className={a} href={S.reuters} target="_blank" rel="noopener noreferrer">Reuters</a>.</li>
              <li>The <a className={a} href={S.albme} target="_blank" rel="noopener noreferrer">notice</a> covers advising, recommending, supplying, prescribing and administering.</li>
              <li>Consent forms naming a product &ldquo;research-grade&rdquo; are called ineffective in Alabama and <a className={a} href={S.sc} target="_blank" rel="noopener noreferrer">South Carolina</a>.</li>
              <li><a className={a} href={S.msPdf} target="_blank" rel="noopener noreferrer">Mississippi&apos;s joint statement</a> carries signatures from the executive directors of three state licensing boards, including the pharmacy board.</li>
              <li>These are board notices, not criminal charges. The one court action listed below is a civil case.</li>
            </ul>
          </div>

          <h2 className={h2} style={serif}>What did the Alabama board actually say?</h2>
          <p>
            The Alabama Board of Medical Examiners wrote that research-grade peptides &ldquo;have not been tested, reviewed, or determined to be safe or effective for human use,&rdquo; and that neither provider nor patient can verify the contents of the vials. Its central line: &ldquo;under no circumstances is it permissible for a physician to compound, administer, or dispense a non-FDA approved or research grade peptide to a patient.&rdquo; (<a className={a} href={S.albme} target="_blank" rel="noopener noreferrer">ALBME notice</a>)
          </p>
          <p>
            Physicians cannot hand the work to certified nurse midwives, nurse practitioners or physician assistants. The board says no research-grade peptide appears on any approved formulary for those roles. It also says a patient cannot &ldquo;waive&rdquo; the provider&apos;s duty of care, and that research-grade consent forms &ldquo;are ineffective.&rdquo; If a patient buys and uses such a product on their own, the notice says the risk rests with the patient.
          </p>
          <p>
            Wilson Hunter, the board&apos;s general counsel, told <a className={a} href={S.wsfa} target="_blank" rel="noopener noreferrer">WSFA</a> the board was &ldquo;seeing it at a level and frequency that required the board to act to speak quickly before it got too out of control.&rdquo; He said investigation details are confidential under state law.
          </p>

          <h2 className={h2} style={serif}>Has Alabama taken action against anyone?</h2>
          <p>
            Yes, though the actions differ in kind. A board spokesperson told <a className={a} href={S.news1819} target="_blank" rel="noopener noreferrer">1819 News</a> that a physician assistant&apos;s license was suspended in March 2026 for distributing unapproved peptides. The person was not named in that report. The spokesperson also said the notice was not issued in response to any specific reported injury.
          </p>
          <p>
            Separately, Attorney General Steve Marshall announced on November 10, 2025 that a Cullman County judge had granted a temporary restraining order and asset freeze against Aurora IV and Wellness, a Cullman clinic, according to the <a className={a} href={S.cullman} target="_blank" rel="noopener noreferrer">Cullman Tribune</a>. The complaint accuses the clinic of giving patients research-grade drugs &ldquo;without their knowledge or consent.&rdquo; This is a civil suit under the Deceptive Trade Practices Act. The claims are allegations, and the report does not describe a final ruling.
          </p>

          <h2 className={h2} style={serif}>Which other states have followed?</h2>
          <p>
            <strong>Mississippi.</strong> On August 19, 2026, the Mississippi State Board of Medical Licensure, Board of Nursing and Board of Pharmacy issued a <a className={a} href={S.msPdf} target="_blank" rel="noopener noreferrer">joint statement</a> (also posted on the <a className={a} href={S.msPage} target="_blank" rel="noopener noreferrer">MSBML site</a>). Its wording covers every healthcare provider, including physicians. It adds a reporting channel: entities shipping prescription products into Mississippi without a license can be reported to the pharmacy board.
          </p>
          <p>
            <strong>South Carolina.</strong> The South Carolina Board of Medical Examiners <a className={a} href={S.sc} target="_blank" rel="noopener noreferrer">notice</a> covers &ldquo;research-grade or FDA-ineligible peptides.&rdquo; It says a practitioner who buys from an unpermitted facility &ldquo;is aiding and abetting unlicensed practice&rdquo; and may be disciplined for unprofessional conduct. The PDF carries no date. Law firm <a className={a} href={S.lumalex} target="_blank" rel="noopener noreferrer">LumaLex</a> reports it was published in mid-August 2026, within about a day of Mississippi&apos;s statement.
          </p>
          <p>
            <strong>Ohio.</strong> The Ohio Board of Pharmacy&apos;s <a className={a} href={S.ohio} target="_blank" rel="noopener noreferrer">guidance on common clinic and med spa violations</a>, updated December 8, 2025, says any drug marked &ldquo;for research purposes only&rdquo; is unlawful for prescriber clinics and med spas to possess, &ldquo;regardless if the patient &lsquo;consents.&rsquo;&rdquo; It says such products must be disposed of immediately. The same document says the board has summarily suspended more than 30 clinics and med spas since the start of 2025, for a range of violations.
          </p>


          <IQONPartner vial="nad" variant="inline" />


          <h2 className={h2} style={serif}>How do the state actions compare?</h2>
          <div className="my-6 space-y-4">
            {actions.map((item) => (
              <div key={item.date + item.state} className="flex gap-4 p-4 rounded-lg border border-gray-200 bg-white">
                <div className="shrink-0 text-xs text-gray-400 w-32 pt-0.5">{item.date}</div>
                <div className="flex-1">
                  <div className="flex flex-wrap items-center gap-2 mb-1">
                    <span className="text-sm font-semibold text-gray-900">{item.state}</span>
                    <span className="text-xs text-gray-500">{item.body}</span>
                    <span className={`text-[10px] font-semibold px-2 py-0.5 rounded-full ${typeColors[item.type]}`}>{item.type}</span>
                  </div>
                  <p className="text-sm text-gray-500">{item.text}</p>
                  <a href={item.source} className="text-xs text-blue-700 underline mt-1 inline-block" target="_blank" rel="noopener noreferrer">Source →</a>
                </div>
              </div>
            ))}
          </div>

          <h2 className={h2} style={serif}>Does this change federal law?</h2>
          <p>
            No. These are state licensing and pharmacy rules. LumaLex attorney Dustin Robinson <a className={a} href={S.lumalex} target="_blank" rel="noopener noreferrer">argues</a> the boards &ldquo;did not create a new prohibition&rdquo; but restated existing standard-of-care duties. On the federal side, <a className={a} href={S.mcdermott} target="_blank" rel="noopener noreferrer">McDermott Will &amp; Schulte</a> notes that FDA sent warning letters to five online sellers in August 2026, and that an FDA advisory committee vote in July 2026 on compounding eligibility for six peptides was non-binding. <a className={a} href={S.reuters} target="_blank" rel="noopener noreferrer">Reuters</a> described that advisory meeting as a separate track.
          </p>

          <IQONPartner vial="glutathione" />

          <div className="mt-12 pt-8 border-t border-gray-200 space-y-5">
            <h2 className="text-lg font-semibold text-gray-900" style={serif}>Frequently Asked Questions</h2>
            {faqs.map(({ q, a: ans }) => (
              <div key={q}>
                <h3 className="text-sm font-semibold text-gray-900 mb-1">{q}</h3>
                <p className="text-sm text-gray-500">{ans}</p>
              </div>
            ))}
          </div>

          <div className="mt-10 pt-6 border-t border-gray-200">
            <h2 className="text-sm font-semibold text-gray-900 mb-3">Related coverage</h2>
            <ul className="space-y-2 text-sm">
              <li><Link href="/peptide-enforcement-2026" className="text-blue-700 underline">2026 Peptide Enforcement: The Major Documented Actions</Link></li>
              <li><Link href="/paradigm-peptides-prison-sentence" className="text-blue-700 underline">The Kawa sentencing: 70 months for RUO marketing</Link></li>
              <li><Link href="/what-happened-to-peptide-sciences" className="text-blue-700 underline">What happened to Peptide Sciences</Link></li>
            </ul>
          </div>

          <p className="text-xs text-gray-400 pt-6 border-t border-gray-200 mt-8">
            Published September 25, 2026. For information only, not medical or legal advice. Board notices describe regulators&apos; positions and are not court rulings. Research products are not for human consumption.
          </p>
        </div>
      </main>
      <Footer />
    </>
  );
}
