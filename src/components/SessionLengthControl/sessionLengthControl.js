import React from "react";

function SessionLengthControl(props) {
  return (
    <div>
      <button onClick={props.decrementSession}>-1 Minute (Session)</button>
      <button onClick={props.incrementSession}>+1 Minute (Session)</button>
    </div>
  );
}

export default SessionLengthControl;
