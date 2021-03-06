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
  grid-column: 1/5;
  margin-top: 30px;
  background-color: ${Colors.blue_1};
  border-radius: 10px;
  padding: 20px;
  margin-right: 30px;
`;

const FilterGroup = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;
