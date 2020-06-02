import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";

import { actions, selectors } from "data";

import Colors from "theme/colors";

import CurrentIngredient from "./CurrentIngredient";
import InventoryRecordForm from "./InventoryRecordForm";
import LogList from "./LogList";
import LogChart from "./LogChart";
import NavButton from "./NavButton";
import SearchForm from "./SearchForm";

export default function InventoryManaging() {
  const dispatch = useDispatch();
  const departmentId = useSelector(selectors.user.getDepartmentId);
  const { category, ingredientName } = useSelector(
    selectors.inventory.getCurrentSearchingInfo
  );

  useEffect(() => {
    dispatch(
      actions.inventory.loadManagingPage({
        departmentId,
        name: ingredientName,
        category
      })
    );
  }, [category, ingredientName, departmentId, dispatch]);
  return (
    <MainContainer>
      <SubContainer>
        <SearchForm />
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
