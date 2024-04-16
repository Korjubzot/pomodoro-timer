import { render, fireEvent } from "@testing-library/react";
import ResetButton from "./resetButton";
import { useSound } from "use-sound";

jest.mock("use-sound");

describe("ResetButton", () => {
  let resetMock;
  let playSoundMock;

  beforeEach(() => {
    resetMock = jest.fn();
    playSoundMock = jest.fn();
    useSound.mockReturnValue([playSoundMock]);
  });

  it("renders without crashing", () => {
    render(<ResetButton reset={resetMock} />);
  });

  it("calls reset and plays sound when clicked", () => {
    const { getByText } = render(<ResetButton reset={resetMock} />);
    fireEvent.click(getByText("Reset"));
    expect(resetMock).toHaveBeenCalled();
    expect(playSoundMock).toHaveBeenCalled();
  });
});
