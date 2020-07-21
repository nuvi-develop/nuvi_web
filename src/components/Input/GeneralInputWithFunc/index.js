import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import { useField } from "formik";

import Colors from "theme/colors";
import { selectors } from "data";
import { getCostOfUsed } from "utils/calculator";

export default function GeneralInputWithFuncComp(props) {
  const stockCostInfo = useSelector(
    selectors.inventory.getStockCostInfoForCurrentStock
  );

  const [field, meta] = useField(props);
  const { value } = field;
  const { setAutoCalculatedCostInfo } = props;

  useEffect(() => {
    const orderCostList = stockCostInfo?.orderCostList;
    const costOfUsed = getCostOfUsed({ orderCostList, usedValue: value });

    if (costOfUsed) {
      const { averageCostForUsed, usingOrder } = costOfUsed;
      setAutoCalculatedCostInfo({
        averageCostForUsed,
        usingOrder,
        used: value
      });
    }
  }, [value, stockCostInfo]);
  return (
    <Container>
      <Label>{props.label}</Label>
      <StyledInput {...field} {...props} />
      <ErrorPlaceHolder>
        {meta.touched && meta.error && <div>{meta.error}</div>}
      </ErrorPlaceHolder>
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

const StyledInput = styled.input`
  outline: none;
  width: 100px;
  border: ;
  text-align: center;
`;

const Placeholder = styled.div`
  height: 40px;
`;

const ErrorPlaceHolder = styled.div`
  margin-top: 5px;
  height: 16px;
  font-size: 16px;
  color: ${Colors.green_2};
`;
