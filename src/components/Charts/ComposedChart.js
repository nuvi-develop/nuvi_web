import React from "react";
import {
  ComposedChart,
  Area,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer
} from "recharts";

const data = [
  { name: "2/23", 최대: 600, 식수량: 420, 최소: 400 },
  { name: "2/24", 최대: 720, 식수량: 700, 최소: 506 },
  { name: "2/25", 최대: 397, 식수량: 298, 최소: 289 },
  { name: "2/26", 최대: 680, 식수량: 600, 최소: 528 },
  { name: "2/27", 최대: 520, 식수량: 308, 최소: 300 },
  { name: "2/28", 최대: 720, 식수량: 0, 최소: 600 }
];

export default function ComposedChartComponent({ width, height }) {
  return (
    <ResponsiveContainer width={width} height={height}>
      <ComposedChart
        data={data}
        margin={{ top: 20, right: 60, bottom: 20, left: 20 }}
      >
        <CartesianGrid stroke="#f5f5f5" />
        <XAxis dataKey="name" padding={{ left: 20 }} />
        <YAxis />
        <Tooltip />
        <Legend />

        <Area type="monotone" dataKey="최대" fill="#ff7300" stroke="#ff7300" />
        <Area type="monotone" dataKey="최소" fill="#8884d8" stroke="#8884d8" />
        <Bar dataKey="식수량" barSize={20} fill="#413ea0" />
      </ComposedChart>
    </ResponsiveContainer>
  );
}
