import React from "react";
import styled from "styled-components";

import DatePicker from "./DatePicker";

export default function DateFilter({ title }) {
  return (
    <Container>
      <FilterTitle>{title}</FilterTitle>
      <DatePicker />
    </Container>
  );
}

const Container = styled.div`
  width: 400px;
`;

const FilterTitle = styled.div`
  font-size: 20px;
  color: white;
`;
