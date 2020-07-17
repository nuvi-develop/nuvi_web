import React from "react";
import styled from "styled-components";
import { useField } from "formik";

import Colors from "theme/colors";

export default function GeneralInputComp(props) {
  const [field, meta] = useField(props);
  return (
    <Container>
      <Label>{props.label}</Label>
      <StyledInput {...field} {...props} />
      <ErrorPlaceHolder>
        {meta.touched && meta.error && <div>{meta.error}</div>}
      </ErrorPlaceHolder>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  margin: 0px 20px;
`;

const Label = styled.div`
  font-size: 16px;
  margin-bottom: 20px;
`;

const StyledInput = styled.input`
  outline: none;
  width: 120px;
  border: ;
  text-align: center;
`;

const Placeholder = styled.div`
  height: 40px;
`;

const ErrorPlaceHolder = styled.div`
  margin-top: 5px;
  height: 16px;
  font-size: 16px;
  color: ${Colors.green_2};
`;
