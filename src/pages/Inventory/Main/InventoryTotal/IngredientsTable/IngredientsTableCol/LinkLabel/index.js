import React from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";

import { actions } from "data";
import Colors from "theme/colors";

export default function LinkLabel({ children }) {
  const dispatch = useDispatch();

  const clickLabelHandler = () => {
    dispatch(actions.modal.setModal({ modalType: "ETC_INGREDIENTS" }));
  };

  return <Label onClick={clickLabelHandler}>{children}</Label>;
}

const Label = styled.div`
  text-align: center;
  font-size: 20px;
  width: 130px;
  color: ${Colors.gray_1};
  background-color: ${Colors.gray_2};
  cursor: pointer;
  border-radius: 10px;
  padding: 5px;
`;
