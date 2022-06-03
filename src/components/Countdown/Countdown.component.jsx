import { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { CountdownWrapper, CountdownInner } from "./Countdown.styles";
import ProgressBar from "../ProgressBar/ProgressBar.component";
import useMediaQuery from "../../hooks/useMediaquery";
import { useColor } from "../../context/customContext";
import { calcMinsAndSeconds } from "../../context/helperFunctions";

function Countdown({ timerDuration, setCountdown, isActive }) {
  const isDesktop = useMediaQuery("(min-width: 767px)");
  const fillColor = useColor()[0];
  const [localCountdown, setlocalCountdown] = useState(timerDuration * 60);
  const pctTimeLeft = Math.floor(((timerDuration * 60) / (localCountdown)) * 100);

  const [minutes, seconds] = calcMinsAndSeconds(localCountdown);

  useEffect(() => {
    setlocalCountdown(timerDuration * 60);
  }, [timerDuration]);

  useEffect(() => {
    if (!isActive) return;
    const interval = setInterval(() => {
      setlocalCountdown(localCountdown - 1);
    }, 1000);

    // eslint-disable-next-line consistent-return
    return () => clearInterval(interval);
  });

  return (
    <CountdownWrapper size={isDesktop ? 410 : 300}>
      <CountdownInner>
        <ProgressBar fillColor={fillColor} size={isDesktop ? 378 : 268} percentage={pctTimeLeft} />
        <h1>
          {minutes}
          :
          {seconds}
        </h1>
      </CountdownInner>

    </CountdownWrapper>
  );
}

Countdown.propTypes = {
  timerDuration: PropTypes.number.isRequired,
  setCountdown: PropTypes.func.isRequired,
  isActive: PropTypes.bool.isRequired,
};

export default Countdown;
