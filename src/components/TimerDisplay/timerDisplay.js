import React from "react";

function TimerDisplay(props) {
  return (
    <div>
      <h1>{props.time}</h1>
      <h2>{props.break}</h2>
    </div>
  );
}

export default TimerDisplay;
