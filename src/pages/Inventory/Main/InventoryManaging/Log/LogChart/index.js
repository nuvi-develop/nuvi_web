import React from "react";

import LogChart from "components/Charts/LogChart";

const LogChartForInventory = ({ logs }) => (
  <LogChart logs={logs} height={250} />
);

export default LogChartForInventory;
