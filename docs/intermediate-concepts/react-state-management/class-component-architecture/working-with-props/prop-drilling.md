# Prop-drilling and challenges with state-management

**What is props drilling?**
**What is props drilling?**

With the uni-directional flow of data with React (data must flow from parent to child component), props need to be passed down to all the nested components. 

If in a component tree only a few components need props from the parent at the top of the tree, every single component branch on the way down to the components that require the prop need the props manually passed down. This is called prop drilling.

So to render a card from a list the home component holds state of the card in the class component. 

The list component is imported into the home component and props of the state passed to the list. 

The list component renders the whole list. 

The list imports the card component that takes all the props of the list. 

If the props that the card needs from the home component are not passed to the list component, the card component will not have access to state and will not render elements that require props of the state object.

**What is the props.children method?**

`props.children` and the deconstructured `children` are reserved key words and can not be used to define props. When you want to render more than one prop of a child component or different props in different child components then this method comes handy.

# HOW-TO-GUIDE WITH PROPS

## HOW TO CREATE PROPS WITH FUNCTIONAL COMPONENTS

**Step1**
Create the child component
**Step2**
Create the parent component - import the child component into the parent
**Step3**
Create the properties for the child component in the parent component
**Step4**
Pass the properties from the parent component to the child component
**Step5**
Destructure the properties in the child component

**Props in functional components**
Below is the parent component - `app.js` that imports the child functional component `<HelloWorld/>` and sets the attributes of the properties as a JSX expression `<HelloWorld documentation={}/>` These properties now can be imported back into child, grandchild and other nested components.

**Step2\*\***Step3\*\*

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

Props are objects, so when we import the property documentation back into the HelloWorld component, as the HelloWorld component is a function, properties or props is passed as a function argument. Now to access the prop, which is an object, we use dot notation and access it as a child JSX object.

**Step1\*\***Step4\*\*

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

**Step5**
We can now destructure the object further getting rid of the props argument and replacing it with an argument that is the original object we are calling as the function argument - which is documentation.

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

## HOW TO USE THE PROPS.CHILDREN METHOD WITH FUNCTIONAL COMPONENTS

**Step1**
Create the child component
**Step2**
Import the child component into 2 different parent components
**Step3**
Create the properties for each of the instances of the child components in each of the parent components
**Step4**
Pass named properties from the parent components to the child and use props.children to render
**Step5**
Destructure the child properties in the child component with a comma or spread operator and use the children key word.

**Step1 Create Child component**

**Step4 & 5 Pass named properties from the parent and render if required or just pass children destructured and render children as an expression**

```
import React from "react";

function GrandChild2({ description, children }) {
  return (
    <div>
      <h3>I am GrandChild2{description}</h3>
      <p>I want my children to be rendered{children}</p>
    </div>
  );
}

export default GrandChild2;
```

**Step2 Two Parents for the same child**

PARENT ONE **Step3 Create properties for GrandChild2 in enclosing div tags they will not be rendered till the children prop is passed from parent to child**

```
import React from "react";

import GrandChild1 from "../propTreeFunctionalComponents/GrandChild1";
import GrandChild2 from "../propTreeFunctionalComponents/GrandChild2";

function Child2({ duplicateForChildren }) {
  return (
    <div>
      <h2>Child-2{duplicateForChildren}</h2>
      <GrandChild1 instrument="I play the violin" />
      <GrandChild2>
        <div>
          <p>There are no children props to render here</p>
        </div>
      </GrandChild2>
    </div>
  );
}

export default Child2;
```

PARENT TWO **Step3 Create properties for GrandChild2 in enclosing div tags they will not be rendered till the children prop is passed from parent to child**

```
import React from "react";

import GrandChild2 from "../propTreeFunctionalComponents/GrandChild2";
import GrandChild5 from "../propTreeFunctionalComponents/GrandChild5";

function Child3({ nested }) {
  return (
    <div>
      <h2>Child-3{nested}</h2>
      <GrandChild2 description="I am 5m tall">
        <div>
          <p>Rendering children of props of GrandChild2</p>
        </div>
      </GrandChild2>
      <GrandChild5 height="I am 2m tall" />
    </div>
  );
}

export default Child3;
```

**Props in Class-based components**
A prop that has been set in a stateful component must be passed down as a parameter in the constructor method.

The super calls upon this method and using the `this.props` method accesses the props to be rendered in JSX.

When props are passed to a class component, the key word `this` must be used as it is now pointing to a different object, in this case the prop of the instance of the object `ClassComponentWithProps` that has been created from the React Component Library method.

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

**Higher Order Components**

A higher-order component (HOC) is not part of the React API. It is a React design pattern the HOC take a function that takes a component adds additional functionality and returns a new component.

HOC's are used when the component needs to subscribe to an external source of data.
HOCs do not modify the input component, nor does it use inheritance to copy its behavior. Rather, a HOC composes the original component by wrapping it in a container component. A HOC is a pure function with zero side-effects.

The wrapped component receives all the props of the container, along with a new prop, data, which it uses to render its output. The HOC isn’t concerned with how or why the data is used, and the wrapped component isn’t concerned with where the data came from.

This may be useful if you change data-fetching libraries, for example.

Documentation [https://reactjs.org/docs/higher-order-components.html#:~:text=A%20higher%2Dorder%20component%20(HOC,and%20returns%20a%20new%20component.]

**How to use Render Props & HOCs**

Documentation [https://reactjs.org/docs/render-props.html]

This is a demo of the Context API
To make the access of props easier the Context API has methods that you can use - wrapping the parent compnent in a provider and the child component in a consumer. The consumer method takes in the prop in the provider as a parameter and renders it as an expression in the appropriate JSX element

Component C nests Component E
There is no need to pass the prop through every intermediate nested component. This is the main advantage of the provider and consumer methods. Only the child prop that needs the prop consumes it.

Component E nests component F
Another way to pass props is by using the contextType property. This is passed just above the export default of the component or as a static type before the render method. Both options work. This works only with class components. Only one context can be consumed with this method.

The context is rendered here as This is the prop from the user provider - User Name 1

Component F can render props from Component C with Context API:
This is the prop from the user provider - User Name 1

This is the recommended way as you can consume several contexts with this method.

**How do you destructure state and props in React?**

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