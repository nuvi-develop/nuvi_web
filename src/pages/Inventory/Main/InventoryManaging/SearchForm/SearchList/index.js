import React from "react";
import styled from "styled-components";

import Ingredient from "./Ingredient";

export default function SearchListComp({ searchList }) {
  return (
    <Container>
      {searchList.map(ingredient => (
        <Ingredient ingredient={ingredient} key={ingredient.id} />
      ))}
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: flex-start;
  align-content: flex-start;
  min-height: 150px;
`;
