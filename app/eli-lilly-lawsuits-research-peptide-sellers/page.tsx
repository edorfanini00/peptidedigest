import type { Metadata } from "next";
import Link from "next/link";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { ArticleHero } from "@/components/ArticleHero";
import { IQONPartner } from "@/components/IQONPartner";

const URL = "https://peptidedigest.co/eli-lilly-lawsuits-research-peptide-sellers";
const TITLE = "Eli Lilly Sues Research Use Only Peptide Sellers: The 2026 Cases Explained";
const DESC =
  "On August 12, 2026, Eli Lilly filed six federal civil lawsuits, four against online research use only peptide sellers. Here are the parties, courts, claims and what the cases signal.";

const SRC = {
  lilly: "https://investor.lilly.com/news-releases/news-release-details/lilly-calls-online-platforms-payment-companies-and-regulators",
  legendaryComplaint: "https://storage.courtlistener.com/recap/gov.uscourts.txed.248221/gov.uscourts.txed.248221.1.0.pdf",
  astraComplaint: "https://www.safemedicines.org/wp-content/uploads/2026/08/Astra-LLC-Complaint.pdf",
  dLegendary: "https://www.courtlistener.com/docket/74513889/eli-lilly-and-company-v-legendary-peptides-llc/",
  dAstra: "https://www.courtlistener.com/docket/74538839/eli-lilly-and-company-v-astra-llc/",
  dTexas: "https://www.courtlistener.com/docket/74534297/eli-lilly-and-company-v-texas-peptides-inc/",
  dLoneStar: "https://www.courtlistener.com/docket/74513992/eli-lilly-and-company-v-lone-star-peptide-co-llc/",
  dStriker: "https://www.courtlistener.com/docket/74518163/eli-lilly-and-company-v-striker-pharmacy-llc/",
  dEnvy: "https://www.courtlistener.com/docket/74512318/eli-lilly-and-company-v-aesthetic-envy-cosmetic-centers-llc/",
  cnbc: "https://www.cnbc.com/2026/08/12/lilly-lawsuits-obesity-drug-retatrutide.html",
  cbs: "https://www.cbsnews.com/news/eli-lilly-lawsuits-weight-loss-drug/",
  fierce: "https://www.fiercepharma.com/pharma/lilly-takes-6-companies-court-selling-retatrutide-knockoffs",
  frier: "https://www.frierlevitt.com/articles/lilly-retatrutide-lawsuits-ruo-peptide-sellers/",
  fda: "https://www.fda.gov/drugs/drug-alerts-and-statements/fdas-concerns-unapproved-glp-1-drugs-used-weight-loss",
};

export const metadata: Metadata = {
  title: TITLE,
  description: DESC,
  alternates: { canonical: URL },
  openGraph: { title: TITLE, description: DESC, url: URL, type: "article", publishedTime: "2026-09-25T12:00:00.000Z" },
  twitter: { card: "summary", title: TITLE, description: DESC },
};

const faqs = [
  {
    q: "Who did Eli Lilly sue in August 2026?",
    a: "Six businesses, all on August 12, 2026: four online research use only peptide sellers (Astra LLC d/b/a Astra Peptides, Legendary Peptides LLC, Texas Peptides Inc. and Lone Star Peptide Co. LLC), a California med spa (Aesthetic Envy Cosmetic Centers LLC) and a Texas compounding pharmacy (Striker Pharmacy LLC).",
  },
  {
    q: "Are these criminal charges?",
    a: "No. These are private civil lawsuits brought by a company, not charges brought by prosecutors. Nobody has been charged or convicted in these cases, and no court has ruled on the merits. Everything Lilly says in the complaints is an allegation.",
  },
  {
    q: "What does Lilly want from the courts?",
    a: "According to the complaints, a permanent injunction barring each defendant from marketing, selling or distributing any product containing or purporting to contain the investigational compound at issue, plus damages, disgorgement of profits and attorneys' fees.",
  },
  {
    q: "Why does the research use only label matter in these cases?",
    a: "Lilly alleges the label was a pretext and that the products were sold for human use. The complaint against Legendary Peptides says the company claims to be an online seller of purported research use only products but is, in Lilly's words, selling illegal drugs to consumers. The defendants have not had their responses tested in court.",
  },
  {
    q: "What happens next in the cases?",
    a: "The public CourtListener docket for Astra LLC records a September 2, 2026 notice of voluntary dismissal after an amended complaint. The other linked dockets show procedural entries; these records do not establish a liability judgment. CourtListener cautions that its PACER/RECAP coverage may be incomplete.",
  },
];

const cases = [
  { name: "Eli Lilly and Company v. Astra LLC (d/b/a Astra Peptides)", type: "Online research use only seller", court: "W.D. Texas", no: "5:26-cv-05147", href: SRC.dAstra },
  { name: "Eli Lilly and Company v. Legendary Peptides, LLC", type: "Online research use only seller", court: "E.D. Texas (Beaumont)", no: "1:26-cv-00347", href: SRC.dLegendary },
  { name: "Eli Lilly and Company v. Texas Peptides Inc.", type: "Online research use only seller", court: "W.D. Texas", no: "5:26-cv-05146", href: SRC.dTexas },
  { name: "Eli Lilly and Company v. Lone Star Peptide Co. LLC", type: "Online research use only seller", court: "S.D. Texas", no: "4:26-cv-06562", href: SRC.dLoneStar },
  { name: "Eli Lilly and Company v. Striker Pharmacy, LLC", type: "Compounding pharmacy", court: "S.D. Texas", no: "4:26-cv-06563", href: SRC.dStriker },
  { name: "Eli Lilly and Company v. Aesthetic Envy Cosmetic Centers LLC", type: "Med spa", court: "E.D. California (per docket)", no: "2:26-at-01347", href: SRC.dEnvy },
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
      keywords: "Eli Lilly lawsuit research peptide sellers, Lilly v. Legendary Peptides, Lilly v. Astra Peptides, Texas Peptides lawsuit, Lone Star Peptide lawsuit, research use only lawsuit",
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
const ext = { target: "_blank", rel: "noopener noreferrer" } as const;

export default function Page() {
  return (
    <>
      <Nav />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <main className="article-shell">
        <ArticleHero
          category="Litigation"
          title={<>{TITLE}</>}
          dek={"On August 12, 2026, Eli Lilly filed six federal civil lawsuits, four against online research use only peptide sellers. Here are the parties, courts, claims and what the cases signal."}
          meta={<><time dateTime="2026-09-25">September 25, 2026</time></>}
          image="lillyHq"
        />

        <div className="article-body">
          <p className="text-lg text-gray-800 font-medium leading-relaxed">
            Eli Lilly filed six civil lawsuits on August 12, 2026. Four name online sellers advertising research-use-only products. The company alleges the sellers offered its investigational compound retatrutide for human use, despite the labeling. These are Lilly’s allegations in civil litigation, not criminal charges or findings on the merits.
          </p>

          <IQONPartner vial="ghk" variant="inline" />

          <div className="rounded-lg border border-gray-200 bg-white p-5">
            <h2 className="text-sm font-semibold uppercase tracking-widest text-gray-400 mb-3">Key facts</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Filing date: August 12, 2026, announced the same day in a <a href={SRC.lilly} className={a} {...ext}>Lilly news release</a>.</li>
              <li>Defendants: four online research use only sellers, one med spa and one compounding pharmacy.</li>
              <li>Courts: five cases in federal district courts in Texas and one in California, per the <a href={SRC.dEnvy} className={a} {...ext}>CourtListener dockets</a>.</li>
              <li>Relief sought: a permanent injunction, damages, disgorgement of profits and attorneys&apos; fees, per the <a href={SRC.legendaryComplaint} className={a} {...ext}>Legendary Peptides complaint</a>.</li>
              <li>Status: the <a href={SRC.dAstra} className={a} {...ext}>Astra docket</a> records a September 2 notice of voluntary dismissal. A filing or dismissal does not itself establish liability.</li>
            </ul>
          </div>

          <h2 className={h2} style={serif}>Why are four research sellers in a six-case filing?</h2>
          <p>
            Lilly&apos;s <a href={SRC.lilly} className={a} {...ext}>August 12 announcement</a> names six defendants. Four marketed themselves as online research sellers: Astra Peptides, Legendary Peptides, Texas Peptides and Lone Star Peptide. The other two, Striker Pharmacy and Aesthetic Envy, are a compounding pharmacy and a med spa. Grouping them together captures Lilly&apos;s claim about sales of purported retatrutide, but the business models and courts are not interchangeable.
          </p>
          <div className="my-6 space-y-3">
            {cases.map((c) => (
              <div key={c.no} className="p-4 rounded-lg border border-gray-200 bg-white">
                <p className="text-sm font-semibold text-gray-900">{c.name}</p>
                <p className="text-sm text-gray-500">{c.type} · {c.court} · Case No. {c.no}</p>
                <a href={c.href} className="text-xs text-blue-700 underline mt-1 inline-block" {...ext}>Docket →</a>
              </div>
            ))}
          </div>
          <p>
            One court detail requires care: Lilly&apos;s announcement identifies the Aesthetic Envy filing as Northern District of California, while the linked <a href={SRC.dEnvy} className={a} {...ext}>CourtListener entry</a> records an Eastern District of California preliminary docket number. Without the transfer or filing history, that conflict cannot be resolved from the announcement alone. The four research-seller cases are in Texas federal courts.
          </p>

          <h2 className={h2} style={serif}>What is Lilly trying to prove about the research label?</h2>
          <p>
            In its <a href={SRC.legendaryComplaint} className={a} {...ext}>Legendary Peptides complaint</a>, Lilly quotes the seller describing itself as a supplier of third-party-tested compounds for research use only. Lilly then alleges that the site sold purported retatrutide to consumers, including buyers in several named states. The <a href={SRC.astraComplaint} className={a} {...ext}>Astra complaint</a> makes a similar accusation. Those are a plaintiff&apos;s descriptions of the defendants&apos; conduct, not judicial findings that a disclaimer was false.
          </p>
          <p>
            The distinction matters because an &ldquo;RUO&rdquo; label is only one piece of evidence about intended use. Product pages, surrounding marketing and how a seller presents a compound can point elsewhere. <a href={SRC.fda} className={a} {...ext}>FDA guidance on unapproved GLP-1 products</a> separately describes products labeled for research but sold to consumers with human-use instructions. FDA&apos;s general position does not decide Lilly&apos;s individual lawsuits.
          </p>

          <h2 className={h2} style={serif}>Why state-law claims instead of a patent suit?</h2>
          <p>
            The <a href={SRC.legendaryComplaint} className={a} {...ext}>Legendary filing</a> asks a court to address alleged sales under state unfair-competition and consumer-protection theories. <a href={SRC.frier} className={a} {...ext}>Frier Levitt&apos;s legal analysis</a> notes that a private drug developer cannot simply prosecute an FDA violation under the federal drug statute. That helps explain why Lilly invokes state law while citing federal drug rules as context. The legal route also means a filing alone does not establish a nationwide ban on all research peptides.
          </p>
          <p>
            The Aesthetic Envy case differs: its <a href={SRC.dEnvy} className={a} {...ext}>docket</a> lists a federal Lanham Act cause. A docket&apos;s jurisdiction field is a filing descriptor, not a ruling on the merits; neither diversity jurisdiction in the Texas cases nor a federal cause in California proves Lilly&apos;s factual allegations.
          </p>

          <h2 className={h2} style={serif}>What can the public dockets tell us?</h2>
          <p>
            Service returns show that litigation was moving, not that Lilly won. The <a href={SRC.dLegendary} className={a} {...ext}>Legendary docket</a> records an August service return and an extension request. Crucially, the <a href={SRC.dAstra} className={a} {...ext}>Astra docket</a> records an amended complaint on August 31 and a notice of voluntary dismissal on September 2. A voluntary dismissal is not a liability ruling, and the accessible docket does not explain the parties&apos; reasons. CourtListener warns that PACER/RECAP entries may lag, so a claim that all six suits remain active would overstate these records.
          </p>

          <h2 className={h2} style={serif}>How does this differ from FDA enforcement or prosecution?</h2>
          <p>
            Lilly is the plaintiff in private civil suits seeking court remedies, including injunctions and financial relief. An <Link href="/fda-warning-letters-peptide-sellers-august-2026" className={a}>FDA warning letter</Link> communicates an agency&apos;s alleged violations and requests a response. Criminal charges come from prosecutors and require a separate criminal proceeding. Lilly says it referred more than 200 entities or individuals to government bodies, but a referral itself charges nobody (<a href={SRC.lilly} className={a} {...ext}>Lilly release</a>).
          </p>

          <h2 className={h2} style={serif}>What should a research-market reader watch next?</h2>
          <p>
            Watch the pleadings for each defendant&apos;s response, then court rulings on the specific state-law theories and requested injunctions. Lilly also asked online platforms, payment processors and shipping companies to act against sellers in its <a href={SRC.lilly} className={a} {...ext}>announcement</a>. That request is a commercial pressure tactic, not a court order against every research storefront. The unresolved issue in these cases is whether Lilly can prove its allegations about these defendants&apos; marketing and sales under the claims it actually filed.
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
              <li><Link href="/fda-warning-letters-peptide-sellers-august-2026" className={a}>FDA warning letters to five peptide sellers, August 2026</Link></li>
              <li><Link href="/peptide-enforcement-2026" className={a}>2026 peptide enforcement: the major documented actions</Link></li>
              <li><Link href="/state-crackdown-research-peptides-2026" className={a}>State actions on research peptides in 2026</Link></li>
            </ul>
          </div>

          <p>
            The cases test a specific allegation about how these sellers marketed a named product. They do not establish that every research-use-only listing is unlawful. The complaints and later court orders, rather than Lilly’s announcement alone, are the documents to watch for what a court actually decides.
          </p>

          <IQONPartner vial="bac-water" />

          <p className="text-xs text-gray-400 pt-6 border-t border-gray-200 mt-8">
            Published September 25, 2026. Allegations in civil complaints are unproven. For information only, not medical or legal advice. Research products are not for human consumption.
          </p>
        </div>
      </main>
      <Footer />
    </>
  );
}
