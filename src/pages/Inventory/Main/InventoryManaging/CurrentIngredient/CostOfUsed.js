import React from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import { format } from "date-fns";

import { selectors } from "data";
import Colors from "theme/colors";

export default function CostOfUsed({ costStockInfo }) {
  const { orderCostList } = costStockInfo;

  const sameCostMergedOrderCost = orderCostList.reduce((result, orderCost) => {
    const { left, cost } = orderCost;
    result[cost] = result[cost] ? result[cost] + left : left;
    return result;
  }, {});

  return (
    <Container>
      <ItemContainer>
        <Item>주문비용</Item>
        <Item>남은량</Item>
      </ItemContainer>
      {Object.keys(sameCostMergedOrderCost).map(key => {
        return (
          <ItemContainer key={key}>
            <Item>{key}</Item>
            <Item>{sameCostMergedOrderCost[key]}</Item>
          </ItemContainer>
        );
      })}
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100px;
  background-color: ${Colors.gray_2};
  overflow: scroll;
  border-radius: 10px;
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
