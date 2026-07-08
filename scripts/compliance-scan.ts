// @ts-nocheck
declare const require: (specifier: string) => any;
declare const process: { cwd: () => string; exit: (code?: number) => never };

const { readdirSync, readFileSync, statSync } = require('node:fs');
const { join, relative } = require('node:path');

type Severity = 'high' | 'medium';
type Rule = { category: string; severity: Severity; terms: string[] };
type Finding = { file: string; line: number; column: number; term: string; category: string; severity: Severity };

const scanRoots = ['app', 'components', 'lib'];
const scanExtensions = new Set(['.ts', '.tsx', '.md', '.mdx']);
const ignoredDirectories = new Set(['node_modules', '.next', '.git', 'dist', 'out', 'coverage', 'scripts']);

const allowedPhrases = [
  'research use only',
  'research-use-only',
  'not for human use',
  'laboratory research',
  'analytical testing',
  'certificate of analysis',
  'hplc',
  'lcms',
  'batch documentation',
  'supplier verification',
  'white label',
  'private label',
  'wholesale',
  'fulfillment',
  'packaging',
  'labeling',
];

const rules: Rule[] = [
  { category: 'human consumption claims', severity: 'high', terms: ['consume', 'consumption', 'human use', 'not for research', 'use this peptide'] },
  { category: 'dosing guidance', severity: 'high', terms: ['dose', 'dosage'] },
  { category: 'injection guidance', severity: 'high', terms: ['inject', 'injection'] },
  { category: 'treatment claims', severity: 'high', terms: ['treat', 'treatment', 'therapy', 'therapeutic'] },
  { category: 'disease claims', severity: 'high', terms: ['anxiety', 'depression', 'arthritis'] },
  { category: 'cure claims', severity: 'high', terms: ['cure', 'heal', 'healing'] },
  { category: 'bodybuilding protocol claims', severity: 'high', terms: ['cycle', 'protocol', 'muscle growth', 'recovery'] },
  { category: 'before and after claims', severity: 'medium', terms: ['before and after'] },
  { category: 'medical benefit claims', severity: 'high', terms: ['medical benefit', 'patient', 'prescription', 'weight loss', 'fat loss', 'anti aging', 'injury repair'] },
  { category: 'veterinary use claims', severity: 'high', terms: ['veterinary use'] },
];

function walk(directory: string): string[] {
  const entries = readdirSync(directory);
  return entries.flatMap((entry: string) => {
    const fullPath = join(directory, entry);
    const stats = statSync(fullPath);
    if (stats.isDirectory()) {
      if (ignoredDirectories.has(entry)) return [];
      return walk(fullPath);
    }
    const extension = fullPath.slice(fullPath.lastIndexOf('.'));
    return scanExtensions.has(extension) ? [fullPath] : [];
  });
}

function escapeRegex(term: string) {
  return term.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

function isAllowedContext(line: string, term: string) {
  const normalized = line.toLowerCase();
  if (term === 'human use' && normalized.includes('not for human use')) return true;
  return allowedPhrases.some((phrase) => normalized.includes(phrase) && phrase.includes(term));
}

function findMatches(file: string): Finding[] {
  const source = readFileSync(file, 'utf8');
  const lines = source.split(/\r?\n/);
  const findings: Finding[] = [];
  for (const [lineIndex, line] of lines.entries()) {
    for (const rule of rules) {
      for (const term of rule.terms) {
        const pattern = term.includes(' ')
          ? new RegExp(escapeRegex(term), 'gi')
          : new RegExp(`\\b${escapeRegex(term)}(?:s|d|ing)?\\b`, 'gi');
        for (const match of line.matchAll(pattern)) {
          const matchedTerm = match[0];
          if (isAllowedContext(line, term)) continue;
          findings.push({
            file: relative(process.cwd(), file),
            line: lineIndex + 1,
            column: (match.index ?? 0) + 1,
            term: matchedTerm,
            category: rule.category,
            severity: rule.severity,
          });
        }
      }
    }
  }
  return findings;
}

const files = scanRoots.flatMap((root) => walk(root));
const findings = files.flatMap(findMatches);

if (findings.length === 0) {
  console.log(`Compliance scan passed: ${files.length} files checked, 0 risky peptide marketing terms found.`);
  process.exit(0);
}

console.log(`Compliance scan found ${findings.length} risky term match${findings.length === 1 ? '' : 'es'}:`);
for (const finding of findings) {
  console.log(`${finding.file}:${finding.line}:${finding.column} [${finding.severity}] ${finding.category} — "${finding.term}"`);
}

const highSeverityCount = findings.filter((finding) => finding.severity === 'high').length;
if (highSeverityCount > 0) {
  console.error(`Compliance scan failed: ${highSeverityCount} high severity match${highSeverityCount === 1 ? '' : 'es'} must be removed or rewritten.`);
  process.exit(1);
}

console.warn('Compliance scan completed with medium severity findings. Review before publishing.');
