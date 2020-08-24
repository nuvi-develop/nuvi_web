import React, { useState, forwardRef } from "react";
import styled from "styled-components";
import DatePicker from "react-datepicker";

import "./react-datepicker-custom.css";

const downArrow = process.env.PUBLIC_URL + "/icons/downArrow.svg";

export default function DatePickerComponent({
  CustomInputProp,
  containerStyles,
  InputStyles,
  value,
  setValue,
  ...props
}) {
  const [startDate, setStartDate] = useState(new Date());

  const CustomInput = forwardRef(({ value, onClick }, ref) => (
    <Wrapper ref={ref}>
      <CustomStyledInputContainer
        onClick={onClick}
        containerStyles={containerStyles}
      >
        <CustomStyledInput InputStyles={InputStyles}>{value}</CustomStyledInput>
        <Icon src={downArrow} alt="arrow" />
      </CustomStyledInputContainer>
    </Wrapper>
  ));

  return (
    <DatePicker
      selected={value ? value : startDate}
      onChange={date => {
        if (value) {
          setValue(date);
        } else {
          setStartDate(date);
        }
      }}
      customInput={CustomInputProp ? <CustomInputProp /> : <CustomInput />}
      {...props}
    />
  );
}

const Wrapper = styled.div``;

const Icon = styled.img`
  display: inline;
  width: 16px;
  margin-left: 10px;
`;

const Input = styled.h2`
  color: white;
`;

const CustomStyledInput = styled(Input)(({ InputStyles }) => ({
  ...InputStyles
}));

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

const CustomStyledInputContainer = styled(InputContainer)(
  ({ containerStyles }) => ({
    ...containerStyles
  })
);
