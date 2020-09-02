import React from "react";
import { useSelector, useDispatch } from "react-redux";
import styled from "styled-components";
import { Formik, Form } from "formik";
import * as Yup from "yup";

import { actions, selectors } from "data";
import { Button } from "theme/style";
import Colors from "theme/colors";
import api from "api";

import DropdownInput from "./DropdownInput";
import SimpleInput from "./SimpleInput";

export default function AddFormComp({ toggleAddHandler }) {
  const dispatch = useDispatch();
  const categories = useSelector(selectors.inventory.getCategories);
  const units = useSelector(selectors.inventory.getUnits);
  const departmentId = useSelector(selectors.user.getDepartmentId);

  const onSubmitHandler = (values, { resetForm }) => {
    const ingredientInfo = {
      name: values.ingredient,
      InventoryCategoryId: values.category.id,
      IngredientUnitId: values.unit.id,
      DepartmentId: departmentId
    };
    dispatch(actions.inventory.addIngredient({ ingredientInfo }));
    resetForm();
    toggleAddHandler();
  };
  return (
    <Container>
      <Formik
        initialValues={{
          ingredient: "",
          category: { id: 1, name: "잡곡류" },
          unit: { id: 1, name: "kg" }
        }}
        validate={async values => {
          const errors = {};
          const { ingredient } = values;
          const isSameIngredient = await api.inventory.isSameIngredient({
            ingredient
          });
          if (isSameIngredient.data) {
            errors.ingredient = "이미 등록된 재료이름 입니다.";
          }
          return errors;
        }}
        validationSchema={Yup.object({
          ingredient: Yup.string()
            .typeError("문자 형식이어야 합니다.")
            .required("필수항목 입니다.")
        })}
        onSubmit={onSubmitHandler}
      >
        <StyledForm>
          <SimpleInput name="ingredient" label="재료명" />
          <DropdownInput name="category" label="분류" options={categories} />
          <DropdownInput name="unit" label="단위" options={units} />
          <SubmitButton type="submit">추가</SubmitButton>
        </StyledForm>
      </Formik>
    </Container>
  );
}

const Container = styled.div`
  display: flex;

  align-items: center;
  align-self: flex-start;
  margin-left: 20px;
`;

const SubmitButton = styled(Button)`
  width: 70px;
  height: 30px;
  font-size: 16px;
  color: white;
  background-color: ${Colors.blue_1};
  cursor: pointer;
`;

const StyledForm = styled(Form)`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
`;
