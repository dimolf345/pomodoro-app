import { useState, useContext, useEffect } from "react";
import { SettingsContext } from "../../context/SettingsContext/SettingsContext";

import MainContainer from "./Main.styles";

export default function Main() {
  const { state: { timers } } = useContext(SettingsContext);
  const [isCountdownActive, setIsCountdownActive] = useState(false);
  const [activeTimer, setActiveTimer] = useState(0);
  const [counter, setCounter] = useState(0);
  const [countdown, setCountdown] = useState(timers[activeTimer].duration);

  const handleChangeTimerManually = (timerIndex) => {
    if (activeTimer === timerIndex) return;
    if (isCountdownActive) {
      console.log("displaying confirm dialog");
      // handle user confirmation
    }
    setActiveTimer(timerIndex);
    setIsCountdownActive(false);
    setCounter(0);
  };

  const changeTimer = () => {
    if (counter === 3 && activeTimer === 2) console.log("reset pomodoro");
    else if (counter === 3 && activeTimer === 1) {
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
  }, [countdown]);

  return (
    <MainContainer>
      <h1>Test</h1>
      <button onClick={() => setCountdown(0)}>Click me to switch timer</button>
      {/* <TimerIndicator /> */}
    </MainContainer>
  );
}
