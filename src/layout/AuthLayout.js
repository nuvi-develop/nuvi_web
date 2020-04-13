import React from "react";
import styled from "styled-components";

import Colors from "theme/colors";
const nutritions = "/images/nutritions.svg";

export default function AuthLayout({ children }) {
  return (
    <>
      <CoverImage></CoverImage>
      <TransparentBlock>
        <AuthBlock>{children}</AuthBlock>
      </TransparentBlock>
    </>
  );
}

const CoverImage = styled.div`
  width: 100%;
  height: 100vh;
  background-image: url(${nutritions});
  background-size: cover;
  z-index: -1;
  position: absolute;
`;

const TransparentBlock = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100vh;
  background-color: ${Colors.gray_1};
  opacity: 0.9;
`;

const AuthBlock = styled.div`
  display: flex;
  flex-direction: column;
  width: 900px;
  height: 90%;
  border: 10px solid white;
  border-radius: 10px;
`;
