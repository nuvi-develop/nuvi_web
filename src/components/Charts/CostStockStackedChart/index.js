import React from "react";
import {
  ComposedChart,
  Bar,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend
} from "recharts";
import { format } from "date-fns";

import Colors from "theme/colors";

const CostStockStackedChart = ({ data }) => {
  const dateFormatedData = data.map(data => {
    const newData = {
      ...data,
      recordDate: format(new Date(data.recordDate), "MM/dd")
    };

    return newData;
  });

  const costArray = data.map(data => +data.cost);
  const maxCost = Math.max(...costArray);
  const minCost = Math.min(...costArray);
  return (
    <ComposedChart
      width={700}
      height={300}
      data={dateFormatedData}
      margin={{
        top: 20,
        right: 30,
        left: 30,
        bottom: 5
      }}
    >
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="recordDate" padding={{ left: 30, right: 30 }} />
      <YAxis
        yAxisId="left"
        label={{ value: "재료량", offset: -30, position: "insideLeft" }}
        padding={{ top: 20 }}
      />
      <YAxis
        yAxisId="right"
        orientation="right"
        padding={{ top: 20, bottom: 20 }}
        label={{ value: "비용", offset: -30, position: "insideRight" }}
        domain={[minCost, maxCost]}
      />

      <Tooltip />
      <Legend />
      <Line
        name="주문량"
        yAxisId="left"
        type="monotone"
        dataKey="order"
        fill={Colors.blue_1}
      />
      <Bar
        name="사용량"
        dataKey="used"
        barSize={15}
        yAxisId="left"
        stackId="a"
        fill={Colors.gray_1}
      />
      <Bar
        name="남은량"
        dataKey="left"
        barSize={15}
        yAxisId="left"
        stackId="a"
        fill={Colors.green_1}
      />

      <Line
        name="주문비용"
        yAxisId="right"
        type="monotone"
        dataKey="cost"
        fill={Colors.yellow}
        stroke={Colors.yellow}
      />
    </ComposedChart>
  );
};

export default CostStockStackedChart;
