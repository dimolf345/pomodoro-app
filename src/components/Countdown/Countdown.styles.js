import styled from "styled-components";

export const CountdownWrapper = styled.div`
  height: ${(props) => `${props.size}px`};
  width: ${(props) => `${props.size}px`};
  padding: 1.6rem;
  position: relative;
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

export const Timer = styled.div`
  position: relative;
  z-index: 5;
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: center;
  justify-content: center;
`;
