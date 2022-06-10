import React from "react";
import PropTypes from "prop-types";

import SrOnly from "../../SrOnly/SrOnly.component";
import {
  InputWrapper, InputInner, Input, InputLabel,
} from "./FontSettings.styles";

function FontSettings({
  options, setOption, currentIndex, onCheckedStyle, displayValue, propertyName,
}) {
  const handleChange = (index) => {
    setOption(index);
  };

  return (
    <InputWrapper>
      {options.map((option, index) => (
        <InputInner
          style={index === currentIndex ? onCheckedStyle || { [propertyName]: options[index].value } : {
            [propertyName]: options[index].value,
          }}
          key={option.name}
        >
          <InputLabel htmlFor={option.name}>
            {displayValue && (
              <span style={{
                [propertyName]: options[index].value,
              }}
              >
                {displayValue}
              </span>
            )}
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

FontSettings.propTypes = {};

export default FontSettings;
