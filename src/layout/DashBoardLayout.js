import React from "react";
import styled from "styled-components";

import { Navigation } from "components";
import Colors from "theme/colors";

export default function DashBoardLayout({ children, master }) {
  let tabs = [
    { name: "DAILY", route: "/daily" },
    { name: "TOTAL", route: "/total" }
  ];

  if (master) {
    tabs = [
      { name: "신청내역", route: "/adminApply" },
      { name: "관리자 리스트", route: "/adminList" }
    ];
  }

  return (
    <Layout>
      <Navigation tabs={tabs} style={{ gridColumn: `1/2` }} />
      {children}
    </Layout>
  );
}

const Layout = styled.div`
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  grid-template-rows: 1fr;
  gap: 30px;
  background-color: ${Colors.gray_2};
`;
