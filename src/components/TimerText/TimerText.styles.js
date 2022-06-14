import styled from "styled-components";
import { DEVICES } from "../../globalStyles";

export default styled.h3`
cursor: pointer;
@media ${DEVICES.tablet} {

  margin-bottom: 2rem;
}

&:hover ~ button {
  color: ${(props) => props.hoverColor}
}
`;
