import type { Metadata } from 'next';
import { Container } from '@/components/Container';
import { LeadForm } from '@/components/LeadForm';
import { Section } from '@/components/Section';
import { createMetadata } from '@/lib/seo';

export const metadata: Metadata = createMetadata({ title: 'Contact', path: '/contact', description: 'Contact Peptide Brand about research-use peptide sourcing, white label support, COA workflows, testing documentation, packaging, and fulfillment.' });

export default function ContactPage() {
  return (
    <Section>
      <Container className="grid gap-10 lg:grid-cols-2">
        <div>
          <h1 className="text-4xl font-black text-navy">Contact</h1>
          <p className="mt-4 text-slate-600">Tell us about your research-use sourcing, white label, testing, COA, or fulfillment questions.</p>
        </div>
        <LeadForm variant="contact" />
      </Container>
    </Section>
  );
}
