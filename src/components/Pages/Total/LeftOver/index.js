import React from "react";
import styled from "styled-components";

import { DefaultTitle, TrashGraph } from "components";

const spoon = "/icons/spoon.svg";

export default function index() {
  return (
    <SubContainer>
      <DefaultTitle title="잔반 TOP 5" icon={spoon} />
      <TrashGraph />
    </SubContainer>
  );
}

const SubContainer = styled.div`
  flex: 1;
`;
