import React from "react";
import styled from "styled-components";

import DatePicker from "components/Input/DatePicker";

export default function DateFilter({ title }) {
  return (
    <Container>
      <FilterTitle>{title}</FilterTitle>
      <DatePicker dateFormat="yyyy년 MM월 dd일" />
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: stretch;
  width: 100%;
  max-width: 400px;
`;

const FilterTitle = styled.h2`
  color: white;
`;
