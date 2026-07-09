import type { Metadata } from 'next';
import { Container } from '@/components/Container';
import { LeadForm } from '@/components/LeadForm';
import { Section } from '@/components/Section';
import { TrustBadges } from '@/components/TrustBadges';
import { createMetadata } from '@/lib/seo';
import { siteConfig } from '@/lib/site';

export const metadata: Metadata = createMetadata({ title: 'Contact', path: '/contact', description: 'Contact Peptide Brand about research-use peptide sourcing, white label support, COA workflows, testing documentation, packaging, and fulfillment.' });

export default function ContactPage() {
  return (
    <>
      <section className="border-b border-slate-200 bg-mist py-16 sm:py-24">
        <Container className="max-w-3xl text-center">
          <p className="text-sm font-bold uppercase tracking-[0.3em] text-blue">Talk to us</p>
          <h1 className="mt-4 font-display text-5xl font-semibold tracking-tight text-navy sm:text-6xl">Contact Peptide Brand</h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-slate-600">Tell us about your research-use sourcing, white label, testing, COA, or fulfillment questions. Every consultation is 100% free.</p>
        </Container>
      </section>

      <Section>
        <Container className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
          <div className="space-y-6">
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-soft">
                <p className="text-sm font-bold uppercase tracking-[0.2em] text-blue">Email</p>
                <a href={`mailto:${siteConfig.email}`} className="mt-2 block text-lg font-bold text-navy hover:text-blue">{siteConfig.email}</a>
              </div>
              <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-soft">
                <p className="text-sm font-bold uppercase tracking-[0.2em] text-blue">Phone</p>
                <a href={`tel:${siteConfig.phone}`} className="mt-2 block text-lg font-bold text-navy hover:text-blue">{siteConfig.phoneDisplay}</a>
              </div>
            </div>
            {siteConfig.publicLocation && (
              <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-soft">
                <p className="text-sm font-bold uppercase tracking-[0.2em] text-blue">Address</p>
                <p className="mt-2 text-lg font-bold text-navy">{siteConfig.publicLocation.streetAddress}</p>
                <p className="text-slate-600">{siteConfig.publicLocation.addressLocality}, {siteConfig.publicLocation.addressRegion}</p>
              </div>
            )}
            <div className="rounded-3xl border border-slate-200 bg-mist p-6">
              <p className="text-sm font-bold uppercase tracking-[0.2em] text-blue">Why work with us</p>
              <p className="mt-2 text-sm leading-6 text-slate-600">USA-based, lab-created manufacturers only. 99%+ purity, verified by HPLC and LCMS. 1-on-1 support from the first reply, and never a cost to connect with a supplier.</p>
              <TrustBadges className="mt-5" />
            </div>
          </div>
          <LeadForm variant="contact" />
        </Container>
      </Section>
    </>
  );
}
