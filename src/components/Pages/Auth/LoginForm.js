import React from "react";
import styled from "styled-components";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import { useDispatch, useSelector } from "react-redux";

import Colors from "theme/colors";
import MyTextInput from "./Input/MyTextInput";
import MyErrorPlaceHolder from "./Input/MyErrorPlaceHolder";
import GoogleLogin from "./Social/GoogleLogin";
import StyledButton from "./Button/StyledButton";
import { actions, selectors } from "data";
import colors from "theme/colors";
import px2vw from "utils";

export default function LoginForm() {
  const dispatch = useDispatch();
  const loginStatus = useSelector(selectors.user.getLoginStatus);

  const submitHandler = async userLoginInfo => {
    dispatch(actions.user.loginTraditional(userLoginInfo));
  };

  const findPasswordHandler = async () => {
    dispatch(actions.user.toggleAuthMode("findPassword"));
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
          {/* <MyToggleInput label="관리자" name="isAdmin" type="checkbox" /> */}
          <MyErrorPlaceHolder message={loginStatus.error?.message} />
          <StyledButton type="submit">로그인</StyledButton>
          {/* <FindPassword onClick={findPasswordHandler}>
            비밀번호를 잊어버리셨나요?
          </FindPassword> */}
          <GoogleLogin />
        </StyledForm>
      </Formik>
    </>
  );
}

const StyledForm = styled(Form)`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const FindPassword = styled.div`
  cursor: pointer;
  color: white;
  font-size: 16px;
`;
