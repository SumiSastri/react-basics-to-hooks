import React, { Component } from "react";

import ChildOfClassWithPropMethods from "../classComponents/ChildOfClassWithPropMethods";

export class ClassComponentsWithPropsAsMethods extends Component {
  constructor(props) {
    super(props);

    this.state = {
      currency: "pounds",
      salary: 5000,
    };
  }

  calculateSalary = (param1FromChild, param2FromChild) => {
    alert(
      ` This method is written in the parent class component and rendered as an alert. Your salary is ${
        this.state.salary * 12
      } ${
        this.state.currency
      } per annum  ${param1FromChild} (The note on tax is the first param passed from child to parent) ${param2FromChild} (This is the second param passed from child to parent)`
    );
  };

  render() {
    return (
      <div>
        <h4>
          Example 5 Parent component: defines state and the method, gets args
          from child
        </h4>
        <p>
          Passing props in class components follow the same steps - define props
          in the parent component and pass them to the child as an attribute.
          <li>
            Step 1 - child component created to render a displaySalary method
          </li>
          <li>
            Step 2 - parent component created, this is the parent with state
            data that will be used to calculate salary
          </li>
          <li>
            Step 3 - the child component imported into the parent component
          </li>
          <li>
            Step 4 - the child component args imported into the parent component
            as props in the constructor method for the calculateSalary method
            that will be written in the parentComponent
          </li>
          <li>
            Step 5 - calculateSalary method using the <em>this</em> key word to
            bind the method to the class component it points to, is passed as
            the attribute value of the attribute key (which is a method) called
            displaySalary.
          </li>
          <li>
            Step 6 - displaySalary method now can be used by importing them as
            props, in the functional component's args from the parent. To render
            the method in JSX, the keyword props.displaySalary is used in the
            button JSX's event-handler.
          </li>
        </p>
        <ChildOfClassWithPropMethods displaySalary={this.calculateSalary} />
      </div>
    );
  }
}

export default ClassComponentsWithPropsAsMethods;
