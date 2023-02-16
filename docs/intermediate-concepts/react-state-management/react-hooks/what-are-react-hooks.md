React hooks are a new state management feature from React version 16.8 onwards. It is an API with several methods.

Hooks allow you to access state without having to write class components.

The Hooks API has several useful methods that allow you to manage simple and complex state in your React App.

It is backwards compatible and you can have both class and Hooks components in an app.

Class components have not been decomissioned but React highly recommends moving to using Hooks and staying away from using class components.

**Advantages**

1. No need to use the `this` key words in the class compoents
2. No need to bind event handlers
3. Classes do not minify well - makes hot reloading unreliable
4. No way to re-use stateful component logic - you have to refactor and lift state, or use a third party state-management library like redux. Hooks allow you to reuse stateful logic without complex, advanced React library methods (HoCs)
5. High order components (HoCs) like providers can be used as well as the `renderProps()` method to reuse state and props but this also takes some thought, planning and configuration. Hooks makes the state easy to access and use in a component. HoCs mean you have to wrap components with these "super-powered" components to share the code logic. It makes the code harder to follow and not very efficient in terms of compute time. Hooks simplifies code logic.
6. Complex data handling - calling APIs and subscribing to events - in class components is handled through the complex React lifecycle methods - `componentDidMount()` and `componentDidUpdate()` for API calls and `componentDidMount()` and `componentWillUnmount()` for event listeners, timers, cleanups, etc., Hooks allow you to use functional JavaScript based on what code blocks are related. Hooks help you organise the logic of a component inot reusable isolated units. Using functional JavaScript allows you to have more confidence in your code.

**References**

YouTube:

CodeEvolution
https://www.youtube.com/watch?v=cF2lQ_gZeA8&list=PLC3y8-rFHvwisvxhZ135pogtX7_Oe3Q3A&index=1
