import React from "react";
import styled from "styled-components";

import {
  Navigation,
  FilterContainer,
  FavFood,
  FavNotFood,
  LeftOver,
  MadeTooMuch,
  Compare
} from "components";
import Colors from "theme/colors";

const compare = "/icons/compare.svg";

export default function Total() {
  return (
    <DefaultLayout>
      <Navigation initialTab="TOTAL" />
      <TotalContainer>
        <FilterContainer />
        <MainContainer style={{ gridColumn: "1/3", gridRow: "2/6" }}>
          <FavFood />
          <FavNotFood />
        </MainContainer>
        <MainContainer style={{ gridColumn: "3/5", gridRow: "2/6" }}>
          <LeftOver />
          <MadeTooMuch />
          <Compare />
        </MainContainer>
      </TotalContainer>
    </DefaultLayout>
  );
}

const DefaultLayout = styled.div`
  display: flex;
  heigh: 100vh;
  background-color: ${Colors.gray_2};
`;

const TotalContainer = styled.div`
  display: grid;
  width: 100%;
  height: 100vh;
  grid-template-rows: repeat(5, 1fr);
  grid-template-columns: repeat(4, 1fr);
  gap: 30px;
  margin: 0 30px;
`;

const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  background-color: white;
  border-radius: 10px;
  padding: 20px;
  margin-bottom: 30px;
`;
