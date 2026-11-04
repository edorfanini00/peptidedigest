import test from "node:test";
import assert from "node:assert/strict";
import fs from "node:fs";
import ts from "typescript";
const source = fs.readFileSync(new URL("../lib/peptide-math.ts", import.meta.url), "utf8");
const { outputText } = ts.transpileModule(source, { compilerOptions: { module: ts.ModuleKind.ES2022, target: ts.ScriptTarget.ES2022 } });
const { calculateSolution } = await import(`data:text/javascript;base64,${Buffer.from(outputText).toString("base64")}`);

test("5 mg / 2 mL, 250 mcg portion: hand-calculated reference", () => {
  assert.deepEqual(calculateSolution("5", "2", "250"), { ok: true, mgPerMl: 2.5, mcgPerMl: 2500, portionMl: 0.1, portionUl: 100, portions: 20, fullPortions: 20 });
});
for (const field of [0, 1, 2]) {
  for (const bad of ["", " ", "0", "-1", "NaN", "Infinity", "1e309", "0x10", "1,5", "5mg", "0.0000001", "1000001"]) {
    test(`rejects ${JSON.stringify(bad)} in field ${field}`, () => {
      const values = ["5", "2", "250"];
      values[field] = bad;
      const result = calculateSolution(...values);
      assert.equal(result.ok, false);
      assert.ok(Object.values(result.errors).some(Boolean));
    });
  }
}
test("rejects a portion larger than the vial", () => {
  assert.equal(calculateSolution("5", "2", "5001").ok, false);
});
test("fractional remainder is not an extra full portion", () => {
  const result = calculateSolution("1", "4", "300");
  assert.equal(result.mgPerMl, 0.25);
  assert.equal(result.portionMl, 1.2);
  assert.equal(result.portionUl, 1200);
  assert.equal(result.fullPortions, 3);
  assert.ok(Math.abs(result.portions - 10 / 3) < 1e-12);
});
test("whole vial is one portion", () => {
  const result = calculateSolution("5", "2", "5000");
  assert.equal(result.portionMl, 2);
  assert.equal(result.fullPortions, 1);
});
test("decimal whole vial: 1.001 mg equals exactly 1001 mcg", () => {
  const result = calculateSolution("1.001", "2", "1001");
  assert.equal(result.ok, true);
  assert.equal(result.portions, 1);
  assert.equal(result.fullPortions, 1);
  assert.equal(result.portionMl, 2);
  assert.equal(result.portionUl, 2000);
});
test("a genuine decimal remainder just below ten is not promoted", () => {
  const result = calculateSolution("0.001", "1", "0.10000000000000005");
  assert.equal(result.ok, true);
  assert.equal(result.fullPortions, 9);
});
test("precision beyond Number resolution cannot hide an oversized portion", () => {
  const result = calculateSolution("0.001", "1", "1.0000000000000001");
  assert.equal(result.ok, false);
  assert.match(result.errors.portion, /exceeds the total/);
});
for (const [mass, expected] of [["19.9999", 19], ["19.6", 19], ["20", 20]]) {
  test(`${mass} portions are floored to ${expected} complete portions`, () => {
    const result = calculateSolution(mass, "2", "1000");
    assert.equal(result.ok, true);
    assert.equal(result.portions, Number(mass));
    assert.equal(result.fullPortions, expected);
  });
}
for (const [field, value] of [[0, "1000.0000000000000001"], [1, "0.00099999999999999999"], [2, "1000000.0000000000000001"]]) {
  test(`enforces exact decimal range in field ${field}`, () => {
    const values = ["1000", "2", "250"];
    values[field] = value;
    assert.equal(calculateSolution(...values).ok, false);
  });
}
