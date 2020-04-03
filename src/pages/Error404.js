import React from "react";
import styled from "styled-components";
import { useDispatch } from "react-redux";

import Colors from "theme/colors";
import { actions } from "data";

export default function Error404() {
  const dispatch = useDispatch();
  const goBackHandler = () => {
    dispatch(actions.router.push("/"));
  };
  return (
    <Container>
      notFound
      <Button onClick={goBackHandler}>홈으로 가기</Button>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100vh;
  background-color: ${Colors.gray_1};
`;

const Button = styled.div`
  background-color: white;
  width: 100px;
  height: 40px;
  line-height: 40px;
  text-align: center;
  border-radius: 10px;
  margin: 30px;
  cursor: pointer;
`;
