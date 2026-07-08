export type ImageAltKey = 'og-default' | 'homepage-technical-visual' | 'service-card' | 'resource-card';

const altText: Record<ImageAltKey, string> = {
  'og-default': 'Peptide Brand: USA-based, lab-created research peptide sourcing, white label brand creation, and fulfillment planning.',
  'homepage-technical-visual': 'Abstract chromatogram-inspired interface showing supplier verification, COA review, testing coordination, and fulfillment workflow steps.',
  'service-card': 'Research-use peptide brand service card for sourcing, documentation, testing, packaging, or fulfillment planning.',
  'resource-card': 'Educational resource card for research-use peptide brand founders and ecommerce operators.',
};

export function getImageAlt(key: ImageAltKey) {
  return altText[key];
}
