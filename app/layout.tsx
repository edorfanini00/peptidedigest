import { IQONStickyBar } from "@/components/IQONPartner";
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
    default: "The Peptide Digest | Research, Science & Industry News",
    template: "%s | The Peptide Digest",
  },
  description:
    "Peptide research, scientific progress and industry news, explained clearly.",
  metadataBase: new URL("https://peptidedigest.co"),
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any", type: "image/x-icon" },
      { url: "/favicon-96.png", sizes: "96x96", type: "image/png" },
      { url: "/favicon-192.png", sizes: "192x192", type: "image/png" },
    ],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" }],
  },
  openGraph: {
    siteName: "The Peptide Digest",
    type: "website",
    locale: "en_US",
    url: "https://peptidedigest.co",
    title: "The Peptide Digest | Research, Science & Industry News",
    description:
      "Peptide research, scientific progress and industry news, explained clearly.",
    images: [
      {
        url: "/og-default.png",
        width: 1200,
        height: 630,
        type: "image/png",
        alt: "The Peptide Digest",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "The Peptide Digest",
    description: "Peptide research, scientific progress and industry news, explained clearly.",
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
      alternateName: "Peptide Digest",
      url: "https://peptidedigest.co",
      publishingPrinciples: "https://peptidedigest.co/editorial-standards",
      description:
        "Publication covering peptide research, scientific progress and industry news.",
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
      alternateName: "Peptide Digest",
      publisher: { "@id": "https://peptidedigest.co/#organization" },
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
      </head>
      <body>
        {/* Google tag — fires both GA4 and Google Ads */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=AW-18474455082"
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
        <IQONStickyBar />
      </body>
    </html>
  );
}
