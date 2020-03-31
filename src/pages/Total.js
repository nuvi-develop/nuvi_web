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

export default function Total() {
  const tabs = [
    { name: "DAILY", route: "/daily" },
    { name: "TOTAL", route: "/total" }
  ];
  return (
    <DefaultLayout>
      <Navigation
        tabs={tabs}
        initialTab="TOTAL"
        style={{ gridColumn: `1/2` }}
      />
      <TotalContainer style={{ gridColumn: `2/13` }}>
        <FilterContainer />
        <MainContainer style={{ gridColumn: "1/3", gridRow: "2/6" }}>
          <FavFood />
          <FavNotFood />
        </MainContainer>
        <MainContainer
          style={{ gridColumn: "3/5", gridRow: "2/6", marginRight: "30px" }}
        >
          <LeftOver />
          <MadeTooMuch />
          <Compare />
        </MainContainer>
      </TotalContainer>
    </DefaultLayout>
  );
}

const DefaultLayout = styled.div`
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  gap: 30px;
  background-color: ${Colors.gray_2};
`;

const TotalContainer = styled.div`
  display: grid;
  width: 100%;
  height: 100%;
  grid-template-rows: repeat(5, 1fr);
  grid-template-columns: repeat(4, 1fr);
  gap: 30px;
`;

const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  background-color: white;
  border-radius: 10px;
  padding: 20px;
  margin-bottom: 30px;
`;
