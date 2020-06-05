import React from "react";
import styled from "styled-components";

import { Row, Col } from "theme/style";
import Colors from "theme/colors";

export default function IngredientsTableColComp({ data }) {
  const { category, ingredients } = data;

  return (
    <Container>
      <Label>{category.name}</Label>
      {ingredients
        .slice()
        .sort((a, b) => a.InventoryLogs[0].stock - b.InventoryLogs[0].stock)
        .map(ingredient => {
          const { stock } = ingredient.InventoryLogs[0];
          return (
            <IngredientContiner key={ingredient.id} stock={stock}>
              <IngredientName> {ingredient.name}</IngredientName>
              <IngredientStock>{stock}</IngredientStock>
            </IngredientContiner>
          );
        })}
    </Container>
  );
}

const Container = styled(Col)`
  align-items: center;
`;

const Label = styled.div`
  font-size: 40px;
  color: ${Colors.gray_1};
`;

const IngredientContiner = styled(Col)`
  justify-content: center;
  align-items: center;
  width: 150px;
  height: 70px;
  border-radius: 30px;
  margin: 10px;
  color: white;
  background-color: ${({ stock }) => {
    if (stock < 20) {
      return Colors.pink;
    } else if (stock < 50) {
      return Colors.yellow;
    } else {
      return Colors.green_deep_1;
    }
  }};
`;

const IngredientName = styled(Row)``;

const IngredientStock = styled.div`
  margin-top: 3px;
`;
