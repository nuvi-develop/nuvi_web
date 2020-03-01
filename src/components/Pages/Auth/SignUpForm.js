import React from "react";
import styled from "styled-components";
import { Formik, Form } from "formik";
import * as Yup from "yup";

import Colors from "theme/colors";
import MyTextInput from "./Input/MyTextInput";

export default function SignUpForm() {
  return (
    <Formik
      initialValues={{
        email: "",
        password: "",
        passwordConfirm: "",
        isAdmin: false,
        orgName: ""
      }}
      validationSchema={Yup.object({
        email: Yup.string()
          .email("올바른 이메일이 아닙니다.")
          .required("필수항목 입니다."),
        password: Yup.string().required("필수항목 입니다."),
        passwordConfirm: Yup.string().required("필수항목 입니다."),
        isAdmin: Yup.boolean().required("필수항목 입니다."),
        orgName: Yup.string().required("필수항목 입니다.")
      })}
      onSubmit={values => {
        console.log(values);
      }}
    >
      <StyledForm>
        <MyTextInput label="이메일" name="email" type="text" />
        <MyTextInput label="비밀번호" name="password" type="password" />
        <MyTextInput
          label="비밀번호 확인"
          name="passwordConfirm"
          type="password"
        />
        <MyTextInput label="관리자" name="isAdmin" type="text" />
        <MyTextInput label="조직명" name="orgName" type="text" />
        <StyledButton tyle="submit">다음</StyledButton>
      </StyledForm>
    </Formik>
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
