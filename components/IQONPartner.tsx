import Image from "next/image";

export type IQONVial =
  | "nad"
  | "bac-water"
  | "glutathione"
  | "ghk"
  | "epithalon"
  | "ss31"
  | "mots-c"
  | "kpv"
  | "semax";

const LINEUP: IQONVial[] = ["nad", "ghk", "epithalon", "ss31", "glutathione", "mots-c", "kpv", "semax"];
const SHOP = "https://www.iqonhealth.com/shop";

/** Picks 5 distinct vials starting at the given one, so each placement shows a different lineup. */
function lineupFrom(start: IQONVial): IQONVial[] {
  const i = Math.max(0, LINEUP.indexOf(start));
  return Array.from({ length: 5 }, (_, k) => LINEUP[(i + k) % LINEUP.length]);
}

function SaleBadge({ small = false }: { small?: boolean }) {
  return (
    <span
      className={`inline-flex items-center rounded-full bg-[color:var(--color-accent)] text-white font-bold tracking-wide ${
        small ? "px-2.5 py-1 text-[11px]" : "px-3.5 py-1.5 text-xs"
      }`}
    >
      20% OFF SITEWIDE
    </span>
  );
}

/**
 * IQON Labs placement.
 * variant="feature": full showcase with a 5-vial lineup and the sitewide sale.
 * variant="inline": compact mid-article card with one vial and the sale badge.
 * Copy stays neutral: no testing, purity, shipping, compliance or human-use claims (Google Ads policy).
 */
export function IQONPartner({
  vial,
  variant = "feature",
  text,
  cta = "Shop the sale →",
}: {
  vial: IQONVial;
  variant?: "feature" | "inline";
  text?: string;
  cta?: string;
}) {
  if (variant === "inline") {
    return (
      <aside className="not-prose my-8 rounded-2xl border border-[color:var(--color-rule)] bg-[color:var(--color-card)] p-4 sm:p-5 flex items-center gap-4">
        <a
          href={SHOP}
          target="_blank"
          rel="noopener noreferrer"
          className="shrink-0 rounded-xl bg-gradient-to-b from-white to-[color:var(--color-paper-deep)] w-20 h-24 sm:w-24 sm:h-28 flex items-center justify-center overflow-hidden"
        >
          <Image src={`/iqon/${vial}.png`} alt="IQON Labs research vial" width={120} height={160} className="h-full w-auto object-contain" />
        </a>
        <div className="flex-1 min-w-0">
          <div className="flex flex-wrap items-center gap-2">
            <p className="font-serif text-lg font-semibold text-[color:var(--color-ink)] leading-snug">IQON Labs</p>
            <SaleBadge small />
          </div>
          <p className="text-sm text-[color:var(--color-muted)] mt-1">
            {text ?? "Discount applied automatically at checkout. Research use only."}
          </p>
          <a href={SHOP} target="_blank" rel="noopener noreferrer" className="inline-block mt-2 text-sm font-semibold text-[color:var(--color-accent)] hover:underline">
            {cta}
          </a>
        </div>
      </aside>
    );
  }

  const vials = lineupFrom(vial);
  return (
    <aside className="not-prose my-12 overflow-hidden rounded-3xl border border-[color:var(--color-rule)] bg-white shadow-[0_20px_60px_-30px_rgba(28,26,23,0.35)]">
      <div className="flex flex-wrap items-center justify-between gap-3 px-6 pt-6 sm:px-8 sm:pt-7">
        <h3 className="font-serif text-[1.75rem] sm:text-[2rem] font-bold text-[color:var(--color-ink)] leading-none tracking-tight">IQON Labs</h3>
        <SaleBadge />
      </div>
      <p className="px-6 sm:px-8 mt-2 text-[15px] text-[color:var(--color-muted)]">
        {text ?? "20% off every product. Discount applied automatically at checkout."}
      </p>

      <a href={SHOP} target="_blank" rel="noopener noreferrer" className="block mt-5 bg-gradient-to-b from-[#f7f5f1] to-[#ece8e1] px-3 sm:px-8 pt-6 pb-4">
        <div className="grid grid-cols-5 items-end gap-1 sm:gap-6 max-w-2xl mx-auto">
          {vials.map((v, k) => (
            <Image
              key={v}
              src={`/iqon/${v}.png`}
              alt="IQON Labs research vial"
              width={200}
              height={268}
              className={`w-full h-auto object-contain drop-shadow-[0_12px_14px_rgba(0,0,0,0.18)] transition-transform duration-300 hover:-translate-y-1 ${
                k === 2 ? "scale-110" : ""
              }`}
            />
          ))}
        </div>
      </a>

      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 px-6 py-5 sm:px-8">
        <a
          href={SHOP}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex justify-center items-center whitespace-nowrap rounded-full bg-[color:var(--color-ink)] px-7 py-3.5 text-sm font-semibold text-white hover:bg-[color:var(--color-accent)] transition-colors"
        >
          {cta}
        </a>
        <p className="text-xs text-[color:var(--color-muted)]">For research use only. Not for human consumption.</p>
      </div>
    </aside>
  );
}
