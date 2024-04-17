import React, { useState, useEffect } from "react";
import "./App.css";
import "@fortawesome/fontawesome-free/css/all.min.css";

// Components
import TimerDisplay from "./components/TimerDisplay/timerDisplay";
import StartStopButton from "./components/StartStopButton/startStopButton";
import SessionLengthControl from "./components/SessionLengthControl/sessionLengthControl";
import BreakLengthControl from "./components/BreakLengthControl/breakLengthControl";
import ResetButton from "./components/ResetButton/resetButton";
import DarkModeToggle from "./components/DarkModeToggle/DarkModeToggle";

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
      changeBgColor();
      setIsBreak(true);
    } else if (breakLength === 0 && isBreak) {
      clearInterval(interval);
      changeBgColor();
      setIsBreak(false);
      setSessionLength(SESSION_LENGTH);
      setBreakLength(BREAK_LENGTH);
    } else if (!isRunning) {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [isRunning, sessionLength, breakLength, isBreak]);

  function startStop() {
    setIsRunning(!isRunning);
    changeBgColor();
  }

  function adjustLength(type, operation) {
    const setter = type === "session" ? setSessionLength : setBreakLength;
    // eslint-disable-next-line no-unused-vars
    const prevLength = type === "session" ? sessionLength : breakLength;

    setter((prevLength) => {
      let newLength;
      if (operation === "increment") {
        if (prevLength < 15000) {
          newLength = prevLength + 60;
        } else {
          newLength = prevLength;
        }
      } else if (operation === "decrement") {
        newLength = Math.max(prevLength - 60, 0);
      }
      return newLength;
    });
  }

  function reset() {
    setBgColor("#BA4949");
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
      <h1 className="text-4xl sm:text-7xl mt-10 mb-5 text-black dark:text-white">
        Pomodoro Timer
      </h1>
      <TimerDisplay sessionLength={sessionLength} breakLength={breakLength} />
      <StartStopButton onClick={startStop} isRunning={isRunning} />
      <DarkModeToggle />
      <SessionLengthControl
        decrementSession={() => adjustLength("session", "decrement")}
        sessionLength={sessionLength}
        incrementSession={() => adjustLength("session", "increment")}
      />
      <BreakLengthControl
        decrementBreak={() => adjustLength("break", "decrement")}
        breakLength={breakLength}
        incrementBreak={() => adjustLength("break", "increment")}
      />
      <ResetButton reset={reset} />
      <br></br>
      <footer className="fixed inset-x-0 bottom-0 bg-gray-800 p-5 sm:p-6 text-center text-white rounded-b-xl">
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
          <a
            href="mailto: walkerbilly1997@gmail.com"
            className="hover:text-gray-300"
          >
            {" "}
            <i className="fa-solid fa-envelope"></i>
            <span className="sr-only">Email</span>
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
