import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import userEvent from "@testing-library/user-event";
import MatchMediaMock from "jest-matchmedia-mock";
import { SettingsContextProvider } from "../../context/SettingsContext/SettingsContext";
import FormSettings from "./FormSettings.component";

let matchMedia;

describe("Form Settings", () => {
  beforeEach(() => {
    matchMedia = new MatchMediaMock();
  });

  afterEach(() => {
    matchMedia.clear();
  });

  test("At first render, the form should not be visible to the user", () => {
    render(
      <SettingsContextProvider>
        <FormSettings isAnimated={false} />
      </SettingsContextProvider>,
    );
    expect(screen.getByRole("form")).not.toBeVisible();
  });

  test("when settings button is clicked, the form is shown at the center of the page", () => {
    render(
      <SettingsContextProvider>
        <FormSettings isAnimated={false} />
      </SettingsContextProvider>,
    );
    const settingsBtn = screen.getByRole("button", { name: /open settings/i });
    userEvent.click(settingsBtn);
    const formDialog = screen.getByRole("form");
    expect(formDialog).toBeVisible();
    expect(formDialog).toHaveStyle({
      top: "50%",
      left: "50%",
      position: "fixed",
    });
  });

  test("when the close icon is clicked, the form is no more visible", () => {
    render(
      <SettingsContextProvider>
        <FormSettings isAnimated={false} />
      </SettingsContextProvider>,
    );
    const openBtn = screen.getByRole("button", { name: /open settings/ });
    userEvent.click(openBtn);
    const closeBtn = screen.getByRole("button", { name: /close settings/i });
    userEvent.click(closeBtn);
    const form = screen.getByRole("form");
    expect(form).not.toBeVisible();
  });
});
