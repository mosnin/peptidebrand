import type { Metadata } from 'next';
import { Container } from '@/components/Container';
import { Section } from '@/components/Section';
import { createMetadata } from '@/lib/seo';
import { researchDisclaimer, siteConfig } from '@/lib/site';

export const metadata: Metadata = createMetadata({
  title: 'Terms of Use',
  path: '/terms-of-use',
  description: 'Terms of Use for Peptide Brand research-use sourcing, documentation, and brand planning information.',
});

const termSections = [
  {
    title: 'Research-use-only information',
    body: researchDisclaimer,
  },
  {
    title: 'No medical or consumer guidance',
    body: 'Content on this website is not medical advice and is not intended for diagnosis, clinical use, dosing, administration, or human-use recommendations. Website content is limited to research supply chain, documentation, packaging, fulfillment, and operational planning topics.',
  },
  {
    title: 'Business inquiry use',
    body: 'Forms and calls to action are intended for business inquiries related to laboratory research-use sourcing, documentation, testing coordination, packaging, fulfillment, and compliant brand launch operations.',
  },
  {
    title: 'Website content',
    body: 'We aim to keep website information accurate and useful, but content is provided for general planning purposes and may not reflect every regulatory, supplier, or operational requirement applicable to your business.',
  },
  {
    title: 'Third-party suppliers and services',
    body: 'If we discuss or coordinate with manufacturers, laboratories, logistics providers, or other vendors, those third parties remain responsible for their own services, documentation, terms, pricing, and compliance practices.',
  },
  {
    title: 'Contact',
    body: `Questions about these Terms of Use may be sent to ${siteConfig.email}.`,
  },
];

export default function TermsOfUsePage() {
  return (
    <Section>
      <Container className="max-w-4xl">
        <p className="text-sm font-bold uppercase tracking-[0.25em] text-teal">Legal</p>
        <h1 className="mt-3 text-4xl font-black text-navy">Terms of Use</h1>
        <p className="mt-5 text-lg leading-8 text-slate-700">
          These Terms of Use govern access to and use of the {siteConfig.name} website and its research-use-only sourcing and brand planning information.
        </p>
        <div className="mt-10 space-y-8">
          {termSections.map((section) => (
            <section key={section.title} className="rounded-3xl border border-slate-200 bg-white p-6 shadow-soft">
              <h2 className="text-2xl font-black text-navy">{section.title}</h2>
              <p className="mt-3 leading-7 text-slate-700">{section.body}</p>
            </section>
          ))}
        </div>
      </Container>
    </Section>
  );
}
