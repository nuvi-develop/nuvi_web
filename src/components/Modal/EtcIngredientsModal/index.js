import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";

import { actions, selectors } from "data";
import SearchEtcIngredientInput from "components/Input/SimpleInput/SearchEtcIngredientInput";
import Colors from "theme/colors";

import EtcIngredientAddForm from "./EtcIngredientAddForm";
import EtcTextEditable from "./EtcTextEditable";
import SubModal from "./SubModal";

export default function EtcIngredientsModal({ ingredient }) {
  const ingredientId = ingredient ? ingredient.id : null;
  const dispatch = useDispatch();
  const [subModal, setSubModal] = useState({
    modalType: null,
    modalProps: null
  });
  const ingredientEtcLogsPerDates = useSelector(
    selectors.inventory.getIngredientEtcLogsPerDates
  );

  const searchingEtcText = useSelector(
    selectors.inventory.getCurrentEtcSearchText
  );

  const dates = Object.keys(ingredientEtcLogsPerDates);

  useEffect(() => {
    dispatch(
      actions.inventory.loadIngredientEtcLogsPerDates({
        searchingEtcText,
        ingredientId
      })
    );
  }, [searchingEtcText]);

  return (
    <Container>
      <SubModal {...subModal} />
      <Header>
        <Title>기타 품목 : {ingredient ? ingredient.name : "all"}</Title>
        <ExitButton onClick={() => dispatch(actions.modal.clearModal())}>
          나가기
        </ExitButton>
      </Header>

      {ingredient && <EtcIngredientAddForm ingredient={ingredient} />}
      <SearchEtcIngredientInput
        label={ingredient ? `${ingredient.name} 중에 검색` : "기타 품목 검색"}
      />
      <IngredientsContainer>
        {dates.map(date => (
          <DateWrapper key={date}>
            <DateLabel>{date}</DateLabel>
            <EtcTextsContainer>
              {ingredientEtcLogsPerDates[date].map(log => (
                <EtcTextEditable
                  key={log.id}
                  log={log}
                  setSubModal={setSubModal}
                  ingredientId={ingredientId}
                />
              ))}
            </EtcTextsContainer>
          </DateWrapper>
        ))}
      </IngredientsContainer>
    </Container>
  );
}

const Container = styled.div`
  width: 90%;
  height: 90vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: white;
  border: 1px solid ${Colors.gray_1};
  border-radius: 10px;
`;

const Header = styled.div`
  display: flex;
  align-self: stretch;
  justify-content: space-between;
  align-items: center;
`;
const Title = styled.div`
  align-self: flex-start;
  marging: 10px;
  padding: 10px;
  font-size: 24px;
`;

const ExitButton = styled.div`
  height: 50px;
  margin: 10px;
  cursor: pointer;
  background-color: ${Colors.green_1};
  padding: 10px;
  margin: 3px;
  border-radius: 10px;
  display: flex;
  align-items: center;
`;

const IngredientsContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 90vh;
  overflow: scroll;
`;

const DateWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const DateLabel = styled.div`
  width: 200px;
  background-color: ${Colors.gray_1};
  border-radius: 10px;
  padding: 5px;
  margin: 5px;
`;

const EtcTextsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
`;
