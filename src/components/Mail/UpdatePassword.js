import React, { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import styled from "styled-components";

export default function UpdatePassword() {
  const [updated, setUpdated] = useState(false);
  return (
    <Formik>
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
        <button onClick={() => setUpdated(true)}>update</button>
        {updated && <div> updated!</div>}
        <a href="http://localhost:3000/daily">daily</a>
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
