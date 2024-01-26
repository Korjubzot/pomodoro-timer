import React from "react";

function BreakLengthControl(props) {
  return (
    <div>
      <button onClick={props.decrementBreak}>-1 Minute (Break)</button>
      <button onClick={props.incrementBreak}>+1 Minute (Break)</button>
    </div>
  );
}

export default BreakLengthControl;
