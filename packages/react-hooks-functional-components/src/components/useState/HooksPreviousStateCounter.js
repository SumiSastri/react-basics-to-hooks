import React, { useState } from "react";

function HooksInitialStateCounter() {
  const initialCount = 0;
  const [count, setCount] = useState(initialCount);

  const incrementByOne = () => {
    setCount((previousCount) => previousCount + 1);
  };

  const decrementByOne = () => {
    setCount((previousCount) => previousCount - 1);
  };

  const resetCounter = () => {
    setCount(initialCount);
  };

  const incrementByFive = () => {
    for (let i = 0; i < 5; i++) {
      setCount((previousCount) => previousCount + 1);
    }
  };

  return (
    <div>
      <h4>
        I am a refactored class counter using the useState Hook and
        previousState {""}. This example is in the fundamentals section and
        takes into account async calls. The <em>useState</em> hook has been used
        to refactor the former React class component.
      </h4>
      <p>Current Count: {count} </p>

      <button className="btn-pink" onClick={incrementByOne}>
        Increase by 1 - demos Hooks & Async Calls
      </button>
      <button className="btn-pink" onClick={decrementByOne}>
        Decrease by 1
      </button>
      <button className="btn-pink" onClick={resetCounter}>
        Reset to 0{" "}
      </button>
      <button className="btn-pink" onClick={incrementByFive}>
        Increase by 5
      </button>
    </div>
  );
}

export default HooksInitialStateCounter;
