import React from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { useFormik } from "formik";
import * as Yup from "yup";

import { actions, selectors } from "data";

export default function SimpleInput(props) {
  const dispatch = useDispatch();
  const searchingInfo = useSelector(
    selectors.inventory.getCurrentSearchingInfo
  );

  const formik = useFormik({
    initialValues: {
      value: searchingInfo.ingredientName
    }
  });

  const handleChange = e => {
    formik.handleChange(e);
    const { value } = e.target;
    dispatch(actions.inventory.setCurrentSearchingIngredient(value));
  };
  return (
    <TextInput
      name="value"
      type="text"
      onChange={handleChange}
      value={formik.values.value}
      {...props}
    />
  );
}

const TextInput = ({ label, ...props }) => {
  return (
    <Container>
      <Label>{label}</Label>
      <StyledInput {...props} placheholder={""} />
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  margin-bottom: 10px;
  max-width: 500px;
`;

const StyledInput = styled.input`
  flex: 1;
  height: 32px;
  font-size: 16px;
  border: solid 1px ${({ theme }) => theme.gray_2};
`;

const Label = styled.div`
  width: 150px;
  display: flex;
  align-items: center;
`;