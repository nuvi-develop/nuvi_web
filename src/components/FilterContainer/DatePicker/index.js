import React, { useState } from "react";
import styled from "styled-components";
import DatePicker from "react-datepicker";

import "./react-datepicker-custom.css";

const downArrow = "icons/downArrow.svg";

export default function DatePickerComponent() {
  const [startDate, setStartDate] = useState(new Date());

  const CustomInput = ({ value, onClick }) => (
    <InputContainer onClick={onClick}>
      <Input>{value}</Input>
      <Icon src={downArrow} alt="arrow" />
    </InputContainer>
  );

  return (
    <DatePicker
      selected={startDate}
      onChange={date => setStartDate(date)}
      customInput={<CustomInput />}
    />
  );
}

const Icon = styled.img`
  display: inline;
`;

const Input = styled.div`
  color: white;
  font-size: 32px;
`;

const InputContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px;
  width: 350px;
  height: 35px;
  border: 3px solid white;
  border-radius: 5px;
`;
