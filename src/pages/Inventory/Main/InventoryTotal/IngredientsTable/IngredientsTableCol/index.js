import React from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";

import { Row, Col, Button } from "theme/style";
import Colors from "theme/colors";
import { selectors } from "data";
import { IngredientCardOrderingMode } from "constants/index";

import { EditingContext } from "../../index";
import LinkLabel from "./LinkLabel";
import IngredientCard from "./IngredientCard";
import LinkIngredientCard from "./LinkIngredientCard";

export default function IngredientsTableColComp({ data }) {
  const { category, ingredients } = data;
  const currentOrderingMode = useSelector(
    selectors.inventory.getCurrentIngredientCardOrderingMode
  );
  const sortedIngredients = {
    [IngredientCardOrderingMode.CUSTOM.name]: ingredients
      .slice()
      .sort((a, b) => a.order - b.order),
    [IngredientCardOrderingMode.CURRENT_STOCK.name]: ingredients
      .slice()
      .sort(
        (a, b) =>
          a.InventoryLogs[0].currentStock - b.InventoryLogs[0].currentStock
      )
  };

  let Col = ({ isEditing }) => (
    <>
      <Label>{category.name}</Label>

      {sortedIngredients[currentOrderingMode.name].map((ingredient, index) => {
        const prevIngredient =
          index !== 0
            ? sortedIngredients[currentOrderingMode.name][index - 1]
            : { order: 0 };
        return (
          <IngredientCard
            key={ingredient.id}
            ingredient={ingredient}
            isEditing={isEditing}
            prevIngredient={prevIngredient}
          />
        );
      })}
    </>
  );

  if (category.name === "기타") {
    Col = ({ isEditing }) => (
      <>
        {" "}
        <LinkLabel>{category.name}</LinkLabel>
        {sortedIngredients[currentOrderingMode.name].map(
          (ingredient, index) => {
            const prevIngredient =
              index !== 0
                ? sortedIngredients[currentOrderingMode.name][index - 1]
                : { order: 0 };
            return (
              <LinkIngredientCard
                key={ingredient.id}
                ingredient={ingredient}
                isEditing={isEditing}
                prevIngredient={prevIngredient}
              />
            );
          }
        )}
      </>
    );
  }

  return (
    <EditingContext.Consumer>
      {props => (
        <Container>
          <Col {...props} />
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

const ColBody = styled.div`
  max-height: 550px;
  overflow: scroll;
`;
