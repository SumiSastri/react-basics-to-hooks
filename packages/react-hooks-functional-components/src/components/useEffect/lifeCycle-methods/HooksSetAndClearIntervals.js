import React, { useState, useEffect } from "react";

const HooksSetAndClearIntervals = () => {
  let initialState = 0;
  const [count, setCount] = useState(initialState);

  const setTimer = () => {
    //   compiles with warnings without the previous count param
    setCount((previousCount) => previousCount + 1);
  };

  //  the empty dependency says do not watch for changes, no changes are expected in the component state or props
  useEffect(() => {
    const interval = setInterval(setTimer, 1000);
    return () => {
      clearInterval(interval);
    };
    // don't forget the dependency otherwise it will not re-render with every call
    // if you want to have an empty dependency array - then use the previousCount to track changes
  }, [count]);

  return (
    <div>
      <h3>Demo 6: Set and clear intervals with useEffect</h3>
      <p className='text-danger'>
        Demos 3, 4 and 5 are commented out - go to code and uncomment to view.
        Timers are usually invisible to the user, this demo renders the function
        to demo how it works.
      </p>
      <p>Display the set interval: Seconds passed {count}</p>
    </div>
  );
};

export default HooksSetAndClearIntervals;
