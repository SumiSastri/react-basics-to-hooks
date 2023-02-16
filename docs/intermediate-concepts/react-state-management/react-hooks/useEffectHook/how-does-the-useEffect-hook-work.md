### How does the useEffect Hook work?

`useEffect()` is a call back function that re-renders the component every time it is called. In this function we are requesting that the component is rendered again everytime we click the button to update the title tab with a click. If we want it to run only once, we need to set the call back to an empty array.

If you want it to re-render, you need to set the array to the corresponding dependency.

See Demo1 in the react-hooks-functional-components app
Tutorial:
You Tube Code Evolution:
[https://www.youtube.com/watch?v=nAuWOnFMlOw&list=PLC3y8-rFHvwisvxhZ135pogtX7_Oe3Q3A&index=7]

```
 useEffect(() => {
    document.title = `Times title clicked: ${count}`;
  },[]);
```

`useEffect()` is called within the component to access the component state and its props without writing any additional code. The function runs with every render of the component. It is the same with class components. With initial render there is code that is run and with every other render the code runs again.

The dependency you add to the empty array is the state or props that the render is dependent on. See Demo 2
Tutorial:
You Tube Code Evolution:
[https://www.youtube.com/watch?v=8DYlzVUTC7s&list=PLC3y8-rFHvwisvxhZ135pogtX7_Oe3Q3A&index=8]

Simulating life-cycle methods
See Demo 3, 4 and 5 - they are commented out by default, uncomment to see how they work
Tutorial:
Code Evolution - 9 & 10 videos
[https://www.youtube.com/watch?v=BH4xvzHa7H8&list=PLC3y8-rFHvwisvxhZ135pogtX7_Oe3Q3A&index=9]
[https://www.youtube.com/watch?v=DTlmk6QeOHY&list=PLC3y8-rFHvwisvxhZ135pogtX7_Oe3Q3A&index=10]

Demo 6:
Tutorial
Code Evolution -11

[https://www.youtube.com/watch?v=SP-NrbQHFww&list=PLC3y8-rFHvwisvxhZ135pogtX7_Oe3Q3A&index=11]

In this `setInterval` event listener, you will see how the dependency is added.

```
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
```

Data fetching - Demo 7

Tutorial
Code Evolution -12, 13 & 14
[https://www.youtube.com/watch?v=bYFYF2GnMy8&list=PLC3y8-rFHvwisvxhZ135pogtX7_Oe3Q3A&index=12]

[https://www.youtube.com/watch?v=1tfd6ANaNRY&list=PLC3y8-rFHvwisvxhZ135pogtX7_Oe3Q3A&index=13]

[https://www.youtube.com/watch?v=zm_09NER-R0&list=PLC3y8-rFHvwisvxhZ135pogtX7_Oe3Q3A&index=14]
