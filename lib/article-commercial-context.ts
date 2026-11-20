import { LEGACY_COMMERCIAL_ROUTES } from "./commercial-archive";

/** Real, previously approved assets only. This is not a list of treatment options. */
export const APPROVED_RESEARCH_ASSETS = {
  nad: { src: "/iqon/nad.png", name: "NAD+" },
  "bac-water": { src: "/iqon/bac-water.png", name: "Bacteriostatic water" },
  glutathione: { src: "/iqon/glutathione.png", name: "Glutathione" },
  ghk: { src: "/iqon/ghk.png", name: "GHK-Cu" },
  epithalon: { src: "/iqon/epithalon.png", name: "Epithalon" },
  ss31: { src: "/iqon/ss31.png", name: "SS-31" },
  "mots-c": { src: "/iqon/mots-c.png", name: "MOTS-c" },
  kpv: { src: "/iqon/kpv.png", name: "KPV" },
  semax: { src: "/iqon/semax.png", name: "Semax" },
} as const;
export type IQONVial = keyof typeof APPROVED_RESEARCH_ASSETS;
export type ArticleCommercialContext =
  | { mode: "informational"; reason: string; reading: readonly { url: string; title: string }[] }
  | { mode: "compound-research" | "general-research"; compounds: readonly IQONVial[] };

/**
 * Required editorial metadata for new pages and substantive rewrites.
 * Exact keys select declared policy, never infer eligibility from an article's words.
 * Clinical/cosmetic coverage is not permission to promote a research reagent.
 */
export const ARTICLE_COMMERCIAL_CONTEXT: Readonly<Record<string, ArticleCommercialContext>> = {
  "/how-to-read-peptide-coa": {
    mode: "general-research", compounds: ["glutathione"],
  },
  "/ghk-cu-peptide-research-what-studies-show": {
    mode: "informational", reason: "Skin research is not a recommendation to use laboratory reagents as cosmetics or treatments.",
    reading: [
      { url: "/how-to-read-peptide-coa", title: "Understand what a peptide test report measures" },
      { url: "/what-does-research-use-only-mean", title: "What research use only means" },
    ],
  },
  "/weight-loss-peptides-how-compounds-differ": {
    mode: "informational", reason: "This comparison concerns medicines and clinical research, not research-vial purchases.",
    reading: [
      { url: "/how-body-makes-peptide-hormones-glp1-prohormone-convertases", title: "How the body makes peptide hormones" },
      { url: "/what-are-peptides", title: "Peptide structure and terminology" },
    ],
  },
  "/survodutide-synchronize-cvot-heart-safety": {
    mode: "informational", reason: "Investigational medicine and cardiovascular outcomes coverage; a research-material offer would imply treatment suitability.",
    reading: [
      { url: "/how-body-makes-peptide-hormones-glp1-prohormone-convertases", title: "How GLP-1 and glucagon come from the same precursor" },
      { url: "/weight-loss-peptides-how-compounds-differ", title: "How GLP-1, GIP, glucagon and amylin medicines differ" },
    ],
  },
  "/is-orforglipron-a-peptide-glp1-pill-attain-osa": {
    mode: "informational", reason: "Approved medicine and sleep apnea trial coverage; a research-material offer would imply treatment suitability.",
    reading: [
      { url: "/what-are-peptides", title: "What makes a molecule a peptide" },
      { url: "/weight-loss-peptides-how-compounds-differ", title: "How weight-loss peptides and other GLP-1 medicines differ" },
    ],
  },
};

export const RESEARCH_CATALOG = {
  // Keep the supported destination and existing attribution contract. No invented return URL.
  href: "https://www.iqonhealth.com/shop?utm_source=peptidedigest&utm_medium=referral&utm_campaign=bogo20",
  headline: "Explore the research catalog",
  cta: "Visit IQON Labs →",
  terms: "Account required to access the catalog. Research materials only, not for human use.",
} as const;

export function approvedContextAssets(context: unknown): IQONVial[] {
  if (!context || typeof context !== "object" || !("mode" in context) ||
      (context.mode !== "compound-research" && context.mode !== "general-research") ||
      !("compounds" in context) || !Array.isArray(context.compounds) || !context.compounds.length) return [];
  // Reject the entire context if any entry is unknown. Never substitute or fill a pair.
  if (context.compounds.some(vial => typeof vial !== "string" || !Object.hasOwn(APPROVED_RESEARCH_ASSETS, vial))) return [];
  const unique = [...new Set(context.compounds)] as IQONVial[];
  // Authors select one or two relevant assets; oversized contexts must not overflow the phone bar.
  return unique.length <= 2 ? unique : [];
}

export function articleCommercialPolicy(path: string) {
  const context = Object.hasOwn(ARTICLE_COMMERCIAL_CONTEXT, path) ? ARTICLE_COMMERCIAL_CONTEXT[path] : undefined;
  if (context) return { kind: "contextual" as const, context };
  if ((LEGACY_COMMERCIAL_ROUTES as readonly string[]).includes(path)) return { kind: "legacy" as const };
  return { kind: "none" as const };
}
