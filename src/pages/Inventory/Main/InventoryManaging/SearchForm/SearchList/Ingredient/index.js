import React from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";

import { actions } from "data";
import Colors from "theme/colors";

export default function IngredientComp({ ingredient }) {
  const dispatch = useDispatch();
  const onIngredientClickHandler = () => {
    dispatch(actions.inventory.setCurrentIngredient(ingredient));
  };
  return (
    <Container onClick={onIngredientClickHandler}>
      <IngredientName>{ingredient.name}</IngredientName>
      <Category>{ingredient.InventoryCategory.name}</Category>
    </Container>
  );
}
const Category = styled.div`
  color: ${({ theme }) => theme.gray_1};
  font-size: 10px;
  margin-top: 2px;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 10px;
  padding: 10px;
  border-radius: 20px;
  background-color: ${Colors.blue_2};
  cursor: pointer;

  &: hover {
    background-color: ${({ theme }) => theme.blue_1};

    ${Category} {
      color: ${({ theme }) => theme.gray_2};
    }
  }
`;

const IngredientName = styled.div`
  color: white;
  font-size: 16px;
`;
