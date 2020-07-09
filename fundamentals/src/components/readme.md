## What is a React Component?

Components are the building blocks of the React library. Components are small reusable blocks of code that help developers construct a complex user-interface. It's reusable nature allows applications to be built in a modular fashion - a page for example may have a nav-bar, articles, images, buttons etc., each of these parts of the user interface can be broken down into a component. Components are nested one within the other to create a page layout. In other words components within another component is a nested component that helps build a page layout. A nav bar is a component with button components, a logo component nested in it.

Documentation[https://reactjs.org/docs/components-and-props.html]

**What is JSX in a component?**
JSX stands for JavaScript XML that is transpiled back into JavaScript in the React Library so that browsers can read them. Babel transpiles JSX back into a function call for an HTML element. `React.createElement()`

JSX superficially ressembles HTML and makes it easy for the developer to create page layouts using JavaScript functions and React methods within the JSX tags. JSX elements are immutable. Once created neither the children nor the attributes of the JSX can be changed.

JSX has tags, tag names, attributes and children. React can be written without JSX but it makes the developers' experience much better as the syntax is easy and familiar.

JSX must be enclosed in a parent `div` tag else it will throw a compile error. Sometimes, like in a routing component you may not want a `div` tag rendered, that is when you can use a React Fragment. A React Fragment is a Component that allows you to wrap JSX tags so that a `div` tag is not rendered on the DOM. A fragment is like a ghost element that wraps JSX in tags that removes the adjacent JSX need to be wrapped in a parent div error.

Documentation for JSX[https://reactjs.org/docs/introducing-jsx.html]
Detailed documentation for JSX[https://reactjs.org/docs/jsx-in-depth.html#user-defined-components-must-be-capitalized]

## What are the advantages of a component-based library?

Components help developers isolate features and build them independently. While one developer works on a nav-bar another can work on buttons, the components can be exported and imported to build a page. Facebook uses over 50,000 components for its user interface. Building smaller components also helps quickly solve and debug problems and test functionality of the component in isolation from the rest of the app before proceeding to end-to-end testing.

## What is a functional component and when should you use it?

A functional component is a JavaScript function that describe the state of the user interface. They were also known as presentational or dumb components as they do could not access state or lifecycle hooks available in stateful components.

**Props**
Functional components have additional properties or props to make the rendering the component more dynamic.

Props can be in the form of methods as well as primitive data types (strings, booleans, numbers). With the **Hooks API (2018)**, functional components can
access state and therefore are no longer considered 'dumb' components. There are no breaking changes and are 100% backwards compatible. Functional components can now use the API and the method `useState` Hook to access state and React LifeCycle methods.

Functional components must return a parent div that nests any other components or jsx tags - this simply returns hello world.

```
 <!-- unamed export - ES-5 uses the function key word-->
function Greet() {
 	return (
 		<div>
 			<h1>Hello World</h1>
 		</div>
 	);
 }

 <!-- unamed export - ES-6 assigns the function to a variable and a void function-->
const Greet = () => (
	<div>
		<h1>Hello World</h1>
	</div>
	 );
export default Greet;

```

They can be written as The unnamed export with an export default where `export default` used to export the function. Importing can be with a namespace alias `import HelloWorld from 'filepathName';` or `import Greet from 'filepathName';` both will work. No curly braces required. For boiler plate in VSCode you can use the short code `rfc` React-Functional-Component.

```
function App() {
  return (
    <div>
<h1>Hello world<h1>
    </div>
  );
}

export default App;
```

**BEST PRACTICE FOR FUNCTIONAL COMPONENTS**
Named components explicitly name the export. They are imported are with curly braces `import { Home } from 'filepathName';` and will not be recognised as an import without the curly braces.

```
import React from "react";

const Home = () => (
  <div>
    <h1>
      This is a React tutorial which refactors all class components to Hooks
    </h1>
  </div>
);
export default Home;
```

It is recommended to use functional components where possible. Functional components do not have the `this` key word as it has no reference to state or the underlying data of the components.

Especially with the introduction of Hooks, it is recommended to start by using functional component over a class-based component.

##ß What is a Class component and when should you use it?

Class, Container, Stateful or Smart components contain State. State is an object.It is the underlying data of a user interface, everytime this data changes the component is updated and re-rendered. To get the boiler plate the short code is `rce` React-ClassComponent-Extends ReactComponent. The Class component comes with a single, void method `React.Component.render()` and it renders a JSX element and its props.

```
import React, { Component } from "react";

export class ClassComponent extends Component {
  render() {
    return (
      <div>
        <h3>
          Hello World is a class based component with no data in the State
          object
        </h3>
      </div>
    );
  }
}

export default ClassComponent;
```

As State determines how the component is updated and re-rendered. Class components must have a render method to display the information held in State. Without the render method, the function gets executed in the console but will not be rendered to the DOM.

The class-based components use JavaScript ES-6 Classes to extend the the life-cycle methods in the React Component Library. The React Library's inbuilt life-cycle methods, render is the only mandatory life-cycle method.

To access the other pre-built methods, JavaScript class syntax is used - every component has a constructor and a super method. The super calls upon the constructor method in the React Component Library. The component now is able to access the pre-built life-cycle methods that help with the rendering of the data to the Virtual DOM. Changing state in the Virtual DOM first, the changes once compiled correctly are passed to the root HTML node and the real DOM.

```
import React, { Component } from "react";

export class ClassComponentWithState extends Component {
  constructor() {
    super();
    this.state = {
      data: "INITIAL STATE DATA",
    };
  }
  render() {
    return (
      <div>
        <h3>
          Hello World is a class based component state is a string with the
          text: {this.state.data}
        </h3>
      </div>
    );
  }
}
```

**State and the principle of Immutablity**

State is an object and therefore it is readable and writable. However it is recommended to change the underlying state of a component with the method `setState`, it is also managed with life-cycle methods written into the React Component Library.

If you change state directly without using the `setState` method the lifecycle methods will not be called upon and the state will change internally (you will see the changes in the console) but will not be rendered (you will not see the changed state in the rendering of the page).

The `setState` method triggers the re-render of the page with the new information in the object that has been updated. Documentation for setState [https://reactjs.org/docs/react-component.html#setstate]

The click updates the data on the component.

```
import React, { Component } from "react";

export class UpdateState extends Component {
  constructor() {
    super();

    this.state = {
      data: "INITIAL STATE DATA",
    };
  }

  updateData() {
    this.setState({
      data: "setState SUCCESSFUL",
    });
  }

  render() {
    return (
      <div>
        <h3>
          Hello World is a class based component state is a string with the
          text: {this.state.data}
        </h3>
        <button onClick={() => this.updateData()}>
          Click button to update initial state data with setState successful
        </button>
      </div>
    );
  }
}
```

Documentation on class-based components [https://reactjs.org/docs/state-and-lifecycle.html]

**What are life-cycle methods**
React components from being created to being rendered on the DOM go through several life-cycles.

**Mounting - component is created and inserted into DOM: Methods available**

Invoked in this order

- `constructor()` & `super()` where you intialise and set state and bind events to the class
- `static getDerivedStateFromProps()` rarely used only when state depends on change in props over time
- `render()` - reads `this.props` or `this.state` and renders this to the virtual DOM: not to be confused with ReactDom.render() this is the final render. In this method the component is first rendered then all its children components
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

Detailed documentation of lifecycle methods [https://reactjs.org/docs/react-component.html]

## Async JavaScript with React lifecycle methods.

**How do asynchronous calls to the `setState` method impact the execution of code in a class based component?**

Look at section state updates might be asynchronous [https://reactjs.org/docs/state-and-lifecycle.html] initally it was a little difficult to understand.

The video on asynchronous state calls very well explained by CodeEvolution's Viswas I have used his example in my project (async call explaination start from 6:30 mins)
[https://www.youtube.com/watch?v=uirRaVjRsf4&list=PLC3y8-rFHvwgg3vaYJgHGnModB54rxOk3&index=11]

The `setState` method has two parameters, the state object that needs to be updated and the second is a call back function. Because the method is called asynchronously, when you are rendering numbers in a counter component the console value is one less than the rendered value.

```

<!-- rce for boiler plate in ES7 -->
import React, { Component } from "react";

export class Counter extends Component {
  <!--  rconst for constructor -->
  constructor(props) {
    super(props);

    this.state = { count: 0 };
  }

  incrementVolume() {
    this.setState(
      {
        count: this.state.count + 1,
      },
      () => {
        console.log(`Asynchronous callback log value, ${this.state.count}`);
      }
    );
    console.log(`Synchronous log value, ${this.state.count}`);
  }

  incrementbyThree() {
    this.incrementVolume();
    this.incrementVolume();
    this.incrementVolume();
  }

  incrementByFive() {
    this.setState((previousState) => ({
      count: previousState.count + 5,
    }));
    console.log(`Logs async value: ${this.state.count}`);
  }

  render() {
    return (
      <div>
        <h4>Volume level {this.state.count}</h4>
        <button onClick={() => this.incrementVolume()}>
          Increase volume by 1 decibal
        </button>
        <button onClick={() => this.incrementbyThree()}>
          Increase by 3 BUG!
        </button>
        <button onClick={() => this.incrementByFive()}>
          Increase volume by 5 decibals
        </button>
      </div>
    );
  }
}

export default Counter;

```

In the `incrementVolume` code no call-back function has been written, the new state is returned as an object, so the logs show both the synchronous and asynchronous calls made on the call-stack. For a simple block of code this works, however for more complex blocks errors can occur.

When we pass the `incrementVolume` by reference as a return call we do not get three updates in the render method. In the `incrementByThree` the `setState` method is grouping together multiple calls in the call-stack to update state into a single update for better performance. This causes the bug.

```
incrementbyThree() {
    this.incrementVolume();
    this.incrementVolume();
    this.incrementVolume();
  }
```

To avoid this `setState` should take the call-back param - here it is `previousState` and then the return of the call back sets the state to the new, updated state object `({count: previousState.count + 5,})`

Now when you log the async value still remains 5 counts behind in the console, but the call is made once in the call-stack and updates the render method correctly.

```
incrementByFive() {
    this.setState((previousState) => ({
      count: previousState.count + 5,
    }));
    console.log(`Logs async value: ${this.state.count}`);
  }
```

Syntax from the React Documentation [https://reactjs.org/docs/state-and-lifecycle.html] scroll down to the state updates may be asynchronous section.

```
this.setState(function(state, props) {
  return {
    counter: state.counter + props.increment
  };
});

<!-- ES6 -->

this.setState((state, props) => ({
  counter: state.counter + props.increment
}));

```

20. How do you add styling to your React Components?

- Libraries
  Icons - react-icons
  [https://react-icons.github.io/react-icons/]

```
import React, { Component } from "react";
import { FaReact } from "react-icons/fa";
import { IconContext } from "react-icons";

export class NavBar extends Component {
  render() {
    return (
      <IconContext.Provider value={{ color: "red", size: "3rem" }}>
        <h1>
          <!-- The Component props are color and size with provider you can wrap the Compoent and remove individual props

          <FaReact color="red" size="3rem" /> React Fundamentals
          <FaReact color="red" size="3rem" /> React Hooks -->

        </h1>
      </IconContext.Provider>
    );
  }
}

export default NavBar;
```
