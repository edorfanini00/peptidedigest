"use client";

import { useRef, useState } from "react";
import { calculateSolution, calculateSupply, convertTarget, formatSolutionResults, solutionFields, type SolutionField, type TargetUnit } from "@/lib/peptide-math";
import styles from "./PeptideCalculator.module.css";
import { IQONICBanner } from "./IQONICBanner";

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
  const [shortcutsOpen, setShortcutsOpen] = useState(false);
  const [detailsOpen, setDetailsOpen] = useState(false);
  const [touched, setTouched] = useState<Partial<Record<SolutionField, boolean>>>({});
  const [submitted, setSubmitted] = useState(false);
  const massInput = useRef<HTMLInputElement>(null);
  const resultPanel = useRef<HTMLDivElement>(null);
  const portionMcg = unit === "mg" ? convertTarget(values.portion, "mg", "mcg") ?? "" : values.portion;
  const result = calculateSolution(values.mass, values.volume, portionMcg);
  const display = result.ok ? formatSolutionResults(values.mass, values.volume, portionMcg) : null;
  const supply = result.ok ? calculateSupply(values.mass, portionMcg, count) : null;
  const supplyError = count.trim() && supply && !supply.ok ? supply.error : undefined;
  const isEmpty = Object.values(values).every(value => !value.trim());
  const update = (field: SolutionField, value: string) => {
    setValues(previous => ({ ...previous, [field]: value }));
    setTouched(previous => ({ ...previous, [field]: true }));
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
    setShortcutsOpen(false); setDetailsOpen(false); setTouched({}); setSubmitted(false);
    massInput.current?.focus();
  }
  function calculate() {
    setSubmitted(true);
    if (result.ok) {
      resultPanel.current?.focus();
      resultPanel.current?.scrollIntoView({ block: "start" });
    } else {
      const field = (Object.keys(solutionFields) as SolutionField[]).find(field => result.errors[field]);
      if (field) document.getElementById(`lab-${field}`)?.focus();
    }
  }
  return <section className={styles.tool} aria-labelledby="calculator-heading" data-calculator>
    <div className={styles.intro}>
      <p className={styles.eyebrow}>Research only · volume conversion</p>
      <h1 id="calculator-heading">Peptide calculator</h1>
      <p>Convert your amount to <strong>U-100 units</strong> and mL.</p>
    </div>
    <IQONICBanner />
    <div className={styles.workspace}>
      <form className={styles.controls} onSubmit={event => { event.preventDefault(); calculate(); }} aria-label="Solution calculator" aria-describedby="lab-purpose">
        <button type="button" className={styles.clear} onClick={reset}>Clear all</button>
        <div className={styles.fields}>
          {(Object.keys(solutionFields) as SolutionField[]).map((field, index) => {
            const error = !result.ok && (touched[field] || submitted) ? result.errors[field] : undefined;
            const label = field === "mass" ? "Peptide in the vial" : field === "volume" ? "Final mixed volume" : "Amount to measure";
            const measure = field === "mass" ? "mg" : field === "volume" ? "mL" : unit;
            const range = field === "portion" && unit === "mg" ? "0.000001 to 1,000 mg" : solutionFields[field].range;
            return <div key={field} className={styles.field}>
              <label htmlFor={`lab-${field}`}><span className={styles.step} aria-hidden="true">{index + 1}</span>{label}</label>
              <div className={styles.inputRow}>
                <input ref={field === "mass" ? massInput : undefined} id={`lab-${field}`} name={field} type="text" inputMode="decimal" autoComplete="off" spellCheck={false}
                  placeholder="Enter amount" value={values[field]} onFocus={event => event.currentTarget.select()} onChange={event => update(field, event.target.value)}
                  aria-label={`${label} (${measure})`} aria-invalid={!!error} aria-describedby={`lab-${field}-help${error ? ` lab-${field}-error` : ""}`} />
                {field === "portion" ? <select aria-label="Amount unit" value={unit} onChange={event => changeUnit(event.target.value as TargetUnit)}><option value="mcg">mcg</option><option value="mg">mg</option></select> : <span>{measure}</span>}
              </div>
              <p id={`lab-${field}-help`} className={styles.hint}>{field === "mass" ? "Peptide amount on the vial label." : field === "volume" ? "Measured total after mixing, not just liquid added." : "Your chosen amount. This tool does not choose it."}</p>
              {error && <p id={`lab-${field}-error`} className={styles.error}>{field === "portion" && unit === "mg" && !error.includes("exceeds") ? `Enter a decimal number from ${range}.` : error}</p>}
            </div>;
          })}
        </div>
        <button type="submit" className={styles.calculate}>Calculate units <span aria-hidden="true">→</span></button>
        <p className={styles.liveHint}>Results update as you type.</p>
        <details className={styles.disclosure} open={shortcutsOpen} onToggle={event => setShortcutsOpen(event.currentTarget.open)}>
          <summary>Shortcuts &amp; input limits</summary>
          {(["mass", "volume"] as const).map(field => <div key={field} className={styles.shortcutGroup}>
            <p className={styles.hint}>{solutionFields[field].label} · {solutionFields[field].range}</p>
            <div className={styles.chips} role="group" aria-label={`${field === "mass" ? "Peptide mass in vial" : "Final solution volume"} shortcuts`}>
              {shortcuts[field].map(value => <button key={value} type="button" aria-pressed={values[field] === value} onClick={() => update(field, value)}>{value} {field === "mass" ? "mg" : "mL"}</button>)}
            </div>
          </div>)}
          <p className={styles.hint}>Amount to measure: {unit === "mg" ? "0.000001 to 1,000 mg" : solutionFields.portion.range}. Shortcuts are numbers only, not suggested preparations.</p>
        </details>
        <div className={styles.example}><button type="button" onClick={() => { setValues(example); setUnit("mcg"); setCount(""); setNotice(""); }}>Load example</button><span>Optional arithmetic example.<br />Not a suggested preparation.</span></div>
        <p role="status" className={styles.error}>{notice}</p>
      </form>
      <div className={styles.output}>
        <div ref={resultPanel} tabIndex={-1} role="status" aria-live="polite" aria-atomic="true" className={styles.results} data-results aria-label="Calculation result">
          <p className={styles.eyebrow}>Your calculation</p>
          {result.ok && display ? <>
            <h2>U-100 scale</h2>
            <p className={styles.bigResult}><span data-result="u100">{display.u100}</span> <span className={styles.measure}>units</span></p>
            <p className={styles.secondaryResult}><span data-result="portion-ml">{display.portionMl}</span> mL <span>for your {values.portion.trim()} {unit} amount</span></p>
            {display.aboveU100Scale ? <p className={styles.outOfScale}>Above the 100-unit scale (1 mL). This value is outside the diagram’s range.</p> : display.belowU100Unit ? <p className={styles.scaleNote}>Below 1 unit. Too small to show precisely on this diagram.</p> : <div data-u100-scale className={styles.scale} aria-hidden="true">
              <div className={styles.scaleTrack}><span style={{ left: `${display.scalePercent}%` }} /></div>
              <div className={styles.scaleLabels}><span>0</span><span>25</span><span>50</span><span>75</span><span>100</span></div>
            </div>}
            <p className={styles.scaleNote}>100 U-100 units = 1 mL. These are volume markings, not biological IU or drug potency.</p>
            <p className={styles.hint}>≈ means rounded. Diagram only; displayed digits do not establish equipment precision.</p>
          </> : <div className={styles.empty}>
            <div className={styles.emptyMark} aria-hidden="true">U-100 <span>↔</span> mL</div>
            <h2>{isEmpty ? "Your units will appear here" : "Check your three quantities"}</h2>
            <p>{isEmpty ? "Enter the three quantities to see the volume for your chosen amount." : "Enter a valid value in all three fields to see your result."}</p>
          </div>}
        </div>
        {result.ok && display && <details className={styles.disclosure} open={detailsOpen} onToggle={event => setDetailsOpen(event.currentTarget.open)}>
          <summary>Concentration &amp; complete portions</summary>
          <div className={styles.detailResults}>
            <dl>
              <div><dt>Volume in microliters</dt><dd><span data-result="portion-ul">{display.portionUl}</span> µL</dd></div>
              <div><dt>Concentration</dt><dd><span data-result="mg-per-ml">{display.mgPerMl}</span> mg/mL<small><span data-result="mcg-per-ml">{display.mcgPerMl}</span> mcg/mL</small></dd></div>
              <div><dt>Complete portions per vial</dt><dd data-result="full-portions">{result.fullPortions.toLocaleString("en-US")}</dd><dd><small>Before losses · <span data-result="portions">{display.portions}</span> including any fraction</small></dd></div>
            </dl>
            <p className={styles.hint}>≈ marks a rounded display (six significant figures). Complete portions are rounded down using all entered digits.</p>
          </div>
        </details>}
        {result.ok && display && <details className={styles.disclosure} open={equationsOpen} onToggle={event => setEquationsOpen(event.currentTarget.open)}>
          <summary>See the equations</summary>
          <div className={styles.equations}>
            <p><strong>Concentration</strong>{values.mass.trim()} mg ÷ {values.volume.trim()} mL {equationResult(display.mgPerMl)} mg/mL</p>
            <p><strong>Portion volume</strong>({portionMcg.trim()} mcg × {values.volume.trim()} mL) ÷ ({values.mass.trim()} mg × 1,000 mcg/mg) {equationResult(display.portionMl)} mL</p>
            <p><strong>Microliters</strong>Unrounded portion volume in mL × 1,000 {equationResult(display.portionUl)} µL</p>
            <p><strong>U-100 scale</strong>Unrounded portion volume in mL × 100 {equationResult(display.u100)} units.</p>
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
