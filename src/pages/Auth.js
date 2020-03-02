import React, { useState } from "react";
import styled from "styled-components";

import Colors from "theme/colors";
import { SignUpForm, LoginForm } from "components";

const nutritions = "/images/nutritions.svg";

export default function Auth() {
  const [mode, setMode] = useState("login");
  return (
    <>
      <CoverImage></CoverImage>
      <TransparentBlock>
        <AuthBlock>
          <AuthController>
            <AuthItem
              buttonFor="login"
              mode={mode}
              onClick={() => setMode("login")}
            >
              로그인
            </AuthItem>
            <AuthItem
              buttonFor="register"
              mode={mode}
              onClick={() => setMode("register")}
            >
              가입하기
            </AuthItem>
          </AuthController>
          {mode === "login" ? <LoginForm /> : <SignUpForm />}
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
  align-items: flex-start;
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
  margin-top: 150px;
`;

const AuthController = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  margin: 50px 50px 100px;
`;

const AuthItem = styled.div`
  font-size: 50px;
  color: white;
  text-align: center;
  width: 300px;
  &:hover {
    cursor: pointer;
  }
  &:after {
    content: " ";
    display: block;
    border-top: 10px solid
      ${({ buttonFor, mode }) => (buttonFor === mode ? Colors.gray_2 : "white")};
    border-bottom: 10px solid
      ${({ buttonFor, mode }) => (buttonFor === mode ? Colors.gray_2 : "white")};
    border-radius: 10px;
    width: ${({ buttonFor, mode }) => (buttonFor === mode ? "300px" : "0px")};
    transition: width 0.5s, border 1s;
    text-align: center;
  }
`;

const InputContainer = styled.div``;
