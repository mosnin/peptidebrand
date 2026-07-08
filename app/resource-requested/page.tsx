import type { Metadata } from 'next';
import { Button } from '@/components/Button';
import { Container } from '@/components/Container';
import { Section } from '@/components/Section';
import { createMetadata } from '@/lib/seo';

export const metadata: Metadata = createMetadata({ title: 'Resource Requested', path: '/resource-requested', noIndex: true });

export default function ResourceRequestedPage() {
  return (
    <Section>
      <Container className="max-w-3xl text-center">
        <p className="text-sm font-bold uppercase tracking-[0.3em] text-teal">Resource requested</p>
        <h1 className="mt-4 text-4xl font-black text-navy">Your resource request was received.</h1>
        <p className="mt-4 text-lg leading-8 text-slate-700">Use the resource hub to keep exploring research-use sourcing, supplier checks, COA workflows, packaging, labeling, fulfillment, and launch planning.</p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <Button href="/resources">Explore resources</Button>
          <Button href="/quote">Get sourcing quote</Button>
        </div>
      </Container>
    </Section>
  );
}
