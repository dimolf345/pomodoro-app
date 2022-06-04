import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import "@testing-library/user-event";
import matchMediaMock from "jest-matchmedia-mock";
import Countdown from "./Countdown.component";
import { SettingsContextProvider } from "../../context/SettingsContext/SettingsContext";

let matchMedia;

describe("Countdown", () => {
  beforeEach(() => {
    matchMedia = new matchMediaMock();
  });

  afterEach(() => {
    matchMedia.clear();
  });

  test("At first render, it should display the timerduration in minutes", () => {
    const stubSetCountdown = jest.fn();
    const stubSetIsActive = jest.fn();
    const stubTimerDuration = 10;
    render(
      <SettingsContextProvider>
        <Countdown
          timerDuration={stubTimerDuration}
          setCountdown={stubSetCountdown}
          isActive={false}
          setIsActive={stubSetIsActive}
        />
      </SettingsContextProvider>,
    );
    expect(screen.getByRole("heading")).toHaveTextContent(`${stubTimerDuration}minutes`);
  });
});
