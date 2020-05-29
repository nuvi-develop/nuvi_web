import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer
} from "recharts";
import styled from "styled-components";

import Colors from "theme/colors";

const mockData = [
  { recordDate: "5월 7일", order: 25, use: 30, inventory: 36 },
  { recordDate: "5월 8일", order: 32, use: 38, inventory: 7 },
  { recordDate: "5월 9일", order: 62, use: 86, inventory: 82 },
  { recordDate: "5월 10일", order: 89, use: 36, inventory: 37 }
];

export default function LogChartComp({ data }) {
  return (
    <ResponsiveContainer width={"99%"} height={300}>
      <LineChart data={mockData}>
        <XAxis dataKey="recordDate" />
        <YAxis />
        <CartesianGrid strokeDashArray="3 3" />
        <Tooltip />
        <Legend />
        <Line
          type="monotone"
          name="주문량"
          dataKey="order"
          stroke={Colors.blue_1}
        />
        <Line
          type="monotone"
          name="사용량"
          dataKey="use"
          stroke={Colors.green_1}
        />
        <Line
          type="monotone"
          name="재고"
          dataKey="inventory"
          stroke={Colors.gray_1}
          activeDot={{ r: 8 }}
        />
      </LineChart>
    </ResponsiveContainer>
  );
}
