import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      { source: "/bpc-157-research-overview-2026", destination: "/peptide-enforcement-2026", permanent: true },
      { source: "/tb500-thymosin-beta-4-research-summary", destination: "/peptide-enforcement-2026", permanent: true },
      { source: "/fda-july-2026-advisory-committee-bpc157-tb500", destination: "/peptide-enforcement-2026", permanent: true },
    ];
  },
};

export default nextConfig;
