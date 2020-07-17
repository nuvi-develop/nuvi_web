import React from "react";
import { useDispatch, useSelector } from "react-redux";

import { actions, selectors } from "data";

import SimpleInput from "./index";

export default function SearchEtcIngredientInput(props) {
  const dispatch = useDispatch();
  const searchingEtcText = useSelector(
    selectors.inventory.getCurrentEtcSearchText
  );

  const onChange = newValue => {
    dispatch(actions.inventory.setCurrentSearchingEtcIngredient(newValue));
  };

  return (
    <SimpleInput
      initialValue={searchingEtcText}
      onChange={onChange}
      {...props}
    />
  );
}
