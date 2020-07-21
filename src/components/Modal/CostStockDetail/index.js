import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import styled from "styled-components";

import { selectors, actions } from "data";
import Colors from "theme/colors";
import CostStockStackedChart from "components/Charts/CostStockStackedChart";

export default function CostStockDetail() {
  const dispatch = useDispatch();
  const costStockInfo = useSelector(
    selectors.inventory.getStockCostInfoForCurrentStock
  );

  const ingredientUnit = useSelector(
    selectors.inventory.getCurrentIngredientUnitName
  );
  const unit = ingredientUnit ? ingredientUnit : "kg";
  const { orderCostList, currentStock, averageCost } = costStockInfo;

  const orderCostListLength = orderCostList.length;

  return (
    <Container>
      <Header>
        <Title>재고 / 비용 현황</Title>

        <ExitButton onClick={() => dispatch(actions.modal.clearModal())}>
          나가기
        </ExitButton>
      </Header>
      <ExplainText>
        현재 재고량 {currentStock} {unit} 은 최근 {orderCostListLength} 번의
        주문내역중 사용되지 않는 것의 합이며, 현재 재고의 평균 주문비용은{" "}
        {averageCost.toFixed(2)} 원/{unit} 입니다.
      </ExplainText>
      <CostStockStackedChart data={orderCostList} />
    </Container>
  );
}

const Container = styled.div`
  width: 90%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: white;
  border: 1px solid ${Colors.gray_1};
  border-radius: 10px;
`;

const Header = styled.div`
  display: flex;
  align-self: stretch;
  justify-content: space-between;
`;

const Title = styled.div`
  align-self: flex-start;
  marging: 10px;
  padding: 10px;
  font-size: 24px;
`;

const ExplainText = styled.div``;

const ExitButton = styled.div`
  margin: 10px;
  cursor: pointer;
  background-color: ${Colors.green_1};
  padding: 10px;
  margin: 3px;
  border-radius: 10px;
`;
