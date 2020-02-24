import React from "react";
import styled from "styled-components";

import Row from "./Row";
import Colors from "theme/colors";

const moon = "/icons/moon.svg";
const moon_blue = "/icons/moon_blue.svg";

export default function Lunch({ blue }) {
  return (
    <Row>
      <img src={blue ? moon_blue : moon} alt="moon" />
      <Info>저녁</Info>
    </Row>
  );
}

const Info = styled.h3`
  margin-left: 10px;
  color: ${Colors.blue_3};
`;
