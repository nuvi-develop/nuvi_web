import React from "react";
import styled from "styled-components";

import { Row, Col } from "theme/style";
import Colors from "theme/colors";

export default function LabelBoxComp() {
  return (
    <Container>
      <CompHolder>
        <Circle color={Colors.pink} />
        <Label>부족</Label>
      </CompHolder>
      <CompHolder>
        <Circle color={Colors.yellow} />
        <Label>보통</Label>
      </CompHolder>
      <CompHolder>
        <Circle color={Colors.green_deep_1} />
        <Label>여유</Label>
      </CompHolder>
    </Container>
  );
}

const Container = styled(Row)`
  width: 500px;
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
  font-size: 32px;
  color: ${Colors.gray_1};
  margin-left: 10px;
`;
