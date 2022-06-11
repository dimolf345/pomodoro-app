import React from "react";
import PropTypes from "prop-types";

import SrOnly from "../../SrOnly/SrOnly.component";
import {
  InputWrapper, InputInner, Input, InputLabel,
} from "./RadioGroup.styles";

function RadioGroup({
  options, setOption, currentIndex, onCheckedStyle, displayValue, propertyName, onCheckedText,
}) {
  const handleChange = (index) => {
    setOption(index);
  };

  const handleStyle = (index) => {
    if (onCheckedStyle && index === currentIndex) {
      return onCheckedStyle;
    }
    if (!onCheckedStyle) {
      return {
        [propertyName]: options[index].value,
      };
    }
    return {};
  };

  const handleDisplayText = (isChecked) => {
    if (isChecked && onCheckedText) return onCheckedText;
    if (displayValue) return displayValue;
    return "";
  };

  return (
    <InputWrapper>
      {options.map((option, index) => (
        <InputInner
          style={handleStyle(index)}
          key={option.name}
        >
          <InputLabel htmlFor={option.name}>
            <span>{handleDisplayText(index === currentIndex)}</span>
            <SrOnly text={`set ${option.name} as application ${propertyName}`} />
            <Input
              onChange={() => handleChange(index)}
              checked={index === currentIndex}
              type="radio"
              id={option.name}
              name={option.name}
              value={option.value}
            />
          </InputLabel>
        </InputInner>
      ))}

    </InputWrapper>
  );
}

RadioGroup.defaultProps = {

  displayValue: "",
  onCheckedText: "",

};

RadioGroup.propTypes = {
  options: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string,
    value: PropTypes.string,
  })).isRequired,
  setOption: PropTypes.func.isRequired,
  currentIndex: PropTypes.number.isRequired,
  propertyName: PropTypes.string.isRequired,
  onCheckedStyle: PropTypes.objectOf(PropTypes.string).isRequired,
  displayValue: PropTypes.string,
  onCheckedText: PropTypes.string,

};

export default RadioGroup;
