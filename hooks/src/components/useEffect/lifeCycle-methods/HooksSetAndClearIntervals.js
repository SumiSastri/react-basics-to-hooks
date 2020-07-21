import React, { useState, useEffect } from "react";

function HooksSetAndClearIntervals() {
  let initialState = 0;
  const [count, setCount] = useState(initialState);

  const setTimer = () => {
    //   compiles with warnings without the previous count param
    setCount((previousCount) => previousCount + 1);
  };

  useEffect(() => {
    const interval = setInterval(setTimer, 1000);
    return () => {
      clearInterval(interval);
    };
    // don't forget the dependency
  }, [count]);

  return <div>Seconds passed {count}</div>;
}

export default HooksSetAndClearIntervals;
