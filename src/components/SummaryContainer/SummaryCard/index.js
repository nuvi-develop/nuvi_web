import React from "react";
import styled from "styled-components";

import { Row, Column, Lunch, Dinner } from "components";
import Colors from "theme/colors";

export default function Summary({
  title,
  date,
  contents = {},
  subContents = {}
}) {
  return (
    <SummaryCard>
      <MainTitle>
        <Title>{title}</Title> <p>{date}</p>
      </MainTitle>
      <Subtitle>
        <ContentColumn>
          <Lunch />
          <ContentRow>
            <Content>{contents.lunch}</Content>
            <Info>{subContents.lunch}</Info>
          </ContentRow>
        </ContentColumn>
        <Column>
          <Dinner />
          <ContentRow>
            <Content>{contents.dinner}</Content>
            <Info>{subContents.dinner}</Info>
          </ContentRow>
        </Column>
      </Subtitle>
    </SummaryCard>
  );
}

const SummaryCard = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  background-color: ${Colors.blue_1};
  border-radius: 10px;
  width: 600px;
  padding: 20px;
  margin: 0 10px;
`;

const MainTitle = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  min-width: 300px;
  color: white;
`;

const Title = styled.h1`
  margin-right: 30px;
  text-align: center;
`;

const Subtitle = styled(MainTitle)`
  color: ${Colors.blue_3};
`;

const Content = styled.h1`
  color: white;
  text-align: center;
`;

const ContentRow = styled(Row)`
  margin-top: 20px;
`;

const ContentColumn = styled(Column)`
  margin-right: 30px;
`;

const Info = styled.p`
  margin-left: 10px;
`;
