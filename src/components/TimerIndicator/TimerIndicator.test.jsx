import { screen, render } from "@testing-library/react";
import "@testing-library/jest-dom";
import userEvent from "@testing-library/user-event";
import TimerIndicator from "./TimerIndicator.component";
import { SettingsContextProvider } from "../../context/SettingsContext/SettingsContext";

describe("TimerIndicator", () => {
  test("It should render a list of buttons", () => {
    render(
      <SettingsContextProvider>
        <TimerIndicator activeTimer={0} handleClick={jest.fn()} />
      </SettingsContextProvider>,
    );
    const buttonList = screen.getByRole("list");
    expect(buttonList).not.toBeEmptyDOMElement();
  });

  test("The item with index active Timer should have an active class", () => {
    const mockActiveTimer = 0;
    render(
      <SettingsContextProvider>
        <TimerIndicator activeTimer={mockActiveTimer} handleClick={jest.fn()} />
      </SettingsContextProvider>,
    );
    const timerButtonsLi = screen.getAllByRole("listitem");
    expect(timerButtonsLi[mockActiveTimer]).toHaveClass("active");
    expect(timerButtonsLi[1]).not.toHaveClass("active");
  });

  test("When a button is clicked, the setTimer function is called", () => {
    const mockHandleClick = jest.fn();
    render(
      <SettingsContextProvider>
        <TimerIndicator handleClick={mockHandleClick} activeTimer={0} />
      </SettingsContextProvider>,
    );
    const timerButtons = screen.getAllByRole("button");
    userEvent.click(timerButtons[1]);
    expect(mockHandleClick).toBeCalledTimes(1);
    expect(mockHandleClick).toBeCalled();
  });
});
