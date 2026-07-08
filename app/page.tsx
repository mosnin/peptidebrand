import type { Metadata } from 'next';
import Link from 'next/link';
import { Button } from '@/components/Button';
import { ChromatogramVisual } from '@/components/ChromatogramVisual';
import { COADocumentCard } from '@/components/COADocumentCard';
import { Container } from '@/components/Container';
import { FAQSection } from '@/components/FAQSection';
import { LeadForm } from '@/components/LeadForm';
import { MoleculeCard } from '@/components/MoleculeCard';
import { ProcessTimeline } from '@/components/ProcessTimeline';
import { ProofCard } from '@/components/ProofCard';
import { StatCard } from '@/components/StatCard';
import { SEOJsonLd } from '@/components/SEOJsonLd';
import { Section } from '@/components/Section';
import { createMetadata, organizationSchema, websiteSchema } from '@/lib/seo';
import { faqSchema } from '@/lib/schema';

export const metadata: Metadata = createMetadata({
  title: 'Research Peptide Brand Sourcing and Launch Partner',
  description:
    'Launch a research peptide brand with compliant wholesale sourcing, white label options, COA workflows, HPLC and LCMS testing coordination, packaging, and fulfillment support.',
  path: '/',
});

const trustItems = ['Research use only', 'COA workflows', 'HPLC and LCMS testing coordination', 'White label support', 'Wholesale sourcing', 'Brand launch guidance'];

const services = [
  ['White label peptide sourcing', '/white-label-peptides', 'Source research-use catalog options with documentation, supplier review, and launch-ready handoffs.'],
  ['Private label packaging', '/private-label-peptides', 'Plan packaging, custom labels, lot identifiers, and research-use-only language for branded inventory.'],
  ['Supplier due diligence', '/research-peptide-supplier', 'Compare suppliers by documentation quality, COA practices, lead times, testing references, and operational fit.'],
  ['COA and batch documentation', '/peptide-coa-testing', 'Create certificate review, batch record, and customer-facing COA access workflows.'],
  ['HPLC and LCMS lab testing coordination', '/peptide-lab-testing', 'Coordinate analytical documentation workflows for purity profiling and mass confirmation records.'],
  ['Fulfillment setup', '/peptide-fulfillment', 'Design receiving, lot tracking, pick-pack, COA lookup, shipping, and exception workflows.'],
  ['Ecommerce launch support', '/start-a-peptide-brand', 'Map the brand launch architecture from sourcing to SEO pages and lead capture.'],
  ['Compliance first copy review', '/compliance', 'Review public-facing copy for research-use-only positioning and unsupported claim risk.'],
];

const process = [
  { title: 'Discover', body: 'Clarify catalog goals, audience, launch timing, volume targets, and research-use-only positioning.' },
  { title: 'Source', body: 'Build supplier shortlists for wholesale, white label, or private label programs.' },
  { title: 'Verify', body: 'Review COAs, batch records, HPLC/LCMS references, and quality documentation workflows.' },
  { title: 'Package', body: 'Align custom labels, packaging, lot identifiers, disclaimers, and COA access paths.' },
  { title: 'Launch', body: 'Prepare ecommerce pages, resource content, lead capture, and internal compliance guardrails.' },
  { title: 'Fulfill', body: 'Document inventory receiving, lot tracking, kitting, shipping, and support boundaries.' },
];

const resources = [
  ['How to start a peptide brand', '/resources/how-to-start-a-peptide-brand', 'A research-use launch guide for sourcing, testing, COAs, packaging, fulfillment, and SEO.'],
  ['Peptide supplier checklist', '/resources/peptide-supplier-checklist', 'A due diligence checklist for comparing research peptide suppliers and quality documentation.'],
  ['What is a peptide COA', '/resources/what-is-a-peptide-coa', 'A plain-language guide to certificate of analysis records, batch IDs, and review workflows.'],
  ['HPLC vs LCMS peptide testing', '/resources/hplc-vs-lcms-peptide-testing', 'Understand how HPLC and LCMS documentation can support research-use quality files.'],
];

const faqItems = [
  {
    question: 'How do I start a research peptide brand?',
    answer:
      'Start with a research-use-only positioning plan, supplier criteria, COA workflow, testing documentation process, packaging review, fulfillment plan, and compliant ecommerce content architecture.',
  },
  {
    question: 'What should I look for in a peptide supplier?',
    answer:
      'Compare suppliers by batch traceability, COA availability, testing method references, catalog fit, packaging support, communication quality, lead times, and fulfillment compatibility.',
  },
  {
    question: 'Can you help with white label peptides?',
    answer:
      'Yes. Support focuses on research-use white label sourcing, packaging planning, label review, COA workflows, batch records, and launch operations.',
  },
  {
    question: 'What is included in peptide COA support?',
    answer:
      'COA support includes certificate collection, batch matching, review checklists, HPLC/LCMS reference organization, customer-facing access planning, and quality record structure.',
  },
  {
    question: 'Do you coordinate HPLC and LCMS peptide testing?',
    answer:
      'We help brands plan testing coordination workflows and organize analytical documentation for research-use inventory, including HPLC purity references and LCMS mass confirmation records.',
  },
  {
    question: 'Can this support a peptide ecommerce launch?',
    answer:
      'Yes. The launch plan can connect sourcing, documentation, labels, packaging, SEO pages, lead capture, inventory workflows, fulfillment, and compliance-first copy boundaries.',
  },
];

const proofItems = [
  ['Placeholder proof card: documentation-first workflows made supplier review easier to explain internally.', 'Founder feedback placeholder'],
  ['Placeholder proof card: a clearer COA and fulfillment handoff reduced launch ambiguity across teams.', 'Operations feedback placeholder'],
];

const seoLinks = [
  ['/white-label-peptides', 'White label peptides'],
  ['/private-label-peptides', 'Private label peptides'],
  ['/wholesale-peptides', 'Wholesale peptides'],
  ['/research-peptide-supplier', 'Research peptide supplier'],
  ['/start-a-peptide-brand', 'Start a peptide brand'],
  ['/peptide-lab-testing', 'Peptide lab testing'],
  ['/peptide-coa-testing', 'Peptide COA testing'],
  ['/peptide-fulfillment', 'Peptide fulfillment'],
  ['/peptide-packaging', 'Peptide packaging'],
];

export default function HomePage() {
  return (
    <>
      <SEOJsonLd data={[organizationSchema(), websiteSchema(), faqSchema(faqItems)]} />
      <section className="relative overflow-hidden bg-navy text-white">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(24,166,166,0.28),transparent_32%),radial-gradient(circle_at_80%_0%,rgba(244,184,96,0.18),transparent_28%)]" />
        <div className="absolute left-1/2 top-20 h-72 w-72 -translate-x-1/2 rounded-full border border-teal/20 blur-sm" />
        <Container className="relative grid gap-12 py-20 lg:grid-cols-[1.1fr_0.9fr] lg:items-center lg:py-28">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.3em] text-gold">Compliance first sourcing and launch partner</p>
            <h1 className="mt-5 max-w-5xl font-display text-5xl font-bold tracking-tight sm:text-7xl">Launch a research peptide brand with compliant sourcing, testing, and fulfillment support.</h1>
            <p className="mt-6 max-w-3xl text-lg leading-8 text-white/75">Build a research use only peptide brand with wholesale sourcing, white label options, COA workflows, packaging, and fulfillment infrastructure.</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button href="#lead-capture">Get sourcing quote</Button>
              <Button href="/resources/how-to-start-a-peptide-brand" variant="secondary">View launch checklist</Button>
            </div>
            <p className="mt-8 max-w-3xl text-sm text-white/70">All peptide-related planning on this site is for laboratory research-use-only supply chains, documentation, sourcing, packaging, and fulfillment operations.</p>
          </div>
          <div className="grid gap-5">
            <ChromatogramVisual />
            <div className="grid gap-4 sm:grid-cols-3">
              <StatCard value="COA" label="Batch documentation workflows" />
              <StatCard value="HPLC" label="Purity record coordination" />
              <StatCard value="LCMS" label="Mass reference organization" />
            </div>
          </div>
        </Container>
      </section>

      <section className="border-y border-slate-200 bg-white py-5">
        <Container>
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-6">
            {trustItems.map((item) => (
              <div key={item} className="rounded-full bg-mist px-4 py-3 text-center text-sm font-bold text-navy">{item}</div>
            ))}
          </div>
        </Container>
      </section>

      <Section className="dark-section">
        <Container className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.25em] text-cyan">The founder problem</p>
            <h2 className="mt-3 font-display text-4xl font-bold text-white sm:text-5xl">Most peptide brand founders are not blocked by demand. They are blocked by operational trust.</h2>
            <p className="mt-5 text-xl leading-9 text-white/70">Most peptide brand founders struggle with supplier verification, testing documentation, packaging, compliance language, and fulfillment operations. PeptideBrand helps turn those moving parts into a launch system for research-use-only supply chains.</p>
          </div>
          <div className="grid gap-5 md:grid-cols-2">
            <MoleculeCard />
            <COADocumentCard />
          </div>
        </Container>
      </Section>

      <Section className="bg-mist">
        <Container>
          <div className="max-w-3xl">
            <p className="text-sm font-bold uppercase tracking-[0.25em] text-teal">Services</p>
            <h2 className="mt-3 text-3xl font-black text-navy sm:text-4xl">Sourcing, testing, packaging, fulfillment, and launch support in one architecture.</h2>
          </div>
          <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {services.map(([title, href, body]) => (
              <Link key={href} href={href} className="rounded-3xl border border-slate-200 bg-white p-6 shadow-soft transition hover:-translate-y-1 hover:border-teal">
                <h3 className="text-xl font-black text-navy">{title}</h3>
                <p className="mt-3 text-sm leading-6 text-slate-600">{body}</p>
              </Link>
            ))}
          </div>
        </Container>
      </Section>

      <Section className="bg-midnight text-white">
        <Container>
          <div className="max-w-3xl">
            <p className="text-sm font-bold uppercase tracking-[0.25em] text-cyan">Process</p>
            <h2 className="mt-3 font-display text-4xl font-bold sm:text-5xl">A launch workflow built for documentation and operational clarity.</h2>
          </div>
          <div className="mt-10">
            <ProcessTimeline steps={process} />
          </div>
        </Container>
      </Section>

      <Section>
        <Container>
          <div className="flex flex-col justify-between gap-4 md:flex-row md:items-end">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.25em] text-teal">Featured resources</p>
              <h2 className="mt-3 text-3xl font-black text-navy sm:text-4xl">Research-use launch education for better sourcing decisions.</h2>
            </div>
            <Button href="/resources">View all resources</Button>
          </div>
          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {resources.map(([title, href, body]) => (
              <Link key={href} href={href} className="rounded-3xl border border-slate-200 bg-white p-6 shadow-soft transition hover:-translate-y-1 hover:border-teal">
                <h3 className="text-xl font-black text-navy">{title}</h3>
                <p className="mt-3 text-sm leading-6 text-slate-600">{body}</p>
              </Link>
            ))}
          </div>
        </Container>
      </Section>

      <section id="lead-capture" className="dark-section py-16 text-white sm:py-24">
        <Container className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.25em] text-gold">Sourcing quote</p>
            <h2 className="mt-3 text-3xl font-black sm:text-4xl">Tell us what you want to launch or improve.</h2>
            <p className="mt-4 text-lg leading-8 text-white/70">Use the form for wholesale sourcing, white label support, COA workflows, testing coordination, packaging, fulfillment, or research-use ecommerce launch planning.</p>
          </div>
          <LeadForm dark />
        </Container>
      </section>

      <Section className="bg-midnight text-white">
        <Container>
          <div className="grid gap-6 md:grid-cols-2">
            {proofItems.map(([quote, label]) => <ProofCard key={label} quote={quote} label={label} />)}
          </div>
        </Container>
      </Section>

      <Section className="bg-midnight text-white">
        <Container className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.25em] text-cyan">FAQ</p>
            <h2 className="mt-3 font-display text-4xl font-bold text-white sm:text-5xl">Research peptide brand sourcing questions.</h2>
          </div>
          <FAQSection items={faqItems} dark />
        </Container>
      </Section>

      <section className="bg-teal py-16 text-white">
        <Container className="grid gap-6 md:grid-cols-[1fr_auto] md:items-center">
          <div>
            <h2 className="text-3xl font-black">Get a wholesale sourcing quote.</h2>
            <p className="mt-3 max-w-2xl text-white/80">Start with supplier requirements, COA expectations, testing documentation, packaging, fulfillment, and launch timeline.</p>
          </div>
          <Button href="#lead-capture" variant="secondary">Get sourcing quote</Button>
        </Container>
      </section>

      <section className="bg-white py-10">
        <Container>
          <h2 className="text-lg font-black text-navy">Explore major research-use peptide brand pages</h2>
          <div className="mt-4 flex flex-wrap gap-3">
            {seoLinks.map(([href, label]) => (
              <Link key={href} href={href} className="rounded-full border border-slate-200 px-4 py-2 text-sm font-semibold text-slate-700 hover:border-teal hover:text-teal">{label}</Link>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}
