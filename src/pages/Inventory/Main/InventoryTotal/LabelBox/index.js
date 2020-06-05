import React from "react";
import styled from "styled-components";

import { Row, Col } from "theme/style";
import Colors from "theme/colors";

export default function LabelBoxComp() {
  return (
    <Container>
      <CompHolder>
        <Circle color={Colors.pink} />
        <Label>부족 (0~20kg)</Label>
      </CompHolder>
      <CompHolder>
        <Circle color={Colors.yellow} />
        <Label>보통 (20~50kg)</Label>
      </CompHolder>
      <CompHolder>
        <Circle color={Colors.green_deep_1} />
        <Label>여유 (50kg~) </Label>
      </CompHolder>
    </Container>
  );
}

const Container = styled(Row)`
  width: 600px;
  justify-content: space-between;
`;

const CompHolder = styled(Row)`
  align-items: center;
`;

const Circle = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 20px;
  background-color: ${({ color }) => color};
`;

const Label = styled.div`
  font-size: 16px;
  color: ${Colors.gray_1};
  margin-left: 10px;
`;
