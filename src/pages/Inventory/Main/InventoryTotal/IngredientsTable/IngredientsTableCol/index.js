import React from "react";
import styled from "styled-components";

import { Row, Col, Button } from "theme/style";
import Colors from "theme/colors";
import IngredientCard from "./IngredientCard";

import { EditingContext } from "../../index";

export default function IngredientsTableColComp({ data }) {
  const { category, ingredients } = data;
  const sortedIngredients = ingredients
    .slice()
    .sort((a, b) => a.order - b.order);

  return (
    <EditingContext.Consumer>
      {({ isEditing, setIsEditing }) => (
        <Container>
          <Label>{category.name}</Label>
          {sortedIngredients.map((ingredient, index) => {
            const prevIngredient =
              index !== 0 ? sortedIngredients[index - 1] : { order: 0 };
            return (
              <IngredientCard
                key={ingredient.id}
                ingredient={ingredient}
                isEditing={isEditing}
                prevIngredient={prevIngredient}
              />
            );
          })}
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
