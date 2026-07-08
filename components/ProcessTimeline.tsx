export function ProcessTimeline({ steps }: { steps: { title: string; body: string }[] }) {
  return (
    <div className="relative grid gap-4 lg:grid-cols-6">
      <div className="absolute left-0 top-8 hidden h-px w-full bg-gradient-to-r from-cyan/0 via-cyan/50 to-cyan/0 lg:block" />
      {steps.map((step, index) => (
        <div key={step.title} className="glass-panel relative rounded-3xl p-5">
          <div className="flex h-12 w-12 items-center justify-center rounded-full border border-cyan/40 bg-cyan/10 font-mono text-sm font-bold text-cyan">{String(index + 1).padStart(2, '0')}</div>
          <h3 className="mt-5 text-xl font-black text-white">{step.title}</h3>
          <p className="mt-3 text-sm leading-6 text-white/70">{step.body}</p>
        </div>
      ))}
    </div>
  );
}
