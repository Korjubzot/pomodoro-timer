import React from "react";

function ResetButton(props) {
  return (
    <div>
      <button onClick={props.reset}>Reset</button>
    </div>
  );
}

export default ResetButton;
