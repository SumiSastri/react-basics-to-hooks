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
        <h4>Example 5: Props can also be methods.</h4>
        <p>
          This is the parent component. The displaySalary() method is written in
          this component and passed to the child using the <em>this</em> key
          word.
        </p>
        <ChildOfClassWithPropMethods displaySalary={this.calculateSalary} />
      </div>
    );
  }
}

export default ClassComponentsWithPropsAsMethods;
