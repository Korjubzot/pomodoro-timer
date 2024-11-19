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
import MusicPlayer from "./components/MusicPlayer/MusicPlayer";

// Constants
const SESSION_LENGTH = 25 * 60;
const BREAK_LENGTH = 5 * 60;

function App() {
  const [sessionLength, setSessionLength] = useState(SESSION_LENGTH);
  const [breakLength, setBreakLength] = useState(BREAK_LENGTH);
  const [isRunning, setIsRunning] = useState(false);
  const [isBreak, setIsBreak] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);

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
      setIsBreak(true);
    } else if (breakLength === 0 && isBreak) {
      clearInterval(interval);
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
    setIsRunning(false);
    setIsBreak(false);
    setSessionLength(SESSION_LENGTH);
    setBreakLength(BREAK_LENGTH);
  }

  return (
    <div
      className={`App ${
        isRunning
          ? "moonstone dark:klein-blue"
          : "bg-red-500 dark:chestnut"
          // : "jasper dark:chestnut"
          // TODO fix this
          // These are custom colours in Tailwind, but the red options aren't loading right
      } flex flex-col items-center `}
    >
      <h1 className="text-4xl sm:text-7xl mt-6 mb-2">Pomodoro Timer</h1>
      <TimerDisplay sessionLength={sessionLength} breakLength={breakLength} />
      <br></br>
      <StartStopButton onClick={startStop} isRunning={isRunning} />
      <DarkModeToggle isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />
      {/* TODO fix various issues with mobile sizing on buttons
      probably just a simple fix for adjusting sizes on mobile screens */}
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
      <MusicPlayer />
      <footer className="fixed inset-x-0 bottom-0 bg-gray-800 p-5 sm:p-4 text-center text-white rounded-b-xl">
        <div className="flex justify-center space-x-4 ">
          <a
            href="https://github.com/Korjubzot"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-github"></i>
            <span className="sr-only">GitHub</span>
          </a>
          <a
            href="https://www.linkedin.com/in/william-walker-ab0013278/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-linkedin"></i>
            <span className="sr-only">LinkedIn</span>
          </a>
          <a href="mailto: walkerbilly1997@gmail.com">
            <i className="fa-solid fa-envelope"></i>
            <span className="sr-only">Email</span>
          </a>
        </div>
        <p className="mt-4 text-xs">
          <a
            href="https://github.com/Korjubzot/pomodoro-timer"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-gray-300"
          >
            Find the code for this project here
          </a>
        </p>
        <p className="mt-4 text-xs text-white">
          © 2024 William Walker. All rights reserved.
        </p>
      </footer>
    </div>
  );
}

export default App;
