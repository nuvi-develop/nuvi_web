import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import styled from "styled-components";

import api from "api";

export default function UpdatePassword() {
  const submitHanlder = async values => {
    await api.userApi
      .updateUserPassword()
      .catch(err => console.log("err", err));
  };
  return (
    <Formik
      initialValues={{
        password: "",
        passwordConfirm: ""
      }}
      onSubmit={submitHanlder}
    >
      <Form>
        <Field
          name="password"
          style={{
            width: "430px",
            backGroundColor: "gray",
            border: "none",
            borderBottom: "5px solid gray",
            color: "white",
            fontSize: "40px",
            padding: "5px"
          }}
          placeholder="비밀번호"
        />
        <Field
          name="passwordConfirm"
          style={{
            width: "430px",
            backGroundColor: "gray",
            border: "none",
            borderBottom: "5px solid gray",
            color: "white",
            fontSize: "40px",
            padding: "5px"
          }}
          placeholder="비밀번호 확인"
        />
        <button type="submit">update</button>
      </Form>
    </Formik>
  );
}

const Text = styled.div`
  color: red;
  font-size: 50px;
  width: 300px;
  height: 300px;
  border: 1px solid black;
`;
