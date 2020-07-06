import React from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";

import { actions, selectors } from "data";
import { IngredientCardOrderingMode } from "constants/index";

export default function Ordering() {
  const dispatch = useDispatch();
  const currentOrderingMode = useSelector(
    selectors.inventory.getCurrentIngredientCardOrderingMode
  );

  const orderingModeKeys = Object.keys(IngredientCardOrderingMode);

  return (
    <FilterContainer>
      {orderingModeKeys.map(orderingModeKey => {
        const orderingMode = IngredientCardOrderingMode[orderingModeKey];
        const isSame = currentOrderingMode.name === orderingMode.name;
        return (
          <FilterItem
            key={orderingMode.name}
            isSame={isSame}
            onClick={() =>
              dispatch(
                actions.inventory.setCurrentIngredientCardFilteringMode(
                  orderingMode
                )
              )
            }
          >
            {orderingMode.label}
          </FilterItem>
        );
      })}
    </FilterContainer>
  );
}

const FilterContainer = styled.div`
  display: flex;
`;

const FilterItem = styled.div`
  cursor: pointer;
  margin: 10px;
  background-color: ${({ isSame, theme }) => (isSame ? theme.gray_2 : null)};
  border-radius: 10px;
  padding 10px;
`;
