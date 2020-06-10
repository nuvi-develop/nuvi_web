import React, { useState } from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";

import { selectors } from "data";
import { reduceForTable } from "utils/pages/inventory";
import { Col } from "theme/style";

import LogListHead from "./LogListHead";
import LogTableDisplay from "./LogTableDisplay";

export default function LogListComp() {
  const [isEditing, setIsEditing] = useState(false);

  const logs = useSelector(selectors.inventory.getCurrentIngredientLogs);
  const logsForTable = reduceForTable(logs);

  console.log("logsForTable", logsForTable);

  return (
    <Container>
      <LogListHead isEditing={isEditing} setIsEditing={setIsEditing} />
      <LogTableDisplay logsForTable={logsForTable} />
    </Container>
  );
}

const Container = styled(Col)`
  height: 50%;
`;
