import { useState, useContext, useEffect } from "react";
import Proptypes from "prop-types";

import FormBodyWrapper from "./FormBody.styles";
import FormSection from "../FormSection/FormSection.component";
import TimersSettings from "../TimersSettings/TimersSettings.component";
import RadioGroup from "../RadioGroup/RadioGroup";

import useMediaQuery from "../../../hooks/useMediaquery";
import { SettingsContext } from "../../../context/SettingsContext/SettingsContext";
import { useSetTimers } from "../../../context/customContext";

export default function FormBody({ isSubmitted, setHasCollectedData }) {
  const { state, setColor, setFont } = useContext(SettingsContext);
  const [timers, setTimers] = useSetTimers();
  const [localTimers, setLocalTimers] = useState(timers);
  const [tempColor, setTempColor] = useState(0);
  const [tempFont, setTempFont] = useState(0);

  const saveSettings = () => {
    setTimers(localTimers);
    setColor(tempColor);
    setFont(tempFont);
  };

  useEffect(() => {
    if (isSubmitted) {
      saveSettings();
      setHasCollectedData(true);
    }
  }, [isSubmitted, setHasCollectedData]);

  const isDesktop = useMediaQuery("(min-width: 767px)");
  return (
    <FormBodyWrapper>
      <FormSection title="time (minutes)" isDesktop={isDesktop}>
        <TimersSettings timers={localTimers} setTimers={setLocalTimers} />
      </FormSection>
      <FormSection title="font" isDesktop={isDesktop}>
        <RadioGroup
          displayValue="Aa"
          propertyName="fontFamily"
          options={state.availableFonts}
          setOption={setTempFont}
          currentIndex={tempFont}
          onCheckedStyle={{
            color: "#fff",
            backgroundColor: "var(--color-darkblue)",
          }}
        />
      </FormSection>
      <FormSection title="color" isDesktop={isDesktop}>
        <RadioGroup
          options={state.availableColors}
          setOption={setTempColor}
          propertyName="backgroundColor"
          currentIndex={tempColor}
          onCheckedText="✓"
        />
      </FormSection>
    </FormBodyWrapper>
  );
}

FormBody.propTypes = {
  isSubmitted: Proptypes.bool.isRequired,
  setHasCollectedData: Proptypes.func.isRequired,
};
