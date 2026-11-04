export const solutionFields = {
  mass: { label: "Peptide mass in vial (mg)", min: 0.001, max: 1000, range: "0.001 to 1,000 mg" },
  volume: { label: "Diluent volume added (mL)", min: 0.001, max: 1000, range: "0.001 to 1,000 mL" },
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
    if (!/^(?:\d+(?:\.\d*)?|\.\d+)$/.test(text) || !Number.isFinite(value)) {
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
