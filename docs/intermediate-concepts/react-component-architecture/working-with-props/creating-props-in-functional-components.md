

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