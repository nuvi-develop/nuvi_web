import React from "react";
import styled from "styled-components";

import {
  Navigation,
  SummaryContainer,
  ExpectNumber,
  ExpectVolume,
  DefaultTitle,
  BarChart
} from "components";
import Colors from "theme/colors";

const sunBig = "/icons/sun_big.svg";
const moonBig = "/icons/moon_big.svg";

export default function Daily() {
  return (
    <DefaultLayout>
      <Navigation />
      <DailyContainer>
        <SummaryContainer />
        <MainContainer style={{ gridColumn: "1 / 3 ", gridRow: "2/6" }}>
          <ExpectNumber />
          <ExpectVolume />
        </MainContainer>
        <MainContainer style={{ gridColumn: " 3 ", gridRow: "2/6" }}>
          <SubContainer>
            <DefaultTitle
              title="이전 점심"
              icon={sunBig}
              info={[
                { title: "잔반", color: "#918FE1" },
                { title: "잔식", color: "#96D1A5" }
              ]}
            />
            <BarChart width={600} height={300} />
          </SubContainer>
          <SubContainer>
            <DefaultTitle
              title="이전 저녁"
              icon={moonBig}
              info={[
                { title: "잔반", color: "#918FE1" },
                { title: "잔식", color: "#96D1A5" }
              ]}
            />
            <BarChart width={600} height={300} />
          </SubContainer>
        </MainContainer>
      </DailyContainer>
    </DefaultLayout>
  );
}

const DefaultLayout = styled.div`
  display: flex;
  heigh: 100vh;
  background-color: ${Colors.gray_2};
`;

const DailyContainer = styled.div`
  display: grid;
  width: 100%;
  height: 100vh;
  grid-template-rows: repeat(5, 1fr);
  grid-template-columns: repeat(3, 1fr);
  gap: 30px;
  margin: 0 30px;
`;

const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  background-color: white;
  border-radius: 10px;
  padding: 20px;
  margin-bottom: 30px;
`;

const SubContainer = styled.div`
  flex: 1;
`;
