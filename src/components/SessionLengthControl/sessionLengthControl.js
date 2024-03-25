import React from "react";
import useSound from "use-sound";

import click from "../../assets/sounds/click.mp3";
import click2 from "../../assets/sounds/click2.mp3";

function SessionLengthControl(props) {
  const [clickOne] = useSound(click);
  const [clickTwo] = useSound(click2);

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
        -1 Minute (Session)
      </button>
      <button className="btn" onClick={incrementSessionWithSound}>
        +1 Minute (Session)
      </button>
    </div>
  );
}

export default SessionLengthControl;
