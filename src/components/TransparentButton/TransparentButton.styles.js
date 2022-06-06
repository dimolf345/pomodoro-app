import styled from "styled-components";

export default styled.button`
  appearance: none;
  outline: none;
  background: none;
  border: none;
  color: currentColor;
  text-align: center;
  width: 100%;
  padding-left: 1rem;
  transition: all .2s ease;

  &:hover {
    color: ${(props) => `var(--color-${props.hoverColor})`}
  }
`;
