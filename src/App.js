import React, { useState, useEffect } from "react";
import "./App.css";

// Components
import TimerDisplay from "./components/TimerDisplay/timerDisplay";
import StartStopButton from "./components/StartStopButton/startStopButton";
import SessionLengthControl from "./components/SessionLengthControl/sessionLengthControl";
import BreakLengthControl from "./components/BreakLengthControl/breakLengthControl";
import ResetButton from "./components/ResetButton/resetButton";

function App() {
  const [sessionLength, setSessionLength] = useState(25);
  const [breakLength, setBreakLength] = useState(5);
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    let interval = null;
    if (isRunning === true) {
      interval = setInterval(() => {
        console.log("interval");
        setSessionLength(sessionLength - 1);
      }, 1000);
    } else if (interval !== null) {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [isRunning, sessionLength]);

  function startStop() {
    console.log("toggleRunning");
    setIsRunning(!isRunning);
  }

  function decrementSession() {
    if (sessionLength > 1) {
      setSessionLength(sessionLength - 1);
      console.log("decrementSession");
    } else {
      console.log("minimum session length reached");
    }
  }

  function incrementSession() {
    if (sessionLength < 60) {
      setSessionLength(sessionLength + 1);
      console.log("incrementSession");
    } else {
      console.log("maximum session length reached");
    }
  }

  function decrementBreak() {
    if (breakLength > 1) {
      setBreakLength(breakLength - 1);
      console.log("decrementBreak");
    } else {
      console.log("minimum break length reached");
    }
  }

  function incrementBreak() {
    if (breakLength < 60) {
      setBreakLength(breakLength + 1);
      console.log("incrementBreak");
    } else {
      console.log("maximum break length reached");
    }
  }

  function reset() {
    console.log("resetSession");
    setIsRunning(false);
    setSessionLength(25);
    setBreakLength(5);
  }

  return (
    <div className="App">
      <h1>Pomodoro</h1>
      <TimerDisplay time={sessionLength} break={breakLength} />
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
