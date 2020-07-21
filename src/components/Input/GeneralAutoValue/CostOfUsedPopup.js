import React from "react";
import styled from "styled-components";
import { format } from "date-fns";

import Colors from "theme/colors";

export default function CostOfUsedPopup({ autoCalculatedCostInfo }) {
  const { usingOrder } = autoCalculatedCostInfo;
  const usingOrderLength = usingOrder?.length;

  return (
    <Container usingOrderLength={usingOrderLength}>
      <Title>계산에 사용된 주문 내역</Title>
      <ItemContainer>
        <Item>날짜</Item>
        <Item>주문량</Item>
        <Item>남은량</Item>
        <Item>주문비용</Item>
      </ItemContainer>
      {usingOrder &&
        usingOrder.map(usingOrderData => {
          const { recordDate, order, left, used, cost } = usingOrderData;
          const formatedDate = format(new Date(recordDate), "MM/dd");
          return (
            <ItemContainer>
              <Item>{formatedDate}</Item>
              <Item>{order}</Item>
              <Item>{left}</Item>
              <Item>{cost}</Item>
            </ItemContainer>
          );
        })}
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;

  background-color: ${Colors.gray_2};
  z-index: 1;
  position: absolute;
  bottom: 101%;
  left: 0;
  border-radius: 10px;
  padding: 10px;
`;

const Title = styled.div`
  font-size: 24px;
`;

const ItemContainer = styled.div`
  display: flex;
  justify-content: space-between;

  border-radius: 10px;
  padding: 3px;
`;

const Item = styled.div`
  width: 80px;
  text-align: center;
`;
