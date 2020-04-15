import React from "react";
import styled from "styled-components";

import { HalfPieChart, SimpleBarChart, DefaultTitle } from "components";
import Colors from "theme/colors";

const compare = "/icons/compare.svg";

const Title = () => (
  <InlineDiv>
    <InlineH2 color={Colors.blue_1}>잔반</InlineH2>
    <InlineH2> vs </InlineH2>
    <InlineH2 color={Colors.blue_2}>잔식</InlineH2>
    <InlineH2> vs </InlineH2>
    <InlineH2 color={Colors.green_1}>전처리</InlineH2>
  </InlineDiv>
);

export default function CompareComponent() {
  return (
    <SubContainer>
      <DefaultTitle component={Title} icon={compare} />
      <GraphContainer>
        <HalfPieChart width={300} height={200} />
        <SimpleBarChart width={300} height={200} />
      </GraphContainer>
    </SubContainer>
  );
}

const SubContainer = styled.div`
  flex: 1;
`;

const GraphContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 20px;

  @media (min-width: 1200px) {
    flex-direction: row;
    justify-content: space-between;
  }
`;

const InlineDiv = styled.div`
  display: inline;
`;

const InlineH2 = styled.h2`
  display: inline;
  color: ${({ color }) => color};
`;
