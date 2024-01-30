import React from "react";
import useSound from "use-sound";

import boop from "../../assets/sounds/boop.mp3";

function StartStopButton({ onClick, isRunning }) {
  const [play] = useSound(boop);

  function handleClick() {
    play();
    onClick();
  }
  return (
    <button onClick={handleClick}> {isRunning ? "Stop" : "Start"} </button>
  );
}

export default StartStopButton;
