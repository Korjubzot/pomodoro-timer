import React from "react";

import useSound from "use-sound";

import click from "../../assets/sounds/click.mp3";

function ResetButton(props) {
  const [clickOne] = useSound(click);

  function resetWithSound() {
    clickOne();
    props.reset();
  }
  return (
    <div>
      <button className="btn" onClick={resetWithSound}>
        Reset
      </button>
    </div>
  );
}

export default ResetButton;
