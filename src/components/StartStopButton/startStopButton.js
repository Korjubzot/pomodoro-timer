import React from "react";

function StartStopButton({ onClick, isRunning }) {
  return <button onClick={onClick}> {isRunning ? "Stop" : "Start"} </button>;
}

export default StartStopButton;
