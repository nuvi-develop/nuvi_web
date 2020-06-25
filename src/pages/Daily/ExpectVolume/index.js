import React from "react";
import styled from "styled-components";

import { Lunch, DefaultTitle, CustomBarChart, Dinner } from "components";
import Colors from "theme/colors";

const restaurant = "/icons/restaurant.svg";

export default function ExpectVolume() {
  return (
    <SubContainer>
      <DefaultTitle title="예상 식사 준비량" icon={restaurant} />
      <ContentContainer>
        <GraphContainer>
          <Lunch blue />
          <CustomBarChart />
        </GraphContainer>
        <DivideLine />
        <GraphContainer>
          <Dinner blue />
          <CustomBarChart />
        </GraphContainer>
      </ContentContainer>
    </SubContainer>
  );
}

const SubContainer = styled.div`
  flex: 1;
`;

const DivideLine = styled.div`
  border-left: 3px dotted ${Colors.blue_3};
  margin: 0 10px;
`;

const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;

  @media (min-width: 1200px) {
    flex-direction: row;
  }
`;

const GraphContainer = styled.div`
  flex: 1;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;
