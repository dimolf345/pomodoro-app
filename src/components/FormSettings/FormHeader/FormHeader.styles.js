import styled from "styled-components";
import { DEVICES } from "../../../globalStyles";

export default styled.header`
    padding: 2.4rem;
    border-bottom: 1px solid var(--color-grey);
    display: flex;
    align-items: center;

    h3{
        letter-spacing: normal;
        text-transform: none;
        color: var(--color-darkblue);
        flex-grow: 1;
        font-size: 2rem;
    }

    button {
        height: 14px;
        width: 14px;
        transition: all .2s ease;

        &:hover  {
            path {
                opacity: 1 !important;
            }
        }
        &:focus-visible {
            outline: 4px dotted var(--color-darkblue)
        }
    }

    @media ${DEVICES.tablet} {
        h3{
            font-size: 2.8rem;
        }
    }

`;
