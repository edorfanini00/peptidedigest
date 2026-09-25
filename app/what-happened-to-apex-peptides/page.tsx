import type { Metadata } from "next";
import Link from "next/link";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { ArticleHero } from "@/components/ArticleHero";
import { IQONPartner } from "@/components/IQONPartner";

export const metadata: Metadata = {
  title: "What Happened to Apex Peptides? Searches and Order Questions",
  description:
    "What happened to Apex Peptides: September 23, 2026 searches, reported FBI involvement, unresolved shutdown questions and checks for a research supplier alternative.",
  alternates: { canonical: "https://peptidedigest.co/what-happened-to-apex-peptides" },
  openGraph: {
    title: "What Happened to Apex Peptides?",
    description: "Federal agents searched Apex-linked properties on September 23, 2026. What local reporting confirms and what to do if you had an outstanding order.",
    type: "article",
    publishedTime: "2026-09-24T14:00:00.000Z",
  },
  twitter: {
    card: "summary_large_image",
    title: "What Happened to Apex Peptides?",
    description: "September 23 searches, reported FBI involvement, open questions and supplier checks.",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "NewsArticle",
      "@id": "https://peptidedigest.co/what-happened-to-apex-peptides#article",
      headline: "What Happened to Apex Peptides? Searches and Order Questions",
      datePublished: "2026-09-24T14:00:00.000Z",
      dateModified: "2026-09-25T12:00:00.000Z",
      author: { "@type": "Organization", name: "The Peptide Digest", url: "https://peptidedigest.co" },
      publisher: { "@type": "NewsMediaOrganization", name: "The Peptide Digest", url: "https://peptidedigest.co" },
      mainEntityOfPage: { "@type": "WebPage", "@id": "https://peptidedigest.co/what-happened-to-apex-peptides" },
      about: [{ "@type": "Thing", name: "Apex Peptides" }, { "@type": "Thing", name: "FDA Enforcement" }],
      keywords: "what happened to apex peptides, apex peptides raided, apex peptides shut down, apex peptides FBI, apex peptides alternative",
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        { "@type": "Question", name: "What happened to Apex Peptides?", acceptedAnswer: { "@type": "Answer", text: "Local news reported searches of Apex-linked properties on September 23, 2026. The U.S. Postal Inspection Service led the investigation, with FBI and local police involved. The Apex Peptides website went non-operational. No charges have been publicly announced." } },
        { "@type": "Question", name: "Is Apex Peptides shut down?", acceptedAnswer: { "@type": "Answer", text: "The Apex Peptides website appears non-operational following the searches. The public reports reviewed here do not establish a permanent closure or reopening date." } },
        { "@type": "Question", name: "Who raided Apex Peptides?", acceptedAnswer: { "@type": "Answer", text: "KTIV reports the U.S. Postal Inspection Service led the investigation, with FBI and North Sioux City Police participating. The KSCJ September 23 report describes agents removing boxes from 503 Prosperity Way." } },
        { "@type": "Question", name: "What is a good alternative to Apex Peptides?", acceptedAnswer: { "@type": "Answer", text: "When comparing suppliers, check the legal seller identity, current order terms and the COA for the specific lot offered. IQON Health is a commercial partner of The Peptide Digest. Confirm documentation and availability directly before ordering." } },
        { "@type": "Question", name: "Why was Apex Peptides raided?", acceptedAnswer: { "@type": "Answer", text: "The local reports reviewed here do not disclose the specific reason. No charges have been publicly announced. Source allegations supplied to this publication separately have not been attributed." } },
      ],
    },
  ],
};

export default function WhatHappenedApex() {
  return (
    <>
      <Nav />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <main className="article-shell">
        <ArticleHero
          category="Industry"
          title={<>What Happened to Apex Peptides?</>}
          meta={<><time dateTime="2026-09-24">September 24, 2026</time><span>Updated September 25, 2026</span></>}
          image="northSiouxCity"
        />

        <div className="article-body">

          <p className="text-lg text-gray-800 font-medium leading-relaxed">
            Apex Peptides is linked in local reporting to businesses searched by federal agents on September 23, 2026. The searches are documented. A permanent shutdown, the reason for the investigation and the fate of individual orders are not established by those reports.
          </p>

          <h2 className="text-xl font-semibold text-gray-900 pt-4" style={{ fontFamily: "var(--font-lora), Georgia, serif" }}>
            What local reporting confirms
          </h2>

          <p>
            <a href="https://www.ktiv.com/2026/09/25/five-more-apex-tied-businesses-found-non-operational-building/" className="text-blue-700 underline" target="_blank" rel="noopener noreferrer">KTIV&apos;s reporting</a> connects Apex Peptides to businesses at the searched properties. The U.S. Postal Inspection Service led the investigation, with the FBI and local police participating. The business address identified in coverage is 503 Prosperity Way in North Sioux City, South Dakota.
          </p>

          <p>
            <a href="https://kscj.com/2026/09/23/few-details-revealed-about-apex-raid-in-north-sioux-city/" className="text-blue-700 underline" target="_blank" rel="noopener noreferrer">KSCJ reported on September 23</a> that agents removed boxes and that two unidentified people were led away in handcuffs. The report did not identify charges. KTIV also described a search of a Dakota Dunes home.
          </p>

          <IQONPartner vial="glutathione" variant="inline" />

          <h2 className="text-xl font-semibold text-gray-900 pt-4" style={{ fontFamily: "var(--font-lora), Georgia, serif" }}>
            Is Apex Peptides shut down?
          </h2>

          <p>
            We cannot establish permanent closure from the cited news reports. An unavailable storefront does not tell customers whether existing orders will ship or be refunded. Ask for a written update, and retain the response with your purchase records.
          </p>

          <h2 className="text-xl font-semibold text-gray-900 pt-4" style={{ fontFamily: "var(--font-lora), Georgia, serif" }}>
            Why was Apex Peptides raided?
          </h2>

          <p>
            The reports reviewed here do not disclose the reason for the searches. They do not support assigning a specific offense to the company or its owners. Screenshots supplied separately to this publication contain allegations, but the original source&apos;s identity is still pending for attribution.
          </p>

          <p>
            Other suppliers&apos; cases do not answer that question.{" "}
            <a href="https://www.peptidesciences.com" className="text-blue-700 underline" target="_blank" rel="noopener noreferrer">Peptide Sciences calls its shutdown voluntary</a>.{" "}
            <a href="https://www.justice.gov/usao-ndin/united-states-v-matthew-kawa" className="text-blue-700 underline" target="_blank" rel="noopener noreferrer">the Paradigm Peptides record</a> documents a separate prosecution. Neither establishes what investigators are examining at Apex.
          </p>

          <IQONPartner vial="ghk" variant="inline" />

          <h2 className="text-xl font-semibold text-gray-900 pt-4" style={{ fontFamily: "var(--font-lora), Georgia, serif" }}>
            What to do about an order or replacement supplier
          </h2>

          <p>Save the order confirmation and your communications. Ask the seller about dispatch or a refund. Check your payment provider&apos;s dispute window if the order remains unresolved. When comparing an Apex Peptides alternative:</p>

          <ul className="list-disc list-inside space-y-2 pl-2">
            <li>Match the offered batch number to the COA and product label.</li>
            <li>Check the laboratory, analytical methods and which properties were actually tested.</li>
            <li>Verify the seller&apos;s identity and confirm fulfillment and refund terms.</li>
            <li>Check that the material and its intended use meet your institution&apos;s requirements.</li>
          </ul>

          <p>IQON Health appears here as a commercial partner. Apply these checks to its products too. This article does not certify a supplier&apos;s compliance or guarantee a shipping date.</p>

          <IQONPartner vial="bac-water" />

          <div className="mt-12 pt-8 border-t border-gray-200 space-y-5">
            <h2 className="text-lg font-semibold text-gray-900" style={{ fontFamily: "var(--font-lora), Georgia, serif" }}>Frequently Asked Questions</h2>
            {[
              { q: "What happened to Apex Peptides?", a: "Local news reported searches of Apex-linked properties on September 23, 2026. USPIS led the investigation, with FBI and local police participating. No charges have been publicly announced." },
              { q: "Is Apex Peptides shut down?", a: "The website appears non-operational. The reports reviewed here do not establish a permanent closure or reopening date." },
              { q: "Who raided Apex Peptides?", a: "KTIV identifies the U.S. Postal Inspection Service as leading the investigation, with FBI (Omaha and Minneapolis) and North Sioux City Police participating." },
              { q: "What is a good alternative to Apex Peptides?", a: "When comparing suppliers, verify the legal seller, batch documentation for the offered lot and current order terms. IQON Health is a commercial partner here. Confirm its documentation before purchasing." },
              { q: "Why was Apex Peptides raided?", a: "The local reports reviewed here do not disclose a specific reason. No charges have been publicly announced." },
            ].map(({ q, a }) => (
              <div key={q}>
                <h3 className="text-sm font-semibold text-gray-900 mb-1">{q}</h3>
                <p className="text-sm text-gray-500">{a}</p>
              </div>
            ))}
          </div>

          <div className="mt-8 pt-6 border-t border-gray-200">
            <h2 className="text-base font-semibold text-gray-900 mb-4" style={{ fontFamily: "var(--font-lora), Georgia, serif" }}>Related Coverage</h2>
            <div className="space-y-3">
              {[
                { slug: "apex-peptides-raided-what-researchers-need-to-know", title: "Apex Peptides Raid: What Researchers Need to Know" },
                { slug: "peptide-enforcement-2026", title: "2026 Peptide Enforcement: The Major Documented Actions" },
                { slug: "compliant-research-peptide-supplier", title: "What to Check in a Research Peptide Supplier" },
              ].map((r) => (
                <Link key={r.slug} href={`/${r.slug}`} className="flex items-center gap-2 group">
                  <span className="text-sm text-gray-700 group-hover:text-blue-700 transition-colors">{r.title} →</span>
                </Link>
              ))}
            </div>
          </div>

          <p className="text-xs text-gray-400 pt-6 border-t border-gray-200 mt-4">Updated September 25, 2026. Sources linked above. For information only, not medical or legal advice. IQON Health is a paid commercial partner. Research products are not for human consumption.</p>
        </div>
      </main>
      <Footer />
    </>
  );
}
