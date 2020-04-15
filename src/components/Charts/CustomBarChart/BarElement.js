import React from "react";
import styled from "styled-components";

import Colors from "theme/colors";

const totalNumber = 780;

export default function BarElement(props) {
  const { name, value } = props;
  return (
    <MainContainer>
      <BarContainer>
        <Bar {...props} />
      </BarContainer>
      <Name>{name}</Name>
      <Percentage>{`${Math.floor((value / totalNumber) * 100)}%`}</Percentage>
      <Value>{value}인분</Value>
    </MainContainer>
  );
}

const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 300px;
  margin-top: 20px;

  @media (min-width: 1200px) {
    height: 200px;
  }
`;

const BarContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  flex: 0 0 100px;
  width: 20px;
  border-radius: 10px;
  background-color: ${Colors.blue_4};
  margin-bottom: 30px;
`;

const Bar = styled.div`
  width: 20px;
  height: ${({ value }) => `${(value / totalNumber) * 100}%`};
  border-radius: 10px;
  background-color: ${({ value }) => {
    const rate = value / totalNumber;
    return rate > 1.2
      ? Colors.green_deep_2
      : rate > 1
      ? Colors.green_deep_1
      : Colors.green_1;
  }};
`;

const Name = styled.div`
  font-size: 16px;
  color: ${Colors.blue_1};
  flex: 1 0 36px;
`;

const Percentage = styled.div`
  font-size: 16px;
  color: ${Colors.blue_1};
  flex: 1 0 36px;
`;

const Value = styled.div`
  font-size: 16px;
  color: ${Colors.blue_3};
  flex: 1 0 36px;
`;
