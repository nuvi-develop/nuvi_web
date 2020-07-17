import React from "react";
import styled from "styled-components";

import ConditionalModal from "./ConditionalModal";

const MODAL_COMPONENTS = {
  CONDITIONAL: ConditionalModal
};

export default function Modal({ modalType, modalProps }) {
  const SpecificModal = modalType ? MODAL_COMPONENTS[modalType] : null;
  return modalType ? (
    <Container>
      <SpecificModal {...modalProps} />
    </Container>
  ) : null;
}

const Container = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.5);
`;
