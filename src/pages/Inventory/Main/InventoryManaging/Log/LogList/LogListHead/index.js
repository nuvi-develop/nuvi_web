import React from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";

import { Row } from "theme/style";
import { actions, selectors } from "data";
import Colors from "theme/colors";

import LogChart from "../../LogChart";

export default function LogListHead() {
  const dispatch = useDispatch();
  const logs = useSelector(selectors.inventory.getCurrentIngredientLogs);
  const showGraphHandler = () => {
    dispatch(
      actions.modal.setModal({
        modalType: "GRAPH",
        modalProps: {
          contents: () => <LogChart logs={logs} />,
          onClick: () => {
            dispatch(actions.modal.clearModal(false));
          }
        }
      })
    );
  };
  return (
    <Container>
      <Label>과거내역</Label>
      {logs.length !== 0 && (
        <ButtonContaienr>
          <ShowGraphoButton onClick={showGraphHandler}>
            그래프 상세 보기
          </ShowGraphoButton>
        </ButtonContaienr>
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

const ButtonContaienr = styled.div`
  display: flex;
`;

const ShowGraphoButton = styled.div`
  cursor: pointer;
  margin: 3px;
  padding: 10px;
  border-radius: 10px;
  background-color: ${Colors.gray_2};
`;
