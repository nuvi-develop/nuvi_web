import React from "react";
import styled from "styled-components";

import Colors from "theme/colors";

export default function MyErrorPlaceHolder({ message }) {
  return <ErrorPlaceHolder>{message}</ErrorPlaceHolder>;
}

const ErrorPlaceHolder = styled.div`
  height: 20px;
  font-size: 24px;
  text-align: right;
  align-self: flex-end;
  margin-right: 10px;
  opacity:${({ message }) => (message ? 1 : 0)}
  transition: 1s;
  color: ${Colors.green_2};
`;
