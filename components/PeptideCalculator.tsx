"use client";

import { useRef, useState } from "react";
import { calculateSolution, calculateSupply, convertTarget, formatSolutionResults, solutionFields, type SolutionField, type TargetUnit } from "@/lib/peptide-math";
import styles from "./PeptideCalculator.module.css";

const equationResult = (value: string) => value.startsWith("≈") ? value : `= ${value}`;
const empty = { mass: "", volume: "", portion: "" };
const example = { mass: "5", volume: "2", portion: "250" };
const shortcuts = { mass: ["1", "5", "10", "20"], volume: ["1", "2", "3", "5"] };

export function PeptideCalculator() {
  const [values, setValues] = useState(empty);
  const [unit, setUnit] = useState<TargetUnit>("mcg");
  const [count, setCount] = useState("");
  const [notice, setNotice] = useState("");
  const [equationsOpen, setEquationsOpen] = useState(false);
  const [supplyOpen, setSupplyOpen] = useState(false);
  const massInput = useRef<HTMLInputElement>(null);
  const portionMcg = unit === "mg" ? convertTarget(values.portion, "mg", "mcg") ?? "" : values.portion;
  const result = calculateSolution(values.mass, values.volume, portionMcg);
  const display = result.ok ? formatSolutionResults(values.mass, values.volume, portionMcg) : null;
  const supply = result.ok ? calculateSupply(values.mass, portionMcg, count) : null;
  const supplyError = count.trim() && supply && !supply.ok ? supply.error : undefined;
  const isEmpty = Object.values(values).every(value => !value.trim());
  const update = (field: SolutionField, value: string) => {
    setValues(previous => ({ ...previous, [field]: value }));
    setNotice("");
  };
  function changeUnit(next: TargetUnit) {
    const converted = convertTarget(values.portion, unit, next);
    setValues(previous => ({ ...previous, portion: converted ?? "" }));
    setNotice(values.portion.trim() && converted === null ? "Invalid target cleared. Enter a new target in the selected measure." : "");
    setUnit(next);
  }
  function reset() {
    setValues(empty); setUnit("mcg"); setCount(""); setNotice(""); setEquationsOpen(false); setSupplyOpen(false);
    massInput.current?.focus();
  }
  return <section className={styles.tool} aria-labelledby="calculator-heading" data-calculator>
    <div className={styles.intro}>
      <p className={styles.eyebrow}>Research bench · solution math</p>
      <h1 id="calculator-heading">Peptide calculator</h1>
      <p>From peptide mass to solution volume. Enter your own quantities to calculate concentration and a portion.</p>
    </div>
    <div className={styles.workspace}>
      <form className={styles.controls} onSubmit={event => event.preventDefault()} aria-label="Solution calculator" aria-describedby="lab-purpose">
        <div className={styles.cardHeading}><h2>Your quantities</h2><button type="button" className={styles.clear} onClick={reset}>Clear all</button></div>
        <div className={styles.fields}>
          {(Object.keys(solutionFields) as SolutionField[]).map((field, index) => {
            const error = !result.ok && values[field].trim() ? result.errors[field] : undefined;
            const label = field === "mass" ? "Peptide mass in vial" : field === "volume" ? "Final solution volume" : "Target mass per portion";
            const measure = field === "mass" ? "mg" : field === "volume" ? "mL" : unit;
            const range = field === "portion" && unit === "mg" ? "0.000001 to 1,000 mg" : solutionFields[field].range;
            return <div key={field} className={styles.field}>
              <label htmlFor={`lab-${field}`}><span className={styles.step} aria-hidden="true">{index + 1}</span>{label}</label>
              <div className={styles.inputRow}>
                <input ref={field === "mass" ? massInput : undefined} id={`lab-${field}`} name={field} type="text" inputMode="decimal" autoComplete="off" spellCheck={false}
                  placeholder="Enter amount" value={values[field]} onChange={event => update(field, event.target.value)}
                  aria-invalid={!!error} aria-describedby={`lab-${field}-range${error ? ` lab-${field}-error` : ""}`} />
                {field === "portion" ? <select aria-label="Target mass unit" value={unit} onChange={event => changeUnit(event.target.value as TargetUnit)}><option value="mcg">mcg</option><option value="mg">mg</option></select> : <span>{measure}</span>}
              </div>
              {field !== "portion" && <div className={styles.chips} role="group" aria-label={`${label} shortcuts`}>
                {shortcuts[field].map(value => <button key={value} type="button" aria-pressed={values[field] === value} onClick={() => update(field, value)}>{value} {measure}</button>)}
              </div>}
              <p id={`lab-${field}-range`} className={styles.hint}>{range}{field === "volume" ? ". Use the final volume, which can differ from liquid added." : ""}</p>
              {error && <p id={`lab-${field}-error`} className={styles.error}>{field === "portion" && unit === "mg" && !error.includes("exceeds") ? `Enter a decimal number from ${range}.` : error}</p>}
            </div>;
          })}
        </div>
        <div className={styles.example}><button type="button" onClick={() => { setValues(example); setUnit("mcg"); setCount(""); setNotice(""); }}>Load example</button><span>Optional arithmetic example.<br />Not a suggested preparation.</span></div>
        <p role="status" className={styles.error}>{notice}</p>
      </form>
      <div className={styles.output}>
        <div role="status" aria-live="polite" aria-atomic="true" className={styles.results} data-results>
          <p className={styles.eyebrow}>Your calculation</p>
          {result.ok && display ? <>
            <h2>Volume per portion</h2>
            <p className={styles.bigResult}><span data-result="portion-ml">{display.portionMl}</span> <span className={styles.measure}>mL</span></p>
            <p className={styles.secondaryResult}><span data-result="portion-ul">{display.portionUl}</span> µL <span>for {values.portion.trim()} {unit}</span></p>
            <div className={styles.volumeGraphic} aria-hidden="true"><div style={{ width: `${Math.min(100, result.portionMl / Number(values.volume) * 100)}%` }} /></div>
            <p className={styles.hint}>Portion volume relative to the full {values.volume.trim()} mL solution. Diagram only, not an equipment scale.</p>
            <dl>
              <div><dt>Concentration</dt><dd><span data-result="mg-per-ml">{display.mgPerMl}</span> mg/mL<small><span data-result="mcg-per-ml">{display.mcgPerMl}</span> mcg/mL</small></dd></div>
              <div><dt>Complete portions per vial</dt><dd data-result="full-portions">{result.fullPortions.toLocaleString("en-US")}</dd><dd><small>Before losses · <span data-result="portions">{display.portions}</span> including any fraction</small></dd></div>
            </dl>
            <p className={styles.hint}>≈ marks a rounded display (six significant figures). Complete portions are rounded down using all entered digits.</p>
          </> : <div className={styles.empty}>
            <div className={styles.emptyMark} aria-hidden="true">mL <span>↔</span> µL</div>
            <h2>{isEmpty ? "Start with your quantities" : "Complete your calculation"}</h2>
            <p>{isEmpty ? "Your portion volume, concentration and complete portion count will appear here." : "Enter a valid value in all three fields. Results stay hidden while an entry is missing or needs correction."}</p>
          </div>}
        </div>
        {result.ok && display && <details className={styles.disclosure} open={equationsOpen} onToggle={event => setEquationsOpen(event.currentTarget.open)}>
          <summary>See the equations</summary>
          <div className={styles.equations}>
            <p><strong>Concentration</strong>{values.mass.trim()} mg ÷ {values.volume.trim()} mL {equationResult(display.mgPerMl)} mg/mL</p>
            <p><strong>Portion volume</strong>({portionMcg.trim()} mcg × {values.volume.trim()} mL) ÷ ({values.mass.trim()} mg × 1,000 mcg/mg) {equationResult(display.portionMl)} mL</p>
            <p><strong>Microliters</strong>Unrounded portion volume in mL × 1,000 {equationResult(display.portionUl)} µL</p>
            <p><strong>Portions per vial</strong>({values.mass.trim()} mg × 1,000 mcg/mg) ÷ {portionMcg.trim()} mcg {equationResult(display.portions)}; round down to {result.fullPortions.toLocaleString("en-US")} complete portions.</p>
            {unit === "mg" && <p>Target conversion: {values.portion.trim()} mg × 1,000 = {portionMcg} mcg.</p>}
          </div>
        </details>}
      </div>
    </div>
    <details className={styles.supply} open={supplyOpen} onToggle={event => setSupplyOpen(event.currentTarget.open)}>
      <summary><span>Plan a laboratory supply</span><span className={styles.optional}>Optional</span></summary>
      <div className={styles.supplyContent}>
        <p>Use the same vial mass and target portion above. Each portion comes from one vial; remainders are not pooled.</p>
        <label htmlFor="lab-count">Total complete portions needed</label>
        <input id="lab-count" type="text" inputMode="numeric" autoComplete="off" value={count} placeholder="Enter a whole number" onChange={event => setCount(event.target.value)} aria-describedby={`lab-count-help${supplyError ? " lab-count-error" : ""}`} aria-invalid={!!supplyError} />
        <p id="lab-count-help" className={styles.hint}>1 to 1,000,000,000 portions. Enter your own total; no schedule is assumed.</p>
        <div role="status" aria-live="polite" data-supply-result>
          {supply?.ok ? <><p className={styles.supplyTotal}><strong>{supply.containers}</strong> {supply.containers === "1" ? "vial" : "vials"} before losses</p><p>{supply.completePortions} complete portions available. After the requested {count.trim()} portions: <strong>{supply.remainingMcg} mcg</strong> remaining across these vials.</p><p className={styles.hint}>Each fully used vial leaves {supply.perContainerRemainderMcg} mcg after its last complete portion. Transfer losses can increase the number of vials needed.</p></> : <p id={supplyError ? "lab-count-error" : undefined} className={styles.hint}>{!result.ok ? "Complete the calculator above to estimate supply." : count.trim() ? supply?.error : "Enter a total to estimate the number of vials."}</p>}
        </div>
      </div>
    </details>
    <p id="lab-purpose" className={styles.purpose}>For in-vitro laboratory research only, not human or animal use. Assumes full dissolution, a uniform solution and no material loss. This tool checks arithmetic, not solvent choice, stability or equipment suitability.</p>
    <noscript><p>Enable JavaScript for interactive calculations. The formulas and worked example in the article below remain available.</p></noscript>
  </section>;
}
