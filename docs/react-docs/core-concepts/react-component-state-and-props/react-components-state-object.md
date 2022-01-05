# Component state - an introduction

The purpose of this document is to give you a quick overview of a React Components `state` object.

Documentation on class-based components [https://reactjs.org/docs/state-and-lifecycle.html]
Documentation for setState [https://reactjs.org/docs/react-component.html#setstate]

State is the data the component holds, updates and displays. It is a plain vanilla JavaScript object. It has all the same properties of a JavaScript object hence, the reason, why React is "just JavaScript under the hood".

The React Component `state` object is readable and writable. However it is recommended to change the underlying state of a component with the method `setState()`, it is also managed with life-cycle methods written into the React Component Library.

If you change state directly without using the `setState()` method the lifecycle methods will not be called upon and the state will change internally (you will see the changes in the console) but will not be rendered (you will not see the changed state in the rendering of the page).

The `setState()` method triggers the re-render of the page with the new information in the object that has been updated.

Managing a React Component's state has changed as the package has evolved. Here is a short-history. This updating of the methods used in the state object are likely to change as the package develops, this is up-to-date as of 2022.

2011 - Class components only way to create, update and manage state/ context feature internal use not public use
2014 - Flux pattern introduced where the state tree was lifted into a store like Redux an external state management library created by Facebook that needs to be incorporated into the React Library
2015 - An external library Redux which is used in JavaScript state management could be incorporated into React components
2015 - Stateless functional components with props - no state
2018 - Context-API stable shares data-functions with many components or entire app React 16.3
2019 - Hooks released manage state in functional components React 16.8 onwards

**The lifecycle of state**

The React Component state object has inbuilt life-cycle methods to relate to controller tasks in the MVC pattern and how the ReactDOM-API diff-algorithm works with the DOM-API (see reactdom-api-virtual-DOMs folder for a quick introduction to these concepts).

When the DOM is mounted the following lifecycle methods are available in the React Component Library for class-based components. These are the algorithms that checks and calculates the difference between the current `state` object and its previous `state` so that further code can be written to control the components behaviour.

_Mounting_
Invoked in this order

- `constructor()` & `super()` where you intialise and set state and bind events to the class
- `static getDerivedStateFromProps()` rarely used only when state depends on change in props over time
- `render()` - reads `this.props` or `this.state` and renders this to the ReactDOM-API: not to be confused with `ReactDom.render()` this is the final render. In this method the component is first rendered then all its children components
- `componentDidMount()` called only once, invoked after component successfully renders on DOM-API's DOM-tree with all its children (you can call external data with network requests (API calls) in this life-cycle method as it is accessing the DOM and interacting with the DOM)

**Updating**

In this phase the React Component re-renders due to changes in `props` or `state`: Methods that the library ships with at this phase are

- `static getDerivedStateFromProps(props, state)` rarely used - returns null or updated state
- `shouldComponentUpdate(nextProps, nextState)` rarely used checks to see if there is a user input and change
- `render()` component re-renders every time there is a change in props or state
- `getSnapshotBeforeUpdate(previousProps, previousState)` tests the snapshot and saves it for next update, rarely used - if you need to capture information from the DOM returns null or as a param to `componentDidUpdate()`
- `componentDidUpdate(previousProps, previousState, snapshot)` confirms the updates have been made also calls any changes to DOM from the previous and current values (can make http calls here advisedly) clean up `setTimeOut()` and `clearIntervals()`

**Unmounting**

This is the phase when the React Component has successfully rendered on the DOM-tree and can be removed as it has already captured the snapshot for the diff-calculation. Methods available at this stage is just one successful completion of the React Component's lifecycle in mounting-rendering and unmounting from the DOM.

- `componentWillUnmount`

**Error Handling - error in rendering constructor of child components: Methods available**

When the component umounts, error boundaries need to be defined and how errors that have occured either in run-time or compile will be handled.

- `static getDerivedStateFromProps()` checks to see what state is in the error and catches that error to throw an exception handler
- `componentDidCatch` successfully capture the error to help debugging

- In the advanced concepts - see the `ErrorBoundary.tsx` in the react-typescript folder and docs.
