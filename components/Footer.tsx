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
            <div className="mt-4 space-y-1 text-sm text-slate-600">
              <a href={`tel:${siteConfig.phone}`} className="block hover:text-blue">{siteConfig.phoneDisplay}</a>
              <a href={`mailto:${siteConfig.email}`} className="block hover:text-blue">{siteConfig.email}</a>
              {siteConfig.publicLocation && <p>{siteConfig.publicLocation.streetAddress}, {siteConfig.publicLocation.addressLocality}, {siteConfig.publicLocation.addressRegion}</p>}
            </div>
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
        <div className="mt-10 flex flex-wrap items-center justify-between gap-4 border-t border-slate-200 pt-6 text-xs text-slate-500">
          <p>© {new Date().getFullYear()} {siteConfig.name}. Research-use-only information. No competitor assets imported.</p>
          <div className="flex flex-wrap gap-4">
            <Link href="/privacy-policy" className="hover:text-blue">Privacy Policy</Link>
            <Link href="/terms-of-service" className="hover:text-blue">Terms of Service</Link>
            <Link href="/compliance" className="hover:text-blue">Compliance</Link>
          </div>
        </div>
      </Container>
    </footer>
  );
}
