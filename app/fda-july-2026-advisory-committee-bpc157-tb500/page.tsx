import type { Metadata } from "next";
import Link from "next/link";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";

export const metadata: Metadata = {
  title: "FDA Advisory Committee Reviews BPC-157, TB-500, and Five Other Compounds",
  description: "On July 23-24, 2026, the FDA's Pharmacy Compounding Advisory Committee reviewed seven bulk drug substances including BPC-157 and TB-500. Here is what was evaluated and what the recommendations mean for researchers.",
  alternates: { canonical: "https://peptidedigest.co/fda-july-2026-advisory-committee-bpc157-tb500" },
  openGraph: {
    title: "FDA Advisory Committee Reviews BPC-157, TB-500, and Five Other Compounds",
    description: "The FDA's Pharmacy Compounding Advisory Committee met July 23-24, 2026 and reviewed seven compounds including BPC-157 and TB-500. Full summary of what was evaluated.",
    type: "article",
    publishedTime: "2026-07-28T12:00:00.000Z",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "NewsArticle",
      "@id": "https://peptidedigest.co/fda-july-2026-advisory-committee-bpc157-tb500#article",
      headline: "FDA Advisory Committee Reviews BPC-157, TB-500, and Five Other Compounds",
      datePublished: "2026-07-28T12:00:00.000Z",
      dateModified: "2026-09-25T12:00:00.000Z",
      author: { "@type": "Organization", name: "The Peptide Digest", url: "https://peptidedigest.co" },
      publisher: { "@type": "NewsMediaOrganization", name: "The Peptide Digest", url: "https://peptidedigest.co" },
      keywords: "FDA BPC-157 advisory committee 2026, FDA TB-500 compounding, pharmacy compounding advisory committee peptides, PCAC BPC-157",
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        { "@type": "Question", name: "What did the FDA advisory committee review in July 2026?", acceptedAnswer: { "@type": "Answer", text: "The FDA's Pharmacy Compounding Advisory Committee (PCAC) met on July 23-24, 2026 and reviewed seven bulk drug substances including BPC-157 and TB-500. The committee evaluated whether these substances met the criteria for inclusion on the list of bulk drug substances that may be used in compounding under Section 503A and 503B of the Federal Food, Drug, and Cosmetic Act." } },
        { "@type": "Question", name: "What did the FDA advisory committee recommend for BPC-157?", acceptedAnswer: { "@type": "Answer", text: "The FDA's Pharmacy Compounding Advisory Committee reviewed BPC-157 as part of the July 2026 meeting. The committee evaluates safety, clinical need, and available evidence. Formal final determinations follow the advisory committee meeting and are subject to additional FDA review." } },
        { "@type": "Question", name: "What did the FDA advisory committee recommend for TB-500?", acceptedAnswer: { "@type": "Answer", text: "TB-500 was among the seven bulk drug substances reviewed at the July 23-24, 2026 PCAC meeting. Committee recommendations address whether there is clinical need and whether safety concerns preclude inclusion. Final FDA determinations follow the advisory process." } },
        { "@type": "Question", name: "What does the PCAC advisory committee review mean for research peptide availability?", acceptedAnswer: { "@type": "Answer", text: "The PCAC process applies specifically to pharmacy compounding — the preparation of customized medications by licensed pharmacies. Research peptide vendors operating under research-use-only frameworks are subject to different regulatory considerations." } },
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

export default function FDAAdvisoryCommitteeBPC157TB500() {
  return (
    <>
      <Nav />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <main className="max-w-2xl mx-auto px-6 py-12">
        <div className="flex items-center gap-2 text-xs text-gray-400 mb-8">
          <Link href="/" className="hover:text-gray-700 transition-colors">The Peptide Digest</Link>
          <span>/</span>
          <span className="bg-purple-50 text-purple-700 px-2 py-0.5 rounded-full font-medium">Regulation</span>
        </div>
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight mb-5" style={{ fontFamily: "var(--font-lora), Georgia, serif" }}>
          FDA Advisory Committee Reviews BPC-157, TB-500, and Five Other Compounds
        </h1>
        <div className="flex items-center gap-4 text-xs text-gray-400 mb-8 pb-8 border-b border-gray-200">
          <time dateTime="2026-07-28">July 28, 2026</time><span>·</span><span>7 min read</span><span>·</span><span>The Peptide Digest Staff</span>
        </div>
        <div className="text-[15px] leading-relaxed space-y-5 text-gray-700">
          <p className="text-lg text-gray-800 font-medium leading-relaxed">
            On July 23 and 24, 2026, the FDA&apos;s Pharmacy Compounding Advisory Committee convened a two-day meeting to evaluate seven bulk drug substances — including BPC-157 and TB-500 — for potential inclusion on the list of substances that may be used in pharmacy compounding.
          </p>
          <p>The meeting is one of the more significant regulatory events of 2026 for the peptide research community. It marks the FDA formally putting several widely researched compounds through its compounding-review framework, with recommendations that will inform final agency determinations.</p>

          <h2 className="text-xl font-semibold text-gray-900 pt-4" style={{ fontFamily: "var(--font-lora), Georgia, serif" }}>What Is the PCAC and Why Does It Matter?</h2>
          <p>The Pharmacy Compounding Advisory Committee (PCAC) advises the FDA on substances that compounding pharmacies may use under Sections 503A and 503B of the Federal Food, Drug, and Cosmetic Act. When the FDA is evaluating whether a bulk drug substance can be used in compounding, it refers to the PCAC for scientific and clinical input.</p>
          <p>The committee evaluates each substance on three primary criteria: whether there is a clinical need that cannot be met by commercially available products; whether the substance has sufficient safety data to support its use in a compounded formulation; and whether there are quality and manufacturing considerations that affect compounding feasibility.</p>
          <p>A PCAC recommendation is not a final FDA determination, but it carries significant weight. Positive committee recommendations have generally led to inclusion on the 503A or 503B bulks lists, while negative recommendations have been upheld by the agency in most historical cases.</p>

          <InlinePartner text="Researchers tracking FDA developments on BPC-157 and TB-500 — IQON Health provides research-grade supply with third-party COA documentation." cta="View products →" />

          <h2 className="text-xl font-semibold text-gray-900 pt-4" style={{ fontFamily: "var(--font-lora), Georgia, serif" }}>The Seven Compounds Under Review</h2>
          <p>BPC-157 and TB-500 were the highest-profile compounds on the July 2026 agenda, but the committee reviewed five additional bulk drug substances over the two-day meeting. The full review agenda reflects the FDA&apos;s ongoing effort to work through its backlog of nominated bulk drug substances — a process that has accelerated since 2024 as the agency increased resources allocated to the compounding review program.</p>
          <p>BPC-157 (Body Protection Compound-157) is a synthetic pentadecapeptide derived from a sequence found in human gastric juice. It has been the subject of substantial preclinical literature and is among the most frequently nominated compounds for the PCAC review process. TB-500 is a synthetic fragment of Thymosin Beta-4 and has been studied in preclinical models of tissue repair and angiogenesis.</p>

          <h2 className="text-xl font-semibold text-gray-900 pt-4" style={{ fontFamily: "var(--font-lora), Georgia, serif" }}>What the Committee Evaluated</h2>
          <p>For each compound, the PCAC reviewed submitted scientific literature, including in vitro studies, animal model research, and any available clinical data. The committee also received public comment from stakeholder groups representing physicians, patients, and research institutions.</p>
          <p>A recurring theme across the July 2026 meeting was the asymmetry between the volume of preclinical literature available for these compounds and the relative scarcity of controlled human clinical trial data. This gap has been consistent across multiple PCAC review cycles and reflects the broader research-to-clinical-evidence pipeline for peptide compounds.</p>

          <InlinePartner text="IQON Health carries research-grade BPC-157 and TB-500 with independent third-party testing. For research use only." cta="Browse →" />

          <h2 className="text-xl font-semibold text-gray-900 pt-4" style={{ fontFamily: "var(--font-lora), Georgia, serif" }}>What the Recommendations Mean for Researchers</h2>
          <p>The PCAC process applies specifically to pharmacy compounding — the preparation of customized medications by licensed pharmacies under FDA oversight. A positive PCAC recommendation and subsequent inclusion on the 503A or 503B bulks list would permit licensed compounders to prepare BPC-157 or TB-500 formulations for patients with a legitimate clinical need and a prescription from a licensed practitioner.</p>
          <p>This is a distinct regulatory pathway from research peptide suppliers, who operate under different frameworks. However, the PCAC review process is significant for researchers because it represents the FDA formally evaluating the scientific evidence base for these compounds and placing them within its established regulatory infrastructure.</p>
          <p>For the research community, the July 2026 meeting is a reference point: it documents the state of evidence as assessed by a formal FDA advisory process, identifies gaps in the existing literature, and provides a record of what the agency considers sufficient or insufficient grounds for regulatory authorization in the compounding context.</p>

          <h2 className="text-xl font-semibold text-gray-900 pt-4" style={{ fontFamily: "var(--font-lora), Georgia, serif" }}>Final Determinations: What Comes Next</h2>
          <p>Following a PCAC meeting, the FDA reviews the committee&apos;s recommendations and issues final determinations, typically within several months. These determinations are published in the Federal Register and become part of the official regulatory record for each compound. Researchers and compounding pharmacies track these determinations closely, as they define the legal landscape for compound availability through licensed pharmacy channels.</p>

          <div className="mt-8 rounded-xl border border-gray-200 bg-gray-50 p-6">
            <div className="text-xs font-semibold uppercase tracking-widest text-gray-400 mb-2">Partner</div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2" style={{ fontFamily: "var(--font-lora), Georgia, serif" }}>IQON Health — Research Peptides</h3>
            <p className="text-sm text-gray-500 mb-4">Third-party tested. Research-use-only. US-based. COAs on every product. Same-day shipping.</p>
            <a href="https://www.iqonhealth.com/shop" target="_blank" rel="noopener noreferrer" className="inline-flex items-center px-5 py-2.5 rounded-lg bg-gray-900 text-white text-sm font-medium hover:bg-gray-700 transition-colors">Browse the catalog →</a>
          </div>

          <div className="mt-12 pt-8 border-t border-gray-200 space-y-5">
            <h2 className="text-lg font-semibold text-gray-900" style={{ fontFamily: "var(--font-lora), Georgia, serif" }}>Frequently Asked Questions</h2>
            {[
              { q: "What did the FDA advisory committee review in July 2026?", a: "The FDA's Pharmacy Compounding Advisory Committee met July 23-24, 2026 and reviewed seven bulk drug substances including BPC-157 and TB-500 for potential inclusion on the list of substances that may be used in pharmacy compounding." },
              { q: "What did the FDA advisory committee recommend for BPC-157?", a: "The committee evaluated BPC-157 on criteria including clinical need and safety data. Formal final determinations follow the advisory process and are subject to additional FDA review and Federal Register publication." },
              { q: "What did the FDA advisory committee recommend for TB-500?", a: "TB-500 was among the seven compounds reviewed at the July 2026 PCAC meeting. Committee recommendations address clinical need and safety. Final FDA determinations follow the advisory process." },
              { q: "What does the PCAC review mean for research peptide availability?", a: "The PCAC process governs pharmacy compounding — a distinct pathway from research peptide supply. For researchers, the meeting is significant as a formal FDA evaluation of the scientific evidence base for these compounds." },
            ].map(({ q, a }) => (<div key={q}><h3 className="text-sm font-semibold text-gray-900 mb-1">{q}</h3><p className="text-sm text-gray-500">{a}</p></div>))}
          </div>

          <div className="mt-8 pt-6 border-t border-gray-200">
            <h2 className="text-base font-semibold text-gray-900 mb-4" style={{ fontFamily: "var(--font-lora), Georgia, serif" }}>Related Coverage</h2>
            <div className="space-y-3">
              {[
                { slug: "tb500-thymosin-beta-4-research-summary", title: "TB-500 and Thymosin Beta-4: A Research Summary" },
                { slug: "peptide-enforcement-2026", title: "2026 Peptide Enforcement Timeline" },
                { slug: "what-makes-a-compliant-peptide-supplier-2026", title: "What a Compliant Research Peptide Supplier Looks Like in 2026" },
                { slug: "peptide-sciences-shutdown-market-impact", title: "Peptide Sciences Shutdown: The Market Fallout Three Months Later" },
              ].map((r) => (<Link key={r.slug} href={`/${r.slug}`} className="block text-sm text-gray-700 hover:text-blue-700 transition-colors">{r.title} →</Link>))}
            </div>
          </div>
          <p className="text-xs text-gray-400 pt-6 border-t border-gray-200 mt-4">For informational purposes only. Not medical or legal advice.</p>
        </div>
      </main>
      <Footer />
    </>
  );
}
