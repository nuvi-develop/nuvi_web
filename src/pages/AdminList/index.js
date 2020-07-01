import React, { useEffect } from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";

import { DefaultTitle, AdminListItem } from "components";
import { actions, selectors } from "data";

export default function AdminList() {
  const dispatch = useDispatch();
  const adminList = useSelector(selectors.admins.getAdmins);

  useEffect(() => {
    dispatch(actions.admins.getAdmins());
  }, []);
  return (
    <MasterContainer style={{ gridColumn: `2/13` }}>
      <MainContainer>
        <DefaultTitle title="현재 관리자 리스트" />
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
              userId: waitingAdmin.id,
              approved: waitingAdmin.approved,
              createdAt: waitingAdmin.createdAt
            }}
            deleteButton
            approveButton
          />
        ))}
      </MainContainer>
    </MasterContainer>
  );
}

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