import React from "react";
import styled from "styled-components";
import { useField } from "formik";

export default function MenuCalorieInputComp(props) {
  const [field, meta, helpers] = useField(props);
  return <MenuCalorieInput {...field} {...props} />;
}

const MenuCalorieInput = styled.input`
  max-width: 100px;
`;
