import { render, screen, waitFor } from "@testing-library/react";
import "@testing-library/jest-dom";
import userEvent from "@testing-library/user-event";

import MatchMediaMock from "jest-matchmedia-mock";
import { act } from "react-dom/test-utils";
import Main from "./Main.component";
import { initialState, SettingsContext, SettingsContextProvider } from "../../context/SettingsContext/SettingsContext";

let matchMedia;

describe("Main", () => {
  beforeEach(() => {
    matchMedia = new MatchMediaMock();
  });

  afterEach(() => {
    matchMedia.clear();
  });

  test("It should have the font-family property of the selected font", () => {
    const font = initialState.currentFont.value;
    render(
      <SettingsContext.Provider value={{
        state: initialState,
      }}
      >
        <Main />
      </SettingsContext.Provider>,
    );
    const main = screen.getByRole("main");
    expect(main).toHaveStyle(`font-family: ${font}`);
  });

  test("When an element in the timerIndicator element is clicked, the element gets the class active", () => {
    render(
      <SettingsContextProvider>
        <Main />
      </SettingsContextProvider>,
    );
    const timerIndicatorElements = screen.getAllByRole("listitem");
    expect(timerIndicatorElements[0]).toHaveClass("active");
    expect(timerIndicatorElements[1]).not.toHaveClass("active");

    const shortBreakBtn = screen.getByRole("button", { name: "short break" });
    userEvent.click(shortBreakBtn);
    const newTimerIndicatorElements = screen.getAllByRole("listitem");
    expect(newTimerIndicatorElements[0]).not.toHaveClass("active");
    expect(newTimerIndicatorElements[1]).toHaveClass("active");
  });

  test("When the start button is clicked, the countdown starts", () => {
    jest.useFakeTimers();
    render(
      <SettingsContextProvider>
        <Main />
      </SettingsContextProvider>,
    );
    const timerText = screen.getByRole("heading", {
      name: /\d/,
    });
    const minutes = timerText.textContent.match(/\d{2}/g)[0];
    const startBtn = screen.getByRole("button", { name: /start/ });
    expect(screen.queryByText("stop")).not.toBeInTheDocument();
    userEvent.click(startBtn);
    act(() => jest.advanceTimersByTime(1000));
    const minutesAftStart = String(+minutes - 1);
    expect(screen.getByText(minutesAftStart, { exact: false })).toBeInTheDocument();
    expect(screen.getByText("59", { exact: false })).toBeInTheDocument();
    expect(screen.getByText("stop")).toBeInTheDocument();
  });
});
