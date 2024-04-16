import { render, screen } from "@testing-library/react";
import TimerDisplay from "./timerDisplay";

describe("TimerDisplay", () => {
  test("renders session length correctly", () => {
    render(<TimerDisplay sessionLength={90} breakLength={0} />);
    const sessionElement = screen.getByText(/Session Length 1:30/i);
    expect(sessionElement).toBeInTheDocument();
  });

  test("renders break length correctly", () => {
    render(<TimerDisplay sessionLength={0} breakLength={150} />);
    const breakElement = screen.getByText(/Break Length 2:30/i);
    expect(breakElement).toBeInTheDocument();
  });

  test("renders session and break length correctly", () => {
    render(<TimerDisplay sessionLength={90} breakLength={150} />);
    const sessionElement = screen.getByText(/Session Length 1:30/i);
    const breakElement = screen.getByText(/Break Length 2:30/i);
    expect(sessionElement).toBeInTheDocument();
    expect(breakElement).toBeInTheDocument();
  });

  test("renders session and break length with leading zero correctly", () => {
    render(<TimerDisplay sessionLength={65} breakLength={5} />);
    const sessionElement = screen.getByText(/Session Length 1:05/i);
    const breakElement = screen.getByText(/Break Length 0:05/i);
    expect(sessionElement).toBeInTheDocument();
    expect(breakElement).toBeInTheDocument();
  });
});
