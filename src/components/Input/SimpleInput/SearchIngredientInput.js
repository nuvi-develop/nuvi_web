import React from "react";
import { useDispatch, useSelector } from "react-redux";

import { actions, selectors } from "data";

import SimpleInput from "./index";

export default function SearchIngredientInput(props) {
  const dispatch = useDispatch();
  const searchingInfo = useSelector(
    selectors.inventory.getCurrentSearchingInfo
  );

  const onChange = newValue => {
    dispatch(actions.inventory.setCurrentSearchingIngredient(newValue));
  };

  return (
    <SimpleInput
      initialValue={searchingInfo.ingredientName}
      onChange={onChange}
      {...props}
    />
  );
}
