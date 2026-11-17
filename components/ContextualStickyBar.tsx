"use client";

import Image from "next/image";
import { usePathname } from "next/navigation";
import { IQONStickyBar } from "./IQONPartner";
import { APPROVED_RESEARCH_ASSETS, RESEARCH_CATALOG, approvedContextAssets, articleCommercialPolicy } from "@/lib/article-commercial-context";

export function ContextualStickyBar() {
  const path = usePathname();
  const policy = articleCommercialPolicy(path);
  if (policy.kind === "legacy") return <IQONStickyBar />;
  if (policy.kind === "none") return null;
  const vials = approvedContextAssets(policy.context);
  // Informational and unknown contexts render no commercial anchor, even in SSR.
  if (!vials.length) return null;
  return (
    <a href={RESEARCH_CATALOG.href} target="_blank" rel="noopener noreferrer" data-research-placement="sticky"
      className="fixed inset-x-0 bottom-0 z-50 flex items-center justify-between gap-3 border-t border-black/10 bg-[color:var(--color-ink)] px-4 py-3 text-white no-underline shadow-[0_-8px_24px_rgba(0,0,0,0.2)] md:hidden"
      style={{ paddingBottom: "max(0.75rem, env(safe-area-inset-bottom))" }}>
      <span className="flex shrink-0 gap-1">{vials.map(vial => <Image key={vial} src={APPROVED_RESEARCH_ASSETS[vial].src} alt={`IQON Labs ${APPROVED_RESEARCH_ASSETS[vial].name} research material`} width={26} height={35} className="h-9 w-auto object-contain" />)}</span>
      <span className="text-sm font-semibold leading-tight">IQON Labs research catalog<span className="block text-[11px] font-normal text-white/70">Account required. Not for human use.</span></span>
      <span className="shrink-0 rounded-full bg-[color:var(--color-accent)] px-3 py-2 text-sm font-bold">Visit →</span>
    </a>
  );
}
