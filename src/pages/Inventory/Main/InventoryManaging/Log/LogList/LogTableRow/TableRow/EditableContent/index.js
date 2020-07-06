import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";

import { Formik, Form } from "formik";
import * as Yup from "yup";

import { actions } from "data";
import { Button } from "theme/style";
import Colors from "theme/colors";

import EditInput from "./EditInput";

export default function EditableContentComp({
  name,
  dataValue,
  disabled,
  dataId,
  noValidation
}) {
  const dispatch = useDispatch();
  const [isEditing, setIsEditing] = useState(false);

  const onEditCompletHandler = ({ inputValue }) => {
    const editLogInfo = {
      logId: dataId,
      oldValue: dataValue,
      newValue: noValidation ? inputValue : +inputValue,
      name
    };
    setIsEditing(false);
    dispatch(actions.inventory.editIngredientLog({ editLogInfo }));
  };

  const valdiation = noValidation
    ? null
    : Yup.object().shape({
        inputValue: Yup.number()
          .typeError("숫자만 입력 가능합니다.")
          .required("입력값이 필요합니다.")
      });

  return (
    <Container dId={dataId}>
      {isEditing && !disabled ? (
        <Formik
          initialValues={{ inputValue: dataValue }}
          validationSchema={valdiation}
          onSubmit={onEditCompletHandler}
        >
          {({ submitForm }) => (
            <StyledForm>
              <EditInput name="inputValue" onBlur={() => setIsEditing(false)} />
              <EditButton type="submit" onMouseDown={submitForm}>
                완료
              </EditButton>
            </StyledForm>
          )}
        </Formik>
      ) : (
        <Content key={dataId} onClick={() => setIsEditing(true)}>
          {dataValue}
        </Content>
      )}
    </Container>
  );
}

export const ContentDiv = ({ dataId, dataValue }) => {
  const dispatch = useDispatch();
  const [showDelete, setShowDelete] = useState(false);
  const onDeleteHandler = async () => {
    dispatch(
      actions.modal.setModal({
        modalType: "CONDITIONAL",
        modalProps: {
          contents: "해당 로그를 제거하시겠습니까?",
          onClick: () => {
            dispatch(actions.inventory.deleteIngredientLog({ id: dataId }));
            dispatch(actions.modal.clearModal());
          },
          buttonName: "제거"
        }
      })
    );
  };

  return (
    <Container
      onClick={() => setShowDelete(prev => !prev)}
      onMouseLeave={() => {
        setShowDelete(false);
      }}
    >
      <div>{dataValue}</div>
      {showDelete && <EditButton onClick={onDeleteHandler}>삭제</EditButton>}
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  font-size: 16px;
  height: 16px;
  cursor: pointer;
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
  margin-left: 2px;
`;

const StyledForm = styled(Form)`
  display: flex;
`;
