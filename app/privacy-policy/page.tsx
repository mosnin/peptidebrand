import type { Metadata } from 'next';
import { Container } from '@/components/Container';
import { Section } from '@/components/Section';
import { createMetadata } from '@/lib/seo';
import { siteConfig } from '@/lib/site';

export const metadata: Metadata = createMetadata({
  title: 'Privacy Policy',
  path: '/privacy-policy',
  description: 'Privacy Policy for Peptide Brand research-use sourcing inquiries, contact forms, and website analytics.',
});

const policySections = [
  {
    title: 'Information we collect',
    body: 'When you submit a quote, contact, or resource form, we collect the business contact details and project information you choose to provide, such as name, email, company, website, sourcing category, timeline, and message details.',
  },
  {
    title: 'How we use information',
    body: 'We use submitted information to respond to research-use-only sourcing, documentation, packaging, testing, fulfillment, or brand planning inquiries and to improve the quality of our website and lead routing workflows.',
  },
  {
    title: 'Analytics and technical data',
    body: 'The website may collect standard technical information such as page views, referring pages, browser type, device data, and general usage events to understand website performance and improve content.',
  },
  {
    title: 'Sharing and service providers',
    body: 'We may share relevant inquiry details with operational vendors or sourcing partners only when needed to respond to your business request. We do not sell personal information as a standalone data product.',
  },
  {
    title: 'Research-use-only context',
    body: 'This website is limited to laboratory research-use-only sourcing, documentation, packaging, fulfillment, and operational support. We do not collect information for medical diagnosis, clinical use, dosing, or human-use guidance.',
  },
  {
    title: 'Contact',
    body: `For privacy questions or requests, contact ${siteConfig.email}.`,
  },
];

export default function PrivacyPolicyPage() {
  return (
    <Section>
      <Container className="max-w-4xl">
        <p className="text-sm font-bold uppercase tracking-[0.25em] text-teal">Legal</p>
        <h1 className="mt-3 text-4xl font-black text-navy">Privacy Policy</h1>
        <p className="mt-5 text-lg leading-8 text-slate-700">
          This Privacy Policy explains how {siteConfig.name} handles information submitted through our research-use sourcing and brand planning website.
        </p>
        <div className="mt-10 space-y-8">
          {policySections.map((section) => (
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
