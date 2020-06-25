import React from "react";
import styled from "styled-components";
import { useField } from "formik";

import Colors from "theme/colors";
import px2vw from "utils";

const MyTextInput = ({ label, ...props }) => {
  const [field, meta] = useField(props);
  return (
    <InputWrapper>
      <StyledInput {...field} {...props} placeholder={label} />
      <ErrorPlaceHolder>
        {meta.touched && meta.error ? meta.error : " "}
      </ErrorPlaceHolder>
    </InputWrapper>
  );
};

const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 5vh;
  width: 100%;
`;

const StyledInput = styled.input`
  width: 50%;
  min-width: 250px;
  max-width: 500px;
  background-color: ${Colors.gray_1};
  border: none;
  border-bottom: 3px solid ${Colors.gray_2};
  color: white;
  font-size: 32px;

  &:focus {
    border-bottom: 3px solid ${Colors.green_1};
  }

  &:-webkit-autofill {
    background-color: ${Colors.gray_1};
    color: white;
  }

  &::placeholder {
    color: white;
  }
`;

const ErrorPlaceHolder = styled.div`
  height: 24px;
  font-size: 24px;
  color: ${Colors.green_2};
`;

export default MyTextInput;
