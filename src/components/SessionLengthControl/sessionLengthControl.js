import React from "react";

function SessionLengthControl(props) {
  return (
    <div>
      <button onClick={props.decrementSession}>-</button>
      <span>{props.sessionLength}</span>
      <button onClick={props.incrementSession}>+</button>
    </div>
  );
}

export default SessionLengthControl;
