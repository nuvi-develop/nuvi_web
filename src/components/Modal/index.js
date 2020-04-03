import React from "react";
import styled from "styled-components";
import { useDispatch } from "react-redux";

import Colors from "theme/colors";
import { actions } from "data";

export default function ModalComp({ modalInfo }) {
  const dispatch = useDispatch();
  const { onClick, contents, buttonName } = modalInfo;
  return (
    <Background>
      <Modal>
        <Text>{contents}</Text>
        <ButtonsContainer>
          <Button onClick={onClick}>{buttonName}</Button>
          <CancleButton onClick={() => dispatch(actions.modal.setModal(false))}>
            취소
          </CancleButton>
        </ButtonsContainer>
      </Modal>
    </Background>
  );
}

const Background = styled.div`
  position: absolute;
  z-index: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.5);
`;

const Modal = styled.div`
  width: 660px;
  height: 400px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: white;
  border: 1px solid ${Colors.gray_1};
  border-radius: 10px;
`;

const Text = styled.div`
  color: ${Colors.blue_1};
  font-size: 40px;
  text-align: center;
`;

const ButtonsContainer = styled.div`
  display: flex;
`;

const Button = styled.button`
  background-color: ${Colors.blue_1};
  border: 1px solid ${Colors.gray_1};
  border-radius: 10px;
  color: white;
  font-size: 32px;
  margin-botton: 10px;
  width: 200px;
  height: 60px;
  margin: 20px;
`;

const CancleButton = styled(Button)`
  background-color: pink;
`;
