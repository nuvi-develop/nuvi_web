import React, { useState } from "react";
import styled from "styled-components";

import { useTabs } from "hooks/pages/useTabs";

export default function SubTabNavigation() {
  const tabs = { MANAGING: "MANAGING", TOTAL: "TOTAL" };
  const [tab, setTab] = useState(tabs.MANAGING);

  return (
    <SubTabContainer>
      <SubTab
        onClick={() => setTab(tabs.MANAGING)}
        isCurrent={tab === tabs.MANAGING}
      >
        재고 관리
      </SubTab>
      <SubTab onClick={() => setTab(tabs.TOTAL)} isCurrent={tab === tabs.TOTAL}>
        전체 재료
      </SubTab>
    </SubTabContainer>
  );
}

const SubTabContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  margin: 20px;
`;

const SubTab = styled.div`
  font-size: 24px;

  margin: 10px;
  background-color: ${({ isCurrent }) => (isCurrent ? "white" : null)};
  padding: 10px;
  border-radius: 10px;
  cursor: pointer;
`;
