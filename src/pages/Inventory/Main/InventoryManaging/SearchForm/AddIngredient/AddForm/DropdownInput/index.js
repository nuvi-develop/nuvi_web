import React, { useState } from "react";
import styled from "styled-components";
import { useField } from "formik";

import { CSS } from "theme/style";

const downArrow = process.env.PUBLIC_URL + "/icons/downArrowGray.svg";

export default function DropdownInputComp({ options, label, ...props }) {
  const [field, meta, helpers] = useField(props);
  const [isOpen, setIsOpen] = useState(false);

  const toggleList = () => {
    setIsOpen(prev => !prev);
  };

  const onSelect = option => {
    helpers.setValue(option);

    toggleList();
  };

  return (
    <Container>
      <Label>{label}</Label>
      <DropDownContainer>
        <InputContainer onClick={toggleList}>
          <Input>{meta.value.name}</Input>
          <Icon src={downArrow} isOpen={isOpen} alt="arrow" />
        </InputContainer>
        {isOpen && (
          <Wrapper>
            <ListContainer>
              {options.map(option => (
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

const Container = styled.div`
  display: flex;
  width: 300px;
  margin-bottom: 10px;
`;

const DropDownContainer = styled.div`
  position: relative;
  flex: 1;
`;

const InputContainer = styled.div`
  display: flex;
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
  z-index: 1;
  ${CSS.boxShadow.default}
`;

const ListContainer = styled.div``;

const ListItem = styled.div`
  font-size: 16px;
  &:hover {
    background-color: ${({ theme }) => theme.blue_3};
  }
`;

const Label = styled.div`
  display: flex;
  align-items: center;
  margin-right: 10px;
  width: 50px;
`;
