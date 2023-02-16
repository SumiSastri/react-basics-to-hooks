import React, { useState } from "react";

const HooksInitialStateCounter = () => {
  const initialCount = 0;
  const [count, setCount] = useState(initialCount);

  const incrementByOne = () => {
    setCount((previousCount) => previousCount + 1);
  };

  const decrementByOne = () => {
    setCount((previousCount) => previousCount - 1);
  };

  // loop 3 times and increment by 3
  const incrementByThree = () => {
    for (let i = 0; i < 3; i++) {
      setCount(count + 3);
      console.log(`Synchronous log value, ${count}`);
    }
  };

  const incrementByFive = () => {
    for (let i = 0; i < 5; i++) {
      setCount((previousCount) => previousCount + 1);
      console.log(`Synchronous log value, ${count}`);
    }
  };

  const decrementByFive = () => {
    for (let i = 0; i < 5; i++) {
      setCount((previousCount) => previousCount - 1);
    }
  };

  const resetCounter = () => {
    setCount(initialCount);
  };

  return (
    <div>
      <h3>Refactored Hooks counter</h3>
      <p>
        Open google console and see how the async and sync calls work - the
        display value is 3 but the logged value should be 0 - when you click the
        +3 button
      </p>

      <p>Current Count: {count} </p>
      <button className='btn-pink' onClick={incrementByOne}>
        +1
      </button>
      <button className='btn-pink' onClick={decrementByOne}>
        -1
      </button>
      <button className='btn-danger' onClick={incrementByThree}>
        +3 Bug!!
      </button>
      <button className='btn-dark' onClick={resetCounter}>
        Reset
      </button>
      <button className='btn-pink' onClick={incrementByFive}>
        +5
      </button>
      <button className='btn-pink' onClick={decrementByFive}>
        -5
      </button>
    </div>
  );
};

export default HooksInitialStateCounter;
