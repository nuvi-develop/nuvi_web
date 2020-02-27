import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

import Colors from "theme/colors";

export default function NavItemComponent(props) {
  const { to, onClick, title } = props;
  return (
    <LinkStyled to={to} onClick={onClick}>
      <NavItem {...props}>{title}</NavItem>
    </LinkStyled>
  );
}

const NavItem = styled.div`
  font-size: 24px;
  margin-bottom: 20px;
  padding: 10px 20px;
  width: 80px;
  text-align: center;
  border-radius: 20px;
  background-color: ${({ activeItem, title }) =>
    activeItem === title ? Colors.green_1 : null};
`;

const LinkStyled = styled(Link)`
  text-decoration: none;
  cursor: pointer;
  color: white;
`;
