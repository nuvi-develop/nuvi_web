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
        <Title>{title}</Title> <h4>{date}</h4>
      </MainTitle>
      <Subtitle>
        <Column>
          <Lunch />
          <ContentRow>
            <Content>{contents.lunch}</Content>
            <Info>{subContents.lunch}</Info>
          </ContentRow>
        </Column>
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
  width: 100%;
  padding: 20px 0;
  margin-bottom: 10px;
  margin-right: 10px;

  &:last-child {
    margin-right: 0px;
  }
`;

const MainTitle = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  min-width: 300px;
  color: white;
`;

const Title = styled.h2`
  text-align: center;
`;

const Subtitle = styled(MainTitle)`
  color: ${Colors.blue_3};
`;

const Content = styled.h2`
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
