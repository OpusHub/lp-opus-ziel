'use client';

import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

interface ComparisonChartProps {
  data: Array<{
    name: string;
    before: number;
    after: number;
  }>;
  beforeColor?: string;
  afterColor?: string;
}

export default function ComparisonChart({
  data,
  beforeColor = '#ef4444',
  afterColor = '#22c55e'
}: ComparisonChartProps) {
  return (
    <div className="w-full h-64 md:h-80">
      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={data} margin={{ top: 10, right: 10, left: 0, bottom: 0 }}>
          <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.1)" />
          <XAxis
            dataKey="name"
            stroke="rgba(255,255,255,0.5)"
            style={{ fontSize: '12px', fontWeight: '300' }}
          />
          <YAxis
            stroke="rgba(255,255,255,0.5)"
            style={{ fontSize: '12px', fontWeight: '300' }}
          />
          <Tooltip
            contentStyle={{
              backgroundColor: 'rgba(0,0,0,0.9)',
              border: '1px solid rgba(255,255,255,0.1)',
              borderRadius: '8px',
              fontSize: '12px',
              fontWeight: '300'
            }}
            labelStyle={{ color: 'rgba(255,255,255,0.7)' }}
          />
          <Bar dataKey="before" fill={beforeColor} radius={[4, 4, 0, 0]} />
          <Bar dataKey="after" fill={afterColor} radius={[4, 4, 0, 0]} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
