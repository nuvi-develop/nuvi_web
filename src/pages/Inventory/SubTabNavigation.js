import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";

import { actions, selectors } from "data";

export default function SubTabNavigation() {
  const dispatch = useDispatch();
  const currentTab = useSelector(selectors.inventory.getCurrentTab);

  const inventoryTabs = {
    MANAGING_INGREDIENTS: "MANAGING_INGREDIENTS",
    TOTAL_INGREDIENTS: "TOTAL_INGREDIENTS"
  };

  return (
    <SubTabContainer>
      <SubTab
        onClick={() => dispatch(actions.inventory.toggleTabManaging())}
        isCurrent={currentTab === inventoryTabs.MANAGING_INGREDIENTS}
      >
        재고 관리
      </SubTab>
      <SubTab
        onClick={() => dispatch(actions.inventory.toggleTabTotal())}
        isCurrent={currentTab === inventoryTabs.TOTAL_INGREDIENTS}
      >
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
