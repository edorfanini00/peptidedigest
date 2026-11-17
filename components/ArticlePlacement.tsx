import Image from "next/image";
import Link from "next/link";
import { IQONPartner } from "./IQONPartner";
import {
  APPROVED_RESEARCH_ASSETS, RESEARCH_CATALOG, approvedContextAssets, articleCommercialPolicy,
  type ArticleCommercialContext, type IQONVial,
} from "@/lib/article-commercial-context";

/** Also usable by legacy JSX pages. Both placements resolve the same policy. */
export function ArticlePlacement({ slug, placement, legacyVial }: {
  slug: string; placement: "early" | "closing"; legacyVial?: IQONVial;
}) {
  const policy = articleCommercialPolicy(`/${slug}`);
  if (policy.kind === "legacy") return legacyVial ? <IQONPartner vial={legacyVial} /> : null;
  if (policy.kind === "none") return null;
  const context = policy.context;
  if (context.mode === "informational") return (
    <aside data-informational-placement={placement} className="not-prose my-8 rounded-2xl border border-[color:var(--color-rule)] bg-[#f2eee7] p-6">
      <p className="kicker mb-4">Explore the science</p>
      <ul className="space-y-3 text-sm">{context.reading.map(link => <li key={link.url}><Link href={link.url} className="text-[color:var(--color-accent)] underline underline-offset-4">{link.title}</Link></li>)}</ul>
    </aside>
  );
  return <ResearchContextCard context={context} placement={placement} />;
}

export function ResearchContextCard({ context, placement }: { context: ArticleCommercialContext; placement: "early" | "closing" }) {
  const vials = approvedContextAssets(context);
  if (!vials.length) return null;
  return (
    <a href={RESEARCH_CATALOG.href} target="_blank" rel="noopener noreferrer" data-research-placement={placement}
      className="not-prose group my-12 block overflow-hidden rounded-3xl border border-[color:var(--color-rule)] bg-white no-underline shadow-[0_20px_60px_-30px_rgba(28,26,23,0.35)] transition-shadow hover:shadow-[0_24px_70px_-28px_rgba(28,26,23,0.5)]">
      <div className="bg-[color:var(--color-ink)] px-5 py-2 text-center text-[11px] font-bold uppercase tracking-[0.18em] text-white sm:text-xs">Research catalog · IQON Labs</div>
      <div className="px-6 pt-6 text-center sm:px-10 sm:pt-8">
        <p className="font-serif text-[2.4rem] font-bold leading-[1.02] tracking-tight text-[color:var(--color-ink)] sm:text-5xl">{RESEARCH_CATALOG.headline}</p>
        <p className="mt-3 text-[15px] text-[color:var(--color-muted)]">Research materials for laboratory work.</p>
      </div>
      <div className="mx-auto mt-6 flex max-w-sm flex-wrap items-end justify-center gap-5 bg-gradient-to-b from-white to-[#efebe4] px-6 pb-5 pt-4">
        {vials.map(vial => <div key={vial} className="w-28 text-center sm:w-32">
          <Image src={APPROVED_RESEARCH_ASSETS[vial].src} alt={`IQON Labs ${APPROVED_RESEARCH_ASSETS[vial].name} research material`} width={200} height={268} className="h-auto w-full object-contain drop-shadow-[0_12px_14px_rgba(0,0,0,0.18)]" />
          <p className="mt-3 text-xs font-semibold text-[color:var(--color-ink)]">{APPROVED_RESEARCH_ASSETS[vial].name}</p>
        </div>)}
      </div>
      <div className="px-6 pb-6 pt-5 text-center sm:px-10 sm:pb-8">
        <span className="inline-flex w-full items-center justify-center rounded-full bg-[color:var(--color-accent)] px-7 py-4 text-base font-bold text-white transition-colors group-hover:bg-[color:var(--color-ink)] sm:w-auto">{RESEARCH_CATALOG.cta}</span>
        <p className="mt-4 text-xs text-[color:var(--color-muted)]">{RESEARCH_CATALOG.terms}</p>
      </div>
    </a>
  );
}
