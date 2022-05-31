import React from "react";
import PropTypes from "prop-types";
import { ListWrapper, Button, ListItem } from "./Timerindicator.styles";
import { useColor, useGetTimers, useTimer } from "../../context/customContext";

function TimerIndicator({ isTimerActive, setIsTimerActive }) {
  const [activeTimer, setActiveTimer] = useTimer();
  const currentColor = useColor()[0];
  const timers = useGetTimers();
  return (
    <ListWrapper fillColor={currentColor}>
      {timers.map((timer, index) => {
        const { name } = timer;
        const isActive = name === activeTimer.name;
        return (
          <ListItem
            className={isActive ? "active" : ""}
            key={name}
          >
            <Button onClick={() => setActiveTimer(index)}>{name}</Button>
          </ListItem>
        );
      })}
    </ListWrapper>
  );
}

TimerIndicator.propTypes = {
  isTimerActive: PropTypes.bool.isRequired,
  setIsTimerActive: PropTypes.func.isRequired,
};

export default TimerIndicator;
