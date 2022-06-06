import PropTypes from "prop-types";
import StyledButton from "./TransparentButton.styles";

function TransparentButton({ text, handleClick, hoverColor }) {
  return (
    <StyledButton
      className="heading-three"
      hoverColor={hoverColor}
      onClick={handleClick}
    >
      {text}
    </StyledButton>
  );
}

TransparentButton.propTypes = {
  text: PropTypes.string.isRequired,
  handleClick: PropTypes.func.isRequired,
};

export default TransparentButton;
