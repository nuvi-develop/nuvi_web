import React, { useReducer, useEffect } from "react";
import styled from "styled-components";
import produce from "immer";

import { dashboardColor } from "theme/colors";
import { BorderedBox, Title } from "components/Styled";

import TitleBox from "./TitleBox";
import NutritionInfo from "./NutritionInfo";
import Menu from "./Menu";
import LeftOvers from "./LeftOvers";
import SearchBox from "./SearchBox";
import NutritionImage from "./NutiritionImage";

const nuviLogo = process.env.PUBLIC_URL + "/images/nuviLogo_narrow.svg";
const fullScreen = process.env.PUBLIC_URL + "/icons/full_screen.svg";
const smallScreen = process.env.PUBLIC_URL + "/icons/small_screen.svg";

const initialState = {
  date: new Date(),
  bld: { name: "중식", value: "l" },
  nutritionInfo: { name: "영양정보 있음", value: true },
  isInEditMode: false,
  fullScreen: false
};

const reducer = produce((draft, action) => {
  switch (action.type) {
    case "SET_DATE":
      draft.date = action.payload;
      break;
    case "SET_BLD":
      draft.bld = action.payload;
      break;
    case "SET_NUTRITION_INFO":
      draft.nutritionInfo = action.payload;
      break;
    case "SET_IS_IN_EDIT_MODE":
      draft.isInEditMode = action.payload;
      break;
    case "SET_FULL_SCREEN":
      draft.fullScreen = action.payload;
      break;
    default:
      return initialState;
  }
}, initialState);

export default function DashboardComp() {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    console.log("state", state);
    //state 가 변동함에따라 api 호출..
  }, [state]);
  return (
    <ColumnWrapper>
      {!state.fullScreen && <SearchBox dispatch={dispatch} state={state} />}
      <DashboardContainer>
        <ToggleScreen
          src={state.fullScreen ? smallScreen : fullScreen}
          alt="toggleScreen"
          onClick={() =>
            dispatch({ type: "SET_FULL_SCREEN", payload: !state.full_screen })
          }
        />
        <DashBoardInnerContainer>
          <FirstSubCotainer>
            <TitleBox />
            {state.nutritionInfo.value ? <NutritionInfo /> : <NutritionImage />}
          </FirstSubCotainer>
          <SecondSubCotainer>
            <Menu state={state} />
          </SecondSubCotainer>
          <ThirdSubCotainer>
            <LeftOvers />
          </ThirdSubCotainer>
        </DashBoardInnerContainer>
      </DashboardContainer>
      <NuviLabelConatiner>
        <NuviLabel> Together with</NuviLabel> <img src={nuviLogo} alt="logo" />
      </NuviLabelConatiner>
    </ColumnWrapper>
  );
}

const DashboardContainer = styled.div`
  display: flex;
  flex-direction: column;
  background-color: white;

  border-radius: 10px;

  background-color: ${dashboardColor.light_blue};
  position: relative;
`;

const DashBoardInnerContainer = styled.div`
  display: flex;
  flex: 1;
  border-radius: 10px;
`;

const SubContainer = styled.div`
  margin: 5px;
  padding: 5px;
`;

const FirstSubCotainer = styled(SubContainer)`
  display: flex;
  flex-direction: column;
  position: relative;

  flex: 1;
`;
const SecondSubCotainer = styled(BorderedBox)`
  display: flex;
  flex: 3;
`;
const ThirdSubCotainer = styled(BorderedBox)`
  display: flex;
  flex: 1;
`;

const NuviLabelConatiner = styled.div`
  display: flex;
  align-self: flex-end;
  font-size: 23px;
  color: ${dashboardColor.gray_8};

  // font-weight: 300;
`;

const NuviLabel = styled.div``;

const ColumnWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  min-height: 97vh;
  font-family: Noto Sans KR, sans-serif;
`;

const ToggleScreen = styled.img`
  position: absolute;
  top: 0;
  right: 0;
  width: 30px;
  cursor: pointer;
`;
