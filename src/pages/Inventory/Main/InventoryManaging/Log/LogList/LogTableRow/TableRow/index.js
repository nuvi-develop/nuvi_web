import React from "react";
import styled from "styled-components";
import { format } from "date-fns";

import EditableContent, { ContentDiv } from "./EditableContent";

export default function TableRow({ log }) {
  const { id, recordDate, order, use, stock, cost, comment } = log;

  return (
    <Container>
      <DataContainer>
        <ContentDiv dataId={id} dataValue={recordDate} />
      </DataContainer>
      <DataContainer>
        <EditableContent name="order" dataValue={order} dataId={id} />
      </DataContainer>
      <DataContainer>
        <EditableContent name="use" dataValue={use} dataId={id} />
      </DataContainer>
      <DataContainer>
        <EditableContent name="stock" dataValue={stock} dataId={id} disabled />
      </DataContainer>
      <DataContainer>
        <EditableContent name="cost" dataValue={cost} dataId={id} />
      </DataContainer>
      <DataContainer>
        <EditableContent
          name="comment"
          dataValue={comment}
          dataId={id}
          noValidation
        />
      </DataContainer>
    </Container>
  );
}

const Container = styled.div`
  display: grid;
  grid-template-columns: 25% 15% 15% 15% 15% 15%;
  gap: 1px;
  justify-items: center;
  align-items: center;
  padding: 5px 2px;
  border-radius: 10px;

  &:hover {
    background-color: ${({ theme }) => theme.gray_2};
  }
`;

const DataContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;
