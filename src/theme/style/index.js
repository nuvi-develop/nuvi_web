import styled, { css } from "styled-components";

export const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 20px;
  border: none;
`;

export const Col = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Row = styled.div`
  display: flex;
  flex-direction: row;
`;

export const CSS = {
  boxShadow: {
    default: css`
      box-shadow: 0px 2px 12px rgba(0, 0, 0, 0.1),
        0px 0px 8px rgba(0, 0, 0, 0.05);
    `
  }
};
