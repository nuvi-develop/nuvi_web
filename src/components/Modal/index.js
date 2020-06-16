import React from "react";
import styled from "styled-components";
import { useDispatch } from "react-redux";

import Colors from "theme/colors";
import { actions } from "data";

export default function ModalComp({ modalInfo, withCancel }) {
  const dispatch = useDispatch();
  const { onClick, contents, buttonName } = modalInfo;
  return (
    <Background>
      <Modal>
        <Text>{contents}</Text>
        {buttonName && (
          <ButtonsContainer>
            <Button onClick={onClick}>{buttonName}</Button>
            {withCancel && (
              <CancleButton
                onClick={() => dispatch(actions.modal.setModal(false))}
              >
                취소
              </CancleButton>
            )}
          </ButtonsContainer>
        )}
      </Modal>
    </Background>
  );
}

const Background = styled.div`
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

const Text = styled.div`
  color: ${Colors.blue_1};
  width: 230px;
  font-size: 16px;
  text-align: center;
`;

const ButtonsContainer = styled.div`
  display: flex;
  margin: 10px;
`;

const Button = styled.div`
  background-color: ${Colors.blue_1};
  border: 1px solid ${Colors.gray_1};
  border-radius: 10px;
  color: white;
  font-size: 16px;

  width: 100px;
  height: 60px;
  margin: 10px 0;
  text-align: center;
  line-height: 60px;
`;

const CancleButton = styled(Button)`
  background-color: pink;
`;
