import type { Metadata } from 'next';
import Image from 'next/image';
import { Container } from '@/components/Container';
import { LeadForm } from '@/components/LeadForm';
import { Section } from '@/components/Section';
import { TrustBadges } from '@/components/TrustBadges';
import { brandAssets } from '@/lib/assets';
import { createMetadata } from '@/lib/seo';

export const metadata: Metadata = createMetadata({ title: 'Request a Quote', path: '/quote', description: 'Request a research-use peptide sourcing quote for wholesale supply, white label support, COA workflows, testing coordination, packaging, and fulfillment.' });

export default function QuotePage() {
  return (
    <>
      <section className="relative overflow-hidden bg-navy py-20 text-white sm:py-28">
        <Image src={brandAssets.molecularMap} alt="Abstract lab-created molecular research peptide chain rendering" fill priority sizes="100vw" className="object-cover" />
        <div className="absolute inset-0 bg-gradient-to-r from-navy via-navy/90 to-navy/50" />
        <Container className="relative max-w-3xl">
          <p className="text-sm font-bold uppercase tracking-[0.3em] text-white/70">100% free consultation</p>
          <h1 className="mt-4 font-display text-5xl font-semibold tracking-tight sm:text-6xl">Request wholesale or white label support.</h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-white/75">Tell us about your sourcing, white label, or private label goals. There is never a cost to connect with a manufacturer in our network, and you get 1-on-1 support from the first reply.</p>
          <TrustBadges className="mt-10" />
        </Container>
      </section>

      <Section>
        <Container className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.25em] text-blue">What happens next</p>
            <h2 className="mt-3 font-display text-3xl font-semibold text-navy">A free, guided path from first call to fulfillment.</h2>
            <div className="mt-8 space-y-6">
              {[
                { step: '01', title: 'We review your request', body: 'A member of our team reads your sourcing, white label, or testing needs within one business day.' },
                { step: '02', title: 'We match a manufacturer', body: 'You get introduced to the right USA-based, lab-created manufacturer from our network of hundreds, free, always.' },
                { step: '03', title: 'You get 1-on-1 support', body: 'A dedicated contact stays with you through COAs, packaging, and fulfillment planning.' },
              ].map((item) => (
                <div key={item.step} className="flex gap-4">
                  <span className="font-display text-2xl font-semibold text-blue">{item.step}</span>
                  <div>
                    <h3 className="text-lg font-bold text-navy">{item.title}</h3>
                    <p className="mt-1 text-sm leading-6 text-slate-600">{item.body}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <LeadForm variant="quote" />
        </Container>
      </Section>
    </>
  );
}
