import React from "react";
import styled from "styled-components";

import SubTabNavigation from "./SubTabNavigation";
import InventoryManaging from "./Main/InventoryManaging";

export default function Inventory() {
  return (
    <InventoryContainer>
      <SubTabNavigation />
      <InventoryManaging />
    </InventoryContainer>
  );
}

const InventoryContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100%;
`;
