import React, { useState } from "react";

const HooksCounter = () => {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h3>React Hooks counter</h3>
      <p>Counter set at: {count}</p>
      <button className='btn-pink' onClick={() => setCount(count + 1)}>
        +
      </button>
    </div>
  );
};

export default HooksCounter;
