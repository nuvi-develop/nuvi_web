import React from "react";
import styled from "styled-components";

import { dashboardColor } from "theme/colors";
import { BorderedBox, Title } from "components/Styled";

import TitleBox from "./TitleBox";
import NutritionInfo from "./NutritionInfo";
import Menu from "./Menu";
import LeftOvers from "./LeftOvers";

const nuviLogo = process.env.PUBLIC_URL + "/images/nuviLogo_narrow.svg";

export default function DashboardComp() {
  return (
    <ColumnWrapper>
      <DashboardContainer>
        <DashBoardInnerContainer>
          <FirstSubCotainer>
            <TitleBox />
            <NutritionInfo />
          </FirstSubCotainer>
          <SecondSubCotainer>
            <Menu />
          </SecondSubCotainer>
          <ThirdSubCotainer>
            <LeftOvers />
          </ThirdSubCotainer>
        </DashBoardInnerContainer>
      </DashboardContainer>
      <NuviLabelConatiner>
        <NuviLabel> Togeter with</NuviLabel> <img src={nuviLogo} alt="logo" />
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
