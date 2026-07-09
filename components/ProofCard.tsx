export function ProofCard({ quote, label }: { quote: string; label: string }) {
  return <figure className="rounded-4xl border border-slate-200 bg-white p-6 shadow-soft"><blockquote className="text-lg font-semibold leading-8 text-navy">“{quote}”</blockquote><figcaption className="mt-5 text-sm font-bold uppercase tracking-[0.22em] text-blue">{label}</figcaption></figure>;
}
