import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import ts from 'typescript';
const source = fs.readFileSync(new URL('../lib/peptide-math.ts', import.meta.url), 'utf8');
const { outputText } = ts.transpileModule(source, { compilerOptions: { module: ts.ModuleKind.ES2022, target: ts.ScriptTarget.ES2022 } });
const math = await import(`data:text/javascript;base64,${Buffer.from(outputText).toString('base64')}`);

test('target conversion preserves every decimal digit in both directions', () => {
  for (const text of ['250', '0.10000000000000005', '1001', '.001', '1000000', '0.000000000000000000123']) {
    const mg = math.convertTarget(text, 'mcg', 'mg');
    const back = math.convertTarget(mg, 'mg', 'mcg');
    assert.equal(back, text.startsWith('.') ? `0${text}` : text);
  }
  assert.equal(math.convertTarget('1.001', 'mg', 'mcg'), '1001');
});
test('invalid unit conversion never coerces malformed input', () => {
  for (const bad of ['', ' ', '1e3', '0x10', '1,5', 'Infinity', '-1', '.', '5mg', '9'.repeat(121)]) {
    assert.equal(math.convertTarget(bad, 'mg', 'mcg'), null);
  }
});
test('supply uses whole portions per container and exact ceiling before losses', () => {
  assert.deepEqual(math.calculateSupply('1', '300', '4'), { ok: true, containers: '2', completePortions: '6', remainingMcg: '800', perContainerRemainderMcg: '100' });
  assert.equal(math.calculateSupply('0.001', '0.10000000000000005', '10').containers, '2');
  assert.equal(math.calculateSupply('1.001', '1001', '2').containers, '2');
  assert.equal(math.calculateSupply('5', '250', '20').containers, '1');
  assert.equal(math.calculateSupply('5', '250', '21').containers, '2');
});
test('supply rejects invalid count or invalid underlying quantities', () => {
  for (const n of ['', '0', '-1', '1.1', '1e3', '1000000001', 'Infinity', '3garbage']) assert.equal(math.calculateSupply('5','250',n).ok, false);
  assert.equal(math.calculateSupply('5', '5001', '3').ok, false);
});
test('display rounding is compared to exact rational operands', () => {
  const exact = math.formatSolutionResults('5', '2', '250');
  assert.equal(exact.portionMl, '0.1');
  const rounded = math.formatSolutionResults('3', '1', '100');
  assert.equal(rounded.portionMl, '≈0.0333333');
  assert.equal(math.formatSolutionResults('0.001', '1', '0.10000000000000005').portions, '≈10');
});
test('bounded decimal parsing rejects oversized pasted text', () => {
  assert.equal(math.calculateSolution('5', '2', '1.' + '0'.repeat(20000)).ok, false);
});
test('long valid operands format without overflowing intermediate ratios', () => {
  const long = '1.' + '0'.repeat(118);
  assert.equal(math.formatSolutionResults(long, long, long).portionMl, '0.001');
});
test('maximum-precision nonzero fractional tails format and survive unit round trips', () => {
  for (const length of [120, 121]) {
    const x = '1.' + '0'.repeat(length - 3) + '1';
    assert.equal(math.calculateSolution(x, x, x).ok, true);
    const output = math.formatSolutionResults(x, x, x);
    assert.equal(output.mgPerMl, '1');
    assert.equal(output.mcgPerMl, '1,000');
    assert.equal(output.portionMl, '≈0.001');
    assert.equal(output.portionUl, '≈1');
    assert.equal(output.portions, '1,000');
    const mg = math.convertTarget(x, 'mcg', 'mg');
    assert.equal(math.convertTarget(mg, 'mg', 'mcg'), x);
    assert.equal(math.calculateSolution(x, x, math.convertTarget(mg, 'mg', 'mcg')).ok, true);
  }
});
