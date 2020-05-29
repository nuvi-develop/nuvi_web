import React from "react";
import styled from "styled-components";

import Colors from "theme/colors";

export default function IngredientComp({ ingredient }) {
  return <Container>{ingredient.name}</Container>;
}

const Container = styled.div`
  margin: 10px;
  padding: 10px;
  border-radius: 20px;
  background-color: ${Colors.blue_2};
  color: white;
  cursor: pointer;
`;
