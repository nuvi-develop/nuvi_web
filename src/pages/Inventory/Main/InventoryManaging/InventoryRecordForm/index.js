import React from "react";
import { useSelector, useDispatch } from "react-redux";
import styled from "styled-components";
import { Formik, Form } from "formik";
import * as Yup from "yup";

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
  const currentIngredientId = currentIngredient?.id;

  const ingredientUnit = useSelector(
    selectors.inventory.getCurrentIngredientUnitName
  );
  const unit = ingredientUnit ? ingredientUnit : "kg";

  const submitHander = (values, { resetForm }) => {
    const { recordDate, order, use, cost, comment } = values;
    const ingredientLogInfo = {
      recordDate,
      order: +order,
      use: +use,
      cost: +cost,
      comment,
      stockDelta: +order - +use,
      InventoryIngredientId: currentIngredientId
    };

    dispatch(actions.inventory.addIngredientLog({ ingredientLogInfo }));
    resetForm();
  };
  return (
    currentIngredient && (
      <Container>
        <Formik
          initialValues={{
            recordDate: new Date(),
            order: "",
            use: "",
            cost: "",
            comment: ""
          }}
          validationSchema={Yup.object().shape({
            order: Yup.number()
              .typeError("숫자만 입력가능합니다.")
              .required("필수항목 입니다."),
            use: Yup.number()
              .typeError("숫자만 입력가능합니다.")
              .required("필수항목 입니다."),
            cost: Yup.number()
              .typeError("숫자만 입력가능합니다.")
              .required("필수항목 입니다.")
          })}
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
                  label={`주문량 (${unit})`}
                  name="order"
                  type="text"
                  placeholer={0}
                />
                <GeneralInput
                  label={`사용량 (${unit})`}
                  name="use"
                  type="text"
                  placeholer={0}
                />
                <GeneralInput
                  label={`비용 (원/${unit})`}
                  name="cost"
                  type="text"
                  placeholer={0}
                />
                <GeneralInput
                  label="비고"
                  name="comment"
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
  height: 20%;
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
