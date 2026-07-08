import type { Metadata } from 'next';
import { Container } from '@/components/Container';
import { LeadForm } from '@/components/LeadForm';
import { Section } from '@/components/Section';
import { createMetadata } from '@/lib/seo';

export const metadata: Metadata = createMetadata({ title: 'Request a Quote', path: '/quote', description: 'Request a research-use peptide sourcing quote for wholesale supply, white label support, COA workflows, testing coordination, packaging, and fulfillment.' });

export default function QuotePage() {
  return (
    <Section>
      <Container className="grid gap-10 lg:grid-cols-2">
        <div>
          <p className="text-sm font-bold uppercase tracking-[0.3em] text-teal">Lead capture</p>
          <h1 className="mt-3 text-4xl font-black text-navy">Request wholesale or white label support</h1>
          <p className="mt-4 text-slate-700">Use this form for laboratory research-use brand launch needs, sourcing, COA workflows, packaging, testing coordination, and fulfillment planning.</p>
        </div>
        <LeadForm variant="quote" />
      </Container>
    </Section>
  );
}
