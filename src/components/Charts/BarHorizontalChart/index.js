import React from "react";

import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer
} from "recharts";

const data = [
  { name: "불고기", pv: 2400 },
  { name: "수육", pv: 1200 },
  { name: "제육쌈밥", pv: 800 },
  { name: "비빔밥", pv: 700 },
  { name: "카레", pv: 500 }
];

export default function BarHorizontalChart({ width, height }) {
  return (
    <ResponsiveContainer width={width} height={height}>
      <BarChart
        layout="vertical"
        data={data}
        margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
      >
        <CartesianGrid strokeDasharray="3 3" y={650} />
        <XAxis type="number" />
        <YAxis type="category" dataKey="name" />
        <Tooltip />
        <Bar dataKey="pv" fill="#8884d8" />
      </BarChart>
    </ResponsiveContainer>
  );
}
