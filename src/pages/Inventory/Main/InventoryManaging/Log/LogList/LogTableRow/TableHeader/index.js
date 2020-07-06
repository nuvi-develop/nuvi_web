import React from "react";

import { useSelector } from "react-redux";
import styled from "styled-components";

import { selectors } from "data";

export default function TableHeader() {
  const ingredientUnit = useSelector(
    selectors.inventory.getCurrentIngredientUnitName
  );
  const unit = ingredientUnit ? ingredientUnit : "kg";

  return (
    <Container>
      <LabelContainer>
        <Label>날짜</Label>
      </LabelContainer>
      <LabelContainer>
        <Label>주문량 ({unit})</Label>
      </LabelContainer>
      <LabelContainer>
        <Label>사용량 ({unit})</Label>
      </LabelContainer>
      <LabelContainer>
        <Label>재고량 ({unit})</Label>
      </LabelContainer>
      <LabelContainer>
        <Label>비용 (원/단위)</Label>
      </LabelContainer>
      <LabelContainer>
        <Label>비고</Label>
      </LabelContainer>
    </Container>
  );
}

const Container = styled.div`
  display: grid;
  grid-template-columns: 25% 15% 15% 15% 15% 15%;
  gap: 1px;
  justify-items: stretch;
  margin: 10px 0;
`;

const LabelContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Label = styled.div``;
