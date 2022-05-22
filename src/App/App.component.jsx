import { useContext } from "react";
import GlobalStyle from "../globalStyles";
import { SettingsContext } from "../context/SettingsContext";

function App() {
  return (
    <>
      <GlobalStyle />
      <Test />
    </>
  );
}

function Test() {
  const { state } = useContext(SettingsContext);
  return <h1 style={{ fontFamily: state.currentFont }}>test</h1>;
}

export default App;
