import React from "react";
import styled from "styled-components";

import { Navigation, Row, Column } from "components";
import Colors from "theme/colors";

const sun = "/icons/sun.svg";
const moon = "/icons/moon.svg";

export default function Daily() {
  return (
    <DefaultLayout>
      <Navigation />
      <DailyContainer>
        <SummaryContainer>
          <SummaryCard>
            <Title>
              <h1>예상 식수 인원</h1> <p>2/28</p>
            </Title>
            <Subtitle>
              <Column>
                <Row>
                  <img src={sun} alt="sun" />
                  <p style={{ marginLeft: 10 }}>점심</p>
                </Row>
                <Content>780명</Content>
              </Column>
              <Column>
                <Row>
                  <img src={moon} alt="moon" />
                  <p style={{ marginLeft: 10 }}>저녁</p>
                </Row>
                <Content>627명</Content>
              </Column>
            </Subtitle>
          </SummaryCard>
          <SummaryCard>2</SummaryCard>
          <SummaryCard>3</SummaryCard>
        </SummaryContainer>
        <MainContainer
          style={{ gridColumn: "1 / 3 ", gridRow: "2/5" }}
        ></MainContainer>
        <MainContainer
          style={{ gridColumn: " 3 ", gridRow: "2/5" }}
        ></MainContainer>
      </DailyContainer>
    </DefaultLayout>
  );
}

const DefaultLayout = styled.div`
  display: flex;
  background-color: ${Colors.gray_2};
`;

const DailyContainer = styled.div`
  display: grid;
  width: 100%;
  grid-template-rows: repeat(4, 1fr);
  grid-template-columns: repeat(3, 1fr);
  gap: 30px;
  margin: 30px;
`;

const SummaryContainer = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  grid-column-start: 1;
  grid-column-end: 4;
`;

const SummaryCard = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  background-color: ${Colors.blue_1};
  border-radius: 10px;
  width: 600px;
  padding: 40px 0;
`;

const Title = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 300px;
  color: white;
`;

const Subtitle = styled(Title)`
  color: ${Colors.blue_3};
`;

const Content = styled.h1`
  color: white;
  margin-top: 20px;
`;

const MainContainer = styled.div`
  background-color: white;
  border-radius: 10px;
`;
