import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import ts from 'typescript';
const { outputText } = ts.transpileModule(fs.readFileSync(new URL('../lib/peptide-math.ts', import.meta.url), 'utf8'), { compilerOptions: { module: ts.ModuleKind.ES2022, target: ts.ScriptTarget.ES2022 } });
const math = await import(`data:text/javascript;base64,${Buffer.from(outputText).toString('base64')}`);

// Independent exact rational oracle: U100 = amount(mcg) × final(mL) / (mass(mg) × 10).
function rational(text) {
  const [a, b = ''] = text.split('.');
  return [BigInt(a + b), 10n ** BigInt(b.length)];
}
function oracle(mass, volume, amount) {
  const [m, md] = rational(mass), [v, vd] = rational(volume), [p, pd] = rational(amount);
  return [p * v * md, pd * vd * m * 10n];
}
for (const [m, v, p, expected] of [
  ['5', '2', '250', '10'], ['7.5', '1.5', '125', '2.5'],
  ['3', '1', '100', '≈3.33333'], ['1000', '0.001', '0.001', '1.00000e-10'],
  ['1', '1', '1000', '100'], ['1', '1.00000000000000001', '1000', '≈100'],
  ['1', '0.99999999999999999', '1000', '≈100'], ['1', '4', '300', '120'],
  ['1.001', '2', '1001', '200'],
  ['1', '1', '10', '1'], ['1', '0.99999999999999999', '10', '≈1'],
]) {
  test(`U100 exact conversion ${m}/${v}/${p}`, () => {
    const display = math.formatSolutionResults(m, v, p);
    const [n, d] = oracle(m, v, p);
    assert.equal(display.u100, expected);
    assert.equal(display.aboveU100Scale, n > 100n * d);
    assert.equal(display.belowU100Unit, n < d);
    if (n > 100n * d || n < d) assert.equal(display.scalePercent, null);
    else assert.ok(display.scalePercent >= 0 && display.scalePercent <= 100);
  });
}
test('U100 uses full operands, not the rounded mL display', () => {
  const display = math.formatSolutionResults('3', '1', '100');
  assert.equal(display.portionMl, '≈0.0333333');
  assert.equal(display.u100, '≈3.33333');
  // A just-over boundary must remain outside even when its display rounds to 100.
  assert.equal(math.formatSolutionResults('1', '1.' + '0'.repeat(117) + '1', '1000').aboveU100Scale, true);
});
test('maximum-length operands cannot overflow through Number(bigint)', () => {
  const x = '1.' + '0'.repeat(117) + '1';
  const display = math.formatSolutionResults(x, x, x);
  assert.equal(display.u100, '≈0.1');
  assert.equal(display.aboveU100Scale, false);
  assert.equal(display.scalePercent, null, 'subunit has no falsely precise marker');
  assert.deepEqual(math.formatSolutionResults(x, x, math.convertTarget(math.convertTarget(x, 'mcg', 'mg'), 'mg', 'mcg')), display);
});
test('U100 never produces a result from missing, malformed or invalid inputs', () => {
  for (const bad of ['', ' ', '0', '-1', 'NaN', 'Infinity', '1e2', '0x10', '1,5', '5mg', '.', '1..2']) {
    for (const i of [0, 1, 2]) {
      const args = ['5', '2', '250']; args[i] = bad;
      assert.equal(math.formatSolutionResults(...args), null);
    }
  }
  assert.equal(math.formatSolutionResults('5', '2', '5001'), null);
});
test('400 rational-oracle fixtures validate display error and exactness independently', () => {
  for (let i = 1; i <= 400; i++) {
    const m = `${i}.123`, v = `${i % 17 + 1}.007`, p = `${i % 101 + 1}.009`;
    const display = math.formatSolutionResults(m, v, p);
    const [n, d] = oracle(m, v, p);
    const [sn, sd] = rational(display.u100.replace('≈', '').replaceAll(',', ''));
    const difference = sn * d - n * sd;
    const absolute = difference < 0n ? -difference : difference;
    assert.equal(display.u100.startsWith('≈'), difference !== 0n);
    assert.ok(absolute * 1000000n <= n * sd * 5n, 'six significant figures: relative error at most 5 ppm');
    assert.equal(display.aboveU100Scale, n > 100n * d);
  }
});
