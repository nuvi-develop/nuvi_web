import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";

import { selectors } from "data";
import { reduceForTable } from "utils/pages/inventory";
import { Col } from "theme/style";

import LogListHead from "./LogListHead";
import LogTableDisplay from "./LogTableDisplay";

export default function LogListComp({ logs }) {
  const [logsForTable, setLogsForTable] = useState({
    recordDate: [],
    order: [],
    use: [],
    stock: [],
    cost: []
  });
  // const logs = useSelector(selectors.inventory.getCurrentIngredientLogs);

  useEffect(() => {
    reduceForTable(logs).then(reducedLogs => {
      setLogsForTable(reducedLogs);
    });
  }, [logs]);

  return (
    <Container>
      <LogListHead />
      <LogTableDisplay logsForTable={logsForTable} />
    </Container>
  );
}

const Container = styled(Col)`
  height: 50%;
  margin-bottom: 10px;
`;
