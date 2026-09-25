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
    a: "It measures how much of the detected signal comes from the main peak compared with everything else the detector picked up. A 98% figure means the main peak made up about 98% of the peak area under that method. It does not by itself prove the main peak is the right molecule.",
  },
  {
    q: "Why does a COA need mass spectrometry as well as HPLC?",
    a: "HPLC separates and quantifies components. Mass spectrometry measures molecular mass, so it checks whether the main component matches the expected molecular weight of the listed sequence. The two answer different questions.",
  },
  {
    q: "What are the biggest red flags on a peptide COA?",
    a: "No named testing lab, a lot number that does not match the vial, missing test dates, no chromatogram or mass spectrum, identical reports reused across different products, and a lab that cannot be contacted.",
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
      dateModified: "2026-09-25T12:00:00.000Z",
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
          image="labBeakers"
        />

        <div className="article-body">
          <p className="text-lg text-gray-800 font-medium leading-relaxed">
            A peptide Certificate of Analysis (COA) is a lab report for one specific lot. A useful one names the testing lab, gives the lot number and test dates, reports HPLC purity with a chromatogram, and confirms identity by mass spectrometry. If any of those pieces is missing, or the lab cannot confirm it issued the report, the document tells you very little.
          </p>

          <div className="rounded-lg border border-gray-200 bg-gray-50 p-5">
            <p className="text-xs font-semibold uppercase tracking-widest text-gray-400 mb-3">Key facts</p>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>HPLC answers &ldquo;how much of this sample is the main component?&rdquo; Mass spec answers &ldquo;is the main component the right molecule?&rdquo;</li>
              <li>Reversed-phase HPLC is the standard workhorse for peptide separation (<a className={a} href={SRC.mant} target="_blank" rel="noopener noreferrer">Mant et al., 2007</a>).</li>
              <li>Synthetic peptides carry predictable impurities such as deletion sequences, oxidation products and leftover counter ions like trifluoroacetate (<a className={a} href={SRC.dhondt} target="_blank" rel="noopener noreferrer">D&apos;Hondt et al., 2014</a>).</li>
              <li>A COA covers one lot. It says nothing about any other lot.</li>
              <li>ISO/IEC 17025 is the international standard for testing lab competence (<a className={a} href={SRC.iso} target="_blank" rel="noopener noreferrer">ISO</a>).</li>
            </ul>
          </div>

          <h2 className={h2} style={serif}>What is a peptide COA supposed to show?</h2>
          <p>
            It should show which tests were run on which lot and what they found. It should also say who ran them and on what date. In regulated drug work, FDA guidance describes analytical procedures as the documentation behind a substance&apos;s &ldquo;identity, strength, quality, purity, and potency&rdquo; (<a className={a} href={SRC.fdaMethods} target="_blank" rel="noopener noreferrer">FDA</a>). Research-grade COAs are not held to that framework, but the same two questions sit at the center: is it the right compound, and how much else is in the vial?
          </p>
          <p>These are the fields to look for:</p>
          <div className="my-4 space-y-3">
            {fields.map((f) => (
              <div key={f.name} className="p-4 rounded-lg border border-gray-200 bg-white">
                <p className="text-sm font-semibold text-gray-900">{f.name}</p>
                <p className="text-sm text-gray-500">{f.note}</p>
              </div>
            ))}
          </div>

          <h2 className={h2} style={serif}>How do you read the HPLC purity number?</h2>
          <p>
            Start with the chromatogram, then the number. HPLC pushes the sample through a column, and different components come out at different times. The detector draws each one as a peak. Purity is usually the area of the main peak divided by the total area of all peaks. Reversed-phase HPLC is the most common mode for peptides because it separates closely related sequences well (<a className={a} href={SRC.mant} target="_blank" rel="noopener noreferrer">Mant et al., 2007</a>).
          </p>
          <p>
            A few things to check. The chromatogram should show one dominant peak with small ones around it. The report should name the column, the detection wavelength (often 214 or 220 nm for peptides) and the gradient. A purity figure with no chromatogram cannot be checked at all. And a very clean trace with a perfectly flat baseline and no minor peaks can be a sign of an edited image rather than an unusually pure lot.
          </p>
          <p>
            Keep in mind what the number leaves out. HPLC purity measures related substances the detector can see. It does not usually report water content, salt content or counter ions, so the actual amount of peptide in a vial can be lower than the purity figure suggests. D&apos;Hondt and colleagues list trifluoroacetate, left over from synthesis and purification, among the impurities found in finished peptide products (<a className={a} href={SRC.dhondt} target="_blank" rel="noopener noreferrer">D&apos;Hondt et al., 2014</a>).
          </p>

          <h2 className={h2} style={serif}>What does the mass spec result prove?</h2>
          <p>
            It checks identity. Mass spectrometry measures the molecular mass of what is in the sample. The COA should give an expected mass, worked out from the sequence, and an observed mass from the instrument. They should agree closely. Electrospray instruments often show several charge states of the same peptide, so the spectrum may have more than one peak for a single molecule.
          </p>
          <p>
            Mass spec also catches problems HPLC can miss. A deletion sequence, where one amino acid dropped out during synthesis, can run close to the target on a column but will weigh less. An oxidized residue adds 16 daltons. Both are common synthesis or storage impurities (<a className={a} href={SRC.dhondt} target="_blank" rel="noopener noreferrer">D&apos;Hondt et al., 2014</a>). A COA that reports purity but skips identity leaves open whether the main peak is the compound on the label.
          </p>

          <IQONPartner vial="glutathione" variant="inline" />

          <h2 className={h2} style={serif}>Why do the lot number and dates matter?</h2>
          <p>
            Because a COA only describes the sample that was tested. If the lot number on the report is not the lot number on the vial, the report is about some other material. Check it character by character. Sellers sometimes show one report across months of stock, which only makes sense if every vial came from that one lot.
          </p>
          <p>
            Dates should also add up. A test date years before the product was listed, or a report dated after the lot was supposedly sold out, is worth a question. Peptides can degrade in storage, so an old test is weaker evidence for material that has been sitting on a shelf.
          </p>

          <h2 className={h2} style={serif}>How do you know the testing lab is real?</h2>
          <p>
            Look for a full legal name and a physical address, then find the lab yourself through a search. Do not rely on the phone number or email printed on the report, since a forged report can list a forged contact.
          </p>
          <p>
            Many labs cite ISO/IEC 17025, the standard ISO describes as letting labs &ldquo;demonstrate that they operate competently and generate valid results&rdquo; (<a className={a} href={SRC.iso} target="_blank" rel="noopener noreferrer">ISO</a>). Accreditation is granted by national accreditation bodies, not by ISO. The <a className={a} href={SRC.ilac} target="_blank" rel="noopener noreferrer">ILAC signatory search</a> lists recognized accreditation bodies, and most of them publish searchable directories of the labs they accredit. Check that the accreditation scope covers the tests on your report, since a lab can be accredited for some methods and not others.
          </p>
          <p>
            Accreditation also depends on validated methods. FDA&apos;s adopted <a className={a} href={SRC.q2r2} target="_blank" rel="noopener noreferrer">Q2(R2) guidance</a> covers how analytical procedures are validated for regulated drugs. A research lab may not follow it, but a good lab should be able to tell you how its peptide methods were validated.
          </p>

          <h2 className={h2} style={serif}>What are the red flags on a peptide COA?</h2>
          <ul className="list-disc pl-5 space-y-2">
            <li><strong>No lab named</strong>, or only the seller&apos;s own logo. An in-house test is not independent.</li>
            <li><strong>Lot mismatch</strong> between the report and the vial.</li>
            <li><strong>Generic templates</strong>: the same layout, report number or chromatogram shape reused across different compounds.</li>
            <li><strong>Summary only</strong>, with a purity figure but no chromatogram or mass spectrum.</li>
            <li><strong>No expected mass</strong>, or an observed mass that does not match the sequence.</li>
            <li><strong>Missing or odd dates</strong>.</li>
            <li><strong>Blurred or cropped images</strong> where the lab name, report ID or signature should be.</li>
            <li><strong>A lab that cannot be reached</strong>, or that will not confirm the report.</li>
          </ul>

          <h2 className={h2} style={serif}>How do you verify a COA with the lab?</h2>
          <p>
            Email or call the lab through contact details you found independently. Send the report number, the lot number, the compound name and the date on the report, plus a copy of the PDF. Ask two plain questions: did you issue this report, and does this copy match your records?
          </p>
          <p>
            Some labs run online verification portals where you enter a report ID or scan a QR code. Those are useful, but check that the portal sits on the lab&apos;s own domain. A QR code that points to the seller&apos;s website is not independent confirmation.
          </p>
          <p>
            Labs may decline to discuss a client&apos;s results, which is fair. But most will at least confirm whether a report number is theirs. If a lab says it has no record of the report, treat the COA as unverified.
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

          <IQONPartner vial="bac-water" />

          <div className="mt-10 pt-6 border-t border-gray-200">
            <h2 className="text-sm font-semibold text-gray-900 mb-3">Related coverage</h2>
            <ul className="space-y-2 text-sm">
              <li><Link href="/compliant-research-peptide-supplier" className={a}>What to look for in a research peptide supplier</Link></li>
              <li><Link href="/fda-warning-letters-peptide-sellers-august-2026" className={a}>FDA&apos;s August 24, 2026 warning letters to online peptide sellers</Link></li>
              <li><Link href="/peptide-enforcement-2026" className={a}>2026 Peptide Enforcement: The Major Documented Actions</Link></li>
            </ul>
          </div>

          <p className="text-xs text-gray-400 pt-6 border-t border-gray-200 mt-8">
            Published September 25, 2026. Sources: Mant et al. (Methods Mol Biol, 2007), D&apos;Hondt et al. (J Pharm Biomed Anal, 2014), FDA guidance on analytical procedures, ISO and ILAC, all linked above. For informational purposes only. Not medical or legal advice. Research products are not for human consumption.
          </p>
        </div>
      </main>
      <Footer />
    </>
  );
}
