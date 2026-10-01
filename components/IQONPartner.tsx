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

/** Offer must match IQON checkout: code B2GO = Buy 2, Get 1 Free (lib/promo/summer-sale.ts in the IQON repo). */
export const IQON_OFFER = {
  headline: "Buy 2, Get 1 Free",
  code: "B2GO",
  href: "https://www.iqonhealth.com/shop?utm_source=peptidedigest&utm_medium=referral&utm_campaign=b2go",
};

function lineupFrom(start: IQONVial): IQONVial[] {
  const i = Math.max(0, LINEUP.indexOf(start));
  return Array.from({ length: 3 }, (_, k) => LINEUP[(i + k) % LINEUP.length]);
}

/**
 * IQON Labs offer card. The whole card is one link (bigger tap target).
 * Click psychology used: "FREE" as the dominant word, a concrete visual of the free item
 * (third vial tagged FREE), one first-person CTA, the code shown up front so there is no
 * guesswork, and no fake timers or fake scarcity.
 */
export function IQONPartner({ vial }: { vial: IQONVial; variant?: "feature" | "inline"; text?: string; cta?: string }) {
  const [a, b, c] = lineupFrom(vial);
  return (
    <a
      href={IQON_OFFER.href}
      target="_blank"
      rel="noopener noreferrer"
      className="not-prose group my-12 block overflow-hidden rounded-3xl border border-[color:var(--color-rule)] bg-white no-underline shadow-[0_20px_60px_-30px_rgba(28,26,23,0.35)] transition-shadow hover:shadow-[0_24px_70px_-28px_rgba(28,26,23,0.5)]"
    >
      <div className="bg-[color:var(--color-ink)] px-5 py-2 text-center text-[11px] font-bold uppercase tracking-[0.18em] text-white sm:text-xs">
        Reader offer · IQON Labs
      </div>

      <div className="px-6 pt-6 text-center sm:px-10 sm:pt-8">
        <p className="font-serif text-[2.4rem] font-bold leading-[1.02] tracking-tight text-[color:var(--color-ink)] sm:text-5xl">
          Buy 2, Get 1 <span className="text-[color:var(--color-accent)]">Free</span>
        </p>
        <p className="mt-3 text-[15px] text-[color:var(--color-muted)]">
          Pick any two research compounds. The third one is on us.
        </p>
      </div>

      <div className="mx-auto mt-6 grid max-w-md grid-cols-3 items-end gap-3 bg-gradient-to-b from-white to-[#efebe4] px-6 pb-5 pt-4 sm:max-w-lg">
        {[a, b].map((v) => (
          <div key={v} className="relative">
            <Image src={`/iqon/${v}.png`} alt="IQON Labs research vial" width={200} height={268} className="h-auto w-full object-contain drop-shadow-[0_12px_14px_rgba(0,0,0,0.18)]" />
          </div>
        ))}
        <div className="relative">
          <span className="absolute -top-2 left-1/2 z-10 -translate-x-1/2 rotate-[-6deg] rounded-md bg-[color:var(--color-accent)] px-2.5 py-1 text-xs font-extrabold tracking-wider text-white shadow-md">
            FREE
          </span>
          <Image src={`/iqon/${c}.png`} alt="IQON Labs research vial" width={200} height={268} className="h-auto w-full scale-110 object-contain drop-shadow-[0_12px_14px_rgba(0,0,0,0.22)] transition-transform duration-300 group-hover:-translate-y-1" />
        </div>
      </div>

      <div className="px-6 pb-6 pt-5 text-center sm:px-10 sm:pb-8">
        <p className="text-sm text-[color:var(--color-body)]">
          Use code{" "}
          <span className="rounded-md border-2 border-dashed border-[color:var(--color-accent)] px-2 py-0.5 font-mono font-bold tracking-widest text-[color:var(--color-accent)]">
            {IQON_OFFER.code}
          </span>{" "}
          at checkout
        </p>
        <span className="mt-5 inline-flex w-full items-center justify-center rounded-full bg-[color:var(--color-accent)] px-7 py-4 text-base font-bold text-white transition-colors group-hover:bg-[color:var(--color-ink)] sm:w-auto">
          Claim my free vial →
        </span>
        <p className="mt-4 text-[11px] text-[color:var(--color-muted)]">
          For research use only. Not for human consumption. Lowest priced item free; some accessories excluded.
        </p>
      </div>
    </a>
  );
}

/** Slim sticky bottom bar on phones, the highest-visibility spot on mobile. */
export function IQONStickyBar() {
  return (
    <a
      href={IQON_OFFER.href}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed inset-x-0 bottom-0 z-50 flex items-center justify-between gap-3 border-t border-black/10 bg-[color:var(--color-ink)] px-4 py-3 text-white no-underline shadow-[0_-8px_24px_rgba(0,0,0,0.2)] md:hidden"
      style={{ paddingBottom: "max(0.75rem, env(safe-area-inset-bottom))" }}
    >
      <span className="text-sm font-semibold leading-tight">
        IQON Labs: <span className="text-[#ff8a7a]">Buy 2, Get 1 Free</span>
        <span className="block text-[11px] font-normal text-white/70">Code {IQON_OFFER.code} at checkout</span>
      </span>
      <span className="shrink-0 rounded-full bg-[color:var(--color-accent)] px-4 py-2 text-sm font-bold">Claim →</span>
    </a>
  );
}
