import React from "react";
import useSound from "use-sound";

import boop from "../../assets/sounds/boop.mp3";
import boopReverse from "../../assets/sounds/boopReverse.mp3";

function StartStopButton({ onClick, isRunning }) {
  const [playStart] = useSound(boop);
  const [playStop] = useSound(boopReverse);

  function handleClick() {
    isRunning ? playStop() : playStart();
    onClick();
  }

  return (
    <button className="btn" onClick={handleClick}>
      {" "}
      {isRunning ? "Stop" : "Start"}{" "}
    </button>
  );
}

export default StartStopButton;
