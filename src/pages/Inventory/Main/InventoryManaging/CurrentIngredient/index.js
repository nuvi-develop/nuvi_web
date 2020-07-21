import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import styled from "styled-components";

import { selectors, actions } from "data";
import Colors from "theme/colors";
import { numberWithCommas } from "utils/numbers";

import CostOfUsed from "./CostOfUsed";

export default function CurrentIngredientComp() {
  const dispatch = useDispatch();

  const costStockInfo = useSelector(
    selectors.inventory.getStockCostInfoForCurrentStock
  );
  const currentIngredient = useSelector(
    selectors.inventory.getCurrentIngredient
  );
  const ingredientUnit = useSelector(
    selectors.inventory.getCurrentIngredientUnitName
  );

  const stockAverageCost = useSelector(selectors.inventory.getStockAverageCost);
  const stockAverageCostFixed2 = stockAverageCost
    ? stockAverageCost.toFixed(2)
    : null;

  const unit = ingredientUnit ? ingredientUnit : "kg";
  const currentStock = currentIngredient?.InventoryLogs[0]?.currentStock || 0;

  const onClickDetailHandler = () =>
    dispatch(actions.modal.setModal({ modalType: "COST_STOCK_DETAIL" }));
  return (
    <Container>
      {currentIngredient ? (
        <>
          <Label>현재 재료</Label>
          <CurrentContainer>
            <CurrentIngredient>{currentIngredient.name}</CurrentIngredient>
            <CurrentCategory>
              {currentIngredient.InventoryCategory.name}
            </CurrentCategory>
          </CurrentContainer>
          {costStockInfo && <CostOfUsed costStockInfo={costStockInfo} />}
          <CostStockContainer onClick={onClickDetailHandler}>
            <InventoryContainer>
              <InventoryLabel>현재 재고량</InventoryLabel>
              <InventoryValue>{numberWithCommas(currentStock)}</InventoryValue>
              <UnitText>{unit}</UnitText>
            </InventoryContainer>
            <InventoryContainer>
              <InventoryLabel>재고량 평균단가</InventoryLabel>
              <InventoryValue>
                {numberWithCommas(stockAverageCostFixed2)}
              </InventoryValue>
              <UnitText>(원/{unit})</UnitText>
            </InventoryContainer>
          </CostStockContainer>
        </>
      ) : (
        <Label>재료를 선택해 주세요</Label>
      )}
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  height: 100px;
  background-color: ${Colors.green_2};
  border-radius: 20px;
  margin: 10px 0;

  @media (min-width: 1200px) {
    height: 20%;
  }
`;

const Label = styled.div`
  font-size: 24px;
`;

const CurrentContainer = styled.div`
  display: flex;
  align-items: center;
`;

const CurrentIngredient = styled.div`
  font-size: 40px;
  margin-right: 20px;
`;

const CurrentCategory = styled.div`
  font-size: 32px;
  color: ${Colors.gray_1};
`;

const CostStockContainer = styled.div`
  display: flex;
  flex-direction: column;
  cursor: pointer;
  background-color: ${Colors.green_1};
  border-radius: 10px;
  padding: 5px 10px;
`;

const InventoryContainer = styled.div`
  display: flex;
  align-items: center;
`;

const InventoryLabel = styled.div`
  font-size: 16px;
  margin-right: 20px;
`;

const UnitText = styled.div`
  font-size: 16px;
  color: ${Colors.gray_1};
  margin-left: 10px;
`;

const InventoryValue = styled.div`
  font-size: 40px;
`;
