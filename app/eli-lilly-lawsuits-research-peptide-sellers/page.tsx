import type { Metadata } from "next";
import Link from "next/link";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { ArticleHero } from "@/components/ArticleHero";

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
    a: "As of late September 2026, the public dockets show early procedural steps only, such as service of summons and, in the Legendary Peptides case, an order on a motion for more time to respond. No judgment has been entered in any of the six cases.",
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
      dateModified: "2026-09-25T12:00:00.000Z",
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
          image="courthouse"
        />

        <div className="article-body">
          <p className="text-lg text-gray-800 font-medium leading-relaxed">
            Eli Lilly filed six federal civil lawsuits on August 12, 2026, and four of them name online sellers that label their products &ldquo;research use only.&rdquo; Lilly alleges those sellers offered its unapproved investigational compound, retatrutide, for human use. These are civil cases brought by a company. No one has been charged with a crime, and no court has ruled on the merits.
          </p>

          <div className="rounded-lg border border-gray-200 bg-white p-5">
            <h2 className="text-sm font-semibold uppercase tracking-widest text-gray-400 mb-3">Key facts</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Filing date: August 12, 2026, announced the same day in a <a href={SRC.lilly} className={a} {...ext}>Lilly news release</a>.</li>
              <li>Defendants: four online research use only sellers, one med spa and one compounding pharmacy.</li>
              <li>Courts: five cases in federal district courts in Texas and one in California, per the <a href={SRC.dEnvy} className={a} {...ext}>CourtListener dockets</a>.</li>
              <li>Relief sought: a permanent injunction, damages, disgorgement of profits and attorneys&apos; fees, per the <a href={SRC.legendaryComplaint} className={a} {...ext}>Legendary Peptides complaint</a>.</li>
              <li>Status: early procedural stage as of September 2026. No judgment, no finding of liability.</li>
            </ul>
          </div>

          <h2 className={h2} style={serif}>What did Eli Lilly file, and against whom?</h2>
          <p>
            Lilly&apos;s <a href={SRC.lilly} className={a} {...ext}>August 12, 2026 news release</a> said the suits target &ldquo;compounding pharmacies, medical spas, and online sellers that falsely claim their drugs are for &lsquo;research-use only&rsquo; when they are actually intended for human use.&rdquo; <a href={SRC.cbs} className={a} {...ext}>CBS News</a> identified Astra Peptides, Legendary Peptides, Texas Peptides and Lone Star Peptide as the four firms that advertise the product &ldquo;for research use&rdquo; without a prescription. <a href={SRC.cnbc} className={a} {...ext}>Reuters, via CNBC</a>, listed the same six defendants.
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
            One detail differs between sources. Lilly&apos;s release lists the Aesthetic Envy case as filed in the Northern District of California. The <a href={SRC.dEnvy} className={a} {...ext}>CourtListener docket</a> places it in the Eastern District of California under a preliminary number, 2:26-at-01347. We have not seen a transfer order.
          </p>

          <h2 className={h2} style={serif}>What does Lilly allege against the research use only sellers?</h2>
          <p>
            The complaints we opened follow the same template. The <a href={SRC.astraComplaint} className={a} {...ext}>Astra complaint</a>, filed in the San Antonio Division of the Western District of Texas, opens by saying Astra &ldquo;claims to be an online seller of purportedly &lsquo;research use only&rsquo; products&rdquo; and that &ldquo;in reality, it is selling illegal drugs to consumers.&rdquo; The <a href={SRC.legendaryComplaint} className={a} {...ext}>Legendary Peptides complaint</a>, filed in the Beaumont Division of the Eastern District of Texas, uses nearly identical language.
          </p>
          <p>
            The Legendary Peptides complaint also cites the company&apos;s own website, quoting its description of itself as a &ldquo;Texas-based supplier of third-party tested compounds for research use only.&rdquo; Lilly alleges that the company sold to consumers in Alaska, Colorado, Connecticut, North Carolina, South Carolina, Tennessee, Texas and Washington, and that those sales violate each state&apos;s law against selling unapproved new drugs. It also says the FDA has sent at least 16 warning letters related to retatrutide.
          </p>
          <p>
            These are Lilly&apos;s claims. None of the defendants has been found liable. CBS News reported that the companies did not respond to requests for comment on the day of filing, and that three of them took down pages advertising the product.
          </p>

          <h2 className={h2} style={serif}>What legal claims is Lilly using?</h2>
          <p>
            According to an analysis by the law firm <a href={SRC.frier} className={a} {...ext}>Frier Levitt</a>, the complaints do not assert patent infringement. Most rely on state unfair competition and consumer protection statutes. Frier Levitt notes that the federal drug statute, the FDCA, does not give private companies a general right to sue over its violations, so state law is the route. The one federal false advertising count under the Lanham Act is in the Aesthetic Envy case. The CourtListener dockets are consistent with that: the <a href={SRC.dEnvy} className={a} {...ext}>Aesthetic Envy docket</a> lists a Lanham Act cause, while the five Texas dockets, including <a href={SRC.dLegendary} className={a} {...ext}>Legendary Peptides</a>, list diversity jurisdiction.
          </p>

          <h2 className={h2} style={serif}>Where do the cases stand now?</h2>
          <p>
            All six are at an early stage. The public dockets show service steps: a summons returned executed in the <a href={SRC.dLegendary} className={a} {...ext}>Legendary Peptides case</a> on August 18, 2026, and in the <a href={SRC.dTexas} className={a} {...ext}>Texas Peptides case</a> on August 19, 2026, and a waiver of service in the <a href={SRC.dStriker} className={a} {...ext}>Striker Pharmacy case</a> on August 25, 2026. On September 11, 2026, the court in the Legendary Peptides case entered an order on a motion for an extension of time to respond. No judgment has been entered in any of the six cases.
          </p>

          <div className="mt-8 rounded-xl border border-gray-200 bg-gray-50 p-6">
            <div className="text-xs font-semibold uppercase tracking-widest text-gray-400 mb-2">Partner</div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2" style={serif}>IQON Health</h3>
            <p className="text-sm text-gray-500 mb-4">Confirm all details directly with IQON Health before purchasing.</p>
            <a href="https://www.iqonhealth.com/shop" target="_blank" rel="noopener noreferrer" className="inline-flex items-center px-5 py-2.5 rounded-lg bg-gray-900 text-white text-sm font-medium hover:bg-gray-700 transition-colors">Visit IQON Health →</a>
          </div>

          <h2 className={h2} style={serif}>How is this different from an FDA warning letter or a criminal case?</h2>
          <p>
            A warning letter is an FDA notice of alleged violations. A criminal case starts with charges filed by prosecutors and can end in a conviction. These lawsuits are neither. They are civil complaints filed by a private company that says it is harmed by the sales. Lilly said it has separately referred more than 200 individuals and entities to the FDA, the Department of Justice, state attorneys general, law enforcement and licensing boards, per its <a href={SRC.lilly} className={a} {...ext}>news release</a>. A referral is not a charge.
          </p>

          <h2 className={h2} style={serif}>What do the lawsuits signal for the research peptide market?</h2>
          <p>
            Three things stand out. First, a drug developer is now suing research use only sellers by name, instead of only reporting them. <a href={SRC.fierce} className={a} {...ext}>Fierce Pharma</a> noted that Lilly previously sued companies over compounded versions of its approved products in 2023 and 2024. This round reaches online research use only storefronts.
          </p>
          <p>
            Second, the label alone is under attack. The <a href={SRC.fda} className={a} {...ext}>FDA&apos;s page on unapproved GLP-1 drugs</a> says the agency has warned companies whose products were &ldquo;falsely labeled &lsquo;for research purposes&rsquo; or &lsquo;not for human consumption&rsquo;&rdquo; and sold to consumers with dosing instructions. Frier Levitt&apos;s view is that a research use only label &ldquo;is not necessarily a legal shield&rdquo; and that litigants will look at the full marketing picture.
          </p>
          <p>
            Third, the pressure is spreading to intermediaries. Lilly&apos;s release called on social media and e-commerce platforms, card companies, payment processors and shipping carriers to cut off sellers, and said it has reported more than 14,000 websites, ads, posts and listings in over 100 countries. Lilly executive Max Denning told <a href={SRC.cbs} className={a} {...ext}>CBS News</a>, &ldquo;Six lawsuits is not going to be the solution to everything, but it is a start.&rdquo;
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

          <p className="text-xs text-gray-400 pt-6 border-t border-gray-200 mt-8">
            Published September 25, 2026. Allegations in civil complaints are unproven. For information only, not medical or legal advice. Research products are not for human consumption.
          </p>
        </div>
      </main>
      <Footer />
    </>
  );
}
