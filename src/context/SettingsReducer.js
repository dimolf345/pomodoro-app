/* eslint-disable func-names */
import { ACTIONS } from "./constants";

export default function (state, action) {
  const { type, payload } = action;
  switch (type) {
  case ACTIONS.SET_TIMER:
    // eslint-disable-next-line no-case-declarations
    const { timerType, newTimer } = payload;
    return {
      ...state,
      timers: state.timers.map((timer) => {
        if (timer.name === timerType) {
          console.log("setting new timer");
          return {
            name: timerType,
            duration: newTimer,
          };
        } return timer;
      }),
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
  default:
    return state;
  }
}
