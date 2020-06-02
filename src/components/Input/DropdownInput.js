import React, { useState } from "react";
import { useDispatch } from "react-redux";
import styled, { keyframes } from "styled-components";

import { actions } from "data";

import { CSS } from "theme/style";

const downArrow = process.env.PUBLIC_URL + "/icons/downArrowGray.svg";

export default function DropdownInputComp({ options, label }) {
  const dispatch = useDispatch();
  const [value, setValue] = useState("all");
  const [isOpen, setIsOpen] = useState(false);

  const toggleList = () => {
    setIsOpen(prev => !prev);
  };

  const onSelect = option => {
    setValue(option.name);
    dispatch(actions.inventory.setCurrentSearchingCategory(option));
    toggleList();
  };

  const optionsIncludingAll = [{ id: 0, name: "all" }, ...options];

  return (
    <Container>
      <Label>{label}</Label>
      <DropDownContainer>
        <InputContainer onClick={toggleList}>
          <Input>{value}</Input>
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
    </Container>
  );
}

const rotate = keyframes`
  from{
    transform: 
  }
  to{
    transform: 
  }
`;

const Container = styled.div`
  display: flex;
  margin-bottom: 10px;
`;

const DropDownContainer = styled.div`
  position: relative;
  width: 300px;
`;

const InputContainer = styled.div`
  display: felx;
  align-items: center;
  justify-content: space-between;
  padding: 5px;
  height: 32px;
  cursor: pointer;
  border: solid 1px ${({ theme }) => theme.gray_2};
  &:hover {
    border: solid 1px ${({ theme }) => theme.gray_1};
  }
`;

const Input = styled.div`
  font-size: 16px;
`;

const Icon = styled.img`
  height: 20px;
  width: 20px;
  color: black;
  transition: transform 0.3s;
  transform: ${({ isOpen }) => (isOpen ? "rotate(180deg)" : null)};
`;

const Wrapper = styled.div`
  width: 100%;
  position: absolute;
  background-color: white;
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
