import React from "react";
import styled from "styled-components";

const nutritionist = process.env.PUBLIC_URL + "/dashboard/nutritionist.svg";

export default function NutritionImage() {
  return <AbsoluteImage src={nutritionist} alt="nutiritionits" />;
}

const AbsoluteImage = styled.img`
  position: absolute;
  width: 300px;
  bottom: 0;
`;
