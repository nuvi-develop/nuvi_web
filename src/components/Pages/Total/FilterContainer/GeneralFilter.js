import React from "react";
import styled from "styled-components";

import LunchDinnerPicker from "./LunchDinnerPicker";

export default function DateFilter({ title }) {
  return (
    <Container>
      <FilterTitle>{title}</FilterTitle>
      <LunchDinnerPicker />
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 400px;
`;

const FilterTitle = styled.div`
  font-size: 20px;
  color: white;
`;
