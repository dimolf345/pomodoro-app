/* eslint-disable react/jsx-no-constructed-context-values */
import { createContext, useReducer } from "react";
import PropTypes from "prop-types";
import SettingsReducer from "./SettingsReducer";
import {
  FONTS, COLORS, ACTIONS, TIMERS,
} from "./constants";

const initialState = {
  counter: 0,
  timers: TIMERS,
  availableFonts: FONTS,
  availableColors: COLORS,
  currentTimer: TIMERS[0],
  currentFont: FONTS[0],
  currentColor: COLORS[0],
};

// SettingsContext is the state holder
export const SettingsContext = createContext(initialState);

// SettingsContextProvider is where we integrate useReducer
export function SettingsContextProvider({ children }) {
  const [state, dispatch] = useReducer(SettingsReducer, initialState);

  function setTimer(timerIndex) {
    dispatch({
      type: ACTIONS.SET_TIMER,
      payload: timerIndex,
    });
  }

  function setTimerDuration(timerType, newTimer) {
    dispatch({
      type: ACTIONS.CHANGE_TIMER_DURATION,
      payload: { timerType, newTimer },
    });
  }

  function setFont(fontIndex) {
    dispatch({
      type: ACTIONS.SET_FONT,
      payload: fontIndex,
    });
  }
  function setColor(colorIndex) {
    dispatch({
      type: ACTIONS.SET_COUNTER,
      payload: colorIndex,
    });
  }

  function incrementCounter() {
    dispatch({
      type: ACTIONS.INCREMENT_COUNTER,
    });
  }

  function resetCounter() {
    dispatch({
      type: ACTIONS.RESET_COUNTER,
    });
  }

  return (
    <SettingsContext.Provider value={{
      state, setTimer, setTimerDuration, setFont, setColor, incrementCounter, resetCounter,
    }}
    >
      {children}
    </SettingsContext.Provider>
  );
}

SettingsContextProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
