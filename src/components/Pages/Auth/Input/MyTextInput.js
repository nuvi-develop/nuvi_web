import React from "react";
import styled from "styled-components";
import { useField } from "formik";

import Colors from "theme/colors";

const MyTextInput = ({ label, ...props }) => {
  const { name } = props;
  const [field, meta] = useField(props);
  return (
    <TextInputContainer>
      <StyledLabel htmlFor={name}>{label}</StyledLabel>
      <InputWrapper>
        <StyledInput {...field} {...props} />
        <ErrorPlaceHolder>
          {meta.touched && meta.error ? meta.error : " "}
        </ErrorPlaceHolder>
      </InputWrapper>
    </TextInputContainer>
  );
};

const TextInputContainer = styled.div`
  display: flex;
  align-items: center;
  margin: 10px 0;
`;

const StyledLabel = styled.label`
  width: 270px;
  text-align: right;
  font-size: 50px;
  color: white;
  margin-right: 50px;
`;

const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const StyledInput = styled.input`
  width: 430px;
  background-color: ${Colors.gray_1};
  border: none;
  border-bottom: 5px solid ${Colors.gray_2};
  color: white;
  font-size: 40px;
  padding: 5px;

  &:focus {
    border-bottom: 5px solid ${Colors.green_1};
  }
`;

const ErrorPlaceHolder = styled.div`
  height: 20px;
  font-size: 24px;
  text-align: right;
  color: ${Colors.green_2};
`;

export default MyTextInput;
