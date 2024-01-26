import React, { useState, useEffect } from "react";
import "./App.css";

// Components
import TimerDisplay from "./components/TimerDisplay/timerDisplay";
import StartStopButton from "./components/StartStopButton/startStopButton";
import SessionLengthControl from "./components/SessionLengthControl/sessionLengthControl";
import BreakLengthControl from "./components/BreakLengthControl/breakLengthControl";
import ResetButton from "./components/ResetButton/resetButton";

// Constants
const SESSION_LENGTH = 25 * 60;
const BREAK_LENGTH = 5 * 60;
const MINUTE = 60;

function App() {
  const [sessionLength, setSessionLength] = useState(SESSION_LENGTH);
  const [breakLength, setBreakLength] = useState(BREAK_LENGTH);
  const [isRunning, setIsRunning] = useState(false);
  const [isBreak, setIsBreak] = useState(false);

  useEffect(() => {
    let interval = null;
    if (isRunning) {
      interval = setInterval(() => {
        if (!isBreak) {
          setSessionLength((prevSessionLength) => prevSessionLength - 1);
        } else {
          setBreakLength((prevBreakLength) => prevBreakLength - 1);
        }
      }, 1000);
    }
    if (sessionLength === 0 && !isBreak) {
      clearInterval(interval);
      console.log("Session ended");
      setIsBreak(true);
    } else if (breakLength === 0 && isBreak) {
      clearInterval(interval);
      console.log("Break ended");
      setIsBreak(false);
      setSessionLength(SESSION_LENGTH);
      setBreakLength(BREAK_LENGTH);
    } else if (!isRunning) {
      clearInterval(interval);
      console.log("Timer stopped");
    }
    return () => clearInterval(interval);
  }, [isRunning, sessionLength, breakLength, isBreak]);

  function startStop() {
    console.log("toggleRunning");
    setIsRunning(!isRunning);
  }

  function decrementSession() {
    setSessionLength((prevSessionLength) =>
      Math.max(prevSessionLength - 60, 0)
    );
    console.log("decrement session");
  }

  function incrementSession() {
    setSessionLength((prevSessionLength) => {
      if (prevSessionLength < 15000) {
        console.log("session incremented");
        return prevSessionLength + 60;
      } else {
        console.log("maximum session length reached");
        return prevSessionLength;
      }
    });
  }

  function decrementBreak() {
    setBreakLength((prevBreakLength) => Math.max(prevBreakLength - 60, 0));
    console.log("decrementBreak");
  }

  function incrementBreak() {
    setBreakLength((prevBreakLength) => {
      if (prevBreakLength < 15000) {
        console.log("break incremented");
        return prevBreakLength + 60;
      } else {
        console.log("maximum break length reached");
        return prevBreakLength;
      }
    });
  }

  function reset() {
    console.log("resetSession");
    setIsRunning(false);
    setIsBreak(false);
    setSessionLength(SESSION_LENGTH);
    setBreakLength(BREAK_LENGTH);
  }

  return (
    <div className="App">
      <h1>Pomodoro Timer</h1>
      <TimerDisplay sessionLength={sessionLength} breakLength={breakLength} />
      <StartStopButton onClick={startStop} isRunning={isRunning} />
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
