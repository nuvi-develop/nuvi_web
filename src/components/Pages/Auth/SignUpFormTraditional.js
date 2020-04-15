import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import { useDispatch, useSelector } from "react-redux";

import MyTextInput from "./Input/MyTextInput";
import MyToggleInput from "./Input/MyToggleInput";
import MySelect from "./Input/MySelect";
import StyledButton from "./Button/StyledButton";
import { ApplyRegister } from "components";
import api from "api";
import { actions, selectors } from "data";

export default function SignUpFormTraditional() {
  const [step, setStep] = useState(1);
  const [departmentList, setDepartmentList] = useState([]);
  const dispatch = useDispatch();

  const modal = useSelector(selectors.modal.getModal);

  useEffect(() => {
    const wrapper = async () => {
      try {
        const res = await api.departmentApi.getDepartmentList();
        setDepartmentList(res.data);
      } catch (error) {
        dispatch(actions.router.push("/500"));
      }
    };
    wrapper();
  }, []);

  const submitHandler = async values => {
    const userRegisterInfo = {
      emailAddress: values.emailAddress,
      password: values.password,
      isAdmin: values.isAdmin,
      name: values.name,
      type: "traditional",
      DepartmentId: values.orgName
    };
    dispatch(actions.user.register(userRegisterInfo));
  };
  return (
    <Formik
      initialValues={{
        emailAddress: "",
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
      validate={async values => {
        const errors = {};
        const { emailAddress } = values;
        const isSameEmail = await api.authApi.checkEmail({
          emailAddress
        });
        if (isSameEmail.data) {
          errors.emailAddress = "가입된 이메일 입니다.";
        }
        return errors;
      }}
      validationSchema={Yup.object({
        emailAddress: Yup.string()
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
                .test("Org selected", "해당 목록중 선택해 주세요.", value => {
                  return +value !== 0;
                })
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
          : step === 2 && submitHandler(values);
      }}
    >
      {({ values }) =>
        step === 1 ? (
          <StyledForm>
            <MyTextInput label="이메일" name="emailAddress" type="text" />
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
            <MySelect label="조직명" name="orgName" options={departmentList} />
            <StyledButton type="submit">가입신청</StyledButton>
            {modal.contents && <ApplyRegister />}
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
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
