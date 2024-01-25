import React from "react";

function BreakLengthControl(props) {
  return (
    <div>
      <button onClick={props.decrementBreak}>-</button>
      <span>{props.breakLength}</span>
      <button onClick={props.incrementBreak}>+</button>
    </div>
  );
}

export default BreakLengthControl;
