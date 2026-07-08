import type { Metadata } from 'next';
import Link from 'next/link';
import { Container } from '@/components/Container';
import { CTASection } from '@/components/CTASection';
import { Section } from '@/components/Section';
import { TrustBadges } from '@/components/TrustBadges';
import { serviceMegaMenu } from '@/lib/nav';
import { createMetadata } from '@/lib/seo';

export const metadata: Metadata = createMetadata({
  title: 'Peptide Brand Services: Sourcing, White Label & Lab Testing',
  path: '/services',
  description: 'USA-based peptide brand services: wholesale inventory sourcing, white label and private label brand creation, HPLC/LCMS lab testing, COAs, packaging, and fulfillment. Free 1-on-1 consultations.',
});

export default function ServicesPage() {
  return (
    <>
      <Section>
        <Container>
          <p className="text-sm font-bold uppercase tracking-[0.25em] text-teal">Services</p>
          <h1 className="mt-3 text-4xl font-black text-navy">USA-based research peptide brand services</h1>
          <p className="mt-4 max-w-3xl text-lg leading-7 text-slate-700">From inventory sourcing to full white label and private label brand creation, every service below is backed by USA-based, lab-created manufacturing, 99%+ purity documentation, and a 100% free 1-on-1 consultation to get started.</p>
          <TrustBadges className="mt-8" />
          <div className="mt-12 grid gap-8 lg:grid-cols-2">
            {serviceMegaMenu.map((group) => (
              <div key={group.title} className="rounded-3xl border border-slate-200 bg-white p-6 shadow-soft">
                <h2 className="text-2xl font-black text-navy">{group.title}</h2>
                <div className="mt-5 grid gap-3">
                  {group.links.map((link) => (
                    <Link key={link.href} href={link.href} className="block rounded-2xl bg-mist p-4 transition hover:bg-teal/10">
                      <span className="block text-base font-bold text-teal">{link.label}</span>
                      <span className="mt-1 block text-sm leading-6 text-slate-700">{link.description}</span>
                    </Link>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </Container>
      </Section>
      <CTASection />
    </>
  );
}
