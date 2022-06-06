import styled from "styled-components";

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
    }

`;
