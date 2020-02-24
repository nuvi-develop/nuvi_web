import React from "react";
import styled from "styled-components";

import SummaryCard from "./SummaryCard";

export default function SummaryContainerComponent() {
  return (
    <SummaryContainer>
      <SummaryCard
        title="예상 식수 인원"
        date="2/28"
        contents={{ lunch: "780명", dinner: "627명" }}
      />
      <SummaryCard
        title="이전 잔반 최고메뉴"
        date="2/27"
        contents={{ lunch: "깍두기", dinner: "시금치" }}
        subContents={{ lunch: "27인분", dinner: "20인분" }}
      />
      <SummaryCard
        title="이전 잔식 최고메뉴"
        date="2/27"
        contents={{ lunch: "불고기", dinner: "된장국" }}
        subContents={{ lunch: "27인분", dinner: "27인분" }}
      />
    </SummaryContainer>
  );
}

const SummaryContainer = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  grid-column-start: 1;
  grid-column-end: 4;
  margin-top: 30px;
`;
