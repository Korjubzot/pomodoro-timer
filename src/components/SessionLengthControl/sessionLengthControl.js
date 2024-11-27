import React from "react";
import useSound from "use-sound";

// Translation handler
import { useTranslation } from "react-i18next";
import "../../i18n";

import click from "../../assets/sounds/click.mp3";
import click2 from "../../assets/sounds/click2.mp3";

function SessionLengthControl(props) {
  const [clickOne] = useSound(click);
  const [clickTwo] = useSound(click2);

  const { t } = useTranslation();

  function decrementSessionWithSound() {
    clickOne();
    props.decrementSession();
  }

  function incrementSessionWithSound() {
    clickTwo();
    props.incrementSession();
  }

  return (
    <div>
      <button className="btn" onClick={decrementSessionWithSound}>
        {t("sessionControls.decrementSession")}
      </button>
      <button className="btn" onClick={incrementSessionWithSound}>
        {t("sessionControls.incrementSession")}
      </button>
    </div>
  );
}

export default SessionLengthControl;
