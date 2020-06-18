import React from "react";
import styled from "styled-components";
import { useField } from "formik";
import { format, add } from "date-fns";

const backButton = process.env.PUBLIC_URL + "/icons/basics/backButton.svg";
const frontButton = process.env.PUBLIC_URL + "/icons/basics/frontButton.svg";

export default function DateInputComp(props) {
  const [field, meta, helpers] = useField(props.name);
  const { value } = meta;
  const { setValue } = helpers;

  const formatedDate = format(new Date(value), "MM/dd/yyyy");

  const onBackClickHandler = () => {
    setValue(
      add(new Date(value), {
        days: -1
      })
    );
  };

  const onFrontClickHandler = () => {
    setValue(
      add(new Date(value), {
        days: 1
      })
    );
  };

  return (
    <Container>
      <Label>{props.label}</Label>
      <DateInputContainer>
        <ImageButton src={backButton} onClick={onBackClickHandler} />
        <Current>{formatedDate}</Current>
        <ImageButton src={frontButton} onClick={onFrontClickHandler} />
      </DateInputContainer>
      <ErrorPlaceHolder />
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Label = styled.div`
  font-size: 16px;
  margin-bottom: 20px;
`;

const DateInputContainer = styled.div`
  display: flex;
`;

const Current = styled.div`
  font-size: 16px;
  margin: 0 10px;
`;

const ImageButton = styled.img`
  cursor: pointer;
`;

const ErrorPlaceHolder = styled.div`
  margin-top: 5px;
  height: 16px;
  font-size: 16px;
`;
