import React from "react";
import styled from "styled-components";

import Compare from "./Compare";
import FavFood from "./FavFood";
import FavNotFood from "./FavNotFood";
import LeftOver from "./LeftOver";
import MadeTooMuch from "./MadeTooMuch";
import FilterContainer from "./FilterContainer";

export default function Total() {
  return (
    <TotalContainer>
      <FilterContainer />
      <MainContainer>
        <FavFood />
        <FavNotFood />
      </MainContainer>
      <MainContainer>
        <LeftOver />
        <MadeTooMuch />
        <Compare />
      </MainContainer>
    </TotalContainer>
  );
}

const TotalContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: stretch;
  align-content: center;

  @media (min-width: 1200px) {
    flex-direction: row;
    flex-wrap: wrap;
  }
`;

const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  background-color: white;
  border-radius: 10px;
  padding: 5px;
  margin-bottom: 10px;
  flex: 1;

  @media (min-width: 1200px) {
    height: 80vh;
    padding: 20px;
    &:last-child {
      margin-left: 1vh;
    }
  }
`;
