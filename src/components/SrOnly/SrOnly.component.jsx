import React from "react";
import PropTypes from "prop-types";

function SrOnly({ text }) {
  return (
    <span className="sr-only">{text}</span>
  );
}

SrOnly.propTypes = {
  text: PropTypes.string.isRequired,
};

export default SrOnly;
