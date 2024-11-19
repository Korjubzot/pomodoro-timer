import React, { useState } from "react";
import i18next from "i18next";

const LanguageSwitcher = () => {
  // Track current language in state
  const [currentLanguage, setCurrentLanguage] = useState(
    i18next.language || "en"
  );

  const toggleLanguage = () => {
    const newLanguage = currentLanguage === "en" ? "pl" : "en";
    i18next.changeLanguage(newLanguage);
    setCurrentLanguage(newLanguage);
  };

  return (
    <div>
      <button className="btn" onClick={toggleLanguage}>
        {currentLanguage === "en" ? "Polska" : "English"}
      </button>
    </div>
  );
};

export default LanguageSwitcher;
