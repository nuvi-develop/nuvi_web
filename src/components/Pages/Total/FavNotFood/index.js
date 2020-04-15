import React from "react";
import styled from "styled-components";

import { DefaultTitle, BarHorizontalChart } from "components";

const bad = "/icons/bad.svg";

export default function FavFood() {
  return (
    <SubContainer>
      <DefaultTitle title="비선호 음식 TOP 5" icon={bad} />
      <BarHorizontalChart width={"99%"} height={250} />
    </SubContainer>
  );
}

const SubContainer = styled.div`
  flex: 1;
`;
