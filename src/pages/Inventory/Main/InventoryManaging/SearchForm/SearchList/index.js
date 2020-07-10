import React from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";

import { selectors } from "data";

import Ingredient from "./Ingredient";

export default function SearchListComp({ searchList }) {
  const isCurrentIngredientExist =
    useSelector(selectors.inventory.getCurrentIngredient) !== null;
  return (
    <Container isCurrentIngredientExist={isCurrentIngredientExist}>
      {searchList.map(ingredient => (
        <Ingredient ingredient={ingredient} key={ingredient.id} />
      ))}
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: flex-start;
  align-content: flex-start;
  height: ${({ isCurrentIngredientExist }) =>
    isCurrentIngredientExist ? "145px" : "300px"};

  overflow: scroll;
  padding: 3px;
  border-radius: 10px;
  border: 1px solid gray;
  margin-bottom: 5px;
`;
