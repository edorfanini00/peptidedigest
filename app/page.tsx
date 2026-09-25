import Link from "next/link";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";

const featuredArticle = {
  slug: "apex-peptides-raided-what-researchers-need-to-know",
  category: "Industry",
  date: "September 24, 2026",
  readTime: "6 min read",
  title: "Apex Peptides Raided by Federal Agents: What Researchers Need to Know",
  excerpt:
    "Federal agents from the U.S. Postal Inspection Service, FBI, and IRS CI converged on a North Sioux City address linked to Apex Peptides. Here is what happened, what it means for the research community, and how to evaluate alternative suppliers.",
};

const industryArticles = [
  {
    slug: "peptide-sciences-shutdown-market-impact",
    category: "Industry",
    date: "March 18, 2026",
    readTime: "5 min read",
    title: "Peptide Sciences Shutdown: The Market Fallout Three Months Later",
    excerpt:
      "After DOJ enforcement action took Peptide Sciences offline in March, the research-peptide market reorganized rapidly. A look at what changed and where researchers are sourcing today.",
  },
  {
    slug: "what-makes-a-compliant-peptide-supplier-2026",
    category: "Industry",
    date: "September 10, 2026",
    readTime: "7 min read",
    title: "What a Compliant Research Peptide Supplier Looks Like in 2026",
    excerpt:
      "Third-party COAs, endotoxin testing, research-only positioning, transparent sourcing — we outline what separates low-risk suppliers from those operating in the gray zone.",
  },
  {
    slug: "amino-asylum-raid-2026-summary",
    category: "Industry",
    date: "March 22, 2026",
    readTime: "4 min read",
    title: "Amino Asylum Raid: What Was Alleged and What It Means",
    excerpt:
      "Federal agents raided Amino Asylum's operations in March 2026 as part of the same enforcement wave that took down Peptide Sciences. A factual summary of what is known.",
  },
  {
    slug: "what-happened-to-peptide-sciences",
    category: "Industry",
    date: "March 10, 2026",
    readTime: "7 min read",
    title: "What Happened to Peptide Sciences? The Full Story",
    excerpt:
      "Peptide Sciences went dark on March 6, 2026 — no warning, no refunds, no explanation. A full breakdown of the DOJ enforcement action and what it means for the research community.",
  },
  {
    slug: "amino-asylum-raid-what-happened",
    category: "Industry",
    date: "January 15, 2026",
    readTime: "6 min read",
    title: "Amino Asylum Raided by FDA: What Happened",
    excerpt:
      "FDA agents raided Amino Asylum's warehouse in June 2025. Both founders pleaded guilty in December 2025. Products contained testosterone sold as SARMs. Full story here.",
  },
  {
    slug: "paradigm-peptides-prison-sentence",
    category: "Industry",
    date: "August 1, 2026",
    readTime: "6 min read",
    title: "Paradigm Peptides Owner Sentenced to 70 Months in Federal Prison",
    excerpt:
      "Matthew Kawa, owner of Paradigm Peptides, was sentenced to 70 months in federal prison on July 30, 2026. $5 million money judgment. Forged COAs. The complete breakdown.",
  },
];


const categoryColors: Record<string, string> = {
  Industry: "bg-orange-50 text-orange-700",
  Regulatory: "bg-blue-50 text-blue-700",
  Research: "bg-green-50 text-green-700",
};

function SectionLabel({ label, id }: { label: string; id?: string }) {
  return (
    <div id={id} className="flex items-center gap-3 mb-6">
      <h2 className="text-xs font-semibold uppercase tracking-widest text-gray-400 shrink-0">{label}</h2>
      <div className="flex-1 h-px bg-gray-200" />
    </div>
  );
}

function ArticleCard({ a }: { a: typeof industryArticles[0] }) {
  return (
    <article className="flex flex-col">
      <div className="flex items-center gap-2 mb-3">
        <span className={`text-xs font-medium px-2 py-0.5 rounded-full ${categoryColors[a.category]}`}>
          {a.category}
        </span>
        <span className="text-xs text-gray-400">{a.readTime}</span>
      </div>
      <Link href={`/${a.slug}`} className="group flex-1">
        <h3
          className="text-lg font-semibold text-gray-900 leading-snug mb-2 group-hover:text-blue-700 transition-colors"
          style={{ fontFamily: "var(--font-lora), Georgia, serif" }}
        >
          {a.title}
        </h3>
        <p className="text-sm text-gray-500 leading-relaxed">{a.excerpt}</p>
      </Link>
      <div className="mt-3 text-xs text-gray-400">{a.date}</div>
    </article>
  );
}

// Inline sponsor block — looks editorial
function SponsorBlock({
  headline,
  body,
  cta,
}: {
  headline: string;
  body: string;
  cta: string;
}) {
  return (
    <div className="my-12 border border-gray-200 rounded-xl bg-gray-50 p-6 flex flex-col md:flex-row md:items-center gap-5">
      <div className="flex-1">
        <div className="text-[10px] font-semibold uppercase tracking-widest text-gray-400 mb-1">Partner</div>
        <p
          className="text-base font-semibold text-gray-900 mb-1"
          style={{ fontFamily: "var(--font-lora), Georgia, serif" }}
        >
          {headline}
        </p>
        <p className="text-sm text-gray-500">{body}</p>
      </div>
      <a
        href="https://www.iqonhealth.com/shop"
        target="_blank"
        rel="noopener noreferrer"
        className="shrink-0 inline-flex items-center px-5 py-2.5 rounded-lg bg-gray-900 text-white text-sm font-medium hover:bg-gray-700 transition-colors"
      >
        {cta}
      </a>
    </div>
  );
}

export default function Home() {
  return (
    <>
      <Nav />

      <main className="max-w-5xl mx-auto px-6 pt-12 pb-6">

        {/* Featured article */}
        <div className="mb-10 border-b border-gray-200 pb-10">
          <div className="flex items-center gap-3 mb-4">
            <span className={`text-xs font-medium px-2.5 py-1 rounded-full ${categoryColors[featuredArticle.category]}`}>
              {featuredArticle.category}
            </span>
            <span className="text-xs text-gray-400">{featuredArticle.date}</span>
            <span className="text-xs text-gray-400">·</span>
            <span className="text-xs text-gray-400">{featuredArticle.readTime}</span>
          </div>
          <Link href={`/${featuredArticle.slug}`} className="group">
            <h1
              className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight mb-4 group-hover:text-blue-700 transition-colors"
              style={{ fontFamily: "var(--font-lora), Georgia, serif" }}
            >
              {featuredArticle.title}
            </h1>
          </Link>
          <p className="text-gray-500 text-lg leading-relaxed max-w-2xl">
            {featuredArticle.excerpt}
          </p>
          <Link
            href={`/${featuredArticle.slug}`}
            className="inline-flex items-center mt-5 text-sm font-medium text-blue-700 hover:text-blue-900 transition-colors"
          >
            Read full article →
          </Link>
        </div>

        {/* Industry section */}
        <SectionLabel label="Industry" id="industry" />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-10">
          {industryArticles.map((a) => <ArticleCard key={a.slug} a={a} />)}
        </div>

        {/* Sponsor block 1 — after industry news */}
        <SponsorBlock
          headline="IQON Health"
          body="Featured on The Peptide Digest. Confirm product details and documentation directly with IQON Health."
          cta="Visit IQON Health →"
        />

        {/* Regulatory section */}
        <SectionLabel label="Regulatory" id="regulatory" />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
          {[
            {
              slug: "peptide-enforcement-2026",
              category: "Regulatory",
              date: "September 24, 2026",
              readTime: "8 min read",
              title: "2026 Peptide Enforcement Timeline: Every Major Action",
              excerpt: "Peptide Sciences, Amino Asylum, Paradigm Peptides, Apex Peptides — a complete timeline of federal enforcement actions against research peptide suppliers in 2026.",
            },
            {
              slug: "what-makes-a-compliant-peptide-supplier-2026",
              category: "Regulatory",
              date: "September 10, 2026",
              readTime: "7 min read",
              title: "What a Compliant Research Peptide Supplier Looks Like in 2026",
              excerpt: "As enforcement actions increase, compliance differentiation between suppliers matters more than ever. Here is what to look for.",
            },
          ].map((a) => <ArticleCard key={a.slug} a={a} />)}
        </div>

        {/* Sponsor block 3 — after regulatory, pre-footer */}
        <div className="my-12 rounded-xl border border-gray-200 overflow-hidden">
          <div className="bg-gray-900 px-6 py-5 flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div>
              <div className="text-[10px] font-semibold uppercase tracking-widest text-gray-400 mb-1">Partner</div>
              <p className="text-white font-semibold text-base" style={{ fontFamily: "var(--font-lora), Georgia, serif" }}>
                IQON Health
              </p>
              <p className="text-gray-400 text-sm mt-1">
                Featured on The Peptide Digest. Confirm all details directly with IQON Health.
              </p>
            </div>
            <a
              href="https://www.iqonhealth.com/shop"
              target="_blank"
              rel="noopener noreferrer"
              className="shrink-0 inline-flex items-center px-5 py-2.5 rounded-lg bg-white text-gray-900 text-sm font-semibold hover:bg-gray-100 transition-colors"
            >
              Visit IQON Health →
            </a>
          </div>
        </div>

        {/* About */}
        <div id="about" className="border-t border-gray-200 pt-10">
          <h2
            className="text-xl font-semibold text-gray-900 mb-3"
            style={{ fontFamily: "var(--font-lora), Georgia, serif" }}
          >
            About The Peptide Digest
          </h2>
          <p className="text-gray-500 text-sm leading-relaxed max-w-2xl">
            The Peptide Digest is an independent publication covering the science, regulation, and market developments around research peptides. We follow the regulatory and enforcement landscape closely and aim to give researchers and industry observers clear, factual information without hype or agenda.
          </p>
          <p className="text-gray-400 text-xs mt-3">
            Content is for informational purposes only. Nothing here constitutes medical advice or an endorsement of any product.
          </p>
        </div>
      </main>

      <Footer />
    </>
  );
}
