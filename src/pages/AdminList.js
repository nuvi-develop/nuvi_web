import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";

import { Navigation, DefaultTitle, AdminListItem } from "components";
import Colors from "theme/colors";
import api from "api";
import { actions, selectors } from "data";

export default function AdminList() {
  const dispatch = useDispatch();
  const tabs = [
    { name: "신청내역", route: "/adminApply" },
    { name: "관리자 리스트", route: "/adminList" }
  ];
  const adminList = useSelector(selectors.admins.getAdmins);
  useEffect(() => {
    dispatch(actions.admins.getAdmins());
  }, []);
  return (
    <DefaultLayout>
      <Navigation tabs={tabs} initialTab={"관리자 리스트"} />
      <MasterContainer style={{ gridColumn: `2/13` }}>
        <MainContainer>
          <DefaultTitle title="관리자 신청내역" />
          <AdminListItem
            contents={{
              org: "조직명",
              emailAddress: "이메일",
              name: "이름"
            }}
          />
          {adminList.map(waitingAdmin => (
            <AdminListItem
              key={waitingAdmin.emailAddress}
              contents={{
                org: waitingAdmin.Department.name,
                emailAddress: waitingAdmin.emailAddress,
                name: waitingAdmin.name,
                userId: waitingAdmin.id
              }}
              deleteButton
            />
          ))}
        </MainContainer>
      </MasterContainer>
    </DefaultLayout>
  );
}

const DefaultLayout = styled.div`
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  grid-template-rows: 1fr;
  gap: 30px;
  background-color: ${Colors.gray_2};
`;

const MasterContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  min-height: 100vh;
  height: 100%;
`;
const MainContainer = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  background-color: white;
  border-radius: 10px;
  padding: 20px;
  margin: 30px;
  border: 3px solid white;
`;
