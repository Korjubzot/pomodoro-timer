import React, { useState } from "react";
import "./App.css";

// Components
import TimerDisplay from "./components/TimerDisplay/timerDisplay";
import StartStopButton from "./components/StartStopButton/startStopButton";
import SessionLengthControl from "./components/SessionLengthControl/sessionLengthControl";
import BreakLengthControl from "./components/BreakLengthControl/breakLengthControl";
import ResetButton from "./components/ResetButton/resetButton";

function App() {
  const [time, setTime] = useState(2500);
  const [sessionLength, setSessionLength] = useState(25);
  const [breakLength, setBreakLength] = useState(5);

  function startStop() {
    console.log("toggleRunning");
  }

  function decrementSession() {
    console.log("decrementSession");
  }

  function incrementSession() {
    console.log("incrementSession");
  }

  function decrementBreak() {
    console.log("decrementBreak");
  }

  function incrementBreak() {
    console.log("incrementBreak");
  }

  function reset() {
    console.log("resetSession");
  }

  return (
    <div className="App">
      <h1>Pomodoro</h1>
      <TimerDisplay time={time} />
      <StartStopButton onClick={startStop} />
      <SessionLengthControl
        decrementSession={decrementSession}
        sessionLength={sessionLength}
        incrementSession={incrementSession}
      />
      <BreakLengthControl
        decrementBreak={decrementBreak}
        breakLength={breakLength}
        incrementBreak={incrementBreak}
      />
      <ResetButton reset={reset} />
    </div>
  );
}

export default App;
