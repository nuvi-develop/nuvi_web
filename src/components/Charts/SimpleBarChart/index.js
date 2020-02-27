import React from "react";
import { BarChart, Bar, XAxis, Cell, LabelList } from "recharts";

const data = [
  { name: "잔반", uv: 4000, pv: 2400, amt: 2400 },
  { name: "잔식", uv: 3000, pv: 1398, amt: 2210 },
  { name: "전처리", uv: 2000, pv: 1100, amt: 2290 }
];

const colors = ["#4985E9", "#79C4F4", "#74E1B1"];

export default function SimpleBarChart() {
  return (
    <BarChart
      width={400}
      height={200}
      data={data}
      margin={{ top: 30, right: 30, left: 20, bottom: 5 }}
    >
      <XAxis
        dataKey="name"
        tick={{ fontSize: 24 }}
        tickMargin={20}
        height={50}
      />
      <Bar dataKey="pv" fill="#8884d8" barSize={100}>
        {data.map((entry, index) => (
          <Cell key={entry.name} fill={colors[index]} />
        ))}
        <LabelList
          position="top"
          dataKey="pv"
          fontSize={24}
          formatter={val => `${val} 인분`}
        />
      </Bar>
    </BarChart>
  );
}
