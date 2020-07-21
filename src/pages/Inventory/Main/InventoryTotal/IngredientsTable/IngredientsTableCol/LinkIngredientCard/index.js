import React from "react";
import { useDispatch } from "react-redux";

import { actions } from "data";
import IngredientCard from "../IngredientCard";

export default function LinkIngredientCard(props) {
  const dispatch = useDispatch();
  const { ingredient } = props;

  const onClickLinkIngredientHandler = () => {
    dispatch(
      actions.modal.setModal({
        modalType: "ETC_INGREDIENTS",
        modalProps: { ingredient }
      })
    );
  };
  return (
    <div onClick={onClickLinkIngredientHandler}>
      <IngredientCard {...props} />
    </div>
  );
}
