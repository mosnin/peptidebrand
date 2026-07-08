const { execFileSync } = require('node:child_process');
const { readFileSync } = require('node:fs');
const { join } = require('node:path');

const sourceGlobs = ['app/**/*.tsx', 'components/**/*.tsx'];
const tokens = ['white', 'black', 'navy', 'midnight', 'ink', 'mist', 'cyan', 'teal', 'blue', 'gold'];
const riskyPairs = tokens.map((token: string) => ({ bg: `bg-${token}`, text: `text-${token}` }));
const mutedTextTokens = ['text-white/50', 'text-white/60', 'text-white/70', 'text-white/75', 'text-white/80', 'text-white/85', 'text-slate-500', 'text-slate-600'];

function listFiles(): string[] {
  return sourceGlobs.flatMap((glob) =>
    execFileSync('rg', ['--files', '-g', glob], { encoding: 'utf8' })
      .split('\n')
      .filter(Boolean),
  );
}

const exactClassToken = (className: string, token: string) => new RegExp(`(^|\\s)${token}(\\s|$)`).test(className);
const findings: string[] = [];

for (const file of listFiles()) {
  const text = readFileSync(join(process.cwd(), file), 'utf8');
  const classMatches = text.matchAll(/className=(?:"([^"]*)"|\{`([^`]*)`\})/g);

  for (const match of classMatches) {
    const className = match[1] ?? match[2] ?? '';

    // Conditional template literals can contain safe classes from separate branches.
    // Keep this audit focused on literal class strings it can evaluate reliably.
    if (className.includes('${')) continue;

    for (const mutedToken of mutedTextTokens) {
      if (exactClassToken(className, mutedToken)) {
        findings.push(`${file}: avoid low-contrast ${mutedToken} in className: ${className}`);
      }
    }

    for (const pair of riskyPairs) {
      if (exactClassToken(className, pair.bg) && exactClassToken(className, pair.text)) {
        findings.push(`${file}: avoid ${pair.text} on ${pair.bg} in className: ${className}`);
      }
    }
  }
}

if (findings.length > 0) {
  console.error('Contrast audit failed: risky same-color background/text combinations found.');
  for (const finding of findings) console.error(`- ${finding}`);
  process.exit(1);
}

console.log('Contrast audit passed: no exact same-token or muted text utility findings found.');
