import React from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";

import { actions, selectors } from "data";
import { awsPhotoUrl } from "config";
import Colors from "theme/colors";

export default function UserInfo(props) {
  const dispatch = useDispatch();
  const user = useSelector(selectors.user.getUserSession);
  const departmentId = user.DepartmentId;
  const departmentName = user.Department.name;
  const logoImage = awsPhotoUrl + `/department/${departmentId}.svg`;

  const logoutHandler = () => {
    dispatch(actions.user.logout());
  };

  const goProfileHandler = () => {
    if (user.id === "master") {
      return;
    }
    dispatch(actions.router.push("/profile"));
  };

  return (
    <UserInfoContainer {...props}>
      <UserImage src={logoImage} onClick={goProfileHandler} />

      <UserName onClick={goProfileHandler}>{departmentName}</UserName>
      <LogoutText onClick={logoutHandler}>로그아웃</LogoutText>
    </UserInfoContainer>
  );
}

const UserImage = styled.img`
  background-size: cover;
  border-radius: 50% 50% 50% 50%;
  width: 70px;
  height: 70px;
  border: 2px solid;
  background-color: white;
  margin-bottom: 20px;
`;

const UserName = styled.div`
  color: white;
  font-size: 24px;
`;

const UserInfoContainer = styled.div`
  position: fixed;
  bottom: 10px;
  margin: 30px 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  cursor: pointer;
  padding: 10px 20px;
  width: 80px;
  border-radius: 20px;
  background-color: ${({ activePath, to }) =>
    activePath === to ? Colors.green_1 : null};
`;

const LogoutText = styled.div`
  color: ${Colors.gray_2};
  font-size: 20px;
  cursor: pointer;
  margin-top: 20px;
`;
