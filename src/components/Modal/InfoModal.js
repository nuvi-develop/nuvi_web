import React from "react";
import styled from "styled-components";

import Colors from "theme/colors";

export default function InfoModal({ contents }) {
  return <Modal>{contents}</Modal>;
}

const Modal = styled.div`
  width: 300px;
  height: 230px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: white;
  border: 1px solid ${Colors.gray_1};
  border-radius: 10px;
`;
