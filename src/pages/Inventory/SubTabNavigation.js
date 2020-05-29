import React from "react";
import styled from "styled-components";

export default function SubTabNavigation() {
  return (
    <SubTabContainer>
      <SubTab>재고 관리</SubTab>
      <SubTab>전체 재료</SubTab>
    </SubTabContainer>
  );
}

const SubTabContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  margin: 20px;
`;

const SubTab = styled.div`
  font-size: 24px;

  margin: 10px;
  background-color: white;
  padding: 10px;
  border-radius: 10px;
  cursor: pointer;
`;
