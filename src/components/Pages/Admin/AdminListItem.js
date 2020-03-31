import React from "react";
import styled from "styled-components";
import { useDispatch } from "react-redux";

import Colors from "theme/colors";
import api from "api";
import { actions } from "data";

export default function AdminListItem({
  contents,
  approveButton,
  deleteButton
}) {
  const dispatch = useDispatch();
  const { org, emailAddress, name, userId } = contents;

  const approveHandler = async () => {
    dispatch(actions.admins.updateToAdmin(userId));
  };
  const deleteHandler = async () => {
    dispatch(actions.admins.deleteAdmin(userId));
  };
  return (
    <Container>
      <Content>{org}</Content>
      <Content>{emailAddress}</Content>
      <Content>{name}</Content>
      <ButtonContainer>
        {approveButton && <Button onClick={approveHandler}>승인</Button>}
        {deleteButton && (
          <DeleteButton onClick={deleteHandler}>제거</DeleteButton>
        )}
      </ButtonContainer>
    </Container>
  );
}

const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
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
