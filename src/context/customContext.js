import { useContext } from "react";
import { SettingsContext } from "./SettingsContext/SettingsContext";

export const useFont = () => {
  const { state, setFont } = useContext(SettingsContext);

  return [state.currentFont, setFont];
};

export const useColor = () => {
  const { state, setColor } = useContext(SettingsContext);

  return [state.currentColor, setColor];
};

export const useSetTimers = () => {
  const { state, setTimers } = useContext(SettingsContext);

  return [state.timers, setTimers];
};
