import styled from "styled-components";

export const InputWrapper = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
`;

export const InputInner = styled.div`
  margin-right: 1.1rem;
  margin-left: 1.1rem;
  width: 4rem;
  height: 4rem;
  border-radius: 50%;
  background-color: var(--color-grey);
  position: relative;

  &:hover {
    border: 4px solid white;
    outline: 1px solid var(--color-grey);
  }

  span {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    font-size: 1.5rem;
    font-weight: bold;
    opacity: 0.75;
  }
`;

export const InputLabel = styled.label`
  width: 4rem;
  height: 4rem;
  cursor: pointer;
`;

export const Input = styled.input.attrs({
  type: "radio",
})`
  appearance: none;
  width: 100%;
  height: 100%;
  cursor: pointer;
`;
