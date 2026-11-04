export const solutionFields = {
  mass: { label: "Peptide mass in vial (mg)", min: 0.001, max: 1000, range: "0.001 to 1,000 mg" },
  volume: { label: "Diluent volume added (mL)", min: 0.001, max: 1000, range: "0.001 to 1,000 mL" },
  aliquot: { label: "Desired amount per aliquot (mcg)", min: 0.001, max: 1000000, range: "0.001 to 1,000,000 mcg" },
} as const;
export type SolutionField = keyof typeof solutionFields;
export type SolutionErrors = Partial<Record<SolutionField, string>>;

// Decimal text only: reject partial parses, hexadecimal, comma ambiguity and non-finite values.
export function calculateSolution(mass: string, volume: string, aliquot: string) {
  const raw = { mass, volume, aliquot };
  const errors: SolutionErrors = {};
  const values = {} as Record<SolutionField, number>;
  for (const field of Object.keys(solutionFields) as SolutionField[]) {
    const text = raw[field].trim();
    const value = Number(text);
    const rule = solutionFields[field];
    if (!/^(?:\d+(?:\.\d*)?|\.\d+)$/.test(text) || !Number.isFinite(value)) {
      errors[field] = `Enter a decimal number in ${rule.range}; use a period for decimals.`;
    } else if (value < rule.min || value > rule.max) {
      errors[field] = `Enter a value from ${rule.range}. Zero and negative values are not accepted.`;
    }
    values[field] = value;
  }
  if (Object.keys(errors).length) return { ok: false as const, errors };
  const { mass: massMg, volume: volumeMl, aliquot: aliquotMcg } = values;
  if (aliquotMcg > massMg * 1000) {
    return { ok: false as const, errors: { aliquot: "The requested aliquot exceeds the total peptide mass in this vial." } as SolutionErrors };
  }
  const mgPerMl = massMg / volumeMl;
  const mcgPerMl = mgPerMl * 1000;
  const aliquotMl = aliquotMcg / mcgPerMl;
  const aliquots = massMg * 1000 / aliquotMcg;
  // Correct only machine-rounding noise at an integer boundary, not a real remainder.
  const nearest = Math.round(aliquots);
  const fullAliquots = Math.floor(Math.abs(aliquots - nearest) <= Number.EPSILON * Math.max(1, aliquots) * 4 ? nearest : aliquots);
  return { ok: true as const, mgPerMl, mcgPerMl, aliquotMl, aliquotUl: aliquotMl * 1000, aliquots, fullAliquots };
}

export function formatLabNumber(value: number): string {
  return value !== 0 && (Math.abs(value) < 0.0001 || Math.abs(value) >= 10000000)
    ? value.toExponential(5)
    : new Intl.NumberFormat("en-US", { maximumSignificantDigits: 6 }).format(value);
}
