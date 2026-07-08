import type { FAQItem } from '@/lib/seo-page-map';

export function FAQSection({ items, dark = false }: { items: FAQItem[]; dark?: boolean }) {
  return (
    <div className="grid gap-4">
      {items.map((item) => (
        <details key={item.question} className={`group rounded-3xl border p-5 transition ${dark ? 'border-white/10 bg-white/10 text-white open:bg-white/10' : 'border-slate-200 bg-white text-navy shadow-soft open:border-teal/40'}`}>
          <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-lg font-black">
            {item.question}
            <span className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full border text-sm transition group-open:rotate-45 ${dark ? 'border-cyan/30 text-cyan' : 'border-teal/30 text-teal'}`}>+</span>
          </summary>
          <p className={`mt-4 leading-7 ${dark ? 'text-slate-100' : 'text-slate-700'}`}>{item.answer}</p>
        </details>
      ))}
    </div>
  );
}
