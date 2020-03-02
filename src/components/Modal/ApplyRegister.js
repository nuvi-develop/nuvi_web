import React from "react";
import styled from "styled-components";
import Colors from "theme/colors";

export default function ApplyRegister({ onClick }) {
  return (
    <Background>
      <Modal>
        <Text>
          신청되었습니다.<br></br> 확인후 관리자로 등록 됩니다.
        </Text>
        <Button onClick={onClick}>확인</Button>
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
