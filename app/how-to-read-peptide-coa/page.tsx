import type { Metadata } from "next";
import { articleBreadcrumbSchema } from "@/components/articleBreadcrumbSchema";
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
    a: "It is a lab report about a tested sample identified with a claimed lot. Check the compound, lot identifier, issuing lab, test dates, methods and actual results, such as an HPLC purity figure or mass spectrometry identity check. Verify that the sample really represents the offered lot rather than assuming the document certifies every vial.",
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
    articleBreadcrumbSchema("Guide", "https://peptidedigest.co/how-to-read-peptide-coa"),
    {
      "@type": "Article",
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
          <p className="text-lg text-gray-800 font-medium leading-relaxed">A peptide certificate of analysis can display &apos;98% purity&apos; and still leave the essential question unanswered: was the sample in that report drawn from the lot you are being offered? Start with the lot and report identifiers, then read the HPLC and mass-spectrometry results as different measurements. Neither turns a seller&apos;s PDF into a guarantee about every vial.</p>

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
          <p>A useful COA identifies the sample, lot, lab, methods and analysis date together. If one of those links is missing, request it before comparing a percentage with a product listing. FDA guidance on analytical procedures concerns regulated submissions, not automatic approval of a research seller&apos;s certificate. <a className={a} href={SRC.fdaMethods}>analytical procedures guidance</a></p>
          <div className="my-4 space-y-3">{fields.map((f) => (<div key={f.name} className="p-4 rounded-lg border border-gray-200 bg-white"><p className="text-sm font-semibold text-gray-900">{f.name}</p><p className="text-sm text-gray-500">{f.note}</p></div>))}</div>
          <h2 className={h2} style={serif}>How do you read the HPLC purity number?</h2>
          <p>High-performance liquid chromatography separates material before a detector records peaks. The familiar area-percentage figure compares detector signals under the stated method; 98% peak area is not the same as 98% of the vial&apos;s mass. Detector response, integration and separation conditions all affect what the number means. <a className={a} href={SRC.mant}>Mant and colleagues</a></p>
          <p>Ask for the chromatogram and method, including how smaller peaks were handled. Water, counterions and substances poorly detected under that method may not appear as comparable peaks. A neat trace can be genuine and incomplete; it neither proves identity nor proves manipulation by its appearance alone.</p>
          <h2 className={h2} style={serif}>What does the mass spec result prove?</h2>
          <p>A mass spectrum compares an observed mass with what is expected for the named molecule. A close match supports the identity of the analyzed component, but molecules with the same mass can still differ, and the result does not establish sequence, purity, vial content or the absence of contamination. Read it alongside the separation result, not in place of one. <a className={a} href={SRC.dhondt}>D&apos;Hondt and colleagues</a></p>
          <h2 className={h2} style={serif}>Why do the lot number and dates matter?</h2>
          <p>Suppose a listing offers lot B but links a report for lot A. The lab may have done excellent work on A; that report still does not describe B. Compare identifiers character by character and note sample-receipt, test and issue dates where given. Older testing cannot certify every package&apos;s present condition.</p>
          <h2 className={h2} style={serif}>How do you know the testing lab is real?</h2>
          <p>Find the lab independently of the seller&apos;s document. ISO/IEC 17025 accreditation is about competence within a specified testing scope; the accreditation body&apos;s directory can show whether the claimed method is included. It is neither an FDA product approval nor a shortcut for authenticating one PDF. <a className={a} href={SRC.iso}>ISO/IEC 17025</a></p>
          <h2 className={h2} style={serif}>What are the red flags on a peptide COA?</h2>
          <p>A mismatched lot or an issuer that cannot be identified breaks the document chain first. Missing method details, reused report numbers, no chromatogram for a claimed HPLC run or an observed mass with no expected comparator all warrant follow-up. None of these signs alone proves forgery. If microbial or endotoxin results are absent, the COA simply does not answer those questions.</p>
          <h2 className={h2} style={serif}>How do you verify a COA with the lab?</h2>
          <p>Use the lab&apos;s own contact channel to provide the report number, lot and date, and ask whether it issued the supplied document. Privacy may limit what it will confirm; silence is not proof of fraud. A confirmed mismatch is a reason to stop relying on the report, while a QR code that leads only to a seller&apos;s own site is not independent verification.</p>

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

          <p>The defensible conclusion is tied to the specific tested sample and methods. Match the offered lot, check the reported measurements and seek lab confirmation where possible. If the chain fails, a large purity number cannot substitute for it.</p>

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
