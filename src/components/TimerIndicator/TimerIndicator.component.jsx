import PropTypes from "prop-types";

import { ListWrapper, Button, ListItem } from "./Timerindicator.styles";
import { useColor, useSetTimers } from "../../context/customContext";

function TimerIndicator({ handleClick, activeTimer }) {
  const currentColor = useColor()[0];
  const timers = useSetTimers()[0];

  return (
    <ListWrapper aria-label="active timer" fillColor={currentColor.value}>
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
