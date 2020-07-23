### React-fundamentals-to-Hooks

This section covers the basic concepts with React Hooks.

Documentation

- [https://reactjs.org/docs/hooks-intro.html]
- [https://reactjs.org/docs/hooks-overview.html]

Cheat sheets from docs
[https://reactjs.org/docs/hooks-reference.html]

& FAQs - this one is really useful to understand why Hooks and benefits of using Hooks[https://reactjs.org/docs/hooks-faq.html]

### Why Hooks?

Challenges with React

- Poor in minifying of JavaScript classes in compile time
- No way to use stateful logic between components
- HOC and render props allow sharing of stateful logic but and result in prop drilling and component wrapping making the app code difficult to follow
- Async calls result in code scattered in different life-cycle methods - for example: Event listeners work componentDidMount and componentDidUpdate while fetching data from the back-end APIs work in both componentDidMount and componentWillUnmount
- State always has to be an object, with hooks state can be a string, number, boolean or even complex data types like objects and arrays.

Hooks allows you to reuse state-data without complex data hierarchies. They also take out the complexity and ambiguity of using the `this` key word in class-based components.

### What are Hooks?

Hooks allow you to access state and all the React life-cycle methods in functional components. There is no need to use class components for hooks, they only work with functional components. They are direct API's to access React methods in the library.

Hooks are methods in the React Component Library that have been written converting data into arrays and uses array destructuring to access state and the life-cycle methods in the React Component Library.

- Only call Hooks at the top level of the component
- Can not be used in iterations, conditional statements or nested functions.
- It is not a regular JavaScript function, it is a method of the React Component Library so needs to be written within the functional component code block.

Custom Hooks

- [https://www.youtube.com/watch?v=4MrzAUYfSSs]
- [https://www.youtube.com/watch?v=lhmkvylrwo0s]
