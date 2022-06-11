import styled from "styled-components";

export const InputWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 0.8rem;
`;

export const InputLabel = styled.label`
  display: block;
  color: var(--color-darkblue);
  opacity: 0.4;
  font-weight: bold;
  font-size: 1.4rem;
  margin-bottom: ${(props) => (props.isDesktop ? "0" : "5px")};
`;

export const InputInner = styled.div`
  display: flex;
  width: 14rem;
  justify-content: space-between;
  padding: 0.2rem 1.6rem;
  background-color: var(--color-grey);
  border-radius: 1rem;
  &:focus-within {
    outline: 2px solid red;
  }
`;

export const ButtonContainer = styled.div`
  display: flex;
  background-color: transparent;
  flex-direction: column;
  width: 1.7rem;

  button:hover {
    path {
      stroke-opacity: 1 !important;
    }
  }

  button:disabled {
    cursor: not-allowed;
  }
`;

export const Input = styled.input`
  appearance: textfield;
  background: transparent;
  border: none;
  outline: none;
  max-width: 60%;
  font-size: 1.4rem;
  font-weight: bold;
`;
