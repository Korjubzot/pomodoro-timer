import React from "react";

function ResetButton(props) {
  return (
    <div>
      <button className="btn" onClick={props.reset}>
        Reset
      </button>
    </div>
  );
}

export default ResetButton;
