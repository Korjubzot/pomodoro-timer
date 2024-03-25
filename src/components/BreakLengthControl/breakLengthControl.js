import React from "react";
import useSound from "use-sound";

import click from "../../assets/sounds/click.mp3";
import click2 from "../../assets/sounds/click2.mp3";

function BreakLengthControl(props) {
  const [clickOne] = useSound(click);
  const [clickTwo] = useSound(click2);

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
        -1 Minute (Break)
      </button>
      <button className="btn" onClick={incrementBreakWithSound}>
        +1 Minute (Break)
      </button>
    </div>
  );
}

export default BreakLengthControl;
