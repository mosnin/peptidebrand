export type HeadingAuditRule = {
  rule: string;
  description: string;
};

export const headingAuditRules: HeadingAuditRule[] = [
  { rule: 'single-h1', description: 'Each route should render exactly one descriptive H1.' },
  { rule: 'ordered-h2-h3', description: 'H3 headings should appear under the nearest relevant H2 section.' },
  { rule: 'keyword-intent', description: 'Commercial pages should use headings that describe sourcing, documentation, testing, packaging, fulfillment, or compliance review intent.' },
  { rule: 'no-claim-headings', description: 'Headings should avoid unsupported claims and stay focused on research supply operations.' },
];

export function getHeadingAuditChecklist() {
  return headingAuditRules;
}
