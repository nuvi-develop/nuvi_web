import React from "react";

import styled from "styled-components";
import { useFormik } from "formik";
import * as Yup from "yup";

export default function SimpleInput({ initialValue, onChange, ...props }) {
  const formik = useFormik({
    initialValues: {
      value: initialValue
    }
  });

  const handleChange = e => {
    formik.handleChange(e);
    const { value } = e.target;
    onChange(value);
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
  max-width: 500px;
`;

const StyledInput = styled.input`
  flex: 1;
  height: 32px;
  font-size: 16px;
  border: solid 1px ${({ theme }) => theme.gray_2};
`;

const Label = styled.div`
  width: 150px;
  display: flex;
  align-items: center;
`;
