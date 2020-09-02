import React, { forwardRef } from "react";
import styled from "styled-components";
import { useField } from "formik";
import { format, add } from "date-fns";

import DatePicker from "components/Input/DatePicker";

export default function DateInputComp(props) {
  const [field, meta, helpers] = useField(props.name);
  const { value } = meta;
  const { setValue } = helpers;

  const CustomInput = forwardRef(({ value, onClick }, ref) => {
    const formatedDate = format(new Date(value), "yy년 MM월 dd일");
    return (
      <Current ref={ref} onClick={onClick}>
        {formatedDate}
      </Current>
    );
  });

  return (
    <Container>
      <Label>{props.label}</Label>
      <DatePicker
        selected={value}
        CustomInputProp={CustomInput}
        onChange={date => setValue(date)}
      />

      <ErrorPlaceHolder />
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

const Current = styled.div`
  font-size: 16px;
  margin: 0 10px;
  cursor: pointer;
  width: 150px;
  text-align: center;
`;

const ErrorPlaceHolder = styled.div`
  margin-top: 5px;
  height: 16px;
  font-size: 16px;
`;
