import PropTypes from "prop-types";
import StyledHeadingThree from "./TimerText.styles";

function TimerText({
  minutes, seconds, handleClick, hoverColor,
}) {
  return (
    <StyledHeadingThree
      hoverColor={hoverColor}
      onClick={handleClick}
      className="heading-one"
    >
      {minutes}

      <span className="sr-only"> minutes </span>
      :
      {seconds}
      <span className="sr-only"> seconds left</span>
    </StyledHeadingThree>
  );
}

TimerText.defaultProps = {
  handleClick: () => {},
  hoverColor: "currentColor",
};

TimerText.propTypes = {
  minutes: PropTypes.string.isRequired,
  seconds: PropTypes.string.isRequired,
  handleClick: PropTypes.func,
  hoverColor: PropTypes.string,
};

export default TimerText;
