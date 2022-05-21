import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
:root {
    --color-orange: #F87070;
    --color-cyan: #70F3F8;
    --color-violet: #D881F8;
    --color-grey: #D7E0FF;

    --color-darkblue: #1E213F;
    --color-white:#ffffff;
    --color-lightgrey: #EFF1FA;
    --color-verydarkblue: #161932;

    --heading-1-font-size: 100px;
    --heading-1-font-weight: bold;
    --heading-1-line-space: 120px;
    --heading-1-letter-spacing:-5px;

}


*,
*::after,
*::before {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
html {
  font-size: 62.5%;
}

`;

export default GlobalStyle;
