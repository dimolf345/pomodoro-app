import { AppContainer, MainWrapper } from "./App.styles";
import Header from "../components/Header/Header.component";
import TimerIndicator from "../components/TimerIndicator/TimerIndicator.component";

function App() {
  return (

    <AppContainer>
      {/* Header */}
      <Header title="pomodoro" />
      {/* Timer indicator */}
      <MainWrapper>
        {/* The clock */}
        {/* The settings icon along with modal */}
        <TimerIndicator />
      </MainWrapper>
    </AppContainer>
  );
}

export default App;
