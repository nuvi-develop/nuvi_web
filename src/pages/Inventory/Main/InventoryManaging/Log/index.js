import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import styled from "styled-components";

import { actions, selectors } from "data";

import LogList from "./LogList";
import LogChart from "./LogChart";
import NavButton from "./NavButton";

export default function LogComp() {
  const dispatch = useDispatch();
  const [page, setPage] = useState(1);
  const ingredientId = useSelector(selectors.inventory.getCurrentIngredientId);
  const logs = useSelector(selectors.inventory.getCurrentIngredientLogs);
  const isLastPage = logs.length !== 10;

  useEffect(() => {
    dispatch(
      actions.inventory.loadIngredientLogs({
        ingredientId,
        offset: (page - 1) * 10
      })
    );
  }, [ingredientId, dispatch, page]);
  return (
    <Container>
      <LogList />
      <LogChart logs={logs} />
      <NavButton value={page} setValue={setPage} isLastPage={isLastPage} />
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  flex: 1;
`;
