import type { Metadata } from 'next';
import { Button } from '@/components/Button';
import { Container } from '@/components/Container';
import { Section } from '@/components/Section';
import { createMetadata } from '@/lib/seo';

export const metadata: Metadata = createMetadata({ title: 'Quote Submitted', path: '/quote-submitted', noIndex: true });

export default function QuoteSubmittedPage() {
  return (
    <Section>
      <Container className="max-w-3xl text-center">
        <p className="text-sm font-bold uppercase tracking-[0.3em] text-teal">Quote request received</p>
        <h1 className="mt-4 text-4xl font-black text-navy">Your sourcing quote request is in.</h1>
        <p className="mt-4 text-lg leading-8 text-slate-700">We will review your product category, volume, timeline, budget range, and needed services so we can respond with relevant research-use launch support.</p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <Button href="/resources/peptide-brand-launch-checklist">Read the launch checklist</Button>
          <Button href="/resources/peptide-supplier-checklist">Review supplier checklist</Button>
        </div>
      </Container>
    </Section>
  );
}
