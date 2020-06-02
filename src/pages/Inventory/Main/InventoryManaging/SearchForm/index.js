import React from "react";
import { useSelector } from "react-redux";

import { SimpleInput, AddInput, DropdownInput } from "components";
import { selectors } from "data";

import SearchList from "./SearchList";

export default function SearchFormComp() {
  const categories = useSelector(selectors.inventory.getCategories);
  const ingredients = useSelector(selectors.inventory.getIngredients);

  return (
    <>
      <SimpleInput label="재료명으로 검색" />
      <DropdownInput label="분류로 검색" options={categories} />
      <AddInput label="재료 추가" />
      <SearchList searchList={ingredients} />
    </>
  );
}
