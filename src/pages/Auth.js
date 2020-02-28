import React from "react";
import styled from "styled-components";

import Colors from "theme/colors";
import { SignUpForm } from "components";

const nutritions = "/images/nutritions.svg";

export default function Auth() {
  return (
    <>
      <CoverImage></CoverImage>
      <TransparentBlock>
        <AuthBlock>
          <AuthController>
            <AuthItem>로그인</AuthItem>
            <AuthItem>가입하기</AuthItem>
          </AuthController>
          <SignUpForm />
        </AuthBlock>
      </TransparentBlock>
    </>
  );
}

const CoverImage = styled.div`
  width: 100%;
  height: 100vh;
  background-image: url(${nutritions});
  background-size: cover;
  z-index: -1;
  position: absolute;
`;

const TransparentBlock = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100vh;
  background-color: ${Colors.gray_1};
  opacity: 0.9;
`;

const AuthBlock = styled.div`
  width: 900px;
  border: 10px solid white;
  border-radius: 10px;
`;

const AuthController = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  margin: 20px;
`;

const AuthItem = styled.div`
  font-size: 50px;
  color: white;
  text-align: center;
  &:after {
    content: " ";
    display: block;
    border-top: 10px solid white;
    border-bottom: 10px solid white;
    border-radius: 10px;
    width: 400px;
  }
`;

const InputContainer = styled.div``;
