import React from "react";
import styled from "styled-components";
import { useFormik } from "formik";
import * as Yup from "yup";

export default function SimpleInput(props) {
  const formik = useFormik({
    initialValues: {
      value: ""
    }
  });

  const handleChange = e => {
    formik.handleChange(e);
    const { value } = formik.values;
    console.log("value", value);
  };
  return (
    <TextInput
      name="value"
      type="text"
      onChange={handleChange}
      value={formik.values.value}
      {...props}
    />
  );
}

const TextInput = ({ label, ...props }) => {
  return (
    <Container>
      <Label>{label}</Label>
      <StyledInput {...props} placheholder={""} />
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  margin-bottom: 10px;
`;

const StyledInput = styled.input`
  width: 300px;
`;

const Label = styled.div`
  width: 150px;
  display: flex;
  align-items: center;
`;
