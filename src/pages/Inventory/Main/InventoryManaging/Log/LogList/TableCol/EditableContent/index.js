import React, { useState } from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";

import { actions } from "data";
import { Button } from "theme/style";
import Colors from "theme/colors";
import api from "api";

import { IndexContext } from "../../LogTableDisplay";
import EditInput from "../EditInput";

export default function EditableContentComp({ d, name, disabled }) {
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
    <IndexContext.Consumer>
      {({ setCurrentIndex, currentIndex }) => (
        <Container
          onMouseOver={() => setCurrentIndex(d.id)}
          currentIndex={currentIndex}
          onMouseLeave={() => setCurrentIndex(null)}
          dId={d.id}
        >
          {isEditing && !disabled ? (
            <EditInput
              value={inputValue}
              onChange={onChangeInputHanlder}
              onBlur={() => setIsEditing(false)}
            />
          ) : (
            <Content key={d.id} onClick={() => setIsEditing(true)}>
              {d.data}
            </Content>
          )}

          {isEditing && !disabled && (
            <EditButton onMouseDown={onEditCompletHandler}>완료</EditButton>
          )}
        </Container>
      )}
    </IndexContext.Consumer>
  );
}

export const ContentDiv = ({ d, setCurrentIndex, currentIndex }) => {
  const dispatch = useDispatch();
  const [showDelete, setShowDelete] = useState(false);
  const onDeleteHandler = async () => {
    const { id } = d;
    dispatch(actions.inventory.deleteIngredientLog({ id }));
  };

  return (
    <IndexContext.Consumer>
      {({ setCurrentIndex, currentIndex }) => (
        <Container
          onClick={() => setShowDelete(prev => !prev)}
          onMouseLeave={() => {
            setShowDelete(false);
            setCurrentIndex(null);
          }}
          onMouseOver={() => setCurrentIndex(d.id)}
          currentIndex={currentIndex}
          dId={d.id}
        >
          <div key={d.id}>{d.data}</div>
          {showDelete && (
            <EditButton onClick={onDeleteHandler}>삭제</EditButton>
          )}
        </Container>
      )}
    </IndexContext.Consumer>
  );
};

const Container = styled.div`
  display: flex;
  margin-bottom: 10px;
  height: 24px;
  cursor: pointer;
  background-color: ${({ currentIndex, dId }) =>
    currentIndex === dId ? Colors.gray_2 : null};
  padding: 2px;
  border-radius: 3px;
`;
const Content = styled.div`
  cursor: pointer;
`;

const EditButton = styled(Button)`
  font-size: 12px;
  padding: 2px 4px;
  cursor: pointer;
  border: solid 1px ${Colors.gray_1};
  border-radius: 20px;
  margin-left: 5px;
`;
