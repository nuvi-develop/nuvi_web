import { createGlobalStyle } from "styled-components";

import px2vw from "utils";

export const bp = {
  small: "600px",
  medium: "768px",
  large: "992px",
  xlarge: "1200px"
};

export const Global = createGlobalStyle`
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

:root {
    font-size: ${px2vw(24)}

    @media (min-width: ${bp.medium}){
        font-size: ${px2vw(18)}
    }

    @media (min-width: ${bp.xLarge}) {
        font-size: ${px2vw(16)}
    }
}
`;

export default Global;
