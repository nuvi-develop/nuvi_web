import React from "react";
import styled from "styled-components";

import { ComposedChart, Lunch, DefaultTitle, Dinner } from "components";
import Colors from "theme/colors";

const people = "/icons/people3.svg";

export default function ExpectNumber() {
  return (
    <SubContainer>
      <DefaultTitle
        title="예상 식수인원"
        icon={people}
        info={[
          { title: "예상최대", color: "#FFAE7B" },
          { title: "예상최소", color: "#B995B5" },
          { title: "실제", color: "#433BA1" }
        ]}
      />
      <ContentContainer>
        <GraphContainer>
          <Lunch blue />
          <ComposedChart width={600} height={300} />
        </GraphContainer>
        <DivideLine />
        <GraphContainer>
          <Dinner blue />
          <ComposedChart width={600} height={300} />
        </GraphContainer>
      </ContentContainer>
    </SubContainer>
  );
}

const SubContainer = styled.div`
  flex: 1;
`;
const ContentContainer = styled.div`
  display: flex;
`;

const GraphContainer = styled.div`
  flex: 1;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

const DivideLine = styled.div`
  border-left: 3px dotted ${Colors.blue_3};
  margin: 0 10px;
`;
