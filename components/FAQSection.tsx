import type { FAQItem } from '@/lib/seo-page-map';

export function FAQSection({ items }: { items: FAQItem[] }) {
  return (
    <div className="grid gap-4">
      {items.map((item) => (
        <details key={item.question} className="group rounded-3xl border border-slate-200 bg-white p-5 text-navy shadow-soft open:border-blue/40">
          <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-lg font-black">
            {item.question}
            <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-blue/30 text-sm text-blue transition group-open:rotate-45">+</span>
          </summary>
          <p className="mt-4 leading-7 text-slate-600">{item.answer}</p>
        </details>
      ))}
    </div>
  );
}
