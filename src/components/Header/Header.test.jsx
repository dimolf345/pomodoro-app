import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Header from "./Header.component";

describe("Header", () => {
  test("It should render an heading", () => {
    render(<Header title="" />);
    expect(screen.getByRole("heading")).toBeInTheDocument();
  });

  test("It should display the correct title", () => {
    const stubTitle = "Testing Header";
    render(<Header title={stubTitle} />);
    const title = screen.getByRole("heading");
    expect(title.textContent).toBe(stubTitle);
  });
});
