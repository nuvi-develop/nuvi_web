import React, { useState, useEffect } from "react";
import styled from "styled-components";

import { mapForTable } from "utils/pages/inventory";
import { Col } from "theme/style";

import LogListHead from "./LogListHead";
import LogTableCol from "./LogTableCol";
import LogTableRow from "./LogTableRow";

export default function LogListComp({ logs }) {
  const [logsForTable, setLogsForTable] = useState([]);

  useEffect(() => {
    mapForTable(logs).then(mappedLogs => {
      setLogsForTable(mappedLogs);
    });
  }, [logs]);

  return (
    <Container>
      <LogListHead />
      <LogTableRow logsForTable={logsForTable} />
    </Container>
  );
}

const Container = styled(Col)`
  height: 50%;
  margin-bottom: 10px;
`;
