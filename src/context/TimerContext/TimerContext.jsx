/* eslint-disable react/jsx-no-constructed-context-values */
import { createContext, useReducer } from "react";
import PropTypes from "prop-types";
import { TIMERS, ACTIONS } from "../constants";
import TimerContextReducer from "./TimerContextReducer";

const initialState = {
  counter: 0,
  isCountDownInProgress: false,
  timers: TIMERS,
  currentTimer: TIMERS[0],
};

export const TimerContext = createContext(initialState);

export function TimerContextProvider({ children }) {
  const [state, dispatch] = useReducer(TimerContextReducer, initialState);

  function setTimer(timerIndex) {
    dispatch({
      type: ACTIONS.SET_TIMER,
      payload: timerIndex,
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

  function toggleCountDown() {
    dispatch({
      type: ACTIONS.TOGGLE_COUNTDOWN,
    });
  }

  return (
    <TimerContext.Provider
      value={{
        state,
        setTimer,
        incrementCounter,
        resetCounter,
        toggleCountDown,
      }}
    >
      {children}
    </TimerContext.Provider>
  );
}

TimerContextProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
