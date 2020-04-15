import React from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";

import Colors from "theme/colors";
import NavItem from "./NavItem";
import UserInfo from "./UserInfo";

const nuviLogo = "/images/nuviLogo_narrow.svg";

export default function Nav({ tabs, sideBarOpen }) {
  const path = useSelector(state => state.router.location.pathname);
  return (
    <NavContainer sideBarOpen={sideBarOpen}>
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
z-index: 100;
  background-color: ${Colors.blue_1};
  height: 100vh;
  width: 150px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  position: fixed;
  transform: ${({ sideBarOpen }) =>
    sideBarOpen ? "translateX(0);" : "translateX(-100%);"} 
  transition: transform 0.3s ease-out;
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
