import React from "react";
import styled from "styled-components";

import Colors from "theme/colors";

export default function ConditionalModal({
  onConfirm,
  onCancel,
  contents,
  confirmName
}) {
  return (
    <Modal>
      <Text>{contents}</Text>
      <ButtonsContainer>
        <Button onClick={onConfirm}>{confirmName}</Button>

        <CancleButton onClick={onCancel}>취소</CancleButton>
      </ButtonsContainer>
    </Modal>
  );
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
