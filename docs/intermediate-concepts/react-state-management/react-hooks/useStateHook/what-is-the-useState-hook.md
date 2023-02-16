The `useState Hook()` is an abstraction of a function that lets you hook state into a functional component.

By importing the method, instead of using a class component, the method allows you to hook into a deconstructed array and set state in the component.

State can be JavaScript primitives - strings and numbers
`const [count, setCount] = useState('');`
`const [count, setCount] = useState(0);`

Or collections

Arrays

```
let initialState = [];
const [randomNumbers, setRandomNumbers] = useState(initialState);
```

Objects

```
let initialState = { firstName: "", lastName: "" };
const [name, setName] = useState(initialState);
```

The first element in the array defines the initial state and the second element is a method that allows you to update state in the component. It replaces the constructor method - `this.state` and `this.setState` - that you see in class components and in the background takes care of where the method is run in the react lifecycle of a component.

Hooks should only be called at the top level and not inside loops, conditions or nested functions.

Spin up the repo react-hooks-functional-components for demos and review the code base.
