import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import { useDispatch, useSelector } from "react-redux";

import Colors from "theme/colors";
import MyTextInput from "./Input/MyTextInput";
import MyToggleInput from "./Input/MyToggleInput";
import MySelect from "./Input/MySelect";
import { ApplyRegister } from "components";
import api from "api";
import { actions, selectors } from "data";

export default function SignUpFormSocial() {
  const [step, setStep] = useState(1);
  const [departmentList, setDepartmentList] = useState([]);
  const dispatch = useDispatch();

  const loginStatus = useSelector(selectors.user.getLoginStatus);
  const { emailAddress, id } = loginStatus.data;

  const modal = useSelector(selectors.modal.getModal);

  useEffect(() => {
    const wrapper = async () => {
      const res = await api.departmentApi.getDepartmentList();
      setDepartmentList(res.data);
    };
    wrapper();
  }, []);

  const submitHandler = async values => {
    const userRegisterInfo = {
      emailAddress: emailAddress,
      isAdmin: values.isAdmin,
      name: values.name,
      type: "social",
      DepartmentId: values.orgName,
      providerKey: id,
      providerType: "google"
    };
    dispatch(actions.user.register(userRegisterInfo));
  };
  return (
    <Formik
      initialValues={{
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
            <div>{emailAddress} 에대한 추가정보 기입</div>
            <MyToggleInput label="관리자" name="isAdmin" type="checkbox" />
            <StyledButton type="submit">다음</StyledButton>
          </StyledForm>
        ) : step === 2 ? (
          <StyledForm>
            <MyTextInput label="이름" name="name" type="text" />
            <MyTextInput label="담당업무" name="duty" type="text" />
            <MySelect label="조직명" name="orgName" options={departmentList} />
            <StyledButton type="submit">가입신청</StyledButton>
            {modal && <ApplyRegister />}
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
