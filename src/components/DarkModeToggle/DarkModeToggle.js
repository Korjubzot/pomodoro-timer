import React, { useEffect } from "react";
// TODO add an option to toggle based on sunrise/sunset
// Possibly link to user location to get sunrise/sunset times?
// Either from IP address, or from user input

function DarkModeToggle({ isDarkMode, setIsDarkMode }) {
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
      {isDarkMode ? "Dark Mode Off" : "Dark Mode On"}
    </button>
  );
}

export default DarkModeToggle;
