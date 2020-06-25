import React, { useEffect } from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";

import { DefaultTitle, AdminListItem } from "components";
import { actions, selectors } from "data";

export default function Master() {
  const dispatch = useDispatch();
  const waitingAdminList = useSelector(selectors.admins.getWaitingAdmins);
  useEffect(() => {
    dispatch(actions.admins.getWaitingAdmins());
  }, []);
  return (
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
        {waitingAdminList.map(waitingAdmin => (
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
            approveButton
            deleteButton
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
