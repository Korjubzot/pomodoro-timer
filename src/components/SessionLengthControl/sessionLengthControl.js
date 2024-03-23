import React from "react";

function SessionLengthControl(props) {
  return (
    <div>
      <button className="btn" onClick={props.decrementSession}>
        -1 Minute (Session)
      </button>
      <button className="btn" onClick={props.incrementSession}>
        +1 Minute (Session)
      </button>
    </div>
  );
}

export default SessionLengthControl;
