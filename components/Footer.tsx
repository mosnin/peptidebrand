import Link from 'next/link';
import { Container } from './Container';
import { researchDisclaimer, siteConfig } from '@/lib/site';

const serviceLinks = [
  ['/white-label-peptides', 'White label peptides'],
  ['/private-label-peptides', 'Private label peptides'],
  ['/wholesale-peptides', 'Wholesale peptides'],
  ['/research-peptide-supplier', 'Research peptide supplier'],
  ['/peptide-lab-testing', 'Peptide lab testing'],
  ['/peptide-coa-testing', 'Peptide COA testing'],
  ['/peptide-fulfillment', 'Peptide fulfillment'],
  ['/peptide-packaging', 'Peptide packaging'],
];

const resourceLinks = [
  ['/resources/how-to-start-a-peptide-brand', 'How to start a peptide brand'],
  ['/resources/peptide-supplier-checklist', 'Supplier checklist'],
  ['/resources/what-is-a-peptide-coa', 'Peptide COA guide'],
  ['/topics/peptide-supplier-with-coa', 'Supplier with COA'],
];

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-midnight py-14 pb-24 text-white md:pb-14">
      <Container>
        <div className="grid gap-10 lg:grid-cols-[1.2fr_1fr_1fr_1fr]">
          <div>
            <p className="font-display text-3xl font-bold">{siteConfig.name}</p>
            <p className="mt-4 max-w-md text-sm leading-6 text-white/60">{researchDisclaimer}</p>
            <p className="mt-5 rounded-2xl border border-cyan/20 bg-cyan/10 p-4 text-sm text-cyan/90">Premium research supply infrastructure for sourcing, testing records, batch documentation, packaging, and fulfillment operations.</p>
          </div>
          <div>
            <p className="font-bold text-white">Commercial pages</p>
            <div className="mt-4 grid gap-2 text-sm text-white/60">
              {serviceLinks.slice(0, 4).map(([href, label]) => <Link key={href} href={href} className="hover:text-cyan">{label}</Link>)}
            </div>
          </div>
          <div>
            <p className="font-bold text-white">Operations</p>
            <div className="mt-4 grid gap-2 text-sm text-white/60">
              {serviceLinks.slice(4).map(([href, label]) => <Link key={href} href={href} className="hover:text-cyan">{label}</Link>)}
            </div>
          </div>
          <div>
            <p className="font-bold text-white">Resources</p>
            <div className="mt-4 grid gap-2 text-sm text-white/60">
              {resourceLinks.map(([href, label]) => <Link key={href} href={href} className="hover:text-cyan">{label}</Link>)}
              <Link href="/compliance" className="hover:text-cyan">Compliance stance</Link>
            </div>
          </div>
        </div>
        <p className="mt-10 border-t border-white/10 pt-6 text-xs text-white/50">© {new Date().getFullYear()} {siteConfig.name}. Research-use-only information. No competitor assets imported.</p>
      </Container>
    </footer>
  );
}
