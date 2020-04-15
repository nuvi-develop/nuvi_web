import React from "react";
import styled from "styled-components";

import TrashGraphElement from "./TrashGraphElement";

const data = [
  { name: "밥", value: 600 },
  { name: "된장국", value: 720 },
  { name: "시금치", value: 397 },
  { name: "김치", value: 327 },
  { name: "불고기", value: 1000 },
  { name: "멸치볶음", value: 720 }
];

export default function TrashGraph() {
  return (
    <GraphContainer>
      {data.map(({ name, value }) => (
        <TrashGraphElement key={name} name={name} value={value} />
      ))}
    </GraphContainer>
  );
}

const GraphContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  width: 100%;
`;
