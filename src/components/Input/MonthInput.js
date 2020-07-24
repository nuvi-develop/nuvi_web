import React, { forwardRef } from "react";
import styled from "styled-components";
import { useField } from "formik";
import { format, add } from "date-fns";

import DatePicker from "components/Input/DatePicker";

export default function MonthInputComp(props) {
  const { searchDate, setSearchDate } = props;

  const CustomInput = forwardRef(({ value, onClick }, ref) => {
    const formatedDate = format(new Date(value), "yy년 MM월");
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
        selected={searchDate}
        CustomInputProp={CustomInput}
        onChange={date => setSearchDate(date)}
        showMonthYearPicker
      />

      <ErrorPlaceHolder />
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 30px;
`;

const Label = styled.div`
  font-size: 16px;
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
