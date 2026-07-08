export function ChromatogramVisual({ className = '' }: { className?: string }) {
  return (
    <div className={`relative overflow-hidden rounded-4xl border border-white/10 bg-midnight/70 p-5 shadow-glass ${className}`} aria-label="Abstract chromatogram line visualization">
      <div className="absolute inset-0 technical-grid opacity-60" />
      <svg viewBox="0 0 720 280" className="relative h-full min-h-56 w-full" role="img" aria-labelledby="chromatogram-title">
        <title id="chromatogram-title">Abstract chromatogram data line</title>
        <defs>
          <linearGradient id="chrom-line" x1="0" x2="1" y1="0" y2="0">
            <stop offset="0" stopColor="#68e8ff" stopOpacity="0.4" />
            <stop offset="0.5" stopColor="#19b7b5" />
            <stop offset="1" stopColor="#f6c36a" stopOpacity="0.9" />
          </linearGradient>
          <filter id="glow"><feGaussianBlur stdDeviation="4" result="coloredBlur" /><feMerge><feMergeNode in="coloredBlur" /><feMergeNode in="SourceGraphic" /></feMerge></filter>
        </defs>
        {[70, 120, 170, 220].map((y) => <line key={y} x1="24" x2="696" y1={y} y2={y} stroke="rgba(148,197,255,0.16)" strokeDasharray="6 10" />)}
        <path d="M24 224 C80 222 96 216 122 214 C160 210 172 205 190 188 C214 160 228 78 244 76 C262 74 272 184 290 202 C318 232 340 216 366 210 C406 201 418 172 432 122 C444 78 455 34 468 36 C482 38 488 112 500 158 C516 216 534 224 566 216 C590 210 602 190 614 154 C628 106 638 84 650 118 C662 152 666 198 696 204" fill="none" stroke="url(#chrom-line)" strokeWidth="5" strokeLinecap="round" filter="url(#glow)" />
        <path d="M24 224 C80 222 96 216 122 214 C160 210 172 205 190 188 C214 160 228 78 244 76 C262 74 272 184 290 202 C318 232 340 216 366 210 C406 201 418 172 432 122 C444 78 455 34 468 36 C482 38 488 112 500 158 C516 216 534 224 566 216 C590 210 602 190 614 154 C628 106 638 84 650 118 C662 152 666 198 696 204 L696 250 L24 250 Z" fill="rgba(104,232,255,0.08)" />
      </svg>
      <div className="relative mt-4 grid gap-3 sm:grid-cols-3">
        {['Batch traceability', 'COA review', 'HPLC / LCMS files'].map((label) => <div key={label} className="rounded-2xl border border-white/10 bg-white/10 px-4 py-3 text-xs font-semibold uppercase tracking-[0.18em] text-slate-100">{label}</div>)}
      </div>
    </div>
  );
}
