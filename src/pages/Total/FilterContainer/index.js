import React from "react";
import styled from "styled-components";

import Colors from "theme/colors";
import { DefaultTitle } from "components";
import DateFilter from "./DateFilter";
import GeneralFilter from "./GeneralFilter";

const filter = "/icons/filter.svg";

export default function FilterContainerComponent() {
  return (
    <FilterContainer>
      <DefaultTitle icon={filter} title="FILTER" color="white" />
      <FilterGroup>
        <DateFilter title="시작 날짜" />
        <DateFilter title="종료 날짜" />
        <GeneralFilter title="점심/저녁" />
      </FilterGroup>
    </FilterContainer>
  );
}

const FilterContainer = styled.div`
  display: flex;
  flex-direction: column;
  border-radius: 10px;
  background-color: ${Colors.blue_1};
  padding: 15px;
  width: 100%;
  margin-bottom: 1vh;

  @media (min-width: 1200px) {
    height: 16vh;
  }
`;

const FilterGroup = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  @media (min-width: 1200px) {
    flex-direction: row;
    width: 90%;
    align-self: center;
  }
`;
