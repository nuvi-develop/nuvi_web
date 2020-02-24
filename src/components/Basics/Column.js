import React from "react";
import styled from "styled-components";

export default function Column(props) {
  return <FlexColumn {...props}>{props.children}</FlexColumn>;
}

const FlexColumn = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: ${({ spaceBetween, spaceAround }) =>
    spaceBetween ? "spaceBetween" : spaceAround ? "spaceAround" : "center"};
`;
