import React, { useState } from "react";
import styled, { keyframes } from "styled-components";

import { CSS } from "theme/style";

const downArrow = process.env.PUBLIC_URL + "/icons/downArrow.svg";

export default function GeneralDropDownFilter({
  options,
  label,
  value: valueProp,
  setValue: setValueProp,
  containerStyles
}) {
  const [value, setValue] = useState(options[0].name);
  const [isOpen, setIsOpen] = useState(false);

  const toggleList = () => {
    setIsOpen(prev => !prev);
  };

  const onSelect = option => {
    if (valueProp) {
      setValueProp(option);
    } else {
      setValue(option.name);
    }

    toggleList();
  };

  const optionsIncludingAll = [...options];

  return (
    <CustomConatiner containerStyles={containerStyles}>
      <DropDownContainer>
        <InputContainer onClick={toggleList}>
          <Input>{valueProp ? valueProp.name : value}</Input>
          <Icon src={downArrow} isOpen={isOpen} alt="arrow" />
        </InputContainer>
        {isOpen && (
          <Wrapper>
            <ListContainer>
              {optionsIncludingAll.map(option => (
                <ListItem
                  key={option.name}
                  onClick={onSelect.bind(this, option)}
                >
                  {option.name}
                </ListItem>
              ))}
            </ListContainer>
          </Wrapper>
        )}
      </DropDownContainer>
    </CustomConatiner>
  );
}

const Container = styled.div`
  display: flex;
  margin-bottom: 10px;
  max-width: 500px;
`;

const CustomConatiner = styled(Container)(({ containerStyles }) => ({
  ...containerStyles
}));

const DropDownContainer = styled.div`
  position: relative;
  flex: 1;
`;

const InputContainer = styled.div`
  display: felx;
  align-items: center;
  justify-content: space-between;
  width: 300px;
  height: 35px;
  border: 3px solid white;
  border-radius: 5px;
`;

const Input = styled.div`
  font-size: 24px;
  padding-left: 10px;
`;

const Icon = styled.img`
  height: 20px;
  width: 20px;
  color: black;
  margin-right: 10px;
  transition: transform 0.3s;
  transform: ${({ isOpen }) => (isOpen ? "rotate(180deg)" : null)};
`;

const Wrapper = styled.div`
  width: 100%;
  position: absolute;
  background-color: white;
  z-index: 2;
  ${CSS.boxShadow.default}
`;

const ListContainer = styled.div``;

const ListItem = styled.div`
  font-size: 24px;
  &:hover {
    background-color: ${({ theme }) => theme.blue_3};
  }
`;

const Label = styled.div`
  width: 150px;
  display: flex;
  align-items: center;
`;
