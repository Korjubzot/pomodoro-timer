import { render, fireEvent } from "@testing-library/react";
import SessionLengthControl from "./sessionLengthControl";

describe("SessionLengthControl", () => {
  let mockDecrementSession, mockIncrementSession;

  beforeEach(() => {
    mockDecrementSession = jest.fn();
    mockIncrementSession = jest.fn();
  });

  test("renders two buttons", () => {
    const { getAllByRole } = render(
      <SessionLengthControl
        decrementSession={mockDecrementSession}
        incrementSession={mockIncrementSession}
      />
    );
    const buttons = getAllByRole("button");
    expect(buttons.length).toBe(2);
  });

  test("calls decrementSession when -1 Minute (Session) button is clicked", () => {
    const { getByText } = render(
      <SessionLengthControl
        decrementSession={mockDecrementSession}
        incrementSession={mockIncrementSession}
      />
    );
    fireEvent.click(getByText("-1 Minute (Session)"));
    expect(mockDecrementSession).toHaveBeenCalled();
  });

  test("calls incrementSession when +1 Minute (Session) button is clicked", () => {
    const { getByText } = render(
      <SessionLengthControl
        decrementSession={mockDecrementSession}
        incrementSession={mockIncrementSession}
      />
    );
    fireEvent.click(getByText("+1 Minute (Session)"));
    expect(mockIncrementSession).toHaveBeenCalled();
  });
});
