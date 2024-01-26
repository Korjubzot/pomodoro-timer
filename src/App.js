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
    }
    if (sessionLength === 0) {
      clearInterval(interval);
      console.log("Session ended");
    } else if (interval === null) {
      clearInterval(interval);
      console.log("Timer stopped");
    }
    return () => clearInterval(interval);
  }, [isRunning, sessionLength]);

  function startStop() {
    console.log("toggleRunning");
    setIsRunning(!isRunning);
  }

  function decrementSession() {
    setSessionLength((prevSessionLength) => Math.max(prevSessionLength - 1, 1));
  }

  function incrementSession() {
    setSessionLength((prevSessionLength) => {
      if (prevSessionLength < 60) {
        console.log("session incremented");
        return prevSessionLength + 1;
      } else {
        console.log("maximum session length reached");
        return prevSessionLength;
      }
    });
  }

  function decrementBreak() {
    setBreakLength((prevBreakLength) => Math.max(prevBreakLength - 1, 1));
    console.log("decrementBreak");
  }

  function incrementBreak() {
    setBreakLength((prevBreakLength) => {
      if (prevBreakLength < 60) {
        console.log("break incremented");
        return prevBreakLength + 1;
      } else {
        console.log("maximum break length reached");
        return prevBreakLength;
      }
    });
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
