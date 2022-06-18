import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import "@testing-library/jest-dom";

import MatchMediaMock from "jest-matchmedia-mock";
import FormBody from "./FormBody.component";
import { SettingsContextProvider } from "../../../context/SettingsContext/SettingsContext";

let matchMedia;

describe("Formbody", () => {
  beforeEach(() => {
    matchMedia = new MatchMediaMock();
  });

  afterEach(() => {
    matchMedia.clear();
  });

  test("it should render timers settings input", () => {
    render(
      <SettingsContextProvider>
        <FormBody isSubmitted={false} setHasCollectedData={jest.fn()} />
      </SettingsContextProvider>,
    );
    const pomodoroTimer = screen.getByLabelText(/pomodoro/i);
    expect(pomodoroTimer).toBeInTheDocument();
    expect(pomodoroTimer).not.toHaveValue(0);
    expect(pomodoroTimer).toHaveValue(25);
  });
});
