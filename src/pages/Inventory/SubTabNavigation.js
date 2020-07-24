import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";

import { actions, selectors } from "data";
import { inventoryTabs } from "constants/index";

export default function SubTabNavigation() {
  const dispatch = useDispatch();
  const currentTab = useSelector(selectors.inventory.getCurrentTab);

  const SubTab = ({ tableName, label }) => (
    <SubTabStyled
      onClick={() => dispatch(actions.inventory.toggleInventoryTab(tableName))}
      isCurrent={currentTab === tableName}
    >
      {label}
    </SubTabStyled>
  );

  return (
    <SubTabContainer>
      <SubTab
        tableName={inventoryTabs.MANAGING_INGREDIENTS}
        label="재고 관리"
      />
      <SubTab tableName={inventoryTabs.TOTAL_INGREDIENTS} label="전체 재료" />
      <SubTab tableName={inventoryTabs.MONTH_USE} label="월별 내역" />
    </SubTabContainer>
  );
}

const SubTabContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  margin: 20px;
`;

const SubTabStyled = styled.div`
  font-size: 24px;

  margin: 10px;
  background-color: ${({ isCurrent }) => (isCurrent ? "white" : null)};
  padding: 10px;
  border-radius: 10px;
  cursor: pointer;
`;
