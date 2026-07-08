import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/Button';
import { Container } from '@/components/Container';
import { FAQSection } from '@/components/FAQSection';
import { LeadForm } from '@/components/LeadForm';
import { ProcessTimeline } from '@/components/ProcessTimeline';
import { SEOJsonLd } from '@/components/SEOJsonLd';
import { Section } from '@/components/Section';
import { StatCard } from '@/components/StatCard';
import { TrustBadges } from '@/components/TrustBadges';
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

const trustItems = ['USA-based manufacturers', 'Lab-created & tested', '99%+ purity verified', 'Free 1-on-1 consultations', 'White label & private label', 'Hundreds of vetted suppliers'];

const process = [
  { title: 'Free consultation', body: 'Tell us what you want to launch or source. Every consultation is 100% free — no cost, ever, to connect with a supplier.' },
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
    answer: 'You get 1-on-1 customer support from our team for reorders, new product sourcing, documentation questions, and ongoing brand growth — not a ticket queue.',
  },
];

export default function HomePage() {
  return (
    <>
      <SEOJsonLd data={[organizationSchema(), websiteSchema(), faqSchema(faqItems)]} />
      <section className="relative overflow-hidden bg-navy text-white">
        <Image src={brandAssets.heroScientists} alt="USA-based laboratory preparing research peptide vials for testing and quality verification" fill priority sizes="100vw" className="object-cover opacity-45" />
        <div className="absolute inset-0 bg-gradient-to-r from-navy via-navy/90 to-navy/60" />
        <Container className="relative grid gap-12 py-20 lg:grid-cols-[1.1fr_0.9fr] lg:items-center lg:py-28">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.3em] text-cyan">USA-based • Lab-created • 100% free consultations</p>
            <h1 className="mt-5 max-w-5xl font-display text-5xl font-bold tracking-tight sm:text-7xl">Launch a USA-made peptide brand with 99%+ pure, lab-tested research peptides.</h1>
            <p className="mt-6 max-w-3xl text-lg leading-8 text-white/75">We connect research-use brands with hundreds of vetted, USA-based peptide manufacturers for wholesale sourcing, white label, and full private label brand creation — with free 1-on-1 support from day one.</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button href="#lead-capture">Get a free consultation</Button>
              <Button href="/research-peptide-supplier" variant="secondary">See our manufacturer network</Button>
            </div>
            <p className="mt-8 max-w-3xl text-sm text-white/70">All peptide-related planning on this site is for laboratory research-use-only supply chains, documentation, sourcing, packaging, and fulfillment operations.</p>
            <TrustBadges className="mt-10" />
          </div>
          <div className="grid gap-5">
            <div className="grid gap-4 sm:grid-cols-2">
              <StatCard value="99%+" label="Purity, HPLC & LCMS verified" />
              <StatCard value="$0" label="Cost for any consultation" />
              <StatCard value="100s" label="Vetted USA manufacturers" />
              <StatCard value="1-on-1" label="Dedicated support, every account" />
            </div>
            <div className="glass-panel overflow-hidden rounded-4xl">
              <Image src={brandAssets.bottle} alt="Unbranded research peptide vial ready for white label and private label customization" width={640} height={640} className="mx-auto h-64 w-auto object-contain py-6" />
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
        <Container className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.25em] text-cyan">Why founders work with us</p>
            <h2 className="mt-3 font-display text-4xl font-bold text-white sm:text-5xl">Sourcing shouldn&apos;t cost you anything until you&apos;re ready to buy.</h2>
            <p className="mt-5 text-xl leading-9 text-white/70">Most peptide brand founders are not blocked by demand — they&apos;re blocked by trust. Which manufacturer is actually USA-based? Who tests to 99%+ purity? Who will take a call without a fee attached? We solve that with a free, 1-on-1 introduction to the right partner in a network of hundreds of manufacturers.</p>
            <div className="mt-6 grid gap-3 sm:grid-cols-2">
              {['No cost to connect with a supplier', 'Only USA-based labs & manufacturers', '99%+ purity, lab-verified', 'Full white label brand creation'].map((item) => (
                <div key={item} className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm font-semibold text-white/85">{item}</div>
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
          <div className="max-w-3xl">
            <p className="text-sm font-bold uppercase tracking-[0.25em] text-teal">Services</p>
            <h2 className="mt-3 text-3xl font-black text-navy sm:text-4xl">From inventory sourcing to full brand creation — real pages for every service.</h2>
            <p className="mt-4 text-lg leading-7 text-slate-600">No generic catch-all page. Explore the exact service you need, from white label brand creation to wholesale sourcing, lab testing, packaging, and fulfillment.</p>
          </div>
          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {serviceMegaMenu.map((group) => (
              <div key={group.title} className="rounded-3xl border border-slate-200 bg-white p-6 shadow-soft">
                <h3 className="text-lg font-black text-navy">{group.title}</h3>
                <div className="mt-4 grid gap-3">
                  {group.links.map((link) => (
                    <Link key={link.href} href={link.href} className="block rounded-2xl bg-mist p-3 transition hover:bg-teal/10">
                      <span className="block text-sm font-bold text-teal">{link.label}</span>
                      <span className="mt-1 block text-xs leading-5 text-slate-600">{link.description}</span>
                    </Link>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      <Section className="bg-navy text-white">
        <Container className="grid gap-10 lg:grid-cols-2 lg:items-center">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.25em] text-cyan">Full brand creation</p>
            <h2 className="mt-3 font-display text-4xl font-bold sm:text-5xl">From &ldquo;your brand here&rdquo; to a shelf-ready catalog.</h2>
            <p className="mt-5 text-lg leading-8 text-white/70">White label and private label programs include custom packaging, printed labels, lot codes, research-use-only disclaimers, and certificate of analysis access — built around USA-based manufacturing and 99%+ purity documentation.</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button href="/white-label-peptides">Explore white label</Button>
              <Button href="/private-label-peptides" variant="secondary">Explore private label</Button>
            </div>
          </div>
          <div className="glass-panel overflow-hidden rounded-4xl p-3">
            <Image src={brandAssets.whiteLabelInventory} alt="White label peptide packaging, boxes, vials, and certificate of analysis ready for private label brand creation" width={1200} height={800} className="rounded-3xl object-cover" />
          </div>
        </Container>
      </Section>

      <Section>
        <Container className="grid gap-10 lg:grid-cols-2 lg:items-center">
          <div className="order-2 grid gap-5 sm:grid-cols-2 lg:order-1">
            <div className="overflow-hidden rounded-3xl border border-slate-200 shadow-soft">
              <Image src={brandAssets.coaStack} alt="Certificate of analysis showing 99.7 percent peptide purity results from independent lab testing" width={900} height={600} className="h-full w-full object-cover" />
            </div>
            <div className="overflow-hidden rounded-3xl border border-slate-200 shadow-soft">
              <Image src={brandAssets.hplcInterface} alt="HPLC analysis dashboard confirming 99.12 percent research peptide purity with a pass result" width={900} height={600} className="h-full w-full object-cover" />
            </div>
          </div>
          <div className="order-1 lg:order-2">
            <p className="text-sm font-bold uppercase tracking-[0.25em] text-teal">Quality you can verify</p>
            <h2 className="mt-3 text-3xl font-black text-navy sm:text-4xl">99%+ purity, backed by HPLC, LCMS, and a certificate of analysis for every batch.</h2>
            <p className="mt-4 text-lg leading-8 text-slate-600">We only work with the highest-quality laboratories and manufacturers based in the USA. Every recommended partner supports batch-level COAs, third-party testing references, and documentation you can hand to your own customers with confidence.</p>
            <Button href="/peptide-lab-testing" className="mt-6">See lab testing support</Button>
          </div>
        </Container>
      </Section>

      <Section className="bg-midnight text-white">
        <Container>
          <div className="max-w-3xl">
            <p className="text-sm font-bold uppercase tracking-[0.25em] text-cyan">Process</p>
            <h2 className="mt-3 font-display text-4xl font-bold sm:text-5xl">A free, guided path from first call to fulfillment.</h2>
          </div>
          <div className="mt-10">
            <ProcessTimeline steps={process} />
          </div>
        </Container>
      </Section>

      <section id="lead-capture" className="dark-section py-16 text-white sm:py-24">
        <Container className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.25em] text-cyan">100% free consultation</p>
            <h2 className="mt-3 text-3xl font-black sm:text-4xl">Tell us what you want to source, brand, or launch.</h2>
            <p className="mt-4 text-lg leading-8 text-white/70">Use the form for wholesale sourcing, white label or private label brand creation, lab testing questions, packaging, or fulfillment planning. There is never a cost to connect with a manufacturer in our network, and you get 1-on-1 support from the first reply.</p>
          </div>
          <LeadForm dark />
        </Container>
      </section>

      <Section className="bg-midnight text-white">
        <Container className="grid gap-10 lg:grid-cols-2 lg:items-center">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.25em] text-cyan">USA-based supply</p>
            <h2 className="mt-3 font-display text-4xl font-bold sm:text-5xl">Cold-chain-ready inventory from domestic manufacturers.</h2>
            <p className="mt-5 text-lg leading-8 text-white/70">Wholesale sourcing connects you directly to USA-based manufacturing capacity so you can scale a catalog without guessing where inventory actually comes from.</p>
            <Button href="/wholesale-peptides" className="mt-6">Explore wholesale sourcing</Button>
          </div>
          <div className="glass-panel overflow-hidden rounded-4xl p-3">
            <Image src={brandAssets.vialsColdStorage} alt="Rows of research peptide vials in cold storage at a USA-based manufacturing facility" width={1200} height={800} className="rounded-3xl object-cover" />
          </div>
        </Container>
      </Section>

      <Section className="bg-midnight text-white">
        <Container className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.25em] text-cyan">FAQ</p>
            <h2 className="mt-3 font-display text-4xl font-bold text-white sm:text-5xl">Research peptide sourcing questions, answered plainly.</h2>
          </div>
          <FAQSection items={faqItems} dark />
        </Container>
      </Section>

      <section className="bg-teal py-16 text-white">
        <Container className="grid gap-6 md:grid-cols-[1fr_auto] md:items-center">
          <div>
            <h2 className="text-3xl font-black">Get a free sourcing consultation.</h2>
            <p className="mt-3 max-w-2xl text-white/80">Start with your catalog goals, volume, and timeline — we&apos;ll match you with the right USA-based manufacturer at no cost.</p>
          </div>
          <Button href="#lead-capture" variant="secondary">Get a free consultation</Button>
        </Container>
      </section>
    </>
  );
}
