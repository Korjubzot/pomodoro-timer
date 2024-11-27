import React from "react";
import useSound from "use-sound";

// Translation handler
import { useTranslation } from "react-i18next";
import "../../i18n";

import boop from "../../assets/sounds/boop.mp3";
import boopReverse from "../../assets/sounds/boopReverse.mp3";

function StartStopButton({ onClick, isRunning }) {
  const [playStart] = useSound(boop);
  const [playStop] = useSound(boopReverse);

  const { t } = useTranslation();

  function handleClick() {
    isRunning ? playStop() : playStart();
    onClick();
  }

  return (
    <button className="btn" onClick={handleClick}>
      {t(
        isRunning
          ? "sessionControls.stopSession"
          : "sessionControls.startSession"
      )}
    </button>
  );
}

export default StartStopButton;
