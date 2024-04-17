import React from "react";
import { render, screen } from "@testing-library/react";
import DarkModeToggle from "./DarkModeToggle";

describe("DarkModeToggle", () => {
  it("should render", () => {
    render(<DarkModeToggle />);
  });

  it("should render with dark mode off", () => {
    render(<DarkModeToggle isDarkMode={false} />);
    screen.getByText("Dark Mode On");
  });

  it("should render with dark mode on", () => {
    render(<DarkModeToggle isDarkMode={true} />);
    screen.getByText("Dark Mode Off");
  });

  it("should toggle dark mode on", () => {
    let isDarkMode = false;
    const setIsDarkMode = (value) => {
      isDarkMode = value;
    };
    render(
      <DarkModeToggle isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />
    );
    const button = screen.getByText("Dark Mode On");
    button.click();
    expect(isDarkMode).toBe(true);
  });

  it("should toggle dark mode off", () => {
    let isDarkMode = true;
    const setIsDarkMode = (value) => {
      isDarkMode = value;
    };
    render(
      <DarkModeToggle isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />
    );
    const button = screen.getByText("Dark Mode Off");
    button.click();
    expect(isDarkMode).toBe(false);
  });

  xit("should toggle dark mode on and off", () => {
    // TODO bugfix this test
    let isDarkMode = false;
    const setIsDarkMode = (value) => {
      isDarkMode = value;
    };
    render(
      <DarkModeToggle isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />
    );
    const button = screen.getByText("Dark Mode On");
    button.click();
    expect(isDarkMode).toBe(true);
    expect(button.textContent).toBe("Dark Mode Off");
    button.click();
    expect(isDarkMode).toBe(true);
  });
});
