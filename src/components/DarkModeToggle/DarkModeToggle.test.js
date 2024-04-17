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
});
