import React from "react";
import styled from "styled-components";

import Colors from "theme/colors";

export default function DefaultTitle({ title, icon, info }) {
  return (
    <TitleContainer>
      <ImageContainer>
        <img src={icon} alt={`${icon}`} />
      </ImageContainer>
      <Title>{title}</Title>
      {info
        ? info.map(({ title, color }) => (
            <Info key={title} color={color}>
              {title}
            </Info>
          ))
        : null}
    </TitleContainer>
  );
}

const TitleContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-bottom: 20px;
`;

const Title = styled.div`
  font-size: 32px;
  color: ${Colors.blue_3};
  margin: 0 20px;
`;

const Info = styled.div`
  font-size: 16px;
  color: ${({ color }) => color};
  align-self: flex-end;
  margin: 0 5px;
`;

const ImageContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50px;
`;
