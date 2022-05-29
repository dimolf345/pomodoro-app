import { screen, render } from "@testing-library/react";
import "@testing-library/jest-dom";
import TimerIndicator from "./TimerIndicator.component";
import { SettingsContextProvider } from "../../context/SettingsContext";

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
});
