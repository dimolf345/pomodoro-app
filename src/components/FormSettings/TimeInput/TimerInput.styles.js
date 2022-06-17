import styled from "styled-components";
import { DEVICES } from "../../../globalStyles";

export const InputWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 0.8rem;

  &:focus-within {
    label {
      color: var(--color-verydarkblue);
      opacity: 1;
    }
  }

  @media ${DEVICES.tablet} {
    flex-direction: column;
    margin-bottom: 0;
    padding: 0.5rem;
  }
`;

export const InputLabel = styled.label`
  display: block;
  color: var(--color-darkblue);
  opacity: 0.4;
  font-weight: bold;
  font-size: 1.4rem;
  margin-bottom: ${(props) => (props.isDesktop ? "0" : "5px")};

  @media ${DEVICES.tablet} {
    width: 100%;
    text-align: left;
  }

`;

export const InputInner = styled.div`
  display: flex;
  width: 14rem;
  justify-content: space-between;
  padding: 0.2rem 1.6rem;
  background-color: var(--color-grey);
  border-radius: 1rem;
  &:focus-within {
    outline: 2px solid var(--color-verydarkblue);
  }

  &:focus-within label {
    color: var(--color-verydarkblue);
    opacity: 1;
  }
`;

export const ButtonContainer = styled.div`
  display: flex;
  background-color: transparent;
  flex-direction: column;
  width: 1.7rem;

  button:focus-visible:not(:disabled) {

    outline: 1px solid var(--color-darkblue);  

    path {
      stroke-opacity: 1 !important;
    }
  }

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
