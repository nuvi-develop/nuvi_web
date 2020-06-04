import React from "react";
import styled from "styled-components";

import { Row } from "theme/style";

const backButton = process.env.PUBLIC_URL + "/icons/basics/backButton.svg";
const frontButton = process.env.PUBLIC_URL + "/icons/basics/frontButton.svg";

export default function NavButtonComp({ value, setValue, isLastPage }) {
  const onBackClickHandler = () => {
    setValue(prev => (prev !== 1 ? prev - 1 : prev));
  };

  const onFrontClickHandler = () => {
    setValue(prev => (isLastPage ? prev : prev + 1));
  };
  return (
    <Container>
      <ImageButton src={backButton} onClick={onBackClickHandler} />
      {value && <Current>{value} </Current>}
      <ImageButton src={frontButton} onClick={onFrontClickHandler} />
    </Container>
  );
}

const Container = styled(Row)`
  justify-content: space-between;
  width: 100px;
  height: 20px;
  align-self: center;
  margin: 10px 0;
`;

const Current = styled.div`
  font-size: 16px;
`;

const ImageButton = styled.img`
  cursor: pointer;
`;
