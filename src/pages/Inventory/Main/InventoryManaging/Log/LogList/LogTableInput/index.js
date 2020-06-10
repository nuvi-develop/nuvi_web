import React from "react";
import styled from "styled-components";

import { Row } from "theme/style";
import TableCol from "../TableCol";

export default function LogTableInputComp({ logsForTable }) {
  return (
    <Container>
      <TableCol label="날짜" data={logsForTable.recordDate} />
    </Container>
  );
}

const Container = styled(Row)`
  justify-content: space-between;
  margin: 20px 10px;
`;
