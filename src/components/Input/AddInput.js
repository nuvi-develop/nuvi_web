import React from "react";
import styled from "styled-components";

const plus = process.env.PUBLIC_URL + "/icons/basics/plus.svg";

export default function AddInput({ label, onAdd }) {
  return (
    <Container>
      <Label>{label}</Label>
      <Image src={plus} onClick={onAdd} />
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  margin-bottom: 10px;
`;

const Label = styled.div`
  width: 150px;
  display: flex;
  align-items: center;
`;

const Image = styled.img`
  cursor: pointer;
`;
