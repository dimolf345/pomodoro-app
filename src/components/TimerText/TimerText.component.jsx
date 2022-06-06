import PropTypes from "prop-types";
import StyledHeadingThree from "./TimerText.styles";

function TimerText({ minutes, seconds }) {
  return (
    <StyledHeadingThree className="heading-one">
      {minutes}
      <span className="sr-only">minutes</span>
      :
      {seconds}
      <span className="sr-only">seconds left</span>
    </StyledHeadingThree>
  );
}

TimerText.propTypes = {
  minutes: PropTypes.string.isRequired,
  seconds: PropTypes.string.isRequired,
};

export default TimerText;
