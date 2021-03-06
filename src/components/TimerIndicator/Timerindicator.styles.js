import styled from "styled-components";
import { DEVICES } from "../../globalStyles";

export const ListWrapper = styled.ul`
  display: flex;
  background-color: var(--color-verydarkblue);
  padding: 0.8rem;
  border-radius: 31.5px;
  width: 100%;
  margin-bottom: 5rem;
  max-width: 37.5rem;

  @media ${DEVICES.tablet} {

    margin-bottom: 0;
  }

  @keyframes activeAnimation {
    0% {
      background-color: transparent;
    }

    100% {
      background-color: ${(props) => props.fillColor};
    }
  }

  .active {
    /* animation-name: activeAnimation;
    animation-duration: 0.2s;
    animation-fill-mode: forwards; */
    color: var(--color-darkblue) !important;
    background-color: ${(props) => props.fillColor};
  }
`;

export const ListItem = styled.li`
    flex-grow: 1;
    border-radius: 26.5px;
    transition: all 0.5s ease-in-out;
    background-color: transparent;
    color: var(--color-smokedgrey);

    &:hover {
        color: var(--color-grey);
    }


`;

export const Button = styled.button`
    font-size: 1.2rem;
    font-weight: bold;
    height: 4.8rem;
    width: 100%;
    text-align: center;
    outline: none;
    background: none;
    border: none;
    color: currentColor;
    cursor: pointer;

    @media ${DEVICES.tablet} {
      font-size: 1.4rem;
    }
`;
