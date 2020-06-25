import React from "react";
import { Formik, Form } from "formik";
import styled from "styled-components";
import * as Yup from "yup";
import { useDispatch, useSelector } from "react-redux";

import MyTextInput from "../Auth/Input/MyTextInput";
import MyErrorPlaceHolder from "../Auth/Input/MyErrorPlaceHolder";
import { actions, selectors } from "data";

export default function UpdatePassword() {
  const dispatch = useDispatch();
  const user = useSelector(selectors.user.getUserSession);
  const updatePasswordStatus = useSelector(
    selectors.user.getUpdatePasswordStatus
  );
  const userId = user.id;
  const submitHandler = ({ password, newPassword }) => {
    const updatePasswordInfo = {
      userId,
      password,
      newPassword
    };
    dispatch(actions.user.updatePassword(updatePasswordInfo));
  };

  return (
    <Formik
      initialValues={{
        password: "",
        newPassword: "",
        newPasswordConfirm: ""
      }}
      validationSchema={Yup.object({
        password: Yup.string().required("필수항목 입니다."),
        newPassword: Yup.string().required("필수항목 입니다."),
        newPasswordConfirm: Yup.string()
          .oneOf([Yup.ref("newPassword"), null], "비밀번호가 다릅니다")
          .required("필수항목 입니다.")
      })}
      onSubmit={submitHandler}
    >
      <StyledForm>
        <StyledMyTextInput
          name="password"
          label="기존 비밀번호"
          type="password"
        />
        <StyledMyTextInput
          name="newPassword"
          label="새 비밀번호"
          type="password"
        />
        <StyledMyTextInput
          name="newPasswordConfirm"
          label="새 비밀번호 확인"
          type="password"
        />
        <MyErrorPlaceHolder message={updatePasswordStatus.error?.message} />
        <Button type="submit">변경</Button>
      </StyledForm>
    </Formik>
  );
}

const StyledForm = styled(Form)`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 30px;
`;

const Button = styled.button`
  width: 100px;
  height: 60px;
  text-align: center;
  line-height: 60px;
  background-color: gray;
  border-radius: 20px;
  font-size: 20px;
  cursor: pointer;
  margin-top: 20px;
`;

const StyledMyTextInput = styled(MyTextInput)`
  width: 200px;
  background-color: white;
  font-size: 24px;
  color: black;

  &::placeholder {
    color: gray;
  }
`;
