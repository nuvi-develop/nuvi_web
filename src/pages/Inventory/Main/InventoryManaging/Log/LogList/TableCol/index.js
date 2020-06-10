import React from "react";
import styled from "styled-components";

import { Col } from "theme/style";
import EditableContent, { ContentDiv } from "./EditableContent";

export default function TableCol({ label, data, name }) {
  return (
    <Container>
      <Label>{label}</Label>
      {data.map((d, i) =>
        name === "recordDate" ? (
          <ContentDiv key={d.id} d={d} />
        ) : (
          <EditableContent key={d.id} d={d} name={name} />
        )
      )}
    </Container>
  );
}

const Container = styled(Col)`
  align-items: center;
`;

const Label = styled.div`
  margin-bottom: 20px;
`;
