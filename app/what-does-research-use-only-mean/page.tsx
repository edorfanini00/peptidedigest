import type { Metadata } from "next";
import Link from "next/link";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { ArticleHero } from "@/components/ArticleHero";
import { IQONPartner } from "@/components/IQONPartner";

const URL = "https://peptidedigest.co/what-does-research-use-only-mean";
const TITLE = "What Does Research Use Only (RUO) Actually Mean in 2026?";
const DESC =
  "Research use only has a specific role in FDA diagnostic-device labeling, but a peptide seller cannot use those words as a legal shield. Learn the distinction between a label and intended use.";

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
    a: "In FDA's regulations, it is a labeling statement for lab products still in the research phase. Under 21 CFR 809.10(c), an in vitro diagnostic product in the laboratory research phase must carry the statement \"For Research Use Only. Not for use in diagnostic procedures.\" That specific wording governs the diagnostic-product context; it does not classify every research reagent.",
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
    a: "Alabama and Mississippi boards issued notices to licensed providers about non-FDA-approved or research-grade peptides in patient care. Their notices are state-specific and do not classify every laboratory sale.",
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
      dateModified: "2026-09-26T20:29:10.000Z",
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
          dek={"FDA diagnostic-device rules give the phrase a precise context. Peptide drug intended-use questions require a separate analysis."}
          meta={<><time dateTime="2026-09-25">September 25, 2026</time></>}
          image="magnifier"
        />

        <div className="article-body">
          <p className="text-lg text-gray-800 font-medium leading-relaxed">
            “Research use only” describes a product’s stated laboratory purpose; it does not by itself confer FDA approval or settle intended use. FDA’s diagnostic-device labeling rule and guidance explain the phrase in their own context. Its 2026 warning letters show why a disclaimer cannot neutralize marketing that signals human use.
          </p>

          <IQONPartner vial="nad" variant="inline" />

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
          <p><Src href={SRC.ecfr}>21 CFR 809.10(c)</Src> sets labeling conditions for certain in vitro diagnostic products during laboratory research. Its wording is specific: &ldquo;For Research Use Only. Not for use in diagnostic procedures.&rdquo; The diagnostic context matters. That rule does not automatically classify a peptide offered as a chemical reagent, and it does not provide a universal safe harbor for anything with RUO on a label.</p>
          <h2 className={h2} style={serif}>What does FDA&apos;s 2013 guidance say an RUO label is for?</h2>
          <p><Src href={SRC.guidancePage}>FDA&apos;s guidance</Src> explains the distinction between research-stage diagnostic products and products marketed for clinical diagnosis. It addresses how the manufacturer distributes and promotes the product, not just the words printed on it. Guidance states the agency&apos;s thinking; the cited regulation and governing statutes retain their own legal force. Applying this IVD guidance directly to every peptide vial would erase that distinction.</p>
          <h2 className={h2} style={serif}>Why doesn&apos;t the label settle the question?</h2>
          <p>The regulatory question is what the seller intends the product to be used for, assessed from available evidence. Website claims, product descriptions and accompanying items can conflict with a research disclaimer. A buyer declaration that a product is only for research does not undo contradictory seller conduct. This is why reading the whole sales presentation tells you more than reading one sticker.</p>
          <h2 className={h2} style={serif}>What did the August 2026 warning letters say about RUO?</h2>
          <p>Here the legal context changes from diagnostic devices to drug intended use. The <Src href={SRC.partners}>Peptide Partners letter</Src> says that despite its research-use statements, the website&apos;s claims established human drug intent for products FDA named. FDA also cited a reconstitution solution sold for use with those products. In the <Src href={SRC.royal}>Royal Peptides letter</Src>, the agency examined accompanying supplies and guides. These are FDA&apos;s allegations and regulatory findings in warning letters, not convictions or proof that all similarly labeled products have the same status. Our <Link href="/fda-warning-letters-peptide-sellers-august-2026" className={a}>letter-by-letter account</Link> gives the specific examples.</p>
          <h2 className={h2} style={serif}>What have state boards said about research-grade products?</h2>
          <p><Src href={SRC.alabama}>Alabama&apos;s medical board notice</Src> and <Src href={SRC.mississippi}>Mississippi&apos;s joint board statement</Src> address licensed healthcare professionals and patient use. They reject the idea that calling a substance research-grade or obtaining patient consent by itself resolves professional obligations. These board notices are not national rules for every laboratory transaction. Their audience and authority differ from FDA&apos;s seller warning letters.</p>
          <h2 className={h2} style={serif}>So what does RUO mean for a reader in 2026?</h2>
          <p>It describes a claimed research context. It does not authenticate a COA, establish FDA approval, authorize patient use or decide whether a seller&apos;s conduct complies with law. To understand a specific dispute, locate the applicable product category, read the regulator&apos;s cited evidence and distinguish a warning letter from a court judgment. See also the <Link href="/eli-lilly-lawsuits-research-peptide-sellers" className={a}>private litigation coverage</Link>; a civil complaint is yet another kind of document, with allegations to be tested rather than established findings.</p>

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

          <p>
            Read the label alongside the rest of the presentation. The phrase describes an intended research context, but it does not verify a batch, authorize patient use or shield contradictory claims. The FDA’s specific observations in a warning letter carry more weight than a seller’s isolated disclaimer.
          </p>

          <IQONPartner vial="ghk" />

          <p className="text-xs text-gray-400 pt-6 border-t border-gray-200 mt-8">
            Published September 25, 2026. Sources: 21 CFR 809.10 (eCFR), FDA&apos;s November 2013 RUO/IUO guidance, FDA warning letters 735063 and 734884, the Alabama Board of Medical Examiners notice and the Mississippi boards&apos; joint statement, all linked above. For informational purposes only. Not medical or legal advice. Research products are not for human consumption.
          </p>
        </div>
      </main>
      <Footer />
    </>
  );
}
