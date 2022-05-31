import { useState } from "react";
import { AppContainer, MainWrapper } from "./App.styles";
import Header from "../components/Header/Header.component";
import TimerIndicator from "../components/TimerIndicator/TimerIndicator.component";

function App() {
  const [isTimerActive, setIsTimerActive] = useState(false);
  return (

    <AppContainer>
      {/* Header */}
      <Header title="pomodoro" />
      {/* Timer indicator */}
      <MainWrapper>
        {/* The clock */}
        {/* The settings icon along with modal */}
        <TimerIndicator isTimerActive={isTimerActive} setIsTimerActive={setIsTimerActive} />
      </MainWrapper>
    </AppContainer>
  );
}

export default App;
