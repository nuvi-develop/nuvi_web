import React from "react";
import styled from "styled-components";

import { dashboardColor } from "theme/colors";
import { BorderedBox } from "components/Styled";

const menu = process.env.PUBLIC_URL + "/dashboard/menu.svg";

const menuItems = [
  { name: "배추김치", calorie: "0000", natrium: 900 },
  { name: "단무지 무침", calorie: "0000", natrium: 1100 },
  { name: "맛살 초무침", calorie: "0000", natrium: 200 },
  { name: "생선까스", calorie: "0000", natrium: 300 },
  { name: "현미밥", calorie: "0000", natrium: 1200 },
  { name: "오징어 무국", calorie: "0000", natrium: 900 }
];

const first4Items = menuItems.slice(0, 4);
const last2Items = menuItems.slice(4);

const MenuRowWithItems = ({ items }) => {
  return (
    <MenuRow>
      {items.map(({ name, calorie, natrium }) => (
        <MenuItemContainer key={name} natrium={natrium}>
          <MenuItemName>{name}</MenuItemName>
          <CalorieContainer>
            <MenuCalorie>{calorie}</MenuCalorie>
            <MenuCalorieUnit>Kcal</MenuCalorieUnit>
          </CalorieContainer>
        </MenuItemContainer>
      ))}
    </MenuRow>
  );
};

export default function MenuComp() {
  return (
    <MenuContainer>
      <MenuRowWithItems items={first4Items} />
      <MenuImage src={menu} alt="menu" />
      <MenuRowWithItems items={last2Items} />
      <Information>
        1일 <b>나트륨 권장량</b> 50% 이상 메뉴
      </Information>
    </MenuContainer>
  );
}

const MenuContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  flex: 1;
`;

const MenuRow = styled.div`
  display: flex;
  justify-content: space-around;
`;

const MenuItemContainer = styled(BorderedBox)`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  margin: 0;
  border: ${({ natrium }) =>
    natrium > 1000 ? `solid 3px ${dashboardColor.orange}` : "none"};
`;

const MenuItemName = styled.div`
  font-weight: 300;
  font-size: 21px;
`;

const CalorieContainer = styled.div`
  display: flex;
  align-items: flex-end;
`;
const MenuCalorie = styled.div`
  font-weight: 700;
  font-size: 48px;
  color: ${dashboardColor.blue};
`;

const MenuCalorieUnit = styled.div`
  font-size: 24px;
  font-wedith: 300;
  color: rgba(43, 136, 240, 0.7);
`;

const MenuImage = styled.img`
  width: 70%;
  align-self: center;
`;

const Information = styled.div`
  align-self: flex-start;
  border-radius: 10px;
  border: solid 3px ${dashboardColor.orange};
  padding: 3px 10px;
  margin-top: 20px;
`;
