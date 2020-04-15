import React from "react";
import styled from "styled-components";

import Colors from "theme/colors";

export default function DefaultTitle({
  title,
  icon,
  info,
  color,
  style,
  component: Component
}) {
  return (
    <TitleContainer style={style}>
      <Wrapper>
        {icon && (
          <ImageContainer>
            <Image src={icon} alt={`${icon}`} />
          </ImageContainer>
        )}

        <Title color={color}>
          {title ? title : Component ? <Component /> : null}
        </Title>
      </Wrapper>
      <Wrapper>
        {info
          ? info.map(({ title, color }) => (
              <Info key={title} color={color}>
                {title}
              </Info>
            ))
          : null}
      </Wrapper>
    </TitleContainer>
  );
}

const TitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 20px;

  @media (min-width: 1200px) {
    flex-direction: row;
  }
`;

const Wrapper = styled.div`
  display: flex;
`;

const Title = styled.h2`
  color: ${({ color }) => (color ? color : Colors.blue_3)};
  margin: 0 20px;
`;

const Info = styled.h3`
  color: ${({ color }) => color};
  align-self: flex-end;
  margin: 0 5px;
`;

const ImageContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 30px;
`;

const Image = styled.img`
  width: 30px;
  height: 30px;
`;
