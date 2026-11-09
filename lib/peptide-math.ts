export const solutionFields = {
  mass: { label: "Peptide mass in vial (mg)", min: 0.001, max: 1000, range: "0.001 to 1,000 mg" },
  volume: { label: "Final solution volume (mL)", min: 0.001, max: 1000, range: "0.001 to 1,000 mL" },
  portion: { label: "Amount per portion (mcg)", min: 0.001, max: 1000000, range: "0.001 to 1,000,000 mcg" },
} as const;
export type SolutionField = keyof typeof solutionFields;
export type SolutionErrors = Partial<Record<SolutionField, string>>;

// Call only after decimal syntax validation. Preserve every entered digit for
// range/capacity comparisons and the whole-portion quotient, never a tolerance.
function decimalRatio(text: string) {
  const [whole, fraction = ""] = text.split(".");
  return { numerator: BigInt(whole + fraction), denominator: BigInt(10) ** BigInt(fraction.length) };
}

// Bound pasted text and arithmetic cost, while allowing decimal-point shifts
// to add leading zeroes without discarding any of the 120 significant digits.
function isDecimalText(text: string) {
  return text.length <= 256 && /^(?:\d+(?:\.\d*)?|\.\d+)$/.test(text)
    && text.replace(".", "").replace(/^0+/, "").replace(/0+$/, "").length <= 120;
}

// Decimal text only: reject partial parses, hexadecimal, comma ambiguity and non-finite values.
export function calculateSolution(mass: string, volume: string, portion: string) {
  const raw = { mass, volume, portion };
  const errors: SolutionErrors = {};
  const values = {} as Record<SolutionField, number>;
  const exact = {} as Record<SolutionField, ReturnType<typeof decimalRatio>>;
  for (const field of Object.keys(solutionFields) as SolutionField[]) {
    const text = raw[field].trim();
    const value = Number(text);
    const rule = solutionFields[field];
    if (!isDecimalText(text) || !Number.isFinite(value)) {
      errors[field] = `Enter a decimal number in ${rule.range}; use a period for decimals.`;
    } else {
      const decimal = decimalRatio(text);
      const min = decimalRatio(String(rule.min));
      const max = decimalRatio(String(rule.max));
      exact[field] = decimal;
      if (decimal.numerator * min.denominator < min.numerator * decimal.denominator ||
          decimal.numerator * max.denominator > max.numerator * decimal.denominator) {
        errors[field] = `Enter a value from ${rule.range}. Zero and negative values are not accepted.`;
      }
    }
    values[field] = value;
  }
  if (Object.keys(errors).length) return { ok: false as const, errors };
  const { mass: massMg, volume: volumeMl, portion: portionMcg } = values;
  // Cross-multiply into the same exact scale in mcg. Positive integer division
  // floors genuine fractional portions, including digits Number() cannot retain.
  const total = exact.mass.numerator * BigInt(1000) * exact.portion.denominator;
  const requested = exact.portion.numerator * exact.mass.denominator;
  if (requested > total) {
    return { ok: false as const, errors: { portion: "The requested portion exceeds the total peptide mass in this vial." } as SolutionErrors };
  }
  // The supported ranges cap this integer at 1,000,000,000, safely within Number.
  const fullPortions = Number(total / requested);
  const portions = total % requested === BigInt(0) ? fullPortions : massMg * 1000 / portionMcg;
  // Floating point is only for approximate displayed concentration/volume, not
  // acceptance or complete counts. An exact whole vial uses its entered volume.
  const mgPerMl = massMg / volumeMl;
  const mcgPerMl = mgPerMl * 1000;
  const portionMl = total === requested ? volumeMl : portionMcg / mcgPerMl;
  return { ok: true as const, mgPerMl, mcgPerMl, portionMl, portionUl: portionMl * 1000, portions, fullPortions };
}

export function formatLabNumber(value: number): string {
  return value !== 0 && (Math.abs(value) < 0.0001 || Math.abs(value) >= 10000000)
    ? value.toExponential(5)
    : new Intl.NumberFormat("en-US", { maximumSignificantDigits: 6 }).format(value);
}

export type TargetUnit = "mcg" | "mg";

// Shift the decimal point as text. Number() would discard significant digits.
export function convertTarget(raw: string, from: TargetUnit, to: TargetUnit): string | null {
  const text = raw.trim();
  if (!isDecimalText(text)) return null;
  const [whole, fraction = ""] = text.split(".");
  const digits = (whole || "0") + fraction;
  const point = (whole || "0").length + (from === to ? 0 : from === "mg" ? 3 : -3);
  const shifted = point <= 0 ? `0.${"0".repeat(-point)}${digits}`
    : point >= digits.length ? digits + "0".repeat(point - digits.length)
    : `${digits.slice(0, point)}.${digits.slice(point)}`;
  return shifted.replace(/^0+(?=\d)/, "").replace(/(\.\d*?)0+$/, "$1").replace(/\.$/, "");
}

// All denominators here are powers of ten, so remainder mass is a finite decimal.
function exactDecimal(numerator: bigint, denominator: bigint): string {
  const places = denominator.toString().length - 1;
  const digits = numerator.toString().padStart(places + 1, "0");
  if (!places) return digits;
  return `${digits.slice(0, -places)}.${digits.slice(-places)}`.replace(/0+$/, "").replace(/\.$/, "");
}

export function calculateSupply(mass: string, portionMcg: string, count: string) {
  const result = calculateSolution(mass, "1", portionMcg);
  if (!result.ok) return { ok: false as const, error: "Enter valid calculator quantities first." };
  if (!/^\d{1,10}$/.test(count.trim()) || BigInt(count.trim()) < BigInt(1) || BigInt(count.trim()) > BigInt(1000000000)) {
    return { ok: false as const, error: "Enter a whole number from 1 to 1,000,000,000 portions." };
  }
  const needed = BigInt(count.trim());
  const perContainer = BigInt(result.fullPortions);
  const containers = (needed + perContainer - BigInt(1)) / perContainer;
  const m = decimalRatio(mass.trim());
  const p = decimalRatio(portionMcg.trim());
  const denominator = m.denominator * p.denominator;
  const massNumerator = m.numerator * BigInt(1000) * p.denominator;
  const portionNumerator = p.numerator * m.denominator;
  return {
    ok: true as const,
    containers: containers.toString(),
    completePortions: (containers * perContainer).toString(),
    remainingMcg: exactDecimal(containers * massNumerator - needed * portionNumerator, denominator),
    perContainerRemainderMcg: exactDecimal(massNumerator - perContainer * portionNumerator, denominator),
  };
}

// Compare six-significant-figure displays against exact inputs, including values
// beyond Number precision. Never feed a rounded display back into any calculation.
function formatRatio(numerator: bigint, denominator: bigint): string {
  let exponent = numerator.toString().length - denominator.toString().length;
  const below = exponent >= 0 ? numerator < denominator * BigInt(10) ** BigInt(exponent)
    : numerator * BigInt(10) ** BigInt(-exponent) < denominator;
  if (below) exponent -= 1;
  const places = 5 - exponent;
  const scaledN = numerator * BigInt(10) ** BigInt(Math.max(places, 0));
  const scaledD = denominator * BigInt(10) ** BigInt(Math.max(-places, 0));
  const rounded = (scaledN * BigInt(2) + scaledD) / (scaledD * BigInt(2));
  const shown = formatLabNumber(Number(rounded) * 10 ** -places);
  const ungrouped = shown.replaceAll(",", "");
  const [mantissa, exponentText = "0"] = ungrouped.split("e");
  const ratio = decimalRatio(mantissa);
  const shownExponent = Number(exponentText);
  const n = ratio.numerator * BigInt(10) ** BigInt(Math.max(shownExponent, 0));
  const d = ratio.denominator * BigInt(10) ** BigInt(Math.max(-shownExponent, 0));
  return `${n * denominator === numerator * d ? "" : "≈"}${shown}`;
}

export function formatSolutionResults(mass: string, volume: string, portionMcg: string) {
  if (!calculateSolution(mass, volume, portionMcg).ok) return null;
  const m = decimalRatio(mass.trim());
  const v = decimalRatio(volume.trim());
  const p = decimalRatio(portionMcg.trim());
  const concentrationN = m.numerator * v.denominator;
  const concentrationD = m.denominator * v.numerator;
  const volumeN = p.numerator * concentrationD;
  const volumeD = p.denominator * concentrationN * BigInt(1000);
  const u100N = volumeN * BigInt(100);
  const aboveU100Scale = u100N > volumeD * BigInt(100);
  const belowU100Unit = u100N < volumeD;
  return {
    mgPerMl: formatRatio(concentrationN, concentrationD),
    mcgPerMl: formatRatio(concentrationN * BigInt(1000), concentrationD),
    portionMl: formatRatio(volumeN, volumeD),
    portionUl: formatRatio(volumeN * BigInt(1000), volumeD),
    u100: formatRatio(u100N, volumeD),
    aboveU100Scale,
    belowU100Unit,
    // Geometry only: bound the quotient before converting to Number. Never
    // divide separately converted BigInts or infer capacity from rounded text.
    scalePercent: aboveU100Scale || belowU100Unit ? null : Number(u100N * BigInt(1000000) / volumeD) / 1000000,
    portions: formatRatio(m.numerator * BigInt(1000) * p.denominator, m.denominator * p.numerator),
  };
}
