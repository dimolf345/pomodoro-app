import {
  render, screen, fireEvent, waitFor,
} from "@testing-library/react";
import "@testing-library/jest-dom";
import userEvent from "@testing-library/user-event";

import TransparentButton from "./TransparentButton.component";

describe("TransparentButton", () => {
  test("it should render the provided text", () => {
    const stubText = "Test";
    render(
      <TransparentButton text={stubText} handleClick={jest.fn()} hoverColor="#fff" />,
    );
    expect(screen.getByRole("button")).toHaveTextContent(stubText);
  });

  test("it should call the handleClick function when clicked", () => {
    const stubHandleclick = jest.fn();
    render(
      <TransparentButton text="test" handleClick={stubHandleclick} hoverColor="#fff" />,
    );
    const button = screen.getByRole("button");
    userEvent.click(button);
    expect(stubHandleclick).toHaveBeenCalledTimes(1);
  });
});
