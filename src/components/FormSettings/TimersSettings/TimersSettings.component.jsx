import React from "react";
import PropTypes from "prop-types";

import TimerInput from "../TimeInput/TimerInput.component";

function TimerSettings({ timers, setTimers }) {
  const handleChange = (timerIndex) => (quantity) => {
    const newDuration = timers[timerIndex].duration + quantity;
    const newTimers = timers.map((timer, index) => {
      if (index === timerIndex) {
        return {
          ...timer,
          duration: newDuration,
        };
      }
      return timer;
    });
    setTimers(newTimers);
  };

  return (
    <>
      {timers.map((timer, index) => {
        const {
          name, duration, min, max,
        } = timer;
        return (
          <TimerInput
            key={name}
            label={name.replace(" ", "-")}
            value={duration}
            min={min}
            max={max}
            handleChange={handleChange(index)}
          />
        );
      })}
    </>
  );
}

TimerSettings.propTypes = {
  timers: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string,
    duration: PropTypes.number,
  })).isRequired,
  setTimers: PropTypes.func.isRequired,
};

export default TimerSettings;
