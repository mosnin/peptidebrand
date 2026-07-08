import type { Metadata } from 'next';
import { Button } from '@/components/Button';
import { Container } from '@/components/Container';
import { Section } from '@/components/Section';
import { createMetadata } from '@/lib/seo';

export const metadata: Metadata = createMetadata({ title: 'Thank You', path: '/thank-you', noIndex: true });

export default function ThankYouPage() {
  return (
    <Section>
      <Container className="max-w-3xl text-center">
        <p className="text-sm font-bold uppercase tracking-[0.3em] text-teal">Submission received</p>
        <h1 className="mt-4 text-4xl font-black text-navy">Thank you. We received your inquiry.</h1>
        <p className="mt-4 text-lg leading-8 text-slate-700">Our team will review your research-use sourcing, documentation, testing, packaging, or fulfillment needs and follow up with next steps.</p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <Button href="/resources/how-to-start-a-peptide-brand">Read the launch guide</Button>
          <Button href="/contact">Contact us</Button>
        </div>
      </Container>
    </Section>
  );
}
