import React from "react";
import styled from "styled-components";

import {
  Navigation,
  SummaryContainer,
  ExpectNumber,
  ExpectVolume,
  LastLunch,
  LastDinner
} from "components";
import Colors from "theme/colors";

export default function Daily() {
  return (
    <DefaultLayout>
      <Navigation initialTab="DAILY" style={{ gridColumn: `1/2` }} />
      <DailyContainer style={{ gridColumn: `2/13` }}>
        <SummaryContainer />
        <MainContainer style={{ gridColumn: "1 / 3 ", gridRow: "2/6" }}>
          <ExpectNumber />
          <ExpectVolume />
        </MainContainer>
        <MainContainer
          style={{ gridColumn: " 3 ", gridRow: "2/6", marginRight: "30px" }}
        >
          <LastLunch />
          <LastDinner />
        </MainContainer>
      </DailyContainer>
    </DefaultLayout>
  );
}

const DefaultLayout = styled.div`
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  grid-template-rows: 1fr;
  gap: 30px;
  background-color: ${Colors.gray_2};
`;

const DailyContainer = styled.div`
  display: grid;
  width: 100%;
  height: 100%;
  grid-template-rows: repeat(5, 1fr);
  grid-template-columns: repeat(3, 1fr);
  gap: 30px;
`;

const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  background-color: white;
  border-radius: 10px;
  padding: 20px;
  margin-bottom: 30px;
  border: 3px solid white;
`;
