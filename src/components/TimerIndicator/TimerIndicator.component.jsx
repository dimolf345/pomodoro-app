import React from "react";

import { ListWrapper, Button, ListItem } from "./Timerindicator.styles";
import {
  useColor, useGetTimers, useTimer, useCountDownState,
} from "../../context/customContext";

function TimerIndicator() {
  const [activeTimer, setActiveTimer] = useTimer();
  const currentColor = useColor()[0];
  const timers = useGetTimers();
  const [countDownState, toggleCountDownState] = useCountDownState();

  const handleClick = async (timerItem) => {
    let res = "";
    if (countDownState === true) {
      console.log("waiting response");
      res = window.prompt("Are you sure?", "Yes");
      if (res) setActiveTimer(timerItem);
    } else setActiveTimer(timerItem);
  };

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
            <Button onClick={() => handleClick(index)}>{name}</Button>
          </ListItem>
        );
      })}
    </ListWrapper>
  );
}

export default TimerIndicator;
