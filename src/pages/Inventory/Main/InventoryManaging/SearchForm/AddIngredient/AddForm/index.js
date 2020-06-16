import React from "react";
import { useSelector, useDispatch } from "react-redux";
import styled from "styled-components";
import { Formik, Form } from "formik";

import { actions, selectors } from "data";
import { Button } from "theme/style";
import Colors from "theme/colors";

import DropdownInput from "./DropdownInput";
import SimpleInput from "./SimpleInput";

export default function AddFormComp({ toggleAddHandler }) {
  const dispatch = useDispatch();
  const categories = useSelector(selectors.inventory.getCategories);
  const departmentId = useSelector(selectors.user.getDepartmentId);

  const onSubmitHandler = (values, { resetForm }) => {
    const ingredientInfo = {
      name: values.ingredient,
      InventoryCategoryId: values.category.id,
      DepartmentId: departmentId
    };
    dispatch(actions.inventory.addIngredient({ ingredientInfo }));
    toggleAddHandler();
    resetForm();
  };
  return (
    <Container>
      <Formik
        initialValues={{
          ingredient: "",
          category: { id: 1, name: "잡곡류" }
        }}
        onSubmit={onSubmitHandler}
      >
        <StyledForm>
          <SimpleInput name="ingredient" label="재료명" />
          <DropdownInput name="category" label="분류" options={categories} />
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
