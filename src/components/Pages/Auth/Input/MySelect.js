import React from "react";
import styled from "styled-components";
import { useField } from "formik";

import Colors from "theme/colors";
import px2vw from "utils";

export default function MySelect({ label, ...props }) {
  const { options } = props;
  const [field, meta] = useField(props);
  return (
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
  );
}

const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: center;
  margin-bottom: 5vh;
`;

const ErrorPlaceHolder = styled.div`
  height: 24px;
  font-size: 24px;
  color: ${Colors.green_2};
`;

const StyledSelect = styled.select`
  width: 50%;
  min-width: 250px;
  max-width: 500px;
  color: white;
  font-size: 32px;
  height: 40px;
  background-color: ${Colors.gray_1};
  outline: none;
  border: 3px solid ${Colors.gray_2};

  &:focus {
    border: 3px solid ${Colors.green_1};
  }
`;
