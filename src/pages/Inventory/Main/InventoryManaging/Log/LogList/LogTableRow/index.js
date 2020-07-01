import React from "react";
import styled from "styled-components";

import TableHeader from "./TableHeader";
import TableRow from "./TableRow";

export default function LogTable({ logsForTable }) {
  console.log("logsForTable", logsForTable);
  return (
    <Container>
      <TableHeader />
      {logsForTable.map(log => (
        <TableRow log={log} />
      ))}
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: space-between;
`;
