import React from "react";
import i18next from "i18next";

const LanguageSwitcher = () => {
  const changeLanguage = (language) => {
    i18next.changeLanguage(language);
  };

  return (
    <div>
      <button onClick={() => changeLanguage("en")}>English</button>
      <button onClick={() => changeLanguage("pl")}>Polish</button>
    </div>
  );
};

export default LanguageSwitcher;
