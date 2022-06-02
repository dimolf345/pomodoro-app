import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
:root {
    --color-orange: #F87070;
    --color-cyan: #70F3F8;
    --color-violet: #D881F8;
    --color-grey: #D7E0FF;
    --color-smokedgrey: rgba(215, 224, 255, 0.4);

    --color-darkblue: #1E213F;
    --color-white:#ffffff;
    --color-lightgrey: #EFF1FA;
    --color-verydarkblue: #161932;

    --heading-1-font-size: 10rem;
    --heading-1-font-weight: bold;
    --heading-1-line-height: 12rem;
    --heading-1-letter-spacing:-0.5rem;

    --heading-2-font-size: 2.8rem;
    --heading-2-font-weight: bold;
    --heading-2-line-height: 3.4rem;
    
    --heading-3-font-size: 1.6rem;
    --heading-3-font-weight: bold;
    --heading-3-line-height: 1.9rem;
    --heading-3-letter-spacing: 1.5rem;
    --heading-3-text-transform: uppercase;

    --body-1-font-size: 1.4rem;
    --body-1-font-weight: bold;
    --body-1-line-height: 1.8rem;

    --body-2-font-size: 1.2rem;
    --body-2-font-weight: bold;
    --body-2-line-height: 1.4rem
}


*,
*::after,
*::before {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'Kumbh Sans', sans-serif;
}
html {
  font-size: 62.5%;
}


h1 {
  font-size: var(--heading-1-font-size);
  font-weight: var(--heading-1-font-weight);
  line-height: var(--heading-1-line-height);
  letter-spacing: var(--heading-1-letter-spacing);
}

h2 {
  font-size: var(--heading-2-font-size);
  font-weight: var(--heading-2-font-weight);
  line-height: var(--heading-2-line-height);
}

h3 {
  font-size: var(--heading-3-font-size);
  font-weight: var(--heading-3-font-weight);
  line-height: var(--heading-3-line-height);
  letter-spacing: var(--heading-3-letter-spacing);
  text-transform: var(--heading-3-text-transform);
}


ul {
  list-style-type: none;
}

.body1 {
  font-size: var(--body-1-font-size);
  font-weight: var(--body-1-font-weight);
  line-height: var(--body-1-line-height);
}

.body2 {
  font-size: var(--body-2-font-size);
  font-weight: var(--body-2-font-weight);
  line-height: var(--body-2-line-height);
}

`;

export default GlobalStyle;
