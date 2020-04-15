import React from "react";
import styled from "styled-components";
import { useField } from "formik";

import Colors from "theme/colors";
import px2vw from "utils";

export default function MyToggleInput({ label, ...props }) {
  const [field, meta] = useField(props);
  return (
    <InputWrapper>
      <CheckBoxWrapper>
        <CheckBox id="checkbox" {...field} {...props} />
        <CheckBoxLabel htmlFor="checkbox" />
        <Info value={field.value}>{field.value ? "관리자" : "일반사용자"}</Info>
      </CheckBoxWrapper>

      <ErrorPlaceHolder>
        {meta.touched && meta.error ? meta.error : " "}
      </ErrorPlaceHolder>
    </InputWrapper>
  );
}

const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 5vh;
  width: 50%;
  min-width: 250px;
  max-width: 500px;
`;

const CheckBoxWrapper = styled.div`
  position: relative;
`;
const CheckBoxLabel = styled.label`
  position: absolute;
  top: 0;
  left: 0;
  width: 84px;
  height: 52px;
  border-radius: 30px;
  background: #bebebe;
  cursor: pointer;
  &::after {
    content: "";
    display: block;
    border-radius: 50%;
    width: 36px;
    height: 36px;
    margin: 6px;
    background: #ffffff;
    box-shadow: 1px 3px 3px 1px rgba(0, 0, 0, 0.2);
    transition: 0.2s;
  }
`;
const CheckBox = styled.input`
  opacity: 0;
  border-radius: 15px;
  width: 42px;
  height: 26px;
  &:checked + ${CheckBoxLabel} {
    background: ${Colors.green_1};
    &::after {
      content: "";
      display: block;
      border-radius: 50%;
      width: 36px;
      height: 36px;
      margin-left: 42px;
      transition: 0.2s;
    }
  }
`;

const Info = styled.div`
  width: 100px;
  position: absolute;
  left: 110px;
  bottom: -15px;
  color: ${({ value }) => (value ? Colors.green_1 : Colors.gray_2)};
  font-size: 24px;
  transition: all 0.5s;
`;

const ErrorPlaceHolder = styled.div`
  height: 24px;
  font-size: 24px;
  color: ${Colors.green_2};
`;
