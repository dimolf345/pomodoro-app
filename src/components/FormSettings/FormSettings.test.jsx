import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import userEvent from "@testing-library/user-event";
import FormSettings from "./FormSettings.component";

describe("Form Settings", () => {
  test("At first render, the form should not be visible to the user", () => {
    render(<FormSettings />);
    expect(screen.getByRole("form")).not.toBeVisible();
  });

  test("when settings button is clicked, the form is shown at the center of the page", () => {
    render(<FormSettings isAnimated={false} />);
    const settingsBtn = screen.getByRole("button", { name: /settings/i });
    userEvent.click(settingsBtn);
    const formDialog = screen.getByRole("form");
    expect(formDialog).toBeVisible();
    expect(formDialog).toHaveStyle({
      top: "50%",
      left: "50%",
      position: "fixed",
    });
  });
});
