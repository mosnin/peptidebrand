import Link from 'next/link';
import { Container } from './Container';
import { Logo } from './Logo';
import { TrustBadges } from './TrustBadges';
import { researchDisclaimer, siteConfig } from '@/lib/site';
import { resourceLinks, serviceMegaMenu } from '@/lib/nav';

export function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-mist py-14 pb-24 text-navy md:pb-14">
      <Container>
        <div className="grid gap-10 lg:grid-cols-[1.1fr_1fr_1fr_1fr_1fr]">
          <div>
            <Logo variant="icon" />
            <p className="mt-4 font-display text-2xl font-bold text-navy">{siteConfig.name}</p>
            <p className="mt-4 max-w-md text-sm leading-6 text-slate-600">{researchDisclaimer}</p>
            <p className="mt-5 rounded-2xl border border-blue/20 bg-blue/5 p-4 text-sm text-blue">USA-based, lab-created research peptides. Free 1-on-1 consultations. We never charge to connect you with a supplier.</p>
            <TrustBadges className="mt-6" />
          </div>
          {serviceMegaMenu.map((group) => (
            <div key={group.title}>
              <p className="font-bold text-navy">{group.title}</p>
              <div className="mt-4 grid gap-2 text-sm text-slate-600">
                {group.links.map((link) => <Link key={link.href} href={link.href} className="hover:text-blue">{link.label}</Link>)}
              </div>
            </div>
          ))}
          <div>
            <p className="font-bold text-navy">Resources</p>
            <div className="mt-4 grid gap-2 text-sm text-slate-600">
              {resourceLinks.map((link) => <Link key={link.href} href={link.href} className="hover:text-blue">{link.label}</Link>)}
              <Link href="/compliance" className="hover:text-blue">Compliance stance</Link>
            </div>
          </div>
        </div>
        <p className="mt-10 border-t border-slate-200 pt-6 text-xs text-slate-500">© {new Date().getFullYear()} {siteConfig.name}. Research-use-only information. No competitor assets imported.</p>
      </Container>
    </footer>
  );
}
