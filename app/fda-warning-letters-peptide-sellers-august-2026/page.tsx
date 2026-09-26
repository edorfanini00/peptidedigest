import type { Metadata } from "next";
import Link from "next/link";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { ArticleHero } from "@/components/ArticleHero";
import { IQONPartner } from "@/components/IQONPartner";

const URL = "https://peptidedigest.co/fda-warning-letters-peptide-sellers-august-2026";
const TITLE = "FDA's August 24, 2026 Warning Letters to Online Peptide Sellers";
const DESC =
  "On August 24, 2026, FDA sent warning letters to five online peptide sellers, including Peptide Partners LLC and Royal Peptides LLC. Here is what the letters say about research use only labels.";

const SRC = {
  partners: "https://www.fda.gov/inspections-compliance-enforcement-and-criminal-investigations/warning-letters/peptide-partners-llc-735063-08242026",
  royal: "https://www.fda.gov/inspections-compliance-enforcement-and-criminal-investigations/warning-letters/royal-peptides-llc-734884-08242026",
  tex: "https://www.fda.gov/inspections-compliance-enforcement-and-criminal-investigations/warning-letters/txp-innovations-llc-dba-tex-peptides-735067-08242026",
  nuscience: "https://www.fda.gov/inspections-compliance-enforcement-and-criminal-investigations/warning-letters/nuscience-peptides-llc-733652-08242026",
  peak: "https://www.fda.gov/inspections-compliance-enforcement-and-criminal-investigations/warning-letters/peak-performance-peptides-735127-08242026",
  afs: "https://www.afslaw.com/perspectives/alerts/ruo-ined-five-peptide-vendors-learn-research-use-only-not-legal-strategy",
};

export const metadata: Metadata = {
  title: TITLE,
  description: DESC,
  alternates: { canonical: URL },
  openGraph: { title: TITLE, description: DESC, type: "article", url: URL, publishedTime: "2026-09-25T12:00:00.000Z" },
  twitter: { card: "summary", title: TITLE, description: DESC },
};

const faqs = [
  {
    q: "Which peptide sellers received FDA warning letters on August 24, 2026?",
    a: "Five online sellers: Peak Performance Peptides, Royal Peptides LLC, NuScience Peptides LLC, Peptide Partners LLC and TXP Innovations LLC, which does business as Tex Peptides. Each letter was issued by FDA's Center for Drug Evaluation and Research.",
  },
  {
    q: "Does a research use only label keep a product outside FDA drug rules?",
    a: "Not on its own, according to these letters. FDA wrote that despite research use only statements on the labeling, evidence from each website established that the products were intended to be drugs for human use.",
  },
  {
    q: "Is a warning letter the same as criminal charges?",
    a: "No. A warning letter is an FDA notice of alleged violations and a request for a written response. It is not an indictment or a conviction. The letters warn that failure to fix the violations may lead to action such as seizure and injunction without further notice.",
  },
  {
    q: "How long do the companies have to respond?",
    a: "Each letter asks for a written response within 15 business days of receipt, sent to FDA by email with the letter's reference number in the subject line.",
  },
  {
    q: "Why did FDA mention bacteriostatic water?",
    a: "FDA said selling bacteriostatic water or reconstitution solution alongside the peptide products showed it was meant to prepare them for injection. In the Peptide Partners and Tex Peptides letters, FDA treated that solution itself as a drug.",
  },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "NewsArticle",
      "@id": `${URL}#article`,
      headline: TITLE,
      description: DESC,
      datePublished: "2026-09-25T12:00:00.000Z",
      dateModified: "2026-09-26T20:29:10.000Z",
      author: { "@type": "Organization", name: "The Peptide Digest", url: "https://peptidedigest.co" },
      publisher: { "@type": "NewsMediaOrganization", name: "The Peptide Digest", url: "https://peptidedigest.co" },
      mainEntityOfPage: { "@type": "WebPage", "@id": URL },
      keywords: "FDA warning letters August 2026, Peptide Partners LLC warning letter, Royal Peptides LLC warning letter, research use only FDA",
      citation: Object.values(SRC),
    },
    {
      "@type": "FAQPage",
      mainEntity: faqs.map(({ q, a }) => ({ "@type": "Question", name: q, acceptedAnswer: { "@type": "Answer", text: a } })),
    },
  ],
};

const h2 = "text-xl font-semibold text-gray-900 pt-4";
const serif = { fontFamily: "var(--font-lora), Georgia, serif" };
const a = "text-blue-700 underline";

const letters = [
  { name: "Peptide Partners LLC", ref: "735063", site: "peptide.partners", href: SRC.partners, detail: "FDA cited six peptide listings, including an SS-31 page discussing retinal protection, plus a reconstitution solution it treated as a separate drug." },
  { name: "Royal Peptides LLC", ref: "734884", site: "royal-peptides.com", href: SRC.royal, detail: "Seven peptide products were named. A product page paired an ‘Advanced Research Use’ label with claims about mitochondrial repair, anti-aging and neuroprotection; FDA also cited a peptide guide and calculator." },
  { name: "TXP Innovations LLC dba Tex Peptides", ref: "735067", site: "texpeptide.com", href: SRC.tex, detail: "FDA identified six peptide products and bacteriostatic water. Its examples included a GLP-1 SEM page describing diabetes and obesity uses." },
  { name: "NuScience Peptides LLC", ref: "733652", site: "nusciencepeptides.com", href: SRC.nuscience, detail: "The letter named eight peptide offerings and BAC water. One GLP-1 Sema page linked to a PubChem passage about weight loss; FDA also noted a peptide calculator." },
  { name: "Peak Performance Peptides", ref: "735127", site: "pppepz.com", href: SRC.peak, detail: "FDA named five peptide products and ‘Bac water’; its cited SS-31 page discussed neuroprotection and cardiovascular benefits. The letter separately noted multiple strengths for some other products." },
];

export default function Page() {
  return (
    <>
      <Nav />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <main className="article-shell">
        <ArticleHero
          category="Regulatory"
          title={<>{TITLE}</>}
          dek={"FDA sent warning letters to five online peptide sellers, including Peptide Partners LLC and Royal Peptides LLC, and said research use only labels did not change its finding."}
          meta={<><time dateTime="2026-09-25">September 25, 2026</time></>}
          image="fdaSign"
        />

        <div className="article-body">
          <p className="text-lg text-gray-800 font-medium leading-relaxed">FDA sent five online peptide sellers warning letters dated August 24, 2026 after reviewing their websites in July. Its central finding was that research-only disclaimers could not outweigh product descriptions and accompanying resources suggesting human drug use. The letters demand a response; they are not seizures, charges or convictions.</p>

          <IQONPartner vial="bac-water" variant="inline" />

          <div className="rounded-lg border border-gray-200 bg-gray-50 p-5">
            <p className="text-xs font-semibold uppercase tracking-widest text-gray-400 mb-3">Key facts</p>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Date on all five letters: August 24, 2026. Issuer: FDA&apos;s Center for Drug Evaluation and Research (<a className={a} href={SRC.afs} target="_blank" rel="noopener noreferrer">ArentFox Schiff</a>).</li>
              <li>FDA says it reviewed each seller&apos;s website in July 2026 (<a className={a} href={SRC.partners} target="_blank" rel="noopener noreferrer">Peptide Partners letter</a>, <a className={a} href={SRC.royal} target="_blank" rel="noopener noreferrer">Royal Peptides letter</a>).</li>
              <li>Legal theory: unapproved new drugs, violating sections 301(d) and 505(a) of the federal FD&amp;C Act.</li>
              <li>Response deadline: 15 business days from receipt.</li>
              <li>The FDA pages for the letters show content current as of September 1, 2026.</li>
            </ul>
          </div>

          <h2 className={h2} style={serif}>Which sellers got letters, and what was reviewed?</h2>
          <p>The addressees and products are named in the agency&apos;s individual letters below. Each describes content FDA saw during a July website review, so a product page edited later would not erase what the letter says FDA examined at the time.</p>
          <div className="my-4 space-y-3">
            {letters.map((l) => (
              <div key={l.ref} className="p-4 rounded-lg border border-gray-200 bg-white">
                <p className="text-sm font-semibold text-gray-900">{l.name}</p>
                <p className="text-xs text-gray-500">July 2026 website review: {l.site} · FDA reference {l.ref}</p>
                <p className="text-sm text-gray-700">{l.detail}</p>
                <a href={l.href} className="text-xs text-blue-700 underline mt-1 inline-block" target="_blank" rel="noopener noreferrer">Read {l.name}&apos;s FDA letter →</a>
              </div>
            ))}
          </div>
          <h2 className={h2} style={serif}>How did a product page become evidence of intended use?</h2>
          <p>Royal&apos;s SS-31 page described mitochondrial repair, anti-aging and neuroprotection under an &apos;Advanced Research Use&apos; heading. In the <a className={a} href={SRC.royal} target="_blank" rel="noopener noreferrer">Royal letter</a>, FDA read those claimed effects alongside the research label. Peptide Partners&apos; SS-31 page instead described possible retinal protection, among other disease-related examples in the <a className={a} href={SRC.partners} target="_blank" rel="noopener noreferrer">Partners letter</a>. Neither example requires assuming what a shipped vial contained: the pages themselves were the evidence of intended use.</p>

          <h2 className={h2} style={serif}>Why did FDA look beyond the research-use-only disclaimer?</h2>
          <p>The <a className={a} href={SRC.partners} target="_blank" rel="noopener noreferrer">Peptide Partners letter</a> explicitly notes &apos;for research use only&apos; and &apos;not for human or veterinary use&apos; statements, then points to the seller&apos;s other claims. The <a className={a} href={SRC.nuscience} target="_blank" rel="noopener noreferrer">NuScience letter</a> goes a step further: its GLP-1 Sema listing linked to a PubChem passage about weight loss. Even a link to outside scientific material became part of the website presentation FDA examined. A disclaimer did not settle how the agency interpreted that presentation.</p>

          <h2 className={h2} style={serif}>Why did water sold alongside peptides draw scrutiny?</h2>
          <p>At <a className={a} href={SRC.royal} target="_blank" rel="noopener noreferrer">Royal</a>, FDA cited bacteriostatic water alongside a peptide guide and calculator as resources that together could facilitate preparation for injection. In its <a className={a} href={SRC.partners} target="_blank" rel="noopener noreferrer">Partners letter</a> and <a className={a} href={SRC.tex} target="_blank" rel="noopener noreferrer">Tex letter</a>, it went further: a reconstitution solution and bacteriostatic water, respectively, were themselves listed as unapproved drugs because of their stated use with the sellers&apos; peptide products. The <a className={a} href={SRC.peak} target="_blank" rel="noopener noreferrer">Peak letter</a> likewise named &apos;Bac water&apos;; the <a className={a} href={SRC.nuscience} target="_blank" rel="noopener noreferrer">NuScience letter</a> named BAC water and noted a calculator. These are findings about each storefront&apos;s intended uses, not a determination about all laboratory water.</p>

          <h2 className={h2} style={serif}>What happens after a warning letter?</h2>
          <p>Each seller was asked to describe corrections within 15 business days <em>of receipt</em>, or explain why it disagreed, with its own reference number in the response subject line. The <a className={a} href={SRC.partners} target="_blank" rel="noopener noreferrer">Partners</a>, <a className={a} href={SRC.royal} target="_blank" rel="noopener noreferrer">Royal</a>, <a className={a} href={SRC.tex} target="_blank" rel="noopener noreferrer">Tex</a>, <a className={a} href={SRC.nuscience} target="_blank" rel="noopener noreferrer">NuScience</a> and <a className={a} href={SRC.peak} target="_blank" rel="noopener noreferrer">Peak</a> letters all say this. Receipt may differ from the August 24 date. FDA warned inadequate correction could bring seizure or injunction without further notice; these five notices do not document either action.</p>
          <p>A dated response or later FDA action would establish what changed after the letters. Until then, the July website examples explain the agency&apos;s allegations, not the final outcome for any seller.</p>

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
              <li><Link href="/peptide-enforcement-2026" className={a}>2026 Peptide Enforcement: The Major Documented Actions</Link></li>
              <li><Link href="/what-happened-to-apex-peptides" className={a}>What happened to Apex Peptides</Link></li>
              <li><Link href="/what-happened-to-peptide-sciences" className={a}>What happened to Peptide Sciences</Link></li>
            </ul>
          </div>

          <p>
            The practical lesson of the letters is about evidence of intended use: FDA examined the surrounding presentation, not only the disclaimer. The sellers’ responses and any subsequent agency action would show what happened after the warnings; the letters themselves do not supply that outcome.
          </p>

          <IQONPartner vial="nad" />

          <p className="text-xs text-gray-400 pt-6 border-t border-gray-200 mt-8">
            Published September 25, 2026. Sources: the FDA warning letters linked above and the ArentFox Schiff alert dated September 18, 2026. For informational purposes only. Not medical or legal advice. Research products are not for human consumption.
          </p>
        </div>
      </main>
      <Footer />
    </>
  );
}
