import React from "react";
import styled from "styled-components";
import { Formik, Form } from "formik";
import { useDispatch, useSelector } from "react-redux";
import randomstring from "randomstring";

import MyTextInput from "components/Pages/Auth/Input/MyTextInput";
import StyledButton from "./Button/StyledButton";
import { actions, selectors } from "data";
import { Modal } from "components";

export default function FindPassword() {
  const dispatch = useDispatch();
  const modal = useSelector(selectors.modal.getModal);
  const submitHandler = values => {
    const { emailAddress } = values;
    const onClick = () => {
      dispatch(actions.modal.clearModal());
      dispatch(actions.user.toggleAuthMode("login"));
    };

    const tempPassword = randomstring.generate(15);

    const tempPasswordInfo = {
      emailAddress,
      tempPassword,
      htmlMessage: "<div>임시비밀번호</div>" + tempPassword
    };
    dispatch(actions.user.giveTempPassword({ tempPasswordInfo, onClick }));
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

const StyledLabel = styled.div`
  font-size: 24px;
  color: white;
`;
