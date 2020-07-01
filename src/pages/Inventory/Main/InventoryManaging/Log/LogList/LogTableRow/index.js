import React from "react";
import styled from "styled-components";

import TableHeader from "./TableHeader";
import TableRow from "./TableRow";

export default function LogTable({ logsForTable }) {

  return (
    <Container>
      <TableHeader />
      {logsForTable.map(log => (

        <TableRow key={log.id} log={log} />
      ))}
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: space-between;
`;
