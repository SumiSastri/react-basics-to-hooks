With Hooks, the lifecycle methods are completely replaced with the `useState()` hook instead of component life-cycle methods. The general structure of how to test a stateful component is the same with some differences. Stateful components usually are in abundance with controlled components (forms).

1. Render component
2. Interact with the DOM
3. Make assertions that DOM is as expected