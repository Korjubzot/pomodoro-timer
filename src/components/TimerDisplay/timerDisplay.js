import React from "react";

const MINUTE = 60;

function TimerDisplay({ sessionLength, breakLength }) {
  return (
    <div className="timer">
      <h1>
        Session {Math.floor(sessionLength / MINUTE)}:
        {sessionLength % MINUTE < 10
          ? "0" + (sessionLength % MINUTE)
          : sessionLength % MINUTE}
      </h1>
      <h1>
        Break {Math.floor(breakLength / MINUTE)}:
        {breakLength % MINUTE < 10
          ? "0" + (breakLength % MINUTE)
          : breakLength % MINUTE}
      </h1>
    </div>
  );
}

export default TimerDisplay;
