export function ProofCard({ quote, label }: { quote: string; label: string }) {
  return <figure className="rounded-4xl border border-white/10 bg-white/10 p-6"><blockquote className="text-lg font-semibold leading-8 text-white">“{quote}”</blockquote><figcaption className="mt-5 text-sm font-bold uppercase tracking-[0.22em] text-cyan">{label}</figcaption></figure>;
}
