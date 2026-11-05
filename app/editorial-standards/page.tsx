import type { Metadata } from "next";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";

const url = "https://peptidedigest.co/editorial-standards";
const description = "How The Peptide Digest uses sources, evaluates evidence, uses AI tools and handles updates, corrections and commercial links.";

export const metadata: Metadata = {
  title: "Editorial standards",
  description,
  alternates: { canonical: url },
  openGraph: {
    type: "website",
    siteName: "The Peptide Digest",
    url,
    title: "Editorial standards | The Peptide Digest",
    description,
    images: [{ url: "/og-default.png", width: 1200, height: 630, type: "image/png", alt: "The Peptide Digest" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Editorial standards | The Peptide Digest",
    description,
    images: ["/og-default.png"],
  },
};

const schema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "@id": url,
  url,
  name: "Editorial standards | The Peptide Digest",
  description,
  isPartOf: { "@id": "https://peptidedigest.co/#website" },
  publisher: { "@id": "https://peptidedigest.co/#organization" },
};

export default function EditorialStandards() {
  return (
    <>
      <Nav />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema).replace(/</g, "\\u003c") }} />
      <main className="max-w-[45rem] mx-auto px-5 sm:px-6 py-10 sm:py-14">
        <p className="kicker text-[color:var(--color-accent)] mb-4">The Peptide Digest</p>
        <h1 className="headline">Editorial standards</h1>
        <div className="article-body mt-6">
          <p>The Peptide Digest covers peptide research, scientific progress and industry developments. Our aim is to explain new findings clearly and show the evidence behind them.</p>

          <h2>Sources and evidence</h2>
          <p>We use primary research papers, trial registries and official documents where available, with citations readers can inspect. We distinguish published results from sponsor claims and preprints, and identify whether findings come from cell experiments, animal studies or human studies. Those forms of evidence answer different questions and have different limits.</p>

          <h2>A constructive perspective</h2>
          <p>We prioritize credible scientific progress and useful discoveries while retaining material risks, conflicting results and study limitations. Promising findings do not mean a treatment or product is proven.</p>

          <h2>How AI is used</h2>
          <p>AI tools assist with research, drafting and production. Articles are checked against cited sources before publication. These checks are not medical review.</p>
          <p>AI generated illustrations are labeled as such. They are not documentary photographs of the events, facilities or studies described.</p>

          <h2 id="updates-and-corrections" className="scroll-mt-24">Updates and corrections</h2>
          <p>Our policy is to mark material new facts or factual corrections with a visible update or correction note and a corresponding modification date. We do not change dates merely to make a page look fresh.</p>

          <h2>Commercial links</h2>
          <p>The site includes promotional placements linking to IQON Labs. These placements are separate from the scientific sources cited in our reporting and do not establish a product&apos;s safety or efficacy.</p>

          <h2>Information, not medical advice</h2>
          <p>Our reporting is for informational purposes and does not provide personal treatment recommendations. Research use only products are not represented as approved treatments.</p>
        </div>
      </main>
      <Footer />
    </>
  );
}
