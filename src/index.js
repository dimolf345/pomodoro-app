/* eslint-disable react/jsx-filename-extension */
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App/App.component";
import { SettingsContextProvider } from "./context/SettingsContext";
import GlobalStyle from "./globalStyles";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <SettingsContextProvider>
      <GlobalStyle />
      <App />
    </SettingsContextProvider>
  </React.StrictMode>,
);
