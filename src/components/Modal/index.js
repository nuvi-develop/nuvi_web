import React from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";

import { selectors } from "data";

import ConditionalModal from "./ConditionalModal";
import InfoModal from "./InfoModal";
import ApplyRegister from "./ApplyRegister";
import GraphModal from "./GraphModal";
import EtcIngredientsModal from "./EtcIngredientsModal";

const MODAL_COMPONENTS = {
  CONDITIONAL: ConditionalModal,
  INFO: InfoModal,
  APPLY_REGISTER_MODAL: ApplyRegister,
  GRAPH: GraphModal,
  ETC_INGREDIENTS: EtcIngredientsModal
};

export default function Modal() {
  const { modalType, modalProps } = useSelector(selectors.modal.getModal);
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

// const Modal = styled.div`
//   width: 300px;
//   height: 230px;
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   justify-content: center;
//   background-color: white;
//   border: 1px solid ${Colors.gray_1};
//   border-radius: 10px;
//   && {
//     ${({ style }) => style}
//   }
// `;
