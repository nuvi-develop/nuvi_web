import React from "react";
import styled from "styled-components";
import { useField } from "formik";

export default function TextInput({ label, ...props }) {
  const [field, meta] = useField(props);
  return (
    <Container>
      <Label>{label}</Label>
      <StyledInput {...field} {...props} placheholder={""} />
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  max-width: 500px;
`;

const StyledInput = styled.input`
  height: 32px;
  font-size: 16px;
  border: solid 1px ${({ theme }) => theme.gray_2};
`;

const Label = styled.div`
  display: flex;
  align-items: center;
  margin-right: 10px;
`;
