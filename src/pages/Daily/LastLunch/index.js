import React from "react";
import styled from "styled-components";

import { DefaultTitle, BarChart } from "components";

const sunBig = "/icons/sun_big.svg";

export default function LastLunch() {
  return (
    <SubContainer>
      <DefaultTitle
        title="이전 점심"
        icon={sunBig}
        info={[
          { title: "잔반", color: "#918FE1" },
          { title: "잔식", color: "#96D1A5" }
        ]}
      />
      <BarChart width={"99%"} height={250} />
    </SubContainer>
  );
}

const SubContainer = styled.div`
  flex: 1;
`;
