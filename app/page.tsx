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

const articles = [
  {
    slug: "fda-july-2026-advisory-committee-bpc157-tb500",
    category: "Regulatory",
    date: "July 28, 2026",
    readTime: "8 min read",
    title: "FDA Advisory Committee Reviews BPC-157, TB-500, and Five Other Compounds",
    excerpt:
      "The July 23–24 Pharmacy Compounding Advisory Committee meeting covered seven bulk drug substances. We break down what the committee evaluated and what their recommendations mean for the research-peptide market.",
  },
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
    slug: "bpc-157-research-overview-2026",
    category: "Research",
    date: "August 12, 2026",
    readTime: "10 min read",
    title: "BPC-157: What the Current Literature Actually Says",
    excerpt:
      "A structured review of preclinical research on BPC-157 — mechanisms proposed, what animal studies show, and why researchers continue studying this compound despite the regulatory uncertainty.",
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
    slug: "tb500-thymosin-beta-4-research-summary",
    category: "Research",
    date: "September 3, 2026",
    readTime: "9 min read",
    title: "TB-500 and Thymosin Beta-4: A Research Summary",
    excerpt:
      "TB-500 (a synthetic fragment of Thymosin Beta-4) has been studied in preclinical models for tissue repair and angiogenesis. Here is what the literature shows.",
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
];

const categoryColors: Record<string, string> = {
  Industry: "bg-orange-50 text-orange-700",
  Regulatory: "bg-blue-50 text-blue-700",
  Research: "bg-green-50 text-green-700",
};

export default function Home() {
  return (
    <>
      <Nav />

      {/* Hero / Featured */}
      <main className="max-w-5xl mx-auto px-6 pt-12 pb-6">
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

        {/* Section label */}
        <div id="industry" className="flex items-center gap-3 mb-6">
          <h2 className="text-xs font-semibold uppercase tracking-widest text-gray-400">
            Latest
          </h2>
          <div className="flex-1 h-px bg-gray-200" />
        </div>

        {/* Article grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {articles.map((a) => (
            <article key={a.slug} className="flex flex-col">
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
          ))}
        </div>

        {/* About section */}
        <div id="about" className="border-t border-gray-200 pt-10 mt-4">
          <h2
            className="text-xl font-semibold text-gray-900 mb-3"
            style={{ fontFamily: "var(--font-lora), Georgia, serif" }}
          >
            About Peptide Digest
          </h2>
          <p className="text-gray-500 text-sm leading-relaxed max-w-2xl">
            Peptide Digest is an independent publication covering the science,
            regulation, and market developments around research peptides. We
            follow the regulatory and enforcement landscape closely and aim to
            give researchers and industry observers clear, factual information
            without hype or agenda.
          </p>
          <p className="text-gray-400 text-xs mt-3">
            Content is for informational purposes only. Nothing here constitutes
            medical advice or an endorsement of any product.
          </p>
        </div>
      </main>

      <Footer />
    </>
  );
}
