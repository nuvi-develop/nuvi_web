import React from "react";
import styled from "styled-components";

import { Row } from "theme/style";

export default function LogListHead() {
  return (
    <Container>
      <Label>과거내역</Label>
    </Container>
  );
}

const Container = styled(Row)`
  align-items: center;
`;

const Label = styled.div`
  font-size: 24px;
`;
