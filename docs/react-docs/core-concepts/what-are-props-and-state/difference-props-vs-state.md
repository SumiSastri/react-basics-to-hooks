# Component properties or props

The purpose of this document is demonstrate the difference between React Components the `props` or properties object Props documentation: [https://reactjs.org/docs/components-and-props.html] and the `state` object Documentation on class-based components [https://reactjs.org/docs/state-and-lifecycle.html].

**What is the difference between props and state?**

Both `props` and `state` hold information in the form of JavaScript objects that make components more dynamic.

State can change through the lifetime of a component (mounting, updating, unmounting) while a `prop` does not change and is immutable through the lifecycle of a component.

There are also differences in the way they are accessed and passed from one component to the other.

`State` is the underlying data in a class-based component and is managed within the component. It is a privately held method in the constructor making it accessible only within the component. It is updated and rendered using life-cyle methods that are native to the React Component Library.

State can be changed with the `setState` method. State is an object and the data can be accessed by `this.state` as it references the `state` in the class and the key word `this` points specifically to the `state` in the class component.

With Hooks, `state` can be changed with the `useState` hook and makes the use of class-based components redundant. Hooks are a modern way to add `state` to a component. Hooks change the `state` of the data through the lifecycle of mounting, updating and unmounting more elegantly and with less code than class-based components.

Props are additional properties of a component and get passed from a parent component to a child component.

Props are immutable, the parent component owns the `props` and can not be changed by the children.
These properties can not be changed by the children they are passed to - this is based on the one-way data-flow with React which is top-downwards or from parent-to-child.

They are the functional components parameters and are accessed with `props.propName` while in a class component the properties object need to use the `this` key word to reference the `props` object that it is pointing to. Class-based components props are therefore accessed with `this.props.propName` method.

State can be accessed with the Hooks API with the `useState` Hook or the the `setState` method, props have no hooks/ methods and are manually changed within the code-base.
