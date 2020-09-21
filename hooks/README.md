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

**What is the difference between array and object destructuring?**

Object destructuring allows us to destructure the props object in a component in REact. This allows us to reference the keys from an object instead of having to use props and then dot notation each time.

With array destructuring, we can't access the values by key. Instead, we access them by index or position. So in this array `const destructureArray = [ a,b,c ]` to access the element b, destructureArray[1], woud give us the value of b as an array is zero indexed and a takes the index of zero. To achieve the same thing using array destructuring we can name the elements in a variable which is also an array. `const[0,1,2] = [ a,b,c ]` and we can now access it with the name we have given it so 3 accesses c. We can also use a commas for the elements we want to skip `[0,,]` will skip the second and third elements. It's really important to understand how array destructuring works as it is used in the `useState` method.
