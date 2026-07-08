import type { Metadata } from 'next';
import { Container } from '@/components/Container';
import { Section } from '@/components/Section';
import { createMetadata } from '@/lib/seo';
import { researchDisclaimer } from '@/lib/site';

export const metadata: Metadata = createMetadata({ title: 'Compliance', path: '/compliance', description: 'Peptide Brand compliance stance for research-use-only peptide sourcing and white label information.' });
export default function CompliancePage() { return <Section>
<Container>
<h1 className="text-4xl font-black text-navy">Compliance stance</h1>
<div className="mt-6 max-w-3xl space-y-4 text-slate-700">
<p>{researchDisclaimer}</p>
<p>Content stays limited to research-use sourcing, documentation, testing records, packaging, fulfillment, compliance review, and operational workflows.</p>
<p>Lead capture focuses on wholesale sourcing, white label support, lab testing documentation, COAs, fulfillment, and brand launch operations for laboratory research supply businesses.</p>
</div>
</Container>
</Section>;
}
