import React, { useState } from "react";

import HooksComponentWillUnmountMethod from "./HooksComponentWillUnmountMethod";

function HooksComponentWillUnmountChild() {
  const [display, setDisplay] = useState(true);

  return (
    <div>
      <h4>Child component - toggle button</h4>
      <button className="btn" onClick={() => setDisplay(!display)}>
        Click to toggle display on and off
      </button>
      {display && (
        <HooksComponentWillUnmountMethod></HooksComponentWillUnmountMethod>
      )}
    </div>
  );
}

export default HooksComponentWillUnmountChild;
