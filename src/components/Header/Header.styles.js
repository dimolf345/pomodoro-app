import styled from "styled-components";
import { DEVICES } from "../../globalStyles";

export const HeaderContainer = styled.header`
padding: 0.6rem 0;
margin-bottom: 3.9rem;


@media ${DEVICES.tablet} {
    margin-top: 4.8rem;
}
`;

export const Title = styled.h1`
    font-size: 2.4rem;
    letter-spacing: 0;
    line-height: normal;
    text-align: center;

@media ${DEVICES.tablet} {
    font-size: 3.2rem;
}
`;
