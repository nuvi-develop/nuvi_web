import React, { useEffect } from "react";
import styled from "styled-components";
import { Formik } from "formik";

import { dashboardColor } from "theme/colors";
import { BorderedBox } from "components/Styled";

import MenuCalorieInput from "./MenuCalorieInput";
const menu = process.env.PUBLIC_URL + "/dashboard/menu.svg";

const menuItems = {
  first: { id: 0, name: "배추김치", calorie: "0000", natrium: 900 },
  second: { id: 1, name: "단무지 무침", calorie: "0000", natrium: 1100 },
  third: { id: 2, name: "맛살 초무침", calorie: "0000", natrium: 200 },
  fourth: { id: 3, name: "생선까스", calorie: "0000", natrium: 300 },
  fifth: { id: 4, name: "현미밥", calorie: "0000", natrium: 1200 },
  sixth: { id: 5, name: "오징어 무국", calorie: "0000", natrium: 900 }
};

const MenuItem = ({ item, name, isInEditMode }) => (
  <MenuItemContainer key={item.name} natrium={item.natrium}>
    <MenuItemName>{item.name}</MenuItemName>
    <CalorieContainer>
      {isInEditMode ? (
        <MenuCalorieInput name={name} />
      ) : (
        <MenuCalorie>{item.calorie}</MenuCalorie>
      )}
      <MenuCalorieUnit>Kcal</MenuCalorieUnit>
    </CalorieContainer>
  </MenuItemContainer>
);

const MenuForm = ({ isInEditMode, nutritionInfo, formik }) => {
  useEffect(() => {
    if (!isInEditMode) {
      //수정된 값 날리는 api
      console.log("formik.values", formik.values);
    }
  }, [isInEditMode]);
  return (
    <MenuContainer>
      {nutritionInfo.value && (
        <MenuRow>
          <MenuItem
            item={menuItems.first}
            name="first"
            isInEditMode={isInEditMode}
          />
          <MenuItem
            item={menuItems.second}
            name="second"
            isInEditMode={isInEditMode}
          />
          <MenuItem
            item={menuItems.third}
            name="third"
            isInEditMode={isInEditMode}
          />
          <MenuItem
            item={menuItems.fourth}
            name="fourth"
            isInEditMode={isInEditMode}
          />
        </MenuRow>
      )}

      <MenuImage src={menu} alt="menu" />
      {nutritionInfo.value && (
        <MenuRow>
          <MenuItem
            item={menuItems.fifth}
            name="fifth"
            isInEditMode={isInEditMode}
          />
          <MenuItem
            item={menuItems.sixth}
            name="sixth"
            isInEditMode={isInEditMode}
          />
        </MenuRow>
      )}
      {nutritionInfo.value && (
        <Information>
          1일 <b>나트륨 권장량</b> 50% 이상 메뉴
        </Information>
      )}
    </MenuContainer>
  );
};

export default function MenuComp({ state }) {
  const { isInEditMode, nutritionInfo } = state;

  return (
    <Formik
      initialValues={{
        first: menuItems.first.calorie,
        second: menuItems.second.calorie,
        third: menuItems.third.calorie,
        fourth: menuItems.fourth.calorie,
        fifth: menuItems.fifth.calorie,
        sixth: menuItems.sixth.calorie
      }}
    >
      {formik => (
        <MenuForm
          isInEditMode={isInEditMode}
          nutritionInfo={nutritionInfo}
          formik={formik}
        />
      )}
    </Formik>
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
