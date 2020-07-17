import React from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";

import { DropdownInput } from "components";
import SearchIngredientInput from "components/Input/SimpleInput/SearchIngredientInput";
import { selectors } from "data";

import SearchList from "./SearchList";
import AddIngredient from "./AddIngredient";

export default function SearchFormComp() {
  const categories = useSelector(selectors.inventory.getCategories);
  const ingredients = useSelector(selectors.inventory.getIngredients);

  return (
    <Container>
      <SearchIngredientInput label="재료명으로 검색" />
      <DropdownInput label="분류로 검색" options={categories} />
      <AddIngredient label="재료 추가" />
      <SearchList searchList={ingredients} />
    </Container>
  );
}

const Container = styled.div`
  height: 50%;
`;
