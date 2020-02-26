import React from "react";
import styled from "styled-components";

export default function Filter({ title }) {
  return (
    <Container>
      <FilterTitle>{title}</FilterTitle>
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
