import React from "react";
import PropTypes from "prop-types";

function FontSelector({ fonts, setFonts, activeFontIndex }) {
  return <ul>FontSelector</ul>;
}

FontSelector.propTypes = {
  fonts: PropTypes.arrayOf(PropTypes.objectOf(PropTypes.string)).isRequired,
  setFonts: PropTypes.func.isRequired,
  activeFontIndex: PropTypes.number.isRequired,
};

export default FontSelector;
