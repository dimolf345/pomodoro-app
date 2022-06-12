import styled from "styled-components";

export default styled.main`
  font-family: ${(props) => props.font};
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  align-items: center;

  *,
  *::after,
  *::before {
    font-family: ${(props) => props.font};
  }
`;
