import React, { useState } from "react";
import styled from "styled-components";

import Colors from "theme/colors";
import { NavItem } from "components";

const nuviLogo = "/images/nuviLogo_narrow.svg";
const seoulLogo = "./images/i_seoul_u.svg";

export default function Nav({ initialTab }) {
  const [activeItem, setActiveItem] = useState(initialTab);
  return (
    <NavContainer>
      <NavTopContainer>
        <Logo src={nuviLogo} alt={"logo"} />
        <NavItem
          to="/daily"
          onClick={() => setActiveItem("DAILY")}
          title="DAILY"
          activeItem={activeItem}
        />

        <NavItem
          to="/total"
          onClick={() => setActiveItem("TOTAL")}
          title="TOTAL"
          activeItem={activeItem}
        />
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
`;
