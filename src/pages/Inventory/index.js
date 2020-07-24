import React from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";

import { selectors } from "data";
import { Modal } from "components";
import { inventoryTabs } from "constants/index";

import SubTabNavigation from "./SubTabNavigation";
import InventoryManaging from "./Main/InventoryManaging";
import InventoryTotal from "./Main/InventoryTotal";
import InventoryMonthUse from "./Main/InventoryMonthUse";

const InventoryPage = {
  [inventoryTabs.MANAGING_INGREDIENTS]: <InventoryManaging />,
  [inventoryTabs.TOTAL_INGREDIENTS]: <InventoryTotal />,
  [inventoryTabs.MONTH_USE]: <InventoryMonthUse />
};

export default function Inventory() {
  const currentTab = useSelector(selectors.inventory.getCurrentTab);
  return (
    <InventoryContainer>
      <SubTabNavigation />
      {InventoryPage[currentTab]}
    </InventoryContainer>
  );
}

const InventoryContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100%;
`;
