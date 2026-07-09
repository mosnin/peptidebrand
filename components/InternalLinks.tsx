import Link from 'next/link';
import { getInternalLinksForPage } from '@/lib/internal-links';
import type { SEOPage } from '@/lib/seo-page-map';

export function InternalLinks({ page }: { page: SEOPage }) {
  const links = getInternalLinksForPage(page);

  return (
    <nav aria-label="Recommended internal links" className="rounded-3xl bg-mist p-6">
      <h2 className="text-2xl font-black text-navy">Recommended next pages</h2>
      <div className="mt-4 flex flex-wrap gap-3">
        {links.map((link) => (
          <Link key={link.href} href={link.href} className="rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-bold text-slate-700 transition hover:border-blue hover:text-blue">
            {link.label}
          </Link>
        ))}
      </div>
    </nav>
  );
}
