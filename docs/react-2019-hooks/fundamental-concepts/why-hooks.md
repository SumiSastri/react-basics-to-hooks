### Why Hooks?

Hooks help reduce some of the challenges with traditional React but it is not a silver bullet that simplifies everything. Some of the key advantages over traditional React are listed here which is why code has moved from writing traditional React code to the modern Hooks design pattern. Hooks and Traditional React can co-exist in repos.

- Traditional React is poor in minifying of JavaScript classes in compile time
- It does not offer a way to use stateful logic between components
- Higher order components(HOCs) and the `renderProps` method allow sharing of stateful logic
- Hooks reduces prop-drilling and component-wrapping making the app code difficult to follow which are some of the challenges with HOCs and the `renderProps` method
- Async calls in traditional React result in code scattered in different life-cycle methods - for example: Event listeners work `componentDidMount` and `componentDidUpdate` while fetching data from the back-end APIs work in both `componentDidMount` and `componentWillUnmount`
- State always has to be an object in traditional React. With Hooks state can be a string, number, boolean or even complex data types like objects and arrays.
- Hooks allows you to reuse state-data without complex data hierarchies. They also take out the complexity and ambiguity of using the `this` key word in class-based components.
