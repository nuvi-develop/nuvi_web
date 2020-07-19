import React, { PureComponent } from "react";
import {
  BarChart,
  ComposedChart,
  Bar,
  Cell,
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
  return (
    <ComposedChart
      width={700}
      height={300}
      data={dateFormatedData}
      margin={{
        top: 20,
        right: 30,
        left: 20,
        bottom: 5
      }}
    >
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="recordDate" padding={{ left: 30, right: 30 }} />
      <YAxis yAxisId="left" />
      <YAxis
        yAxisId="right"
        orientation="right"
        padding={{ top: 10 }}
        type="number"
        domain={["dataMin", "dataMax"]}
        reversed={true}
      />

      <Tooltip />
      <Legend />
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
        fill={Colors.green_1}
      />
    </ComposedChart>
  );
};

export default CostStockStackedChart;
