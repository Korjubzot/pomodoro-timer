import React, { useState, useEffect } from "react";
import useSound from "use-sound";

import song1 from "../../assets/music/song1.mp3";
import song2 from "../../assets/music/song2.mp3";
import song3 from "../../assets/music/song3.mp3";
import song4 from "../../assets/music/song4.mp3";
import song5 from "../../assets/music/song5.mp3";
import song6 from "../../assets/music/song6.mp3";
import song7 from "../../assets/music/song7.mp3";
import song8 from "../../assets/music/song8.mp3";
import song9 from "../../assets/music/song9.mp3";
// This is almost certainly the worst possible way to do this
// I'm doing it anyways!
// TODO make this less terrible

function MusicPlayer() {
  const songs = [song1, song2, song3, song4, song5, song6, song7, song8, song9];
  const [currentSongIndex, setCurrentSongIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [play, { stop }] = useSound(songs[currentSongIndex], { volume: 1 });

  useEffect(() => {
    if (isPlaying) {
      play();
    } else {
      stop();
    }
  }, [isPlaying, play, stop]);

  // TODO Fix a bug in these handlers that's causing them to stack songs
  // on top of one another rather than skip forward properly
  // Probably just need to add a stop() call to the handlers
  // before changing the track

  function trackForwardHandler() {
    console.log("Track forward");
    stop();
    setCurrentSongIndex((currentSongIndex + 1) % songs.length);
  }

  function trackBackwardHandler() {
    console.log("Track backward");
    stop();
    setCurrentSongIndex((currentSongIndex - 1) % songs.length);
  }

  function playPauseHandler() {
    console.log(isPlaying ? "Pause" : "Play");
    setIsPlaying(!isPlaying);
  }
  return (
    <div>
      <div>
        <h1 className="text-center">Music Player</h1>
        <h2 className="text-center">Now Playing: {songs[currentSongIndex]}</h2>
      </div>
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
