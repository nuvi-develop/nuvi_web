import React from "react";
import styled from "styled-components";
import Colors from "theme/colors";

export default function ApplyRegister({ onClick, contents, buttonName }) {
  return (
    <Background>
      <Modal>
        <Text>{contents}</Text>
        <Button onClick={onClick}>{buttonName}</Button>
      </Modal>
    </Background>
  );
}

const Background = styled.div`
  position: absolute;
  z-index: 3;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
  background-color: ${Colors.gray_1};
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

const Button = styled.button`
  background-color: ${Colors.blue_1};
  border: 1px solid ${Colors.gray_1};
  border-radius: 10px;
  color: white;
  font-size: 40px;
  margin-botton: 10px;
  width: 240px;
  height: 90px;
`;
