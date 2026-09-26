import type { Metadata } from "next";
import Link from "next/link";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { ArticleHero } from "@/components/ArticleHero";
import { IQONPartner } from "@/components/IQONPartner";

const URL = "https://peptidedigest.co/how-to-read-peptide-coa";
const TITLE = "How to Read a Research Peptide Certificate of Analysis (COA)";
const DESC =
  "A peptide COA should name the lot, the testing lab, the test dates, an HPLC purity result and a mass spec identity check. Here is how to read each line and how to confirm the report with the lab.";

const SRC = {
  mant: "https://pubmed.ncbi.nlm.nih.gov/18604941/",
  dhondt: "https://pubmed.ncbi.nlm.nih.gov/25044089/",
  fdaMethods: "https://www.fda.gov/regulatory-information/search-fda-guidance-documents/analytical-procedures-and-methods-validation-drugs-and-biologics",
  q2r2: "https://www.fda.gov/regulatory-information/search-fda-guidance-documents/q2r2-validation-analytical-procedures",
  iso: "https://www.iso.org/ISO-IEC-17025-testing-and-calibration-laboratories.html",
  ilac: "https://ilac.org/signatory-search/",
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
    q: "What is a Certificate of Analysis for a research peptide?",
    a: "It is a lab report tied to one production lot. It should list the compound, the lot number, the lab that ran the tests, the test dates, the methods used and the results, usually an HPLC purity figure and a mass spectrometry identity check.",
  },
  {
    q: "What does HPLC purity actually measure?",
    a: "It usually reports the main peak area as a share of the integrated detector signal under a specified method. It is not the percentage by mass in a vial and does not establish the peak’s identity.",
  },
  {
    q: "Why does a COA need mass spectrometry as well as HPLC?",
    a: "HPLC separates detected components and can report peak area; mass spectrometry compares observed mass with the expected mass. Together they offer more evidence, but neither alone proves full sequence, sterility or vial content.",
  },
  {
    q: "What are the biggest red flags on a peptide COA?",
    a: "A mismatched lot, unidentified lab, missing dates or methods, or reused report IDs warrant investigation. Missing raw traces limits what can be independently assessed; none of these alone proves forgery.",
  },
  {
    q: "How can I verify a COA is genuine?",
    a: "Contact the testing lab directly using contact details you find yourself, not the ones printed on the report. Give the report number and lot number and ask whether the lab issued it. If the lab claims ISO/IEC 17025 accreditation, check the accreditation body's own directory.",
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
      keywords: "peptide COA, certificate of analysis peptide, HPLC purity peptide, mass spec peptide identity, verify COA lab, lot number COA",
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

const fields = [
  { name: "Compound and sequence", note: "The name plus the amino acid sequence or molecular formula. The expected molecular weight should match the sequence." },
  { name: "Lot or batch number", note: "Should match the number printed on the vial or its label exactly." },
  { name: "Testing lab", note: "A legal name, address and a way to contact it. A logo alone is not enough." },
  { name: "Dates", note: "Sample received, test performed and report issued. Look for a date that fits the lot." },
  { name: "Method and result", note: "HPLC purity as a percentage, and a mass spec result given as observed mass against expected mass." },
  { name: "Raw data", note: "A chromatogram and a mass spectrum, not only a summary number." },
  { name: "Report ID and signature", note: "A unique report number and the name of the analyst or reviewer who signed off." },
];

export default function Page() {
  return (
    <>
      <Nav />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <main className="article-shell">
        <ArticleHero
          category="Guide"
          title={<>{TITLE}</>}
          dek={"Purity, identity, lot numbers and the lab's name: what each part of a peptide COA tells you, and how to check that the report is real."}
          meta={<><time dateTime="2026-09-25">September 25, 2026</time></>}
          image="hplc"
        />

        <div className="article-body">
          <p className="text-lg text-gray-800 font-medium leading-relaxed">
            Start with the lot number. If a peptide certificate of analysis does not identify the material it tested, a purity percentage cannot tell you whether it belongs to the product in front of you. Then check the laboratory, dates, analytical method and identity result. A chromatogram or mass spectrum answers a different question from a marketing claim.
          </p>

          <IQONPartner vial="glutathione" variant="inline" />

          <div className="rounded-lg border border-gray-200 bg-gray-50 p-5">
            <p className="text-xs font-semibold uppercase tracking-widest text-gray-400 mb-3">Key facts</p>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>HPLC peak area describes the detector signal under a stated method; mass spectrometry compares observed and expected mass.</li>
              <li>Reversed-phase HPLC is the standard workhorse for peptide separation (<a className={a} href={SRC.mant} target="_blank" rel="noopener noreferrer">Mant et al., 2007</a>).</li>
              <li>Synthetic peptides carry predictable impurities such as deletion sequences, oxidation products and leftover counter ions like trifluoroacetate (<a className={a} href={SRC.dhondt} target="_blank" rel="noopener noreferrer">D&apos;Hondt et al., 2014</a>).</li>
              <li>A COA describes a tested sample tied to a lot; it does not certify every vial in that lot.</li>
              <li>ISO/IEC 17025 is the international standard for testing lab competence (<a className={a} href={SRC.iso} target="_blank" rel="noopener noreferrer">ISO</a>).</li>
            </ul>
          </div>

          <h2 className={h2} style={serif}>What is a peptide COA supposed to show?</h2>
          <p>The useful unit is a tested sample, not a brand. A report should connect a named sample and lot to dated results, methods and the laboratory that issued them. FDA&apos;s <a className={a} href={SRC.fdaMethods}>analytical procedures guidance</a> concerns regulated drug submissions; a seller&apos;s research COA is not automatically subject to that approval framework. It is still reasonable to ask what was measured and what was not.</p>
          <div className="my-4 space-y-3">{fields.map((f) => (<div key={f.name} className="p-4 rounded-lg border border-gray-200 bg-white"><p className="text-sm font-semibold text-gray-900">{f.name}</p><p className="text-sm text-gray-500">{f.note}</p></div>))}</div>
          <h2 className={h2} style={serif}>How do you read the HPLC purity number?</h2>
          <p>High-performance liquid chromatography separates components of a sample before a detector records peaks over time. A reported area percentage commonly compares the main peak&apos;s integrated detector signal with the total integrated signal under that method. A 98% area result therefore is not a statement that 98% of a vial&apos;s mass is the listed peptide. The method, detector and integration choices matter. <a className={a} href={SRC.mant}>Mant and colleagues</a> describe reversed-phase separation in peptide analysis.</p>
          <p>Ask for the chromatogram and method conditions, then ask whether minor peaks were integrated and what the detector could miss. Water, counterions and substances without a comparable detector response need separate assessment. A trace alone cannot establish identity; a pristine-looking plot is not evidence of manipulation without the underlying data.</p>
          <h2 className={h2} style={serif}>What does the mass spec result prove?</h2>
          <p>Mass spectrometry adds a different comparison: the reported observed mass against the mass expected for the named molecule. A plausible match supports identity for the analyzed component, although isomers or other molecules can share a mass. It cannot by itself establish purity, sequence, amount per vial or absence of contaminants. <a className={a} href={SRC.dhondt}>D&apos;Hondt and colleagues</a> discuss multiple impurity classes in synthetic peptides. Read HPLC and mass spec together rather than allowing either to certify what it did not test.</p>
          <h2 className={h2} style={serif}>Why do the lot number and dates matter?</h2>
          <p>Imagine a report for lot A attached to a listing shipping lot B. Even impeccable analytical work on A says nothing direct about B. Match identifiers character by character. Then check sample receipt, analysis and issuance dates in that order, if provided. An older test describes the sampled material at the testing time; it does not establish the condition of every package today.</p>
          <h2 className={h2} style={serif}>How do you know the testing lab is real?</h2>
          <p>Look up the named laboratory independently rather than trusting contact information embedded in the PDF. <a className={a} href={SRC.iso}>ISO/IEC 17025</a> concerns laboratory competence, while accreditation and its scope should be checked through the relevant accreditation body&apos;s directory. A lab can be accredited for some tests but not the exact method on a particular report. Accreditation does not turn a research product into an FDA-approved drug.</p>
          <h2 className={h2} style={serif}>What are the red flags on a peptide COA?</h2>
          <p>A mismatched lot or unidentifiable issuer breaks the link before the purity percentage matters. Missing method details, repeated report IDs for different samples, an absent chromatogram for an asserted HPLC result, or a mass figure without a stated expected value all deserve questions. None alone proves forgery. A report can be genuine yet narrow: if endotoxin or microbial testing is absent, that property remains untested by the document, not automatically safe or unsafe.</p>
          <h2 className={h2} style={serif}>How do you verify a COA with the lab?</h2>
          <p>Use a contact channel found on the lab&apos;s own site. Give the report ID, lot identifier and date and ask whether it issued that document and whether the supplied copy matches its records. A lab may decline to share client information, so refusal is not proof of fraud; a confirmed mismatch is a concrete reason to stop relying on the report. A QR code is useful only if it resolves to an independently verified laboratory service, not a seller-controlled copy.</p>

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
              <li><Link href="/compliant-research-peptide-supplier" className={a}>What to look for in a research peptide supplier</Link></li>
              <li><Link href="/fda-warning-letters-peptide-sellers-august-2026" className={a}>FDA&apos;s August 24, 2026 warning letters to online peptide sellers</Link></li>
              <li><Link href="/peptide-enforcement-2026" className={a}>2026 Peptide Enforcement: The Major Documented Actions</Link></li>
            </ul>
          </div>

          <p>
            A certificate is evidence about a tested sample, not a blanket guarantee about every vial sold under a brand. Match the lot, check what each method measured and seek confirmation from the listed lab. If that chain breaks, the displayed purity number cannot repair it.
          </p>

          <IQONPartner vial="bac-water" />

          <p className="text-xs text-gray-400 pt-6 border-t border-gray-200 mt-8">
            Published September 25, 2026. Sources: Mant et al. (Methods Mol Biol, 2007), D&apos;Hondt et al. (J Pharm Biomed Anal, 2014), FDA guidance on analytical procedures, ISO and ILAC, all linked above. For informational purposes only. Not medical or legal advice. Research products are not for human consumption.
          </p>
        </div>
      </main>
      <Footer />
    </>
  );
}
