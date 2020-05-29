import React from "react";
import styled from "styled-components";
import { useField } from "formik";

export default function GeneralInputComp(props) {
  const [field, meta] = useField(props);
  return (
    <Container>
      <Label>{props.label}</Label>
      <StyledInput {...field} {...props} />
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Label = styled.div`
  font-size: 16px;
  margin-bottom: 20px;
`;

const StyledInput = styled.input`
  outline: none;
  width: 150px;
  border: ;
  text-align: center;
`;
