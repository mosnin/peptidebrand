import Link from 'next/link';
import { getRelatedPages } from '@/lib/related-pages';
import type { SEOPage } from '@/lib/seo-page-map';

export function RelatedLinks({ page }: { page: SEOPage }) {
  const related = getRelatedPages(page);

  if (related.length === 0) return null;

  return (
    <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-soft">
      <h2 className="text-2xl font-black text-navy">Related research-use planning pages</h2>
      <div className="mt-4 grid gap-3 sm:grid-cols-2">
        {related.map((item) => (
          <Link key={item.path} href={item.path} className="rounded-2xl bg-mist p-4 transition hover:bg-teal/10">
            <span className="block text-sm font-bold text-teal">{item.targetKeyword}</span>
            <span className="mt-1 block font-semibold text-navy">{item.h1}</span>
          </Link>
        ))}
      </div>
    </div>
  );
}
