import React from "react";
import styled from "styled-components";

import { Col } from "theme/style";
import LogListHead from "./LogListHead";
import LogTable from "./LogTable";

export default function LogListComp() {
  return (
    <Container>
      <LogListHead />
      <LogTable />
    </Container>
  );
}

const Container = styled(Col)`
  height: 50%;
`;
