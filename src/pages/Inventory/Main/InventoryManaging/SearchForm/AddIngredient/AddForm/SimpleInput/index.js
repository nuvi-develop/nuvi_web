import React from "react";
import styled from "styled-components";
import { useField } from "formik";

import Colors from "theme/colors";

export default function TextInput({ label, ...props }) {
  const [field, meta] = useField(props);
  return (
    <Container>
      <Label>{label}</Label>
      <StyledInput {...field} {...props} placheholder={""} />
      {meta.touched && meta.error && (
        <ErrorPlaceHolder>{meta.error}</ErrorPlaceHolder>
      )}
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  margin-bottom: 10px;
  align-items: center;
`;

const StyledInput = styled.input`
  height: 32px;
  font-size: 16px;
  border: solid 1px ${({ theme }) => theme.gray_2};
`;

const Label = styled.div`
  display: flex;
  width: 50px;
  align-items: center;
  margin-right: 10px;
`;

const ErrorPlaceHolder = styled.div`
  margin-left: 10px;
  height: 16px;
  font-size: 16px;
  color: ${Colors.green_2};
`;
