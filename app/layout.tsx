import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Lora } from "next/font/google";
import Script from "next/script";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-inter",
  display: "swap",
});

const lora = Lora({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-lora",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "The Peptide Digest — Research, Science & Industry News",
    template: "%s | The Peptide Digest",
  },
  description:
    "Independent coverage of peptide research, regulatory developments, and industry news. Fact-based reporting on the compounds most studied in labs worldwide.",
  metadataBase: new URL("https://peptidedigest.co"),
  alternates: {
    canonical: "https://peptidedigest.co",
  },
  openGraph: {
    siteName: "The Peptide Digest",
    type: "website",
    locale: "en_US",
    url: "https://peptidedigest.co",
    title: "The Peptide Digest — Research, Science & Industry News",
    description:
      "Independent coverage of peptide research, regulatory developments, and industry news.",
    images: [
      {
        url: "/og-default.png",
        width: 1200,
        height: 630,
        alt: "The Peptide Digest",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "The Peptide Digest",
    description: "Independent coverage of peptide research, regulatory developments, and industry news.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

// JSON-LD structured data for the publication
const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "NewsMediaOrganization",
      "@id": "https://peptidedigest.co/#organization",
      name: "The Peptide Digest",
      url: "https://peptidedigest.co",
      description:
        "Independent publication covering peptide research, regulatory developments, and industry news.",
      logo: {
        "@type": "ImageObject",
        url: "https://peptidedigest.co/logo.png",
      },
    },
    {
      "@type": "WebSite",
      "@id": "https://peptidedigest.co/#website",
      url: "https://peptidedigest.co",
      name: "The Peptide Digest",
      publisher: { "@id": "https://peptidedigest.co/#organization" },
      potentialAction: {
        "@type": "SearchAction",
        target: {
          "@type": "EntryPoint",
          urlTemplate: "https://peptidedigest.co/?q={search_term_string}",
        },
        "query-input": "required name=search_term_string",
      },
    },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${lora.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <link rel="canonical" href="https://peptidedigest.co" />
      </head>
      <body>
        {/* Google tag — fires both GA4 and Google Ads */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-QLTHZGWLMP"
          strategy="afterInteractive"
        />
        <Script id="google-tags" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-QLTHZGWLMP');
            gtag('config', 'AW-18474455082');
            // Track every click on an IQON shop link
            document.addEventListener('click', function(e) {
              var el = e.target.closest('a[href*="iqonhealth.com"]');
              if (el) {
                gtag('event', 'iqon_shop_click', {
                  event_category: 'outbound',
                  event_label: el.href,
                  transport_type: 'beacon'
                });
              }
            });
          `}
        </Script>
        {children}
      </body>
    </html>
  );
}
