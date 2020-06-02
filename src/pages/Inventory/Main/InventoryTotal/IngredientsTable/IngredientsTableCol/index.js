import React from "react";
import styled from "styled-components";

import { Row, Col } from "theme/style";
import Colors from "theme/colors";

export default function IngredientsTableColComp({ data }) {
  const { category, ingredients } = data;
  return (
    <Container>
      <Label>{category}</Label>
      {ingredients.map(ingredient => (
        <Ingredient inventory={ingredient.inventory}>
          {ingredient.name}
        </Ingredient>
      ))}
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

const Ingredient = styled(Row)`
  justify-content: center;
  align-items: center;
  width: 150px;
  height: 70px;
  border-radius: 30px;
  margin: 20px;
  color: white;
  background-color: ${({ inventory }) => {
    if (inventory < 70) {
      return Colors.pink;
    } else if (inventory < 150) {
      return Colors.yellow;
    } else {
      return Colors.green_deep_1;
    }
  }};
`;
