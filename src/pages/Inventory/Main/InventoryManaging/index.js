import React from "react";
import styled from "styled-components";

import { SimpleInput, AddInput } from "components";
import Colors from "theme/colors";
import SearchList from "./SearchList";
import CurrentIngredient from "./CurrentIngredient";
import InventoryRecordForm from "./InventoryRecordForm";
import LogList from "./LogList";
import LogChart from "./LogChart";
import NavButton from "./NavButton";

const mockSearchList = [{ name: "보리" }, { name: "쌀" }];

export default function InventoryManaging() {
  return (
    <MainContainer>
      <SubContainer>
        <SimpleInput label="재료명으로 검색" />
        <SimpleInput label="분류로 검색" />
        <AddInput label="재료 추가" />
        <SearchList searchList={mockSearchList} />
        <CurrentIngredient />
        <InventoryRecordForm />
      </SubContainer>
      <Divider />
      <SubContainer>
        <LogList />
        <LogChart />
        <NavButton />
      </SubContainer>
    </MainContainer>
  );
}

const MainContainer = styled.div`
  display: flex;
  background-color: white;
  border-radius: 10px;
  padding: 20px;
  margin-bottom: 10px;
  flex: 1;
`;

const SubContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  flex: 1;
  padding: 20px;
`;
const Divider = styled.div`
  border: solid 1px ${Colors.gray_1};
  margin: 10px;
`;
