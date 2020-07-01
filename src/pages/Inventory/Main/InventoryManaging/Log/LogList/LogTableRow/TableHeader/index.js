import React from "react";
import styled from "styled-components";

export default function TableHeader() {
  return (
    <Container>
      <LabelContainer>
        <Label>날짜</Label>
      </LabelContainer>
      <LabelContainer>
        <Label>주문량 (kg)</Label>
      </LabelContainer>
      <LabelContainer>
        <Label>사용량 (kg)</Label>
      </LabelContainer>
      <LabelContainer>
        <Label>재고량 (kg)</Label>
      </LabelContainer>
      <LabelContainer>
        <Label>비용 (원/단위)</Label>
      </LabelContainer>
    </Container>
  );
}

const Container = styled.div`
  display: grid;
  grid-template-columns: 24% 19% 19% 19% 19%;
  gap: 1px;
  justify-items: stretch;
  margin: 10px 0;
`;

const LabelContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Label = styled.div``;
