import React, { useState } from "react";
import styled from "styled-components";
import { Formik, Form } from "formik";
import * as Yup from "yup";

import Colors from "theme/colors";
import MyTextInput from "./Input/MyTextInput";
import MyToggleInput from "./Input/MyToggleInput";
import MySelect from "./Input/MySelect";
import { ApplyRegister } from "components";

const options = ["서울시청", "경기도교육청"];

export default function SignUpForm() {
  const [step, setStep] = useState(1);
  const [modal, setModal] = useState(false);
  console.log("modal", modal);
  return (
    <Formik
      initialValues={{
        email: "",
        password: "",
        passwordConfirm: "",
        isAdmin: false,
        orgName: "",
        name: "",
        duty: "",
        age: "",
        height: "",
        weight: "",
        job: ""
      }}
      validationSchema={Yup.object({
        email: Yup.string()
          .email("올바른 이메일이 아닙니다.")
          .required("필수항목 입니다."),
        password: Yup.string().required("필수항목 입니다."),
        passwordConfirm: Yup.string()
          .oneOf([Yup.ref("password"), null], "비밀번호가 다릅니다")
          .required("필수항목 입니다."),
        isAdmin: Yup.boolean().required("필수항목 입니다."),
        ...(step === 2
          ? {
              name: Yup.string().required("필수항목 입니다."),
              orgName: Yup.string()
                .oneOf(options, "해당 목록중 선택해 주세요.")
                .required("필수항목 입니다."),
              duty: Yup.string().required("필수항목 입니다.")
            }
          : step === 3
          ? {
              name: Yup.string().required("필수항목 입니다."),
              age: Yup.string().required("필수항목 입니다."),
              height: Yup.string().required("필수항목 입니다."),
              weight: Yup.string().required("필수항목 입니다."),
              job: Yup.string().required("필수항목 입니다.")
            }
          : {})
      })}
      onSubmit={values => {
        step === 1
          ? values.isAdmin
            ? setStep(2)
            : setStep(3)
          : console.log(values);
        step === 2 && setModal(true);
      }}
    >
      {({ values }) =>
        step === 1 ? (
          <StyledForm>
            <MyTextInput label="이메일" name="email" type="text" />
            <MyTextInput label="비밀번호" name="password" type="password" />
            <MyTextInput
              label="비밀번호 확인"
              name="passwordConfirm"
              type="password"
            />
            <MyToggleInput label="관리자" name="isAdmin" type="checkbox" />
            <StyledButton type="submit">다음</StyledButton>
          </StyledForm>
        ) : step === 2 ? (
          <StyledForm>
            <MyTextInput label="이름" name="name" type="text" />
            <MyTextInput label="담당업무" name="duty" type="text" />
            <MySelect label="조직명" name="orgName" options={options} />
            <StyledButton type="submit">가입신청</StyledButton>
            {modal && <ApplyRegister onClick={() => setModal(false)} />}
          </StyledForm>
        ) : step === 3 ? (
          <StyledForm>
            <MyTextInput label="이름" name="name" type="text" />
            <MyTextInput label="나이" name="age" type="text" />
            <MyTextInput label="키" name="height" type="text" />
            <MyTextInput label="몸무게" name="weight" type="text" />
            <MyTextInput label="직업" name="job" type="text" />
            <StyledButton type="submit">가입신청</StyledButton>
          </StyledForm>
        ) : null
      }
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
