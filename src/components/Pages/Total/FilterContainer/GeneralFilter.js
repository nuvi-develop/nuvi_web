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
  max-width: 400px;
`;

const FilterTitle = styled.h2`
  color: white;
`;
