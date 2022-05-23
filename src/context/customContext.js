import { useContext } from "react";
import { SettingsContext } from "./SettingsContext";

export const useFont = () => {
  const { state, setFont } = useContext(SettingsContext);

  return [state.currentFont, setFont];
};

export const useColor = () => {
  const { currentColor, setColor } = useContext(SettingsContext);

  return [currentColor, setColor];
};

export const useTimer = (timerName) => {
  const { state, setTimer } = useContext(SettingsContext);
  const selectedTimer = state.timers.find((timer) => timer.name === timerName);
  console.log(selectedTimer);
  return [selectedTimer.duration, (newTime) => setTimer(timerName, newTime)];
};
