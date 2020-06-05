import React from "react";
import { useSelector, useDispatch } from "react-redux";
import styled from "styled-components";
import { Formik, Form } from "formik";

import GeneralInput from "./Input/GeneralInput";
import DateInput from "./Input/DateInput";

import { selectors, actions } from "data";
import Colors from "theme/colors";
import { Button } from "theme/style";

export default function InventoryRecordFormComp() {
  const dispatch = useDispatch();
  const currentIngredient = useSelector(
    selectors.inventory.getCurrentIngredient
  );

  const currentStock = +currentIngredient?.ingredientRecentLog?.stock;
  const currentIngredientId = currentIngredient?.id;

  const submitHander = values => {
    const { recordDate, order, use, cost } = values;
    const ingredientLogInfo = {
      recordDate,
      order: +order,
      use: +use,
      cost: +cost,
      stock: +currentStock - +use + +order,
      InventoryIngredientId: currentIngredientId
    };

    dispatch(actions.inventory.addIngredientLog({ ingredientLogInfo }));
  };
  return (
    currentIngredient && (
      <Container>
        <Formik
          initialValues={{
            recordDate: new Date(),
            order: "",
            use: "",
            cost: ""
          }}
          onSubmit={submitHander}
        >
          <>
            <StyledForm>
              <FormContainer>
                <DateInput
                  label="날짜"
                  name="recordDate"
                  type="text"
                  placeholer={0}
                  selector
                />
                <GeneralInput
                  label="주문량 (kg)"
                  name="order"
                  type="text"
                  placeholer={0}
                />
                <GeneralInput
                  label="사용량 (kg)"
                  name="use"
                  type="text"
                  placeholer={0}
                />
                <GeneralInput
                  label="비용 (원/단위)"
                  name="cost"
                  type="text"
                  placeholer={0}
                />
              </FormContainer>
              <SubmitButton type="submit">기록하기</SubmitButton>
            </StyledForm>
          </>
        </Formik>
      </Container>
    )
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 200px;
  padding: 10px;
`;

const FormContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const StyledForm = styled(Form)`
  display: flex;
  flex-direction: column;
`;

const SubmitButton = styled(Button)`
  align-self: flex-end;
  width: 150px;
  height: 50px;
  font-size: 24px;
  color: white;
  background-color: ${Colors.blue_1};
  margin-top: 30px;
  cursor: pointer;
`;
