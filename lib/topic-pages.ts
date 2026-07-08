export type TopicPageType = 'supplier-comparison' | 'startup-guide' | 'testing-guide' | 'packaging-guide' | 'fulfillment-guide' | 'white-label-info';

export type TopicFAQ = { question: string; answer: string };

export type TopicPage = {
  slug: string;
  path: string;
  type: TopicPageType;
  title: string;
  description: string;
  h1: string;
  targetKeyword: string;
  primaryService: { href: string; label: string };
  related: { href: string; label: string }[];
  entity: string;
  audience: string;
  intro: string;
  sourcing: string[];
  documentation: string[];
  testing: string[];
  packaging: string[];
  fulfillment: string[];
  compliance: string[];
  faq: TopicFAQ[];
  lastModified: string;
};

export const topicDisclaimer =
  'Research-use-only topic page: this page is for laboratory research supply businesses evaluating sourcing, documentation, testing, packaging, fulfillment, and ecommerce infrastructure. It does not provide product-use instructions.';

function page(slug: string, type: TopicPageType, entity: string, targetKeyword: string, primaryService: TopicPage['primaryService'], related: TopicPage['related'], audience: string, intro: string): TopicPage {
  const isTesting = type === 'testing-guide';
  const isPackaging = type === 'packaging-guide';
  const isFulfillment = type === 'fulfillment-guide';
  const isWhiteLabel = type === 'white-label-info';
  const typeLabel = isTesting ? 'Testing Guide' : isPackaging ? 'Packaging Guide' : isFulfillment ? 'Fulfillment Guide' : isWhiteLabel ? 'White Label Guide' : type === 'startup-guide' ? 'Brand Launch Guide' : 'Supplier Sourcing Guide';
  return {
    slug,
    path: `/topics/${slug}`,
    type,
    title: `${entity} ${typeLabel} for Research Brands`,
    description: `Research-use ${targetKeyword} guide covering sourcing, COAs, testing records, packaging, fulfillment, compliance review, and supplier questions.`,
    h1: `${entity} ${typeLabel.toLowerCase()} for research-use peptide brands`,
    targetKeyword,
    primaryService,
    related,
    entity,
    audience,
    intro,
    sourcing: [
      `Define whether ${entity} belongs in a white label, wholesale, private label, or documentation-first catalog before contacting suppliers.`,
      `Compare vendors on response quality, lead times, batch traceability, willingness to answer documentation questions, and fit with research-use ecommerce operations.`,
      `Record why a supplier is approved, rejected, or watchlisted so future purchasing decisions do not rely on memory or price alone.`,
    ],
    documentation: [
      `Ask how each lot is identified, how COAs are created or provided, and how product records connect to inventory and customer-facing pages.`,
      `Keep supplier files, certificates, testing references, label versions, and fulfillment instructions tied to the same product and batch identifiers.`,
      `Build an internal review checklist for missing fields, unclear dates, mismatched names, incomplete files, or unresolved supplier follow-up questions.`,
    ],
    testing: [
      `For ${entity}, testing discussions should stay focused on documentation methods, report handling, sample-to-batch matching, and quality record organization.`,
      `HPLC references are typically reviewed as purity documentation, while LCMS references are typically reviewed as mass confirmation documentation.`,
      `Testing reports should be stored with COAs and supplier files so ecommerce, fulfillment, and support teams can locate the correct batch record.`,
    ],
    packaging: [
      `Packaging planning should define product naming, lot code placement, research-use-only statements, COA access paths, and version-controlled label files.`,
      `Custom labels and inserts should be reviewed against the same compliance language used on product, resource, and quote pages.`,
      `Before printing, connect packaging versions to SKUs, supplier lots, fulfillment steps, and customer support documentation paths.`,
    ],
    fulfillment: [
      `Fulfillment workflows should document receiving, storage, quality holds, lot selection, pick-pack rules, COA lookup, shipping, and exceptions.`,
      `Research-use brands should test sample orders internally before publishing pages or routing paid traffic to lead capture forms.`,
      `Reorder triggers, backup supplier notes, and inventory status rules reduce operational risk as demand grows.`,
    ],
    compliance: [
      `Keep ${entity} content focused on research supply operations, supplier due diligence, documentation, testing records, packaging, fulfillment, and ecommerce infrastructure.`,
      `Avoid language that turns certificates, testing records, labels, or supplier statements into unsupported performance claims.`,
      `Support scripts should route questions back to documentation access, order details, supplier records, and research-use business boundaries.`,
    ],
    faq: [
      { question: `How should brands evaluate ${targetKeyword}?`, answer: `Evaluate ${targetKeyword} through supplier documentation, COA availability, testing references, packaging fit, fulfillment readiness, and research-use compliance review.` },
      { question: `What documents matter most for ${entity}?`, answer: 'Batch identifiers, COAs, testing method references, product specifications, label versions, release notes, and fulfillment records are the most important operational files.' },
      { question: `Which service page should this topic connect to?`, answer: `This topic should connect to ${primaryService.label} because that commercial page turns the informational research into a sourcing or launch conversation.` },
    ],
    lastModified: '2026-07-08',
  };
}

export const topicPages: TopicPage[] = [
  page('bpc-157-white-label-research-peptides', 'white-label-info', 'BPC-157 white label research peptides', 'BPC-157 white label research peptides', { href: '/white-label-peptides', label: 'White label peptides' }, [{ href: '/peptide-packaging', label: 'Peptide packaging' }, { href: '/peptide-coa-testing', label: 'Peptide COA testing' }], 'Founders comparing white label catalog options for a research-use peptide brand.', 'This page helps brand operators evaluate BPC-157 white label sourcing through documentation, supplier review, packaging, and fulfillment readiness rather than unsupported product claims.'),
  page('tb-500-white-label-research-peptides', 'white-label-info', 'TB-500 white label research peptides', 'TB-500 white label research peptides', { href: '/white-label-peptides', label: 'White label peptides' }, [{ href: '/research-peptide-supplier', label: 'Research peptide supplier' }, { href: '/resources/white-label-vs-private-label-peptides', label: 'White label vs private label' }], 'White label operators building a research-use catalog with stronger COA and supplier controls.', 'This guide focuses on TB-500 white label planning for research supply businesses that need supplier diligence, batch records, compliant label systems, and fulfillment workflows.'),
  page('ghk-cu-white-label-research-peptides', 'white-label-info', 'GHK-Cu white label research peptides', 'GHK-Cu white label research peptides', { href: '/white-label-peptides', label: 'White label peptides' }, [{ href: '/private-label-peptides', label: 'Private label peptides' }, { href: '/peptide-packaging', label: 'Peptide packaging' }], 'Research-use brands exploring white label or private label catalog expansion.', 'This page frames GHK-Cu white label decisions around sourcing, COA review, label version control, packaging expectations, and ecommerce launch infrastructure.'),
  page('semaglutide-research-peptide-sourcing', 'supplier-comparison', 'Semaglutide research peptide sourcing', 'semaglutide research peptide sourcing', { href: '/research-peptide-supplier', label: 'Research peptide supplier' }, [{ href: '/wholesale-peptides', label: 'Wholesale peptides' }, { href: '/peptide-lab-testing', label: 'Peptide lab testing' }], 'Supplier comparison teams reviewing research-use catalog and documentation options.', 'This topic page helps teams compare semaglutide research peptide sourcing options using supplier scorecards, batch documentation, COA access, and testing record workflows.'),
  page('retatrutide-research-peptide-sourcing', 'supplier-comparison', 'Retatrutide research peptide sourcing', 'retatrutide research peptide sourcing', { href: '/research-peptide-supplier', label: 'Research peptide supplier' }, [{ href: '/peptide-coa-testing', label: 'Peptide COA testing' }, { href: '/resources/how-to-verify-a-peptide-supplier', label: 'Supplier verification guide' }], 'Founders and distributors comparing supplier reliability for a research-use sourcing roadmap.', 'This guide explains how retatrutide research peptide sourcing should be reviewed through supplier evidence, documentation quality, lead times, and operational fit.'),
  page('tirzepatide-research-peptide-sourcing', 'supplier-comparison', 'Tirzepatide research peptide sourcing', 'tirzepatide research peptide sourcing', { href: '/research-peptide-supplier', label: 'Research peptide supplier' }, [{ href: '/wholesale-peptides', label: 'Wholesale peptides' }, { href: '/resources/peptide-supplier-checklist', label: 'Supplier checklist' }], 'Ecommerce operators and wholesale buyers comparing research-use supplier programs.', 'This page supports tirzepatide research peptide sourcing decisions with a focus on batch traceability, COAs, testing references, packaging compatibility, and fulfillment planning.'),
  page('peptide-supplier-with-coa', 'supplier-comparison', 'Peptide supplier with COA', 'peptide supplier with COA', { href: '/peptide-coa-testing', label: 'Peptide COA testing' }, [{ href: '/research-peptide-supplier', label: 'Research peptide supplier' }, { href: '/resources/what-is-a-peptide-coa', label: 'What is a peptide COA' }], 'Brands that need supplier files and certificate access before publishing inventory.', 'This supplier comparison page explains what to request from a peptide supplier with COA support and how to connect certificates to batch records and customer-facing pages.'),
  page('peptide-supplier-with-hplc-testing', 'testing-guide', 'Peptide supplier with HPLC testing', 'peptide supplier with HPLC testing', { href: '/peptide-lab-testing', label: 'Peptide lab testing' }, [{ href: '/resources/hplc-vs-lcms-peptide-testing', label: 'HPLC vs LCMS guide' }, { href: '/peptide-coa-testing', label: 'Peptide COA testing' }], 'Teams comparing suppliers by HPLC documentation and batch review workflows.', 'This testing guide explains how to review a peptide supplier with HPLC testing references while keeping the discussion focused on documentation, records, and COA workflows.'),
  page('peptide-supplier-with-lcms-testing', 'testing-guide', 'Peptide supplier with LCMS testing', 'peptide supplier with LCMS testing', { href: '/peptide-lab-testing', label: 'Peptide lab testing' }, [{ href: '/resources/hplc-vs-lcms-peptide-testing', label: 'HPLC vs LCMS guide' }, { href: '/research-peptide-supplier', label: 'Supplier due diligence' }], 'Brands that need LCMS documentation connected to supplier and batch files.', 'This page helps operators evaluate a peptide supplier with LCMS testing references through batch matching, report organization, COA access, and internal quality files.'),
  page('custom-peptide-labeling', 'packaging-guide', 'Custom peptide labeling', 'custom peptide labeling', { href: '/peptide-packaging', label: 'Peptide packaging' }, [{ href: '/private-label-peptides', label: 'Private label peptides' }, { href: '/resources/peptide-packaging-and-labeling-guide', label: 'Packaging and labeling guide' }], 'Private label and white label teams planning research-use packaging systems.', 'This packaging guide covers custom peptide labeling decisions for research brands, including lot codes, COA paths, label hierarchy, proof approvals, and fulfillment handoffs.'),
  page('research-peptide-wholesale-fulfillment', 'fulfillment-guide', 'Research peptide wholesale fulfillment', 'research peptide wholesale fulfillment', { href: '/peptide-fulfillment', label: 'Peptide fulfillment' }, [{ href: '/wholesale-peptides', label: 'Wholesale peptides' }, { href: '/resources/peptide-fulfillment-checklist', label: 'Fulfillment checklist' }], 'Wholesale and ecommerce operators connecting sourcing volume to operational workflows.', 'This fulfillment guide explains how research peptide wholesale fulfillment should connect inventory, lot tracking, packaging, COA access, shipping rules, and support boundaries.'),
  page('peptide-brand-launch-services', 'startup-guide', 'Peptide brand launch services', 'peptide brand launch services', { href: '/start-a-peptide-brand', label: 'Start a peptide brand' }, [{ href: '/resources/peptide-brand-launch-checklist', label: 'Brand launch checklist' }, { href: '/white-label-peptides', label: 'White label peptides' }], 'Entrepreneurs and operators planning a compliant research-use brand launch.', 'This startup guide explains how peptide brand launch services can organize sourcing, supplier verification, documentation, testing records, packaging, fulfillment, SEO, and lead capture.'),
];

export function getTopicPage(slug: string) {
  return topicPages.find((pageItem) => pageItem.slug === slug);
}

export function estimateTopicWordCount(pageItem: TopicPage) {
  const text = [
    pageItem.title,
    pageItem.description,
    pageItem.h1,
    pageItem.intro,
    pageItem.audience,
    topicDisclaimer,
    ...pageItem.sourcing,
    ...pageItem.documentation,
    ...pageItem.testing,
    ...pageItem.packaging,
    ...pageItem.fulfillment,
    ...pageItem.compliance,
    ...pageItem.faq.flatMap((item) => [item.question, item.answer]),
    ...pageItem.related.flatMap((item) => [item.label, item.href]),
  ].join(' ');
  return text.trim().split(/\s+/).filter(Boolean).length;
}

export function validateTopicPage(pageItem: TopicPage) {
  const errors: string[] = [];
  const warnings: string[] = [];
  if (!topicDisclaimer.toLowerCase().includes('research-use-only')) errors.push('Missing research-use-only disclaimer.');
  if (!pageItem.path.startsWith('/topics/')) errors.push('Missing canonical topic path.');
  if (pageItem.related.length === 0 || !pageItem.primaryService.href) errors.push('Missing internal links.');
  const wordCount = estimateTopicWordCount(pageItem);
  if (wordCount < 900) warnings.push(`Topic page has ${wordCount} estimated words; target minimum is 900 words.`);
  return { errors, warnings, wordCount };
}
