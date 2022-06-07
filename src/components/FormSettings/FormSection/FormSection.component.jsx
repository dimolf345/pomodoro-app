import React from "react";
import PropTypes from "prop-types";
import { FormSectionWrapper, FieldSetTitle } from "./FormSection.styles";

function FormSection({ title, children }) {
  return (
    <FormSectionWrapper isDesktop>
      <FieldSetTitle>{title}</FieldSetTitle>
      {children && React.cloneElement(children, { isDesktop: true })}
    </FormSectionWrapper>
  );
}

FormSection.propTypes = {
  title: PropTypes.string.isRequired,
  isDesktop: PropTypes.bool.isRequired,
  children: PropTypes.element.isRequired,
};

export default FormSection;
