import React from "react";
import styled from "styled-components";
import { Formik, Form } from "formik";
import { useDispatch, useSelector } from "react-redux";

import MyTextInput from "components/Pages/Auth/Input/MyTextInput";
import { actions, selectors } from "data";
import api from "api";
import { Modal } from "components";
import { updatePasswordHtml } from "components/Mail";
import Colors from "theme/colors";

export default function FindPassword() {
  const dispatch = useDispatch();
  const modal = useSelector(selectors.modal.getModal);
  const submitHandler = values => {
    const { emailAddress } = values;
    const onClick = () => {
      dispatch(actions.modal.clearModal());
      dispatch(actions.user.toggleAuthMode("login"));
    };

    const updatePasswordInfo = {
      emailAddress,
      htmlMessage: updatePasswordHtml
    };
    dispatch(actions.user.findPassword({ updatePasswordInfo, onClick }));
  };

  return (
    <>
      <Formik
        initialValues={{
          emailAddress: ""
        }}
        onSubmit={submitHandler}
      >
        <StyledForm>
          <StyledLabel>가입한 이메일을 입력합니다.</StyledLabel>
          <MyTextInput label="이메일" name="emailAddress" type="text" />
          <StyledButton type="submit">전송</StyledButton>
          {modal.contents && <Modal modalInfo={modal} />}
        </StyledForm>
      </Formik>
    </>
  );
}

const StyledForm = styled(Form)`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex: 1;
`;

const StyledButton = styled.button`
  width: 180px;
  height: 80px;
  border-radius: 40px;
  border: 10px solid ${Colors.green_2};
  background-color: ${Colors.gray_1};

  color: ${Colors.green_2};
  font-size: 36px;
  margin: 30px;
`;

const StyledLabel = styled.div`
  font-size: 24px;
  color: white;
`;
