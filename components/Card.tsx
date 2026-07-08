import type { ReactNode } from 'react';

export function Card({ title, children }: { title: string; children: ReactNode }) {
  return <article className="rounded-3xl border border-slate-200 bg-white p-6 shadow-soft"><h3 className="text-xl font-bold text-navy">{title}</h3><div className="mt-3 text-slate-600">{children}</div></article>;
}
