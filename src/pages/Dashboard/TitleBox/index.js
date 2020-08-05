import React from "react";
import styled from "styled-components";

import { dashboardColor } from "theme/colors";

const todayMenuBackground =
  process.env.PUBLIC_URL + "/dashboard/todayMenuBackground.svg";
const CJLogo = process.env.PUBLIC_URL + "/dashboard/CJLogo.svg";

export default function TitleBoxComp() {
  return (
    <TitleBox>
      <Title>오늘의 급식</Title>
      <DateLabel>2020. 07. 22</DateLabel>
      <CJLogImage src={CJLogo} alt="cjlogo" />
    </TitleBox>
  );
}

const TitleBox = styled.div`
  display: flex;
  flex-direction: column;
  background-image: url(${todayMenuBackground});
  background-size: stretch;
  background-repeat: no-repeat;
  height: 270px;
  width: 250px;
  margin: 20px 0 100px 10px;
  padding: 30px;
`;
const Title = styled.div`
  font-weight: 700;
  font-size: 30px;
  color: ${dashboardColor.blue};
  opacity: 0.7;
  margin-top: 20px;
`;

const DateLabel = styled.div`
  flex: 1;
  font-weight: 300;
  font-size: 22px;
  color: ${dashboardColor.gray_6};
  margin-top: 10px;
`;

const CJLogImage = styled.img`
  width: 150px;
`;
