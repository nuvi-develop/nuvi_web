import React from "react";
import styled from "styled-components";
import { useDispatch } from "react-redux";

import { actions } from "data";
import Colors from "theme/colors";

export default function ApplyRegister() {
  const dispatch = useDispatch();
  return (
    <Modal>
      <Text>
        신청되었습니다. <br></br>확인후 관리자로 등록 됩니다.
      </Text>
      <ButtonsContainer>
        <Button
          onClick={() => {
            dispatch(actions.modal.clearModal());
            dispatch(actions.user.toggleAuthMode("login"));
          }}
        >
          확인
        </Button>
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

{
  /* <Modal
modalInfo={{
  onClick: () => {
    dispatch(actions.modal.clearModal());
    dispatch(actions.user.toggleAuthMode("login"));
  },
  contents: (
    <>
      신청되었습니다. <br></br>확인후 관리자로 등록 됩니다.
    </>
  ),
  buttonName: "확인"
}}
/> */
}
