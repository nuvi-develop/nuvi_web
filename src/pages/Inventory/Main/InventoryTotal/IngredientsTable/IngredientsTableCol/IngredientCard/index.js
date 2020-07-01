import React from "react";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import { useDrag } from "react-dnd";

import { actions } from "data";
import { DragItemTypes } from "constants/index";
import Colors from "theme/colors";
import { Row, Col, Button } from "theme/style";

export default function IngredientCard({ ingredient, isEditing }) {
  const dispatch = useDispatch();
  const { currentStock } = ingredient.InventoryLogs[0];
  const [{ isDragging }, drag] = useDrag({
    item: { type: DragItemTypes.INGREDIENT_CARD },
    collect: monitor => ({
      isDragging: !!monitor.isDragging()
    })
  });

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
    <IngredientContiner
      key={ingredient.id}
      currentStock={currentStock}
      ref={drag}
      isDragging={isDragging}
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
}

const IngredientContiner = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 130px;
  height: 70px;
  border-radius: 30px;
  margin: 5px;
  color: white;
  opacity: ${({ isDragging }) => (isDragging ? 0.5 : 1)};
  cursor: move;
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
