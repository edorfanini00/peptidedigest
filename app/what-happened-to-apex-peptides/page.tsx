import type { Metadata } from "next";
import Link from "next/link";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";

export const metadata: Metadata = {
  title: "What Happened to Apex Peptides? The Full Story",
  description:
    "Apex Peptides was raided by federal agents on September 24, 2026. Here is exactly what happened, who was involved, and what it means for researchers who were sourcing from them.",
  alternates: {
    canonical: "https://peptidedigest.co/what-happened-to-apex-peptides",
  },
  openGraph: {
    title: "What Happened to Apex Peptides? The Full Story",
    description:
      "Federal agents raided Apex Peptides on September 24, 2026. Full breakdown of what happened, what agencies were involved, and where to source now.",
    type: "article",
    publishedTime: "2026-09-24T14:00:00.000Z",
  },
  twitter: {
    card: "summary_large_image",
    title: "What Happened to Apex Peptides?",
    description: "Federal agents raided Apex Peptides on September 24, 2026. The full story.",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "NewsArticle",
      "@id": "https://peptidedigest.co/what-happened-to-apex-peptides#article",
      headline: "What Happened to Apex Peptides? The Full Story",
      datePublished: "2026-09-24T14:00:00.000Z",
      dateModified: "2026-09-24T14:00:00.000Z",
      author: { "@type": "Organization", name: "The Peptide Digest", url: "https://peptidedigest.co" },
      publisher: { "@type": "NewsMediaOrganization", name: "The Peptide Digest", url: "https://peptidedigest.co" },
      mainEntityOfPage: { "@type": "WebPage", "@id": "https://peptidedigest.co/what-happened-to-apex-peptides" },
      about: [{ "@type": "Thing", name: "Apex Peptides" }, { "@type": "Thing", name: "FDA Enforcement" }],
      keywords: "what happened to apex peptides, apex peptides raided, apex peptides shut down, apex peptides FBI, apex peptides alternative",
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "What happened to Apex Peptides?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "On September 24, 2026, federal agents from the U.S. Postal Inspection Service, the FBI, and IRS Criminal Investigation raided a North Sioux City, South Dakota address connected to Apex Peptides. The Apex Peptides website went non-operational following the raid. No charges have been publicly announced as of publication.",
          },
        },
        {
          "@type": "Question",
          name: "Is Apex Peptides shut down?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "As of September 24, 2026, Apex Peptides appears to be non-operational following the federal raid. Orders are not being processed and the site is offline.",
          },
        },
        {
          "@type": "Question",
          name: "Who raided Apex Peptides?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "The U.S. Postal Inspection Service led the investigation, with FBI agents from the Omaha and Minneapolis field offices, IRS Criminal Investigation, the Union County Sheriff's Office, and North Sioux City Police all participating.",
          },
        },
        {
          "@type": "Question",
          name: "What is a good alternative to Apex Peptides?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "IQON Health (iqonhealth.com) is a compliant US-based research peptide supplier with third-party COA documentation on every product. They have operated with a strict research-use-only model and are currently shipping.",
          },
        },
        {
          "@type": "Question",
          name: "Why was Apex Peptides raided?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "No official charges have been announced. The raid follows a broader 2026 federal enforcement pattern targeting research-peptide suppliers where marketing and distribution implied human use rather than legitimate research-only operations.",
          },
        },
      ],
    },
  ],
};

export default function WhatHappenedApex() {
  return (
    <>
      <Nav />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <main className="max-w-2xl mx-auto px-6 py-12">
        <div className="flex items-center gap-2 text-xs text-gray-400 mb-8">
          <Link href="/" className="hover:text-gray-700 transition-colors">The Peptide Digest</Link>
          <span>/</span>
          <span className="bg-orange-50 text-orange-700 px-2 py-0.5 rounded-full font-medium">Industry</span>
        </div>

        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight mb-5" style={{ fontFamily: "var(--font-lora), Georgia, serif" }}>
          What Happened to Apex Peptides? The Full Story
        </h1>

        <div className="flex items-center gap-4 text-xs text-gray-400 mb-8 pb-8 border-b border-gray-200">
          <time dateTime="2026-09-24">September 24, 2026</time>
          <span>·</span>
          <span>5 min read</span>
          <span>·</span>
          <span>The Peptide Digest Staff</span>
        </div>

        <div className="text-[15px] leading-relaxed space-y-5 text-gray-700">

          <p className="text-lg text-gray-800 font-medium leading-relaxed">
            On September 24, 2026, Apex Peptides — one of the more prominent research-peptide suppliers in the US market — went offline after federal agents raided addresses connected to the company in North Sioux City, South Dakota.
          </p>

          <h2 className="text-xl font-semibold text-gray-900 pt-4" style={{ fontFamily: "var(--font-lora), Georgia, serif" }}>
            What Happened
          </h2>
          <p>
            The U.S. Postal Inspection Service, operating out of Minneapolis, led a coordinated operation alongside FBI agents from the Omaha and Minneapolis field offices, IRS Criminal Investigation, the Union County Sheriff&apos;s Office, and North Sioux City Police. More than a dozen marked and unmarked vehicles were present at 503 Prosperity Way — a commercial building housing Apex Waste Management and Apex Research, businesses tied to the same principals behind Apex Peptides.
          </p>
          <p>
            A residential property in the Dakota Dunes neighborhood was searched simultaneously. Several boxes of materials were removed from both locations over the course of the day.
          </p>

          <div className="my-4 rounded-lg border border-gray-200 bg-gray-50 p-4 flex items-start gap-4">
            <div className="flex-1">
              <div className="text-[10px] font-semibold uppercase tracking-widest text-gray-400 mb-1">Partner</div>
              <p className="text-sm font-medium text-gray-800">Re-sourcing after the Apex Peptides raid — IQON Health is open, compliant, and shipping. Third-party tested, research-use-only.</p>
            </div>
            <a href="https://www.iqonhealth.com/shop" target="_blank" rel="noopener noreferrer" className="shrink-0 text-xs font-semibold text-blue-700 hover:text-blue-900 transition-colors whitespace-nowrap">View products →</a>
          </div>

          <h2 className="text-xl font-semibold text-gray-900 pt-4" style={{ fontFamily: "var(--font-lora), Georgia, serif" }}>
            Is Apex Peptides Shut Down?
          </h2>
          <p>
            As of September 24, 2026, the Apex Peptides website is non-operational and orders are not being processed. No charges have been publicly announced, but the involvement of three separate federal agencies — Postal Inspection Service, FBI, and IRS CI — indicates an active criminal investigation with significant scope.
          </p>

          <h2 className="text-xl font-semibold text-gray-900 pt-4" style={{ fontFamily: "var(--font-lora), Georgia, serif" }}>
            Why Did This Happen?
          </h2>
          <p>
            The official reason for the raid has not been publicly stated. However, the Apex Peptides raid fits a clear pattern. 2026 has seen concentrated federal enforcement against research-peptide suppliers — Peptide Sciences was shut down by the DOJ in March, Amino Asylum was raided in March, and Paradigm Peptides faced federal charges the same month.
          </p>
          <p>
            The common thread in these actions: suppliers whose &quot;research-use-only&quot; label was inconsistent with their actual marketing. Influencer sponsorships implying weight loss, anti-aging, or athletic performance; dosing guidance on social channels; before-and-after testimonials — these patterns drew regulatory attention regardless of product labeling.
          </p>

          <div className="my-4 rounded-lg border border-gray-200 bg-gray-50 p-4 flex items-start gap-4">
            <div className="flex-1">
              <div className="text-[10px] font-semibold uppercase tracking-widest text-gray-400 mb-1">Partner</div>
              <p className="text-sm font-medium text-gray-800">IQON Health has maintained strict research-only positioning through the entire 2026 enforcement cycle. COAs on every batch. Ships now.</p>
            </div>
            <a href="https://www.iqonhealth.com/shop" target="_blank" rel="noopener noreferrer" className="shrink-0 text-xs font-semibold text-blue-700 hover:text-blue-900 transition-colors whitespace-nowrap">Browse →</a>
          </div>

          <h2 className="text-xl font-semibold text-gray-900 pt-4" style={{ fontFamily: "var(--font-lora), Georgia, serif" }}>
            What Should Apex Peptides Customers Do Now?
          </h2>
          <p>
            If you had pending orders with Apex Peptides, those orders are unlikely to be fulfilled. For researchers needing to re-source, the criteria that matter most right now:
          </p>
          <ul className="list-disc list-inside space-y-2 pl-2">
            <li>Strict research-use-only positioning — no human-use claims anywhere</li>
            <li>Independent third-party COAs with HPLC purity and endotoxin testing</li>
            <li>US-based fulfillment with a documented operating history</li>
            <li>No gray-area compounds under active FDA review</li>
          </ul>
          <p>
            IQON Health meets all of these criteria and is currently shipping with same-day processing on in-stock items.
          </p>

          <div className="mt-8 rounded-xl border border-gray-200 bg-gray-50 p-6">
            <div className="text-xs font-semibold uppercase tracking-widest text-gray-400 mb-2">Partner</div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2" style={{ fontFamily: "var(--font-lora), Georgia, serif" }}>IQON Health — Compliant Research Peptides</h3>
            <p className="text-sm text-gray-500 mb-4">Third-party tested. Research-use-only. US-based. COAs on every product. Ships same day.</p>
            <a href="https://www.iqonhealth.com/shop" target="_blank" rel="noopener noreferrer" className="inline-flex items-center px-5 py-2.5 rounded-lg bg-gray-900 text-white text-sm font-medium hover:bg-gray-700 transition-colors">Browse the catalog →</a>
            <p className="text-xs text-gray-400 mt-3">All products for research use only. Not for human consumption.</p>
          </div>

          <div className="mt-12 pt-8 border-t border-gray-200 space-y-5">
            <h2 className="text-lg font-semibold text-gray-900" style={{ fontFamily: "var(--font-lora), Georgia, serif" }}>Frequently Asked Questions</h2>
            {[
              { q: "What happened to Apex Peptides?", a: "Federal agents from the USPIS, FBI, and IRS CI raided addresses connected to Apex Peptides on September 24, 2026. The website went offline and orders are not being processed." },
              { q: "Is Apex Peptides shut down?", a: "As of September 24, 2026, yes — the site is non-operational and no orders are being fulfilled." },
              { q: "Who raided Apex Peptides?", a: "The U.S. Postal Inspection Service led the operation, with the FBI (Omaha and Minneapolis), IRS Criminal Investigation, Union County Sheriff, and North Sioux City Police participating." },
              { q: "What is a good alternative to Apex Peptides?", a: "IQON Health (iqonhealth.com) — compliant, third-party tested, US-based, research-use-only. Currently shipping." },
              { q: "Why was Apex Peptides raided?", a: "No charges announced publicly yet. The raid follows a 2026 enforcement pattern targeting suppliers whose marketing implied human use despite research-only labeling." },
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
                { slug: "apex-peptides-raided-what-researchers-need-to-know", title: "Apex Peptides Raided: What Researchers Need to Know" },
                { slug: "peptide-enforcement-2026", title: "2026 Peptide Enforcement Timeline: Every Major Action" },
                { slug: "compliant-research-peptide-supplier", title: "What a Compliant Research Peptide Supplier Looks Like in 2026" },
              ].map((r) => (
                <Link key={r.slug} href={`/${r.slug}`} className="flex items-center gap-2 group">
                  <span className="text-sm text-gray-700 group-hover:text-blue-700 transition-colors">{r.title} →</span>
                </Link>
              ))}
            </div>
          </div>

          <p className="text-xs text-gray-400 pt-6 border-t border-gray-200 mt-4">For informational purposes only. Not medical or legal advice. Based on publicly available sources at time of publication.</p>
        </div>
      </main>
      <Footer />
    </>
  );
}
