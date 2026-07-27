'use client';

import { Bar, BarChart, CartesianGrid, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';

const data = [
  { stage: 'Sourcing', checkpoints: 4 },
  { stage: 'Documentation', checkpoints: 5 },
  { stage: 'Testing', checkpoints: 3 },
  { stage: 'Packaging', checkpoints: 3 },
  { stage: 'Fulfillment', checkpoints: 4 },
];

export function QualityCheckpointsChart() {
  return (
    <div className="h-72 w-full">
      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={data} layout="vertical" margin={{ top: 8, right: 24, bottom: 8, left: 8 }}>
          <CartesianGrid horizontal={false} stroke="rgba(16,24,40,0.08)" />
          <XAxis type="number" hide />
          <YAxis
            type="category"
            dataKey="stage"
            width={110}
            tickLine={false}
            axisLine={false}
            tick={{ fill: '#101828', fontSize: 13, fontWeight: 600 }}
          />
          <Tooltip
            cursor={{ fill: 'rgba(29,78,216,0.06)' }}
            contentStyle={{ borderRadius: 16, border: '1px solid #e2e8f0', boxShadow: '0 20px 60px rgba(16,24,40,0.08)' }}
            formatter={(value) => [`${value} checkpoints`, '']}
            labelFormatter={() => ''}
          />
          <Bar dataKey="checkpoints" radius={[0, 8, 8, 0]} fill="#1d4ed8" barSize={22} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
