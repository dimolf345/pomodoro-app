import { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { CountdownWrapper, CountdownInner } from "./Countdown.styles";
import ProgressBar from "../ProgressBar/ProgressBar.component";
import useMediaQuery from "../../hooks/useMediaquery";
import { useColor } from "../../context/customContext";
import { calcMinsAndSeconds } from "../../helperFunctions";

function Countdown({
  timerDuration, setCountdown, isActive, setIsActive,
}) {
  const isDesktop = useMediaQuery("(min-width: 767px)");
  const fillColor = useColor()[0];
  const [localCountdown, setlocalCountdown] = useState(timerDuration * 60);
  const pctTimeLeft = Math.floor(((localCountdown) / (timerDuration * 60)) * 100);

  const [minutes, seconds] = calcMinsAndSeconds(localCountdown);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const handleCountdown = (timeleft, isCountdownRunning) => {
    if (isCountdownRunning) {
      if (timeleft === 0) {
        setCountdown(0);
        return;
      }
      const interval = setInterval(() => {
        setlocalCountdown(timeleft - 1);
      }, 1000);
      // eslint-disable-next-line consistent-return
      return interval;
    }
  };

  useEffect(() => {
    setlocalCountdown(timerDuration * 60);
  }, [timerDuration]);

  useEffect(() => {
    const countdown = handleCountdown(localCountdown, isActive);
    if (countdown) return () => clearInterval(countdown);
  }, [localCountdown, isActive, handleCountdown]);

  return (
    <CountdownWrapper size={isDesktop ? 410 : 300}>
      <CountdownInner>
        <ProgressBar fillColor={fillColor} size={isDesktop ? 378 : 268} percentage={pctTimeLeft} />
        <h3 className="heading-one">
          {minutes}
          <span className="sr-only">minutes</span>
          :
          {seconds}
          <span className="sr-only">seconds left</span>
        </h3>
      </CountdownInner>

    </CountdownWrapper>
  );
}

Countdown.propTypes = {
  timerDuration: PropTypes.number.isRequired,
  setCountdown: PropTypes.func.isRequired,
  isActive: PropTypes.bool.isRequired,
  setIsActive: PropTypes.func.isRequired,
};

export default Countdown;
