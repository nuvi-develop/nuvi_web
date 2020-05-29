import React from "react";
import styled from "styled-components";

import { Row } from "theme/style";
import TableCol from "./TableCol";

const mockData = {
  recordDate: ["5월 7일", "5월 8일", "5월 9일", "5월10일"],
  order: [100, 100, 100, 100],
  use: [100, 100, 100, 100],
  cost: [1500, 1500, 1500, 1500]
};
export default function LogTable() {
  return (
    <Container>
      <TableCol label="날짜" data={mockData.recordDate} />
      <TableCol label="주문량 (kg)" data={mockData.order} />
      <TableCol label="사용량 (kg)" data={mockData.use} />
      <TableCol label="비용 (원/단위)" data={mockData.cost} />
    </Container>
  );
}

const Container = styled(Row)`
  justify-content: space-between;
  margin: 20px 10px;
`;
