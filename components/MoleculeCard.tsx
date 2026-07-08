export function MoleculeCard({ title = 'Research supply architecture', body = 'Supplier records, label versions, batch identifiers, and fulfillment notes connected in one operating file.' }: { title?: string; body?: string }) {
  const nodes = [[40, 42], [92, 72], [142, 38], [186, 88], [112, 132], [58, 150]];
  return (
    <div className="glass-panel rounded-4xl p-6">
      <svg viewBox="0 0 230 180" className="h-44 w-full" role="img" aria-label="Abstract molecular network illustration">
        {[[0,1],[1,2],[2,3],[1,4],[4,5],[0,5]].map(([a,b]) => <line key={`${a}-${b}`} x1={nodes[a][0]} y1={nodes[a][1]} x2={nodes[b][0]} y2={nodes[b][1]} stroke="rgba(104,232,255,0.35)" strokeWidth="2" />)}
        {nodes.map(([cx, cy], index) => <circle key={`${cx}-${cy}`} cx={cx} cy={cy} r={index % 2 ? 10 : 14} fill={index % 2 ? '#19b7b5' : '#68e8ff'} opacity="0.9" />)}
      </svg>
      <h3 className="text-xl font-black text-white">{title}</h3>
      <p className="mt-3 text-sm leading-6 text-slate-100">{body}</p>
    </div>
  );
}
