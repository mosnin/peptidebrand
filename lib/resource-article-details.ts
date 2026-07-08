export type ArticleSection = {
  id: string;
  title: string;
  body: string;
  points: { title: string; body: string }[];
};

export type ResourceArticleDetail = {
  lastUpdated: string;
  complianceNote: string;
  conversionCta: { heading: string; body: string; href: string; label: string };
  serviceLinks: { href: string; label: string }[];
  sections: ArticleSection[];
};

const complianceNote =
  'Compliance note: this educational resource is for laboratory research supply businesses and focuses on sourcing, documentation, testing, labeling, fulfillment, ecommerce infrastructure, and compliance review.';

const commonServiceLinks = [
  { href: '/white-label-peptides', label: 'White label peptides' },
  { href: '/research-peptide-supplier', label: 'Research peptide supplier' },
  { href: '/peptide-coa-testing', label: 'Peptide COA testing' },
  { href: '/peptide-fulfillment', label: 'Peptide fulfillment' },
];

export const resourceArticleDetails: Record<string, ResourceArticleDetail> = {
  'how-to-start-a-peptide-brand': {
    lastUpdated: 'July 8, 2026',
    complianceNote,
    conversionCta: { heading: 'Need a launch roadmap?', body: 'Turn sourcing, testing, COAs, packaging, fulfillment, and SEO into a practical research-use launch plan.', href: '/quote', label: 'Request launch support' },
    serviceLinks: commonServiceLinks,
    sections: [
      { id: 'positioning', title: 'Define the business model before choosing products', body: 'A strong launch starts with the operating model, not a product list. Founders should define the target buyer, research-use positioning, catalog boundaries, supplier criteria, and quality documentation standards before buying inventory.', points: [
        { title: 'Audience and catalog scope', body: 'Separate entrepreneur, ecommerce, distributor, and lab buyer needs so each page and form routes to the right commercial conversation.' },
        { title: 'Documentation standards', body: 'Decide what records must exist for each lot, including COAs, testing references, supplier files, and release notes.' },
      ] },
      { id: 'sourcing', title: 'Build sourcing and verification workflows', body: 'Supplier diligence should be repeatable. Use scorecards, document requests, batch traceability checks, and lead time comparisons to avoid decisions based only on price or catalog breadth.', points: [
        { title: 'Supplier scorecards', body: 'Review communication speed, documentation quality, packaging options, fulfillment compatibility, and reorder reliability.' },
        { title: 'Testing and COAs', body: 'Connect testing records and COAs to the exact product, lot, and inventory batch before launch.' },
      ] },
      { id: 'launch', title: 'Prepare ecommerce and fulfillment infrastructure', body: 'Before publishing a catalog, align labels, packaging, lot tracking, COA access, order routing, support scripts, and internal review responsibilities.', points: [
        { title: 'Page architecture', body: 'Create commercial pages for sourcing, testing, packaging, and fulfillment, then support them with educational resources.' },
        { title: 'Operational handoff', body: 'Make sure warehouse, support, and marketing workflows all reference the same product and batch records.' },
      ] },
    ],
  },
  'peptide-supplier-checklist': {
    lastUpdated: 'July 8, 2026',
    complianceNote,
    conversionCta: { heading: 'Want a supplier scorecard?', body: 'Build a repeatable diligence process for research peptide sourcing conversations.', href: '/quote', label: 'Request sourcing help' },
    serviceLinks: [{ href: '/research-peptide-supplier', label: 'Supplier due diligence' }, { href: '/wholesale-peptides', label: 'Wholesale peptides' }, { href: '/peptide-lab-testing', label: 'Peptide lab testing' }],
    sections: [
      { id: 'documents', title: 'Documents to request from every supplier', body: 'A supplier checklist starts with the same document request for every vendor so comparisons are consistent and review notes remain useful.', points: [
        { title: 'Batch records and COAs', body: 'Ask for examples showing product names, lot identifiers, dates, method references, and result fields.' },
        { title: 'Packaging and lead time details', body: 'Request minimums, formats, label options, reorder windows, and exception procedures.' },
      ] },
      { id: 'operations', title: 'Operational questions to ask', body: 'Commercial reliability matters as much as documentation. Supplier communication, backorder practices, and fulfillment compatibility shape launch risk.', points: [
        { title: 'Communication standards', body: 'Track response speed, clarity, willingness to answer document questions, and escalation paths.' },
        { title: 'Supply continuity', body: 'Compare lead times, reorder triggers, backup options, and substitution policies.' },
      ] },
      { id: 'scoring', title: 'How to score supplier fit', body: 'Use a simple approval matrix so the reason for each supplier decision is easy to understand later.', points: [
        { title: 'Approve, reject, or watchlist', body: 'Document the status, open questions, and follow-up requirements for each vendor.' },
        { title: 'Review cadence', body: 'Revisit supplier files when products, lots, packaging, or documentation standards change.' },
      ] },
    ],
  },
  'what-is-a-peptide-coa': {
    lastUpdated: 'July 8, 2026',
    complianceNote,
    conversionCta: { heading: 'Need a COA workflow?', body: 'Organize certificate review, batch matching, and customer-facing COA access.', href: '/quote', label: 'Request COA planning' },
    serviceLinks: [{ href: '/peptide-coa-testing', label: 'Peptide COA testing' }, { href: '/peptide-lab-testing', label: 'Peptide lab testing' }, { href: '/research-peptide-supplier', label: 'Supplier review' }],
    sections: [
      { id: 'definition', title: 'What a COA is in a research supply workflow', body: 'A certificate of analysis is a batch-level documentation record. Its value depends on matching the right certificate to the right lot and keeping review notes organized.', points: [
        { title: 'Core identifiers', body: 'Look for product name, lot code, test date, method reference, result fields, and issuing lab or document source.' },
        { title: 'Record context', body: 'Store COAs with supplier files, testing records, packaging versions, and inventory release notes.' },
      ] },
      { id: 'review', title: 'How brands should review COAs', body: 'COA review should happen before a batch appears in ecommerce workflows or customer-facing certificate pages.', points: [
        { title: 'Match the batch', body: 'Confirm the lot on the COA matches the inventory, product page, and warehouse record.' },
        { title: 'Record questions', body: 'Track unclear fields, missing method references, or supplier follow-up items.' },
      ] },
      { id: 'publishing', title: 'How to publish COA access responsibly', body: 'Customer-facing COA links should be easy to find and written in documentation language.', points: [
        { title: 'Batch-specific access', body: 'Route customers to certificates tied to the correct lot whenever possible.' },
        { title: 'Support alignment', body: 'Ensure support scripts explain where documents are found without expanding beyond documentation context.' },
      ] },
    ],
  },
  'hplc-vs-lcms-peptide-testing': {
    lastUpdated: 'July 8, 2026',
    complianceNote,
    conversionCta: { heading: 'Map your testing records', body: 'Create a documentation workflow for HPLC, LCMS, COAs, and batch files.', href: '/quote', label: 'Request testing support' },
    serviceLinks: [{ href: '/peptide-lab-testing', label: 'Peptide lab testing' }, { href: '/peptide-coa-testing', label: 'COA testing' }, { href: '/wholesale-peptides', label: 'Wholesale sourcing' }],
    sections: [
      { id: 'hplc', title: 'Where HPLC fits in documentation', body: 'HPLC is commonly used in purity documentation. For brand operators, the key is linking the report to the right lot and recording review decisions.', points: [
        { title: 'Chromatogram records', body: 'Keep chromatogram files and summary results with the product batch they support.' },
        { title: 'Review limits', body: 'Use HPLC language carefully and keep it tied to documentation and quality control context.' },
      ] },
      { id: 'lcms', title: 'Where LCMS fits in documentation', body: 'LCMS is commonly used for mass confirmation records and can complement purity documentation when connected to the correct batch file.', points: [
        { title: 'Mass reference alignment', body: 'Confirm the sample, product name, lot code, and report fields match the internal record.' },
        { title: 'Combined files', body: 'Store LCMS records with COAs, supplier documents, and release notes.' },
      ] },
      { id: 'workflow', title: 'How to use both in a COA workflow', body: 'Brands should define when reports are requested, how they are reviewed, where they are stored, and how approved documents become customer-facing.', points: [
        { title: 'Batch matching', body: 'Every report should map to one product batch and inventory release decision.' },
        { title: 'Publishing discipline', body: 'Customer-facing summaries should stay focused on documentation, testing method references, and certificate access.' },
      ] },
    ],
  },
  'research-use-only-labeling-guide': {
    lastUpdated: 'July 8, 2026',
    complianceNote,
    conversionCta: { heading: 'Review labels before launch', body: 'Align label hierarchy, lot codes, COA access, and packaging files.', href: '/quote', label: 'Request label review' },
    serviceLinks: [{ href: '/peptide-packaging', label: 'Peptide packaging' }, { href: '/private-label-peptides', label: 'Private label peptides' }, { href: '/white-label-peptides', label: 'White label peptides' }],
    sections: [
      { id: 'label-elements', title: 'Core elements of research-use labeling', body: 'Labels should make product identity, brand details, lot references, documentation access, and research-use-only positioning easy to find.', points: [
        { title: 'Identity and lot code', body: 'Use consistent product names and lot identifiers that match inventory and COA records.' },
        { title: 'Documentation access', body: 'Include a simple path to COAs or batch records when that is part of the customer workflow.' },
      ] },
      { id: 'copy-review', title: 'Copy review before printing', body: 'Label copy should be reviewed before printing so packaging, ecommerce, and support language stay aligned.', points: [
        { title: 'Version control', body: 'Track proof files, approval dates, SKU mappings, and print versions.' },
        { title: 'Claims review', body: 'Keep labels focused on research supply identity, handling details, and documentation access.' },
      ] },
      { id: 'fulfillment', title: 'Connect labels to fulfillment', body: 'Fulfillment teams need instructions that connect packaging versions to products, lots, COAs, and shipping workflows.', points: [
        { title: 'Warehouse clarity', body: 'Make it easy to select the correct label and package for each lot.' },
        { title: 'Change management', body: 'Update fulfillment rules when label files, batches, or products change.' },
      ] },
    ],
  },
  'white-label-vs-private-label-peptides': {
    lastUpdated: 'July 8, 2026', complianceNote,
    conversionCta: { heading: 'Compare launch paths', body: 'Choose the sourcing model that fits your budget, packaging needs, documentation controls, and launch timeline.', href: '/quote', label: 'Request model guidance' },
    serviceLinks: [{ href: '/white-label-peptides', label: 'White label peptides' }, { href: '/private-label-peptides', label: 'Private label peptides' }, { href: '/peptide-packaging', label: 'Packaging support' }],
    sections: [
      { id: 'control', title: 'Control vs speed', body: 'White label programs usually launch faster, while private label programs generally create more control over labels, packaging, product presentation, and records.', points: [
        { title: 'White label fit', body: 'Useful when a founder needs standardized sourcing and a faster path to market.' },
        { title: 'Private label fit', body: 'Useful when brand presentation, packaging, and documentation ownership are higher priorities.' },
      ] },
      { id: 'documentation', title: 'Documentation ownership', body: 'Both models need COAs, batch files, testing references, and supplier records. Private label teams often manage more of that system themselves.', points: [
        { title: 'Supplier handoff', body: 'Clarify who provides each document and when it becomes customer-facing.' },
        { title: 'Brand records', body: 'Keep internal files aligned with ecommerce pages and fulfillment batches.' },
      ] },
      { id: 'decision', title: 'How to decide', body: 'Compare budget, launch timing, packaging needs, supplier access, fulfillment complexity, and SEO roadmap before choosing.', points: [
        { title: 'Launch constraints', body: 'A shorter timeline may favor standardized white label workflows.' },
        { title: 'Brand constraints', body: 'A differentiated brand system may favor private label control.' },
      ] },
    ],
  },
  'peptide-fulfillment-checklist': {
    lastUpdated: 'July 8, 2026', complianceNote,
    conversionCta: { heading: 'Prepare fulfillment workflows', body: 'Build receiving, lot tracking, COA lookup, packaging, and shipping rules before launch.', href: '/quote', label: 'Request fulfillment help' },
    serviceLinks: [{ href: '/peptide-fulfillment', label: 'Peptide fulfillment' }, { href: '/peptide-packaging', label: 'Packaging workflows' }, { href: '/peptide-coa-testing', label: 'COA workflows' }],
    sections: [
      { id: 'receiving', title: 'Receiving checklist', body: 'Receiving should confirm shipment contents, lot identifiers, supplier files, COA status, and quality hold decisions.', points: [
        { title: 'Lot intake', body: 'Record product, lot, quantity, location, and documentation status.' },
        { title: 'Release status', body: 'Do not route inventory into pick-pack workflows until documentation review is complete.' },
      ] },
      { id: 'pick-pack', title: 'Pick-pack checklist', body: 'Packing rules should tell staff which label, package, insert, and COA path belongs with each SKU and lot.', points: [
        { title: 'SKU alignment', body: 'Match ecommerce SKUs to warehouse identifiers and lot records.' },
        { title: 'Exception rules', body: 'Document what to do when labels, lots, or records do not match.' },
      ] },
      { id: 'scale', title: 'Scaling checklist', body: 'Fulfillment scale requires reporting, reorder triggers, backup procedures, and support scripts.', points: [
        { title: 'Reorder triggers', body: 'Track inventory thresholds by SKU and lead time.' },
        { title: 'Support handoff', body: 'Give support teams documentation access paths and approved logistics language.' },
      ] },
    ],
  },
  'how-to-verify-a-peptide-supplier': {
    lastUpdated: 'July 8, 2026', complianceNote,
    conversionCta: { heading: 'Verify suppliers before purchase orders', body: 'Use a structured scorecard for documentation, COAs, testing references, and operational reliability.', href: '/quote', label: 'Request verification support' },
    serviceLinks: [{ href: '/research-peptide-supplier', label: 'Supplier due diligence' }, { href: '/wholesale-peptides', label: 'Wholesale sourcing' }, { href: '/peptide-lab-testing', label: 'Testing documentation' }],
    sections: [
      { id: 'request', title: 'Request the same files from every supplier', body: 'A consistent request list makes suppliers easier to compare and reduces the chance that a weak file slips through.', points: [
        { title: 'COA examples', body: 'Look for lot identifiers, method references, dates, and clear result fields.' },
        { title: 'Operational files', body: 'Request packaging details, lead times, minimums, and fulfillment compatibility notes.' },
      ] },
      { id: 'score', title: 'Score the supplier objectively', body: 'Create a matrix for documentation, communication, reliability, packaging, testing references, and exception handling.', points: [
        { title: 'Evidence over promises', body: 'Score what the supplier can document, not just what the supplier says is possible.' },
        { title: 'Follow-up notes', body: 'Record every unresolved question and requested clarification.' },
      ] },
      { id: 'monitor', title: 'Monitor approved suppliers', body: 'Supplier verification continues after approval because batches, documents, lead times, and packaging needs change.', points: [
        { title: 'Review cadence', body: 'Set periodic file reviews for active suppliers.' },
        { title: 'Change triggers', body: 'Re-review suppliers when SKUs, packaging, or documentation standards change.' },
      ] },
    ],
  },
  'peptide-brand-launch-checklist': {
    lastUpdated: 'July 8, 2026', complianceNote,
    conversionCta: { heading: 'Build your launch roadmap', body: 'Coordinate sourcing, testing, COAs, packaging, fulfillment, ecommerce, and SEO before launch.', href: '/quote', label: 'Request launch roadmap' },
    serviceLinks: commonServiceLinks,
    sections: [
      { id: 'foundation', title: 'Foundation checklist', body: 'Start with positioning, audience, catalog scope, supplier criteria, budget, and internal content boundaries.', points: [
        { title: 'Brand architecture', body: 'Define how services, resources, product categories, and lead forms connect.' },
        { title: 'Supplier criteria', body: 'Set minimum requirements before outreach begins.' },
      ] },
      { id: 'operations', title: 'Operations checklist', body: 'Confirm documentation, packaging, fulfillment, and support workflows before publishing commercial pages.', points: [
        { title: 'COA workflow', body: 'Document collection, review, storage, and customer-facing access.' },
        { title: 'Fulfillment workflow', body: 'Connect SKUs, lots, labels, packaging, and shipment rules.' },
      ] },
      { id: 'growth', title: 'Growth checklist', body: 'After launch, monitor lead quality, supplier reliability, documentation gaps, and inventory needs.', points: [
        { title: 'SEO pages', body: 'Use internal links between resources and commercial pages to guide qualified visitors.' },
        { title: 'Lead review', body: 'Track which pages generate sourcing, testing, packaging, or fulfillment requests.' },
      ] },
    ],
  },
  'peptide-packaging-and-labeling-guide': {
    lastUpdated: 'July 8, 2026', complianceNote,
    conversionCta: { heading: 'Plan packaging and labels', body: 'Create a packaging system that connects labels, lots, COAs, fulfillment, and ecommerce pages.', href: '/quote', label: 'Request packaging support' },
    serviceLinks: [{ href: '/peptide-packaging', label: 'Peptide packaging' }, { href: '/private-label-peptides', label: 'Private label support' }, { href: '/peptide-fulfillment', label: 'Fulfillment setup' }],
    sections: [
      { id: 'hierarchy', title: 'Label hierarchy', body: 'A strong label hierarchy makes product identity, lot code, documentation access, and research-use-only context clear.', points: [
        { title: 'Primary fields', body: 'Prioritize product name, brand, lot code, and documentation path.' },
        { title: 'Secondary fields', body: 'Add handling details, support contact, and packaging version as appropriate.' },
      ] },
      { id: 'version-control', title: 'Version control', body: 'Version control keeps proofs, print runs, SKU records, and fulfillment instructions aligned.', points: [
        { title: 'Approval history', body: 'Record who approved each proof and when it changed.' },
        { title: 'SKU mapping', body: 'Connect label files to product records and inventory batches.' },
      ] },
      { id: 'fulfillment-fit', title: 'Fulfillment fit', body: 'Packaging should be easy for fulfillment teams to identify, pick, pack, and ship correctly.', points: [
        { title: 'Warehouse instructions', body: 'Document label selection, package selection, and COA lookup steps.' },
        { title: 'Change control', body: 'Update fulfillment rules when packaging formats or label versions change.' },
      ] },
    ],
  },
};

export function getResourceArticleDetail(slug: string) {
  return resourceArticleDetails[slug];
}
