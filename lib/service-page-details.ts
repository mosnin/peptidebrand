export type ServicePageDetail = {
  audience: string[];
  helpWith: string[];
  process: { step: string; body: string }[];
  checklistTitle: string;
  checklist: string[];
  mistakes: string[];
  adjacentLinks: { href: string; label: string }[];
};

export const researchUseDisclaimer =
  'Research-use-only planning: all sourcing, packaging, testing, documentation, ecommerce, and fulfillment support is intended for laboratory research supply operations only.';

export const servicePageDetails: Record<string, ServicePageDetail> = {
  'white-label-peptides': {
    audience: [
      'Founders launching a research-use peptide catalog without building every operational workflow from scratch.',
      'Ecommerce operators that need branded supply, COA access, packaging direction, and launch support.',
      'Existing research supply brands that want stronger supplier documentation and fulfillment readiness.',
    ],
    helpWith: [
      'White label supplier shortlisting based on catalog fit, documentation standards, responsiveness, and packaging options.',
      'Research-use label hierarchy, disclaimer placement, lot identifier planning, and COA access requirements.',
      'Launch workflows for SKU setup, inventory handoff, customer support boundaries, and reorder planning.',
      'Commercial page architecture that connects white label sourcing with COA testing, packaging, and fulfillment pages.',
    ],
    process: [
      { step: 'Position', body: 'Define the research-use-only catalog scope, target buyer, product naming rules, and claims boundaries before supplier outreach.' },
      { step: 'Qualify', body: 'Compare white label candidates by documentation, batch traceability, COA workflow, testing references, packaging options, and operational fit.' },
      { step: 'Prepare', body: 'Align labels, packaging proofs, COA access, inventory records, ecommerce content, and fulfillment handoffs before launch.' },
      { step: 'Launch', body: 'Publish the commercial pages, route leads to sourcing conversations, and keep supplier, batch, and fulfillment records organized.' },
    ],
    checklistTitle: 'White label supplier due diligence checklist',
    checklist: [
      'Can the supplier provide batch identifiers, COAs, and testing method references for each lot?',
      'Are packaging, label, minimum order, and lead time expectations documented before purchase orders?',
      'Is there a clear process for rejected lots, documentation gaps, substitutions, and backorders?',
      'Can the supplier support research-use-only label language without unsupported product claims?',
    ],
    mistakes: [
      'Choosing a white label source only by unit price instead of documentation quality and operational reliability.',
      'Publishing ecommerce pages before COA, lot tracking, and fulfillment workflows are defined.',
      'Using generic label copy that does not clearly support research-use-only positioning.',
    ],
    adjacentLinks: [
      { href: '/private-label-peptides', label: 'Compare private label peptide support' },
      { href: '/peptide-packaging', label: 'Plan peptide packaging and labels' },
      { href: '/peptide-coa-testing', label: 'Build COA review workflows' },
    ],
  },
  'private-label-peptides': {
    audience: [
      'Research supply founders that want more control over brand presentation, labels, and packaging systems.',
      'Operators comparing custom packaging options against standard white label programs.',
      'Brands that need documented supplier review before committing to private label inventory.',
    ],
    helpWith: [
      'Private label supplier comparison across catalog options, batch records, packaging capabilities, and communication quality.',
      'Custom label planning for product identity, lot codes, COA paths, storage language, and research-use-only positioning.',
      'Packaging version control so proofs, SKUs, label files, and fulfillment instructions stay aligned.',
      'Operational readiness across sourcing, testing documentation, ecommerce setup, and shipment workflows.',
    ],
    process: [
      { step: 'Scope', body: 'Define the desired catalog, brand architecture, packaging format, SKU count, and quality documentation expectations.' },
      { step: 'Compare', body: 'Score private label suppliers by documentation, packaging control, lead times, lot tracking, and COA support.' },
      { step: 'Approve', body: 'Review label proofs, packaging files, batch documentation, and fulfillment requirements before inventory release.' },
      { step: 'Operate', body: 'Maintain version-controlled records for labels, lots, COAs, reorder windows, and ecommerce updates.' },
    ],
    checklistTitle: 'Private label supplier and packaging checklist',
    checklist: [
      'Are label ownership, print specifications, approval steps, and revision controls clearly assigned?',
      'Does each batch connect to a COA, lot identifier, product record, and fulfillment instruction?',
      'Can the supplier support custom packaging without weakening documentation or lead time reliability?',
      'Are public-facing product details limited to research supply, documentation, logistics, and ecommerce information?',
    ],
    mistakes: [
      'Framing private label as a logo exercise instead of a documented sourcing and quality workflow.',
      'Approving packaging before confirming batch documentation and COA access expectations.',
      'Letting label versions drift across product pages, inventory records, and fulfillment materials.',
    ],
    adjacentLinks: [
      { href: '/white-label-peptides', label: 'Review white label peptide sourcing' },
      { href: '/research-peptide-supplier', label: 'Evaluate research peptide suppliers' },
      { href: '/resources/research-use-only-labeling-guide', label: 'Read the labeling guide' },
    ],
  },
  'wholesale-peptides': {
    audience: [
      'Distributors and ecommerce operators sourcing research-use peptide inventory at wholesale volumes.',
      'Labs and supply companies that need stronger batch documentation and reorder planning.',
      'Brands comparing supplier reliability, COA access, testing references, and fulfillment fit.',
    ],
    helpWith: [
      'Wholesale supplier vetting across minimums, lead times, catalog fit, documentation quality, and response standards.',
      'Batch-level COA planning for inventory intake, product pages, customer support, and reorder records.',
      'Supply chain workflows for purchase planning, quality holds, substitutions, backorders, and fulfillment handoffs.',
      'Internal page architecture linking wholesale sourcing with supplier due diligence, testing, COAs, and fulfillment.',
    ],
    process: [
      { step: 'Forecast', body: 'Map target SKUs, expected volume, reorder cadence, cash constraints, and documentation expectations.' },
      { step: 'Source', body: 'Compare wholesale suppliers with a consistent scorecard for quality files, lead times, and operational reliability.' },
      { step: 'Receive', body: 'Connect incoming lots to COAs, internal batch records, packaging requirements, and release decisions.' },
      { step: 'Scale', body: 'Create reorder triggers, backup supplier options, inventory status rules, and fulfillment exception workflows.' },
    ],
    checklistTitle: 'Wholesale sourcing due diligence checklist',
    checklist: [
      'Are lot identifiers, COAs, testing references, and product specifications available before inventory acceptance?',
      'Are minimums, lead times, reorder windows, and backorder procedures documented in writing?',
      'Can the supplier support consistent packaging, labeling, and fulfillment handoff requirements?',
      'Is there a plan for quality holds when documentation is incomplete or mismatched?',
    ],
    mistakes: [
      'Scaling wholesale purchases before confirming batch documentation and fulfillment capacity.',
      'Using one supplier without backup options or documented reorder triggers.',
      'Separating purchasing decisions from COA review, inventory release, and customer support workflows.',
    ],
    adjacentLinks: [
      { href: '/research-peptide-supplier', label: 'Compare supplier due diligence criteria' },
      { href: '/peptide-lab-testing', label: 'Plan lab testing documentation' },
      { href: '/peptide-fulfillment', label: 'Prepare fulfillment workflows' },
    ],
  },
  'research-peptide-supplier': {
    audience: [
      'Founders building a research peptide supplier shortlist before launch.',
      'Existing brands that need a more defensible vendor review process.',
      'Wholesale buyers comparing documentation standards, responsiveness, and batch traceability.',
    ],
    helpWith: [
      'Supplier scorecards for documentation, COA availability, testing references, packaging support, and communication quality.',
      'Vendor interview questions that separate commercial promises from verifiable operational evidence.',
      'Internal records for approval decisions, follow-up requests, documentation gaps, and ongoing review cadence.',
      'Internal linking between supplier due diligence, wholesale sourcing, COA testing, lab testing, and packaging decisions.',
    ],
    process: [
      { step: 'Define criteria', body: 'Set minimum standards for documentation, batch traceability, COA availability, testing references, and lead time reliability.' },
      { step: 'Request files', body: 'Collect sample COAs, lot examples, product specifications, packaging details, and fulfillment compatibility information.' },
      { step: 'Score vendors', body: 'Use a consistent review matrix so each supplier is compared on the same quality and operations criteria.' },
      { step: 'Monitor', body: 'Schedule periodic documentation reviews and keep supplier approval records current as catalog needs evolve.' },
    ],
    checklistTitle: 'Research peptide supplier due diligence checklist',
    checklist: [
      'Does the supplier provide batch-specific documentation rather than generic product claims?',
      'Are COAs, method references, product specifications, and lot identifiers consistent across files?',
      'Are packaging, label, fulfillment, and reorder requirements compatible with your launch plan?',
      'Is communication clear enough to resolve documentation issues before inventory is published?',
    ],
    mistakes: [
      'Approving a supplier based on catalog breadth without reviewing documentation depth.',
      'Failing to record why a supplier was approved, rejected, or placed on a watchlist.',
      'Not connecting supplier review to COA publishing, packaging, and fulfillment operations.',
    ],
    adjacentLinks: [
      { href: '/resources/peptide-supplier-checklist', label: 'Use the supplier checklist' },
      { href: '/wholesale-peptides', label: 'Plan wholesale sourcing' },
      { href: '/peptide-coa-testing', label: 'Review COA testing workflows' },
    ],
  },
  'peptide-lab-testing': {
    audience: [
      'Research-use brands that need a cleaner testing documentation workflow before launch.',
      'Wholesale operators reviewing HPLC and LCMS references across supplier or third-party files.',
      'Teams organizing batch records, quality files, and customer-facing COA access.',
    ],
    helpWith: [
      'Testing coordination plans that define sample handling, batch matching, report intake, and internal review steps.',
      'Documentation workflows for HPLC purity references, LCMS mass confirmation records, COA files, and release decisions.',
      'Quality record organization so product pages, supplier files, COAs, and fulfillment records align by lot.',
      'Educational content that explains testing documentation without drifting into unsupported claims.',
    ],
    process: [
      { step: 'Map lots', body: 'Connect every test request to a product name, lot identifier, supplier file, and intended inventory batch.' },
      { step: 'Coordinate reports', body: 'Track lab submission status, report receipt, method references, and review notes in one quality file.' },
      { step: 'Review records', body: 'Check that test reports, COAs, and product records match before inventory is cleared for ecommerce workflows.' },
      { step: 'Publish access', body: 'Create customer-facing COA access paths that are clear, batch-specific, and aligned with research-use-only positioning.' },
    ],
    checklistTitle: 'Testing documentation checklist',
    checklist: [
      'Does each report identify the sample, lot, date, method reference, and result fields clearly?',
      'Are HPLC and LCMS records stored with the correct supplier file and product batch?',
      'Is there a defined review step before a COA is linked from a product or support page?',
      'Are testing summaries limited to documentation and quality control context?',
    ],
    mistakes: [
      'Collecting reports without linking them to exact inventory lots and product records.',
      'Publishing testing language that overstates what a method reference can prove.',
      'Letting testing records live outside the fulfillment and COA access workflow.',
    ],
    adjacentLinks: [
      { href: '/resources/hplc-vs-lcms-peptide-testing', label: 'Compare HPLC and LCMS testing' },
      { href: '/peptide-coa-testing', label: 'Build COA testing workflows' },
      { href: '/research-peptide-supplier', label: 'Improve supplier review' },
    ],
  },
  'peptide-coa-testing': {
    audience: [
      'Brands that need a repeatable certificate of analysis review and publishing process.',
      'Wholesale teams matching incoming lots to supplier documentation and third-party testing files.',
      'Ecommerce operators that want cleaner customer-facing COA access without unsupported claims.',
    ],
    helpWith: [
      'COA review checklists for lot identifiers, product names, method references, dates, lab details, and result fields.',
      'Batch record structures that connect supplier files, lab reports, release notes, product pages, and fulfillment lots.',
      'Customer-facing certificate access workflows that are easy to navigate and disciplined in language.',
      'Internal training for support teams so COA questions stay focused on documentation and research supply context.',
    ],
    process: [
      { step: 'Collect', body: 'Gather supplier COAs, third-party reports, lot details, product specifications, and supporting records.' },
      { step: 'Match', body: 'Confirm that each certificate aligns with the correct product, lot, inventory batch, and internal SKU.' },
      { step: 'Review', body: 'Document review notes, follow-up questions, approval status, and any quality hold decisions.' },
      { step: 'Publish', body: 'Link approved COAs from customer-facing pages while keeping language focused on documentation.' },
    ],
    checklistTitle: 'COA and batch documentation checklist',
    checklist: [
      'Does the COA reference the correct product, lot number, date, and analytical method?',
      'Is the certificate stored with the matching supplier file, lab report, and fulfillment batch?',
      'Are review notes, approvals, and follow-up requests tracked before customer-facing publication?',
      'Can a customer locate the certificate for the batch associated with available inventory?',
    ],
    mistakes: [
      'Viewing a COA as a standalone marketing asset instead of a batch documentation record.',
      'Publishing certificates without checking lot alignment against inventory and product records.',
      'Allowing support teams to interpret COAs beyond documentation and quality control context.',
    ],
    adjacentLinks: [
      { href: '/resources/what-is-a-peptide-coa', label: 'Read the peptide COA guide' },
      { href: '/peptide-lab-testing', label: 'Coordinate lab testing records' },
      { href: '/wholesale-peptides', label: 'Connect COAs to wholesale sourcing' },
    ],
  },
  'peptide-fulfillment': {
    audience: [
      'Ecommerce operators that need inventory, lot tracking, packing, shipping, and support workflows before launch.',
      'Research supply brands preparing to scale order volume without losing batch documentation control.',
      'Wholesale teams that need fulfillment operations connected to COA access and packaging rules.',
    ],
    helpWith: [
      'Receiving workflows for inventory intake, lot assignment, documentation review, and quality hold decisions.',
      'Pick-pack rules that connect SKUs, packaging materials, inserts, lot codes, and COA lookup instructions.',
      'Order routing, exception handling, reorder triggers, backorder communication, and support boundaries.',
      'Fulfillment documentation that connects ecommerce infrastructure with supplier, testing, and packaging records.',
    ],
    process: [
      { step: 'Design', body: 'Map inventory flow from supplier receipt through documentation review, storage, pick-pack, and shipment.' },
      { step: 'Connect', body: 'Tie product records, lot identifiers, COA access, packaging rules, and order systems together.' },
      { step: 'Test', body: 'Run sample orders to validate labels, packing steps, COA lookup, support scripts, and exception handling.' },
      { step: 'Scale', body: 'Add reorder triggers, backup procedures, quality holds, and reporting as volume increases.' },
    ],
    checklistTitle: 'Fulfillment readiness checklist',
    checklist: [
      'Can fulfillment staff identify the correct lot, label, package, and COA path for each SKU?',
      'Are receiving, storage, picking, packing, shipping, and exception workflows documented?',
      'Are quality holds triggered when batch documentation is missing, mismatched, or under review?',
      'Do ecommerce notifications and support replies stay within research supply and logistics language?',
    ],
    mistakes: [
      'Launching paid traffic before fulfillment teams understand lot tracking and COA access.',
      'Separating ecommerce SKUs from warehouse lot identifiers and packaging versions.',
      'Not testing support and exception workflows until customers begin asking documentation questions.',
    ],
    adjacentLinks: [
      { href: '/start-a-peptide-brand', label: 'Plan the brand launch workflow' },
      { href: '/peptide-packaging', label: 'Prepare packaging rules' },
      { href: '/wholesale-peptides', label: 'Connect wholesale supply to fulfillment' },
    ],
  },
  'peptide-packaging': {
    audience: [
      'Research peptide brands preparing custom labels, packaging systems, inserts, and ecommerce product presentation.',
      'Private label operators that need version control across label proofs, SKUs, and fulfillment materials.',
      'Wholesale or white label brands that want clearer lot identifiers and COA access from packaging.',
    ],
    helpWith: [
      'Label architecture for product identity, lot codes, research-use-only statements, handling language, and COA access.',
      'Packaging workflows that connect proofs, print versions, inventory batches, fulfillment instructions, and reorder needs.',
      'Copy review for catalog pages, labels, inserts, and customer support language.',
      'Supplier coordination for packaging formats, minimums, production timelines, and approval checkpoints.',
    ],
    process: [
      { step: 'Plan', body: 'Define packaging formats, label hierarchy, SKU naming, lot code placement, and COA access requirements.' },
      { step: 'Review', body: 'Check label copy, disclaimers, version numbers, proof files, and fulfillment compatibility before printing.' },
      { step: 'Connect', body: 'Tie packaging versions to product records, supplier lots, COAs, warehouse instructions, and ecommerce pages.' },
      { step: 'Maintain', body: 'Update packaging records as suppliers, batches, products, or ecommerce pages change.' },
    ],
    checklistTitle: 'Peptide packaging and label checklist',
    checklist: [
      'Does each label clearly identify the product, brand, lot code, and research-use-only context?',
      'Is COA access easy to locate and connected to the correct batch record?',
      'Are label proofs, print versions, SKU mappings, and fulfillment instructions version controlled?',
      'Do inserts and packaging materials avoid unsupported claims and usage directions?',
    ],
    mistakes: [
      'Printing labels before supplier documentation, lot tracking, and COA access workflows are settled.',
      'Using packaging copy that creates claims risk instead of documentation clarity.',
      'Failing to version-control label files when products, batches, or suppliers change.',
    ],
    adjacentLinks: [
      { href: '/private-label-peptides', label: 'Explore private label support' },
      { href: '/white-label-peptides', label: 'Review white label sourcing' },
      { href: '/peptide-fulfillment', label: 'Connect packaging to fulfillment' },
    ],
  },
};

export function getServicePageDetail(slug: string) {
  return servicePageDetails[slug];
}
