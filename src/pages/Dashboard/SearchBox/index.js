import React from "react";
import styled from "styled-components";

import DatePicker from "components/Input/DatePicker";
import GeneralDropDownFilter from "./GeneralDropDownFilter";

export default function SearchBox({ dispatch, state }) {
  return (
    <Container>
      <SubContainer>
        <DatePicker
          InputStyles={{ color: "black" }}
          containerStyles={{ width: "300px", marginRight: "10px" }}
          setValue={date => dispatch({ type: "SET_DATE", payload: date })}
          value={state.date}
        />
        <GeneralDropDownFilter
          options={[
            { name: "조식", value: "b" },
            { name: "중식", value: "l" },
            { name: "석식", value: "d" }
          ]}
          containerStyles={{ marginRight: "10px" }}
          setValue={bld => dispatch({ type: "SET_BLD", payload: bld })}
          value={state.bld}
        />
        <GeneralDropDownFilter
          options={[
            { name: "영양정보 있음", value: true },
            { name: "영양정보 없음", value: false }
          ]}
          setValue={hasNutitionInfo =>
            dispatch({ type: "SET_NUTRITION_INFO", payload: hasNutitionInfo })
          }
          value={state.nutritionInfo}
        />
      </SubContainer>
      <EditButton
        onClick={() =>
          dispatch({
            type: "SET_IS_IN_EDIT_MODE",
            payload: !state.isInEditMode
          })
        }
      >
        {state.isInEditMode ? "완료" : "수정"}
      </EditButton>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  padding: 10px;
  justify-content: space-between;
`;

const SubContainer = styled.div`
  display: flex;
`;

const EditButton = styled.div`
  display: flex;
  justify-content: center;
  width: 150px;
  height: 35px;
  border: 3px solid white;
  border-radius: 5px;
  font-size: 24px;
  cursor: pointer;
  background-color: ${({ theme }) => theme.blue_3};
`;
