import React, { useEffect, useRef } from "react";
import styled from "styled-components";

import { useField } from "formik";

export default function EditInputComp(props) {
  const input = useRef(null);
  const [field, meta, helpers] = useField(props.name);

  useEffect(() => {
    input.current.focus();
  }, []);

  return (
    <>
      <EditInput {...field} {...props} ref={input} />
      {meta.touched && meta.error && <>meta.error</>}
    </>
  );

}

const EditInput = styled.input`
  width: 50px;
  font-size: 16px;
`;
