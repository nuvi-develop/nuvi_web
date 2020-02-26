import React from "react";
import { PieChart, Pie, Cell, LabelList } from "recharts";

import Colors from "theme/colors";

const data = [
  { name: "잔반", value: 400 },
  { name: "잔식", value: 300 },
  { name: "전처리", value: 300 }
];
const costomizedLabel = entry => {
  return `${entry.name} ${entry.percent * 100}%`;
};

export default function HalfPieChart() {
  return (
    <PieChart width={300} height={200}>
      <Pie
        startAngle={180}
        endAngle={0}
        data={data}
        outerRadius={80}
        fill="#8884d8"
        label={costomizedLabel}
        cy="80%"
      >
        <Cell key={1} fill={Colors.blue_1} />
        <Cell key={2} fill={Colors.blue_2} />
        <Cell key={3} fill={Colors.green_2} />
        <LabelList dataKey="value" position="top" angle="45" />
      </Pie>
    </PieChart>
  );
}
