import { useState } from "react";
import AppContainer from "./App.styles";
import Header from "../components/Header/Header.component";
import Main from "../components/Main/Main.component";

function App() {
  return (
    <AppContainer>
      {/* Header */}
      <Header title="pomodoro" />
      {/* Main component with Timer indicator and Countdown */}
      <Main />
    </AppContainer>
  );
}

export default App;
