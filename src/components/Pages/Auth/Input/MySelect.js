import React from "react";
import styled from "styled-components";
import { useField } from "formik";

import Colors from "theme/colors";

export default function MySelect({ label, ...props }) {
  const { name, options } = props;
  const [field, meta] = useField(props);
  return (
    <InputContainer>
      <InputWrapper>
        <StyledSelect {...field} {...props}>
          {[{ id: 0, name: "조직명" }, ...options].map(option => (
            <option key={option.id} value={option.id}>
              {option.name}
            </option>
          ))}
        </StyledSelect>
        <ErrorPlaceHolder>
          {meta.touched && meta.error ? meta.error : " "}
        </ErrorPlaceHolder>
      </InputWrapper>
    </InputContainer>
  );
}

const InputContainer = styled.div`
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
  width: 430px;
`;

const ErrorPlaceHolder = styled.div`
  height: 20px;
  font-size: 24px;
  text-align: right;
  color: ${Colors.green_2};
`;

const StyledSelect = styled.select`
  width: 430px;
  color: white;
  font-size: 40px;
  height: 60px;
  background-color: ${Colors.gray_1};
  outline: none;
  border: 5px solid ${Colors.gray_2};

  &:focus {
    border: 5px solid ${Colors.green_1};
  }
`;
