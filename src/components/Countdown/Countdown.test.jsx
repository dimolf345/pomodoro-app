import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import "@testing-library/user-event";
import { TimerContextProvider } from "../../context/TimerContext/TimerContext";
import Countdown from "./Countdown.component";

describe("Countdown", () => {
  test("It should render the component", () => {
    render(
      <TimerContextProvider>
        <Countdown />
      </TimerContextProvider>,
    );
  });
});
