import styled from "styled-components";

import { dashboardColor } from "theme/colors";

export const BorderedBox = styled.div`
  margin: 20px 10px;
  padding: 10px;
  border-radius: 10px;
  box-shadow: 2px 10px 20px 0px rgba(43, 136, 240, 0.5);
  background-color: white;
`;

export const Title = styled.div`
  font-weight: 500;
  font-size: 33px;
  margin-bottom: 10px;
  color: ${dashboardColor.gray_4};
`;
