import styled from "styled-components";
import { DEVICES } from "../../../globalStyles";

export default styled.div`
  padding: 0 2.4rem 5.9rem;

  @media ${DEVICES.tablet} {
    padding-bottom: 3.6rem;
  }
`;
