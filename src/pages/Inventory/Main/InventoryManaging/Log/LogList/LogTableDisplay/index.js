import React from "react";
import styled from "styled-components";

import { Row } from "theme/style";
import TableCol from "../TableCol";

export default function LogTableDisplay({ logsForTable }) {
  return (
    <Container>
      <TableCol label="날짜" data={logsForTable.recordDate} name="recordDate" />
      <TableCol label="주문량 (kg)" data={logsForTable.order} name="order" />
      <TableCol label="사용량 (kg)" data={logsForTable.use} name="use" />
      <TableCol label="비용 (원/단위)" data={logsForTable.cost} name="cost" />
    </Container>
  );
}

const Container = styled(Row)`
  justify-content: space-between;
  margin: 20px 10px;
`;
