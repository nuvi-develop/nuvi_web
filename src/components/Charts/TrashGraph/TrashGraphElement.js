import React from "react";
import styled from "styled-components";

import Colors from "theme/colors";

const trash20 = "/icons/trashes/trash20.svg";
const trash40 = "/icons/trashes/trash40.svg";
const trash60 = "/icons/trashes/trash60.svg";
const trash80 = "/icons/trashes/trash80.svg";
const trash100 = "/icons/trashes/trash100.svg";

const totalNumber = 780;

export default function TrashGraphElement(props) {
  const { name, value } = props;
  const rate = Math.floor((value / totalNumber) * 100);
  const image =
    rate < 20
      ? trash20
      : rate < 40
      ? trash40
      : rate < 60
      ? trash60
      : rate < 80
      ? trash80
      : trash100;

  return (
    <ElementContainer>
      <Image src={image} alt={rate} />
      <Name>{name}</Name>
      <Value>
        {value}
        <p style={{ display: "inline" }}>인분</p>
      </Value>
    </ElementContainer>
  );
}

const ElementContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;
`;
const Name = styled.h3`
  color: ${Colors.blue_1};
  margin-top: 20px;
`;

const Image = styled.img`
  width: 30px;

  @media (min-width: 1200px) {
    width: 50px;
  }
`;

const Value = styled.h4`
  color: ${Colors.blue_1};
  margin: 10px 0 20px;
`;
