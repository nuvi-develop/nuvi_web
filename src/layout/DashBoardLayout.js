import React, { useState } from "react";
import styled from "styled-components";

import { Navigation, Modal } from "components";
import DropDown from "components/DropDown";
import Colors from "theme/colors";

const menu = "/icons/menuButton.svg";

export default function DashBoardLayout({ children, master }) {
  const [sideBarOpen, setSidebarOpen] = useState(false);

  let tabs = [
    { name: "DAILY", route: "/daily" },
    { name: "TOTAL", route: "/total" },
    { name: "재고관리", route: "/inventory" },
    { name: "DASH BOARD", route: "/dashboard" }
  ];

  if (master) {
    tabs = [
      { name: "신청내역", route: "/adminApply" },
      { name: "관리자 리스트", route: "/adminList" }
    ];
  }

  const menuClickHandler = () => {
    setSidebarOpen(true);
  };

  const dropDownClickHandler = () => {
    setSidebarOpen(false);
  };
  return (
    <Layout>
      <Navigation
        tabs={tabs}
        style={{ gridColumn: `1/2` }}
        sideBarOpen={sideBarOpen}
      />
      {sideBarOpen && <DropDown onClick={dropDownClickHandler} />}
      <MenuWrapper>
        <MenuButton src={menu} alt={"menu"} onClick={menuClickHandler} />
      </MenuWrapper>
      <Contents>{children}</Contents>
      <Modal />
    </Layout>
  );
}

const Layout = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  background-color: ${Colors.gray_2};

  @media (min-width: 1200px) {
    flex-direction: row;
  }
`;

const MenuWrapper = styled.div`
  width: 30px;
  flex: 0 0 30px;
  margin-top: 10px;
`;

const MenuButton = styled.img`
  position: fixed;
  width: 30px;
  margin: 5px;
  align-self: flex-start;
  cursor: pointer;
`;

const Contents = styled.div`
  padding: 10px;
  flex: 1 1;
  @media (min-width: 1200px) {
  }
`;
