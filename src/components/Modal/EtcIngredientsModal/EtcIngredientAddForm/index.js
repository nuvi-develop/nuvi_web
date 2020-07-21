import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { Formik, Form } from "formik";

import { actions, selectors } from "data";
import GeneralInput from "components/Input/GeneralInput";
import DateInput from "components/Input/DateInput";
import { Button } from "theme/style";
import Colors from "theme/colors";

export default function EtcIngredientAddForm({ ingredient }) {
  const dispatch = useDispatch();
  const ingredientId = ingredient.id;
  const [showAddFinished, setshowAddFinished] = useState(false);
  const departmentId = useSelector(selectors.user.getDepartmentId);
  const submitHandler = ({ recordDate, etcIngredient }, { resetForm }) => {
    dispatch(
      actions.inventory.addIngredientEtcLogsPerDates({
        recordDate,
        etcIngredient,
        departmentId,
        ingredientId
      })
    );
    resetForm();
    showAndGoAddFinished();
  };

  const showAndGoAddFinished = async () => {
    await setshowAddFinished(true);
    await new Promise(res => setTimeout(res, 500));
    await setshowAddFinished(false);
  };
  return (
    <Formik
      initialValues={{
        recordDate: new Date(),
        etcIngredient: ""
      }}
      onSubmit={submitHandler}
    >
      <Form>
        <FormContainer>
          {showAddFinished ? (
            "기록되었습니다."
          ) : (
            <>
              <DateInput label="날짜" name="recordDate" type="text" selector />
              <GeneralInput
                label={`${ingredient.name} 에 추가하기`}
                name="etcIngredient"
                type="text"
                style={{ width: "300px" }}
              />
              <SubmitButton type="submit">기록하기</SubmitButton>
            </>
          )}
        </FormContainer>
      </Form>
    </Formik>
  );
}

const FormContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: ${Colors.gray_2};
  border-radius: 10px;
  padding: 10px;
  margin-bottom: 20px;
`;

const SubmitButton = styled(Button)`
  width: 150px;
  height: 50px;
  font-size: 24px;
  color: white;
  background-color: ${Colors.blue_1};

  cursor: pointer;
`;
