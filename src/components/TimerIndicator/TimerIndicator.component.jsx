import PropTypes from "prop-types";

import { useEffect, useState } from "react";
import { ListWrapper, Button, ListItem } from "./Timerindicator.styles";
import { useColor, useSetTimers } from "../../context/customContext";

function TimerIndicator({ handleClick, activeTimer }) {
  const [currentColor, setColor] = useColor();
  const [fillColor, setFillColor] = useState(currentColor.value);
  const timers = useSetTimers()[0];

  useEffect(() => {
    setFillColor(currentColor.value);
  }, [currentColor]);

  return (
    <ListWrapper aria-label="type of timer selected" fillColor={fillColor}>
      {timers.map((timer, index) => {
        const { name } = timer;
        const isActive = index === activeTimer;
        return (
          <ListItem className={isActive ? "active" : ""} key={name}>
            <Button onClick={() => handleClick(index)}>{name}</Button>
          </ListItem>
        );
      })}
    </ListWrapper>
  );
}

TimerIndicator.propTypes = {
  handleClick: PropTypes.func.isRequired,
  activeTimer: PropTypes.number.isRequired,
};

export default TimerIndicator;
