import React from "react";

const MINUTE = 60;

function TimerDisplay({ sessionLength, breakLength }) {
  return (
    <div>
      <div>
        Session Length: {Math.floor(sessionLength / MINUTE)}:
        {sessionLength % MINUTE < 10
          ? "0" + (sessionLength % MINUTE)
          : sessionLength % MINUTE}
      </div>
      <div>
        Break Length: {Math.floor(breakLength / MINUTE)}:
        {breakLength % MINUTE < 10
          ? "0" + (breakLength % MINUTE)
          : breakLength % MINUTE}
      </div>
    </div>
  );
}

export default TimerDisplay;
