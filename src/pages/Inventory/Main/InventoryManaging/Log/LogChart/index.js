import React, { useEffect, useState } from "react";
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

import Colors from "theme/colors";
import { mapForChart } from "utils/pages/inventory";

export default function LogChartComp({ logs }) {
  const [mapedData, setMapedData] = useState([]);

  useEffect(() => {
    mapForChart(logs).then(maped => setMapedData(maped));
  }, [logs]);

  return (
    <ResponsiveContainer width={"99%"} height={300}>
      <LineChart data={mapedData}>
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
          dataKey="stock"
          stroke={Colors.gray_1}
          activeDot={{ r: 8 }}
        />
      </LineChart>
    </ResponsiveContainer>
  );
}
