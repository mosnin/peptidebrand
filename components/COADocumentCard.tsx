export function COADocumentCard() {
  return (
    <div className="glass-panel rounded-4xl p-6">
      <div className="rounded-3xl border border-slate-200 bg-white p-5">
        <div className="flex items-center justify-between border-b border-slate-200 pb-4">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.24em] text-blue">Certificate file</p>
            <h3 className="mt-2 text-2xl font-black text-navy">COA-Ready Batch Record</h3>
          </div>
          <span className="rounded-full border border-blue/40 px-3 py-1 text-xs font-bold text-blue">Reviewed</span>
        </div>
        <div className="mt-5 grid gap-3">
          {['Lot identifier', 'Supplier documentation', 'HPLC reference', 'LCMS reference', 'Label version'].map((item, index) => (
            <div key={item} className="flex items-center justify-between rounded-2xl bg-mist px-4 py-3">
              <span className="text-sm text-slate-600">{item}</span>
              <span className="font-mono text-xs text-blue">0{index + 1}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
