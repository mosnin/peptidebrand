export function ChromatogramVisual({ className = '' }: { className?: string }) {
  return (
    <div className={`relative overflow-hidden rounded-4xl border border-slate-200 bg-white p-5 shadow-soft ${className}`} aria-label="Abstract chromatogram line visualization">
      <div className="absolute inset-0 technical-grid opacity-60" />
      <svg viewBox="0 0 720 280" className="relative h-full min-h-56 w-full" role="img" aria-labelledby="chromatogram-title">
        <title id="chromatogram-title">Abstract chromatogram data line</title>
        <defs>
          <linearGradient id="chrom-line" x1="0" x2="1" y1="0" y2="0">
            <stop offset="0" stopColor="#1d4ed8" stopOpacity="0.5" />
            <stop offset="0.5" stopColor="#1d4ed8" />
            <stop offset="1" stopColor="#a16207" stopOpacity="0.8" />
          </linearGradient>
        </defs>
        {[70, 120, 170, 220].map((y) => <line key={y} x1="24" x2="696" y1={y} y2={y} stroke="rgba(16,24,40,0.08)" strokeDasharray="6 10" />)}
        <path d="M24 224 C80 222 96 216 122 214 C160 210 172 205 190 188 C214 160 228 78 244 76 C262 74 272 184 290 202 C318 232 340 216 366 210 C406 201 418 172 432 122 C444 78 455 34 468 36 C482 38 488 112 500 158 C516 216 534 224 566 216 C590 210 602 190 614 154 C628 106 638 84 650 118 C662 152 666 198 696 204" fill="none" stroke="url(#chrom-line)" strokeWidth="3" strokeLinecap="round" />
        <path d="M24 224 C80 222 96 216 122 214 C160 210 172 205 190 188 C214 160 228 78 244 76 C262 74 272 184 290 202 C318 232 340 216 366 210 C406 201 418 172 432 122 C444 78 455 34 468 36 C482 38 488 112 500 158 C516 216 534 224 566 216 C590 210 602 190 614 154 C628 106 638 84 650 118 C662 152 666 198 696 204 L696 250 L24 250 Z" fill="rgba(29,78,216,0.05)" />
      </svg>
      <div className="relative mt-4 grid gap-3 sm:grid-cols-3">
        {['Batch traceability', 'COA review', 'HPLC / LCMS files'].map((label) => <div key={label} className="rounded-2xl border border-slate-200 bg-mist px-4 py-3 text-xs font-semibold uppercase tracking-[0.18em] text-slate-600">{label}</div>)}
      </div>
    </div>
  );
}
