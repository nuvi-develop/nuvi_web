import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";

import { actions, selectors } from "data";
import Colors from "theme/colors";
import { Row, Col, Button } from "theme/style";

import CurrentIngredient from "./CurrentIngredient";
import InventoryRecordForm from "./InventoryRecordForm";
import Log from "./Log";

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
        <Log />
      </SubContainer>
    </MainContainer>
  );
}

const MainContainer = styled(Col)`
  background-color: white;
  border-radius: 10px;
  padding: 10px 20px;
  margin-bottom: 10px;
  flex: 1;
  min-height: 80vh;

  @media (min-width: 1200px) {
    flex-direction: row;
  }
`;

const SubContainer = styled(Col)`
  justify-content: space-between;
  flex: 1;
  padding: 20px;
`;
const Divider = styled.div`
  border: solid 1px ${Colors.gray_1};
  margin: 10px;
`;
