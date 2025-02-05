"use client"

import { Line, LineChart, ResponsiveContainer } from "recharts"

const data = [
  {
    revenue: 10400,
    subscription: 240,
  },
  {
    revenue: 14405,
    subscription: 300,
  },
  {
    revenue: 9400,
    subscription: 200,
  },
  {
    revenue: 8200,
    subscription: 278,
  },
  {
    revenue: 7000,
    subscription: 189,
  },
  {
    revenue: 9600,
    subscription: 239,
  },
  {
    revenue: 11244,
    subscription: 278,
  },
]

export function LineChartComponent() {
  return (
    <ResponsiveContainer width="100%" height={80}>
      <LineChart data={data}>
        <Line
          type="monotone"
          dataKey="revenue"
          stroke="hsl(var(--primary))"
          strokeWidth={2}
          dot={{
            r: 3,
            fill: "hsl(var(--primary))",
            stroke: "hsl(var(--primary))",
          }}
        />
      </LineChart>
    </ResponsiveContainer>
  )
}