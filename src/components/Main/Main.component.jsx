import { useState, useContext, useEffect } from "react";
import { SettingsContext } from "../../context/SettingsContext/SettingsContext";

import MainContainer from "./Main.styles";
import TimerIndicator from "../TimerIndicator/TimerIndicator.component";
import Countdown from "../Countdown/Countdown.component";
import FormSettings from "../FormSettings/FormSettings.component";

export default function Main() {
  const { state: { timers, currentFont } } = useContext(SettingsContext);
  const [isCountdownActive, setIsCountdownActive] = useState(false);
  const [activeTimer, setActiveTimer] = useState(0);
  const [counter, setCounter] = useState(0);
  const [countdown, setCountdown] = useState(timers[activeTimer].duration);

  const handleChangeTimerManually = (timerIndex) => {
    if (isCountdownActive) {
      console.log("displaying confirm dialog");
      // handle user confirmation
    }
    setActiveTimer(timerIndex);
    setIsCountdownActive(false);
    setCounter(0);
  };

  const resetPomodoro = () => {
    setIsCountdownActive(false);
    setCounter(0);
    setActiveTimer(0);
  };

  const changeTimer = () => {
    if (activeTimer > timers.length - 1) return;
    if (counter === 3 && activeTimer === 2) resetPomodoro();
    else if (counter === 3 && activeTimer === 0) {
      setActiveTimer(2);
    } else if (counter < 3 && activeTimer === 1) {
      setCounter(counter + 1);
      setActiveTimer(0);
    } else {
      setActiveTimer(1);
    }
    setCountdown(timers[activeTimer].duration);
  };

  useEffect(() => {
    if (countdown === 0) changeTimer();
    else setCountdown(timers[activeTimer].duration);
  }, [countdown, activeTimer, changeTimer, timers]);

  useEffect(() => {
    setCountdown(timers[activeTimer].duration);
  }, [timers, activeTimer]);

  return (
    <MainContainer font={currentFont.value}>

      <TimerIndicator
        handleClick={handleChangeTimerManually}
        activeTimer={activeTimer}
      />
      <Countdown
        timerDuration={countdown}
        setCountdown={setCountdown}
        isActive={isCountdownActive}
        setIsActive={setIsCountdownActive}
      />
      <FormSettings isAnimated />
    </MainContainer>
  );
}
