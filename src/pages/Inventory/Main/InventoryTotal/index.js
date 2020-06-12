import React, { useEffect, useState, createContext } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";

import { SimpleInput } from "components";
import { Row, Col, Button } from "theme/style";
import Colors from "theme/colors";
import { actions, selectors } from "data";

import LabelBox from "./LabelBox";
import IngredientsTable from "./IngredientsTable";

export const EditingContext = createContext({
  isEditing: false,
  setIsEditing: () => {}
});

export default function InventoryTotalComp() {
  const dispatch = useDispatch();
  const [isEditing, setIsEditing] = useState(false);
  const { ingredientName } = useSelector(
    selectors.inventory.getCurrentSearchingInfo
  );
  const toggleEditHandler = () => {
    setIsEditing(prev => !prev);
  };
  useEffect(() => {
    dispatch(actions.inventory.loadTotalPage({ name: ingredientName }));
  }, [ingredientName, dispatch]);
  return (
    <EditingContext.Provider value={{ isEditing, setIsEditing }}>
      <MainContainer>
        <SubContainer>
          <Header>
            <SubHeader>
              <SimpleInput label="재료명으로 검색" />
              <EditButton onClick={toggleEditHandler}>
                {isEditing ? "완료" : "재료 수정"}
              </EditButton>
            </SubHeader>
            <LabelBox />
          </Header>
          <IngredientsTable />
        </SubContainer>
      </MainContainer>
    </EditingContext.Provider>
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

const SubHeader = styled(Col)``;

const EditButton = styled(Button)`
  padding: 2px 4px;
  width: 100px;
  cursor: pointer;
  border: solid 1px ${Colors.gray_1};
  border-radius: 20px;
  margin-left: 5px;
`;
