import React from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";

import { selectors } from "data";

import SubTabNavigation from "./SubTabNavigation";
import InventoryManaging from "./Main/InventoryManaging";
import InventoryTotal from "./Main/InventoryTotal";

const inventoryTabs = {
  MANAGING_INGREDIENTS: "MANAGING_INGREDIENTS",
  TOTAL_INGREDIENTS: "TOTAL_INGREDIENTS"
};

export default function Inventory() {
  const currentTab = useSelector(selectors.inventory.getCurrentTab);
  return (
    <InventoryContainer>
      <SubTabNavigation />
      {currentTab === inventoryTabs.MANAGING_INGREDIENTS ? (
        <InventoryManaging />
      ) : (
        <InventoryTotal />
      )}
    </InventoryContainer>
  );
}

const InventoryContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100%;
`;
