import React from "react";
import styled from "styled-components";

import Colors from "theme/colors";

export default function CurrentIngredientComp() {
  return (
    <Container>
      <Label>현재 재료</Label>
      <CurrentContainer>
        <CurrentIngredient>돈목심</CurrentIngredient>
        <CurrentCategory>고기류</CurrentCategory>
      </CurrentContainer>
      <InventoryContainer>
        <InventoryLabel>현재 재고량</InventoryLabel>
        <InventoryValue>120kg</InventoryValue>
      </InventoryContainer>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  height: 150px;
  background-color: ${Colors.green_2};
  border-radius: 20px;
  margin: 30px 0;
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

const InventoryContainer = styled.div`
  display: flex;
  align-items: center;
`;

const InventoryLabel = styled.div`
  font-size: 16px;
  margin-right: 20px;
`;

const InventoryValue = styled.div`
  font-size: 40px;
`;
