import React from "react";
import useSound from "use-sound";

// Translation handler
import { useTranslation } from "react-i18next";
import "../../i18n";

import click from "../../assets/sounds/click.mp3";
import click2 from "../../assets/sounds/click2.mp3";

function BreakLengthControl(props) {
  // TODO rework the logic of BreakLengthControl and SessionLengthControl to be one component
  const [clickOne] = useSound(click);
  const [clickTwo] = useSound(click2);

  const { t } = useTranslation();

  function decrementBreakWithSound() {
    clickOne();
    props.decrementBreak();
  }

  function incrementBreakWithSound() {
    clickTwo();
    props.incrementBreak();
  }
  return (
    <div>
      <button className="btn" onClick={decrementBreakWithSound}>
        {t("sessionControls.decrementBreak")}
      </button>
      <button className="btn" onClick={incrementBreakWithSound}>
        {t("sessionControls.incrementBreak")}
      </button>
    </div>
  );
}

export default BreakLengthControl;
