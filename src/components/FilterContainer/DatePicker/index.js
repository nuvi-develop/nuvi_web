import React, { useState, forwardRef } from "react";
import styled from "styled-components";
import DatePicker from "react-datepicker";

import "./react-datepicker-custom.css";

const downArrow = "icons/downArrow.svg";

export default function DatePickerComponent() {
  const [startDate, setStartDate] = useState(new Date());

  const CustomInput = forwardRef(({ value, onClick }, ref) => (
    <Wrapper>
      <InputContainer onClick={onClick}>
        <Input>{value}</Input>
        <Icon src={downArrow} alt="arrow" />
      </InputContainer>
    </Wrapper>
  ));

  return (
    <DatePicker
      selected={startDate}
      onChange={date => {
        console.log("date", date);
        setStartDate(date);
      }}
      customInput={<CustomInput />}
      dateFormat="yyyy년 MM월 dd일"
    />
  );
}

const Wrapper = styled.div`
  width: 400px;
`;

const Icon = styled.img`
  display: inline;
`;

const Input = styled.div`
  color: white;
  font-size: 32px;
`;

const InputContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 10px;
  height: 35px;
  border: 3px solid white;
  border-radius: 5px;
`;
