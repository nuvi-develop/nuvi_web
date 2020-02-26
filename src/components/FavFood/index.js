import React from "react";
import styled from "styled-components";

import { DefaultTitle, BarHorizontalChart } from "components";

const good = "/icons/good.svg";

export default function FavFood() {
  return (
    <SubContainer>
      <DefaultTitle title="선호 음식 TOP 5" icon={good} />
      <BarHorizontalChart />
    </SubContainer>
  );
}

const SubContainer = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
`;
