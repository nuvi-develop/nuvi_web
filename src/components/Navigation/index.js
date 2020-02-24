import React from "react";
import styled from "styled-components";

import Colors from "theme/colors";

const nuviLogo = "/images/nuviLogo_narrow.svg";
const seoulLogo = "./images/i_seoul_u.svg";

export default function Nav() {
  return (
    <NavContainer>
      <NavTopContainer>
        <Logo src={nuviLogo} alt={"logo"} />
        <NavItem>DAILY</NavItem>
        <NavItem>TOTAL</NavItem>
      </NavTopContainer>
      <UserInfoContainer>
        <UserImage src={seoulLogo} />

        <UserName>서울시청</UserName>
      </UserInfoContainer>
    </NavContainer>
  );
}

const NavContainer = styled.div`
  background-color: ${Colors.blue_1};
  height: 100vh;
  width: 150px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`;

const Logo = styled.img`
  width: 80%;
  margin-top: 30px;
  margin-bottom: 50px;
`;

const NavItem = styled.div`
  font-size: 24px;
  color: white;
  margin-bottom: 20px;
  padding: 10px 30px;
  border-radius: 20px;
  background-color: ${Colors.green_1};
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
  margin: 30px 0;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
