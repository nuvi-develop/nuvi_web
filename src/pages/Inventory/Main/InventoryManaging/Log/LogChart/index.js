import React from "react";

import LogChart from "components/Charts/LogChart";

export default function LogChartForInventory({ logs }) {
  return <LogChart logs={logs} height={250} />;
}
