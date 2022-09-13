import React, { Component } from "react";

import ChildOfClassWithPropMethods from "./ChildOfClassWithPropMethods";

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
      ` The calculateSalary() method is written in the parent component - caculating salary in a named currency. Your salary is ${
        this.state.salary * 12
      } ${
        this.state.currency
      } per annum. When the button is clicked the method is rendered in the child component`
    );
  };

  render() {
    return (
      <div>
        <br/>
        <h4>Example 5: Props can also be methods.</h4>
        <p>
          This is the parent component. A function called calculateSalary() is written as
          the function declaration in this component.
          
          In the child component, the property displaySalary() is a call back function
          that calls the calculateSalary() method. As it is in a JavaScript class the
          callback must use the <em>this</em> key word to invoke the calculateSalary()
          function.

          To display this function's result in the child component, props are passed from the parent
          to the child component and the <em>props</em> key word is used to render the method in the
          child component.
        </p>
        <ChildOfClassWithPropMethods displaySalary={this.calculateSalary} />
      </div>
    );
  }
}

export default ClassComponentsWithPropsAsMethods;
