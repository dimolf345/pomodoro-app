/* eslint-disable react/jsx-no-constructed-context-values */
/* eslint-disable react/jsx-closing-tag-location */
import { screen, render } from "@testing-library/react";
import "@testing-library/jest-dom";
import userEvent from "@testing-library/user-event";
import { TIMERS } from "../../context/constants";
import TimerIndicator from "./TimerIndicator.component";
import { SettingsContextProvider, SettingsContext } from "../../context/SettingsContext";

describe("TimerIndicator", () => {
  test("It should render a list of buttons", () => {
    render(
      <SettingsContextProvider>
        <TimerIndicator />
      </SettingsContextProvider>,
    );
    const buttonList = screen.getByRole("list");
    expect(buttonList).not.toBeEmptyDOMElement();
  });

  test("At first render, the first listItem should have an active class", () => {
    render(
      <SettingsContextProvider>
        <TimerIndicator />
      </SettingsContextProvider>,
    );
    const timerButtonsLi = screen.getAllByRole("listitem");
    expect(timerButtonsLi[0]).toHaveClass("active");
    expect(timerButtonsLi[1]).not.toHaveClass("active");
  });

  test("When a button is clicked, the setTimer function is called", () => {
    const mockSetTimer = jest.fn();
    render(<SettingsContext.Provider value={{
      state: {
        timers: TIMERS,
        currentTimer: TIMERS[0],
      },
      setTimer: mockSetTimer,
    }}
    >
      <TimerIndicator />
    </SettingsContext.Provider>);
    const timerButtons = screen.getAllByRole("button");
    userEvent.click(timerButtons[1]);
    expect(mockSetTimer).toBeCalledTimes(1);
    expect(mockSetTimer).toBeCalled();
  });
});
