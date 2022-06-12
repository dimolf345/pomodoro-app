import styled from "styled-components";

export default styled.button`
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translate(-50%, 50%);
  width: 14rem;
  background-color: var(--color-orange);
  height: 5.3rem;
  border-radius: 26.5px;
  color: #fff;
  font-weight: bold;
  transition: all 0.2s ease;

  &:hover {
    filter: brightness(1.25);
  }

  &:active {
    transform: translate(-50%, 60%);
  }
`;
