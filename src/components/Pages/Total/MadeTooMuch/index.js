import React from "react";
import styled from "styled-components";

import { DefaultTitle, TrashGraph } from "components";

const cook = "/icons/cook.svg";

export default function index() {
  return (
    <SubContainer>
      <DefaultTitle title="잔식 TOP 5" icon={cook} />
      <TrashGraph />
    </SubContainer>
  );
}

const SubContainer = styled.div`
  flex: 1;
`;
