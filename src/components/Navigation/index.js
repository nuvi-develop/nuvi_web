import React from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";

import Colors from "theme/colors";
import NavItem from "./NavItem";
import UserInfo from "./UserInfo";

const nuviLogo = "/images/nuviLogo_narrow.svg";

export default function Nav({ tabs }) {
  const path = useSelector(state => state.router.location.pathname);
  return (
    <NavContainer>
      <NavTopContainer>
        <Logo src={nuviLogo} alt={"logo"} />
        {tabs.map(tap => {
          const { name, route } = tap;
          return (
            <NavItem key={name} to={route} title={name} activePath={path} />
          );
        })}
        <UserInfo to="/profile" activePath={path} />
      </NavTopContainer>
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
