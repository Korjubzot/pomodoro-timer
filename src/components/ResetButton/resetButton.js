import React from "react";
import useSound from "use-sound";

// Translation handlers
import { useTranslation } from "react-i18next";
import "../../i18n";

import click from "../../assets/sounds/click.mp3";

function ResetButton(props) {
  const { t } = useTranslation();
  const [clickOne] = useSound(click);

  function resetWithSound() {
    clickOne();
    props.reset();
  }
  return (
    <div>
      <button className="btn" onClick={resetWithSound}>
        {t("sessionControls.resetSession")}
      </button>
    </div>
  );
}

export default ResetButton;
