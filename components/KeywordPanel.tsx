import type { SEOPage } from '@/lib/seo-page-map';

export function KeywordPanel({ page }: { page: SEOPage }) {
  return (
    <aside className="rounded-3xl bg-mist p-6">
      <p className="text-sm font-bold uppercase tracking-[0.2em] text-teal">Keyword map</p>
      <h2 className="mt-3 text-xl font-black text-navy">Target keyword</h2>
      <p className="mt-2 text-slate-700">{page.targetKeyword}</p>
      <h3 className="mt-6 font-bold text-navy">Secondary keywords</h3>
      <ul className="mt-3 space-y-2 text-sm text-slate-700">
        {page.secondaryKeywords.map((keyword) => (
          <li key={keyword}>• {keyword}</li>
        ))}
      </ul>
    </aside>
  );
}
