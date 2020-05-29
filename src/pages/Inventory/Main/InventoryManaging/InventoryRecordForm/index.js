import React from "react";
import styled from "styled-components";
import { Formik, Form } from "formik";

import GeneralInput from "./Input/GeneralInput";

import Colors from "theme/colors";
import { Button } from "theme/style";

export default function InventoryRecordFormComp() {
  const submitHander = values => {
    console.log("values", values);
  };
  return (
    <Container>
      <Formik
        initialValues={{
          recordDate: new Date(),
          order: 0,
          use: 0,
          cost: 0
        }}
        onSubmit={submitHander}
      >
        <>
          <StyledForm>
            <GeneralInput
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
          </StyledForm>
          <SubmitButton type="submit">기록하기</SubmitButton>
        </>
      </Formik>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 200px;
  padding: 10px;
`;

const StyledForm = styled(Form)`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const SubmitButton = styled(Button)`
  align-self: flex-end;
  width: 150px;
  height: 50px;
  font-size: 24px;
  color: white;
  background-color: ${Colors.blue_1};
  margin-top: 30px;
`;
