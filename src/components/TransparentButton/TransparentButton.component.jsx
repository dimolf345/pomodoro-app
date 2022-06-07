import React from "react";
import PropTypes from "prop-types";
import StyledButton from "./TransparentButton.styles";

function TransparentButton({
  text, handleClick, hoverColor, children, className,
}) {
  return (
    <StyledButton
      className={className}
      hoverColor={hoverColor}
      onClick={handleClick}
    >
      {text || children}
    </StyledButton>
  );
}

TransparentButton.defaultProps = {
  children: <></>,
  className: "",
};

TransparentButton.propTypes = {
  text: PropTypes.string.isRequired,
  handleClick: PropTypes.func.isRequired,
  hoverColor: PropTypes.string.isRequired,
  children: PropTypes.element,
  className: PropTypes.string,
};

export default TransparentButton;
