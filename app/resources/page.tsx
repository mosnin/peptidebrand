import type { Metadata } from 'next';
import Link from 'next/link';
import { Container } from '@/components/Container';
import { LeadForm } from '@/components/LeadForm';
import { Section } from '@/components/Section';
import { createMetadata } from '@/lib/seo';
import { resourcePages } from '@/lib/seo-page-map';

export const metadata: Metadata = createMetadata({ title: 'Resources', path: '/resources', description: 'Guides for research-use peptide brand founders covering sourcing, supplier checks, COAs, HPLC and LCMS testing, packaging, fulfillment, and launch planning.' });

export default function ResourcesPage() {
  return (
    <Section>
      <Container>
        <h1 className="text-4xl font-black text-navy">Research-use peptide brand resources</h1>
        <p className="mt-4 max-w-3xl text-slate-600">
          Guides on research peptide sourcing, white label operations, lab testing, COA management, fulfillment, labels, and compliant lead generation.
        </p>
        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {resourcePages.map((page) => (
            <Link key={page.path} href={page.path} className="rounded-3xl border border-slate-200 bg-white p-6 shadow-soft transition hover:-translate-y-1 hover:border-blue">
              <p className="text-sm font-bold uppercase tracking-[0.2em] text-blue">Guide</p>
              <h2 className="mt-3 text-2xl font-black text-navy">{page.h1}</h2>
              <p className="mt-3 text-slate-600">{page.metaDescription}</p>
            </Link>
          ))}
        </div>
        <div className="mt-12 grid gap-8 rounded-3xl border border-slate-200 bg-mist p-6 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.25em] text-gold">Resource download</p>
            <h2 className="mt-3 text-3xl font-black text-navy">Get a research-use brand launch resource.</h2>
            <p className="mt-4 text-slate-600">Request a checklist or guide for sourcing, COAs, packaging, fulfillment, or launch planning.</p>
          </div>
          <LeadForm variant="newsletter" />
        </div>
      </Container>
    </Section>
  );
}
