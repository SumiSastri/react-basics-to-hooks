### What does the useState Hook do?

Documentation [https://reactjs.org/docs/hooks-state.html]

- Allows you to add state in a functional component
- Returns a destructured array with two elements - a getter (the initial state) and a setter (sets an updated value to initial state)
- Elements can be numbers, booleans, strings, objects or arrays
- Does not merge and update objects and arrays, therefore the spread operator must return initial state of the object or array as well as the updated value
-

```
import React, { useState } from "react";
```

- create a variable to hold state

```
  const [count, setCount] = useState(0);
```

The`useState` method takes 2 params a getter and a setter `useState(initialState, setNextState)`

Rendering state now is easy pass the initialState param into the JSX as an expression.

`<h4>I am a refactored counter using the useState hook {count}</h4>`

The second param is nextState which is a call back function that updates the initialState. In a class-component these factory functions are written before the render method. With hooks there is no render method, only a return statement. Therefore the JSX element takes the event handler function (the second param of the `setState` method) as an expression. As there is no render method, the call-back function that updates state (previously the `this.setState` method) is written directly into the JSX element.

```
<button onClick={() => setCount(count + 1)}>Click to increment</button>
```

Like so - this now has the same functionality with less code written.

```
import React, { useState } from "react";

function HooksCounter() {
  <!-- destructure array with state -->
  const [count, setCount] = useState(0);

  return (
    <div>
      <h4>I am a refactored counter using the useState hook {count}</h4>
      <button onClick={() => setCount(count + 1)}>Click to increment</button>
    </div>
  );
}

export default HooksCounter;
```

This is the comparison of the refactor

```
import React, { Component } from "react";

export class ClassCounter extends Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
    };
  }

  increment = () => {
    this.setState({
      count: this.state.count + 1,
    });
  };

  render() {
    return (
      <div>
        <h4>I am a counter with a class component {this.state.count}</h4>
        <button onClick={this.increment}>Click to increment</button>
      </div>
    );
  }
}

export default ClassCounter;
```

**Accessing previous State**
The correct way to show a change in state is to initialise the initial state, use Hooks getter to get initial value and the setter to set the updated value in an array. Factory functions can be written using previousState to update the setter in a similar way to setState in a class component but with difference - the setter is an ordinary call back function and does not make use of the `this` key word. This will handle the async nature of JavaScript calls to the call-stack by specifying the exact value that is being updated.

```
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

      <p>Current Count: {count} </p>
      <button className="btn" onClick={incrementByOne}>
        Increase by 1
      </button>
      <button className="btn" onClick={decrementByOne}>
        Decrease by 1
      </button>
      <button className="btn" onClick={resetCounter}>
        Reset to 0{" "}
      </button>
      <button className="btn" onClick={incrementByFive}>
        Increase by 5
      </button>
    </div>
  );
}

export default HooksInitialStateCounter;
```

**Using Hooks where state is an object**
In class components, updating state with an object merges and updates the object state. With Hooks the method does not merge and update the object state, you therefore need to use the spread operator.

```
import React, { useState } from "react";

function HooksWithObjects() {
  let initialState = { firstName: "", lastName: "" };
  const [name, setName] = useState(initialState);

  return (
    <div>
      <form>
        <input
          type="text"
          name="firstName"
          placeholder="Type first name here"
          value={name.firstName}
          onChange={(event) =>
            setName({ ...name, firstName: event.target.value })
          }
        ></input>
        <h5>You typed {name.firstName}</h5>
        <input
          type="text"
          name="lastName"
          placeholder="Type Last name here"
          value={name.lastName}
          onChange={(event) =>
            setName({ ...name, lastName: event.target.value })
          }
        ></input>
        <h5>You typed {name.lastName}</h5>
        <button className="btn" onClick={(event) => setName({ initialState })}>
          Click to clear form inputs
        </button>
      </form>
    </div>
  );
}

export default HooksWithObjects;
```

**Using Hooks where state is an array**

Similar to objects, arrays need to be spread and returned with the updated state.
