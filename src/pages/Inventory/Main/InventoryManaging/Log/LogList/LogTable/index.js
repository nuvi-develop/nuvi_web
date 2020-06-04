import React from "react";
import { useSelector } from "react-redux";

import styled from "styled-components";

import { selectors } from "data";
import { reduceForTable } from "utils/pages/inventory";
import { Row } from "theme/style";
import TableCol from "./TableCol";

export default function LogTable() {
  const logs = useSelector(selectors.inventory.getCurrentIngredientLogs);
  const logsForTable = reduceForTable(logs);
  return (
    <Container>
      <TableCol label="날짜" data={logsForTable.recordDate} />
      <TableCol label="주문량 (kg)" data={logsForTable.order} />
      <TableCol label="사용량 (kg)" data={logsForTable.use} />
      <TableCol label="비용 (원/단위)" data={logsForTable.cost} />
    </Container>
  );
}

const Container = styled(Row)`
  justify-content: space-between;
  margin: 20px 10px;
`;
