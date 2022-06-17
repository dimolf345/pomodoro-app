import styled from "styled-components";
import { DEVICES } from "../../../globalStyles";

export const FormWrapper = styled.form`
  min-width: calc(100vw - 4.8rem);
  visibility: ${(props) => (props.showModal ? "visible" : "collapse")};
  position: fixed;
  top: ${(props) => (props.isAnimated ? "-50%" : "50%")};
  left: 50%;
  transform: translate(-50%, -50%);
  background: #ffff;
  z-index: 999;
  display: ${(props) => (props.showModal ? "block" : "initial")};
  color: var(--color-darkblue);
  transition: ${(props) => (props.isAnimated ? "all 1s ease" : "none")};
  animation-name: ${(props) => (props.showModal ? "FromTop" : "ToTop")};
  animation-duration: ${(props) => (props.isAnimated ? "1s" : "0")};
  animation-iteration-count: 1;
  animation-fill-mode: forwards;
  animation-play-state: running;
  border-radius: 1.5rem;

  @media ${DEVICES.tablet} {
    min-width: 54rem;
    max-width: 54rem;
  }



  &,
  *,
  *::before,
  *::after {
    font-family: "Kumbh Sans", sans-serif;
  }

  @keyframes FromTop {
    0% {
      top: -50%;
      opacity: 0;
    }

    100% {
      top: 50%;
      opacity: 1;
    }
  }

  @keyframes ToTop {
    0% {
      top: ${(props) => (props.isAnimated ? "50%" : "-50%")};
    }

    100% {
      top: -50%;
      opacity: 0;
      display: none;
    }
  }
`;

export const Background = styled.div`
  width: 100vw;
  height: 100vh;
  position: absolute;
  top: 0;
  left: 0;
  visibility: ${(props) => (props.showModal ? "visible" : "collapse")};
  transition: visibility 0.5s ease-out;
  background-color: rgba(10, 12, 28, 0.5);
`;
