import { useEffect, useState } from "react";
import PropTypes from "prop-types";

import useMediaQuery from "../../hooks/useMediaquery";
import ProgressBar from "../ProgressBar/ProgressBar.component";
import TimerText from "../TimerText/TimerText.component";
import TransparentButton from "../TransparentButton/TransparentButton.component";

import { CountdownWrapper, CountdownInner, Timer } from "./Countdown.styles";
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
    // setCountdown(0) makes the main component change timerType or ends the current timer
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

  const handleClick = () => {
    setIsActive(!isActive);
  };

  useEffect(() => {
    setlocalCountdown(timerDuration * 60);
  }, [timerDuration]);

  // eslint-disable-next-line consistent-return
  useEffect(() => {
    const countdown = handleCountdown(localCountdown, isActive);
    if (countdown) return () => clearInterval(countdown);
  }, [localCountdown, isActive, handleCountdown]);

  return (
    <CountdownWrapper size={isDesktop ? 410 : 300}>
      <CountdownInner>
        <ProgressBar
          fillColor={fillColor.value}
          size={isDesktop ? 378 : 268}
          percentage={pctTimeLeft}
        />
        <Timer>
          <TimerText minutes={minutes} seconds={seconds} />
          <TransparentButton
            className="heading-three"
            hoverColor={fillColor.value}
            handleClick={handleClick}
            text={
              // eslint-disable-next-line no-nested-ternary
              isActive ? "Stop" : localCountdown === 0 ? "Restart" : "Start"
            }
          />
        </Timer>
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
