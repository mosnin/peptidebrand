import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/Button';
import { Container } from '@/components/Container';
import { CTASection } from '@/components/CTASection';
import { FAQSection } from '@/components/FAQSection';
import { LeadForm } from '@/components/LeadForm';
import { ProcessTimeline } from '@/components/ProcessTimeline';
import { SEOJsonLd } from '@/components/SEOJsonLd';
import { Section } from '@/components/Section';
import { brandAssets } from '@/lib/assets';
import { serviceMegaMenu } from '@/lib/nav';
import { createMetadata, organizationSchema, websiteSchema } from '@/lib/seo';
import { faqSchema } from '@/lib/schema';

export const metadata: Metadata = createMetadata({
  title: 'USA-Based Peptide Brand Creation, White Label & Wholesale Sourcing',
  description:
    'Peptide Brand connects you with hundreds of vetted USA-based, lab-created peptide manufacturers for white label, private label, and wholesale sourcing. 99%+ purity, third-party lab testing, and 100% free 1-on-1 consultations.',
  path: '/',
});

const stats = [
  { value: '99%+', label: 'Purity, HPLC & LCMS verified' },
  { value: '$0', label: 'Cost for any consultation' },
  { value: '100s', label: 'Vetted USA manufacturers' },
  { value: '1-on-1', label: 'Dedicated support, every account' },
];

const trustItems = ['USA-based manufacturers', 'Lab-created & tested', '99%+ purity verified', 'Free 1-on-1 consultations', 'White label & private label', 'Hundreds of vetted suppliers'];

const proofPoints = ['No cost to connect with a supplier', 'Only USA-based labs and manufacturers', '99%+ purity, lab-verified', 'Full white label brand creation'];

const process = [
  { title: 'Free consultation', body: 'Tell us what you want to launch or source. Every consultation is 100% free. No cost, ever, to connect with a supplier.' },
  { title: 'Manufacturer match', body: 'We connect you with the right USA-based, lab-created peptide manufacturers from our network of hundreds of partners.' },
  { title: 'Verify quality', body: 'Review COAs, HPLC and LCMS testing records, and confirm 99%+ purity before committing to inventory.' },
  { title: 'Brand it', body: 'White label or private label your catalog with custom packaging, labels, and research-use-only positioning.' },
  { title: 'Launch', body: 'Prepare ecommerce pages, lead capture, and compliance-first copy for a research-use-only launch.' },
  { title: '1-on-1 support', body: 'Keep a dedicated point of contact for reorders, new SKUs, and ongoing sourcing questions.' },
];

const faqItems = [
  {
    question: 'Do you charge to connect me with a peptide supplier?',
    answer: 'No. Every consultation and supplier introduction is 100% free. We never charge a fee to connect you with a manufacturer in our network.',
  },
  {
    question: 'Are your peptide manufacturers based in the USA?',
    answer: 'Yes. We only work with USA-based, lab-created peptide manufacturers and laboratories. Every partner in our network is domestic and vetted for documentation quality.',
  },
  {
    question: 'How many manufacturers are you connected with?',
    answer: "We're connected with hundreds of manufacturers across the USA, so we can match your catalog, volume, and budget with the right sourcing partner instead of a single default option.",
  },
  {
    question: 'What purity level should I expect?',
    answer: 'Our network prioritizes 99%+ purity backed by third-party HPLC and LCMS testing and certificate of analysis documentation for every batch.',
  },
  {
    question: 'Can you help with full brand creation, not just sourcing?',
    answer: 'Yes. We support the full path from inventory sourcing to full white label and private label brand creation, including packaging, custom labels, and launch operations.',
  },
  {
    question: 'What kind of support do I get after the introduction?',
    answer: 'You get 1-on-1 customer support from our team for reorders, new product sourcing, documentation questions, and ongoing brand growth. Not a ticket queue.',
  },
];

export default function HomePage() {
  return (
    <>
      <SEOJsonLd data={[organizationSchema(), websiteSchema(), faqSchema(faqItems)]} />

      <section className="relative overflow-hidden bg-navy">
        <Image src={brandAssets.heroBackground} alt="Glowing map of connected USA-based peptide manufacturing partners linked to molecular research imagery" fill priority sizes="100vw" className="object-cover" />
        <div className="absolute inset-0 bg-gradient-to-r from-navy via-navy/85 to-navy/40" />
        <div className="absolute inset-0 bg-gradient-to-t from-navy via-navy/10 to-transparent" />
        <Container className="relative py-24 lg:py-32">
          <div className="max-w-3xl">
            <p className="text-sm font-bold uppercase tracking-[0.3em] text-white/70">USA-based. Lab-created. 100% free consultations.</p>
            <h1 className="mt-5 font-display text-5xl font-semibold tracking-tight text-white sm:text-7xl">USA-made peptide brands, backed by 99%+ purity.</h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-white/75">We connect research-use brands with hundreds of vetted, USA-based peptide manufacturers for wholesale sourcing, white label, and full private label brand creation, with free 1-on-1 support from day one.</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button href="#lead-capture">Get a free consultation</Button>
              <Button href="/research-peptide-supplier" variant="onDark">See our manufacturer network</Button>
            </div>
          </div>
          <div className="mt-14 grid gap-4 border-t border-white/10 pt-10 sm:grid-cols-2 lg:grid-cols-4 lg:divide-x lg:divide-white/10">
            {stats.map((stat) => (
              <div key={stat.label} className="lg:px-8 lg:first:pl-0">
                <p className="font-display text-4xl font-semibold text-white">{stat.value}</p>
                <p className="mt-1 text-sm text-white/60">{stat.label}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="border-b border-slate-200 bg-white py-5">
        <Container>
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-6">
            {trustItems.map((item) => (
              <div key={item} className="rounded-full border border-slate-200 bg-mist px-4 py-3 text-center text-sm font-bold text-navy">{item}</div>
            ))}
          </div>
        </Container>
      </section>

      <Section>
        <Container className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.25em] text-blue">Why founders work with us</p>
            <h2 className="mt-3 font-display text-4xl font-semibold text-navy sm:text-5xl">Sourcing shouldn&apos;t cost you anything until you&apos;re ready to buy.</h2>
            <p className="mt-5 text-xl leading-9 text-slate-600">Most peptide brand founders are not blocked by demand. They&apos;re blocked by trust. Which manufacturer is actually USA-based? Who tests to 99%+ purity? Who will take a call without a fee attached? We solve that with a free, 1-on-1 introduction to the right partner in a network of hundreds of manufacturers.</p>
            <div className="mt-6 grid gap-3 sm:grid-cols-2">
              {proofPoints.map((item) => (
                <div key={item} className="rounded-2xl border border-slate-200 bg-mist px-4 py-3 text-sm font-semibold text-navy">{item}</div>
              ))}
            </div>
          </div>
          <div className="glass-panel overflow-hidden rounded-4xl p-4">
            <Image src={brandAssets.peptideChain} alt="Molecular structure rendering representing lab-created, USA-tested research peptide chains" width={800} height={800} className="mx-auto h-80 w-auto object-contain" />
          </div>
        </Container>
      </Section>

      <Section className="bg-mist">
        <Container>
          <div className="max-w-2xl">
            <p className="text-sm font-bold uppercase tracking-[0.25em] text-blue">What we do</p>
            <h2 className="mt-3 font-display text-4xl font-semibold text-navy sm:text-5xl">From inventory sourcing to full brand creation.</h2>
            <p className="mt-4 text-lg leading-7 text-slate-600">No generic catch-all page. Explore the exact service you need, with a dedicated page for every step of the process.</p>
          </div>
          <div className="mt-12 border-t border-slate-200">
            {serviceMegaMenu.map((group, index) => (
              <div key={group.title} className="grid gap-6 border-b border-slate-200 py-10 lg:grid-cols-[100px_1fr_1.4fr]">
                <span className="font-display text-3xl font-semibold text-blue">0{index + 1}</span>
                <h3 className="font-display text-2xl font-semibold text-navy">{group.title}</h3>
                <div className="grid gap-3 sm:grid-cols-2">
                  {group.links.map((link) => (
                    <Link key={link.href} href={link.href} className="block rounded-2xl bg-white p-4 shadow-soft transition hover:-translate-y-0.5 hover:shadow-glow">
                      <span className="block text-sm font-bold text-blue">{link.label}</span>
                      <span className="mt-1 block text-xs leading-5 text-slate-600">{link.description}</span>
                    </Link>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      <Section>
        <Container className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.25em] text-blue">Verified quality, real brand creation</p>
            <h2 className="mt-3 font-display text-4xl font-semibold text-navy sm:text-5xl">99%+ purity and a shelf-ready catalog, documented every step.</h2>
            <p className="mt-4 text-lg leading-8 text-slate-600">White label and private label programs include custom packaging, printed labels, lot codes, research-use-only disclaimers, and certificate of analysis access, built around USA-based manufacturing and third-party purity testing.</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button href="/white-label-peptides">Explore white label</Button>
              <Button href="/peptide-lab-testing" variant="secondary">See lab testing support</Button>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="row-span-2 overflow-hidden rounded-3xl border border-slate-200 shadow-soft">
              <Image src={brandAssets.whiteLabelInventory} alt="White label peptide packaging, boxes, vials, and certificate of analysis ready for private label brand creation" width={700} height={900} className="h-full w-full object-cover" />
            </div>
            <div className="overflow-hidden rounded-3xl border border-slate-200 shadow-soft">
              <Image src={brandAssets.coaStack} alt="Certificate of analysis showing 99.7 percent peptide purity results from independent lab testing" width={700} height={440} className="h-full w-full object-cover" />
            </div>
            <div className="overflow-hidden rounded-3xl border border-slate-200 shadow-soft">
              <Image src={brandAssets.hplcInterface} alt="HPLC analysis dashboard confirming 99.12 percent research peptide purity with a pass result" width={700} height={440} className="h-full w-full object-cover" />
            </div>
          </div>
        </Container>
      </Section>

      <Section className="bg-mist">
        <Container>
          <div className="max-w-2xl">
            <p className="text-sm font-bold uppercase tracking-[0.25em] text-blue">Process</p>
            <h2 className="mt-3 font-display text-4xl font-semibold text-navy sm:text-5xl">A free, guided path from first call to fulfillment.</h2>
          </div>
          <div className="mt-10">
            <ProcessTimeline steps={process} />
          </div>
        </Container>
      </Section>

      <Section>
        <Container className="grid gap-10 lg:grid-cols-2 lg:items-center">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.25em] text-blue">USA-based supply</p>
            <h2 className="mt-3 font-display text-4xl font-semibold text-navy sm:text-5xl">Cold-chain-ready inventory from domestic manufacturers.</h2>
            <p className="mt-5 text-lg leading-8 text-slate-600">Wholesale sourcing connects you directly to USA-based manufacturing capacity so you can scale a catalog without guessing where inventory actually comes from.</p>
            <Button href="/wholesale-peptides" className="mt-6">Explore wholesale sourcing</Button>
          </div>
          <div className="glass-panel overflow-hidden rounded-4xl p-3">
            <Image src={brandAssets.vialsColdStorage} alt="Rows of research peptide vials in cold storage at a USA-based manufacturing facility" width={1200} height={800} className="rounded-3xl object-cover" />
          </div>
        </Container>
      </Section>

      <section id="lead-capture" className="border-y border-slate-200 bg-mist py-16 sm:py-24">
        <Container className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.25em] text-blue">100% free consultation</p>
            <h2 className="mt-3 font-display text-3xl font-semibold text-navy sm:text-4xl">Tell us what you want to source, brand, or launch.</h2>
            <p className="mt-4 text-lg leading-8 text-slate-600">Use the form for wholesale sourcing, white label or private label brand creation, lab testing questions, packaging, or fulfillment planning. There is never a cost to connect with a manufacturer in our network, and you get 1-on-1 support from the first reply.</p>
          </div>
          <LeadForm />
        </Container>
      </section>

      <Section>
        <Container className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.25em] text-blue">FAQ</p>
            <h2 className="mt-3 font-display text-4xl font-semibold text-navy sm:text-5xl">Research peptide sourcing questions, answered plainly.</h2>
          </div>
          <FAQSection items={faqItems} />
        </Container>
      </Section>

      <CTASection />
    </>
  );
}
