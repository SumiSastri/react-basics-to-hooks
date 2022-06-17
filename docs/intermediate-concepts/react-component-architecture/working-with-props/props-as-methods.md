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

