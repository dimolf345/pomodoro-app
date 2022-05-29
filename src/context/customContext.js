import { useContext } from "react";
import { SettingsContext } from "./SettingsContext";

export const useFont = () => {
  const { state, setFont } = useContext(SettingsContext);

  return [state.currentFont, setFont];
};

export const useColor = () => {
  const { state, setColor } = useContext(SettingsContext);

  return [state.currentColor, setColor];
};

export const useTimer = () => {
  const { state, setTimer } = useContext(SettingsContext);
  return [state.currentTimer, setTimer];
};

export const useTimerDuration = (timerName) => {
  const { state, setTimer } = useContext(SettingsContext);
  const selectedTimer = state.timers.find((timer) => timer.name === timerName);
  if (!selectedTimer) throw new Error("Timer not present");
  return [selectedTimer.duration, (newTime) => setTimer(timerName, newTime)];
};

export const useGetTimers = () => {
  const { state } = useContext(SettingsContext);
  return state.timers;
};
