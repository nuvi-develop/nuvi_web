import React, { useRef } from "react";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import { useDrag, useDrop, DragPreviewImage } from "react-dnd";

import { actions } from "data";
import { DragItemTypes } from "constants/index";
import Colors from "theme/colors";
import { Row, Col, Button } from "theme/style";

const movingCardImage =
  process.env.PUBLIC_URL + "/images/ingredientMovingCard.svg";

export default function IngredientCard({
  ingredient,
  isEditing,
  prevIngredient
}) {
  const ingredientTargetContainer = useRef();
  const ingredientCardRef = useRef();
  const dispatch = useDispatch();
  const { currentStock } = ingredient.InventoryLogs[0];

  const [{ isDragging }, connectDrag, preview] = useDrag({
    item: {
      type: DragItemTypes.ingredientCardCategoryOf(
        ingredient.InventoryCategoryId
      ),
      movingIngredientId: ingredient.id
    },
    collect: monitor => ({
      isDragging: !!monitor.isDragging()
    })
  });

  const [{ isOver }, connectDrop] = useDrop({
    accept: DragItemTypes.ingredientCardCategoryOf(
      ingredient.InventoryCategoryId
    ),
    drop: item => {
      const targetIngredientOrder = ingredient.order;
      const prevIngredientOrder = prevIngredient.order;
      const middleOrder = (targetIngredientOrder + prevIngredientOrder) / 2;
      const movingInfo = {
        movingIngredientId: item.movingIngredientId,
        newOrder: middleOrder
      };
      dispatch(actions.inventory.moveIngredientCard(movingInfo));
    },
    collect: monitor => ({
      isOver: !!monitor.isOver()
    })
  });

  connectDrag(ingredientCardRef);
  connectDrop(ingredientTargetContainer);

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
    <>
      <DragPreviewImage connect={preview} src={movingCardImage} />
      <IngredientTargetContainer ref={ingredientTargetContainer}>
        <IngredientPlaceholder isOver={isOver} />
        <IngredientContainer
          currentStock={currentStock}
          ref={ingredientCardRef}
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
        </IngredientContainer>
      </IngredientTargetContainer>
    </>
  );
}

const IngredientContainer = styled.div`
  display: ${({ isDragging }) => (isDragging ? "none" : "flex")};
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 130px;
  height: 70px;
  border-radius: 30px;
  margin: 0 5px;
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

const IngredientTargetContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const IngredientPlaceholder = styled.div`
  width: 130px;
  height: ${({ isOver }) => (isOver ? "70px" : "0")};
  border: ${({ isOver }) => (isOver ? "3px dotted" : "none")};
  margin: 5px 0;
  border-radius: 30px;
  background-color: ${({ isOver }) => (isOver ? "yellow" : null)};
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
