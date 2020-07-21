import React, { useState } from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";

import Colors from "theme/colors";
import { actions } from "data";

export default function EtcTextEditable({ log, setSubModal, ingredientId }) {
  const dispatch = useDispatch();
  const [etcNewInput, setEtcNewInput] = useState(log.logText);
  const [isEditting, setIsEditting] = useState(false);
  const [isEdittingText, setIsEdittingText] = useState(false);

  const onChangeNewInputHandler = e => {
    e.preventDefault();
    setEtcNewInput(e.target.value);
  };
  const toggleIsEditting = () => {
    setIsEditting(prev => !prev);
  };

  const editHandler = () => {
    setIsEdittingText(true);
    setIsEditting(false);
  };

  const editFinishHandler = () => {
    setIsEdittingText(false);
    dispatch(
      actions.inventory.editIngredientEtcLogsPerDates({
        etcIngredientId: log.id,
        newLogText: etcNewInput,
        ingredientId
      })
    );
  };
  const deleteHandler = () => {
    setIsEditting(false);
    setSubModal({
      modalType: "CONDITIONAL",
      modalProps: {
        onConfirm: () => {
          setSubModal({ modalType: null, modalProps: null });
          dispatch(
            actions.inventory.deleteIngredientEtcLogsPerDates({
              etcIngredientId: log.id,
              ingredientId
            })
          );
        },
        onCancel: () => setSubModal({ modalType: null, modalProps: null }),
        contents: "해당 기타 품목을 삭제 하시겠습니까?",
        confirmName: "삭제"
      }
    });
  };
  return (
    <EtcTextContainer key={log.id}>
      {isEdittingText ? (
        <EtcInputContainer>
          <EtcInput onChange={onChangeNewInputHandler} value={etcNewInput} />
          <EtcInputSubmitButton onClick={editFinishHandler}>
            완료
          </EtcInputSubmitButton>
        </EtcInputContainer>
      ) : (
        <EtcText onClick={toggleIsEditting}>{log.logText}</EtcText>
      )}

      {isEditting && (
        <ActionButtonContainer>
          <ActionButton onClick={editHandler}>수정</ActionButton>
          <ActionButton onClick={deleteHandler}>지우기</ActionButton>
        </ActionButtonContainer>
      )}
    </EtcTextContainer>
  );
}

const EtcTextContainer = styled.div`
  position: relative;
  background-color: ${Colors.gray_2};
  border-radius: 10px;
  padding: 5px;
  margin: 5px;
  cursor: pointer;
`;

const EtcText = styled.div``;

const EtcInputContainer = styled.div`
  display: flex;
`;

const EtcInput = styled.input`
  width: 300px;
`;

const EtcInputSubmitButton = styled.div`
  background-color: ${Colors.green_1};
  border-radius: 10px;
  padding: 3px;
`;

const ActionButtonContainer = styled.div`
  position: absolute;
  right: -25px;
  top: -8px;
  display: flex;
  flex-direction: column;
  z-index: 1;
`;

const ActionButton = styled.div`
  font-size: 10px;
  background-color: ${Colors.green_1};
  border-radius: 20px;
  padding: 3px;
  margin: 3px;
`;
