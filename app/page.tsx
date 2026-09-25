import Image from "next/image";
import Link from "next/link";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { SectionLabel } from "@/components/Editorial";
import { images, type ImageKey } from "@/components/images";
import { IQONPartner } from "@/components/IQONPartner";

interface CardArticle {
  slug: string;
  category: string;
  date: string;
  readTime: string;
  title: string;
  excerpt: string;
  image: ImageKey;
}

const featuredArticle: CardArticle = {
  slug: "apex-peptides-raided-what-researchers-need-to-know",
  category: "Industry",
  date: "September 24, 2026",
  readTime: "6 min read",
  title: "Apex Peptides Raided by Federal Agents: What Researchers Need to Know",
  excerpt:
    "Local reports place federal searches at Apex-linked properties on September 23, 2026. What is confirmed, what remains unanswered, and how to evaluate a research supplier.",
  image: "apexRaid",
};

const industryArticles: CardArticle[] = [
  {
    slug: "what-happened-to-peptide-sciences",
    category: "Industry",
    date: "March 10, 2026",
    readTime: "7 min read",
    title: "What Happened to Peptide Sciences? Its Shutdown Notice Explained",
    excerpt:
      "Peptide Sciences says it voluntarily shut down research-product sales. Read its notice, what it does not explain, and how to assess an alternative supplier.",
    image: "researchVials",
  },
  {
    slug: "amino-asylum-raid-what-happened",
    category: "Industry",
    date: "January 15, 2026",
    readTime: "6 min read",
    title: "Amino Asylum Shutdown Reports: What Is Documented",
    excerpt:
      "Amino Asylum shutdown reports point to June 2025. What the coverage says, why the Paradigm Peptides case is separate, and how to evaluate a research alternative.",
    image: "padlock",
  },
  {
    slug: "paradigm-peptides-prison-sentence",
    category: "Industry",
    date: "August 1, 2026",
    readTime: "6 min read",
    title: "Paradigm Peptides Owner Sentenced to 70 Months in Federal Prison",
    excerpt:
      "The DOJ records Matthew Kawa's July 30, 2026 sentence of 70 months. The Paradigm Peptides case, the $5 million judgment and what it means for supplier documentation.",
    image: "dojBuilding",
  },
];

const regulatoryArticles: CardArticle[] = [
  {
    slug: "how-to-read-peptide-coa",
    category: "Guide",
    date: "September 25, 2026",
    readTime: "6 min read",
    title: "How to Read a Research Peptide Certificate of Analysis (COA)",
    excerpt:
      "Purity, identity, lot numbers and the lab's name: what each part of a peptide COA tells you, and how to check that the report is real.",
    image: "hplc",
  },
  {
    slug: "what-does-research-use-only-mean",
    category: "Explainer",
    date: "September 25, 2026",
    readTime: "6 min read",
    title: "What Does Research Use Only (RUO) Actually Mean in 2026?",
    excerpt:
      "Research use only is a labeling category FDA defined for lab products that are not ready for clinical use. FDA says the label must match how a product is actually marketed, and its August 2026 warning letters said RUO statements did not change its findings.",
    image: "magnifier",
  },
  {
    slug: "eli-lilly-lawsuits-research-peptide-sellers",
    category: "Litigation",
    date: "September 25, 2026",
    readTime: "6 min read",
    title: "Eli Lilly Sues Research Use Only Peptide Sellers: The 2026 Cases Explained",
    excerpt:
      "On August 12, 2026, Eli Lilly filed six federal civil lawsuits, four against online research use only peptide sellers. Here are the parties, courts, claims and what the cases signal.",
    image: "lillyHq",
  },
  {
    slug: "fda-warning-letters-peptide-sellers-august-2026",
    category: "Regulatory",
    date: "September 25, 2026",
    readTime: "6 min read",
    title: "FDA's August 24, 2026 Warning Letters to Online Peptide Sellers",
    excerpt:
      "FDA sent warning letters to five online peptide sellers, including Peptide Partners LLC and Royal Peptides LLC, and said research use only labels did not change its finding.",
    image: "fdaSign",
  },
  {
    slug: "state-crackdown-research-peptides-2026",
    category: "Regulatory",
    date: "September 25, 2026",
    readTime: "6 min read",
    title: "Which States Are Cracking Down on Research-Grade Peptides in 2026?",
    excerpt:
      "Alabama, Mississippi and South Carolina medical boards told licensed providers in 2026 they may not use research-grade peptides with patients. Ohio's pharmacy board says clinics cannot possess them.",
    image: "alabamaCapitol",
  },
  {
    slug: "peptide-enforcement-2026",
    category: "Regulatory",
    date: "September 24, 2026",
    readTime: "8 min read",
    title: "2026 Peptide Enforcement: The Major Documented Actions",
    excerpt:
      "Peptide Sciences' voluntary shutdown, the Paradigm Peptides sentence and the Apex Peptides search reports, in one documented timeline.",
    image: "gavel",
  },
  {
    slug: "compliant-research-peptide-supplier",
    category: "Guide",
    date: "September 24, 2026",
    readTime: "6 min read",
    title: "What to Check in a Research Peptide Supplier",
    excerpt:
      "Batch documentation and consistent positioning matter more than brand reputation. Five checks that separate supplier claims from evidence.",
    image: "lcms",
  },
];

function CardMeta({ a }: { a: CardArticle }) {
  return (
    <div className="flex flex-wrap items-center gap-x-2 gap-y-1 text-xs text-[color:var(--color-muted)]">
      <span className="kicker text-[color:var(--color-accent)]">{a.category}</span>
      <span aria-hidden>·</span>
      <span>{a.readTime}</span>
    </div>
  );
}

function ArticleCard({ a, sizes }: { a: CardArticle; sizes: string }) {
  const img = images[a.image];
  return (
    <article className="group flex flex-col">
      <Link href={`/${a.slug}`} className="block overflow-hidden bg-[color:var(--color-paper-deep)] aspect-[16/10] mb-4">
        <Image
          src={img.src}
          width={img.width}
          height={img.height}
          alt={img.alt}
          sizes={sizes}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
        />
      </Link>
      <CardMeta a={a} />
      <Link href={`/${a.slug}`} className="mt-2 flex-1">
        <h3 className="font-serif text-[1.3rem] leading-[1.25] font-semibold text-[color:var(--color-ink)] group-hover:text-[color:var(--color-accent)] transition-colors">
          {a.title}
        </h3>
        <p className="mt-2 text-[0.975rem] leading-relaxed text-[color:var(--color-muted)]">{a.excerpt}</p>
      </Link>
      <div className="mt-3 text-xs text-[color:var(--color-muted)]">{a.date}</div>
    </article>
  );
}


export default function Home() {
  const lead = images[featuredArticle.image];
  const [second, third, ...rest] = industryArticles;
  return (
    <>
      <Nav />

      <main className="max-w-6xl mx-auto px-5 sm:px-6 pt-6 sm:pt-10 pb-6">
        {/* Masthead date line */}
        <div className="flex items-center justify-between border-b-2 border-[color:var(--color-ink)] pb-2 mb-8 text-xs text-[color:var(--color-muted)]">
          <span className="kicker">Research · Regulation · Industry</span>
          <span className="hidden sm:inline">Independent reporting</span>
        </div>

        {/* Top story + two secondary stories */}
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 pb-12 mb-12 border-b border-[color:var(--color-rule)]">
          <article className="lg:col-span-8 group">
            <Link href={`/${featuredArticle.slug}`} className="block">
              <figure>
                <div className="overflow-hidden bg-[color:var(--color-paper-deep)] aspect-[16/10] -mx-5 sm:mx-0">
                  <Image
                    src={lead.src}
                    width={lead.width}
                    height={lead.height}
                    alt={lead.alt}
                    preload
                    sizes="(max-width: 1024px) 100vw, 740px"
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.02]"
                  />
                </div>
                <figcaption className="mt-2 text-xs text-[color:var(--color-muted)]">
                  {lead.caption} <span className="credit">Photo: {"credit" in lead && lead.credit ? lead.credit.replace(/^Photo: /, "") : `${lead.photographer} / Unsplash`}</span>
                </figcaption>
              </figure>
            </Link>
            <div className="mt-6 flex flex-wrap items-center gap-x-2 gap-y-1 text-xs text-[color:var(--color-muted)]">
              <span className="kicker text-[color:var(--color-accent)]">{featuredArticle.category}</span>
              <span aria-hidden>·</span>
              <span>{featuredArticle.date}</span>
              <span aria-hidden>·</span>
              <span>{featuredArticle.readTime}</span>
            </div>
            <Link href={`/${featuredArticle.slug}`}>
              <h1 className="mt-3 font-serif font-bold text-[color:var(--color-ink)] text-[2rem] sm:text-[2.6rem] lg:text-[2.9rem] leading-[1.08] tracking-[-0.015em] group-hover:text-[color:var(--color-accent)] transition-colors">
                {featuredArticle.title}
              </h1>
            </Link>
            <p className="mt-4 font-serif text-[1.15rem] sm:text-[1.25rem] leading-[1.5] text-[color:var(--color-muted)] max-w-[40rem]">
              {featuredArticle.excerpt}
            </p>
            <Link
              href={`/${featuredArticle.slug}`}
              className="inline-flex items-center mt-5 text-sm font-semibold text-[color:var(--color-ink)] border-b border-[color:var(--color-ink)] pb-0.5 hover:text-[color:var(--color-accent)] hover:border-[color:var(--color-accent)] transition-colors"
            >
              Read full article →
            </Link>
          </article>

          <div className="lg:col-span-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-10 lg:border-l lg:border-[color:var(--color-rule)] lg:pl-10">
            <ArticleCard a={second} sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 320px" />
            <ArticleCard a={third} sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 320px" />
          </div>
        </section>

        {/* Industry section */}
        <SectionLabel label="Industry" id="industry" />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-12 mb-4">
          {rest.map((a) => (
            <ArticleCard key={a.slug} a={a} sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 270px" />
          ))}
        </div>

        {/* Sponsor block 1 — after industry news */}
        <IQONPartner vial="nad" />

        {/* Regulatory section */}
        <SectionLabel label="Regulatory" id="regulatory" />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-12 mb-4">
          {regulatoryArticles.map((a) => (
            <ArticleCard key={a.slug} a={a} sizes="(max-width: 768px) 100vw, 540px" />
          ))}
        </div>

        {/* Partner block 2 */}
        <IQONPartner vial="glutathione" />

        {/* About */}
        <div id="about" className="scroll-mt-20 border-t border-[color:var(--color-rule)] pt-10 max-w-[42rem]">
          <h2 className="font-serif text-2xl font-semibold text-[color:var(--color-ink)] mb-3">About The Peptide Digest</h2>
          <p className="text-[color:var(--color-body)] text-[1.05rem] leading-relaxed">
            The Peptide Digest is an independent publication covering the science, regulation, and market developments around research peptides. We follow the regulatory and enforcement landscape closely and aim to give researchers and industry observers clear, factual information without hype or agenda.
          </p>
          <p className="text-[color:var(--color-muted)] text-xs mt-3">
            Content is for informational purposes only. Nothing here constitutes medical advice or an endorsement of any product.
          </p>
        </div>
      </main>

      <Footer />
    </>
  );
}
