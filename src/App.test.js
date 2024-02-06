import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders learn react link", () => {
  render(<App />);
  const titleElement = screen.getByText(/Pomodoro Timer/i);
  expect(titleElement).toBeInTheDocument();
});

// TODO BUILD TESTS
