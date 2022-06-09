import React from "react";
import PropTypes from "prop-types";
import { FormSectionWrapper, FieldSetTitle } from "./FormSection.styles";

function FormSection({ title, children, isDesktop }) {
  return (
    <FormSectionWrapper isDesktop={isDesktop}>
      <FieldSetTitle>{title}</FieldSetTitle>
      {children && React.cloneElement(children, { isDesktop })}
    </FormSectionWrapper>
  );
}

FormSection.propTypes = {
  title: PropTypes.string.isRequired,
  isDesktop: PropTypes.bool.isRequired,
  children: PropTypes.element.isRequired,
};

export default FormSection;
