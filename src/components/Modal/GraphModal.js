import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import styled from "styled-components";

import { selectors, actions } from "data";
import Colors from "theme/colors";
import LogChart from "components/Charts/LogChart";

export default function GraphModal() {
  const dispatch = useDispatch();
  const [logsLimit, setLogsLimit] = useState(10);
  const ingredientId = useSelector(selectors.inventory.getCurrentIngredientId);
  const logsForDetailGraph = useSelector(
    selectors.inventory.getIngredientLogsForDetailGraph
  );
  useEffect(() => {
    dispatch(
      actions.inventory.loadIngredientLogsForDetailGraph({
        ingredientId,
        limit: logsLimit
      })
    );
  }, [logsLimit, ingredientId, dispatch]);
  return (
    <Container>
      <Title>상세 그래프</Title>
      <NumberContainer>
        최근
        <Number isSelected={logsLimit === 10} onClick={() => setLogsLimit(10)}>
          10
        </Number>
        <Number isSelected={logsLimit === 30} onClick={() => setLogsLimit(30)}>
          30
        </Number>
        <Number
          isSelected={logsLimit === 100}
          onClick={() => setLogsLimit(100)}
        >
          100
        </Number>
        건의 데이터 입니다.
      </NumberContainer>
      <LogChart logs={logsForDetailGraph} height={500} />
      <ExitButton onClick={() => dispatch(actions.modal.clearModal())}>
        나가기
      </ExitButton>
    </Container>
  );
}

const Container = styled.div`
  width: 90%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: white;
  border: 1px solid ${Colors.gray_1};
  border-radius: 10px;
`;

const Title = styled.div`
  align-self: flex-start;
  marging: 10px;
  padding: 10px;
  font-size: 24px;
`;

const NumberContainer = styled.div`
  display: flex;
  align-items: center;
  align-self: flex-start;
  margin-left: 15px;
`;
const Number = styled.div`
  padding: 10px;
  margin: 3px;
  border-radius: 10px;
  cursor: pointer;
  background-color: ${({ isSelected }) => (isSelected ? Colors.gray_2 : null)};
`;

const ExitButton = styled.div`
  margin: 10px;
  cursor: pointer;
  background-color: ${Colors.green_1};
  padding: 10px;
  margin: 3px;
  border-radius: 10px;
`;
