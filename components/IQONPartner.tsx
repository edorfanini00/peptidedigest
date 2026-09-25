import Image from "next/image";

export type IQONVial = "nad" | "bac-water" | "glutathione" | "ghk";

const vialAlt: Record<IQONVial, string> = {
  nad: "IQON Health research vial",
  "bac-water": "IQON Health research vial",
  glutathione: "IQON Health research vial",
  ghk: "IQON Health research vial",
};

const SHOP = "https://www.iqonhealth.com/shop";

/**
 * Prominent IQON Health partner card with a product vial photo.
 * variant="feature" = large end-of-article card; "inline" = compact mid-article card.
 * Copy stays neutral: no testing, purity, shipping, compliance or human-use claims (Google Ads policy).
 */
export function IQONPartner({
  vial,
  variant = "feature",
  text = "Confirm all details directly with IQON Health before purchasing.",
  cta = "Visit IQON Health →",
}: {
  vial: IQONVial;
  variant?: "feature" | "inline";
  text?: string;
  cta?: string;
}) {
  const src = `/iqon/${vial}.png`;
  if (variant === "inline") {
    return (
      <aside className="not-prose my-8 rounded-2xl border border-[color:var(--color-rule)] bg-[color:var(--color-card)] p-4 sm:p-5 flex items-center gap-4 shadow-[0_1px_0_rgba(0,0,0,0.02)]">
        <a href={SHOP} target="_blank" rel="noopener noreferrer" className="shrink-0 rounded-xl bg-[color:var(--color-paper-deep)] w-20 h-24 sm:w-24 sm:h-28 flex items-center justify-center overflow-hidden">
          <Image src={src} alt={vialAlt[vial]} width={120} height={160} className="h-full w-auto object-contain" />
        </a>
        <div className="flex-1 min-w-0">
          <p className="font-serif text-lg font-semibold text-[color:var(--color-ink)] leading-snug">IQON Health</p>
          <p className="text-sm text-[color:var(--color-muted)] mt-1">{text}</p>
          <a href={SHOP} target="_blank" rel="noopener noreferrer" className="inline-block mt-2 text-sm font-semibold text-[color:var(--color-accent)] hover:underline">{cta}</a>
        </div>
      </aside>
    );
  }
  return (
    <aside className="not-prose my-10 overflow-hidden rounded-2xl border border-[color:var(--color-rule)] bg-[color:var(--color-accent-soft)]">
      <div className="grid grid-cols-[1fr_auto] items-center gap-4 p-6 sm:p-8">
        <div>
          <h3 className="font-serif text-2xl sm:text-[1.75rem] font-bold text-[color:var(--color-ink)] leading-tight">IQON Health</h3>
          <p className="mt-2 text-[15px] text-[color:var(--color-body)] max-w-sm">{text}</p>
          <a href={SHOP} target="_blank" rel="noopener noreferrer" className="mt-5 inline-flex items-center whitespace-nowrap rounded-full bg-[color:var(--color-ink)] px-6 py-3 text-sm font-semibold text-white hover:bg-[color:var(--color-accent)] transition-colors">{cta}</a>
          <p className="mt-3 text-xs text-[color:var(--color-muted)]">For research use only. Not for human consumption.</p>
        </div>
        <a href={SHOP} target="_blank" rel="noopener noreferrer" className="block w-32 sm:w-44">
          <Image src={src} alt={vialAlt[vial]} width={260} height={348} className="w-full h-auto object-contain drop-shadow-xl" />
        </a>
      </div>
    </aside>
  );
}
