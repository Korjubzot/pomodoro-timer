import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import StartStopButton from "./startStopButton";
import useSound from "use-sound";

jest.mock("use-sound");

describe("StartStopButton", () => {
  let mockPlayStart, mockPlayStop;

  beforeEach(() => {
    mockPlayStart = jest.fn();
    mockPlayStop = jest.fn();
    useSound
      .mockReturnValueOnce([mockPlayStart])
      .mockReturnValueOnce([mockPlayStop]);
  });

  it("renders correctly when isRunning is false", () => {
    render(<StartStopButton isRunning={false} onClick={jest.fn()} />);
    expect(screen.getByText("Start")).toBeInTheDocument();
  });

  it("renders correctly when isRunning is true", () => {
    render(<StartStopButton isRunning={true} onClick={jest.fn()} />);
    expect(screen.getByText("Stop")).toBeInTheDocument();
  });

  it("plays the start sound when clicked and isRunning is false", () => {
    render(<StartStopButton isRunning={false} onClick={jest.fn()} />);
    fireEvent.click(screen.getByText("Start"));
    expect(mockPlayStart).toHaveBeenCalled();
  });

  it("plays the stop sound when clicked and isRunning is true", () => {
    render(<StartStopButton isRunning={true} onClick={jest.fn()} />);
    fireEvent.click(screen.getByText("Stop"));
    expect(mockPlayStop).toHaveBeenCalled();
  });
});
