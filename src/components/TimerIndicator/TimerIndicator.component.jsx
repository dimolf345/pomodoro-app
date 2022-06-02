import React from "react";

import { ListWrapper, Button, ListItem } from "./Timerindicator.styles";
import {
  useColor, useGetTimers, useTimer, useCountDownState,
} from "../../context/customContext";

function TimerIndicator() {
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
            <Button onClick={() => handleClick(index)}>{name}</Button>
          </ListItem>
        );
      })}
    </ListWrapper>
  );
}

export default TimerIndicator;
