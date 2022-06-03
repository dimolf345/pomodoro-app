import PropTypes from "prop-types";
import { SvgWrapper, Circle } from "./ProgressBar.styles";

function ProgressBar({
  r, percentage, size, fillColor,
}) {
  const strokeDashArray = Math.floor(size * r * 2 * Math.PI);
  const strokeOffset = strokeDashArray - (strokeDashArray * percentage) / 100;

  return (
    <SvgWrapper>
      <Circle
        fillColor={fillColor}
        cx="50%"
        cy="50%"
        r={`${r * 100}%`}
        strokeDasharray={strokeDashArray}
        strokeDashoffset={percentage === 0 ? strokeDashArray : strokeOffset}
      />
    </SvgWrapper>
  );
}

ProgressBar.defaultProps = {
  r: 0.45,
};

ProgressBar.propTypes = {
  r: PropTypes.number,
  percentage: PropTypes.number.isRequired,
  size: PropTypes.number.isRequired,
  fillColor: PropTypes.string.isRequired,
};

export default ProgressBar;

// stroke-dashoffset: calc(760 - (760 * 50) /100);
