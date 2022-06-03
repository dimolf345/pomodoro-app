import styled from "styled-components";

export const CountdownWrapper = styled.div`
  height: ${(props) => `${props.size}px`};
  width: ${(props) => `${props.size}px`};
  padding: 1.6rem;

  background: linear-gradient(to right bottom, var(--color-gradient-end), var(--color-gradient-start));
  border-radius: 50%;

  box-shadow: var(--box-shadow-top-left), var(--box-shadow-bottom-right); 
`;

export const CountdownInner = styled.div`
  width: 100%;
  height: 100%;
  background-color: var(--color-verydarkblue);
  border-radius: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
    position: relative;
`;

// #progress-circle {
//   background: radial-gradient(white 50%, transparent 51%),
//     conic-gradient(transparent 0deg 220deg, gainsboro 220deg 360deg),
//     conic-gradient(orange 0deg, yellow 90deg, lightgreen 180deg, green);
//   border-radius: 50%;
//   width: 120px;
//   height: 120px;
//   // For animations...
//   // transition: all 500ms ease-in;
//   // will-change: transform;
// }
