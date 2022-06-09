/* eslint-disable func-names */
import { ACTIONS } from "../constants";

export default function (state, action) {
  const { type, payload } = action;
  switch (type) {
  case ACTIONS.SET_TIMERS:
    // eslint-disable-next-line no-case-declarations
    return {
      ...state,
      timers: payload,
    };
  case ACTIONS.SET_FONT:
    return {
      ...state,
      currentFont: state.availableFonts[payload],
    };

  case ACTIONS.SET_COLOR:
    return {
      ...state,
      currentColor: state.availableColors[payload],
    };

  default:
    return state;
  }
}
