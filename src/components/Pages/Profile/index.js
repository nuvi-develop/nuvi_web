import React, { useState } from "react";
import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";
import { Formik, Form, Field } from "formik";

import { selectors, actions } from "data";
import Colors from "theme/colors";
import { UpdatePassword } from "components";

export default function Profile() {
  const [updatePassword, setUpdatePassword] = useState(false);
  const dispatch = useDispatch();

  const user = useSelector(selectors.user.getUserSession);
  const { logo, name } = user.Department;
  const userName = user.name;

  const logoutHandler = () => {
    dispatch(actions.user.logout());
  };

  return (
    <Container>
      <UserImage src={logo} />

      <UserName>기관: {name}</UserName>
      <UserName>이름:{userName}</UserName>
      <UpdatePasswordButton onClick={() => setUpdatePassword(prev => !prev)}>
        비밀번호 업데이트
      </UpdatePasswordButton>
      {updatePassword && <UpdatePassword />}
      <LogoutText onClick={logoutHandler}>로그아웃</LogoutText>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  width: 100%;
  height: 100vh;
  margin: auto;
`;

const UserImage = styled.img`
  background-size: cover;
  border-radius: 50% 50% 50% 50%;
  width: 300px;
  height: 300px;
  border: 2px solid;
  background-color: white;
  margin-bottom: 20px;
`;

const UserName = styled.div`
  color: black;
  font-size: 24px;
  margin: 20px;
`;

const LogoutText = styled.div`
  color: ${Colors.gray_2};
  font-size: 20px;
  cursor: pointer;
  margin-top: 20px;
`;

const Button = styled.button`
  width: 100px;
  height: 60px;
  text-align: center;
  line-height: 60px;
  background-color: gray;
  border-radius: 20px;
  font-size: 20px;
  cursor: pointer;
  margin-top: 20px;
`;

const UpdatePasswordButton = styled(Button)`
  background-color: lightGray;
  width: 200px;
`;
