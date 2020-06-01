import React, { useState } from "react";
import styled from "styled-components";

import { Row } from "theme/style";

import IngredientsTableCol from "./IngredientsTableCol";
import mockData from "./mockData";

const leftButton = process.env.PUBLIC_URL + "/icons/basics/leftbutton.svg";
const rightButton = process.env.PUBLIC_URL + "/icons/basics/rightButton.svg";

export default function IngredientsTableComp() {
  const [colOffset, setColOffset] = useState(0);
  const columnNumber = 6;
  const slicedData = mockData.slice(0 + colOffset, columnNumber + colOffset);

  return (
    <Container>
      <Navigator
        src={leftButton}
        onClick={() => setColOffset(prev => prev - 1)}
      />
      {slicedData.map(data => (
        <IngredientsTableCol data={data} key={data.category} />
      ))}
      <Navigator
        src={rightButton}
        onClick={() => setColOffset(prev => prev + 1)}
      />
    </Container>
  );
}

const Container = styled(Row)`
  justify-content: space-between;
  flex: 1;
  margin-top: 50px;
`;

const Navigator = styled.img`
  cursor: pointer;
  //   align-self: flex-start;
`;
