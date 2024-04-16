import React from "react";
import { render, fireEvent, screen, waitFor } from "@testing-library/react";
import App from "./App";

describe("Pomodoro Timer App", () => {
  test("renders without crashing", () => {
    render(<App />);
    expect(screen.getByText(/Pomodoro Timer/i)).toBeInTheDocument();
    expect(screen.getByRole("button", { name: /start/i })).toBeInTheDocument();
  });

  test("initial session and break lengths are set correctly", () => {
    render(<App />);
    expect(screen.getByText(/Session Length/i)).toHaveTextContent("25");
    expect(screen.getByText(/Break Length/i)).toHaveTextContent("5");
  });

  jest.useFakeTimers();

  test("timer starts and stops correctly", async () => {
    render(<App />);
    const startStopButton = screen.getByRole("button", { name: /start/i });

    fireEvent.click(startStopButton);
    expect(screen.getByText(/session length/i)).toHaveTextContent("25:00");

    jest.advanceTimersByTime(1500);

    await waitFor(() =>
      expect(screen.getByText(/session length/i)).toHaveTextContent("24:59")
    );

    fireEvent.click(startStopButton);
    expect(screen.getByText(/session length/i)).toHaveTextContent("24:59");
  });

  test("session length increments and decrements correctly", () => {
    render(<App />);

    expect(screen.getByText(/Session Length/i)).toHaveTextContent("25");

    const incrementButton = screen.getByRole("button", {
      name: /\+1 Minute \(Session\)/i,
    });
    const decrementButton = screen.getByRole("button", {
      name: /-1 Minute \(Session\)/i,
    });

    fireEvent.click(incrementButton);
    expect(screen.getByText(/Session Length/i)).toHaveTextContent("26");

    fireEvent.click(decrementButton);
    expect(screen.getByText(/Session Length/i)).toHaveTextContent("25");
  });
});
