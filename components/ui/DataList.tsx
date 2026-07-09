import { cn } from '@/lib/utils';

export type DataListItem = { label: string; value: string };

export function DataList({ items, className }: { items: DataListItem[]; className?: string }) {
  return (
    <dl className={cn('divide-y divide-slate-200 rounded-3xl border border-slate-200 bg-white shadow-soft', className)}>
      {items.map((item) => (
        <div key={item.label} className="flex items-center justify-between gap-4 px-5 py-4">
          <dt className="text-sm font-semibold text-slate-500">{item.label}</dt>
          <dd className="text-right font-display text-lg font-semibold text-navy">{item.value}</dd>
        </div>
      ))}
    </dl>
  );
}
