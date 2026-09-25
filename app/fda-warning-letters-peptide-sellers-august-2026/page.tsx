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
      dateModified: "2026-09-25T12:00:00.000Z",
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
  { name: "Peptide Partners LLC", ref: "735063", site: "peptide.partners", href: SRC.partners },
  { name: "Royal Peptides LLC", ref: "734884", site: "royal-peptides.com", href: SRC.royal },
  { name: "TXP Innovations LLC dba Tex Peptides", ref: "735067", site: "texpeptide.com", href: SRC.tex },
  { name: "NuScience Peptides LLC", ref: "733652", site: "nusciencepeptides.com", href: SRC.nuscience },
  { name: "Peak Performance Peptides", ref: "735127", site: "pppepz.com", href: SRC.peak },
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
          image="envelopes"
        />

        <div className="article-body">
          <p className="text-lg text-gray-800 font-medium leading-relaxed">
            On August 24, 2026, FDA sent warning letters to five online peptide sellers, including Peptide Partners LLC and Royal Peptides LLC, saying the products on their websites were unapproved new drugs. FDA also said the sellers&apos; &ldquo;research use only&rdquo; labels did not change that finding. These are warning letters. No company in this batch has been charged with a crime.
          </p>

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

          <h2 className={h2} style={serif}>Who received the August 24 letters?</h2>
          <p>
            A <a className={a} href={SRC.afs} target="_blank" rel="noopener noreferrer">September 18, 2026 alert from the law firm ArentFox Schiff</a> lists five recipients. We opened each FDA letter to confirm the date and the website FDA reviewed.
          </p>
          <div className="my-4 space-y-3">
            {letters.map((l) => (
              <div key={l.ref} className="p-4 rounded-lg border border-gray-200 bg-white">
                <p className="text-sm font-semibold text-gray-900">{l.name}</p>
                <p className="text-sm text-gray-500">Reference {l.ref}. Website reviewed: {l.site}.</p>
                <a href={l.href} className="text-xs text-blue-700 underline mt-1 inline-block" target="_blank" rel="noopener noreferrer">Read the FDA letter →</a>
              </div>
            ))}
          </div>
          <p>
            The Peptide Partners letter was sent to a Sarasota, Florida address. The Tex Peptides letter was addressed to its CEO in Dallas, Texas (<a className={a} href={SRC.tex} target="_blank" rel="noopener noreferrer">FDA</a>).
          </p>

          <h2 className={h2} style={serif}>What did FDA say Peptide Partners did?</h2>
          <p>
            FDA listed seven Peptide Partners products, including a &ldquo;Reconstitution Solution (BAC),&rdquo; as unapproved new drugs. The agency quoted the company&apos;s product pages, which summarized lab and clinical studies in disease terms. One quoted line said a lab study suggested a product &ldquo;could be a potential treatment to protect the retina&rdquo; (<a className={a} href={SRC.partners} target="_blank" rel="noopener noreferrer">FDA letter 735063</a>).
          </p>
          <p>
            FDA said those statements showed the products were intended to treat disease or affect the body, which makes them drugs under section 201(g)(1). Because no approved application covers them, FDA called them unapproved new drugs.
          </p>

          <h2 className={h2} style={serif}>What did FDA say Royal Peptides did?</h2>
          <p>
            The Royal Peptides letter also named seven products, including a blend sold as &ldquo;BIMORELIN.&rdquo; FDA quoted product pages and blog-style comparison pages on royal-peptides.com. One quoted page listed &ldquo;Advanced Research Use: Mitochondrial repair, anti-aging, neuroprotection&rdquo; (<a className={a} href={SRC.royal} target="_blank" rel="noopener noreferrer">FDA letter 734884</a>).
          </p>
          <p>
            FDA&apos;s examples included pages written in cautious research language. The agency still treated them as evidence of intended drug use when read with the rest of the site.
          </p>

          <h2 className={h2} style={serif}>What does &ldquo;research use only&rdquo; mean to FDA?</h2>
          <p>
            In these letters, it is a statement FDA weighs against everything else the seller shows. Footnote 1 of the Peptide Partners letter says: &ldquo;Despite statements on your product labeling marketing your products &lsquo;for research use only&rsquo; and &lsquo;not for human or veterinary use,&rsquo; evidence obtained from your website establishes that your products are intended to be drugs for human use&rdquo; (<a className={a} href={SRC.partners} target="_blank" rel="noopener noreferrer">FDA</a>).
          </p>
          <p>
            The Royal Peptides footnote uses the same structure. It notes the site&apos;s &ldquo;not for human or animal consumption&rdquo; statement, then points to bacteriostatic water sold alongside a &ldquo;peptide guide&rdquo; and &ldquo;peptide calculator.&rdquo; FDA said those resources &ldquo;collectively provide the means to prepare an injectable drug for human administration&rdquo; (<a className={a} href={SRC.royal} target="_blank" rel="noopener noreferrer">FDA</a>).
          </p>
          <p>
            ArentFox Schiff reads the batch the same way. Its lawyers wrote that FDA &ldquo;looks past the label to the net impression of the website as a whole,&rdquo; and that RUO labeling alone &ldquo;is unlikely to withstand FDA scrutiny when the surrounding marketing context points toward human use&rdquo; (<a className={a} href={SRC.afs} target="_blank" rel="noopener noreferrer">ArentFox Schiff</a>). That is a law firm&apos;s analysis, not an FDA statement.
          </p>


          <IQONPartner vial="bac-water" variant="inline" />


          <h2 className={h2} style={serif}>Why does bacteriostatic water matter in these letters?</h2>
          <p>
            FDA treated it as a link between the vial and the injection. The Peptide Partners letter says the reconstitution solution was sold &ldquo;to be used to reconstitute the peptide products sold on your website, which are drugs intended for injection,&rdquo; so the solution is &ldquo;a drug&rdquo; (<a className={a} href={SRC.partners} target="_blank" rel="noopener noreferrer">FDA</a>). The Tex Peptides letter makes the same finding about its bacteriostatic water (<a className={a} href={SRC.tex} target="_blank" rel="noopener noreferrer">FDA</a>).
          </p>
          <p>
            The letters to Peptide Partners, Royal Peptides and Tex Peptides also say injectable products &ldquo;bypass some of the body&rsquo;s key defenses against toxins and microorganisms.&rdquo;
          </p>

          <IQONPartner vial="nad" />

          <h2 className={h2} style={serif}>Is a warning letter a criminal charge?</h2>
          <p>
            No. A warning letter lists violations FDA says it found and asks the company to respond. It is not an indictment, and nobody has been convicted of anything based on these letters. Each letter says the list is not exhaustive, and that failing to fix the violations &ldquo;may result in regulatory or legal action without further notice including, without limitation, seizure and injunction&rdquo; (<a className={a} href={SRC.royal} target="_blank" rel="noopener noreferrer">FDA</a>).
          </p>
          <p>
            Companies can also answer back. The letters invite recipients to send information if they believe their products do not violate the law.
          </p>

          <h2 className={h2} style={serif}>How does this fit with other FDA actions in 2026?</h2>
          <p>
            ArentFox Schiff places the batch alongside two earlier rounds aimed at telehealth companies. According to the firm, FDA issued 30 warning letters on March 30 and 25 more during the week of June 15. Those letters used a misbranding theory. The August 24 letters rest on the separate unapproved new drug theory (<a className={a} href={SRC.afs} target="_blank" rel="noopener noreferrer">ArentFox Schiff</a>).
          </p>
          <p>
            For criminal cases involving peptide sellers, which are a different category, see our <Link href="/peptide-enforcement-2026" className={a}>2026 enforcement timeline</Link>.
          </p>

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

          <p className="text-xs text-gray-400 pt-6 border-t border-gray-200 mt-8">
            Published September 25, 2026. Sources: the FDA warning letters linked above and the ArentFox Schiff alert dated September 18, 2026. For informational purposes only. Not medical or legal advice. Research products are not for human consumption.
          </p>
        </div>
      </main>
      <Footer />
    </>
  );
}
