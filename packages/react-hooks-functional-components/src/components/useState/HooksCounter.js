import React, { useState } from "react";

function HooksCounter() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h4>
        I am a refactored counter using the useState hook WORKS BUT NOT CORRECT{" "}
      </h4>
      <p>Counter set at: {count}</p>
      <p>
        The <em>useState</em> hook has been used here replacing state as a
        deconstructed array rather than an object
      </p>
      <button className="btn-pink" onClick={() => setCount(count + 1)}>
        Click to increment refactored Hooks component
      </button>
    </div>
  );
}

export default HooksCounter;
