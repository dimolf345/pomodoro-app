/* eslint-disable react/jsx-no-constructed-context-values */
import { createContext, useReducer } from "react";
import PropTypes from "prop-types";
import SettingsReducer from "./SettingsReducer";
import { FONTS, COLORS } from "./constants";

const initialState = {
  timers: {
    pomodoro: 25,
    shortBreak: 5,
    longBreak: 15,
  },
  availableFonts: FONTS,
  availableColors: COLORS,
  currentFont: FONTS[0],
  currentColor: COLORS[0],
};

// SettingsContext is the state holder
export const SettingsContext = createContext(initialState);

// SettingsContextProvider is where we integrate useReducer
export function SettingsContextProvider({ children }) {
  const [state, dispatch] = useReducer(SettingsReducer, initialState);

  function setTimer(timerType, newTimer) {
    dispatch({
      type: "SET_TIMER",
      payload: { timerType, newTimer },
    });
  }

  function setFont(fontIndex) {
    dispatch({
      type: "SET_FONT",
      payload: fontIndex,
    });
  }
  function setColor(colorIndex) {
    dispatch({
      type: "SET_COLORS",
      payload: colorIndex,
    });
  }

  return (
    <SettingsContext.Provider value={{
      state, setTimer, setFont, setColor,
    }}
    >
      {children}
    </SettingsContext.Provider>
  );
}

SettingsContextProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
