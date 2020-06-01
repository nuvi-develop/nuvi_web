import React from "react";
import styled from "styled-components";

import { Col } from "theme/style";

export default function TableCol({ label, data }) {
  return (
    <Container>
      <Label>{label}</Label>
      {data.map((d, i) => (
        <Content key={`d_${i}`}>{d}</Content>
      ))}
    </Container>
  );
}

const Container = styled(Col)`
  align-items: center;
`;

const Label = styled.div`
  margin-bottom: 20px;
`;

const Content = styled.div`
  margin-bottom: 10px;
`;
