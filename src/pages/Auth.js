import React from "react";
import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";

import Colors from "theme/colors";
import {
  LoginForm,
  SignUpFormTraditional,
  SignUpFormSocial,
  FindPassword
} from "components";
import { selectors, actions } from "data";

export default function Auth() {
  const dispatch = useDispatch();
  const authMode = useSelector(selectors.user.getAuthMode);
  return (
    <>
      {authMode !== "findPassword" && (
        <AuthController>
          <AuthItem
            buttonFor="login"
            mode={authMode}
            onClick={() => {
              dispatch(actions.user.toggleAuthMode("login"));
            }}
          >
            로그인
          </AuthItem>
          <AuthItem
            buttonFor="register"
            mode={authMode}
            onClick={() => {
              dispatch(actions.user.toggleAuthMode("register"));
            }}
          >
            가입하기
          </AuthItem>
        </AuthController>
      )}

      {(() => {
        switch (authMode) {
          case "login":
            return <LoginForm />;
          case "register":
            return <SignUpFormTraditional />;
          case "registerSocial":
            return <SignUpFormSocial />;
          case "findPassword":
            return <FindPassword />;
          default:
            return null;
        }
      })()}
    </>
  );
}

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
      ${({ buttonFor, mode }) =>
        mode.startsWith(buttonFor) ? Colors.gray_2 : "white"};
    border-bottom: 10px solid
      ${({ buttonFor, mode }) =>
        mode.startsWith(buttonFor) ? Colors.gray_2 : "white"};
    border-radius: 10px;
    width: ${({ buttonFor, mode }) =>
      mode.startsWith(buttonFor) ? "300px" : "0px"};
    transition: width 0.5s, border 1s;
    text-align: center;
  }
`;
