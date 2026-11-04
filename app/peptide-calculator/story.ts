import type { NewsroomStory } from "@/components/NewsroomArticle";

export const story: NewsroomStory = {
  slug: "peptide-calculator",
  title: "Peptide calculator: concentration and portion math",
  description: "Calculate research solution concentration in mg/mL and mcg/mL, portion volume in mL and µL, and portions per vial. Includes formulas and a worked example.",
  date: "2026-11-04T03:30:32Z",
  dateModified: "2026-11-04T04:11:55Z",
  type: "Article",
  category: "Laboratory tool",
  image: "peptideMathPipettes",
  vials: ["ghk", "kpv"],
  lead: "This peptide calculator divides peptide mass by solution volume to find concentration, then calculates the volume needed for a chosen portion. Enter mass in mg, volume in mL and the amount per portion in mcg. The calculation assumes a fully dissolved, uniform solution with no material loss.[6][7]",
  notice: "Lab solution math for in-vitro research only, not guidance for human or animal use. The starting numbers below are a worked arithmetic example, not a recommended preparation.",
  sections: [
    {
      title: "Key facts", id: "key-facts", paragraphs: [
        "- Concentration is peptide mass divided by final solution volume.[7]",
        "- One milligram equals 1,000 micrograms. One milliliter equals 1,000 microliters.[6]",
        "- The volume added is an estimate of final solution volume. If they differ, the calculation needs the measured final volume.[7]",
        "- A purity percentage is not a peptide-content measurement. Use an amount with a known basis.[3]",
      ],
    },
    {
      title: "How does the concentration calculation work?", id: "how-the-math-works", paragraphs: [
        "Divide peptide mass in mg by final solution volume in mL to get mg/mL. Multiply that result by 1,000 to express the same concentration in mcg/mL. The mass-concentration definition uses the volume of the whole solution, rather than the solvent before mixing.[6][7]",
        "For the portion volume, divide the desired amount in mcg by concentration in mcg/mL. The result is in mL. Multiply by 1,000 to express that volume in µL. These are rearrangements of the same mass-per-volume relationship.[6][7]",
        "For portions per vial, divide total peptide mass in mcg by the amount per portion in mcg. The calculator also shows the number of complete portions, rounded down. This count assumes all the starting material remains available and that each portion has the calculated concentration.",
      ],
    },
    {
      title: "What does a worked example look like?", id: "worked-example", paragraphs: [
        "Suppose the stated peptide mass is 5 mg and the final solution volume is 2 mL. The concentration is 5 ÷ 2 = 2.5 mg/mL, or 2,500 mcg/mL. This is a fictional arithmetic example without a named compound.[6][7]",
        "For a 250 mcg portion, divide 250 by 2,500. The result is 0.1 mL, which equals 100 µL. The vial contains 5,000 mcg in this example, so 5,000 ÷ 250 gives 20 portions before losses.[6]",
        "If the desired amount changes to 300 mcg, the volume becomes 0.12 mL, or 120 µL. There are about 16.6667 portions in the mathematical total, but only 16 complete ones. The remaining material is not another full portion.",
      ],
    },
    {
      title: "Which input mistakes change the answer?", id: "common-mistakes", paragraphs: [
        "Confusing mg with mcg changes the entered amount by a factor of 1,000. The form uses mg for the vial and mcg for the portion, so read both labels before copying a number. We use mcg as the plain-text spelling of micrograms and µL for microliters.[6]",
        "Another mistake is treating added diluent volume as a measured final volume. Dissolution can change the volume of the mixture. The tool initially assumes the two are equal; if volume displacement matters in your preparation, enter the measured final solution volume in the volume field instead.[7]",
        "Total powder mass may include water, counterions or residual solvents. It is not necessarily the same as the mass of the target peptide. A chromatographic purity figure does not, by itself, resolve that difference. Our [content-versus-purity explainer](/peptide-content-vs-purity-measurement) describes how laboratories assign an amount.[3]",
        "Rounding also matters. Calculations use the entered values before display rounding, and the complete-portion count is rounded down. Keep the original measurements in your laboratory record rather than treating the displayed digits as evidence of measurement precision.",
      ],
    },
    {
      title: "Why does the calculator reject some values?", id: "input-limits", paragraphs: [
        "The form accepts positive decimal numbers within its displayed ranges: 0.001 to 1,000 mg for mass, 0.001 to 1,000 mL for volume, and 0.001 to 1,000,000 mcg for a portion. These are software limits, not evidence that a particular preparation is practical.",
        "Blank entries, zero, negative values and non-numeric text pause the results. Use a period for decimals and omit commas. The tool also rejects a portion larger than the total entered peptide mass. Correct the marked field to resume the calculation.",
      ],
    },
    {
      title: "What can this tool not determine?", id: "limits-of-the-tool", paragraphs: [
        "The calculator checks arithmetic. It does not verify a vial's contents, choose a solvent, establish solubility or stability, or determine whether your measuring equipment can handle the calculated volume. It makes no allowance for material left on containers or lost during transfers.",
        "A useful laboratory calculation begins with defined inputs: which mass was measured, what final volume was obtained and what assumptions apply. For the underlying chemistry, start with [what peptides are](/what-are-peptides). For the analytical evidence, read [how to interpret a peptide certificate of analysis](/how-to-read-peptide-coa).",
      ],
    },
  ],
  faqs: [
    { q: "What is the concentration of 5 mg in 2 mL?", a: "If the final solution volume is 2 mL and the peptide is fully dissolved, 5 mg divided by 2 mL is 2.5 mg/mL, or 2,500 mcg/mL. This is an arithmetic example, not a recommended preparation.", refs: [6, 7] },
    { q: "How much solution contains a 250 mcg portion in that example?", a: "At 2,500 mcg/mL, 250 mcg corresponds to 0.1 mL, or 100 µL. A starting mass of 5 mg gives 20 such portions mathematically, before any losses.", refs: [6, 7] },
    { q: "Should I enter diluent volume or final solution volume?", a: "The concentration formula requires final solution volume. The tool assumes it equals the added diluent volume. If dissolution changes the volume enough to matter, use the measured final solution volume instead.", refs: [7] },
    { q: "Does a high purity percentage confirm the mass in a vial?", a: "No. Chromatographic purity and peptide content describe different measurements. Water, counterions and other constituents can affect the mass accounting. The calculator cannot establish the actual amount of peptide present.", refs: [3] },
  ],
  sources: [
    { id: 3, url: "https://www.usp.org/sites/default/files/usp/document/our-work/biologics/reference_standards_to_support_quality_of_synthetic_peptide_therapeutics.pdf", title: "McCarthy et al.: Reference standards for synthetic peptides (2023)", doi: "10.1007/s11095-023-03493-1" },
    { id: 6, url: "https://www.nist.gov/pml/owm/metric-si-prefixes", title: "NIST: Metric (SI) prefixes" },
    { id: 7, url: "https://en.wikipedia.org/wiki/Mass_concentration_(chemistry)", title: "Mass concentration: definition and final solution volume" },
  ],
  related: [
    { url: "/what-are-peptides", title: "What are peptides?" },
    { url: "/peptide-content-vs-purity-measurement", title: "Why peptide content and purity differ" },
    { url: "/how-to-read-peptide-coa", title: "How to read a peptide certificate of analysis" },
    { url: "/peptide-adsorption-glass-plastic-lab-results", title: "How container surfaces affect laboratory recovery" },
  ],
};
