import React from "react";
import styled from "styled-components";

export default function Row(props) {
  return <FlexRow {...props}>{props.children}</FlexRow>;
}

const FlexRow = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: ${({ spaceBetween, spaceAround }) => {
    return spaceBetween
      ? "space-between"
      : spaceAround
      ? "space-around"
      : "center";
  }};
  width: ${({ width }) => width};
`;
