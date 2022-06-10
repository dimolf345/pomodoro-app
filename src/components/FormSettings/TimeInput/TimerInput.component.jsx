import React from "react";
import PropTypes from "prop-types";

import { ReactComponent as ArrowUp } from "../../../assets/icon-arrow-up.svg";
import { ReactComponent as ArrowDown } from "../../../assets/icon-arrow-down.svg";
import SrOnly from "../../SrOnly/SrOnly.component";

import {
  InputWrapper,
  InputInner,
  InputLabel,
  Input,
  ButtonContainer,
} from "./TimerInput.styles";

function TimerInput({
  label, value, handleChange, min, max,
}) {
  return (
    <InputWrapper>
      <InputLabel htmlFor={label}>{label}</InputLabel>
      <InputInner>
        <Input name={label} type="number" value={value} readOnly />
        <ButtonContainer>
          {/* Button arrow up */}
          <button
            disabled={value === max}
            type="button"
            onClick={() => {
              handleChange(1);
            }}
          >
            <SrOnly text={`Add 1 minute to ${label}`} />
            <ArrowUp />
          </button>
          {/* Button arrow down */}
          <button
            disabled={value === min}
            type="button"
            onClick={() => handleChange(-1)}
          >
            <SrOnly text={`Substract 1 minute to ${label}`} />
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
  label: PropTypes.string.isRequired,
  value: PropTypes.number.isRequired,
  handleChange: PropTypes.func.isRequired,
  min: PropTypes.number,
  max: PropTypes.number,
};

export default TimerInput;
