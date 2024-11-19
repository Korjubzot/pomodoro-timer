import React, { useEffect } from "react";
import { useTranslation } from "react-i18next";
// TODO add an option to toggle based on sunrise/sunset
// Possibly link to user location to get sunrise/sunset times?
// Either from IP address, or from user input

import "../../i18n";

function DarkModeToggle({ isDarkMode, setIsDarkMode }) {
  const { t } = useTranslation();

  useEffect(() => {
    if (isDarkMode) {
      document.body.classList.add("dark");
      document.body.style.backgroundColor = "#333";
    } else {
      document.body.classList.remove("dark");
      document.body.style.backgroundColor = "#fff";
    }
  }, [isDarkMode]);

  return (
    <button className="btn" onClick={() => setIsDarkMode(!isDarkMode)}>
      {t(isDarkMode ? "darkMode.off" : "darkMode.on")}
    </button>
  );
}

export default DarkModeToggle;
