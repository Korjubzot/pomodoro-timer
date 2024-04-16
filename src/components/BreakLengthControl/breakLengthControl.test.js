import { render, fireEvent } from "@testing-library/react";
import BreakLengthControl from "./breakLengthControl";
import { useSound } from "use-sound";

jest.mock("use-sound");

describe("BreakLengthControl", () => {
  let mockDecrementBreak, mockIncrementBreak, playSoundMock;

  beforeEach(() => {
    mockDecrementBreak = jest.fn();
    mockIncrementBreak = jest.fn();
    playSoundMock = jest.fn();
    useSound.mockReturnValue([playSoundMock]);
  });

  test("renders two buttons", () => {
    const { getAllByRole } = render(
      <BreakLengthControl
        decrementBreak={mockDecrementBreak}
        incrementBreak={mockIncrementBreak}
      />
    );
    const buttons = getAllByRole("button");
    expect(buttons.length).toBe(2);
  });

  test("calls decrementBreak and plays sound when -1 Minute (Break) button is clicked", () => {
    const { getByText } = render(
      <BreakLengthControl
        decrementBreak={mockDecrementBreak}
        incrementBreak={mockIncrementBreak}
      />
    );
    fireEvent.click(getByText("-1 Minute (Break)"));
    expect(mockDecrementBreak).toHaveBeenCalled();
    expect(playSoundMock).toHaveBeenCalled();
  });

  test("calls incrementBreak and plays sound when +1 Minute (Break) button is clicked", () => {
    const { getByText } = render(
      <BreakLengthControl
        decrementBreak={mockDecrementBreak}
        incrementBreak={mockIncrementBreak}
      />
    );
    fireEvent.click(getByText("+1 Minute (Break)"));
    expect(mockIncrementBreak).toHaveBeenCalled();
    expect(playSoundMock).toHaveBeenCalled();
  });
});
