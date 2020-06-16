import React from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";

import { Row } from "theme/style";
import { actions, selectors } from "data";

import LogChart from "../../LogChart";

export default function LogListHead() {
  const dispatch = useDispatch();
  const logs = useSelector(selectors.inventory.getCurrentIngredientLogs);
  const showGraphHandler = () => {
    dispatch(
      actions.modal.setModal({
        contents: () => <LogChart logs={logs} />,
        onClick: () => {
          dispatch(actions.modal.setModal(false));
        },
        style: {
          width: "90%",
          height: " 70%"
        },
        buttonName: "확인"
      })
    );
  };
  return (
    <Container>
      <Label>과거내역</Label>
      {logs.length !== 0 && (
        <ShowGraphoButton onClick={showGraphHandler}>
          그래프 상세 보기
        </ShowGraphoButton>
      )}
    </Container>
  );
}

const Container = styled(Row)`
  align-items: center;
  justify-content: space-between;
`;

const Label = styled.div`
  font-size: 24px;
`;

const ShowGraphoButton = styled.div`
  cursor: pointer;
`;
