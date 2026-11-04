import test from "node:test";
import assert from "node:assert/strict";
import fs from "node:fs";
import ts from "typescript";
const source = fs.readFileSync(new URL("../lib/peptide-math.ts", import.meta.url), "utf8");
const { outputText } = ts.transpileModule(source, { compilerOptions: { module: ts.ModuleKind.ES2022, target: ts.ScriptTarget.ES2022 } });
const { calculateSolution } = await import(`data:text/javascript;base64,${Buffer.from(outputText).toString("base64")}`);

test("5 mg / 2 mL, 250 mcg aliquot: hand-calculated reference", () => {
  assert.deepEqual(calculateSolution("5", "2", "250"), { ok: true, mgPerMl: 2.5, mcgPerMl: 2500, aliquotMl: 0.1, aliquotUl: 100, aliquots: 20, fullAliquots: 20 });
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
test("rejects an aliquot larger than the vial", () => {
  assert.equal(calculateSolution("5", "2", "5001").ok, false);
});
test("fractional remainder is not an extra full aliquot", () => {
  const result = calculateSolution("1", "4", "300");
  assert.equal(result.mgPerMl, 0.25);
  assert.equal(result.aliquotMl, 1.2);
  assert.equal(result.aliquotUl, 1200);
  assert.equal(result.fullAliquots, 3);
  assert.ok(Math.abs(result.aliquots - 10 / 3) < 1e-12);
});
test("whole vial is one aliquot", () => {
  const result = calculateSolution("5", "2", "5000");
  assert.equal(result.aliquotMl, 2);
  assert.equal(result.fullAliquots, 1);
});
