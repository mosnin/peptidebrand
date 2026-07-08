import type { Metadata } from 'next';
import { Card } from '@/components/Card';
import { Container } from '@/components/Container';
import { CTASection } from '@/components/CTASection';
import { Section } from '@/components/Section';
import { createMetadata } from '@/lib/seo';

export const metadata: Metadata = createMetadata({ title: 'Services', path: '/services', description: 'White label peptide brand support for research-use sourcing, testing documentation, COAs, fulfillment, and launch operations.' });

export default function ServicesPage() {
  return <>
<Section>
<Container>
<h1 className="text-4xl font-black text-navy">Research-use peptide brand services</h1>
<p className="mt-4 max-w-3xl text-slate-600">Operational support for companies building compliant laboratory research supply brands with sourcing, documentation, testing records, packaging, fulfillment, and ecommerce launch workflows.</p>
<div className="mt-10 grid gap-6 md:grid-cols-2">
<Card title="Wholesale sourcing">Supplier evaluation, catalog planning, documentation review, and research-use positioning.</Card>
<Card title="White label launch">Labeling, packaging, ecommerce readiness, and B2B launch workflows.</Card>
<Card title="Lab testing and COAs">Testing roadmap, COA publishing process, lot documentation, and quality evidence.</Card>
<Card title="Fulfillment support">Inventory planning, kitting, storage considerations, and shipment workflow design.</Card>
</div>
</Container>
</Section>
<CTASection />
</>;
}
