import React from "react";
import styled from "styled-components";

import { Row, Col, Button } from "theme/style";
import Colors from "theme/colors";
import IngredientCard from "./IngredientCard";

import { EditingContext } from "../../index";

export default function IngredientsTableColComp({ data }) {
  const { category, ingredients } = data;

  const orderAddedIngredients = ingredients.map((ingredient, index) => ({
    ...ingredient,
    order: index
  }));

  return (
    <EditingContext.Consumer>
      {({ isEditing, setIsEditing }) => (
        <Container>
          <Label>{category.name}</Label>
          {orderAddedIngredients
            .slice()
            .sort((a, b) => a.order - b.order)
            .map(ingredient => (
              <IngredientCard ingredient={ingredient} isEditing={isEditing} />
            ))}
        </Container>
      )}
    </EditingContext.Consumer>
  );
}

const Container = styled(Col)`
  align-items: center;
  flex: 1;
`;

const Label = styled.div`
  text-align: center;
  font-size: 20px;
  width: 130px;
  color: ${Colors.gray_1};
`;
