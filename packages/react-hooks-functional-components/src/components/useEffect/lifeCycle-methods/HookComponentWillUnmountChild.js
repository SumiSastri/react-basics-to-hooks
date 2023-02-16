import React, { useState } from "react";

import HooksComponentWillUnmountMethod from "./HooksComponentWillUnmountMethod";

const HooksComponentWillUnmountChild = () => {
  const [display, setDisplay] = useState(true);

  return (
    <div>
      <h3>Demo 4 - simulate componentWillUnmount</h3>
      <button className='btn' onClick={() => setDisplay(!display)}>
        Click to toggle between opening and closing Demo 5
      </button>
      {display && <HooksComponentWillUnmountMethod />}
    </div>
  );
};

export default HooksComponentWillUnmountChild;
