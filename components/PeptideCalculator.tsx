"use client";

import { useState } from "react";
import { calculateSolution, formatLabNumber, solutionFields, type SolutionField } from "@/lib/peptide-math";
import styles from "./PeptideCalculator.module.css";

const example = { mass: "5", volume: "2", aliquot: "250" };
export function PeptideCalculator() {
  const [values, setValues] = useState(example);
  const result = calculateSolution(values.mass, values.volume, values.aliquot);
  return <section className={`not-prose ${styles.tool}`} aria-labelledby="calculator-heading" data-calculator>
    <p className={styles.eyebrow}>Research bench · solution math</p>
    <h2 id="calculator-heading">What is the concentration of your solution?</h2>
    <p id="lab-purpose" className={styles.note}>Laboratory solution math for in-vitro research only. Not guidance for human or animal use.</p>
    <form onSubmit={event => event.preventDefault()} aria-describedby="lab-purpose volume-assumption">
      <div className={styles.fields}>
        {(Object.keys(solutionFields) as SolutionField[]).map(field => {
          const error = result.ok ? undefined : result.errors[field];
          return <div key={field}>
            <label htmlFor={`lab-${field}`}>{solutionFields[field].label}</label>
            <input id={`lab-${field}`} name={field} type="text" inputMode="decimal" autoComplete="off" spellCheck={false}
              value={values[field]} onChange={event => setValues(previous => ({ ...previous, [field]: event.target.value }))}
              aria-invalid={!!error} aria-describedby={`lab-${field}-range${error ? ` lab-${field}-error` : ""}`} />
            <p id={`lab-${field}-range`} className={styles.hint}>{solutionFields[field].range}</p>
            {error && <p id={`lab-${field}-error`} className={styles.error}>{error}</p>}
          </div>;
        })}
      </div>
      <p id="volume-assumption" className={styles.note}>Estimate assumes final solution volume equals the diluent volume added, full dissolution and no material loss. If final volume differs, use the measured final volume instead.</p>
      <button type="button" onClick={() => setValues({ ...example })}>Restore worked example</button>
    </form>
    <div role="status" aria-live="polite" aria-atomic="true" className={styles.results} data-results>
      {result.ok ? <>
        <h3>Calculated results</h3>
        <dl>
          <div><dt>Concentration</dt><dd><span data-result="mg-per-ml">{formatLabNumber(result.mgPerMl)}</span> mg/mL <small><span data-result="mcg-per-ml">{formatLabNumber(result.mcgPerMl)}</span> mcg/mL</small></dd></div>
          <div><dt>Volume per aliquot</dt><dd><span data-result="aliquot-ml">{formatLabNumber(result.aliquotMl)}</span> mL <small><span data-result="aliquot-ul">{formatLabNumber(result.aliquotUl)}</span> µL</small></dd></div>
          <div><dt>Aliquots per vial</dt><dd><span data-result="aliquots">{formatLabNumber(result.aliquots)}</span> <small><span data-result="full-aliquots">{result.fullAliquots.toLocaleString("en-US")}</span> complete aliquots before losses</small></dd></div>
        </dl>
        <p className={styles.hint}>Displayed values are rounded to six significant figures, except the complete-aliquot count. A fractional aliquot count means some material remains after the last complete aliquot.</p>
      </> : <p className={styles.error}>Results paused. {Object.values(result.errors).join(" ")}</p>}
    </div>
    <p className={styles.note}>Numbers are calculated in your browser. This tool does not select a solvent, assess stability or check whether a volume is within your equipment’s working range.</p>
    <noscript><p>Enable JavaScript for interactive calculations. The formulas and worked example below remain available.</p></noscript>
  </section>;
}
