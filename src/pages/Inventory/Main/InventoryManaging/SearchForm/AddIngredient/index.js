import React, { useState } from "react";
import styled from "styled-components";

import AddForm from "./AddForm";

const plus = process.env.PUBLIC_URL + "/icons/basics/plus.svg";

export default function AddInput({ label }) {
  const [isAdding, setIsAdding] = useState(false);

  const toggleAddHandler = () => {
    setIsAdding(prev => !prev);
  };
  return (
    <Container>
      <Label>{label}</Label>

      <Image src={plus} onClick={toggleAddHandler} isAdding={isAdding} />
      {isAdding && <AddForm toggleAddHandler={toggleAddHandler} />}
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  margin-bottom: 10px;
  height: 150px;
  align-items: center;
`;

const Label = styled.div`
  width: 150px;
  display: flex;
  align-items: center;
`;

const Image = styled.img`
  cursor: pointer;
  transform: ${({ isAdding }) => (isAdding ? "rotate(45deg)" : "rotate(0)")};
  transition: transform 0.3s ease-out;
`;
