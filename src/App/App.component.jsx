import GlobalStyle from "../globalStyles";
import { SettingsContextProvider } from "../context/SettingsContext";
import { useFont, useTimer } from "../context/customContext";

function App() {
  return (
    <SettingsContextProvider>
      <GlobalStyle />
      <Test />
    </SettingsContextProvider>
  );
}

function Test() {
  const [font, setFont] = useFont();
  const [timer, setTimer] = useTimer("pomodoro");
  return (
    <>
      <h1 style={{ fontFamily: font }}>test</h1>
      <button onClick={() => setFont(1)}>Test</button>
      <p>
        Pomodoro timer is
        {" "}
        {timer}
      </p>
      <button onClick={() => setTimer(10)}>Set pomodoro to 10</button>
    </>
  );
}

export default App;
