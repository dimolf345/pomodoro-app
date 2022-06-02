/* eslint-disable func-names */
import { ACTIONS } from "../constants";

export default function (state, action) {
  const { type, payload } = action;
  switch (type) {
  case ACTIONS.SET_TIMER:
    return {
      ...state,
      currentTimer: state.timers[payload],
    };

  case ACTIONS.INCREMENT_COUNTER:
    return {
      ...state,
      counter: state.counter + 1,
    };

  case ACTIONS.RESET_COUNTER:
    return {
      ...state,
      counter: 0,
    };

  case ACTIONS.TOGGLE_COUNTDOWN:
    return {
      ...state,
      isCountDownInProgress: !state.isCountDownInProgress,
    };

  default:
    return state;
  }
}
