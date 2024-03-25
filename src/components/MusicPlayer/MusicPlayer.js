import React from "react";
import { useState } from "react";

function MusicPlayer() {
  const [isPlaying, setIsPlaying] = useState(false);

  function trackForwardHandler() {
    console.log("Track forward");
  }

  function trackBackwardHandler() {
    console.log("Track backward");
  }

  function playPauseHandler() {
    console.log(isPlaying ? "Pause" : "Play");
    setIsPlaying(!isPlaying);
  }
  return (
    <div>
      <div className="flex flex-row justify-center">
        <button className="btn" onClick={trackBackwardHandler}>
          Backward
        </button>
        <button className="btn" onClick={playPauseHandler}>
          {isPlaying ? "Pause" : "Play"}
        </button>
        <button className="btn" onClick={trackForwardHandler}>
          Forward
        </button>
      </div>
    </div>
  );
}

export default MusicPlayer;
