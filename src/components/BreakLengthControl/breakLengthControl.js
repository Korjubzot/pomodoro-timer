import React from "react";

function BreakLengthControl(props) {
  return (
    <div>
      <button className="btn" onClick={props.decrementBreak}>
        -1 Minute (Break)
      </button>
      <button className="btn" onClick={props.incrementBreak}>
        +1 Minute (Break)
      </button>
    </div>
  );
}

export default BreakLengthControl;
