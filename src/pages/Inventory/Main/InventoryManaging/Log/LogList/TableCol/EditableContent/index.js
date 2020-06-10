import React, { useState } from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";

import { actions } from "data";
import { Button } from "theme/style";
import Colors from "theme/colors";

export default function EditableContentComp({ d, name }) {
  const dispatch = useDispatch();
  const [isEditing, setIsEditing] = useState(false);
  const [inputValue, setInputValue] = useState(d.data || 0);

  const onChangeInputHanlder = e => {
    e.preventDefault();
    setInputValue(e.target.value);
  };

  const onEditCompletHandler = () => {
    const editLogInfo = {
      logId: d.id,
      oldValue: d.data,
      newValue: +inputValue,
      name
    };
    setIsEditing(false);
    dispatch(actions.inventory.editIngredientLog({ editLogInfo }));
  };

  return (
    <Container>
      {isEditing ? (
        <EditInput value={inputValue} onChange={onChangeInputHanlder} />
      ) : (
        <Content key={d.id} onClick={() => setIsEditing(true)}>
          {d.data}
        </Content>
      )}

      {isEditing && (
        <EditButton onClick={onEditCompletHandler}>완료</EditButton>
      )}
    </Container>
  );
}

export const ContentDiv = ({ d }) => (
  <Container>
    <div key={d.id}>{d.data}</div>
  </Container>
);

const Container = styled.div`
  display: flex;
  margin-bottom: 10px;
  height: 24px;
`;

const Content = styled.div`
  cursor: pointer;
`;

const EditInput = styled.input`
  width: 50px;
`;

const EditButton = styled(Button)`
  font-size: 12px;
  padding: 2px 4px;
  cursor: pointer;
  border: solid 1px ${Colors.gray_1};
  border-radius: 20px;
  margin-left: 5px;
`;
