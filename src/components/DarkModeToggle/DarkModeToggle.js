import React, { useState, useEffect } from "react";

function DarkModeToggle() {
  const [isDarkMode, setIsDarkMode] = useState(false);

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
