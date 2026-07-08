export type NavLink = { href: string; label: string; description: string };
export type NavGroup = { title: string; links: NavLink[] };

export const serviceMegaMenu: NavGroup[] = [
  {
    title: 'Brand Creation & White Label',
    links: [
      { href: '/white-label-peptides', label: 'White Label Peptides', description: 'Launch a branded catalog with sourcing, labels, and packaging handled for you.' },
      { href: '/private-label-peptides', label: 'Private Label Peptides', description: 'Full control over packaging, labels, and brand presentation.' },
      { href: '/start-a-peptide-brand', label: 'Start a Peptide Brand', description: 'A complete roadmap from sourcing to a research-use ecommerce launch.' },
    ],
  },
  {
    title: 'Sourcing & Supplier Network',
    links: [
      { href: '/wholesale-peptides', label: 'Wholesale Peptides', description: 'Bulk inventory sourcing from vetted USA-based manufacturers.' },
      { href: '/research-peptide-supplier', label: 'Manufacturer Network', description: "We're connected with hundreds of manufacturers — free to connect, always." },
    ],
  },
  {
    title: 'Quality & Lab Testing',
    links: [
      { href: '/peptide-lab-testing', label: 'HPLC & LCMS Lab Testing', description: '99%+ purity verification with independent lab documentation.' },
      { href: '/peptide-coa-testing', label: 'COA & Batch Testing', description: 'Certificate of analysis review and batch records for every lot.' },
    ],
  },
  {
    title: 'Packaging & Fulfillment',
    links: [
      { href: '/peptide-packaging', label: 'Custom Packaging & Labels', description: 'Branded labels, lot codes, and research-use packaging systems.' },
      { href: '/peptide-fulfillment', label: 'Fulfillment', description: 'Inventory receiving, pick-pack, and shipping operations.' },
    ],
  },
];

export const resourceLinks: NavLink[] = [
  { href: '/resources/how-to-start-a-peptide-brand', label: 'How to start a peptide brand', description: 'A research-use launch guide for sourcing, testing, COAs, packaging, and fulfillment.' },
  { href: '/resources/peptide-supplier-checklist', label: 'Peptide supplier checklist', description: 'A due diligence checklist for comparing research peptide manufacturers.' },
  { href: '/resources/what-is-a-peptide-coa', label: 'What is a peptide COA', description: 'A plain-language guide to certificate of analysis records and review workflows.' },
  { href: '/topics', label: 'All topics', description: 'Browse the full research peptide sourcing topic library.' },
];

export const legalLinks: NavLink[] = [
  { href: '/privacy-policy', label: 'Privacy Policy', description: 'How Peptide Brand handles inquiry, analytics, and contact information.' },
  { href: '/terms-of-use', label: 'Terms of Use', description: 'Website terms for research-use-only sourcing and brand planning information.' },
];
