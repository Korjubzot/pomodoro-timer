import React, { useEffect } from "react";
// TODO add an option to toggle based on sunrise/sunset
// NPM has a daynight package that might be useful here

function DarkModeToggle({ isDarkMode, setIsDarkMode }) {
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
      {isDarkMode ? "Dark Mode Off" : "Dark Mode On"}
    </button>
  );
}

export default DarkModeToggle;
