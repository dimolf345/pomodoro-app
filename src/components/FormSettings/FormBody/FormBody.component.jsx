import { useState, useEffect } from "react";
import Proptypes from "prop-types";

import FormBodyWrapper from "./FormBody.styles";
import FormSection from "../FormSection/FormSection.component";
import TimersSettings from "../TimersSettings/TimersSettings.component";
import useMediaQuery from "../../../hooks/useMediaquery";
import {
  useColor, useFont, useGetTimers, useSetTimers,
} from "../../../context/customContext";

export default function FormBody({ isSubmitted, setHasCollectedData }) {
  const [timers, setTimers] = useSetTimers();
  const [localTimers, setLocalTimers] = useState(timers);
  const [appliedColor, setAppliedColor] = useColor();
  const [tempColor, setTempColor] = useState(appliedColor);
  const [appliedFont, setAppliedFont] = useFont();
  const [tempFont, setTempFont] = useState(appliedFont);

  const isDesktop = useMediaQuery("(min-width: 767px)");
  return (
    <FormBodyWrapper>
      <FormSection title="Time (minutes)" isDesktop={isDesktop}>
        <TimersSettings timers={localTimers} setTimers={setLocalTimers} />
      </FormSection>
    </FormBodyWrapper>
  );
}

FormBody.propTypes = {
  isSubmitted: Proptypes.bool.isRequired,
  setHasCollectedData: Proptypes.func.isRequired,
};
