import React from "react";
import styled from "styled-components";

import SummaryContainer from "./SummaryContainer";
import ExpectNumber from "./ExpectNumber";
import ExpectVolume from "./ExpectVolume";
import LastLunch from "./LastLunch";
import LastDinner from "./LastDinner";

export default function Daily() {
  return (
    <DailyContainer>
      <SummaryContainer />
      <FirstContainer>
        <ExpectNumber />
        <ExpectVolume />
      </FirstContainer>
      <SecondContainer>
        <LastLunch />
        <LastDinner />
      </SecondContainer>
    </DailyContainer>
  );
}

const DailyContainer = styled.div`
  display: flex;
  flex-direction: column;

  align-items: stretch;
  align-content: center;

  @media (min-width: 1200px) {
    flex-direction: row;
    flex-wrap: wrap;
  }
`;

const FirstContainer = styled.div`
  display: flex;
  flex-direction: column;
  background-color: white;
  border-radius: 10px;
  padding: 20px;
  margin-bottom: 10px;
  border: 3px solid white;
  flex: 1;

  @media (min-width: 1200px) {
    flex: 2 1 700px;
    height: 80vh;
  }
`;

const SecondContainer = styled(FirstContainer)`
  @media (min-width: 1200px) {
    margin-left: 10px;
    flex: 1 1 350px;
  }
`;
