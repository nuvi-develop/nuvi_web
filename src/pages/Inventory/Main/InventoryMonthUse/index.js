import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { format } from "date-fns";

import { actions, selectors } from "data";
import Colors from "theme/colors";
import { Row, Col, Button } from "theme/style";

import MonthInput from "components/Input/MonthInput";

export default function InventoryMonthUse() {
  const dispatch = useDispatch();
  const [searchDate, setSearchDate] = useState(new Date());
  const monthUseIngredients = useSelector(
    selectors.inventory.getMonthUseIngredients
  );

  useEffect(() => {
    dispatch(actions.inventory.loadMonthUseIngredients({ searchDate }));
  }, [searchDate]);
  return (
    <MainContainer>
      <MonthInput
        label={"월별 검색"}
        name="month"
        setSearchDate={setSearchDate}
        searchDate={searchDate}
      />
      <HeaderContainer>
        <HeaderItem>재료명</HeaderItem>
        <HeaderItem>월말 재고량</HeaderItem>
        <HeaderItem>재고량 단가</HeaderItem>
      </HeaderContainer>
      <TableBody>
        {monthUseIngredients &&
          monthUseIngredients.map(monthUseIngredient => {
            const {
              ingredientName,
              currentStock,
              ingredientId,
              reducedOrdersByCost
            } = monthUseIngredient;

            return (
              <ContentContainer key={ingredientId}>
                <ContentItem>{ingredientName}</ContentItem>
                <ContentItem>{currentStock}</ContentItem>
                <ContentItem>
                  {Object.keys(reducedOrdersByCost).map(key => {
                    return (
                      <ItemContainer key={key}>
                        <Item>{key}</Item>

                        <Item>{reducedOrdersByCost[key]}</Item>
                      </ItemContainer>
                    );
                  })}
                </ContentItem>
              </ContentContainer>
            );
          })}
      </TableBody>
    </MainContainer>
  );
}

const MainContainer = styled(Col)`
  display: flex;
  background-color: white;
  padding: 10px 20px;
  margin-bottom: 10px;
  border-radius: 10px;
  min-height: 80vh;
`;

const ItemContainer = styled.div`
  display: flex;
  padding: 10px;
`;

const Item = styled.div`
  width: 300px;
`;

const HeaderContainer = styled(ItemContainer)``;

const HeaderItem = styled(Item)``;

const ContentContainer = styled(ItemContainer)`
  border-bottom: 1px solid ${({ theme }) => theme.gray_2};
  &:hover {
    border-radius: 10px;
    background-color: ${({ theme }) => theme.gray_2};
  }
`;

const ContentItem = styled(Item)``;

const TableBody = styled.div`
  overflow: scroll;
  max-height: 700px;
`;
