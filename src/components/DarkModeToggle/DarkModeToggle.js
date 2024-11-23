import React, { useEffect } from "react";
import { useTranslation } from "react-i18next";
// TODO add an option to toggle based on sunrise/sunset
// NPM has a daynight package that might be useful here

import "../../i18n";

function DarkModeToggle({ isDarkMode, setIsDarkMode }) {
  const { t } = useTranslation();

  useEffect(() => {
    if (isDarkMode) {
      document.body.classList.add("dark");
      document.body.style.backgroundColor = "#363732";
    } else {
      document.body.classList.remove("dark");
      document.body.style.backgroundColor = "#CECFC9";
    }
  }, [isDarkMode]);

  return (
    <button className="btn" onClick={() => setIsDarkMode(!isDarkMode)}>
      {t(isDarkMode ? "darkMode.off" : "darkMode.on")}
    </button>
  );
}

export default DarkModeToggle;
