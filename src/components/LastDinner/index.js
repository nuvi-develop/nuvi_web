import React from "react";
import styled from "styled-components";

import { DefaultTitle, BarChart } from "components";

const moonBig = "/icons/moon_big.svg";

export default function LastDinner() {
  return (
    <SubContainer>
      <DefaultTitle
        title="이전 저녁"
        icon={moonBig}
        info={[
          { title: "잔반", color: "#918FE1" },
          { title: "잔식", color: "#96D1A5" }
        ]}
      />
      <BarChart width={600} height={300} />
    </SubContainer>
  );
}

const SubContainer = styled.div`
  flex: 1;
`;
