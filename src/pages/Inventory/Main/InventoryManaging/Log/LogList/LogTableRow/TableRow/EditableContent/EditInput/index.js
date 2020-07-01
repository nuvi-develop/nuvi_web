import React, { useEffect, useRef } from "react";
import styled from "styled-components";

export default function EditInputComp(props) {
  const input = useRef(null);

  useEffect(() => {
    input.current.focus();
  }, []);
  return <EditInput {...props} ref={input} />;
}

const EditInput = styled.input`
  width: 50px;
  font-size: 16px;
`;
