import React from "react";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import { format } from "date-fns";

import Colors from "theme/colors";
import api from "api";
import { actions } from "data";

export default function AdminListItem({
  contents,
  approveButton,
  deleteButton
}) {
  const dispatch = useDispatch();
  const { org, emailAddress, name, userId, approved, createdAt } = contents;

  const approveHandler = async () => {
    dispatch(
      actions.modal.setModal({
        contents: approved
          ? "관리자 자격을 박탈하시겠습니까?"
          : "관리자로 승인하시겠습니까?",
        onClick: () => {
          dispatch(actions.admins.toggleApproved(userId));
          dispatch(actions.modal.setModal(false));
        },
        buttonName: approved ? "박탈" : "승인"
      })
    );
  };
  const deleteHandler = async () => {
    dispatch(
      actions.modal.setModal({
        contents: "해당 신청과 사용자를 제거하시겠습니까?",
        onClick: () => {
          dispatch(actions.admins.deleteAdmin(userId));
          dispatch(actions.modal.setModal(false));
        },
        buttonName: "제거"
      })
    );
  };
  const registerDate = createdAt
    ? format(new Date(createdAt), "MM/dd/yyyy")
    : "등록날짜";
  return (
    <Container>
      <Content>{org}</Content>
      <Content>{emailAddress}</Content>
      <Content>{name}</Content>
      <Content>{registerDate}</Content>
      <ButtonContainer>
        {approveButton && (
          <Button onClick={approveHandler}>{approved ? "박탈" : "승인"}</Button>
        )}
        {deleteButton && (
          <DeleteButton onClick={deleteHandler}>제거</DeleteButton>
        )}
      </ButtonContainer>
    </Container>
  );
}

const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  justify-items: center;
  align-items: center;
  margin: 10px 0;
`;

const Content = styled.div`
  font-size: 32px;
  color: ${({ color }) => (color ? color : Colors.blue_3)};
  margin: 0 20px;
`;

const ButtonContainer = styled.div`
  display: flex;
`;

const Button = styled.button`
  width: 100px;
  height: 50px;
  border-radius: 40px;
  border: 10px solid ${Colors.green_2};

  align-self: flex-end;
  color: ${Colors.green_2};
  font-size: 18px;
  margin: 5px;
`;

const DeleteButton = styled(Button)`
color: pink;
border: 10px solid pink;
)
`;
