import React from "react";
import PropTypes from "prop-types";
import { ReactComponent as CloseIcon } from "../../../assets/icon-close.svg";
import HeaderWrapper from "./FormHeader.styles";

function FormHeader({ handleClick, title }) {
  return (
    <HeaderWrapper>
      <h3 id="form-header">{title}</h3>
      <button
        type="button"
        onClick={handleClick}
      >
        <CloseIcon />
        <span className="sr-only">close settings form</span>
      </button>
    </HeaderWrapper>
  );
}

FormHeader.propTypes = {
  handleClick: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired,
};

export default FormHeader;
