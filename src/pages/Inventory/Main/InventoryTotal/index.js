import React, { useEffect, useState, createContext } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";

import { SimpleInput } from "components";
import { Row, Col, Button } from "theme/style";
import Colors from "theme/colors";
import { actions, selectors } from "data";

import LabelBox from "./LabelBox";
import IngredientsTable from "./IngredientsTable";
import Ordering from "./Ordering";

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
    <DndProvider backend={HTML5Backend}>
      <MainContainer>
        <EditingContext.Provider value={{ isEditing, setIsEditing }}>
          <SubContainer>
            <Header>
              <SubHeader>
                <Ordering />
                <SimpleInput label="재료명으로 검색" />
                <EditButton onClick={toggleEditHandler}>
                  {isEditing ? "완료" : "재료 수정"}
                </EditButton>
              </SubHeader>
              <LabelBox />
            </Header>
            <IngredientsTable />
          </SubContainer>
        </EditingContext.Provider>
      </MainContainer>
    </DndProvider>
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

const Header = styled(Col)`
  justify-content: space-between;

  @media (min-width: 1200px) {
    flex-direction: row;
  }
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
