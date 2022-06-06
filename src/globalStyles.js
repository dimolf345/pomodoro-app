import { createGlobalStyle } from "styled-components";

export const SIZES = {
  mobile: "376px",
  tablet: "768px",
  desktop: "1366px",
};

export const DEVICES = {
  mobile: `(max-width: ${SIZES.mobile})`,
  tablet: `(min-width: ${SIZES.tablet})`,
  desktop: `(min-width): ${SIZES.desktop}`,
};

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

    --color-gradient-start: #2E325A;
    --color-gradient-end: #0E112A;

    --box-shadow-top-left: -50px -50px 100px 0 rgba(39, 44, 90, 1);
    --box-shadow-bottom-right: 50px 50px 100px 0 rgba(18, 21, 48, 1);

    --heading-1-font-size-mobile: 8rem;
    --heading-1-font-size-desktop: 10rem;
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


h1, .heading-one {
  font-size: var(--heading-1-font-size-mobile);
  font-weight: var(--heading-1-font-weight);
  line-height: var(--heading-1-line-height);
  letter-spacing: var(--heading-1-letter-spacing);

  @media ${DEVICES.tablet} {
    font-size: var(--heading-1-font-size-desktop);
  }

  
}

h2 {
  font-size: var(--heading-2-font-size);
  font-weight: var(--heading-2-font-weight);
  line-height: var(--heading-2-line-height);
}

h3, .heading-three {
  font-size: var(--heading-3-font-size);
  font-weight: var(--heading-3-font-weight);
  line-height: var(--heading-3-line-height);
  letter-spacing: var(--heading-3-letter-spacing);
  text-transform: var(--heading-3-text-transform);
}


ul {
  list-style-type: none;
}

button {
  cursor: pointer;
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

.sr-only {
  border: 0 !important;
  clip: rect(1px, 1px, 1px, 1px) !important; /* 1 */
  -webkit-clip-path: inset(50%) !important;
  clip-path: inset(50%) !important;  /* 2 */
  height: 1px !important;
  margin: -1px !important;
  overflow: hidden !important;
  padding: 0 !important;
  position: absolute !important;
  width: 1px !important;
  white-space: nowrap !important;            /* 3 */
}

/*
Use in conjunction with .sr-only to only display content when it's focused.
@note Useful for skip links 
@see http://www.w3.org/TR/2013/NOTE-WCAG20-TECHS-20130905/G1
@note Based on a HTML5 Boilerplate technique, included in Bootstrap
@note Fixed a bug with position: static on iOS 10.0.2 + VoiceOver
@author Sylvain Pigeard
@see https://github.com/twbs/bootstrap/issues/20732
*/
.sr-only-focusable:focus,
.sr-only-focusable:active {
  clip: auto !important;
  -webkit-clip-path: none !important;
  clip-path: none !important;
  height: auto !important;
  margin: auto !important;
  overflow: visible !important;
  width: auto !important;
  white-space: normal !important;
}


`;

export default GlobalStyle;
