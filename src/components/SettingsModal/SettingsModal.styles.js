import styled from "styled-components";

export default styled.form`
    min-width: calc(100vw - 4.8rem);
    height: 90vh;
    transition: all 2s ease;
    transform: scale(0.7), translate(-50%, -50%);
    position: fixed;
    top: -50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background: #ffff;
    animation-name: ${(props) => (props.showModal ? "FromTop" : "ToTop")};
    animation-duration: 1s;
    animation-iteration-count: 1;
    animation-fill-mode: forwards;
    animation-play-state: running;
    border-radius: 1.5rem;
    z-index: 999;

    @keyframes FromTop {
        0% {
            top: -50%;
            opacity: 0;
        }

        100% {
            top: 50%;
            transform: scale(1), translate(-50%, -50%);
            opacity: 1;
        }
    }

    @keyframes ToTop {
        0% {
            top: ${(props) => (props.showModal ? "50%" : "-50%")}
        }

        100% {
            top: -50%;
            opacity: 0;
            display: none;
        }
        
    }
`;
