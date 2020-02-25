import React from "react";
import styled from "styled-components";

import Row from "./Row";
import Colors from "theme/colors";

const sun = "/icons/sun.svg";
const sun_blue = "/icons/sun_blue.svg";

export default function Lunch({ blue }) {
  return (
    <Row>
      <img src={blue ? sun_blue : sun} alt="sun" />
      <Info>점심</Info>
    </Row>
  );
}

const Info = styled.h3`
  margin-left: 10px;
  color: ${Colors.blue_3};
`;
