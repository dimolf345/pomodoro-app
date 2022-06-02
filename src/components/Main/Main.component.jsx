import { useState } from "react";
import { TimerContextProvider } from "../../context/TimerContext/TimerContext";
import TimerIndicator from "../TimerIndicator/TimerIndicator.component";
import MainContainer from "./Main.styles";

export default function Main() {
  return (
    <TimerContextProvider>
      <MainContainer>
        <TimerIndicator />
      </MainContainer>
    </TimerContextProvider>
  );
}
