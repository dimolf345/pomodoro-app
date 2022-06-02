/* eslint-disable import/no-named-as-default */
/* eslint-disable react/jsx-no-constructed-context-values */
import { createContext, useReducer } from "react";
import PropTypes from "prop-types";
import SettingsReducer from "./SettingsReducer";
import {
  FONTS, COLORS, ACTIONS, TIMERS,
} from "../constants";

const initialState = {
  timers: TIMERS,
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

  return (
    <SettingsContext.Provider
      value={{
        state,
        setTimerDuration,
        setFont,
        setColor,
      }}
    >
      {children}
    </SettingsContext.Provider>
  );
}

SettingsContextProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
