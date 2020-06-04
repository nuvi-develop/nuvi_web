import React from "react";
import styled from "styled-components";

import { Row, Button } from "theme/style";
import Colors from "theme/colors";

export default function LogListHead() {
  return (
    <Container>
      <Label>과거내역</Label>
      <EditButton>수정</EditButton>
    </Container>
  );
}

const Container = styled(Row)`
  justify-content: space-between;
  align-items: center;
`;

const Label = styled.div`
  font-size: 24px;
`;

const EditButton = styled(Button)`
  font-size: 16px;
  padding: 10px 20px;
  cursor: pointer;
  border: solid 1px ${Colors.gray_1};
  border-radius: 20px;
`;
