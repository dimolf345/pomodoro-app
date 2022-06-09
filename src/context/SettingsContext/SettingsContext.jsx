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

  function setFont(fontIndex) {
    dispatch({
      type: ACTIONS.SET_FONT,
      payload: fontIndex,
    });
  }
  function setColor(colorIndex) {
    dispatch({
      type: ACTIONS.SET_COLOR,
      payload: colorIndex,
    });
  }

  function setTimers(timersObj) {
    dispatch({
      type: ACTIONS.SET_TIMERS,
      payload: timersObj,
    });
  }

  return (
    <SettingsContext.Provider
      value={{
        state,
        setTimers,
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
