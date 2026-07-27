import type { Metadata } from 'next';
import { Container } from '@/components/Container';
import { Section } from '@/components/Section';
import { createMetadata } from '@/lib/seo';
import { researchDisclaimer } from '@/lib/site';

export const metadata: Metadata = createMetadata({ title: 'Compliance', path: '/compliance', description: 'Peptide Brand compliance stance for research-use-only peptide sourcing and white label information.' });

const points = [
  {
    title: 'Research-use-only scope',
    body: researchDisclaimer,
  },
  {
    title: 'What our content covers',
    body: 'Content stays limited to research-use sourcing, documentation, testing records, packaging, fulfillment, compliance review, and operational workflows.',
  },
  {
    title: 'What our lead capture is for',
    body: 'Lead capture focuses on wholesale sourcing, white label support, lab testing documentation, COAs, fulfillment, and brand launch operations for laboratory research supply businesses.',
  },
];

export default function CompliancePage() {
  return (
    <>
      <section className="border-b border-slate-200 bg-mist py-16 sm:py-24">
        <Container className="max-w-3xl text-center">
          <p className="text-sm font-bold uppercase tracking-[0.3em] text-blue">Compliance</p>
          <h1 className="mt-4 font-display text-5xl font-semibold tracking-tight text-navy sm:text-6xl">Our compliance stance</h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-slate-600">A plain-language summary of how research-use-only positioning shapes everything we publish and every conversation we support.</p>
        </Container>
      </section>

      <Section>
        <Container className="max-w-3xl space-y-6">
          {points.map((point) => (
            <div key={point.title} className="rounded-3xl border border-slate-200 bg-white p-6 shadow-soft">
              <h2 className="text-xl font-bold text-navy">{point.title}</h2>
              <p className="mt-3 leading-7 text-slate-600">{point.body}</p>
            </div>
          ))}
        </Container>
      </Section>
    </>
  );
}
