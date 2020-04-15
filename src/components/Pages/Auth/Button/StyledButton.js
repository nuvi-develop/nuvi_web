import styled from "styled-components";

import px2vw from "utils";
import Colors from "theme/colors";

const StyledButton = styled.button`
  width: 200px;
  height: 40px;
  border-radius: 40px;
  border: 3px solid ${Colors.green_2};
  background-color: ${Colors.gray_1};
  color: ${Colors.green_2};
  font-size: 24px;
  margin-bottom: 5vh;
`;

export default StyledButton;
