import React, { useState, useEffect } from "react";
import "./App.css";
import "@fortawesome/fontawesome-free/css/all.min.css";

// Components
import TimerDisplay from "./components/TimerDisplay/timerDisplay";
import StartStopButton from "./components/StartStopButton/startStopButton";
import SessionLengthControl from "./components/SessionLengthControl/sessionLengthControl";
import BreakLengthControl from "./components/BreakLengthControl/breakLengthControl";
import ResetButton from "./components/ResetButton/resetButton";

// Constants
const SESSION_LENGTH = 25 * 60;
const BREAK_LENGTH = 5 * 60;

function App() {
  const [sessionLength, setSessionLength] = useState(SESSION_LENGTH);
  const [breakLength, setBreakLength] = useState(BREAK_LENGTH);
  const [isRunning, setIsRunning] = useState(false);
  const [isBreak, setIsBreak] = useState(false);
  const [bgColor, setBgColor] = useState("#BA4949");

  // TODO merge this into the seperate timer component

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
      changeBgColor();
      setIsBreak(true);
    } else if (breakLength === 0 && isBreak) {
      clearInterval(interval);
      console.log("Break ended");
      changeBgColor();
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
    changeBgColor();
  }

  // TODO - refactor increment/decrement functions into one function
  // TODO - add a clicking sound when buttons are clicked

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
    setBgColor("#BA4949");
    console.log("resetSession");
    setIsRunning(false);
    setIsBreak(false);
    setSessionLength(SESSION_LENGTH);
    setBreakLength(BREAK_LENGTH);
  }

  function changeBgColor() {
    setBgColor(
      (prevColor) => (prevColor === "#BA4949" ? "#38858A" : "#BA4949")
      // TODO implement a function that will set the background of the HTML to a lighter or darker shade of the current color
      // This will give an appearance of depth and make the app more visually appealing
    );
  }

  return (
    <div className="App" style={{ backgroundColor: bgColor }}>
      <h1 className="text-7xl mt-10 mb-5">Pomodoro Timer</h1>
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
      {/* <button onClick={changeBgColor}>Change background color</button> */}
      <footer className="fixed inset-x-0 bottom-0 bg-gray-800 p-6 text-center text-white rounded-b-xl">
        <div className="flex justify-center space-x-4">
          <a
            href="https://github.com/Korjubzot"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-300"
          >
            <i className="fab fa-github"></i>
            <span className="sr-only">GitHub</span>
          </a>
          <a
            href="https://www.linkedin.com/in/billy-walker-ab0013278/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-300"
          >
            <i className="fab fa-linkedin"></i>
            <span className="sr-only">LinkedIn</span>
          </a>
        </div>
        <p className="mt-4 text-xs ">
          <a
            href="https://github.com/Korjubzot/pomodoro-timer"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-gray-300"
          >
            Find the code for this project here
          </a>
        </p>
        <p className="mt-4 text-xs">
          © 2024 William Walker. All rights reserved.
        </p>
      </footer>
    </div>
  );
}

export default App;
