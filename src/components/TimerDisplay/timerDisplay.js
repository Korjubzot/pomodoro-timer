import React from "react";

import { useTranslation } from "react-i18next";
import "../../i18n";

const MINUTE = 60;

function TimerDisplay({ sessionLength, breakLength }) {
  const { t } = useTranslation();

  return (
    <div className="text-2xl text-black dark:text-white">
      <h1>
        {t("timer.sessionLength")} {Math.floor(sessionLength / MINUTE)}:
        {sessionLength % MINUTE < 10
          ? "0" + (sessionLength % MINUTE)
          : sessionLength % MINUTE}
      </h1>
      <h1>
        {t("timer.breakLength")} {Math.floor(breakLength / MINUTE)}:
        {breakLength % MINUTE < 10
          ? "0" + (breakLength % MINUTE)
          : breakLength % MINUTE}
      </h1>
    </div>
  );
}

export default TimerDisplay;
