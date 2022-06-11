import React from "react";
import PropTypes from "prop-types";

import Button from "./SubmitButton.styles";

function SubmitButton({ handleSubmit, text }) {
  return (
    <Button
      onClick={handleSubmit}
      type="submit"
    >
      {text}
    </Button>
  );
}

SubmitButton.defaultProps = {
  text: "Submit",
};

SubmitButton.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  text: PropTypes.string,
};

export default SubmitButton;
