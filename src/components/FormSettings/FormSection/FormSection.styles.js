import styled from "styled-components";

export const FormSectionWrapper = styled.fieldset`
  margin-top: 2.4rem;
  border: none;
  padding: 1.8rem 0;

  &:not(:last-of-type) {
    border-bottom: 1px solid var(--color-grey);
  }
`;

export const FieldSetTitle = styled.legend`
    text-transform: uppercase;
    font-size: 1.1rem;
    text-align: center;
    width: 100%;
    letter-spacing: 5px;
    font-weight: bold;
`;
