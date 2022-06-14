import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import userEvent from "@testing-library/user-event";
import TimerText from "./TimerText.component";

describe("TimerText", () => {
  test("It should render an heading displaying minutes and seconds", () => {
    const [stubMinutes, stubSeconds] = ["10", "00"];
    render(
      <TimerText minutes={stubMinutes} seconds={stubSeconds} />,
    );
    const minutesRegexp = new RegExp(stubMinutes, "gi");
    const secondsRegexp = new RegExp(stubSeconds, "gi");
    const TimerHeading = screen.getByRole("heading");
    expect(TimerHeading).toHaveTextContent(minutesRegexp);
    expect(TimerHeading).toHaveTextContent(secondsRegexp);
  });

  test("when Text is clicked, the handleClick function is called", () => {
    const stubHandleClick = jest.fn();
    render(
      <TimerText minutes="10" seconds="00" handleClick={stubHandleClick} />,
    );
    userEvent.click(screen.getByRole("heading"));
    expect(stubHandleClick).toBeCalledTimes(1);
  });
});
