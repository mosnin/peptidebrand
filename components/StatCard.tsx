export function StatCard({ value, label }: { value: string; label: string }) {
  return <div className="glass-panel rounded-3xl p-5"><p className="font-mono text-3xl font-black text-blue">{value}</p><p className="mt-2 text-sm font-semibold text-slate-600">{label}</p></div>;
}
