import React, { useState } from "react";
import { useSelector } from "react-redux";

import styled from "styled-components";

import Colors from "theme/colors";
import { selectors } from "data";

import CostOfUsedPopup from "./CostOfUsedPopup";

export default function GeneralAutoValue(props) {
  const [popup, setPopup] = useState(false);
  const { autoCalculatedCostInfo } = props;
  const { averageCostForUsed, used } = autoCalculatedCostInfo;

  const currentStock = useSelector(selectors.inventory.getCurrentStock);
  let showAutoCalculatedCost;

  showAutoCalculatedCost = averageCostForUsed.toFixed(2);

  if (!averageCostForUsed) {
    showAutoCalculatedCost = "사용량 입력필요";
  }
  if (+currentStock < +used) {
    showAutoCalculatedCost = "사용량이 재고량보다 많습니다.";
  }

  return (
    <Container
      onMouseOver={() => setPopup(true)}
      onMouseLeave={() => setPopup(false)}
    >
      <Label>{props.label}</Label>
      <ValueLabel>{showAutoCalculatedCost}</ValueLabel>
      <ErrorPlaceHolder></ErrorPlaceHolder>
      {popup && !!averageCostForUsed && (
        <CostOfUsedPopup autoCalculatedCostInfo={autoCalculatedCostInfo} />
      )}
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  margin: 0px 10px;
  position: relative;
`;

const Label = styled.div`
  font-size: 16px;
  margin-bottom: 20px;
`;

const ValueLabel = styled.div`
  width: 130px;
  text-align: center;
`;

const ErrorPlaceHolder = styled.div`
  margin-top: 5px;
  height: 16px;
  font-size: 16px;
  color: ${Colors.green_2};
`;
