import React from "react";
import styled from "styled-components";

import Ingredient from "./Ingredient";

export default function SearchListComp({ searchList }) {
  return (
    <Container>
      {searchList.map(ingredient => (
        <Ingredient ingredient={ingredient} key={ingredient.name} />
      ))}
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: flex-start;
  height: 200px;
  //   background-color: gray;
`;
