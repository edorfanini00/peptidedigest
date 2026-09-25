import type { Metadata } from "next";
import Link from "next/link";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { ArticleHero } from "@/components/ArticleHero";
import { IQONPartner } from "@/components/IQONPartner";

const URL = "https://peptidedigest.co/what-does-research-use-only-mean";
const TITLE = "What Does Research Use Only (RUO) Actually Mean in 2026?";
const DESC =
  "Research use only is a labeling category FDA defined for lab products that are not ready for clinical use. FDA says the label must match how a product is actually marketed. Here is what that means in 2026.";

const SRC = {
  ecfr: "https://www.ecfr.gov/current/title-21/chapter-I/subchapter-H/part-809/subpart-B/section-809.10",
  guidancePage: "https://www.fda.gov/regulatory-information/search-fda-guidance-documents/distribution-in-vitro-diagnostic-products-labeled-research-use-only-or-investigational-use-only",
  guidancePdf: "https://www.fda.gov/media/87374/download",
  partners: "https://www.fda.gov/inspections-compliance-enforcement-and-criminal-investigations/warning-letters/peptide-partners-llc-735063-08242026",
  royal: "https://www.fda.gov/inspections-compliance-enforcement-and-criminal-investigations/warning-letters/royal-peptides-llc-734884-08242026",
  alabama: "https://www.albme.gov/press-release/board-issues-official-notice-concerning-the-prescribing-of-non-fda-approved-research-grade-peptides",
  mississippi: "https://www.msbml.ms.gov/peptide-statement",
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
    q: "What does research use only mean?",
    a: "In FDA's regulations, it is a labeling statement for lab products still in the research phase. Under 21 CFR 809.10(c), an in vitro diagnostic product in the laboratory research phase must carry the statement \"For Research Use Only. Not for use in diagnostic procedures.\" The label is a warning that the product is not meant for clinical use.",
  },
  {
    q: "Does an RUO label decide how FDA classifies a product?",
    a: "No. FDA looks at intended use, which it describes as the objective intent of the seller. Its 2013 guidance says that intent can be shown by the totality of the circumstances, including labeling, advertising and how the product is sold.",
  },
  {
    q: "What did the August 2026 warning letters say about RUO labels?",
    a: "The letters to Peptide Partners LLC and Royal Peptides LLC say that despite research use only statements on the labeling, evidence from each website established that the products were intended to be drugs for human use.",
  },
  {
    q: "What did state medical boards say about research-grade products?",
    a: "Alabama's Board of Medical Examiners and a joint statement from three Mississippi boards said licensed providers may not compound, administer or dispense non-FDA approved or research-grade peptides to patients. Both said consent forms calling a product research-grade do not remove the provider's liability.",
  },
  {
    q: "Is this article legal advice?",
    a: "No. It summarizes public FDA and state board documents. Anyone making decisions about labeling or selling regulated products should talk to a lawyer.",
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
      keywords: "research use only meaning, RUO label FDA, 21 CFR 809.10(c), FDA RUO guidance 2013, research use only peptides",
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

function Src({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <a className={a} href={href} target="_blank" rel="noopener noreferrer">
      {children}
    </a>
  );
}

export default function Page() {
  return (
    <>
      <Nav />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <main className="article-shell">
        <ArticleHero
          category="Explainer"
          title={<>{TITLE}</>}
          dek={"The phrase comes from FDA's rules for lab diagnostic products. FDA's position is that the label has to match how the product is actually sold."}
          meta={<><time dateTime="2026-09-25">September 25, 2026</time></>}
          image="magnifier"
        />

        <div className="article-body">
          <p className="text-lg text-gray-800 font-medium leading-relaxed">
            &ldquo;Research use only&rdquo; is a labeling statement FDA created for lab products that are still in the research phase and are not meant for clinical use. It is a warning printed on the product. It is not a license, an exemption on its own, or a guarantee of how FDA will classify something. FDA decides that based on intended use, and in 2026 it has said plainly that a website can outweigh the label.
          </p>

          <div className="rounded-lg border border-gray-200 bg-gray-50 p-5">
            <p className="text-xs font-semibold uppercase tracking-widest text-gray-400 mb-3">Key facts</p>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>The exact RUO wording comes from <Src href={SRC.ecfr}>21 CFR 809.10(c)(2)(i)</Src>: &ldquo;For Research Use Only. Not for use in diagnostic procedures.&rdquo;</li>
              <li>That rule covers in vitro diagnostic products, meaning lab tests and reagents. It was not written for vials sold to consumers.</li>
              <li>FDA&apos;s <Src href={SRC.guidancePage}>RUO/IUO guidance</Src> was issued November 25, 2013, and says RUO labeling must be consistent with the manufacturer&apos;s intended use.</li>
              <li>FDA&apos;s August 24, 2026 warning letters said RUO statements did not change its finding that the products were drugs (<Src href={SRC.partners}>Peptide Partners letter</Src>).</li>
              <li>Alabama and Mississippi boards told licensed providers that research-grade peptides may not be given to patients (<Src href={SRC.alabama}>Alabama</Src>, <Src href={SRC.mississippi}>Mississippi</Src>).</li>
            </ul>
          </div>

          <h2 className={h2} style={serif}>Where does the phrase &ldquo;research use only&rdquo; come from?</h2>
          <p>
            It comes from FDA&apos;s labeling rule for in vitro diagnostic products, found at <Src href={SRC.ecfr}>21 CFR 809.10</Src>. Normally those products need full labeling: intended use, warnings, storage instructions, lot numbers and more. Paragraph (c) creates an exemption for shipments that are not headed for clinical use.
          </p>
          <p>
            For a product &ldquo;in the laboratory research phase of development, and not represented as an effective in vitro diagnostic product,&rdquo; all labeling must carry the prominent statement &ldquo;For Research Use Only. Not for use in diagnostic procedures.&rdquo; A sister category covers products in pre-market testing. Those carry &ldquo;For Investigational Use Only,&rdquo; usually shortened to IUO.
          </p>
          <p>
            So the phrase has a narrow home. It was built for things like reagents and test kits used in labs, not for products sold directly to the public.
          </p>

          <h2 className={h2} style={serif}>What does FDA&apos;s 2013 guidance say an RUO label is for?</h2>
          <p>
            It says the label is a warning. In the <Src href={SRC.guidancePdf}>guidance document</Src>, FDA wrote that RUO labeling &ldquo;is meant to serve as a warning, to prevent such products from being used in clinical diagnosis, patient management, or an investigation&rdquo; outside the rules for clinical studies.
          </p>
          <p>
            The guidance was issued by FDA&apos;s device and biologics centers. Like all FDA guidance, it describes the agency&apos;s current thinking and does not create legally enforceable duties by itself. Its reasoning about intended use still shows up in FDA enforcement today.
          </p>

          <h2 className={h2} style={serif}>Why doesn&apos;t the label settle the question?</h2>
          <p>
            Because FDA looks at intended use, and the label is only one piece of evidence. The guidance says a product&apos;s intended use is the &ldquo;objective intent&rdquo; of the people responsible for labeling it, which &ldquo;may be determined by looking at the totality of circumstances surrounding the distribution of the article&rdquo; (<Src href={SRC.guidancePdf}>FDA guidance</Src>).
          </p>
          <p>
            It then lists evidence that can conflict with an RUO label, starting with statements in &ldquo;any labeling, advertising, or promotion&rdquo; of the product. It also mentions the product&apos;s design and how it is sold. If a product would be used for clinical purposes and is labeled solely for research, FDA wrote that it would consider that labeling &ldquo;false or misleading.&rdquo;
          </p>
          <p>
            The guidance even addresses buyer sign-offs. A program where customers certify they won&apos;t misuse a product is &ldquo;one factor to consider,&rdquo; but the existence of such a program &ldquo;alone would not relieve manufacturers&rdquo; of their responsibilities.
          </p>

          <IQONPartner vial="nad" variant="inline" />

          <h2 className={h2} style={serif}>What did the August 2026 warning letters say about RUO?</h2>
          <p>
            They applied the same idea to peptide sellers, this time under the drug rules rather than the device rules. On August 24, 2026, FDA&apos;s Center for Drug Evaluation and Research sent warning letters to five online sellers. We read the letters to Peptide Partners LLC and Royal Peptides LLC in full.
          </p>
          <p>
            Footnote 1 of the Peptide Partners letter reads: &ldquo;Despite statements on your product labeling marketing your products &lsquo;for research use only&rsquo; and &lsquo;not for human or veterinary use,&rsquo; evidence obtained from your website establishes that your products are intended to be drugs for human use&rdquo; (<Src href={SRC.partners}>FDA letter 735063</Src>). The body of the letter points to product pages that summarized studies in disease terms, and cites FDA&apos;s drug intended-use rule, 21 CFR 201.128.
          </p>
          <p>
            The Royal Peptides footnote follows the same pattern. It notes the site&apos;s &ldquo;not for human or animal consumption&rdquo; statement, then points to bacteriostatic water sold alongside a &ldquo;peptide guide&rdquo; and &ldquo;peptide calculator,&rdquo; which FDA said &ldquo;collectively provide the means to prepare an injectable drug for human administration&rdquo; (<Src href={SRC.royal}>FDA letter 734884</Src>).
          </p>
          <p>
            In practice, the letters treat product descriptions, blog posts, calculators and bundled supplies as evidence. Warning letters are not charges or convictions, and each company was invited to respond. Our <Link href="/fda-warning-letters-peptide-sellers-august-2026" className={a}>full breakdown of the August letters</Link> covers all five.
          </p>

          <h2 className={h2} style={serif}>What have state boards said about research-grade products?</h2>
          <p>
            State boards have focused on licensed providers rather than sellers. In its official notice, the <Src href={SRC.alabama}>Alabama Board of Medical Examiners</Src> said that &ldquo;under no circumstances is it permissible for a physician to compound, administer, or dispense a non-FDA approved or research grade peptide to a patient.&rdquo;
          </p>
          <p>
            A <Src href={SRC.mississippi}>joint statement</Src> from Mississippi&apos;s medical, nursing and pharmacy boards uses nearly the same language for all healthcare providers. Both documents also say that patient consent forms describing a product as &ldquo;research-grade&rdquo; do not remove a provider&apos;s professional or legal liability.
          </p>
          <p>
            That lines up with FDA&apos;s view. Neither regulators nor boards treat the research label as a shield when the surrounding facts point to human use. Other states have taken related steps, which we track in our <Link href="/state-crackdown-research-peptides-2026" className={a}>state crackdown roundup</Link>.
          </p>

          <h2 className={h2} style={serif}>So what does RUO mean for a reader in 2026?</h2>
          <p>
            It means the label tells you what the seller claims the product is for, and nothing more. It does not tell you that FDA reviewed the product, that the product is approved, or that the seller is compliant. When deciding how to classify a product, FDA says it will look at the whole picture: the website, the marketing, what is sold with it and who it is sold to.
          </p>
          <p>
            The label has also come up in private litigation. See our coverage of <Link href="/eli-lilly-lawsuits-research-peptide-sellers" className={a}>Eli Lilly&apos;s lawsuits against research use only peptide sellers</Link>.
          </p>
          <p className="text-sm text-gray-500">
            This article explains public documents. It is not legal advice.
          </p>

          <IQONPartner vial="ghk" />

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
              <li><Link href="/fda-warning-letters-peptide-sellers-august-2026" className={a}>FDA&apos;s August 24, 2026 Warning Letters to Online Peptide Sellers</Link></li>
              <li><Link href="/state-crackdown-research-peptides-2026" className={a}>Which States Are Cracking Down on Research-Grade Peptides in 2026?</Link></li>
              <li><Link href="/eli-lilly-lawsuits-research-peptide-sellers" className={a}>Eli Lilly&apos;s lawsuits against research peptide sellers</Link></li>
            </ul>
          </div>

          <p className="text-xs text-gray-400 pt-6 border-t border-gray-200 mt-8">
            Published September 25, 2026. Sources: 21 CFR 809.10 (eCFR), FDA&apos;s November 2013 RUO/IUO guidance, FDA warning letters 735063 and 734884, the Alabama Board of Medical Examiners notice and the Mississippi boards&apos; joint statement, all linked above. For informational purposes only. Not medical or legal advice. Research products are not for human consumption.
          </p>
        </div>
      </main>
      <Footer />
    </>
  );
}
