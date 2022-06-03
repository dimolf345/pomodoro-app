import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import "@testing-library/user-event";
import Countdown from "./Countdown.component";

describe("Countdown", () => {
  test("It should render the component", () => {
    render(
      <Countdown />
      ,
    );
  });
});
