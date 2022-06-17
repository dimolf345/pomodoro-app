import styled from "styled-components";
import { DEVICES } from "../../globalStyles";

export default styled.button`
  color: var(--color-smokedgrey);
  margin-bottom: 1.2rem;

  @media ${DEVICES.tablet} {
    margin-bottom: 5rem;
  }

  &:hover {
    color: var(--color-grey);
  }
`;
