import styled from "styled-components";

export default styled.button`
  color: ${(props) => (props.color ? props.color : "currentColor")};
  text-align: center;
  padding-left: 1rem;
  transition: all .2s ease;

  &:hover {
    color: ${(props) => props.hoverColor}
  }
`;
