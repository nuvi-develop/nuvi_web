import React, { useState } from "react";
import styled from "styled-components";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import { useDispatch, useSelector } from "react-redux";

import Colors from "theme/colors";
import MyTextInput from "./Input/MyTextInput";
import MyToggleInput from "./Input/MyToggleInput";
import MyErrorPlaceHolder from "./Input/MyErrorPlaceHolder";
import GoogleLogin from "./Social/GoogleLogin";
import { actions, selectors } from "data";
import api from "api";
import colors from "theme/colors";

export default function LoginForm() {
  const dispatch = useDispatch();
  const loginStatus = useSelector(selectors.user.getLoginStatus);
  const authMode = useSelector(selectors.user.getAuthMode);

  const submitHandler = async userLoginInfo => {
    dispatch(actions.user.login(userLoginInfo));
  };
  return (
    <>
      <Formik
        initialValues={{
          emailAddress: "",
          password: "",
          isAdmin: false
        }}
        validationSchema={Yup.object({
          emailAddress: Yup.string()
            .email("올바른 이메일이 아닙니다.")
            .required("필수항목 입니다."),
          password: Yup.string().required("필수항목 입니다."),

          isAdmin: Yup.boolean().required("필수항목 입니다.")
        })}
        onSubmit={submitHandler}
      >
        <StyledForm>
          <MyTextInput label="이메일" name="emailAddress" type="text" />
          <MyTextInput label="비밀번호" name="password" type="password" />
          <MyToggleInput label="관리자" name="isAdmin" type="checkbox" />
          <MyErrorPlaceHolder message={loginStatus.error?.message} />
          <StyledButton type="submit">로그인</StyledButton>
          <GoogleLogin />
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
  margin-right: 100px;
`;

const StyledButton = styled.button`
  width: 180px;
  height: 80px;
  border-radius: 40px;
  border: 10px solid ${Colors.green_2};
  background-color: ${Colors.gray_1};
  align-self: flex-end;
  color: ${Colors.green_2};
  font-size: 36px;
  margin: 30px;
`;
