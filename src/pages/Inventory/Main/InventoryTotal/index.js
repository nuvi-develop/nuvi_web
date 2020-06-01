import React from "react";
import styled from "styled-components";

import { SimpleInput } from "components";
import { Row, Col } from "theme/style";

import LabelBox from "./LabelBox";
import IngredientsTable from "./IngredientsTable";

export default function InventoryTotalComp() {
  return (
    <MainContainer>
      <SubContainer>
        <Header>
          <SimpleInput label="재료명으로 검색" />
          <LabelBox />
        </Header>
        <IngredientsTable />
      </SubContainer>
    </MainContainer>
  );
}

const MainContainer = styled(Row)`
  background-color: white;
  border-radius: 10px;
  padding: 20px;
  margin-bottom: 10px;
  flex: 1;
`;

const SubContainer = styled(Col)`
  flex: 1;
  padding: 20px;
`;

const Header = styled(Row)`
  justify-content: space-between;
`;
