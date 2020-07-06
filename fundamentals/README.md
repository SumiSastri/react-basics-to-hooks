### React-fundamentals-to-Hooks

This section covers the basic concepts in React. Prior knowledge of HTML, CSS and JavaScript is required. The readme follows the React documentation [https://reactjs.org/docs/getting-started.html] which is easy to follow.

I have also looked at some React tutorials for specific topics that were not easy to understand. These have been indicated in the appropriate sections and the Appendices section

### Fundamental concepts from the Main Concepts Documentation in React

1. What is React?

React is a front-end JavaScript library created by Facebook for user interfaces. It is maintained by Facebook and an open source developer community.

It is used because it helps in scaling apps quickly and efficiently. React focuses on the developer experience. The key advantage of React is that it makes it easier for front-end developers to build rich user-interfaces without having to think about DOM manipulation, CSS-selectors, rendering and updating multiple pages as an application grows. As the underlying data that drives the pages change, the user interface is updated and changed automatically. This is done seamlessly under the hood with key React methods that have been written into the library.

2. What is the difference between a library and a framework

The key difference between a library and a framework is the amount of control a developer has over features and functionality. With a framework all features, functionality and architecture are pre-determined with limited options to change the control-flow or logic of the framework. It is a skeleton within which you can work. A library is a loose collection of tools that you can pick and mix and offers more control for the developer. The technical term for this limitation of control is called the inversion of control - with a library the flow can be controlled by the developer with a framework the framework controls the developers work flow and coding options. More from Freecodecamp [https://www.freecodecamp.org/news/the-difference-between-a-framework-and-a-library-bd133054023f/]

3. How do you install React in a project?

- Pre-requisites are node and a text editor
- Run `npx create-react-app yourAppName`
- node modules (all dependencies for the react app) - this is generated on npm install or the create-react-app CLI commands/ webpack and babel are preloaded with this command
- public (holds the root HTML file that renders the index.js - react controls the ui) -manifest json(progessive-web-apps)
- gitigonore (ignores files that need not be pushed to version control)
- package-lock.json (insures consistent installion of dependencies)
- package-json - scripts object run the app
- readme
- react-dom is for web based apps, react-native is for mobile apps

**A note about Node Package Manager vs. Node Version Manager**

Node version manager is a bash script that helps you work with several versions of node depending on the application.

Install instructions:

1. Clone [git clone http://github.com/creationix/nvm.git .nvm]OR `[git clone git://github.com/creationix/nvm.git $nvm_target]
2. Curl [$ curl https://raw.github.com/creationix/nvm/master/install.sh | sh]
3. Find the file [ls -a | grep .nvm]
4. Clean up installation [touch ~/.bash_profile]
5. Re-run curl [curl -o- https://raw.githubusercontent.com/creationix/nvm/v0.33.1/install.sh | bash]
6. Shut down and restart terminal run [source ~/.nvm/nvm.sh]
7. Check if installed [nvm --version]

Documentation: [https://github.com/nvm-sh/nvm]
Debug: Stackoverflow has excellent suggestions [https://stackoverflow.com/questions/16904658/node-version-manager-install-nvm-command-not-found#comment46581365_16905910]
Read More: Medium articles (useful background but not useful really for set up and debugging
[https://medium.com/@isaacjoe/best-way-to-install-and-use-nvm-on-mac-e3a3f6bc494d][https://itnext.io/nvm-the-easiest-way-to-switch-node-js-environments-on-your-machine-in-a-flash-17babb7d5f1b]
Main folder for front-end developers is the source folder - src

- index.js (sends the app.js files to the HTML root DOM node) this is why it is called a Single Page App (SPA) as all files routed through a single route file and the `ReactDOM.render()`method which takes two arguements, the component page to be rendered and the where you want to render it - the particular node of the HTML file which is the `root` file.

```
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
```

- App.js (the file responsible for the single page app's view in the browser)
- App.css (styling)
- index.css (body-styling)
- serviceWorker (progressive web apps)
- App.test.js (sample unit tests that can be run)

4. What is imperative and declarative code? Which does React use? What are the advantages?

- Imperative code prescribes an exact sequence of steps in the alogrithm for the code to run.
- Declarative code is when the outcome is described and the code takes care of the execution.

React uses declarative code to build UI by the description of the actions required for the user-interface to be rendered. The advantage is that React under the hood complies and transpiles the changes you need for the UI and handles updating and rendering the components to the Virtual DOM first before it is rendered on the DOM. Therefore if you have an app that needs to display an updated price of a product when a user selects a product and proceeds to check out, React will only update the product selected, the addition to the cart and the new price for the additional item purchased. No changes are made to the other products in the inventory in the user interface or in the shopping cart.

5. What is the Virtual DOM and why is it important?

The document object model or DOM is a visual representation of the state tree - or the underlying data of the app. The DOM is made up of nodes and each node holds some element of state in the node. In vanilla JavaScript, and libraries like J-Query, the developer needs to work on accessing each node via CSS-selectors. This is inefficient in run-time, costly and time-consuming. The Virtual DOM is a virtual copy of the DOM and is updated in the background via the inbuilt methods in the React library. This copy is stored in memory and everytime state needs to be changed, state is updated in the virtual DOM first before changes are made to the real DOM.

6. What is a React Component?

Components are the building blocks of the React library. Components are small reusable blocks of code that help developers construct a complex user-interface. It's reusable nature allows applications to be built in a modular fashion - a page for example may have a nav-bar, articles, images, buttons etc., each of these parts of the user interface can be broken down into a component. Components are nested one within the other to create a page layout. In other words components within another component is a nested component that helps build a page layout. A nav bar is a component with button components, a logo component nested in it.

Documentation[https://reactjs.org/docs/components-and-props.html]

**What is JSX in a component?**
JSX stands for JavaScript XML that is transpiled back into JavaScript in the React Library so that browsers can read them. Babel transpiles JSX back into a function call for an HTML element. `React.createElement()`

JSX superficially ressembles HTML and makes it easy for the developer to create page layouts using JavaScript functions and React methods within the JSX tags. JSX elements are immutable. Once created neither the children nor the attributes of the JSX can be changed.

JSX has tags, tag names, attributes and children. React can be written without JSX but it makes the developers' experience much better as the syntax is easy and familiar.

JSX must be enclosed in a parent `div` tag else it will throw a compile error. Sometimes, like in a routing component you may not want a `div` tag rendered, that is when you can use a React Fragment. A React Fragment is a Component that allows you to wrap JSX tags so that a `div` tag is not rendered on the DOM. A fragment is like a ghost element that wraps JSX in tags that removes the adjacent JSX need to be wrapped in a parent div error.

Documentation for JSX[https://reactjs.org/docs/introducing-jsx.html]
Detailed documentation for JSX[https://reactjs.org/docs/jsx-in-depth.html#user-defined-components-must-be-capitalized]

7. What are the advantages of a component-based library?

Components help developers isolate features and build them independently. While one developer works on a nav-bar another can work on buttons, the components can be exported and imported to build a page. Facebook uses over 50,000 components for its user interface. Building smaller components also helps quickly solve and debug problems and test functionality of the component in isolation from the rest of the app before proceeding to end-to-end testing.

8. What is a functional component and when should you use it?

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

9. What is a Class component and when should you use it?

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

Mounting - component iscreated and inserted into DOM
**Methods available**

Invoked in this order

- `constructor()` & `super()` where you intialise and set state and bind events to the class
- `static getDerivedStateFromProps()` rarely used only when state depends on change in props over time
- `render()` - reads `this.props` or `this.state` and renders this to the virtual DOM: not to be confused with ReactDom.render() this is the final render. In this method the component is first rendered then all its children components
- `componentDidMount()` called only once, invoked after component successfully renders on real DOM with all its children (you can call external data with network requests (API calls) in this life-cycle method as it is accessing the DOM and interacting with the DOM)

Update - component re-renders due to changes in props or state
**Methods available**

- `static getDerivedStateFromProps(props, state)` rarely used - returns null or updated state
- `shouldComponentUpdate(nextProps, nextState)` rarely used checks to see if there is a user input and change
- `render()` component re-renders every time there is a change in props or state
- `getSnapshotBeforeUpdate(previousProps, previousState)` tests the snapshot and saves it for next update, rarely used - if you need to capture information from the DOM returns null or as a param to `componentDidUpdate()`
- `componentDidUpdate(previousProps, previousState, snapshot)` confirms the updates have been made also calls any changes to DOM from the previous and current values (can make http calls here advisedly) clean up `setTimeOut()` and `clearIntervals()`

Unmount - successfully rendered on DOM and removed
**Methods available**

- Just one method `componentWillUnmount`

Error Handling - error in rendering constructor of child components
**Methods available**

- `static getDerivedStateFromProps()` checks to see what state is in the error and catches that error to throw an exception handler
- `componentDidCatch` successfully capture the error to help debugging

Detailed documentation of lifecycle methods [https://reactjs.org/docs/react-component.html]

**Higher Order Components**

A higher-order component (HOC) is not part of the React API. It is a React design pattern the HOC take a function that takes a component adds additional functionality and returns a new component.

HOC's are used when the component needs to subscribe to an external source of data.
HOCs do not modify the input component, nor does it use inheritance to copy its behavior. Rather, a HOC composes the original component by wrapping it in a container component. A HOC is a pure function with zero side-effects.

The wrapped component receives all the props of the container, along with a new prop, data, which it uses to render its output. The HOC isn’t concerned with how or why the data is used, and the wrapped component isn’t concerned with where the data came from.

This may be useful if you change data-fetching libraries, for example.

Documentation [https://reactjs.org/docs/higher-order-components.html#:~:text=A%20higher%2Dorder%20component%20(HOC,and%20returns%20a%20new%20component.]

10. What is the meanining of uni-directional data flow in React?

Data can only flow from a parent component to a child component. This top-down data-flow allows data to be passed down as properties of the original component to the nested child components. A child component can not pass data up to the parent component.

11. What is a prop in React?

Properites of a component are also known by the shortened version, props. A prop is all the information about the component that can be dynamically passed down to child components. In this `Hello World()` functional component, the component is imported into a new component - the child component. The child component is given a prop with an attribute called documentation.

```
import React from "react";

import "./App.css";
import HelloWorld from "./components/HelloWorld";


<HelloWorld
        documentation={
          <p>
            This tutorial follows the documentation from the {""}
            <a href="https://reactjs.org/docs/getting-started.html">
              React Documentation
            </a>
          </p>
        }
      />

```

It is the argument for the component `Hello World(props)` and is passed as a function argument. Since it is an object as we have seen, to access this prop we need to use the dot notation of `prop.name` in the component to render it.

```
import React from "react";

export default function HelloWorld(props) {
return (
<div>
<h4>Hello World this is a {props.documentation}</h4>
</div>
);
}
```

As props are objects and we are passing the object as a param of the function `HelloWorld()` we can represent it as an object and just pass it as an object in the JSX element

```
import React from "react";

export default function HelloWorld({ documentation}) {
  return (
    <div>
      <h4>Hello World this is a React Component and this is the {documentation}</h4>
    </div>
  );
}
```

We can update this in a different component as well, all we have to do is change the text in the prop:

```
**Props in Class-based components**
A prop that has been set in a stateful component must be passed down as a parameter in the constructor method. The super calls upon this method and using the `this.props` method accesses the props to be rendered in JSX. When props are passed to a class component, the key word `this` must be used as it is now pointing to a different object, in this case the prop of the instance of the object `ClassComponentWithProps` that has been created from the React Component Library method.

```

import React, { Component } from "react";

export class ClassComponentWithProps extends Component {
constructor(props) {
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
text: {this.state.data} and imported props: {this.props.name}
</h3>
</div>
);
}
}

```

To understand props better, the indepth JSX documentation is useful [https://reactjs.org/docs/jsx-in-depth.html#user-defined-components-must-be-capitalized]
As well as the general documentation on props[https://reactjs.org/docs/components-and-props.html]

**How to use methods as props?**

When a child component wants to communicate to a parent component we use methods as props

1. Create a functional child component

- add the jsx where you want the parent component to be imported

2. Create a class based parent component

- Import the child component
- In state add data that you want displayed in the child component
- Write a lamda function for the logic of what you want displayed in the child component
- In the render method call the function in the imported child component (the lamda function binds this to the function - see section on event handling)

3. Decide where you want to render the parent component

- import the parent component
- render it in the desired component

4. Execute the method in parent component in the child component

- pass the method as a prop to the child component, give the prop a name and assign the method defined in the parent component. **The parent component should look like this**

```

import React, { Component } from "react";

import ChildOfPropMethods from "../eventComponents/ChildOfPropMethods";

export class ClassComponentsWithPropsAsMethods extends Component {
constructor(props) {
super(props);

    this.state = {
      currency: "pounds",
      salary: 5000,
    };

}

calculateSalary = () => {
alert(
`METHOD IN PARENT PASSED AS PROP IN CHILD RENDERED IN A THIRD COMPONENT: Your salary is ${this.state.salary} ${this.state.currency} per year`
);
};

render() {
return (

<div>
<ChildOfPropMethods displaySalary={this.calculateSalary} />
</div>
);
}
}

export default ClassComponentsWithPropsAsMethods;

```

5. Import the props method into the child component

- Pass props as a param of the function
- pass the prop and the defined method into the jsx that you want the method to be displayed in, **the child component should look like this**

```

import React from "react";

function ChildOfPropMethods(props) {
return (

<div>
<button onClick={props.displaySalary}>Click to Get Salary</button>
</div>
);
}

export default ChildOfPropMethods;

```

6. You are rendering the parent component in the component of choice - **the component that you are rendering the app looks like**

```

<div>
    <FunctionalComponent />
      <ClassComponents />
      <Counter />
      <FunctionalComponentClickEvents />
      <ClassComponentClickEvents />
      <ClassComponentsWithPropsAsMethods />
</div>
```

You can also pass params from the child component to the parent component.

1. Change the click function to an arrow function and add a param to the jsx

```
<button
        onClick={() =>
          props.displaySalary("NOTE: TAX HAS NOT BEEN DEDUCTED", "Tax is 40%")
        }
      >
        Click to Get Salary
      </button>
```

2. Assign the params a name and pass them as function param variables. Call the params in the function body.

```
calculateSalary = (param1FromChild, param2FromChild) => {
alert(
`Your salary is ${this.state.salary} ${this.state.currency} per month ${param1FromChild} ${param2FromChild}`
);
};
```

Remember props are immutable therefore if you set these variables in the child component they will be rendered in all modules where the parent component is exported.

**How to use Render Props & HOCs**

Documentation [https://reactjs.org/docs/render-props.html]

**What is the benefit of using props?**

Props is the optional input a component can accept, it makes components dynamic. It keeps code DRY (don't-repeat-yourself) repeating code is inefficient and expensive in run-time.

The component `HelloWorld` is now reusable and dynamic. As functional components are pure functions they return the same result with each component, if you did not have props passed into the component it would always render just what is in the JSX tag.

**What is the benefit of the props.children method?**

Attributes of the component can be passed as props, but children of the parent component can also be rendered with the `props.children` method. Write the children of the component in the component and pass the `props.children` method into the child component (refer to the files in question 14)

**What is the difference between props and state?**

Both props and state hold information that make components more dynamic. There are differences in the way they are accessed and passed from one component to the other.

State is the underlying data in a class-based component and is managed within the component. It is a privately held method in the constructor making it accessible only within the component. It is updated and rendered using life-cyle methods that are native to the React Component Library.

State can be changed with the `setState` method. State is an object and the data can be accessed by `this.state` as it references the state in the class and the key word `this` points specifically to the state in the class component.

Props are additional properties of a component and get passed from a parent component to a child component.

Props are immutable, parent owns the props and can not be changed by the children. They are function parameters and are accessed with `props.propName` while in a class component props need to use the `this` key word to reference the object the prop is pointing to, it is therefore accessed with `this.props.propName`.

State can be accessed with the Hooks API with the `useState` Hook, props have no hooks and are changed within the code-base.

12. How do asynchronous calls to the `setState` method impact the execution of code in a class based component?

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

13. How do you destructure state and props in React?

As props are objects, they can either be passed directly as objects in the param of the function or we can reassign the object to a variable as individual values. Similarly arrays can be passed as array-blocks or each individual element can be assigned to a variable. In this way we can choose what we want use from the individual elements of objects and arrays.
This is known as destructuring. React Hooks uses destructuring of Arrays to access the lifecycle method in state. React also uses Object destructuring for props and state.

In a functional component, props are destructured before the return statement.

```
import React from "react";

export default function HelloWorld(props) {
  <!-- console.log(props) -->
  const { name } = props;
  return (
    <div>
      <h4>Hello World this is a {name}</h4>
    </div>
  );
}
);
};

```

In a class based component the destructuring of props and state happens in the `render` method

```
  render() {
    const { data } = this.state;
    const { name } = this.props;
    return (
      <div>
        <h4>
          Hello World is a class based component state is a string with the
          text: {data} and imported props: {name}
        </h4>
      </div>
    );
  }
}

```

14. How are events handled in React?

In a functional component, the function to call the event is written before the return method and the function is written in as a function in the event attribute. It is not a function call. If you call the function in the attribute then it renders the call in the console and not in the DOM node.

In a class component, calling and binding events in React follow the same principles of binding call-back functions to the class object they point to as in JavaScript. The `this` key word needs to be bound to the constructor method. If not there are unintended side effects.

There are three ways to do this - explictly bind it in the constructor

```
export class ClassComponentClickEvents extends Component {
  constructor() {
    super();

    this.state = {
      message: "CHANGE ME",
      toggleOn: true,
    };
    this.handleToggle = this.handleToggle.bind(this);
  }
```

ES6 arrow functions bind the lexical this to the function it is calling. However, if this callback is passed as a prop to lower components, those components might do an extra re-rendering and is not recommended though it may work.

```
<!-- Syntax with lamda functions not recommended -->
 <button onClick={() => this.handleToggle()}>
          {this.state.ToggleOn ? "Toggle On" : "Toggle Off"}
        </button>

<!-- Syntax when you bind this to the constructor - recommended -->
        <button onClick={this.handleToggle}>
          {this.state.ToggleOn ? "YES?" : "NO!"}
        </button>
```

The better way to use the lambda function and bind `this` is in the function that is written to be passed into the event handler. There are two ways of writing the function. You do not need to bind `this` with the lambda function in the constructor in the second instance, but for the fist you do.

```
 handleToggle() {
    this.setState((state) => ({
     ToggleOn: !state.ToggleOn,
     }));
   }
   <!-- lamda function binds this -->
  handleToggle = () => {
    console.log("this is:", this);
    this.setState((state) => ({
      ToggleOn: !state.ToggleOn,
    }));
  };
  <!-- in the render method remove the lamda function and call the function in the render method like so -->

    <button onClick={this.handleToggle}>
          {this.state.ToggleOn ? "YES?" : "NO!"}
        </button>
```

**Preventing the default behaviour of events:**

The default behaviour of an event is to render the event immediately. To prevent this behaviour the method `e.prevent.default()` is called in React to prevent this behaviour and to get the code to compile in the virtual DOM first. Here `e` or `event` is a synthetic event.
Documentation [https://reactjs.org/docs/handling-events.html]

15. What are the four React design patterns for conditional rendering?

- using element variables - with imported components
- using conditional statements - if/ if-else/ switch statements
- using the ternery operator - shorter way of expressing if-else
- using the double amperestand - return something or nothing
  Documentation: [https://reactjs.org/docs/conditional-rendering.html]

16. How do you render components using map & filter array methods?
    Documentation MDN for array map method [https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map]

Mapping through an array is method performed on the Array Prototype (or the class Array)
that takes as a param a call-back function.

```
let arrayOfNumbers = ["1", "2","3" ]

<!-- ES6 - method with call back function body logic MDN syntax -->
arrayOfNumbers.map(number => number * 2)

<!-- or -->

arrayOfNumbers.map((number)=>{number*2})
<!-- output returned [newarray with function body logic] -->

Syntax
let new_array = arr.map(function callback( currentValue[, index[, array]]) {
    // return element for new_array
}[, thisArg])

```

In React the call back function body returns JSX elements - they could be `p` tags, `li` tags, `div` tags depending on what you want to do with the method's output.

Here the array we want to map through returns each number in the element in a `li` tag. We then pass the variable in the JSX to render it. The cleaner way to write the code is to write the map logic above the return statement and assign it to a variable and pass the variable in.

```
import React from "react";

function MapNumbers() {
  const numbers = [1, 2, 3, 4];
  const listNumbers = numbers.map((eachNumber, index) => <li key={index}>{eachNumber}</li>);
  return (
    <div>
      <li>{listNumbers}</li>
    </div>
  );
}

export default MapNumbers;
```

Another way to write this code is within the JSX - here we are mapping through the array and returning in a `p` tag each name in the array.

```
import React from "react";

function MapNames() {
  const names = ["Ram", "Sita", "Lakshman", "Hanuman"];

  return (
    <div>
      {names.map((eachName, index) => (
        <p key={index}>{eachName}</p>
      ))}
    </div>
  );
}

export default MapNames;

```

Using the index param in the map function can only be used when all these 3 conditions have been fulfilled

1. There is no other unique identifier that can be used as the key
2. What you are rendering is not going to be sorted or filtered or changed
3. The list will never change and is static

When mapping an object in hard-coded data this becomes obvious. Using index as a key should be used as a last resort. You need to use a key prop with an id/ a unique identifier where possible.

In the mock list data that we have hard-coded in the MockData component, the mockListData is an array with nested objects `mockListData = [{}, {}, {}]` that we have assigned to a variable to call in the map method.

The map method we write is exported to a functional component MapObjects that will only run the logic of the map method which is to render the items in the list we require in the JSX element specified by the function body.

We do not write the second param of map as index as we are not going to use index as a key.

Instead we are going to use key as a prop of the functional MapObjects Component in which our map method is rendered. We will pass in the id from the mockListData array of objects, using dot notation. We will also pass our data that has been mapped as a second prop to the MapObjects Component.

We keep the return of the new array from the function body in the MockData component.

```
 const mockList = mockListData.map((data) => (

    <!-- JSX is moved to a functional component called Map Objects

    <h5>
     Employee Name:{data.name} Contact details (P): {data.phone} (E):
      {data.email}
     </h5>
     -->

    <MapObjects data={data} key={data.id} />
  ));
  return <div>{mockList}</div>;
```

This is what our functional component, MapObjects looks like. It takes props passed as a destructed method as a param and access the individual items in the object with dot notation rendering only those key-value pairs we want to render in the JSX using the id as the identifier to explictly order the rendering of the object keys with their associated values.

There is no need to add the key to the `h5` tag in this component.

```
import React from "react";

function MapObjects({ data }) {
  return (
    <div>
      <h4>Mapping object data</h4>
      <h5>
        Employee Name:{data.name} Contact details (P): {data.phone} (E):
        {data.email}
      </h5>
    </div>
  );
}

export default MapObjects;
```

The documentation provides good examples of how to use the key prop [https://reactjs.org/docs/lists-and-keys.html] scroll down to the extracting components with keys section

You can also embedd the map method into a jsx element in the render method.

17. How are forms in React different from forms in HTML?

Forms in HTML hold state and inputs are rendered immediately. In React state is held in class-based components.

When the user changes the input of the form input field, the state of the JSX element changes and this needs to be captured. This is where you write your `this.state.inputValue` which is the initial state of the JSX element.

Bespoke methods are written - for example `handleInputChange()` which captures every key-stroke in the input and sets the new state of the input in the value field.

This user event (changes to state) is captured with a synthetic `event.target.value` which captures the changing values of the JSX element. State is now reset with the `setState()` method in the callback function of the `handleInputChange` to the change event in the JSX element's (the target) value attribute.

This is sent back to the state object and state is updated on the input change.

18. How do you create links and route pages on the front-end?

- The react-router-dom that you install is not the only router option that you can use
- Add packages `npm install react-router react-router-dom`
- Import the library `import { BrowserRouter, Route, Switch } from "react-router-dom";` into the `App.js` file add all the routing - enclose them in the `Switch` and `BrowserRouter` components, one routes and the other switches routes. It is useful to use React Fragment here - import the component at the top and use `import React, { Fragment } from "react"` after the `Switch` component.

```
<BrowserRouter>
        <Switch>
        <Fragment>
          <div className="App">
            <Route exact path="/" component={HelloWorld} />
            <TableOfContentsBar />
            <Route path="/components" component={ReactComponents} />
               </Fragment>
        </Switch>
    </BrowserRouter>
```

- In the nav panel or the pages where you want links `import { Link } from "react-router-dom";` import the component from the library and use the same route path so that the components link to each other.

```
<div className="table-of-contents">
      <Link to="/" className="toc-item">
        <h6>Home</h6>
      </Link>

      <ol>
        <Link to="/components" className="toc-item">
          <li>What is a component in React?</li>
        </Link>
      </ol>

    </div>
```

19. How do REST API calls work in React?
    **HTTP LIBRARIES**
    Use a HTTP-library as React has no concept of back-end data. Components merely render state and props.

    To use Axios as a library `npm install axios`.
    Documentation [https://www.npmjs.com/package/axios#response-schema]
    More reading log-rocket blog:
    [https://blog.logrocket.com/how-to-make-http-requests-like-a-pro-with-axios/]
    A good cheat sheet [https://kapeli.com/cheat_sheets/Axios.docset/Contents/Resources/Documents/index]

The Axios library is a HTTP-runner that works with React/ JavaScript and has the REST-API methods

This is how the component should look at the end - the console logs show you all the available data that you can see.

```
import React, { Component } from "react";
import axios from "axios";

export default class GetAndPostData extends Component {
  constructor(props) {
    super(props);

    this.state = {
      persons: [],
      name: "",
    };
  }
<!--
REACT METHOD - NEST Axios methods here

  componentDidMount() {

      this.setState({ persons: response.data });

  }

RETRIEVE DATA - request is the url, response is the call back promise
  axios.get (request, response){

  } -->
  componentDidMount() {
    axios
      .get(`https://jsonplaceholder.typicode.com/users`)
      .then((response) => {
        <!-- ALL THE AVAILABLE LOGS FROM THE RESPONSE
        console.log(`res`, response);
        console.log(`res.status`, response.status);
        console.log(`res.statusText`, response.statusText);
        console.log(`res.headers`, response.headers);
        console.log(`res.config`, response.config);
        -->
        this.setState({ persons: response.data });
      })
      <!-- PROVIDES BETTER INFORMATION ON THE ERROR -->
      .catch((error) => console.log(error.toJSON()));
  }

  <!-- ADD DATA EVENT HANDLERS -->
  handleTextInputChange = (event) => {
    this.setState({
      name: event.target.value,
    });
  };
<!-- THE SUBMIT ACTION SENDS THE DATA BACK TO THE SERVER -->
  handleSubmit = (event) => {
    event.preventDefault();
    <!--YOU CAN TEST THIS IS WORKING BEFORE SENDING TO SERVER alert(`${this.state.name}`); -->
    const user = {
      name: this.state.name,
    };
    axios
      .post(`https://jsonplaceholder.typicode.com/users`, { user })
      .then((response) => {
        console.log(response);
        console.log(response.data);
      })
      .catch((error) => console.log(error.toJSON()));
  };

  render() {
    const { name } = this.state;
    const personList = this.state.persons.map((person) => (
      <ul key={person.id}>
        <li>
          ({person.id}) : {""}
          {person.name}
        </li>
      </ul>
    ));
    return (
      <div>
        <h4>API calls with with the Axios (HTTP) library</h4>
        <p>See data calls by opening Google Developer Tools Console</p>
        <div>
          <p>axios.get() retrieves data from DB</p>
          <ul>
            <li>{personList}</li>
          </ul>
        </div>
        <h4>CRUD - Create, UpdateById, DeleteById</h4>
        <p>
          CREATE: axios.post(): Creates user generated data and sends it to DB
        </p>
        <form onSubmit={this.handleSubmit}>
          <label>Add new user</label>
          <input
            type="text"
            placeholder="Add user name here"
            value={name}
            onChange={this.handleTextInputChange}
          />
          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
}

```

Update and Delete require you to pass the user-id to be access the data and successfully update or delete. The update or put method is often confused with the post method but they are very different.

**Post versus Put**

- Post creates a brand new record
- Put updates an already existing record
- Post creates a new id for the record
- Put accesses an existing id for the record and updates incorrect details
- Post inserts new data into the DB
- Put replaces an existing peice of data with new information

This is how a put request should look like

```
import React, { Component } from "react";
import axios from "axios";

export default class UpdateById extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "",
      id: 0,
    };
  }

  <!-- UPDATE DATA - select id and data to be updated: -->
  handleChangeUpdateUserById = (event) => {
    this.setState({
      id: event.target.value,
      name: event.target.value,
    });
  };
  handleChangeUpdateUserName = (event) => {
    this.setState({
      name: event.target.value,
    });
  };

  handleSubmitUpdateUserById = (event) => {
    event.preventDefault();
    const userUpdate = {
      id: this.state.id,
      name: this.state.name,
    };
    axios
      .put(`https://jsonplaceholder.typicode.com/users/${this.state.id}`, {
        userUpdate,
      })
      .then((response) => {
        <!--
        USEFUL FOR DEBUGGING
        console.log(response);
        console.log(response.data);
        console.log(`res.headers`, response.headers);
        -->
      })
      .catch((error) => console.log(error.toJSON()));
  };

  render() {
    const { name, id } = this.state;
    console.log(this.state);
    return (
      <div>
        <p>UPDATE: axios.put(): Identifies by id & updates input</p>
        <form onSubmit={this.handleSubmitUpdateUserById}>
          <label>Select user Id</label>
          <input
            type="number"
            placeholder="Select user"
            value={id}
            onChange={this.handleChangeUpdateUserById}
          />
          <label>Change User Name</label>
          <input
            type="text"
            placeholder="Type Updated User Details"
            value={name}
            onChange={this.handleChangeUpdateUserName}
          />
          <button type="update">Click to Update</button>
        </form>
      </div>
    );
  }
}
```

Delete is a method to be used advisedly, either for GDPR purposes when a user wants data permanently deleted or if data is truly outdated. This is an irreversible action. APIs like the `jsonPlaceholder` allow you to test these end-points without actually updating or deleting data. You will get a 200 response if the call works but the data is not actually changed. With delete unlike update, no data is being inserted back into the database so the creation of a user is not required. The component should look like this.

```
import React, { Component } from "react";
import axios from "axios";

export default class GetAndPostData extends Component {
  constructor(props) {
    super(props);

    this.state = {
      id: 0,
    };
  }

  handleDeleteIdChange = (event) => {
    this.setState({
      id: event.target.value,
    });
  };

  handleDeleteIdSubmit = (event) => {
    event.preventDefault();
    axios
      .delete(`https://jsonplaceholder.typicode.com/users/${this.state.id}`)
      .then((response) => {
        console.log(response);
        console.log(response.data);
      })
      .catch((error) => console.log(error.toJSON()));
  };

  render() {
    const { id } = this.state;
    return (
      <div>
        <p>DELETE: axios.delete(): Finds user Id and deletes user in DB</p>
        <form onSubmit={this.handleDeleteIdSubmit}>
          <label>Select User Id to Delete</label>
          <input
            type="number"
            placeholder="Select id to delete user"
            value={id}
            onChange={this.handleDeleteIdChange}
          />
          <button type="delete">Delete</button>
        </form>
      </div>
    );
  }
}
```

Code can be refactored by putting all the calls into separate components and importing them into the component that fetches the data.

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

**Tutorials that are useful to follow**
You Tube videos on React by Code Evolution - Vishwas [https://www.youtube.com/watch?v=QFaFIcGhPoM&list=PLC3y8-rFHvwgg3vaYJgHGnModB54rxOk3&index=1][https://api.github.com/users]
