import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer
} from "recharts";

const data = [
  { name: "현미밥", 잔식: 400, 잔반: 240 },
  { name: "김치찌개", 잔식: 300, 잔반: 139 },
  { name: "콩나물", 잔식: 200, 잔반: 380 },
  { name: "물김치", 잔식: 278, 잔반: 390 },
  { name: "수육", 잔식: 189, 잔반: 480 },
  { name: "꼴뚜기젓갈", 잔식: 239, 잔반: 380 }
];

export default function BarChartComponent({ width, height }) {
  return (
    <ResponsiveContainer width={width} height={height}>
      <BarChart data={data} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="잔반" fill="#8884d8" />
        <Bar dataKey="잔식" fill="#82ca9d" />
      </BarChart>
    </ResponsiveContainer>
  );
}
