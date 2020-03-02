import React from "react";
import styled from "styled-components";
import { useField } from "formik";

import Colors from "theme/colors";

export default function MyToggleInput({ label, ...props }) {
  const { name } = props;
  const [field, meta] = useField(props);
  return (
    <InputContainer>
      <StyledLabel htmlFor={name}>{label}</StyledLabel>
      <InputWrapper>
        <CheckBoxWrapper>
          <CheckBox id="checkbox" {...field} {...props} />
          <CheckBoxLabel htmlFor="checkbox" />
          <Info value={field.value}>
            {field.value ? "관리자" : "일반사용자"}
          </Info>
        </CheckBoxWrapper>

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

const CheckBoxWrapper = styled.div`
  position: relative;
  margin-left: 30px;
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
  position: absolute;
  left: 150px;
  bottom: -15px;
  color: ${({ value }) => (value ? Colors.green_1 : Colors.gray_2)};
  font-size: 32px;
  transition: all 0.5s;
`;

const ErrorPlaceHolder = styled.div`
  height: 20px;
  font-size: 24px;
  text-align: right;
  color: ${Colors.green_2};
`;
