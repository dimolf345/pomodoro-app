import React from "react";
import PropTypes from "prop-types";

import { ReactComponent as ArrowUp } from "../../../assets/icon-arrow-up.svg";
import { ReactComponent as ArrowDown } from "../../../assets/icon-arrow-down.svg";

import {
  InputWrapper,
  InputInner,
  InputLabel,
  Input,
  ButtonContainer,
} from "./TimerInput.styles";

function TimerInput({ label, value, handleChange, min, max }) {
  return (
    <InputWrapper>
      <InputLabel htmlFor={label}>{label}</InputLabel>
      <InputInner>
        <Input name={label} type="number" value={value} />
        <ButtonContainer>
          <button
            disabled={value === max}
            type="button"
            onClick={() => {
              handleChange(1);
            }}
          >
            <span className="sr-only">Add 1 minute to {label}</span>
            <ArrowUp />
          </button>
          <button
            disabled={value === min}
            type="button"
            onClick={() => handleChange(-1)}
          >
            <span className="sr-only">Subtract 1 minute to {label}</span>
            <ArrowDown />
          </button>
        </ButtonContainer>
      </InputInner>
    </InputWrapper>
  );
}

TimerInput.defaultProps = {
  min: 1,
  max: 99,
};

TimerInput.propTypes = {
  timer: PropTypes.shape({
    name: PropTypes.string,
    duration: PropTypes.number,
  }).isRequired,
  handleChange: PropTypes.func.isRequired,
  min: PropTypes.number,
  max: PropTypes.number,
};

export default TimerInput;
