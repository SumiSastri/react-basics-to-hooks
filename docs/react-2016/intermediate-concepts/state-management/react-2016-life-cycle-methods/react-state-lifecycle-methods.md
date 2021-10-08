The purpose of this documentation is to show how state gets updated through the life-cycle of a React-app.

Detailed documentation of lifecycle methods [https://reactjs.org/docs/react-component.html]

__What is the purpose of having lifecycle methods in React?__

As React does not interact with the DOM directly, the Virtual DOM mimics the way HTML-CSS and JavaScript files are retrieved from a server. (See documentation on MVC model)

HTML - with JSX tags
CSS - with either JavaScript tags in JSX or CSS files
JavaScript - JSX transpiled back into JavaScript with transpilers/ code-compilers

React methods are held in the global React-object with all its methods. The key purpose of react is to render data in state and props. As the data enters the component, flows from one component to another and shares component state.

To do this each component has a lifecycle where state enters, updates and is removed from a component.

The life-cycle methods in React components follow the lifecylce from a component's created to being rendered on the DOM and then removed from the DOM-tree.

__Key life-cycle methods__

**Mounting - component is created and inserted into DOM: Methods available**

Invoked in this order

- `constructor()` & `super()` where you intialise and set state and bind events to the class
- `static getDerivedStateFromProps()` rarely used only when state depends on change in props over time
- `render()` - reads `this.props` or `this.state` and renders this to the virtual DOM: not to be confused with ```ReactDom.render()``` this is the final render. In this method the component is first rendered then all its children components
- `componentDidMount()` called only once, invoked after component successfully renders on real DOM with all its children (you can call external data with network requests (API calls) in this life-cycle method as it is accessing the DOM and interacting with the DOM)

**Update - component re-renders due to changes in props or state: Methods available**

- `static getDerivedStateFromProps(props, state)` rarely used - returns null or updated state
- `shouldComponentUpdate(nextProps, nextState)` rarely used checks to see if there is a user input and change
- `render()` component re-renders every time there is a change in props or state
- `getSnapshotBeforeUpdate(previousProps, previousState)` tests the snapshot and saves it for next update, rarely used - if you need to capture information from the DOM returns null or as a param to `componentDidUpdate()`
- `componentDidUpdate(previousProps, previousState, snapshot)` confirms the updates have been made also calls any changes to DOM from the previous and current values (can make http calls here advisedly) clean up `setTimeOut()` and `clearIntervals()`

**Unmount - successfully rendered on DOM and removed: Methods available**

- Just one method `componentWillUnmount`

**Error Handling - error in rendering constructor of child components: Methods available**

When the component umounts, error boundaries need to be defined and how errors that have occured either in run-time or compile will be handled.

- `static getDerivedStateFromProps()` checks to see what state is in the error and catches that error to throw an exception handler
- `componentDidCatch` successfully capture the error to help debugging


## Async JavaScript with React lifecycle methods.

**How do asynchronous calls to the `setState` method impact the execution of code in a class based component?**

Look at section state updates might be asynchronous [https://reactjs.org/docs/state-and-lifecycle.html] initally it was a little difficult to understand.

The video on asynchronous state calls very well explained by CodeEvolution's Viswas I have used his example in my project (async call explaination start from 6:30 mins)
[https://www.youtube.com/watch?v=uirRaVjRsf4&list=PLC3y8-rFHvwgg3vaYJgHGnModB54rxOk3&index=11]

The `setState` method has two parameters, the state object that needs to be updated and the second is a call back function. Because the method is called asynchronously, when you are rendering numbers in a counter component the console value is one less than the rendered value.

Syntax from the React Documentation [https://reactjs.org/docs/state-and-lifecycle.html] scroll down to the state updates asynchronous section.
