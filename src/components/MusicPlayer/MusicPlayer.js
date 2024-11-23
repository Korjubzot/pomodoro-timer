import React, { useState, useEffect } from "react";
import useSound from "use-sound";
import { useTranslation } from "react-i18next";
// TODO migrate this component to HowlerJS for improved usability

import "../../i18n";

function MusicPlayer() {
  const { t } = useTranslation();
  const songs = [
    { src: require("../../assets/music/song1.mp3"), title: "Song 1" },
    { src: require("../../assets/music/song2.mp3"), title: "Song 2" },
    { src: require("../../assets/music/song3.mp3"), title: "Song 3" },
    { src: require("../../assets/music/song4.mp3"), title: "Song 4" },
    { src: require("../../assets/music/song5.mp3"), title: "Song 5" },
    { src: require("../../assets/music/song6.mp3"), title: "Song 6" },
    { src: require("../../assets/music/song7.mp3"), title: "Song 7" },
    { src: require("../../assets/music/song8.mp3"), title: "Song 8" },
    { src: require("../../assets/music/song9.mp3"), title: "Song 9" },
  ];
  // I'd like to think that a professional would never do this, but I know for a fact
  // that the tf2 dev team did.
  // look ma, just like the pros do!

  const [currentSongIndex, setCurrentSongIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [play, { stop }] = useSound(songs[currentSongIndex].src, { volume: 1 });

  useEffect(() => {
    if (isPlaying) {
      play();
    } else {
      stop();
    }
  }, [isPlaying, play, stop]);

  function trackForwardHandler() {
    stop();
    setCurrentSongIndex((currentSongIndex + 1) % songs.length);
  }

  function trackBackwardHandler() {
    stop();
    setCurrentSongIndex((currentSongIndex - 1 + songs.length) % songs.length);
  }

  function playPauseHandler() {
    setIsPlaying(!isPlaying);
  }
  return (
    <div>
      <div>
        <h1 className="text-center">{t("musicPlayer.componentName")}</h1>
        <h2 className="text-center">
          {t("musicPlayer.currentTrack")} {songs[currentSongIndex].title}
        </h2>
      </div>
      <div className="flex flex-row justify-center">
        <button className="btn" onClick={trackBackwardHandler}>
          {t("musicPlayer.skipBackward")}
        </button>
        <button className="btn" onClick={playPauseHandler}>
          {t(isPlaying ? "musicPlayer.pause" : "musicPlayer.play")}
        </button>
        <button className="btn" onClick={trackForwardHandler}>
          {t("musicPlayer.skipForward")}
        </button>
      </div>
    </div>
  );
}

export default MusicPlayer;
