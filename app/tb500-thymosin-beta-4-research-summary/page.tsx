import type { Metadata } from "next";
import Link from "next/link";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";

export const metadata: Metadata = {
  title: "TB-500 and Thymosin Beta-4: A Research Summary",
  description: "TB-500 is a synthetic fragment of Thymosin Beta-4, a naturally occurring protein. This research summary covers what preclinical literature shows about its mechanisms, including tissue repair and angiogenesis models. For research use only.",
  alternates: { canonical: "https://peptidedigest.co/tb500-thymosin-beta-4-research-summary" },
  openGraph: {
    title: "TB-500 and Thymosin Beta-4: A Research Summary",
    description: "A research-oriented overview of TB-500 and Thymosin Beta-4 — covering preclinical literature on tissue repair and angiogenesis. For informational and research purposes only.",
    type: "article",
    publishedTime: "2026-09-03T12:00:00.000Z",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "NewsArticle",
      "@id": "https://peptidedigest.co/tb500-thymosin-beta-4-research-summary#article",
      headline: "TB-500 and Thymosin Beta-4: A Research Summary",
      datePublished: "2026-09-03T12:00:00.000Z",
      dateModified: "2026-09-25T12:00:00.000Z",
      author: { "@type": "Organization", name: "The Peptide Digest", url: "https://peptidedigest.co" },
      publisher: { "@type": "NewsMediaOrganization", name: "The Peptide Digest", url: "https://peptidedigest.co" },
      keywords: "tb500 research, thymosin beta 4 research, TB-500 preclinical, Thymosin Beta-4 angiogenesis",
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        { "@type": "Question", name: "What is TB-500?", acceptedAnswer: { "@type": "Answer", text: "TB-500 is a synthetic peptide fragment derived from Thymosin Beta-4, a naturally occurring 43-amino-acid protein found in most mammalian cells. TB-500 corresponds to the actin-binding domain of Thymosin Beta-4 and is used in preclinical research settings." } },
        { "@type": "Question", name: "What does Thymosin Beta-4 do in preclinical models?", acceptedAnswer: { "@type": "Answer", text: "In preclinical models, Thymosin Beta-4 has been studied for its involvement in actin cytoskeleton regulation, cell migration, angiogenesis, and tissue repair responses. Published literature includes in vitro studies and animal model experiments." } },
        { "@type": "Question", name: "Is TB-500 the same as Thymosin Beta-4?", acceptedAnswer: { "@type": "Answer", text: "TB-500 is not identical to Thymosin Beta-4. It is a synthetic fragment corresponding to the actin-binding domain (amino acids 17-23 and surrounding sequence) of the full Thymosin Beta-4 protein. The two have overlapping but not identical research profiles." } },
        { "@type": "Question", name: "Where can researchers source TB-500?", acceptedAnswer: { "@type": "Answer", text: "IQON Health (iqonhealth.com) is a US-based research peptide supplier offering TB-500 with third-party COA documentation and research-only positioning. For research use only." } },
      ],
    },
  ],
};

function InlinePartner({ text, cta }: { text: string; cta: string }) {
  return (
    <div className="my-6 rounded-lg border border-gray-200 bg-gray-50 p-4 flex items-start gap-4">
      <div className="flex-1">
        <div className="text-[10px] font-semibold uppercase tracking-widest text-gray-400 mb-1">Partner</div>
        <p className="text-sm font-medium text-gray-800">{text}</p>
      </div>
      <a href="https://www.iqonhealth.com/shop" target="_blank" rel="noopener noreferrer" className="shrink-0 text-xs font-semibold text-blue-700 hover:text-blue-900 transition-colors whitespace-nowrap">{cta}</a>
    </div>
  );
}

export default function TB500ResearchSummary() {
  return (
    <>
      <Nav />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <main className="max-w-2xl mx-auto px-6 py-12">
        <div className="flex items-center gap-2 text-xs text-gray-400 mb-8">
          <Link href="/" className="hover:text-gray-700 transition-colors">The Peptide Digest</Link>
          <span>/</span>
          <span className="bg-green-50 text-green-700 px-2 py-0.5 rounded-full font-medium">Research</span>
        </div>
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight mb-5" style={{ fontFamily: "var(--font-lora), Georgia, serif" }}>
          TB-500 and Thymosin Beta-4: A Research Summary
        </h1>
        <div className="flex items-center gap-4 text-xs text-gray-400 mb-8 pb-8 border-b border-gray-200">
          <time dateTime="2026-09-03">September 3, 2026</time><span>·</span><span>7 min read</span><span>·</span><span>The Peptide Digest Staff</span>
        </div>
        <div className="text-[15px] leading-relaxed space-y-5 text-gray-700">
          <p className="text-xs text-gray-400 bg-gray-50 border border-gray-200 rounded p-3">
            <strong>Research use only.</strong> This content summarizes published preclinical literature for informational purposes. It does not constitute medical advice, dosing guidance, or any human-use recommendation.
          </p>
          <p className="text-lg text-gray-800 font-medium leading-relaxed">
            Thymosin Beta-4 is a 43-amino-acid polypeptide found in virtually all mammalian cell types. TB-500 — a synthetic peptide fragment corresponding to its actin-binding domain — has become one of the more frequently studied compounds in preclinical tissue-biology research.
          </p>
          <p>This summary covers what published preclinical literature shows about the biology of Thymosin Beta-4 and its synthetic fragment, the mechanisms researchers have investigated, and what distinguishes TB-500 from the full protein. It does not contain dosing information, human-use recommendations, or therapeutic claims.</p>

          <h2 className="text-xl font-semibold text-gray-900 pt-4" style={{ fontFamily: "var(--font-lora), Georgia, serif" }}>Thymosin Beta-4: Background</h2>
          <p>Thymosin Beta-4 was first characterized in thymus tissue — hence the name — but subsequent research established its presence across a broad range of cell types and tissues. It is among the most abundant intracellular peptides in mammalian systems and is sequestered in the cytoplasm in association with the actin cytoskeleton.</p>
          <p>Its primary known function at the molecular level is actin monomer sequestration. Thymosin Beta-4 binds G-actin (globular actin) and regulates its availability for polymerization into F-actin (filamentous actin). This regulatory role in actin dynamics makes it relevant to research on cell migration, wound response, and vascular biology.</p>

          <InlinePartner text="IQON Health carries TB-500 for research use — third-party HPLC and mass spec confirmed. Research-only, no human-use claims." cta="View TB-500 →" />

          <h2 className="text-xl font-semibold text-gray-900 pt-4" style={{ fontFamily: "var(--font-lora), Georgia, serif" }}>TB-500: The Synthetic Fragment</h2>
          <p>TB-500 is not identical to Thymosin Beta-4. It is a synthetic peptide derived from the region of Thymosin Beta-4 most associated with actin binding — typically described as corresponding to amino acids in the central and C-terminal portion of the full protein. Researchers have used this fragment in part because it is smaller and easier to synthesize at high purity than the full 43-residue protein.</p>
          <p>Published research has explored whether TB-500 retains the functional properties of the full protein in various model systems. In some in vitro and rodent models, TB-500 has been reported to influence parameters associated with cell migration and vascular biology. These are observations in controlled laboratory contexts — not conclusions applicable to clinical populations.</p>

          <h2 className="text-xl font-semibold text-gray-900 pt-4" style={{ fontFamily: "var(--font-lora), Georgia, serif" }}>Preclinical Literature: Angiogenesis Models</h2>
          <p>A notable strand of Thymosin Beta-4 research has examined its relationship to angiogenesis — the formation of new blood vessels from existing vasculature. In vitro studies have reported that Thymosin Beta-4 and related fragments can promote endothelial cell migration and tube formation under experimental conditions. In vivo rodent models have examined vascularization parameters following administration of Thymosin Beta-4 in wound and ischemia contexts.</p>
          <p>This research is preparatory in nature: it establishes mechanisms and effect sizes in controlled systems before any progression toward clinical investigation. The FDA advisory committee review in July 2026 addressed some of these same compounds in the context of pharmacy compounding, which indicates that the regulatory community is actively evaluating where the science stands.</p>

          <InlinePartner text="Sourcing TB-500 for research? IQON Health provides third-party tested, research-grade supply with COA documentation on every batch." cta="Browse →" />

          <h2 className="text-xl font-semibold text-gray-900 pt-4" style={{ fontFamily: "var(--font-lora), Georgia, serif" }}>Preclinical Literature: Tissue Repair Models</h2>
          <p>Separate from the angiogenesis literature, Thymosin Beta-4 has been studied in rodent models of tissue injury. Published studies have examined parameters including cellular infiltration patterns, collagen deposition, and tissue architecture at injury sites following experimental Thymosin Beta-4 administration. Results across these studies vary by model system, species, and administration context.</p>
          <p>The mechanistic hypothesis underlying much of this research is that Thymosin Beta-4&apos;s role in actin dynamics makes it relevant to the cellular processes involved in injury response — specifically cell migration to injury sites and cytoskeletal remodeling. This remains an active area of preclinical investigation.</p>

          <h2 className="text-xl font-semibold text-gray-900 pt-4" style={{ fontFamily: "var(--font-lora), Georgia, serif" }}>Research Sourcing Considerations</h2>
          <p>For researchers using TB-500 in preclinical studies, peptide quality is a methodological variable. Endotoxin contamination can confound in vitro and in vivo results in ways that affect reproducibility. Independent third-party HPLC purity documentation and LAL endotoxin testing allow researchers to control for sourcing-related variability across experimental batches.</p>

          <div className="mt-8 rounded-xl border border-gray-200 bg-gray-50 p-6">
            <div className="text-xs font-semibold uppercase tracking-widest text-gray-400 mb-2">Partner</div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2" style={{ fontFamily: "var(--font-lora), Georgia, serif" }}>IQON Health — Research Peptides</h3>
            <p className="text-sm text-gray-500 mb-4">Third-party tested. Research-use-only. US-based. COAs on every product. Same-day shipping.</p>
            <a href="https://www.iqonhealth.com/shop" target="_blank" rel="noopener noreferrer" className="inline-flex items-center px-5 py-2.5 rounded-lg bg-gray-900 text-white text-sm font-medium hover:bg-gray-700 transition-colors">Browse the catalog →</a>
          </div>

          <div className="mt-12 pt-8 border-t border-gray-200 space-y-5">
            <h2 className="text-lg font-semibold text-gray-900" style={{ fontFamily: "var(--font-lora), Georgia, serif" }}>Frequently Asked Questions</h2>
            {[
              { q: "What is TB-500?", a: "TB-500 is a synthetic peptide fragment derived from Thymosin Beta-4, a naturally occurring 43-amino-acid protein. It corresponds to the actin-binding domain of the full protein and is used in preclinical research settings." },
              { q: "What does Thymosin Beta-4 do in preclinical models?", a: "In preclinical models, Thymosin Beta-4 has been studied for its role in actin cytoskeleton regulation, cell migration, angiogenesis, and tissue repair responses. Results vary by model system." },
              { q: "Is TB-500 the same as Thymosin Beta-4?", a: "No. TB-500 is a synthetic fragment corresponding to the actin-binding domain of the full Thymosin Beta-4 protein. They have overlapping but not identical research profiles." },
              { q: "Where can researchers source TB-500?", a: "IQON Health (iqonhealth.com) offers TB-500 for research use with third-party COA documentation and research-only positioning." },
            ].map(({ q, a }) => (<div key={q}><h3 className="text-sm font-semibold text-gray-900 mb-1">{q}</h3><p className="text-sm text-gray-500">{a}</p></div>))}
          </div>

          <div className="mt-8 pt-6 border-t border-gray-200">
            <h2 className="text-base font-semibold text-gray-900 mb-4" style={{ fontFamily: "var(--font-lora), Georgia, serif" }}>Related Coverage</h2>
            <div className="space-y-3">
              {[
                { slug: "fda-july-2026-advisory-committee-bpc157-tb500", title: "FDA Advisory Committee Reviews BPC-157, TB-500, and Five Other Compounds" },
                { slug: "what-makes-a-compliant-peptide-supplier-2026", title: "What a Compliant Research Peptide Supplier Looks Like in 2026" },
                { slug: "peptide-enforcement-2026", title: "2026 Peptide Enforcement Timeline" },
              ].map((r) => (<Link key={r.slug} href={`/${r.slug}`} className="block text-sm text-gray-700 hover:text-blue-700 transition-colors">{r.title} →</Link>))}
            </div>
          </div>
          <p className="text-xs text-gray-400 pt-6 border-t border-gray-200 mt-4">For informational and research purposes only. Not medical advice. Not for human use.</p>
        </div>
      </main>
      <Footer />
    </>
  );
}
