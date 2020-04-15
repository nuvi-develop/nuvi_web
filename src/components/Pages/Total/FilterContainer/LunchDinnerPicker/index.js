import React, { useState } from "react";
import styled from "styled-components";

import Colors from "theme/colors";

const downArrow = "icons/downArrow.svg";

export default function LunchDinnerPicker() {
  const [value, setValue] = useState("ALL");
  const [isOpen, setIsOpen] = useState(false);

  const options = ["ALL", "점심", "저녁"];

  const toggleList = () => {
    setIsOpen(prev => !prev);
  };

  const onSelect = value => {
    setValue(value);
    toggleList();
  };
  return (
    <DropDownContainer>
      <InputContainer onClick={toggleList}>
        <Input>{value}</Input>
        <Icon src={downArrow} alt="arrow" />
      </InputContainer>
      {isOpen && (
        <Wrapper>
          <ListContainer>
            {options.map(option => (
              <ListItem key={option} onClick={onSelect.bind(this, option)}>
                {option}
              </ListItem>
            ))}
          </ListContainer>
        </Wrapper>
      )}
    </DropDownContainer>
  );
}

const DropDownContainer = styled.div`
  position: relative;
  width: 100%;
`;

const InputContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px;
  height: 35px;
  border: 3px solid white;
  border-radius: 5px;
`;

const Input = styled.h2`
  color: white;
`;
const Icon = styled.img`
  display: inline;
`;
const Wrapper = styled.div`
  z-index: 1;
  width: 100%;
  position: absolute;
  background-color: ${Colors.green_2};
  border-radius: 0 0 10px 10px;
`;

const ListContainer = styled.div`
  border: 3px solid white;
  border-top: none;
`;

const ListItem = styled.h2`
  color: white;
  padding: 10px 20px;
  border-bottom: 2px solid white;

  &:hover {
    background-color: ${Colors.blue_1};
  }
`;
