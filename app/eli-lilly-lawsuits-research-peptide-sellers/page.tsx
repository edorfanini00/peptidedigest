import type { Metadata } from "next";
import { articleBreadcrumbSchema } from "@/components/articleBreadcrumbSchema";
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
    a: "No. These are private civil lawsuits brought by a company, not criminal charges brought by prosecutors. The linked public CourtListener dockets reviewed for this article did not establish a ruling on the merits; their PACER/RECAP coverage may be incomplete. Lilly's assertions in the complaints remain allegations, not findings established by those records.",
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
    articleBreadcrumbSchema("Litigation", "https://peptidedigest.co/eli-lilly-lawsuits-research-peptide-sellers"),
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
          <p className="text-lg text-gray-800 font-medium leading-relaxed">Eli Lilly sued six sellers on August 12, 2026, alleging they marketed purported retatrutide despite the drug still being investigational. Four of the defendants are online research-product sellers. Lilly says the research-only label did not match how the products were offered to consumers. The complaints are civil allegations, not findings of liability or criminal charges.</p>

          <IQONPartner vial="ghk" />

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
          <p>Lilly named Astra Peptides, Legendary Peptides, Texas Peptides and Lone Star Peptide among the six defendants. Striker Pharmacy and Aesthetic Envy operate different models, a compounding pharmacy and a med spa. The shared allegation concerns purported retatrutide sales; it does not make all six cases identical. <a href={SRC.lilly} className={a} {...ext}>August 12 announcement</a></p>
          <div className="my-6 space-y-3">
            {cases.map((c) => (
              <div key={c.no} className="p-4 rounded-lg border border-gray-200 bg-white">
                <p className="text-sm font-semibold text-gray-900">{c.name}</p>
                <p className="text-sm text-gray-500">{c.type} · {c.court} · Case No. {c.no}</p>
                <a href={c.href} className="text-xs text-blue-700 underline mt-1 inline-block" {...ext}>Docket →</a>
              </div>
            ))}
          </div>
          <p>One docket detail complicates the roundup: Lilly&apos;s announcement puts Aesthetic Envy in the Northern District of California, while the linked CourtListener entry initially shows an Eastern District of California number. The four research-seller suits were filed in Texas federal courts; the California history needs a complete filing trail before assigning a definitive district. <a href={SRC.dEnvy} className={a} {...ext}>CourtListener entry</a></p>

          <h2 className={h2} style={serif}>What is Lilly trying to prove about the research label?</h2>
          <p>In the Legendary complaint, Lilly quotes the seller&apos;s research-only and third-party-testing language, then alleges sales of purported retatrutide to consumers in multiple states. Its Astra complaint makes a related claim. The defendants&apos; marketing and Lilly&apos;s characterization are evidence submitted for a civil dispute, not a court determination that a particular disclaimer was false. <a href={SRC.legendaryComplaint} className={a} {...ext}>Legendary Peptides complaint</a> <a href={SRC.astraComplaint} className={a} {...ext}>Astra complaint</a></p>
          <p>That is why the surrounding sales pitch matters. A research label can coexist with product pages or instructions suggesting human use; FDA has separately raised this concern about unapproved GLP-1 products. But an FDA policy statement does not adjudicate Lilly&apos;s allegations against these particular defendants. <a href={SRC.fda} className={a} {...ext}>FDA guidance on unapproved GLP-1 products</a></p>

          <h2 className={h2} style={serif}>Why state-law claims instead of a patent suit?</h2>
          <p>Lilly&apos;s Legendary complaint invokes state unfair-competition and consumer-protection theories and asks for an injunction and financial relief. As Frier Levitt&apos;s analysis notes, a private drug company cannot bring a federal prosecution for someone else&apos;s alleged FDA violation. The chosen causes of action matter: a lawsuit is a request for a court ruling, not a nationwide prohibition on every research-product listing. <a href={SRC.legendaryComplaint} className={a} {...ext}>Legendary filing</a> <a href={SRC.frier} className={a} {...ext}>Frier Levitt&apos;s legal analysis</a></p>
          <p>Aesthetic Envy&apos;s docket instead lists a federal Lanham Act cause. Neither a jurisdiction label on a docket nor a complaint&apos;s legal theory proves the factual allegations. The specific pleadings and any later orders determine what each court is being asked to decide. <a href={SRC.dEnvy} className={a} {...ext}>docket</a></p>

          <h2 className={h2} style={serif}>What can the public dockets tell us?</h2>
          <p>The accessible dockets already differ. Legendary shows service and an extension request; Astra shows an amended complaint on August 31 followed by a September 2 voluntary-dismissal notice. That dismissal is not a judgment that Astra did or did not make the alleged sales. CourtListener&apos;s PACER/RECAP coverage can lag, so these public entries are a dated window, not a live status guarantee for every case. <a href={SRC.dLegendary} className={a} {...ext}>Legendary docket</a> <a href={SRC.dAstra} className={a} {...ext}>Astra docket</a></p>

          <h2 className={h2} style={serif}>How does this differ from FDA enforcement or prosecution?</h2>
          <p>These are Lilly&apos;s private civil suits. FDA warning letters are agency notices asking recipients to respond; criminal cases are brought by prosecutors. Lilly also said it referred more than 200 entities or people to government bodies, but a referral is not a charge. Keep each action&apos;s actor and remedy distinct. <Link href="/fda-warning-letters-peptide-sellers-august-2026" className={a}>FDA warning letter</Link> <a href={SRC.lilly} className={a} {...ext}>Lilly release</a></p>

          <h2 className={h2} style={serif}>What should a research-market reader watch next?</h2>
          <p>Lilly asked payment processors, shipping companies and online platforms to help curb sales in its announcement. That request could affect distribution independently of a court judgment, but it is not an injunction against every research seller. The next substantive answers will come from defendants&apos; responses and rulings on Lilly&apos;s actual claims. <a href={SRC.lilly} className={a} {...ext}>announcement</a></p>

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

          <p>For now the suits describe a targeted challenge to alleged marketing of one investigational compound, not a finding about all RUO products. Astra&apos;s dismissal notice also shows why each docket needs its own status check before calling the entire August batch active.</p>

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
