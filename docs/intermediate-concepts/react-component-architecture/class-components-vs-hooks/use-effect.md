### What does the useEffect Hook do?

Documentation [https://reactjs.org/docs/hooks-effect.html]
Everytime you want to access the DOM and clean up after accessing the DOM (setting and clearing intervals, getting data when the component mounts and then unmounting components after async API calls, setting and clearing event listeners, etc. ) `useEffect` can be used.

The hook makes the code for dealing with side effects more efficient as it handles 3 life-cyle methods at the same time - the mounting, updating and destroying life-cycles of the component.

To summaraize, useEffect works best when you want to

- Update the DOM
- Fetch data from an API end-point
- Set up subscriptions
- Set up timers

With class based methods these are done in the life-cycle methods rather than in the render methods. These are the three life-cycle methods that the `useEffect` Hook handles.

`componentDidMount` - sets up the timer(setInterval)/ button with initial state
`componentDidUpdate` - button to update state (event handlers)
`componentWillUnmount` - destroys timer (clearInterval)

### How does the useEffect Hook work?

`useEffect` is a call back function that re-renders the component every time it is called. In this function we are requesting that the component is rendered again everytime we click the button to update the title tab with a click. If we want it to run only once, we need to set the call back to an empty array.

If you want it to re-render, you need to set the array to the corresponding dependency.

```
 useEffect(() => {
    document.title = `Times title clicked: ${count}`;
  },[]);
```

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

This component handles both the `componentDidMount` and `componentDidUpdate` methods. The code for the whole component can be compared to the class component to see the differences. With Hooks we can see the efficiency of the code written.

```
import React, { useState, useEffect } from "react";

function HooksComponentUpdateMethod() {
  let initialState = 0;
  const [count, setCount] = useState(initialState);

  useEffect(() => {
      console.log(`updating component`)
    document.title = `Times title clicked: ${count}`;
  });

  return (
    <div>
      <h4>
        Using the useEffect Hook to update a component rendering and eliminate
        side effects
      </h4>

      <button className="btn" onClick={() => setCount(count + 1)}>
        Click {count} times
      </button>
    </div>
  );
}

export default HooksComponentUpdateMethod;
```

Tutorials:
Leigh Halliday [https://www.youtube.com/watch?v=_TleXX0mxaY]