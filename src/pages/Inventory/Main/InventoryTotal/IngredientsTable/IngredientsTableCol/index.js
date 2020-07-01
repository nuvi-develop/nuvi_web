import React from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";

import { actions } from "data";
import { Row, Col, Button } from "theme/style";
import Colors from "theme/colors";
import api from "api";

import { EditingContext } from "../../index";

export default function IngredientsTableColComp({ data }) {
  const dispatch = useDispatch();
  const { category, ingredients } = data;
  const onDeleteHandler = async ({ id }) => {
    dispatch(
      actions.modal.setModal({
        modalType: "CONDITIONAL",
        modalProps: {
          contents: "해당 재료를 제거하시겠습니까?",
          onClick: () => {
            dispatch(actions.inventory.deleteIngredient({ id }));
            dispatch(actions.modal.clearModal());
          },
          buttonName: "제거"
        }
      })
    );
  };

  return (
    <EditingContext.Consumer>
      {({ isEditing, setIsEditing }) => (
        <Container>
          <Label>{category.name}</Label>
          {ingredients
            .slice()
            .sort(
              (a, b) =>
                a.InventoryLogs[0].currentStock -
                b.InventoryLogs[0].currentStock
            )
            .map(ingredient => {
              const { currentStock } = ingredient.InventoryLogs[0];

              return (
                <IngredientContiner
                  key={ingredient.id}
                  currentStock={currentStock}
                >
                  <IngredientName> {ingredient.name}</IngredientName>
                  <IngredientStock>{currentStock}</IngredientStock>
                  {isEditing && (
                    <DeleteButton
                      onClick={onDeleteHandler.bind(this, {
                        id: ingredient.id
                      })}
                    >
                      지우기
                    </DeleteButton>
                  )}
                </IngredientContiner>
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

const IngredientContiner = styled(Col)`
  justify-content: center;
  align-items: center;
  width: 130px;
  height: 70px;
  border-radius: 30px;
  margin: 5px;
  color: white;
  background-color: ${({ currentStock }) => {
    if (currentStock < 20) {
      return Colors.pink;
    } else if (currentStock < 50) {
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

const DeleteButton = styled(Button)`
  font-size: 16px;
  padding: 2px 4px;
  cursor: pointer;
  border: solid 1px ${Colors.gray_1};
  border-radius: 20px;
  margin-left: 5px;
`;
