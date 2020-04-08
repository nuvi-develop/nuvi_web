import React, { useState } from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";

import Colors from "theme/colors";
import { NavItem } from "components";
import { actions, selectors } from "data";
import { awsPhotoUrl } from "config";

const nuviLogo = "/images/nuviLogo_narrow.svg";
const seoulLogo = "./images/i_seoul_u.svg";

export default function Nav({ tabs, initialTab }) {
  const [activeItem, setActiveItem] = useState(initialTab);
  const dispatch = useDispatch();
  const user = useSelector(selectors.user.getUserSession);
  const departmentId = user.DepartmentId;
  const departmentName = user.Department.name;
  const logoImage = awsPhotoUrl + `/department/${departmentId}.svg`;

  const logoutHandler = () => {
    dispatch(actions.user.logout());
  };

  const goProfileHandler = () => {
    dispatch(actions.router.push("/profile"));
  };
  return (
    <NavContainer>
      <NavTopContainer>
        <Logo src={nuviLogo} alt={"logo"} />
        {tabs.map(tap => {
          const { name, route } = tap;
          return (
            <NavItem
              key={name}
              to={route}
              onClick={() => setActiveItem(name)}
              title={name}
              activeItem={activeItem}
            />
          );
        })}
      </NavTopContainer>
      <UserInfoContainer>
        <UserImage src={logoImage} onClick={goProfileHandler} />

        <UserName onClick={goProfileHandler}>{departmentName}</UserName>
        <LogoutText onClick={logoutHandler}>로그아웃</LogoutText>
      </UserInfoContainer>
    </NavContainer>
  );
}

const NavContainer = styled.div`
  background-color: ${Colors.blue_1};
  height: 100%;
  width: 150px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  position: relative;
`;

const Logo = styled.img`
  width: 80%;
  margin-top: 30px;
  margin-bottom: 50px;
`;

const NavTopContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

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
`;

const LogoutText = styled.div`
  color: ${Colors.gray_2};
  font-size: 20px;
  cursor: pointer;
  margin-top: 20px;
`;
