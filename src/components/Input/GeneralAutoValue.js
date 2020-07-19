import React, { useEffect } from "react";
import { useSelector } from "react-redux";

import styled from "styled-components";
import { useField } from "formik";

import Colors from "theme/colors";
import { selectors } from "data";

export default function GeneralAutoValue(props) {
  const { autoCalculatedCostInfo } = props;
  const { averageCostForUsed, used } = autoCalculatedCostInfo;

  const currentStock = useSelector(selectors.inventory.getCurrentStock);
  let showAutoCalculatedCost;

  showAutoCalculatedCost = averageCostForUsed.toFixed(2);

  if (!averageCostForUsed) {
    showAutoCalculatedCost = "사용량 입력필요";
  }
  if (currentStock < used) {
    showAutoCalculatedCost = "사용량이 재고량보다 많습니다.";
  }

  return (
    <Container>
      <Label>{props.label}</Label>
      <ValueLabel>{showAutoCalculatedCost}</ValueLabel>
      <ErrorPlaceHolder></ErrorPlaceHolder>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  margin: 0px 10px;
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
